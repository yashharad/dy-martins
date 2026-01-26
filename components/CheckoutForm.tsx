
import React, { useState } from 'react';
import { CustomerDetails, Product } from '../types';
import { STATES } from '../constants';
import { User, Phone, MapPin, ArrowRight } from 'lucide-react';

interface CheckoutFormProps {
  product: Product;
  onSubmit: (details: CustomerDetails) => void;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ product, onSubmit }) => {
  const [details, setDetails] = useState<CustomerDetails>({
    fullName: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerDetails, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof CustomerDetails]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof CustomerDetails, string>> = {};
    if (!details.fullName) newErrors.fullName = 'Required';
    if (!details.mobile || !/^\d{10}$/.test(details.mobile)) newErrors.mobile = 'Enter valid 10-digit number';
    if (!details.address) newErrors.address = 'Full address required';
    if (!details.city) newErrors.city = 'Required';
    if (!details.state) newErrors.state = 'Required';
    if (!details.pincode || !/^\d{6}$/.test(details.pincode)) newErrors.pincode = 'Valid 6-digit PIN required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(details);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 theme-transition">
      <div className="bg-white dark:bg-[#111114] rounded-3xl p-6 md:p-8 shadow-2xl dark:shadow-none border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-4 mb-8 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
          <img src={product.image} className="w-16 h-16 rounded-xl object-cover shadow-sm border border-gray-200 dark:border-gray-700" alt="" />
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Selected Frame</p>
            <h3 className="font-bold text-gray-900 dark:text-white leading-tight">{product.name}</h3>
            <p className="text-indigo-600 dark:text-indigo-500 font-bold">₹{product.price}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Shipping Details</h2>
          
          <div className="space-y-4">
            <div className="group">
              <label className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1.5 block">Full Name</label>
              <div className="relative">
                <input 
                  type="text" name="fullName" value={details.fullName} onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full bg-white dark:bg-gray-800/40 border ${errors.fullName ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-xl py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600`}
                />
              </div>
              {errors.fullName && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.fullName}</p>}
            </div>

            <div className="group">
              <label className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1.5 block">Mobile Number</label>
              <input 
                type="tel" name="mobile" value={details.mobile} onChange={handleChange}
                placeholder="9876543210"
                maxLength={10}
                className={`w-full bg-white dark:bg-gray-800/40 border ${errors.mobile ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-xl py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600`}
              />
              {errors.mobile && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.mobile}</p>}
            </div>

            <div className="group">
              <label className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1.5 block">Shipping Address</label>
              <textarea 
                name="address" value={details.address} onChange={handleChange}
                placeholder="House No, Street, Landmark"
                rows={3}
                className={`w-full bg-white dark:bg-gray-800/40 border ${errors.address ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-xl py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none placeholder:text-gray-400 dark:placeholder:text-gray-600`}
              />
              {errors.address && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1.5 block">City</label>
                <input 
                  type="text" name="city" value={details.city} onChange={handleChange}
                  placeholder="Mumbai"
                  className={`w-full bg-white dark:bg-gray-800/40 border ${errors.city ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-xl py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600`}
                />
              </div>
              <div className="group">
                <label className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1.5 block">Pincode</label>
                <input 
                  type="text" name="pincode" value={details.pincode} onChange={handleChange}
                  placeholder="400001"
                  maxLength={6}
                  className={`w-full bg-white dark:bg-gray-800/40 border ${errors.pincode ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-xl py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600`}
                />
              </div>
            </div>

            <div className="group">
              <label className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1.5 block">State</label>
              <select 
                name="state" value={details.state} onChange={handleChange}
                className={`w-full bg-white dark:bg-gray-800/40 border ${errors.state ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-xl py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all appearance-none`}
              >
                <option value="" className="bg-white dark:bg-gray-900">Select State</option>
                {STATES.map(s => <option key={s} value={s} className="bg-white dark:bg-gray-900">{s}</option>)}
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-900/20 flex items-center justify-center gap-2 transition-all active:scale-95 mt-8"
          >
            Continue to Payment
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
