
import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Initial load
    const t1 = setTimeout(() => setStage(1), 500);
    // Stage 2: Logo reveal
    const t2 = setTimeout(() => setStage(2), 1200);
    // Stage 3: Tagline & line reveal
    const t3 = setTimeout(() => setStage(3), 2200);
    // Finish
    const t4 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (!isVisible && stage === 3) return null;

  return (
    <div className={`fixed inset-0 z-[500] flex flex-col items-center justify-center bg-[#080a12] transition-all duration-1000 ease-in-out ${!isVisible ? '-translate-y-full opacity-0 scale-110' : 'opacity-100'}`}>
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#161b33_0%,#080a12_70%)] opacity-80" />
      
      {/* Content Container */}
      <div className="relative flex flex-col items-center max-w-4xl w-full px-8">
        {/* Animated Logo */}
        <div className={`transition-all duration-1000 transform ${stage >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
          <Logo vertical={true} showText={stage >= 2} className="text-white" />
        </div>

        {/* Decorative Gold Line */}
        <div className="w-full max-w-2xl mt-12 overflow-hidden">
          <div className={`h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-all duration-[2000ms] ease-out ${stage >= 3 ? 'w-full opacity-50' : 'w-0 opacity-0'}`} style={{ margin: '0 auto' }} />
        </div>

        {/* Shimmer Effect Overlay */}
        {stage >= 1 && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full opacity-20">
            <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite]" />
          </div>
        )}
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-12 flex flex-col items-center gap-3">
         <div className="w-32 h-[2px] bg-gray-800 rounded-full overflow-hidden">
            <div className={`h-full bg-[#D4AF37] transition-all duration-[3500ms] ease-linear ${stage >= 1 ? 'w-full' : 'w-0'}`} />
         </div>
         <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.5em] animate-pulse">Initializing Boutique</span>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%); }
          100% { transform: translateX(100%) translateY(100%); }
        }
      `}</style>
    </div>
  );
};
