
import React from 'react';
import { Home, Grid, ShoppingBag, User } from 'lucide-react';
import { CheckoutStep } from '../types';

interface BottomNavProps {
  currentStep: CheckoutStep;
  activeSegment: string | null;
  onHome: () => void;
  onCategories: () => void;
  onCart: () => void;
  onAccount: () => void;
  isOrdersOpen: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({ 
  currentStep, 
  activeSegment, 
  onHome, 
  onCategories, 
  onCart, 
  onAccount,
  isOrdersOpen
}) => {
  const isHome = currentStep === CheckoutStep.CATALOG && !activeSegment;
  const isCategories = !!activeSegment && currentStep === CheckoutStep.CATALOG;

  const NavItem = ({ 
    icon: Icon, 
    label, 
    isActive, 
    onClick 
  }: { 
    icon: any; 
    label: string; 
    isActive: boolean; 
    onClick: () => void;
  }) => (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1.5 flex-1 relative transition-all duration-300 ${
        isActive ? 'text-amber-600 scale-110' : 'text-gray-400 dark:text-gray-500'
      }`}
    >
      <div className={`p-1 rounded-xl transition-all ${isActive ? 'bg-amber-500/10' : ''}`}>
        <Icon className={`w-6 h-6 ${isActive ? 'fill-amber-600/10' : ''}`} />
      </div>
      <span className={`text-[8px] font-black uppercase tracking-[0.2em] transition-all ${isActive ? 'opacity-100' : 'opacity-60'}`}>
        {label}
      </span>
      {isActive && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full shadow-[0_0_8px_rgba(217,119,6,0.5)] animate-pulse" />
      )}
    </button>
  );

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[200] px-4 pb-6 pt-2">
      <div className="bg-white/80 dark:bg-[#0a0a0c]/90 backdrop-blur-2xl border border-gray-200/50 dark:border-white/5 rounded-[32px] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.2)] h-[72px] flex items-center justify-around overflow-hidden theme-transition">
        <NavItem 
          icon={Home} 
          label="Home" 
          isActive={isHome && !isOrdersOpen} 
          onClick={onHome} 
        />
        <NavItem 
          icon={Grid} 
          label="Gallery" 
          isActive={isCategories && !isOrdersOpen} 
          onClick={onCategories} 
        />
        <NavItem 
          icon={ShoppingBag} 
          label="Orders" 
          isActive={isOrdersOpen} 
          onClick={onCart} 
        />
        <NavItem 
          icon={User} 
          label="Account" 
          isActive={false} 
          onClick={onAccount} 
        />
      </div>
    </div>
  );
};
