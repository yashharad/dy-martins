
import React from 'react';
import { Filter, X, Star, Check } from 'lucide-react';
import { SEGMENTS_INFO } from '../constants';
import { ProductSegment } from '../types';

interface FilterSidebarProps {
  activeSegment: string | null;
  onSegmentChange: (segment: any) => void;
  priceRange: [number, number] | null;
  onPriceChange: (range: [number, number] | null) => void;
  minRating: number | null;
  onRatingChange: (rating: number | null) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

// Fix: Use React.PropsWithChildren to resolve "children property missing" error in certain TypeScript environments
const SectionTitle = ({ children }: React.PropsWithChildren<{}>) => (
  <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
    <div className="w-1 h-1 rounded-full bg-amber-500" />
    {children}
  </h4>
);

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  activeSegment,
  onSegmentChange,
  priceRange,
  onPriceChange,
  minRating,
  onRatingChange,
  onClose,
  isMobile
}) => {
  const priceOptions: { label: string; value: [number, number] | null }[] = [
    { label: 'All Prices', value: null },
    { label: 'Under ₹500', value: [0, 500] },
    { label: '₹500 - ₹1000', value: [500, 1000] },
    { label: '₹1000 - ₹2000', value: [1000, 2000] },
    { label: 'Over ₹2000', value: [2000, 10000] },
  ];

  const ratingOptions = [null, 4, 3];

  return (
    <div className={`flex flex-col h-full bg-white dark:bg-[#111114] ${isMobile ? '' : 'border-r border-gray-100 dark:border-white/5'} theme-transition`}>
      <div className="p-6 border-b border-gray-50 dark:border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-amber-600" />
          <h3 className="font-black text-gray-900 dark:text-white uppercase tracking-tighter text-lg">Filters</h3>
        </div>
        {isMobile && onClose && (
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-10 custom-scrollbar">
        {/* Category Segment */}
        <section>
          {/* SectionTitle usage with children */}
          <SectionTitle>Category</SectionTitle>
          <div className="space-y-2">
            {SEGMENTS_INFO.map(seg => (
              <button
                key={seg.id}
                onClick={() => onSegmentChange(seg.id)}
                className={`w-full text-left px-4 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-between group ${
                  activeSegment === seg.id 
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/20' 
                    : 'bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
                }`}
              >
                {seg.title}
                {activeSegment === seg.id && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </section>

        {/* Price Range */}
        <section>
          {/* SectionTitle usage with children */}
          <SectionTitle>Price Range</SectionTitle>
          <div className="space-y-2">
            {priceOptions.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => onPriceChange(opt.value)}
                className={`w-full text-left px-4 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-between ${
                  JSON.stringify(priceRange) === JSON.stringify(opt.value)
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' 
                    : 'bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
                }`}
              >
                {opt.label}
                {JSON.stringify(priceRange) === JSON.stringify(opt.value) && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </section>

        {/* Ratings */}
        <section>
          {/* SectionTitle usage with children */}
          <SectionTitle>Minimum Rating</SectionTitle>
          <div className="space-y-2">
            {ratingOptions.map((val, idx) => (
              <button
                key={idx}
                onClick={() => onRatingChange(val)}
                className={`w-full text-left px-4 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-between ${
                  minRating === val
                    ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' 
                    : 'bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  {val === null ? 'All Ratings' : (
                    <>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(val)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                      <span>{val}+ Stars</span>
                    </>
                  )}
                </div>
                {minRating === val && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="p-6 border-t border-gray-50 dark:border-white/5">
        <button 
          onClick={() => {
            onPriceChange(null);
            onRatingChange(null);
            if (isMobile && onClose) onClose();
          }}
          className="w-full py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-amber-600 transition-colors"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );
};
