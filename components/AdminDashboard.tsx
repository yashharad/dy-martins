
import React, { useState, useRef } from 'react';
import { Order } from '../types';
import { Search, Calendar, Package, User as UserIcon, CreditCard, ExternalLink, Cloud, Globe, Database, MapPin, Trash2, RefreshCw, Download, Upload, ShieldAlert, QrCode, Image as ImageIcon } from 'lucide-react';

interface AdminDashboardProps {
  orders: Order[];
  qrCodeUrl: string;
  onUpdateQr: (base64: string) => void;
  onSyncGlobal?: () => void;
  onClearAll?: () => void;
  onExport?: () => void;
  onImport?: (file: File) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  orders, qrCodeUrl, onUpdateQr, onSyncGlobal, onClearAll, onExport, onImport 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const qrInputRef = useRef<HTMLInputElement>(null);

  const filteredOrders = orders
    .filter(order => {
      const matchesSearch = 
        order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerDetails.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerDetails.mobile.includes(searchTerm);
      return matchesSearch;
    })
    .sort((a, b) => b.timestamp - a.timestamp);

  const handleQrUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateQr(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">Orders Center</h1>
            <div className="bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-amber-200 dark:border-amber-900/30 flex items-center gap-1.5">
              <ShieldAlert className="w-3 h-3" /> Local Node Mode
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Currently viewing {orders.length} real transactions from THIS device.</p>
        </div>
        
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <input type="file" ref={fileInputRef} className="hidden" accept=".json" onChange={(e) => e.target.files && onImport?.(e.target.files[0])} />
          <input type="file" ref={qrInputRef} className="hidden" accept="image/*" onChange={handleQrUpload} />
          
          <button 
            onClick={() => qrInputRef.current?.click()} 
            className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-indigo-700 dark:text-indigo-400 px-4 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-lg shadow-indigo-900/10"
          >
            <QrCode className="w-4 h-4" /> Update Payment QR
          </button>

          <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-indigo-500 transition-all dark:text-white">
            <Upload className="w-4 h-4 text-indigo-600" /> Import Database
          </button>

          <button onClick={onExport} className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-indigo-500 transition-all dark:text-white">
            <Download className="w-4 h-4 text-green-600" /> Export Database
          </button>
          
          <button onClick={onClearAll} className="p-4 bg-red-50 dark:bg-red-950/20 text-red-600 rounded-2xl hover:bg-red-600 hover:text-white transition-all">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white dark:bg-[#111114] p-6 rounded-[32px] border border-gray-200 dark:border-gray-800 shadow-sm col-span-1 flex flex-col items-center justify-center">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Current Payment QR</p>
          <div className="relative group w-32 h-32">
            <img 
              src={qrCodeUrl} 
              className="w-full h-full object-contain rounded-xl bg-white p-2 border border-gray-100 dark:border-gray-800"
              alt="Store QR"
              onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=No+QR'}
            />
            <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer" onClick={() => qrInputRef.current?.click()}>
              <ImageIcon className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#111114] p-8 rounded-[32px] border border-gray-200 dark:border-gray-800 shadow-sm">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Device Storage</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-indigo-600" />
              <span className="text-2xl font-black text-gray-900 dark:text-white">{orders.length}</span>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">Active Node</span>
          </div>
        </div>
        <div className="bg-white dark:bg-[#111114] p-8 rounded-[32px] border border-gray-200 dark:border-gray-800 shadow-sm">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Revenue</p>
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-green-500" />
            <span className="text-2xl font-black text-gray-900 dark:text-white">₹{orders.reduce((sum, o) => sum + o.price, 0).toLocaleString()}</span>
          </div>
        </div>
        <div className="bg-white dark:bg-[#111114] p-8 rounded-[32px] border border-gray-200 dark:border-gray-800 shadow-sm">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Market Reach</p>
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-blue-500" />
            <span className="text-2xl font-black text-gray-900 dark:text-white">{new Set(orders.map(o => o.customerDetails.city)).size} Cities</span>
          </div>
        </div>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text"
          placeholder="Search by Order ID, Name or Mobile..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white dark:bg-[#111114] border border-gray-200 dark:border-gray-800 rounded-3xl py-5 pl-14 pr-6 outline-none text-sm font-bold dark:text-white shadow-sm focus:border-indigo-500 transition-colors"
        />
      </div>

      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="bg-white dark:bg-[#111114] border border-dashed border-gray-200 dark:border-gray-800 rounded-[40px] p-24 text-center">
            <div className="bg-gray-50 dark:bg-gray-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Database className="w-10 h-10 text-gray-300" />
            </div>
            <p className="text-gray-400 font-black uppercase tracking-[0.2em] text-sm">Device Ledger is Empty</p>
            <p className="text-gray-500 text-xs mt-3 max-w-xs mx-auto">Import a backup or place a real order to see data here.</p>
          </div>
        ) : (
          filteredOrders.map(order => (
            <div key={order.orderId} className="bg-white dark:bg-[#111114] border border-gray-200 dark:border-gray-800 rounded-[32px] p-8 hover:shadow-2xl transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-5 py-2 bg-gray-100 dark:bg-gray-800 text-gray-500 text-[8px] font-black uppercase tracking-widest rounded-bl-2xl">
                {order.locationNode || 'LOCAL-NODE'}
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex items-start gap-6 flex-1">
                  <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-[22px] flex items-center justify-center flex-shrink-0 border border-indigo-100 dark:border-indigo-800/30">
                    <Package className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs font-black text-indigo-600">#{order.orderId}</span>
                      <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                        PAID
                      </span>
                    </div>
                    <h3 className="font-black text-gray-900 dark:text-white text-xl">{order.productName}</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                      ₹{order.price} • {new Date(order.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:border-l border-gray-100 dark:border-gray-800 lg:pl-10 flex-1">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                      <UserIcon className="w-3 h-3" /> Customer Details
                    </p>
                    <p className="text-base font-black text-gray-900 dark:text-white">{order.customerDetails.fullName}</p>
                    <p className="text-xs text-gray-500 font-bold">{order.customerDetails.mobile}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> Ship To
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-black leading-relaxed">
                      {order.customerDetails.city}, {order.customerDetails.state}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">{order.customerDetails.pincode}</p>
                  </div>
                </div>

                <div className="lg:pl-10 flex items-center gap-3">
                   {order.screenshot && (
                     <div className="w-14 h-14 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden cursor-zoom-in hover:scale-110 transition-transform shadow-lg">
                        <img src={order.screenshot} className="w-full h-full object-cover" alt="UTR" />
                     </div>
                   )}
                   <button 
                     onClick={() => window.open(`https://wa.me/${order.customerDetails.mobile}`, '_blank')}
                     className="bg-green-500 hover:bg-green-600 text-white p-5 rounded-3xl shadow-lg shadow-green-900/20 active:scale-90 transition-all"
                   >
                      <ExternalLink className="w-6 h-6" />
                   </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
