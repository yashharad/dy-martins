
import React from 'react';
import { Smartphone, Gift, CheckCircle, Sparkles } from 'lucide-react';

export const LoyaltyOffer: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-[#111114] border border-gray-200 dark:border-gray-800 rounded-[32px] p-6 mb-12 flex flex-col md:flex-row items-center gap-6 group hover:border-amber-500/50 transition-all duration-500 shadow-sm hover:shadow-xl">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all" />
      
      <div className="w-16 h-16 bg-amber-50 dark:bg-amber-950/30 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0 group-hover:scale-110 transition-transform relative">
        <Smartphone className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white dark:border-[#111114]" />
      </div>

      <div className="flex-1 text-center md:text-left relative z-10">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
          <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
          <span className="text-[9px] font-black text-amber-500 uppercase tracking-[0.3em]">Exclusive Loyalty Program</span>
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight">
          BUY 3 FRAMES, GET A <span className="text-amber-500">FREE CUSTOM SKIN</span>
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium max-w-md">
          Complete any 3 purchases and we'll send you a premium, fully customized mobile skin of your choice for <span className="text-gray-900 dark:text-white font-bold">FREE</span>.
        </p>
      </div>

      <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
        <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/10 px-4 py-2 rounded-xl border border-amber-100 dark:border-amber-900/30">
          <Gift className="w-4 h-4 text-amber-600" />
          <span className="text-[10px] font-black uppercase text-amber-600 tracking-wider">Boutique Perk</span>
        </div>
        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">Automatic Eligibility</p>
      </div>
    </div>
  );
};
