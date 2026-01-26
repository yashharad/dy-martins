
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SegmentCardProps {
  title: string;
  subtitle: string;
  image: string;
  onClick: () => void;
}

export const SegmentCard: React.FC<SegmentCardProps> = ({ title, subtitle, image, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative h-[450px] w-full overflow-hidden rounded-[48px] border border-gray-100 dark:border-white/5 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-1000 ease-out"
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale-[40%] group-hover:grayscale-0" 
        />
        {/* Luxury Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a12] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <div className="flex items-center gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">Exclusive Collection</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-3 group-hover:text-shimmer transition-all duration-500">
            {title}
          </h3>
          <p className="text-gray-300 text-lg font-medium max-w-xs mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            {subtitle}
          </p>
          
          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-full border border-white/20 transform group-hover:bg-amber-600 group-hover:border-amber-400 group-hover:rotate-[360deg] transition-all duration-1000 shadow-2xl">
              <ArrowRight className="text-white w-6 h-6" />
            </div>
            <span className="text-white text-xs font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
              Enter Gallery
            </span>
          </div>
        </div>
      </div>
      
      {/* Gloss Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-[shimmer_5s_infinite]" />
      </div>
    </div>
  );
};
