import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, Check, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout
}) => {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [couponApplied, setCouponApplied] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 1999;
  const isFreeShipping = subtotal >= freeShippingThreshold || items.length === 0;
  const shippingFee = isFreeShipping ? 0 : 99;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'PLAYBEYOND10') {
      setDiscountPercent(10);
      setCouponApplied('PLAYBEYOND10 applied (10% OFF)');
      setCouponError(null);
    } else if (code === 'VELTROCLUB15') {
      setDiscountPercent(15);
      setCouponApplied('VELTROCLUB15 applied (15% OFF)');
      setCouponError(null);
    } else {
      setCouponError('Invalid athlete promo code. Try "PLAYBEYOND10" or "VELTROCLUB15"');
    }
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
              <h2 className="font-heading font-black text-2xl uppercase tracking-wider text-white">
                YOUR BAG
              </h2>
              <span className="px-2 py-0.5 bg-white/10 text-xs font-mono text-zinc-300 border border-white/10">
                {items.reduce((sum, item) => sum + item.quantity, 0)} ITEMS
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Tier Progress */}
          <div className="bg-[#141419] px-6 py-3 border-b border-white/5">
            <div className="flex items-center justify-between text-xs font-heading font-bold tracking-wider uppercase mb-1.5">
              <span className="text-zinc-300 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-white" />
                {isFreeShipping ? 'FREE ALL-INDIA EXPRESS DELIVERY UNLOCKED!' : `ADD ${formatINR(amountNeededForFreeShipping)} FOR FREE DELIVERY`}
              </span>
              <span className="text-zinc-400">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 divide-y divide-white/5">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <p className="font-heading text-3xl font-black uppercase tracking-wider text-zinc-600">
                  BAG IS EMPTY
                </p>
                <p className="text-zinc-400 text-xs max-w-xs mx-auto">
                  Fuel your training regimen with high-performance VELTRO gear.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-white text-black font-heading font-bold text-xs tracking-widest uppercase hover:bg-zinc-200 transition-colors"
                >
                  EXPLORE SHOP
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 flex-shrink-0 bg-zinc-900 border border-white/10 overflow-hidden">
                    <img
                      src={item.selectedColor.image || item.product.primaryImage}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-heading font-bold text-base uppercase tracking-wider text-white line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          aria-label="Remove item"
                          className="text-zinc-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {item.selectedColor.name} / Size: <strong className="text-white font-mono">{item.selectedSize}</strong>
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Stepper */}
                      <div className="flex items-center border border-white/10 bg-zinc-900">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-zinc-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-mono text-white font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-zinc-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-heading font-bold text-base text-white tracking-wider">
                        {formatINR(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Calculations & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#0b0b0e] space-y-4">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="PROMO CODE (e.g. PLAYBEYOND10)"
                  className="flex-grow px-3 py-2 bg-zinc-900 border border-white/15 text-xs text-white placeholder:text-zinc-600 font-mono uppercase tracking-wider focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-zinc-800 hover:bg-white hover:text-black text-xs font-heading font-bold tracking-wider uppercase text-white transition-colors"
                >
                  APPLY
                </button>
              </form>
              {couponApplied && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                  <Check className="w-3.5 h-3.5" />
                  {couponApplied}
                </p>
              )}
              {couponError && (
                <p className="text-[11px] text-red-400 font-mono">
                  {couponError}
                </p>
              )}

              {/* Subtotals */}
              <div className="space-y-1.5 text-xs font-mono tracking-wider pt-2 border-t border-white/5">
                <div className="flex justify-between text-zinc-400">
                  <span>SUBTOTAL</span>
                  <span className="text-white">{formatINR(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>DISCOUNT ({discountPercent}%)</span>
                    <span>-{formatINR(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-zinc-400">
                  <span>DELIVERY (ALL INDIA)</span>
                  <span>{isFreeShipping ? 'FREE' : formatINR(shippingFee)}</span>
                </div>
                <div className="flex justify-between text-sm font-heading font-black text-white pt-2 border-t border-white/10 text-base">
                  <span>TOTAL ESTIMATED</span>
                  <span>{formatINR(total)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-heading font-bold text-base tracking-[0.2em] uppercase transition-all duration-200 flex items-center justify-center gap-3 shadow-xl cursor-pointer"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>SECURE ENCRYPTED CHECKOUT • COD & UPI AVAILABLE</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
