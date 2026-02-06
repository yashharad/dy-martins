import React from 'react';
import { Product } from '../types';
import { Star, CheckCircle2, Truck, ShieldCheck, Zap, ArrowRight, User as UserIcon, Calendar, Award, Maximize2 } from 'lucide-react';

interface ProductPageProps {
  product: Product;
  onBuyNow: () => void;
  onBack: () => void;
  onPreview: (url: string) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ product, onBuyNow, onBack, onPreview }) => {
  const avgRating = product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length;
  const originalPrice = Math.floor(product.price * 1.6 + 101);

  const scrollToReviews = () => {
    document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12 animate-modal theme-transition">
      <div className="flex flex-col lg:flex-row gap-16 mb-24">
        {/* Left: Product Image Gallery */}
        <div className="flex-1">
          <div className="sticky top-32">
            <div className="relative group cursor-zoom-in" onClick={() => onPreview(product.image)}>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-indigo-600 rounded-[48px] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
              <div className="relative aspect-square rounded-[48px] overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-[#111114] shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                />
                
                {/* Expand Indicator Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                   <div className="bg-white/90 dark:bg-black/80 px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/20 shadow-2xl">
                      <Maximize2 className="w-5 h-5 text-amber-600" />
                      <span className="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-white">Expand Art</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 lg:max-w-xl">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-amber-600/10 text-amber-600 dark:text-amber-400 text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-[0.3em] ring-1 ring-amber-600/20">
                Collector Edition
              </span>
              <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                <Award className="w-3.5 h-3.5" /> High Quality Print
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-[0.9] tracking-tighter italic">
              {product.name}
            </h1>

            <button 
              onClick={scrollToReviews}
              className="flex items-center gap-3 group mb-8 bg-gray-50 dark:bg-white/5 px-4 py-2 rounded-2xl border border-gray-100 dark:border-white/5"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(avgRating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200 dark:text-gray-700'}`} 
                  />
                ))}
              </div>
              <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest group-hover:text-amber-600 transition-colors">
                {avgRating.toFixed(1)} / 5.0 Rating
              </span>
            </button>

            <div className="flex items-baseline gap-4 mb-10">
              <span className="text-6xl font-black text-gray-900 dark:text-white tracking-tighter">₹{product.price}</span>
              <span className="text-gray-400 line-through font-bold text-xl decoration-red-500/40">₹{originalPrice}</span>
              <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-lg text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                Special Offer Active
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
               {product.specifications.map((spec, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 text-xs font-bold text-gray-700 dark:text-gray-300">
                   <CheckCircle2 className="w-4 h-4 text-amber-500" />
                   {spec}
                 </div>
               ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed mb-12 border-l-4 border-amber-600 pl-6 italic">
              {product.description}
            </p>

            <div className="flex flex-col gap-6">
              <button 
                onClick={onBuyNow}
                className="relative overflow-hidden bg-amber-600 hover:bg-amber-500 text-white font-black py-6 rounded-[28px] shadow-2xl shadow-amber-900/40 flex items-center justify-center gap-3 transition-all active:scale-95 text-xl group w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                Buy Now <ArrowRight className="w-6 h-6" />
              </button>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
                  <Truck className="w-5 h-5 text-amber-600 mb-2" />
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-500">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                  <ShieldCheck className="w-5 h-5 text-green-600 mb-2" />
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-500">Secure Payment</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                  <Zap className="w-5 h-5 text-indigo-600 mb-2" />
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-500">Prepaid Perk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section - Luxury Grid */}
      <div id="reviews-section" className="border-t border-gray-100 dark:border-white/5 pt-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span className="text-amber-600 text-[10px] font-black uppercase tracking-[0.5em]">The Dossier</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter italic">Customer Feedback</h2>
          </div>
          <div className="flex items-center gap-8 bg-white dark:bg-white/5 p-6 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-xl">
             <div className="text-center">
               <div className="text-5xl font-black text-gray-900 dark:text-white">{avgRating.toFixed(1)}</div>
               <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Global Index</p>
             </div>
             <div className="w-[1px] h-12 bg-gray-100 dark:bg-white/10" />
             <div>
               <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < Math.floor(avgRating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200 dark:text-gray-700'}`} 
                    />
                  ))}
               </div>
               <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Highly Satisfied</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.reviews.map((review) => (
            <div key={review.id} className="bg-white dark:bg-[#111114] p-10 rounded-[40px] border border-gray-100 dark:border-white/5 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <UserIcon className="w-24 h-24 transform translate-x-8 translate-y-[-8px]" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 border border-gray-100 dark:border-white/10">
                      <UserIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-black text-gray-900 dark:text-white text-lg">{review.userName}</p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200 dark:text-gray-700'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-base italic font-medium leading-relaxed mb-6">
                  "{review.comment}"
                </p>
                
                <div className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] pt-6 border-t border-gray-50 dark:border-white/5">
                  <Calendar className="w-3.5 h-3.5" />
                  Verified Acquisition • {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};