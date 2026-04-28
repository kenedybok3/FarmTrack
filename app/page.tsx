"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const animalCount = 0;

  if (animalCount === 0) {
    return (
      <main className="relative flex flex-col items-center justify-center min-h-screen text-center p-6 overflow-hidden">
        {/* BACKGROUND IMAGE WITH OVERLAY */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2070&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* DECORATIVE ELEMENTS */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-8 w-32 h-32 bg-green-400/20 rounded-full blur-2xl" />

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-lg">
          <div className="text-7xl mb-6 animate-bounce">
            🇳🇬
          </div>
          
          <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
            Poultry Farm <br/>
            <span className="text-green-400">Manager</span>
          </h1>
          
          <p className="text-gray-200 text-xl mb-12 font-medium leading-relaxed">
            No more paper books. <br/> 
            Track your <span className="text-green-300 font-bold">🐔 Layers</span> and <span className="text-green-300 font-bold">🐣 Broilers</span> on your phone.
          </p>
          
          <div className="space-y-6 mt-8">
            <Link href="/register">
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                + Register My Farm
              </button>
            </Link>
            
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="w-full flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white py-4 rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-white ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              Watch Demo Video
            </button>
          </div>

          <p className="mt-16 text-sm text-gray-400 uppercase tracking-widest font-semibold">
            Built for Nigerian Farmers 🇳🇬
          </p>
        </div>

        {/* VIDEO MODAL */}
        {isVideoOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div 
              className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
              <div className="aspect-video flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 fill-green-400" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-400 text-lg">Demo Video Placeholder</p>
                  <p className="text-gray-500 text-sm mt-2">Add your video URL in the code</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }

  return null;
}