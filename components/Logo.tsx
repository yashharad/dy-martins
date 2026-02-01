import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  vertical?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 sm:h-12", showText = true, vertical = false }) => {
  if (vertical) {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <svg viewBox="0 0 200 140" className="h-48 w-auto mb-10 transform hover:scale-105 transition-transform duration-700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F9E4B7" />
              <stop offset="100%" stopColor="#AA8A2E" />
            </linearGradient>
            <linearGradient id="silverGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C0C0C0" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#808080" />
            </linearGradient>
          </defs>
          <rect x="40" y="10" width="70" height="85" stroke="url(#goldGradientMain)" strokeWidth="8" rx="4" />
          <rect x="80" y="35" width="85" height="80" stroke="url(#silverGradientMain)" strokeWidth="8" rx="4" />
        </svg>
        {showText && (
          <div className="flex flex-col items-center">
            <span className="font-logo text-6xl sm:text-8xl tracking-tighter leading-none text-white mb-6 italic">DYmartins</span>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <svg viewBox="35 5 135 115" className="h-full w-auto flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F9E4B7" />
            <stop offset="100%" stopColor="#AA8A2E" />
          </linearGradient>
          <linearGradient id="navSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C0C0C0" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#808080" />
          </linearGradient>
        </defs>
        <rect x="40" y="10" width="70" height="85" stroke="url(#navGold)" strokeWidth="8" rx="4" />
        <rect x="80" y="35" width="85" height="80" stroke="url(#navSilver)" strokeWidth="8" rx="4" />
      </svg>
      {showText && (
        <div className="flex flex-col justify-center border-l-2 border-amber-600/30 pl-6 h-[70%]">
          <span className="font-logo text-2xl sm:text-3xl tracking-tighter leading-none text-gray-900 dark:text-white italic">DYmartins</span>
          <span className="font-sans text-[8px] sm:text-[9px] font-black tracking-[0.4em] uppercase opacity-50 text-gray-500 dark:text-gray-400 mt-1.5">CUSTOM FRAMING</span>
        </div>
      )}
    </div>
  );
};