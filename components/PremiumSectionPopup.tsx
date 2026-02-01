import React from 'react';
import { X, Sparkles, ShieldCheck, Zap, Star } from 'lucide-react';

interface PremiumSectionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PremiumSectionPopup: React.FC<PremiumSectionPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-[#0f0f12] w-full max-w-lg rounded-[48px] border border-amber-500/30 overflow-hidden animate-modal shadow-[0_0_80px_rgba(212,175,55,0.15)] relative">
        {/* Shimmer decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" />
        
        <div className="p-10 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-[28px] flex items-center justify-center shadow-2xl shadow-amber-900/40 transform -rotate-3">
              <Sparkles className="w-10 h-10 text-black" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.6em]">Luxury Directive</span>
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
          </div>

          <h2 className="text-4xl font-black text-white tracking-tighter leading-none mb-6 italic">
            PREMIUM <span className="text-shimmer">CRAFTSMANSHIP</span>
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-gray-300 text-lg font-medium leading-relaxed italic opacity-90">
              "This section's frames are crafted with premium materials and are fully <span className="text-white font-black underline decoration-amber-500">100% hand crafted</span> + LED effects and durable imported items."
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Imported Durability</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-400" />
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Dynamic LED Glow</span>
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full bg-white text-black font-black py-6 rounded-[28px] shadow-2xl hover:scale-[1.02] transition-all active:scale-95 text-lg uppercase tracking-tight group"
          >
            I Understand
          </button>
          
          <button 
            onClick={onClose}
            className="mt-6 text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-[0.4em] transition-colors"
          >
            Cancel and Return
          </button>
        </div>
      </div>
    </div>
  );
};