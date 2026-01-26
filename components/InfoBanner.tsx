
import React from 'react';
import { ShieldCheck, Truck, Zap } from 'lucide-react';

export const InfoBanner: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 px-4 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl mb-12 theme-transition">
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-white dark:bg-gray-900 p-3 rounded-full mb-3 shadow-sm border border-gray-100 dark:border-gray-800">
          <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-500" />
        </div>
        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Premium Quality</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">Only high-grade materials used for long lasting durability.</p>
      </div>
      <div className="flex flex-col items-center text-center p-4 border-y md:border-y-0 md:border-x border-indigo-100 dark:border-indigo-900/20">
        <div className="bg-white dark:bg-gray-900 p-3 rounded-full mb-3 shadow-sm border border-gray-100 dark:border-gray-800">
          <Truck className="w-6 h-6 text-indigo-600 dark:text-indigo-500" />
        </div>
        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Free Delivery</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">Enjoy free shipping on all orders across India.</p>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-white dark:bg-gray-900 p-3 rounded-full mb-3 shadow-sm border border-gray-100 dark:border-gray-800">
          <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-500" />
        </div>
        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Prepaid Exclusive</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">Secure UPI payments for faster processing & tracking.</p>
      </div>
    </div>
  );
};
