import { supabase } from '@/lib/supabase'
import type { Inventory, InventoryInput } from '@/types'

export async function createInventoryItem(item: InventoryInput) {
  const { data, error } = await supabase
    .from('inventory')
    .insert([item])
    .select()
    .single()

  if (error) throw error
  return data as Inventory
}

export async function getInventory(farmerId: string) {
  const { data, error } = await supabase
    .from('inventory')
    .select('*')
    .eq('farmer_id', farmerId)
    .order('item_name', { ascending: true })

  if (error) throw error
  return data as Inventory[]
}

export async function getInventoryItem(id: string) {
  const { data, error } = await supabase
    .from('inventory')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data as Inventory
}

export async function updateInventoryItem(id: string, updates: Partial<Inventory>) {
  const { data, error } = await supabase
    .from('inventory')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Inventory
}

export async function deleteInventoryItem(id: string) {
  const { error } = await supabase
    .from('inventory')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function getLowStockItems(farmerId: string) {
  const inventory = await getInventory(farmerId)
  return inventory.filter(item => 
    item.reorder_level && item.quantity <= item.reorder_level
  )
}

export async function updateInventoryQuantity(id: string, quantity: number) {
  return updateInventoryItem(id, { quantity })
}