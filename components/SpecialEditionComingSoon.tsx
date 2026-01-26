
import React from 'react';
import { Trophy, Star, Sparkles, ChevronLeft, Instagram, Send, PenTool } from 'lucide-react';
import { CONTACT_WHATSAPP } from '../constants';

interface SpecialEditionComingSoonProps {
  onBack: () => void;
}

export const SpecialEditionComingSoon: React.FC<SpecialEditionComingSoonProps> = ({ onBack }) => {
  const handleNotify = () => {
    const message = encodeURIComponent("Hi DYmartins! I'm interested in the Special Edition frames. Please notify me when you launch the Sports Legends collection!");
    window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${message}`, '_blank');
  };

  return (
    <div className="animate-modal">
      {/* Header with Back button */}
      <div className="flex items-center gap-4 mb-10">
        <button 
          onClick={onBack} 
          className="p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-amber-600 hover:text-white transition-all shadow-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white leading-none tracking-tighter italic">
            SPECIAL <span className="text-amber-600">EDITION</span>
          </h2>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-2">The Vault is Opening Soon</p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="relative overflow-hidden bg-[#0c0c10] rounded-[48px] border border-white/5 p-10 md:p-24 text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
        {/* Background Visuals */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-amber-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-[32px] flex items-center justify-center mb-10 shadow-2xl shadow-amber-900/40 transform -rotate-6 hover:rotate-0 transition-transform duration-700">
            <Trophy className="w-12 h-12 text-black" />
          </div>

          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-amber-500 text-[11px] font-black uppercase tracking-[0.5em]">Exclusive Preview</span>
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>

          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 italic">
            LEGENDS ARE <span className="text-shimmer">ARRIVING</span>
          </h3>

          <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed mb-12 opacity-90">
            Our artisans are currently handcrafting a limited collection of 3D frames featuring your <span className="text-white font-bold">favorite cricketers, footballers</span>, and global sports icons.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 w-full">
            {['CRICKETERS', 'FOOTBALLERS', 'F1 HEROES', 'BASKETBALL'].map((tag) => (
              <div key={tag} className="px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-gray-400 tracking-widest uppercase">
                {tag}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={handleNotify}
              className="bg-amber-600 hover:bg-amber-500 text-white font-black px-10 py-6 rounded-[28px] shadow-2xl shadow-amber-900/40 flex items-center gap-4 transition-all active:scale-95 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Notify Me on Launch
            </button>
            <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest max-w-[200px] leading-relaxed italic">
              *Early access members get 10% launch discount
            </p>
          </div>
        </div>

        {/* Custom Order Fallback */}
        <div className="mt-20 pt-16 border-t border-white/5 flex flex-col items-center">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">Can't Wait for the Launch?</p>
          <div className="p-1 bg-gradient-to-r from-amber-600/20 via-amber-600/50 to-amber-600/20 rounded-[32px] w-full max-w-md">
            <div className="bg-[#111114] rounded-[31px] p-8 flex flex-col items-center text-center">
               <div className="p-3 bg-amber-600/10 rounded-2xl mb-4">
                  <PenTool className="w-6 h-6 text-amber-500" />
               </div>
               <h4 className="text-white font-black text-lg mb-2">Request a Bespoke Frame</h4>
               <p className="text-gray-400 text-xs mb-6">We can design a custom sports frame for you right now via our direct boutique service.</p>
               <button 
                 onClick={() => window.open(`https://wa.me/${CONTACT_WHATSAPP}`, '_blank')}
                 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2"
               >
                 Consult an Artisan <Star className="w-3 h-3" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
