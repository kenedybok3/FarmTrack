import { supabase } from '@/lib/supabase'
import type { DailyRecord, DailyRecordInput, FarmStats } from '@/types'

export async function createDailyRecord(record: DailyRecordInput) {
  const { data, error } = await supabase
    .from('daily_records')
    .insert([record])
    .select()
    .single()

  if (error) throw error
  return data as DailyRecord
}

export async function getDailyRecords(farmerId: string, limit = 30) {
  const { data, error } = await supabase
    .from('daily_records')
    .select('*')
    .eq('farmer_id', farmerId)
    .order('record_date', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data as DailyRecord[]
}

export async function getLatestDailyRecord(farmerId: string) {
  const { data, error } = await supabase
    .from('daily_records')
    .select('*')
    .eq('farmer_id', farmerId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error && error.code !== 'PGRST116') throw error
  return data as DailyRecord | null
}

export async function updateDailyRecord(id: string, updates: Partial<DailyRecordInput>) {
  const { data, error } = await supabase
    .from('daily_records')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as DailyRecord
}

export async function deleteDailyRecord(id: string) {
  const { error } = await supabase
    .from('daily_records')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function getFarmStats(farmerId: string): Promise<FarmStats> {
  const records = await getDailyRecords(farmerId, 100)
  
  const totalSales = records.reduce((sum, r) => sum + (r.sales_amount || 0), 0)
  const totalMortality = records.reduce((sum, r) => sum + (r.mortality_count || 0), 0)
  const totalProduction = records.reduce((sum, r) => sum + (r.production_amt || 0), 0)
  const totalFeedCost = records.reduce((sum, r) => sum + (r.feed_cost || 0), 0)
  
  return {
    totalSales,
    totalMortality,
    avgProduction: records.length > 0 ? totalProduction / records.length : 0,
    totalFeedCost
  }
}

export async function getRecordsByDateRange(farmerId: string, startDate: string, endDate: string) {
  const { data, error } = await supabase
    .from('daily_records')
    .select('*')
    .eq('farmer_id', farmerId)
    .gte('record_date', startDate)
    .lte('record_date', endDate)
    .order('record_date', { ascending: true })

  if (error) throw error
  return data as DailyRecord[]
}