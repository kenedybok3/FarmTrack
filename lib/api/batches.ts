import { supabase } from '@/lib/supabase'
import type { Batch, BatchInput } from '@/types'

export async function createBatch(batch: BatchInput) {
  const { data, error } = await supabase
    .from('batches')
    .insert([{ ...batch, current_count: batch.initial_count }])
    .select()
    .single()

  if (error) throw error
  return data as Batch
}

export async function getBatches(farmerId: string) {
  const { data, error } = await supabase
    .from('batches')
    .select('*')
    .eq('farmer_id', farmerId)
    .order('acquired_date', { ascending: false })

  if (error) throw error
  return data as Batch[]
}

export async function getBatchById(id: string) {
  const { data, error } = await supabase
    .from('batches')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data as Batch
}

export async function updateBatch(id: string, updates: Partial<Batch>) {
  const { data, error } = await supabase
    .from('batches')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Batch
}

export async function deleteBatch(id: string) {
  const { error } = await supabase
    .from('batches')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function updateBatchCount(id: string, newCount: number) {
  return updateBatch(id, { current_count: newCount })
}