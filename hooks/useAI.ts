import { useState, useCallback } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { getAlerts, createAlert, markAlertAsRead, markAllAlertsAsRead, getUnreadAlertCount } from '@/lib/api/alerts'
import { getDailyRecords } from '@/lib/api/daily-records'
import { getHealthLogs } from '@/lib/api/health-logs'
import type { AIAlert, AIAlertInput, DailyRecord, WeeklyDataPoint } from '@/types'

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ''
)

const model = genAI.getGenerativeModel({
  model: 'models/gemini-1.5-flash-latest'
})

interface AIResponse {
  success: boolean
  response?: string
  error?: string
}

function formatRecordsForAI(records: DailyRecord[]): string {
  if (records.length === 0) return 'No historical data available yet.'
  
  return records.slice(0, 10).map(record => 
    `Date: ${record.record_date}, Feed: ${record.feed_bags_used} bags (₦${record.feed_cost}), Loss: ${record.mortality_count}, Eggs: ${record.production_amt}, Sales: ₦${record.sales_amount}`
  ).join('\n')
}

function analyzeTrends(records: DailyRecord[]): AIAlertInput[] {
  const alerts: AIAlertInput[] = []
  
  if (records.length < 3) return alerts
  
  const recent = records.slice(0, 3)
  const previous = records.slice(3, 6)
  
  if (previous.length === 0) return alerts
  
  const avgMortalityRecent = recent.reduce((sum, r) => sum + r.mortality_count, 0) / recent.length
  const avgMortalityPrevious = previous.reduce((sum, r) => sum + r.mortality_count, 0) / previous.length
  
  if (avgMortalityRecent > avgMortalityPrevious * 2 && avgMortalityRecent > 2) {
    alerts.push({
      farmer_id: records[0].farmer_id,
      alert_type: 'mortality',
      title: '⚠️ Mortality Spike Detected',
      message: `Mortality has increased from average ${avgMortalityPrevious.toFixed(1)} to ${avgMortalityRecent.toFixed(1)} birds. Consider checking for disease or environmental issues.`,
      severity: 'critical'
    })
  }
  
  const avgProductionRecent = recent.reduce((sum, r) => sum + r.production_amt, 0) / recent.length
  const avgProductionPrevious = previous.reduce((sum, r) => sum + r.production_amt, 0) / previous.length
  
  if (avgProductionPrevious > 0 && avgProductionRecent < avgProductionPrevious * 0.8) {
    alerts.push({
      farmer_id: records[0].farmer_id,
      alert_type: 'production',
      title: '📉 Production Drop Alert',
      message: `Egg production has dropped by ${((1 - avgProductionRecent/avgProductionPrevious) * 100).toFixed(0)}%. Check feed quality and lighting conditions.`,
      severity: 'warning'
    })
  }
  
  const avgFeedCostRecent = recent.reduce((sum, r) => sum + r.feed_cost, 0) / recent.length
  if (avgFeedCostRecent > 50000) {
    alerts.push({
      farmer_id: records[0].farmer_id,
      alert_type: 'feed_cost',
      title: '💰 High Feed Costs',
      message: `Average daily feed cost is ₦${avgFeedCostRecent.toFixed(0)}. Consider bulk purchasing or exploring alternative suppliers.`,
      severity: 'info'
    })
  }
  
  const lastRecordDate = new Date(records[0].record_date)
  const daysSinceLastRecord = Math.floor((Date.now() - lastRecordDate.getTime()) / (1000 * 60 * 60 * 24))
  
  if (daysSinceLastRecord >= 3) {
    alerts.push({
      farmer_id: records[0].farmer_id,
      alert_type: 'general',
      title: '📝 Missing Daily Records',
      message: `You haven't logged any records for ${daysSinceLastRecord} days. Regular logging helps AI provide better insights.`,
      severity: 'info'
    })
  }
  
  return alerts
}

function formatWeeklyData(weeklyData: WeeklyDataPoint[]): string {
  if (weeklyData.length === 0) return 'No weekly data available.'
  
  return weeklyData.map(d => 
    `${d.dayName} (${d.date}): ${d.eggs} eggs, ${d.feed}kg feed`
  ).join('\n')
}

