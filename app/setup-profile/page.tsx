"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SetupProfile() {
  const [fullName, setFullName] = useState("");
  const [farmType, setFarmType] = useState("Poultry");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const farmerId = localStorage.getItem('farmer_id');
    if (!farmerId) {
      router.push('/register');
    }
  }, [router]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const farmerId = localStorage.getItem('farmer_id');
    if (!farmerId) {
      alert("Session expired. Please register again.");
      router.push('/register');
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from('farmers')
      .update({ full_name: fullName, farm_type: farmType })
      .eq('id', farmerId);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert(`Welcome to the community, ${fullName}!`);
      router.push("/dashboard");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-500">Setup Your Farm</h1>
          <p className="text-gray-400 mt-2">Help us customize your experience</p>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">Full Name</label>
            <input 
              type="text" 
              placeholder="e.g. Musa Ibrahim" 
              className="w-full p-4 rounded bg-gray-900 border border-gray-700 mt-1"
              onChange={(e) => setFullName(e.target.value)}
              required 
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">What do you farm?</label>
            <select 
              className="w-full p-4 rounded bg-gray-900 border border-gray-700 mt-1"
              onChange={(e) => setFarmType(e.target.value)}
            >
              <option value="Poultry">Poultry (Chickens/Birds)</option>
              <option value="Goats">Goats</option>
              <option value="Pigs">Pigs</option>
              <option value="Cattle">Cattle</option>
              <option value="Mixed">Mixed Farming</option>
            </select>
          </div>

          <button 
            disabled={loading}
            className="w-full bg-green-600 py-4 rounded-xl font-bold hover:bg-green-700 transition"
          >
            {loading ? "Saving..." : "Finish Setup"}
          </button>
        </form>
      </div>
    </div>
  );
}