
import React, { useState, useEffect, useRef } from 'react';
import { Product, CustomerDetails } from '../types';
import { UPI_ID } from '../constants';
import { Smartphone, Info, Check, Hash, X, Camera, ShieldCheck, AlertCircle, Copy, QrCode, ExternalLink, Zap } from 'lucide-react';

interface PaymentPageProps {
  product: Product;
  details: CustomerDetails;
  qrCodeUrl: string; // Base QR for fallback
  onPaid: (transactionId: string, screenshot?: File) => void;
}

type PaymentMethod = 'DIRECT_APP' | 'MANUAL_ID';

export const PaymentPage: React.FC<PaymentPageProps> = ({ product, details, qrCodeUrl, onPaid }) => {
  const [method, setMethod] = useState<PaymentMethod>('DIRECT_APP');
  const [txnId, setTxnId] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Payee Configuration
  const payeeName = "DYmartins";
  const transactionNote = encodeURIComponent(`Order for ${product.name}`);
  
  // High-fidelity UPI Deep Link for mobile redirection
  const upiDeepLink = `upi://pay?pa=${UPI_ID}&pn=${payeeName}&am=${product.price.toFixed(2)}&cu=INR&tn=${transactionNote}`;
  
  // Real Dynamic QR Code generated to reflect the exact account and price
  const dynamicQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(upiDeepLink)}`;

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError('');
    }
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirm = () => {
    if (!txnId || txnId.length < 10) {
      setError('Enter a valid 12-digit UTR number');
      return;
    }
    onPaid(txnId, screenshot || undefined);
  };

  const handleOpenApp = () => {
    // Triggers the mobile UPI app drawer
    window.location.href = upiDeepLink;
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 pb-12 theme-transition animate-modal">
      <div className="bg-white dark:bg-[#0c0c10] rounded-[48px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5">
        {/* Top Header Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 px-8 py-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
          
          <p className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.5em] mb-3">Secure Transaction Node</p>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-2xl text-indigo-200 font-bold opacity-50">₹</span>
            <h2 className="text-7xl font-black text-white tracking-tighter italic">{product.price}</h2>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-2 bg-black/20 w-fit mx-auto px-5 py-2 rounded-2xl backdrop-blur-xl border border-white/10">
            <ShieldCheck className="w-4 h-4 text-indigo-300" />
            <span className="text-white font-black text-[9px] uppercase tracking-widest">Encrypted Escrow Active</span>
          </div>
        </div>

        <div className="p-8 md:p-10">
          {/* Method Selection Tabs */}
          <div className="flex p-1.5 bg-gray-100 dark:bg-white/5 rounded-[24px] mb-10 border border-gray-200 dark:border-white/5">
            <button 
              onClick={() => setMethod('DIRECT_APP')}
              className={`flex-1 py-4 rounded-[20px] text-[10px] font-black uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 ${method === 'DIRECT_APP' ? 'bg-white dark:bg-white/10 text-indigo-600 dark:text-white shadow-xl ring-1 ring-black/5' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
            >
              <Smartphone className={`w-4 h-4 ${method === 'DIRECT_APP' ? 'animate-bounce' : ''}`} /> Pay via App
            </button>
            <button 
              onClick={() => setMethod('MANUAL_ID')}
              className={`flex-1 py-4 rounded-[20px] text-[10px] font-black uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 ${method === 'MANUAL_ID' ? 'bg-white dark:bg-white/10 text-indigo-600 dark:text-white shadow-xl ring-1 ring-black/5' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
            >
              <QrCode className="w-4 h-4" /> UPI ID / QR
            </button>
          </div>

          {/* Dynamic Content Area */}
          <div className="mb-10 min-h-[320px] flex flex-col justify-center">
            {method === 'DIRECT_APP' ? (
              <div className="bg-indigo-50/50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 rounded-[40px] p-10 text-center animate-modal">
                <div className="w-20 h-20 bg-white dark:bg-[#111114] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-500/10 border border-indigo-50 dark:border-indigo-500/20">
                  <Zap className="w-10 h-10 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">One-Tap Payment</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 max-w-xs mx-auto leading-relaxed italic">
                  Launch your preferred UPI app. The amount <b>₹{product.price}</b> and recipient <b>{payeeName}</b> are automatically pre-filled.
                </p>
                <button 
                  onClick={handleOpenApp}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-6 rounded-[28px] shadow-2xl shadow-indigo-600/30 flex items-center justify-center gap-4 transition-all active:scale-95 group"
                >
                  Pay via Any UPI App 
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="mt-6 text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-60">Redirects to PhonePe, GPay, Paytm & More</p>
              </div>
            ) : (
              <div className="flex flex-col items-center animate-modal">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-indigo-500/10 rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative bg-white p-6 rounded-[40px] shadow-2xl border border-gray-100 dark:border-white/5">
                    {/* Displaying a high-quality functional QR including account and amount */}
                    <img src={dynamicQrUrl} alt="Real Account QR" className="w-60 h-60 object-contain" />
                  </div>
                </div>
                
                <div className="mt-10 w-full">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-3 text-center">Tap to Copy Destination ID</p>
                  <div 
                    onClick={handleCopyUPI}
                    className="flex items-center justify-between gap-4 bg-gray-50 dark:bg-white/5 px-6 py-5 rounded-[28px] border border-gray-200 dark:border-white/10 cursor-pointer group hover:border-indigo-500 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Payee Address</span>
                      <p className="text-base font-black text-gray-900 dark:text-white font-mono">{UPI_ID}</p>
                    </div>
                    <div className={`p-3 rounded-2xl transition-all duration-500 ${copied ? 'bg-green-500 text-white rotate-[360deg]' : 'bg-white dark:bg-white/10 text-gray-400 group-hover:text-indigo-600'}`}>
                      {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </div>
                    {copied && (
                      <div className="absolute inset-0 bg-green-500 flex items-center justify-center animate-modal">
                        <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Address Copied!</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Verification Section */}
          <div className="space-y-8 pt-10 border-t border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <AlertCircle className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400">Please provide transaction details for verification.</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5 block ml-1">12-Digit Reference (UTR)</label>
                <div className="relative group">
                  <Hash className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                  <input 
                    type="text" 
                    value={txnId}
                    onChange={(e) => { setTxnId(e.target.value.replace(/\D/g, '')); setError(''); }}
                    placeholder="Enter Reference Number"
                    maxLength={12}
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[24px] py-5 pl-14 pr-6 text-gray-900 dark:text-white font-mono text-base focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                  />
                </div>
                {error && <p className="text-red-500 text-[10px] mt-2 font-black uppercase tracking-wider ml-1">{error}</p>}
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5 block ml-1">Screenshot of Success Screen</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative flex flex-col items-center justify-center w-full min-h-[120px] border-2 border-dashed rounded-[32px] cursor-pointer transition-all duration-500 ${
                    previewUrl ? 'border-indigo-500 bg-indigo-500/5' : 'border-gray-200 dark:border-white/10 hover:border-indigo-500/50 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {previewUrl ? (
                    <div className="flex items-center gap-5 p-4">
                      <div className="relative">
                        <img src={previewUrl} alt="Preview" className="h-16 w-16 object-cover rounded-2xl border-2 border-white dark:border-white/10 shadow-2xl" />
                        <div className="absolute -top-2 -right-2 bg-indigo-600 text-white p-1 rounded-full border-2 border-white dark:border-[#0c0c10]">
                          <Check className="w-3 h-3" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Receipt Captured</span>
                        <span className="text-[9px] text-gray-400 font-bold">Tap to replace image</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Camera className="w-5 h-5 text-gray-400" />
                      </div>
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Attach Payment Receipt</p>
                    </div>
                  )}
                  <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </div>
              </div>
            </div>

            <button 
              onClick={handleConfirm}
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black py-7 rounded-[32px] shadow-2xl hover:shadow-indigo-500/10 transition-all active:scale-[0.98] text-xl tracking-tight relative overflow-hidden group"
            >
              <span className="relative z-10">Verify & Complete Acquisition</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
            
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">Protocol: V3 Secure Node Confirmed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
