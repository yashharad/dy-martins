
import React from 'react';
import { Sparkles, Trophy, Smartphone, Gift, ArrowRight, Zap, Coins } from 'lucide-react';

export const OfferSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6 px-2">
        <div className="bg-amber-500/10 p-2 rounded-xl border border-amber-500/20">
          <Zap className="w-4 h-4 text-amber-500 animate-pulse" />
        </div>
        <div>
          <h2 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tighter italic">Privilege Hub</h2>
          <p className="text-[8px] text-gray-400 font-bold uppercase tracking-[0.2em] -mt-1">Member Exclusives</p>
        </div>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent ml-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Offer 1: Cashback - Compact Luxury */}
        <div className="relative overflow-hidden bg-[#0f0f12] rounded-3xl p-6 border border-white/5 group hover:border-amber-500/40 transition-all duration-500 shadow-xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-32 h-32 bg-amber-500/10 rounded-full blur-[60px] group-hover:bg-amber-500/20 transition-all duration-700" />
          
          <div className="relative flex items-center gap-5">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-900/40 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <Trophy className="w-6 h-6 text-black" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                <span className="text-amber-400 text-[8px] font-black uppercase tracking-[0.3em]">Lucky Draw</span>
              </div>
              <h3 className="text-lg font-black text-white tracking-tight leading-none mb-1">
                WIN <span className="text-shimmer">₹500</span> CASHBACK
              </h3>
              <p className="text-gray-400 text-[10px] font-medium leading-tight line-clamp-1">
                Weekly draw entry for every prepaid masterpiece.
              </p>
            </div>

            <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
              <div className="p-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
                <Coins className="w-3.5 h-3.5 text-amber-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Offer 2: Loyalty Skin - Compact Luxury */}
        <div className="relative overflow-hidden bg-white dark:bg-[#111114] rounded-3xl p-6 border border-gray-100 dark:border-white/5 group hover:border-indigo-500/40 transition-all duration-500 shadow-sm hover:shadow-xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-32 h-32 bg-indigo-500/5 rounded-full blur-[60px] group-hover:bg-indigo-500/10 transition-all duration-700" />
          
          <div className="relative flex items-center gap-5">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950/40 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 group-hover:scale-105 transition-transform duration-500">
                <Smartphone className="w-6 h-6" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <Gift className="w-2.5 h-2.5 text-indigo-500 fill-indigo-500" />
                <span className="text-indigo-500 text-[8px] font-black uppercase tracking-[0.3em]">Loyalty Perk</span>
              </div>
              <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight leading-none mb-1">
                FREE <span className="text-indigo-500 italic">MOBILE SKIN</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-[10px] font-medium leading-tight line-clamp-1">
                Unlock free customized skin for your mobile after 3 orders
              </p>
            </div>

            <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-xl">
                <ArrowRight className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
