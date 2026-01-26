
import React from 'react';
import { X, Star, User as UserIcon, Calendar } from 'lucide-react';
import { Product } from '../types';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  const avgRating = product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#0f0f12] w-full max-w-2xl max-h-[80vh] rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden animate-modal flex flex-col">
        {/* Header */}
        <div className="p-8 pb-4 flex justify-between items-start border-b border-gray-50 dark:border-gray-800/50">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
              Customer Reviews
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(avgRating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-gray-700'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">
                {avgRating.toFixed(1)} out of 5 ({product.reviews.length} ratings)
              </p>
            </div>
            <p className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mt-2">
              Verified Purchases for {product.name}
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Reviews List */}
        <div className="flex-1 overflow-y-auto p-8 pt-4 custom-scrollbar">
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 dark:bg-gray-900/40 p-5 rounded-3xl border border-gray-100 dark:border-gray-800/50 hover:border-indigo-100 dark:hover:border-indigo-900/30 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/30">
                      <UserIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">{review.userName}</h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-gray-700'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    <Calendar className="w-3 h-3" />
                    {review.date}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 dark:bg-gray-900/20 text-center border-t border-gray-50 dark:border-gray-800/50">
           <button 
             onClick={onClose}
             className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] hover:text-indigo-600 transition-colors"
           >
             Close Reviews
           </button>
        </div>
      </div>
    </div>
  );
};
