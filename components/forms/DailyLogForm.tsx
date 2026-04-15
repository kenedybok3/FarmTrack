"use client"

import { useState } from 'react'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import type { DailyRecordInput } from '@/types'

interface DailyLogFormProps {
  onSubmit: (record: Omit<DailyRecordInput, 'farmer_id'>) => Promise<{ success: boolean; error?: string }>
  loading?: boolean
}

export function DailyLogForm({ onSubmit, loading = false }: DailyLogFormProps) {
  const [feedBags, setFeedBags] = useState('')
  const [feedCost, setFeedCost] = useState('')
  const [mortality, setMortality] = useState('')
  const [production, setProduction] = useState('')
  const [sales, setSales] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const record = {
      feed_bags_used: feedBags ? parseFloat(feedBags) : 0,
      feed_cost: feedCost ? parseFloat(feedCost) : 0,
      mortality_count: mortality ? parseInt(mortality) : 0,
      production_amt: production ? parseFloat(production) : 0,
      sales_amount: sales ? parseFloat(sales) : 0,
      notes: notes || undefined,
      record_date: new Date().toISOString().split('T')[0]
    }

    const result = await onSubmit(record as any)
    
    if (result.success) {
      setFeedBags('')
      setFeedCost('')
      setMortality('')
      setProduction('')
      setSales('')
      setNotes('')
    } else {
      setError(result.error || 'Failed to save record')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          step="0.1"
          placeholder="0.0"
          label="Feed (Bags)"
          value={feedBags}
          onChange={(e) => setFeedBags(e.target.value)}
        />
        <Input
          type="number"
          placeholder="0"
          label="Feed Cost (₦)"
          value={feedCost}
          onChange={(e) => setFeedCost(e.target.value)}
        />
        <Input
          type="number"
          placeholder="0"
          label="Loss (Birds)"
          value={mortality}
          onChange={(e) => setMortality(e.target.value)}
        />
        <Input
          type="number"
          placeholder="0"
          label="Harvest (Crates)"
          value={production}
          onChange={(e) => setProduction(e.target.value)}
        />
      </div>

      <Input
        type="number"
        placeholder="0"
        label="Sales (₦)"
        value={sales}
        onChange={(e) => setSales(e.target.value)}
      />

      <div>
        <label className="text-[10px] text-gray-500 font-bold uppercase mb-1 block">
          Notes
        </label>
        <textarea
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-800 text-white outline-none focus:border-green-500 transition-all resize-none"
          placeholder="Any observations..."
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full" loading={loading}>
        Save Daily Records
      </Button>
    </form>
  )
}