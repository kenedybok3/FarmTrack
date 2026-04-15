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