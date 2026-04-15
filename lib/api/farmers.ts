import { supabase } from '@/lib/supabase'
import type { Farmer } from '@/types'

export async function createFarmer(farmerData: { email?: string; phone?: string; name?: string; full_name?: string; farm_type?: string }) {
  const { data, error } = await supabase
    .from('farmers')
    .insert([farmerData])
    .select()
    .single()

  if (error) throw error
  return data as Farmer
}

export async function getFarmerByPhone(phone: string) {
  const { data, error } = await supabase
    .from('farmers')
    .select('*')
    .eq('phone', phone)
    .single()

  if (error && error.code !== 'PGRST116') throw error
  return data as Farmer | null
}

export async function getFarmerByEmail(email: string) {
  const { data, error } = await supabase
    .from('farmers')
    .select('*')
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') throw error
  return data as Farmer | null
}

export async function getFarmerById(id: string) {
  const { data, error } = await supabase
    .from('farmers')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data as Farmer
}

export async function updateFarmer(id: string, updates: Partial<Farmer>) {
  const { data, error } = await supabase
    .from('farmers')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Farmer
}

export async function getAllFarmers() {
  const { data, error } = await supabase
    .from('farmers')
    .select('*')

  if (error) throw error
  return data as Farmer[]
}