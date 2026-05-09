import { useState, useEffect, useCallback } from 'react'
import { getDailyRecords, createDailyRecord, deleteDailyRecord, getFarmStats } from '@/lib/api/daily-records'
import { getHealthLogs, createHealthLog, deleteHealthLog } from '@/lib/api/health-logs'
import { getExpenses, createExpense, deleteExpense, getTotalExpenses } from '@/lib/api/expenses'
import { getBatches, createBatch, updateBatchCount, deleteBatch } from '@/lib/api/batches'
import { getInventory, createInventoryItem, updateInventoryQuantity, deleteInventoryItem } from '@/lib/api/inventory'
import type { DailyRecord, DailyRecordInput, HealthLog, Expense, Batch, Inventory, FarmStats } from '@/types'

interface FarmDataState {
  records: DailyRecord[]
  healthLogs: HealthLog[]
  expenses: Expense[]
  batches: Batch[]
  inventory: Inventory[]
  stats: FarmStats | null
  totalExpenses: number
  loading: boolean
  error: string | null
}

const DEMO_RECORDS: DailyRecord[] = [
  { id: 'demo-1', farmer_id: 'demo', feed_bags_used: 5, feed_cost: 2500, mortality_count: 0, production_amt: 85, sales_amount: 17000, record_date: '2026-04-28', created_at: '2026-04-28T00:00:00Z' },
  { id: 'demo-2', farmer_id: 'demo', feed_bags_used: 6, feed_cost: 3000, mortality_count: 1, production_amt: 92, sales_amount: 18400, record_date: '2026-04-29', created_at: '2026-04-29T00:00:00Z' },
  { id: 'demo-3', farmer_id: 'demo', feed_bags_used: 5, feed_cost: 2500, mortality_count: 0, production_amt: 88, sales_amount: 17600, record_date: '2026-04-30', created_at: '2026-04-30T00:00:00Z' },
  { id: 'demo-4', farmer_id: 'demo', feed_bags_used: 7, feed_cost: 3500, mortality_count: 2, production_amt: 78, sales_amount: 15600, record_date: '2026-05-01', created_at: '2026-05-01T00:00:00Z' },
  { id: 'demo-5', farmer_id: 'demo', feed_bags_used: 6, feed_cost: 3000, mortality_count: 0, production_amt: 95, sales_amount: 19000, record_date: '2026-05-02', created_at: '2026-05-02T00:00:00Z' },
  { id: 'demo-6', farmer_id: 'demo', feed_bags_used: 5, feed_cost: 2500, mortality_count: 1, production_amt: 82, sales_amount: 16400, record_date: '2026-05-03', created_at: '2026-05-03T00:00:00Z' },
  { id: 'demo-7', farmer_id: 'demo', feed_bags_used: 6, feed_cost: 3000, mortality_count: 0, production_amt: 90, sales_amount: 18000, record_date: '2026-05-04', created_at: '2026-05-04T00:00:00Z' },
]

const DEMO_BATCHES: Batch[] = [
  { id: 'demo-batch-1', farmer_id: 'demo', batch_name: 'Layer Batch A', animal_type: 'Layers', initial_count: 100, current_count: 95, acquired_date: '2026-01-15', created_at: '2026-01-15T00:00:00Z' },
  { id: 'demo-batch-2', farmer_id: 'demo', batch_name: 'Broiler Batch B', animal_type: 'Broilers', initial_count: 50, current_count: 48, acquired_date: '2026-03-01', created_at: '2026-03-01T00:00:00Z' },
]

const DEMO_INVENTORY: Inventory[] = [
  { id: 'demo-inv-1', farmer_id: 'demo', item_name: 'Layer Feed', quantity: 20, unit: 'bags', reorder_level: 10, created_at: '2026-01-15T00:00:00Z' },
  { id: 'demo-inv-2', farmer_id: 'demo', item_name: 'Medicine', quantity: 5, unit: 'units', reorder_level: 3, created_at: '2026-02-01T00:00:00Z' },
]

const DEMO_STATS: FarmStats = {
  totalSales: 121000,
  totalMortality: 4,
  avgProduction: 86.3,
  totalFeedCost: 17500,
}

function getDemoData() {
  if (typeof window !== 'undefined' && document.cookie.includes('demo_mode=true')) {
    return {
      records: DEMO_RECORDS,
      batches: DEMO_BATCHES,
      inventory: DEMO_INVENTORY,
      stats: DEMO_STATS,
      healthLogs: [],
      expenses: [],
      totalExpenses: 0,
    }
  }
  return null
}

