
import React, { useEffect } from 'react';
import { CheckCircle, Package, Home, Send, Paperclip, Trophy, Coins, Smartphone, Gift } from 'lucide-react';
import { CONTACT_WHATSAPP } from '../constants';
import { Order, User } from '../types';

interface SuccessPageProps {
  order: Order;
  user: User | null;
  onHome: () => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ order, user, onHome }) => {
  
  const saveOrderToGoogleSheets = async () => {
    try {
      const { productName, price, customerDetails } = order;
      const email = user?.email || user?.identifier || 'guest@fmobile.com';
      const frameType = productName.toLowerCase().includes('car') ? 'Car Frame' : 'Bike Frame';
      
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfz5JiCVF6ZRZPHS5vx02V8puCquMAc6sszX2lwvsHuhv4FQA/formResponse";
      
      const formData = new URLSearchParams();
      formData.append("entry.107733416", email);              
      formData.append("entry.1112469267", productName);        
      formData.append("entry.221750600", frameType);          
      formData.append("entry.1602667731", "1");               
      formData.append("entry.1515953916", price.toString());   

      await fetch(formUrl, { 
        method: "POST", 
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
      });
    } catch (error) {
      console.error("Registry Update Failed:", error);
    }
  };

  useEffect(() => {
    saveOrderToGoogleSheets();
  }, []);

  const handleFinalWhatsAppConfirmation = () => {
    const { orderId, productName, price, customerDetails, transactionId } = order;
    const { fullName, mobile, address, city, state, pincode } = customerDetails;

    const messageText = `*NEW ORDER SUBMITTED* 📦\n\n*Order ID:* #${orderId}\n*Product:* ${productName} (₹${price})\n\n*--- LOYALTY PROGRESS ---*\nI am one step closer to my FREE Custom Mobile Skin! 📱\n\n*--- CASHBACK CLAIM ---*\nI am eligible for the "Win up to ₹500 Cashback" offer! 🏆\n\n*--- CUSTOMER DETAILS ---*\n*Name:* ${fullName}\n*Mobile:* ${mobile}\n*Address:* ${address}, ${city}, ${state} - ${pincode}\n\n*--- PAYMENT INFO ---*\n*UTR/Transaction ID:* ${transactionId}\n\nPlease verify my payment and confirm the order. (Attached screenshot below) 👇`;

    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-16 text-center theme-transition">
      <div className="mb-10 flex flex-col items-center">
        <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mb-6 animate-pulse border border-green-200 dark:border-transparent">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Order Submitted!</h2>
        <p className="text-gray-600 dark:text-gray-400 font-medium">Your order has been registered. Now, confirm it on WhatsApp.</p>
      </div>

      {/* Rewards Row */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        {/* Cashback Reward Card */}
        <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-[1px] rounded-[32px] overflow-hidden shadow-xl shadow-amber-900/20">
          <div className="bg-white dark:bg-[#0f0f12] rounded-[31px] p-6 flex items-center gap-5 text-left h-full">
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-950/40 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <p className="text-[10px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-1">Reward Entry Confirmed</p>
              <h4 className="font-black text-gray-900 dark:text-white text-lg leading-tight">You've entered the ₹500 Cashback Lucky Draw!</h4>
            </div>
          </div>
        </div>

        {/* Loyalty Skin Card */}
        <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 p-[1px] rounded-[32px] overflow-hidden shadow-xl shadow-indigo-900/20">
          <div className="bg-white dark:bg-[#0f0f12] rounded-[31px] p-6 flex items-center gap-5 text-left h-full">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-950/40 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0">
              <Smartphone className="w-8 h-8" />
            </div>
            <div>
              <p className="text-[10px] font-black text-indigo-600 dark:text-indigo-500 uppercase tracking-widest mb-1">Loyalty Perk Active</p>
              <h4 className="font-black text-gray-900 dark:text-white text-lg leading-tight">1 step closer to your FREE Custom Mobile Skin!</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#111114] rounded-3xl p-8 shadow-2xl dark:shadow-none border border-gray-200 dark:border-gray-800 mb-8 text-left">
        <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800 mb-6">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Order ID</span>
          <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900/30">#{order.orderId}</span>
        </div>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-xl flex-shrink-0 h-fit border border-indigo-100 dark:border-indigo-800/30">
              <Package className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">Automated Sync</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                Your order was automatically saved to our master ledger. No further action needed here.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded-xl flex-shrink-0 h-fit border border-amber-100 dark:border-amber-800/30">
              <Paperclip className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">Final Step</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                Click the button below and <b>attach your payment screenshot</b> in WhatsApp to finalize delivery and rewards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button 
          onClick={handleFinalWhatsAppConfirmation}
          className="w-full bg-[#25D366] hover:bg-[#1ebc5a] text-white font-bold py-5 rounded-2xl shadow-xl shadow-green-900/20 transition-all active:scale-95 flex flex-col items-center justify-center gap-1"
        >
          <div className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            <span>Confirm & Claim Rewards</span>
          </div>
          <span className="text-[10px] opacity-80 uppercase tracking-widest font-black">Open WhatsApp</span>
        </button>
        
        <button 
          onClick={onHome}
          className="w-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-500 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm"
        >
          <Home className="w-4 h-4" />
          Back to Store
        </button>
      </div>
    </div>
  );
};
