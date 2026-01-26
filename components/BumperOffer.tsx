
import React from 'react';
import { Sparkles, Gift, Trophy, ShieldCheck, Coins } from 'lucide-react';

export const BumperOffer: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#1a1a1e] rounded-[32px] p-6 md:p-10 mb-12 shadow-2xl border border-gray-800 group">
      {/* Animated Glow Background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] group-hover:bg-indigo-600/30 transition-colors duration-1000" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
      
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-[28px] flex items-center justify-center shadow-lg shadow-amber-900/40 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <Trophy className="w-10 h-10 text-[#1a1a1e]" />
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em]">Jackpot Promotion</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase italic">
              WIN UP TO <span className="text-amber-400">₹500</span> CASHBACK
            </h2>
            <p className="text-gray-400 mt-3 font-medium flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
              Lucky customers get <span className="text-white font-bold">Guaranteed Cashback</span> on every single order!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-white text-xs font-black uppercase tracking-widest">Post-Delivery Refund</span>
          </div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center md:text-right max-w-[200px] leading-relaxed">
            *Cashback credited to your UPI ID after WhatsApp verification
          </p>
        </div>
      </div>
      
      {/* Decorative Border Bottom */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent w-full" />
    </div>
  );
};
