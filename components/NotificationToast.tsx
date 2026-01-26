
import React, { useEffect, useState } from 'react';
import { MessageSquare, Mail, X } from 'lucide-react';

export interface Notification {
  id: string;
  type: 'sms' | 'email';
  title: string;
  message: string;
  timestamp: number;
}

interface NotificationToastProps {
  notifications: Notification[];
  onRemove: (id: string) => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({ notifications, onRemove }) => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-full max-w-sm flex flex-col gap-2 px-4 pointer-events-none">
      {notifications.map((n) => (
        <div 
          key={n.id}
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl p-4 shadow-2xl pointer-events-auto animate-modal flex gap-4 items-start relative overflow-hidden group"
        >
          <div className="absolute bottom-0 left-0 h-1 bg-indigo-600 animate-[shrink_5s_linear_forwards]" />
          
          <div className={`p-2 rounded-xl flex-shrink-0 ${n.type === 'sms' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
            {n.type === 'sms' ? <MessageSquare className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{n.title}</p>
              <button onClick={() => onRemove(n.id)} className="text-gray-400 hover:text-gray-600">
                <X className="w-3 h-3" />
              </button>
            </div>
            <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{n.message}</p>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};
