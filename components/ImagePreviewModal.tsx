
import React, { useEffect } from 'react';
import { X, ZoomIn, Download, Share2 } from 'lucide-react';

interface ImagePreviewModalProps {
  imageUrl: string | null;
  onClose: () => void;
  productName?: string;
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({ imageUrl, onClose, productName }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-[600] flex items-center justify-center p-4 md:p-10 animate-fade-in"
      onClick={onClose}
    >
      {/* Cinematic Backdrop */}
      <div className="absolute inset-0 bg-[#080a12]/95 backdrop-blur-2xl" />
      
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[610] p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all hover:rotate-90 group"
      >
        <X className="w-8 h-8 group-hover:text-amber-500" />
      </button>

      {/* Image Container */}
      <div 
        className="relative z-[605] max-w-5xl w-full max-h-full flex flex-col items-center animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <img 
            src={imageUrl} 
            alt={productName || 'Product Preview'} 
            className="max-w-full max-h-[80vh] object-contain cursor-zoom-out"
            onClick={onClose}
          />
          
          {/* Bottom Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
            <div>
               <p className="text-white font-black text-xl tracking-tighter italic">{productName || 'Masterpiece'}</p>
               <p className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em]">DYmartins Private Collection</p>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">
                 <ZoomIn className="w-4 h-4" /> 100% Detail
               </div>
            </div>
          </div>
        </div>
        
        <p className="mt-6 text-gray-500 text-[10px] font-black uppercase tracking-[0.6em] animate-pulse">
          Click anywhere to exit gallery
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