export function useFarmData(farmerId: string | null) {
  const [state, setState] = useState<FarmDataState>({
    records: [],
    healthLogs: [],
    expenses: [],
    batches: [],
    inventory: [],
    stats: null,
    totalExpenses: 0,
    loading: false,
    error: null
  })

  const refresh = useCallback(async () => {
    if (!farmerId) return
    
    const demoData = getDemoData()
    if (demoData) {
      setState({
        records: demoData.records,
        healthLogs: demoData.healthLogs,
        expenses: demoData.expenses,
        batches: demoData.batches,
        inventory: demoData.inventory,
        stats: demoData.stats,
        totalExpenses: demoData.totalExpenses,
        loading: false,
        error: null
      })
      return
    }
    
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    try {
      const [records, healthLogs, expenses, batches, inventory, stats, totalExpenses] = await Promise.all([
        getDailyRecords(farmerId),
        getHealthLogs(farmerId),
        getExpenses(farmerId),
        getBatches(farmerId),
        getInventory(farmerId),
        getFarmStats(farmerId),
        getTotalExpenses(farmerId)
      ])
      
      setState({
        records,
        healthLogs,
        expenses,
        batches,
        inventory,
        stats,
        totalExpenses,
        loading: false,
        error: null
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch farm data'
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        error: message 
      }))
    }
  }, [farmerId])

  useEffect(() => {
    if (!farmerId) return
    
    const demoData = getDemoData()
    if (demoData) {
      setState({
        records: demoData.records,
        healthLogs: demoData.healthLogs,
        expenses: demoData.expenses,
        batches: demoData.batches,
        inventory: demoData.inventory,
        stats: demoData.stats,
        totalExpenses: demoData.totalExpenses,
        loading: false,
        error: null
      })
      return
    }
    
    let cancelled = false
    
    const loadData = async () => {
      setState(prev => ({ ...prev, loading: true, error: null }))
      
      try {
        const [records, healthLogs, expenses, batches, inventory, stats, totalExpenses] = await Promise.all([
          getDailyRecords(farmerId),
          getHealthLogs(farmerId),
          getExpenses(farmerId),
          getBatches(farmerId),
          getInventory(farmerId),
          getFarmStats(farmerId),
          getTotalExpenses(farmerId)
        ])
        
        if (!cancelled) {
          setState({
            records,
            healthLogs,
            expenses,
            batches,
            inventory,
            stats,
            totalExpenses,
            loading: false,
            error: null
          })
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : 'Failed to fetch farm data'
          setState(prev => ({ 
            ...prev, 
            loading: false, 
            error: message 
          }))
        }
      }
    }
    
    loadData()
    
    return () => {
      cancelled = true
    }
  }, [farmerId])

  const addRecord = async (record: Omit<DailyRecordInput, 'farmer_id'>) => {
    if (!farmerId) return { success: false, error: 'No farmer ID' }
    
    try {
      await createDailyRecord({ ...record, farmer_id: farmerId })
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const removeRecord = async (id: string) => {
    try {
      await deleteDailyRecord(id)
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const addHealthLog = async (log: Omit<HealthLog, 'id' | 'created_at' | 'farmer_id'>) => {
    if (!farmerId) return { success: false, error: 'No farmer ID' }
    
    try {
      await createHealthLog({ ...log, farmer_id: farmerId })
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const removeHealthLog = async (id: string) => {
    try {
      await deleteHealthLog(id)
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const addExpense = async (expense: Omit<Expense, 'id' | 'created_at' | 'farmer_id'>) => {
    if (!farmerId) return { success: false, error: 'No farmer ID' }
    
    try {
      await createExpense({ ...expense, farmer_id: farmerId })
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const removeExpense = async (id: string) => {
    try {
      await deleteExpense(id)
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const addBatch = async (batch: Omit<Batch, 'id' | 'created_at' | 'farmer_id' | 'current_count'>) => {
    if (!farmerId) return { success: false, error: 'No farmer ID' }
    
    try {
      await createBatch({ ...batch, farmer_id: farmerId })
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const updateBatch = async (id: string, newCount: number) => {
    try {
      await updateBatchCount(id, newCount)
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const removeBatch = async (id: string) => {
    try {
      await deleteBatch(id)
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const addInventoryItem = async (item: Omit<Inventory, 'id' | 'created_at' | 'farmer_id'>) => {
    if (!farmerId) return { success: false, error: 'No farmer ID' }
    
    try {
      await createInventoryItem({ ...item, farmer_id: farmerId })
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const updateInventory = async (id: string, quantity: number) => {
    try {
      await updateInventoryQuantity(id, quantity)
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  const removeInventoryItem = async (id: string) => {
    try {
      await deleteInventoryItem(id)
      await refresh()
      return { success: true }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save record'
      return { success: false, error: message }
    }
  }

  return {
    ...state,
    refresh,
    addRecord,
    removeRecord,
    addHealthLog,
    removeHealthLog,
    addExpense,
    removeExpense,
    addBatch,
    updateBatch,
    removeBatch,
    addInventoryItem,
    updateInventory,
    removeInventoryItem
  }
}