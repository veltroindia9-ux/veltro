import React from 'react';
import { X, User, Package, Truck, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { UserOrder } from '../types';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: UserOrder[];
  onOpenContact: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  orders,
  onOpenContact
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none">
      <div className="relative w-full max-w-2xl bg-[#0e0e12] border border-white/20 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close account view"
          className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-white/10">
          <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-heading font-black text-xl">
            V
          </div>
          <div>
            <span className="text-[10px] font-heading tracking-widest text-zinc-400 uppercase">
              VELTRO ATHLETE MEMBER
            </span>
            <h3 className="font-heading font-black text-2xl uppercase tracking-wider text-white">
              MY ACCOUNT & ORDERS
            </h3>
          </div>
        </div>

        {/* Member Perks Strip */}
        <div className="grid grid-cols-3 gap-2 my-6 text-center text-xs font-heading tracking-wider uppercase border border-white/10 p-3 bg-zinc-900">
          <div>
            <p className="text-white font-bold">ALL INDIA</p>
            <p className="text-[10px] text-zinc-400 font-mono">Express Delivery</p>
          </div>
          <div className="border-x border-white/10">
            <p className="text-white font-bold">VIP DROPS</p>
            <p className="text-[10px] text-zinc-400 font-mono">Priority Access</p>
          </div>
          <div>
            <p className="text-white font-bold">SUPPORT</p>
            <p className="text-[10px] text-zinc-400 font-mono">+62 387 62227</p>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-heading font-bold text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <Package className="w-4 h-4 text-white" />
              RECENT ORDERS ({orders.length})
            </h4>
          </div>

          {orders.length === 0 ? (
            <div className="p-8 text-center bg-zinc-900/50 border border-white/5 space-y-2">
              <Package className="w-8 h-8 text-zinc-600 mx-auto" />
              <p className="font-heading text-lg font-bold uppercase text-zinc-400">NO ORDERS PLACED YET</p>
              <p className="text-xs text-zinc-500">Your placed orders and live BlueDart tracking will appear here.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {orders.map((o) => (
                <div key={o.orderId} className="p-4 bg-zinc-900 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-white">{o.orderId}</span>
                    <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 border border-emerald-800 uppercase">
                      {o.status}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400 flex justify-between">
                    <span>{o.items.length} item(s) • {o.date}</span>
                    <span className="text-white font-bold font-mono">{formatINR(o.total)}</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 pt-1 border-t border-white/5 flex items-center justify-between">
                    <span>Ship to: {o.shippingAddress.city}, {o.shippingAddress.state}</span>
                    <span className="text-zinc-400">{o.paymentMethod}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Strip */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 space-y-0.5 text-center sm:text-left">
            <p className="font-semibold text-white">Need help with an exchange or order?</p>
            <p>Hotline: <strong className="text-white font-mono">+62 387 62227</strong> (10 AM - 8 PM IST)</p>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-4 py-2 bg-white text-black font-heading font-bold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors"
          >
            CONTACT SUPPORT
          </button>
        </div>
      </div>
    </div>
  );
};
