"use client"

import { useCallback } from "react"
import { usePaystackPayment } from "react-paystack"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

interface PaystackUpgradeProps {
  email: string
  userId: string
}

export function PaystackUpgrade({ email, userId }: PaystackUpgradeProps) {
  const amount = 250000 // ₦2,500 in kobo

  // 1. Put ONLY the payment data details inside the hook configuration
  const initializePayment = usePaystackPayment({
    reference: `farmtrack-premium-${Date.now()}`,
    amount,
    email,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "",
  })

  // 2. Extracted the success handler exactly as you wrote it
  const handleSuccess = async () => {
    try {
      const { error } = await supabase
        .from("farmers")
        .update({
          is_premium: true,
          subscription_date: new Date().toISOString(),
        })
        .eq("id", userId)

      if (error) {
        toast.error("Payment succeeded but subscription update failed. Please contact support.")
        return
      }

      toast.success("Upgrade successful! You are now a premium farmer.")
    } catch (err) {
      toast.error("An unexpected error occurred while updating your subscription.")
    }
  }

  // 3. Extracted the cancel handler exactly as you wrote it
  const handleClose = () => {
    toast.error("Payment cancelled. Please try again.")
  }

  // 4. Trigger payment and pass the actions directly here (Fixes all 3 errors)
  const handleUpgrade = useCallback(() => {
    initializePayment({
      onSuccess: handleSuccess,
      onClose: handleClose,
    })
  }, [initializePayment])

  return (
    <button
      onClick={handleUpgrade}
      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all duration-200"
    >
      Upgrade to Premium — ₦2,500
    </button>
  )
}