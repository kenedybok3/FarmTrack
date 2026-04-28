import { supabase } from '@/lib/supabase'
import { getPendingSyncItems, removePendingSync, updatePendingSyncRetry, type PendingSyncItem } from '@/lib/offline-storage'
import { createDailyRecord, deleteDailyRecord } from '@/lib/api/daily-records'
import { createHealthLog, deleteHealthLog } from '@/lib/api/health-logs'
import { createExpense, deleteExpense } from '@/lib/api/expenses'
import { createBatch, deleteBatch, updateBatchCount } from '@/lib/api/batches'
import { createInventoryItem, deleteInventoryItem, updateInventoryQuantity } from '@/lib/api/inventory'

const MAX_RETRIES = 3

export async function processPendingSync(): Promise<{ success: number; failed: number }> {
  const items = await getPendingSyncItems()
  
  if (items.length === 0) {
    return { success: 0, failed: 0 }
  }

  let successCount = 0
  let failedCount = 0

  for (const item of items) {
    try {
      const result = await processSingleItem(item)
      
      if (result) {
        await removePendingSync(item.id)
        successCount++
      } else {
        if (item.retries >= MAX_RETRIES) {
          console.error(`Sync failed after ${MAX_RETRIES} retries for item:`, item.id)
          await removePendingSync(item.id)
          failedCount++
        } else {
          await updatePendingSyncRetry(item.id)
          failedCount++
        }
      }
    } catch (error) {
      console.error('Error processing sync item:', error)
      if (item.retries >= MAX_RETRIES) {
        await removePendingSync(item.id)
        failedCount++
      } else {
        await updatePendingSyncRetry(item.id)
        failedCount++
      }
    }
  }

  return { success: successCount, failed: failedCount }
}

async function processSingleItem(item: PendingSyncItem): Promise<boolean> {
  const { type, action, data, farmerId } = item

  switch (type) {
    case 'daily_record':
      if (action === 'create') {
        const recordData = data as any
        const result = await supabase
          .from('daily_records')
          .insert([{ ...recordData, farmer_id: farmerId }])
          .select()
          .single()
        return !result.error
      } else if (action === 'delete') {
        const result = await supabase
          .from('daily_records')
          .delete()
          .eq('id', data)
        return !result.error
      }
      return false

    case 'health_log':
      if (action === 'create') {
        const result = await supabase
          .from('health_logs')
          .insert([{ ...(data as any), farmer_id: farmerId }])
          .select()
          .single()
        return !result.error
      } else if (action === 'delete') {
        const result = await supabase
          .from('health_logs')
          .delete()
          .eq('id', data)
        return !result.error
      }
      return false

    case 'expense':
      if (action === 'create') {
        const result = await supabase
          .from('expenses')
          .insert([{ ...(data as any), farmer_id: farmerId }])
          .select()
          .single()
        return !result.error
      } else if (action === 'delete') {
        const result = await supabase
          .from('expenses')
          .delete()
          .eq('id', data)
        return !result.error
      }
      return false

    case 'batch':
      if (action === 'create') {
        const result = await supabase
          .from('batches')
          .insert([{ ...(data as any), farmer_id: farmerId }])
          .select()
          .single()
        return !result.error
      } else if (action === 'update') {
        const { id, ...updates } = data as any
        const result = await supabase
          .from('batches')
          .update(updates)
          .eq('id', id)
        return !result.error
      } else if (action === 'delete') {
        const result = await supabase
          .from('batches')
          .delete()
          .eq('id', data)
        return !result.error
      }
      return false

    case 'inventory':
      if (action === 'create') {
        const result = await supabase
          .from('inventory')
          .insert([{ ...(data as any), farmer_id: farmerId }])
          .select()
          .single()
        return !result.error
      } else if (action === 'update') {
        const { id, ...updates } = data as any
        const result = await supabase
          .from('inventory')
          .update(updates)
          .eq('id', id)
        return !result.error
      } else if (action === 'delete') {
        const result = await supabase
          .from('inventory')
          .delete()
          .eq('id', data)
        return !result.error
      }
      return false

    default:
      return false
  }
}

export async function hasPendingSyncItems(): Promise<boolean> {
  const items = await getPendingSyncItems()
  return items.length > 0
}

export async function getPendingSyncCount(): Promise<number> {
  const items = await getPendingSyncItems()
  return items.length
}