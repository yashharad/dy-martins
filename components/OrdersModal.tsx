
import React from 'react';
import { X, Package, ExternalLink, Calendar, Hash, Truck } from 'lucide-react';
import { Order } from '../types';

interface OrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
}

export const OrdersModal: React.FC<OrdersModalProps> = ({ isOpen, onClose, orders }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] bg-black/60 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white dark:bg-[#0f0f12] w-full max-w-2xl h-[85vh] sm:h-auto sm:max-h-[80vh] rounded-t-[40px] sm:rounded-[40px] shadow-2xl border-t sm:border border-gray-100 dark:border-gray-800 overflow-hidden animate-modal flex flex-col">
        {/* Header */}
        <div className="p-8 pb-4 flex justify-between items-start border-b border-gray-50 dark:border-gray-800/50">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-none italic">
              MY <span className="text-amber-600">ORDERS</span>
            </h2>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-2">
              Order history & tracking
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
          {orders.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-20 h-20 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mb-6">
                <Package className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 italic">No Orders Yet</h3>
              <p className="text-gray-500 text-xs max-w-xs uppercase tracking-widest leading-loose">
                Browse our collection and start your first acquisition.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.orderId} className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5 group hover:border-amber-500/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-600 border border-indigo-600/20">
                        <Package className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-black text-indigo-600 uppercase tracking-tighter">#{order.orderId}</span>
                          <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-green-500 text-white">Paid</span>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mt-0.5">{order.productName}</h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-gray-900 dark:text-white italic">₹{order.price}</p>
                      <p className="text-[9px] text-gray-400 font-bold flex items-center gap-1 justify-end mt-1">
                        <Calendar className="w-3 h-3" /> {new Date(order.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <Truck className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Awaiting Verification</span>
                    </div>
                    <button 
                      onClick={() => window.open(`https://wa.me/919175488551?text=${encodeURIComponent(`Checking status of order #${order.orderId}`)}`, '_blank')}
                      className="text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                    >
                      Track via WhatsApp <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 dark:bg-gray-900/20 text-center border-t border-gray-50 dark:border-gray-800/50">
           <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">
             Protocol V3 Cloud Sync Active
           </p>
        </div>
      </div>
    </div>
  );
};