export function useAI(farmerId: string | null) {
  const [loading, setLoading] = useState(false)
  const [alertCount, setAlertCount] = useState(0)
  
   const getAIAdvice = useCallback(async (question: string, records: DailyRecord[], weeklyData: WeeklyDataPoint[]): Promise<AIResponse> => {
     if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
       return { success: false, error: 'AI API key not configured' }
     }
     
     setLoading(true)
     
     try {
       // Test connection
       const test = await model.generateContent("Say 'AI connected successfully'");
       console.log(test.response.text());
       
       const historyString = formatRecordsForAI(records)
       const weeklyString = formatWeeklyData(weeklyData)
       
       const prompt = `
         You are an expert Poultry Consultant. Analyze the following 7-day production data:
         ${weeklyString}
         
         Look for trends in egg production, feed consumption, and mortality. If production is dropping or mortality is rising, provide a concise, 2-sentence diagnosis for a farmer in Nigeria.
         
         FARM DATA HISTORY:
         ${historyString}
         
         FARMER'S QUESTION: "${question}"
         
         INSTRUCTIONS: 
         - Keep answer under 100 words
         - Use professional, expert yet encouraging tone
         - If data is empty, provide general poultry startup advice
         - Include specific Nigerian market prices when relevant
       `
       
       const result = await model.generateContent(prompt)
       const response = await result.response
       
       setLoading(false)
       return { success: true, response: response.text() }
     } catch (err: unknown) {
       setLoading(false)
       const message = err instanceof Error ? err.message : 'AI request failed'
       return { success: false, error: message }
     }
   }, [])
  
  const generateProactiveAlerts = useCallback(async (farmerId: string): Promise<AIAlertInput[]> => {
    try {
      const [records, healthLogs] = await Promise.all([
        getDailyRecords(farmerId, 10),
        getHealthLogs(farmerId, 5)
      ])
      
      const trendAlerts = analyzeTrends(records)
      
      for (const alert of trendAlerts) {
        await createAlert({ ...alert, farmer_id: farmerId })
      }
      
      if (healthLogs.some(log => log.action.toLowerCase().includes('disease') || log.action.toLowerCase().includes('sick'))) {
        const diseaseAlert: AIAlertInput = {
          farmer_id: farmerId,
          alert_type: 'health',
          title: '🏥 Health Issue Logged',
          message: 'A health issue was recorded. Consider scheduling a vet visit and monitor affected birds closely.',
          severity: 'warning'
        }
        await createAlert(diseaseAlert)
      }
      
      return trendAlerts
    } catch (err) {
      console.error('Failed to generate alerts:', err)
      return []
    }
  }, [])
  
  const fetchAlerts = useCallback(async () => {
    if (!farmerId) return []
    return await getAlerts(farmerId)
  }, [farmerId])
  
  const fetchUnreadCount = useCallback(async (): Promise<number> => {
    if (!farmerId) return 0
    return await getUnreadAlertCount(farmerId)
  }, [farmerId])
  
  const markAsRead = useCallback(async (alertId: string) => {
    await markAlertAsRead(alertId)
    const count = await fetchUnreadCount()
    setAlertCount(count)
  }, [fetchUnreadCount])
  
  const markAllRead = useCallback(async () => {
    if (!farmerId) return
    await markAllAlertsAsRead(farmerId)
    setAlertCount(0)
  }, [farmerId])
  
  const checkAndGenerateAlerts = useCallback(async () => {
    if (!farmerId) return
    const currentCount = await fetchUnreadCount()
    setAlertCount(currentCount)
    
    if (currentCount === 0) {
      await generateProactiveAlerts(farmerId)
      const newCount = await fetchUnreadCount()
      setAlertCount(newCount)
    }
  }, [farmerId, fetchUnreadCount, generateProactiveAlerts])
  
  return {
    loading,
    alertCount,
    getAIAdvice,
    fetchAlerts,
    fetchUnreadCount,
    markAsRead,
    markAllRead,
    checkAndGenerateAlerts,
    generateProactiveAlerts
  }
}