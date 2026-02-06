import React from 'react';
import { ChevronLeft, Sun, Moon, LogOut, LayoutDashboard, User as UserIcon, ShoppingBag } from 'lucide-react';
import { User } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  showBack?: boolean;
  onBack?: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onShowOrders: () => void;
  isAdminView: boolean;
  onToggleAdminView: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  showBack, onBack, theme, onToggleTheme, user, onLogin, onLogout, onShowOrders, isAdminView, onToggleAdminView 
}) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#0a0a0c]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-2.5 flex items-center justify-between theme-transition">
      <div className="flex items-center gap-1">
        {showBack && (
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors mr-1"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        )}
        <div className="flex items-center cursor-pointer transition-transform duration-300 hover:opacity-90 active:scale-[0.98]" onClick={() => isAdminView ? onToggleAdminView() : window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Logo className="h-10 sm:h-12" showText={true} />
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        {!isAdminView && (
          <button
            onClick={onShowOrders}
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-bold text-xs uppercase tracking-widest"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Orders</span>
          </button>
        )}

        {user?.role === 'admin' && (
          <button
            onClick={onToggleAdminView}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              isAdminView 
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/20' 
              : 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="hidden md:inline">{isAdminView ? 'Store' : 'Admin'}</span>
          </button>
        )}

        <button
          onClick={onToggleTheme}
          className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all active:scale-90"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        {user ? (
          <div className="flex items-center gap-3 pl-2 border-l border-gray-200 dark:border-gray-800">
            <div className="hidden sm:block text-right">
              <p className="text-[10px] font-black text-gray-900 dark:text-white uppercase leading-none">{user.name}</p>
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter mt-1">Premium Member</p>
            </div>
            <div className="relative group">
              <button 
                onClick={onShowOrders}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-md active:scale-90 transition-transform"
              >
                <UserIcon className="w-5 h-5" />
              </button>
              <div className="absolute top-full right-0 mt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 min-w-[160px]">
                  <button 
                    onClick={onShowOrders}
                    className="w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl flex items-center gap-3 text-xs font-bold text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4 text-indigo-500" /> My Orders
                  </button>
                  <div className="h-[1px] bg-gray-100 dark:bg-gray-800 mx-2" />
                  <button 
                    onClick={onLogout}
                    className="w-full px-4 py-3 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl flex items-center gap-3 text-xs font-bold text-red-500 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={onLogin}
            className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-black/10"
          >
            <span>Login</span>
          </button>
        )}
      </div>
    </nav>
  );
};