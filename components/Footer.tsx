
import React from 'react';
import { HelpCircle, ShieldCheck, Mail, PhoneCall, Truck, MapPin, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { CONTACT_WHATSAPP } from '../constants';

export const Footer: React.FC = () => {
  const handleCustomRequest = () => {
    const message = encodeURIComponent("Hi DYmartins! I want to talk about a custom frame for my vehicle. Can you help me with a special design?");
    window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-white dark:bg-[#080a12] text-gray-900 dark:text-white mt-12 theme-transition">
      {/* Custom Framing Contact CTA Section */}
      <div className="bg-indigo-600 dark:bg-indigo-700 py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-black/20 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-indigo-200 fill-indigo-200" />
              <span className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.5em]">Custom Order</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.9] mb-4 italic">
              NEED A <span className="text-indigo-200 underline decoration-indigo-300/30">CUSTOM</span> DESIGN?
            </h3>
            <p className="text-indigo-100 text-base md:text-lg font-medium max-w-xl opacity-90 leading-relaxed">
              For special car models, custom sizes, or frames with extra lights, we are ready to help you build exactly what you need.
            </p>
          </div>
          
          <button 
            onClick={handleCustomRequest}
            className="group relative bg-white text-indigo-700 font-black px-10 py-6 rounded-[28px] flex items-center gap-4 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-900/40 text-lg"
          >
            <div className="bg-indigo-100 p-2 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span>Chat With Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-6">
        {/* Brand Info */}
        <div>
          <h3 className="text-3xl font-logo mb-4">DY<span className="text-amber-600 dark:text-amber-500">martins</span></h3>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Custom Framing Specialists</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
            India's best choice for custom car and bike frames. We make high-quality products that look great and last long.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-amber-600 dark:hover:bg-amber-600 hover:text-white transition-all cursor-pointer border border-gray-200 dark:border-gray-700">
              <Mail className="w-5 h-5" />
            </div>
            <div 
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-green-600 dark:hover:bg-green-600 hover:text-white transition-all cursor-pointer border border-gray-200 dark:border-gray-700"
              onClick={() => window.open(`https://wa.me/${CONTACT_WHATSAPP}`, '_blank')}
            >
              <PhoneCall className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Why Prepaid */}
        <div>
          <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-500" />
            Why Prepaid Only?
          </h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex gap-2"><span>•</span> <span>Lets us focus on making your frame perfect.</span></li>
            <li className="flex gap-2"><span>•</span> <span>Faster shipping for custom orders.</span></li>
            <li className="flex gap-2"><span>•</span> <span>Lower prices by avoiding extra delivery costs.</span></li>
            <li className="flex gap-2"><span>•</span> <span>Safe and easy payments via UPI.</span></li>
          </ul>
        </div>

        {/* Delivery Timelines */}
        <div>
          <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
            <Truck className="w-5 h-5 text-amber-600 dark:text-amber-500" />
            Estimated Delivery
          </h4>
          <div className="space-y-4 text-sm">
            <div className="border-b border-gray-100 dark:border-gray-800 pb-2">
              <p className="text-gray-900 dark:text-white font-bold text-xs uppercase tracking-wider">Metro Cities</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">2 - 4 Business Days</p>
            </div>
            <div className="border-b border-gray-100 dark:border-gray-800 pb-2">
              <p className="text-gray-900 dark:text-white font-bold text-xs uppercase tracking-wider">North & West India</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">3 - 5 Business Days</p>
            </div>
            <div className="border-b border-gray-100 dark:border-gray-800 pb-2">
              <p className="text-gray-900 dark:text-white font-bold text-xs uppercase tracking-wider">South & East India</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">5 - 7 Business Days</p>
            </div>
            <p className="text-[10px] text-gray-500 italic mt-2">
              *Sent via BlueDart, Delhivery or XpressBees.
            </p>
          </div>
        </div>

        {/* Trust & Support */}
        <div>
          <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-500" />
            Our Quality Promise
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Every DYmartins frame is checked for quality. If there is any problem, our WhatsApp support is always here to help you.
          </p>
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-300">Support Active Now</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest px-6">
        <p>© 2024 DYmartins India. All Rights Reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-amber-600 dark:hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-amber-600 dark:hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-amber-600 dark:hover:text-white cursor-pointer transition-colors">Refund Policy</span>
        </div>
      </div>
    </footer>
  );
};
