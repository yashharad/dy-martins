
import React from 'react';
import { Product } from '../types';
import { ChevronRight, Star, Eye, Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onPreview: (imageUrl: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onPreview }) => {
  const avgRating = product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length;
  // Dynamic original price (fake slash price)
  const originalPrice = Math.floor(product.price * 1.6 + 101);
  const discountPercentage = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <div 
      className="bg-white dark:bg-[#111114] rounded-3xl border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full cursor-pointer relative"
    >
      <div 
        onClick={() => onViewDetails(product)}
        className="relative aspect-[4/5] overflow-hidden bg-gray-50 dark:bg-[#0c0c0e]"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Actions - Inspect Art triggers preview */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onPreview(product.image);
            }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-3 hover:bg-amber-600 hover:border-amber-400 transition-colors shadow-2xl"
          >
             <Eye className="w-5 h-5 text-white" />
             <span className="text-xs font-black text-white uppercase tracking-widest">Inspect Art</span>
          </button>
        </div>

        {/* Top Left: Segment Badge */}
        <div className="absolute top-4 left-4">
           <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-[8px] font-black text-white uppercase tracking-[0.2em]">
             {product.segment.replace('-', ' ')}
           </div>
        </div>

        {/* Top Right: Discount Badge */}
        <div className="absolute top-4 right-4">
           <div className="bg-red-600 px-3 py-1.5 rounded-xl text-[10px] font-black text-white uppercase tracking-wider shadow-lg shadow-red-900/40 border border-red-500/50 flex items-center gap-1.5 animate-pulse">
             <Tag className="w-3 h-3" />
             {discountPercentage}% OFF
           </div>
        </div>
      </div>
      
      <div 
        onClick={() => onViewDetails(product)}
        className="p-6 flex flex-col flex-1"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {avgRating.toFixed(1)} Verified
            </span>
          </div>
          <div className="px-2 py-0.5 bg-green-500/10 text-green-500 rounded-md text-[8px] font-black uppercase tracking-wider border border-green-500/20">
            IN STOCK
          </div>
        </div>

        <h3 className="font-bold text-base text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-amber-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-5 flex items-center justify-between border-t border-gray-50 dark:border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5 line-through decoration-red-500/60">₹{originalPrice}</span>
            <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">₹{product.price}</span>
          </div>
          <div className="bg-gray-50 dark:bg-white/5 text-gray-400 group-hover:bg-amber-600 group-hover:text-white p-3 rounded-2xl transition-all duration-500 transform group-hover:rotate-12">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
