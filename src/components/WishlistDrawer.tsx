import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onRemoveFromWishlist: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onRemoveFromWishlist
}) => {
  if (!isOpen) return null;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e0e12] border-l border-white/10 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 fill-white text-white" />
              <h2 className="font-heading font-black text-2xl uppercase tracking-wider text-white">
                SAVED GEAR
              </h2>
              <span className="px-2 py-0.5 bg-white/10 text-xs font-mono text-zinc-300 border border-white/10">
                {products.length}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close wishlist"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 divide-y divide-white/5">
            {products.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <Heart className="w-12 h-12 text-zinc-600 mx-auto" />
                <p className="font-heading text-2xl font-black uppercase tracking-wider text-zinc-500">
                  NO SAVED ITEMS
                </p>
                <p className="text-zinc-400 text-xs max-w-xs mx-auto">
                  Click the heart icon on any product to save it to your training roster.
                </p>
              </div>
            ) : (
              products.map((p) => (
                <div key={p.id} className="pt-4 first:pt-0 flex gap-4">
                  {/* Thumbnail */}
                  <div
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="w-20 h-24 flex-shrink-0 bg-zinc-900 border border-white/10 overflow-hidden cursor-pointer"
                  >
                    <img src={p.primaryImage} alt={p.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            onSelectProduct(p);
                            onClose();
                          }}
                          className="font-heading font-bold text-base uppercase tracking-wider text-white line-clamp-1 hover:text-zinc-300 cursor-pointer"
                        >
                          {p.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFromWishlist(p)}
                          aria-label="Remove from wishlist"
                          className="text-zinc-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">{p.subcategory.toUpperCase()}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="font-heading font-bold text-base text-white tracking-wider">
                        {formatINR(p.price)}
                      </span>
                      <button
                        onClick={() => {
                          onSelectProduct(p);
                          onClose();
                        }}
                        className="px-3 py-1.5 bg-white text-black hover:bg-zinc-200 font-heading font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>CHOOSE SIZE</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-white/10 bg-[#0b0b0e]">
            <button
              onClick={onClose}
              className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-heading font-bold text-xs tracking-widest uppercase border border-white/10 transition-colors"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
