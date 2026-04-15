"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useFarmData } from "@/hooks/useFarmData";
import { useAI } from "@/hooks/useAI";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { DailyLogForm } from "@/components/forms/DailyLogForm";
import { AIAlerts } from "@/components/dashboard/AIAlerts";
import { AIConsultant } from "@/components/dashboard/AIConsultant";
import type { DailyRecordInput } from "@/types";

export default function Dashboard() {
  const { user, loading: authLoading, logout, getStoredFarmerId } = useAuth()
  const farmerId = user?.id || getStoredFarmerId()
  
  const { 
    records, 
    stats, 
    loading: dataLoading, 
    addRecord, 
    addHealthLog,
    refresh 
  } = useFarmData(farmerId)
  
  const {
    getAIAdvice,
    fetchAlerts,
    markAsRead,
    markAllRead,
    checkAndGenerateAlerts
  } = useAI(farmerId)
  
  const [vaccineName, setVaccineName] = useState("")
  const [questionLoading, setQuestionLoading] = useState(false)

  // useEffect(() => {
  //   if (!authLoading && !user) {
  //     window.location.href = "/login"
  //   }
  // }, [authLoading, user])

  useEffect(() => {
    if (farmerId) {
      checkAndGenerateAlerts()
    }
  }, [farmerId, checkAndGenerateAlerts])

  const handleLogout = async () => {
    await logout()
    window.location.href = "/login"
  }

  const handleSaveRecord = async (record: Omit<DailyRecordInput, 'farmer_id'>) => {
    return await addRecord(record)
  }

  const handleSaveVaccine = async () => {
    if (!vaccineName.trim()) return
    
    const result = await addHealthLog({
      action: "Vaccination",
      details: vaccineName,
      cost: 0,
      record_date: new Date().toISOString().split('T')[0]
    })
    
    if (result.success) {
      setVaccineName("")
      alert(`${vaccineName} recorded!`)
    } else {
      alert(result.error || "Failed to save")
    }
  }

  const handleAskAI = async (question: string) => {
    if (!question.trim()) return { success: false, error: 'Please enter a question' }
    
    setQuestionLoading(true)
    const result = await getAIAdvice(question, records)
    setQuestionLoading(false)
    
    return result
  }

  if (authLoading || dataLoading) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-4xl mb-4">🌾</div>
          <p className="text-gray-400">Loading your farm...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-5 font-sans pb-24 text-left">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 pt-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tighter text-green-500">FarmPulse</h1>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">
            {user.farm_type || 'Poultry'} Vault
          </p>
        </div>
        <button 
          onClick={handleLogout}
          className="h-10 w-10 bg-red-500/10 rounded-full border border-red-500/20 flex items-center justify-center text-red-500 text-xs font-bold"
        >
          Exit
        </button>
      </div>

      {/* STATS */}
      <StatsCards stats={stats} />

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          {/* Welcome */}
          <div className="mb-2 px-1">
            <p className="text-gray-400 text-sm">
              Welcome back, <span className="text-white font-bold">{user.full_name || user.name || 'Farmer'}</span>
            </p>
          </div>

          {/* AI Alerts */}
          <AIAlerts 
            farmerId={farmerId}
            fetchAlerts={fetchAlerts}
            onMarkRead={markAsRead}
            onMarkAllRead={markAllRead}
          />

          {/* Daily Form */}
          <section className="bg-gray-900/10 p-6 rounded-3xl border border-gray-800">
            <h2 className="text-lg font-bold mb-6">Daily Performance Log</h2>
            <DailyLogForm 
              onSubmit={handleSaveRecord}
              loading={dataLoading}
            />
          </section>

          {/* AI Consultant */}
          <AIConsultant 
            onAsk={handleAskAI} 
            loading={questionLoading} 
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          {/* Recent Activity */}
          <section className="bg-gray-900/20 p-6 rounded-3xl border border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Recent Activity</h2>
              <button onClick={refresh} className="text-[10px] text-green-500 font-bold uppercase">Refresh</button>
            </div>

            <div className="space-y-4">
              {records.length > 0 ? (
                records.slice(0, 5).map((item) => (
                  <div key={item.id} className="bg-black/40 p-4 rounded-2xl border border-gray-800 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">
                        {new Date(item.record_date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short' })}
                      </p>
                      <div className="flex gap-3 items-center">
                        <span className="text-xs">🥚 {item.production_amt}</span>
                        <span className="text-xs text-red-400">💀 {item.mortality_count}</span>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-green-500">₦{item.sales_amount?.toLocaleString()}</p>
                  </div>
                ))
              ) : (
                <div className="py-8 px-4 text-center border-2 border-dashed border-gray-800 rounded-3xl">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-white font-bold text-sm mb-1">Your Vault is Empty</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                    Start by logging your feed and harvest to see your first farm insights.
                  </p>
                  <div className="inline-block bg-green-500/10 text-green-500 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-green-500/20">
                    Ready for entry #1
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Health Logs */}
          <section className="bg-gray-900/10 p-6 rounded-3xl border border-dashed border-gray-800">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Health Logs</h2>
            <input 
              type="text" 
              placeholder="Record Vaccine (e.g. Gumboro)"
              className="w-full bg-transparent border-b border-gray-800 py-2 text-sm mb-4 outline-none focus:border-green-500 text-white"
              value={vaccineName}
              onChange={(e) => setVaccineName(e.target.value)}
            />
            <button 
              onClick={handleSaveVaccine}
              disabled={!vaccineName.trim() || dataLoading}
              className="text-[10px] font-bold text-green-500 uppercase tracking-tighter hover:underline disabled:opacity-50"
            >
              + Log Vaccine Entry
            </button>
          </section>

          {/* Quick Links */}
          <section className="grid grid-cols-3 gap-3">
            <a href="/batches" className="bg-gray-800/50 p-4 rounded-2xl text-center">
              <div className="text-2xl mb-1">🐣</div>
              <div className="text-[10px] font-bold">Batches</div>
            </a>
            <a href="/inventory" className="bg-gray-800/50 p-4 rounded-2xl text-center">
              <div className="text-2xl mb-1">📦</div>
              <div className="text-[10px] font-bold">Inventory</div>
            </a>
            <a href="/expenses" className="bg-gray-800/50 p-4 rounded-2xl text-center">
              <div className="text-2xl mb-1">💸</div>
              <div className="text-[10px] font-bold">Expenses</div>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}