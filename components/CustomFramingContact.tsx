
import React from 'react';
import { MessageCircle, Sparkles, ArrowRight, PenTool } from 'lucide-react';
import { CONTACT_WHATSAPP } from '../constants';

export const CustomFramingContact: React.FC = () => {
  const handleContact = () => {
    const message = encodeURIComponent("Hi DYmartins! I want to talk about a custom frame for my vehicle. Can you help me with a special design?");
    window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${message}`, '_blank');
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[56px] bg-[#0c0c10] border border-white/5 p-12 md:p-20 mb-24 group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
      {/* Background Cinematic elements */}
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px] group-hover:bg-amber-600/20 transition-all duration-[2s]" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <div className="p-3 bg-amber-600/20 rounded-2xl border border-amber-600/30">
              <PenTool className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] block">Direct Support</span>
              <span className="text-gray-500 text-[8px] font-bold uppercase tracking-widest block -mt-1">Custom Made Frames</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-8 italic">
            CUSTOM <span className="text-shimmer">DESIGNS</span> <br />FOR YOUR UNIQUE <span className="text-gold">STYLE</span>
          </h2>
          
          <p className="text-gray-400 text-xl font-medium leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
            If you need a frame that is not in our list, we can make it for you! Whether it is a special size, a rare car model, or a frame with special lights—we can build exactly what you want.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
            {['Special Sizes', 'LED Frames', 'Rare Car Models', 'Matte Finishes'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-white/10 pb-2">
                <div className="w-2 h-2 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-8 shrink-0">
          <button 
            onClick={handleContact}
            className="group/btn relative bg-white hover:bg-amber-500 text-black font-black px-12 py-8 rounded-[32px] flex items-center gap-4 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_60px_-10px_rgba(255,255,255,0.2)]"
          >
            <div className="bg-green-600 p-2.5 rounded-xl shadow-lg group-hover/btn:bg-white group-hover/btn:text-green-600 transition-colors">
               <MessageCircle className="w-7 h-7" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover/btn:text-white transition-colors leading-none mb-2">Framing Expert</p>
              <p className="text-2xl leading-none tracking-tighter">Start Chat</p>
            </div>
            <ArrowRight className="w-6 h-6 ml-4 group-hover/btn:translate-x-2 transition-transform" />
          </button>
          
          <div className="flex items-center gap-4 px-8 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
            <Sparkles className="w-5 h-5 text-amber-500 animate-spin-slow" />
            <span className="text-xs text-gray-400 font-bold uppercase tracking-[0.4em]">Help Available Now</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Shimmer line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
    </div>
  );
};
