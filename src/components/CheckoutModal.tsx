import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Smartphone, Banknote, ArrowRight } from 'lucide-react';
import { CartItem, UserOrder } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  onOrderComplete: (order: UserOrder) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discount,
  total,
  onOrderComplete
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Delhi');
  const [addressLine, setAddressLine] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi' | 'card'>('upi');
  const [orderConfirmed, setOrderConfirmed] = useState<UserOrder | null>(null);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const indianStates = [
    'Delhi NCR', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Telangana',
    'Gujarat', 'Haryana', 'Uttar Pradesh', 'West Bengal', 'Punjab', 'Rajasthan', 'Kerala'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const order: UserOrder = {
      orderId: `VEL-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      items: [...items],
      subtotal,
      discount,
      total,
      shippingAddress: {
        fullName: fullName || 'Athlete Customer',
        phone: phone || '+91 98765 43210',
        pincode: pincode || '110001',
        city: city || 'New Delhi',
        state,
        addressLine: addressLine || 'Athletic Training Complex'
      },
      paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : paymentMethod === 'upi' ? 'Instant UPI' : 'Credit / Debit Card',
      status: 'Confirmed'
    };

    setOrderConfirmed(order);
    onOrderComplete(order);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none">
      <div className="relative w-full max-w-4xl bg-[#0e0e12] border border-white/20 shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close checkout"
          className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {orderConfirmed ? (
          <div className="p-8 sm:p-12 text-center max-w-xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-heading font-bold tracking-[0.3em] uppercase text-zinc-400">
                ORDER CONFIRMED • DISPATCH QUEUED
              </span>
              <h2 className="font-heading font-black text-4xl uppercase tracking-wider text-white mt-1">
                WELCOME TO THE ROSTER.
              </h2>
              <p className="font-mono text-zinc-400 text-sm mt-2">
                ORDER ID: <span className="text-white font-bold">{orderConfirmed.orderId}</span>
              </p>
            </div>

            <div className="bg-[#14141a] p-5 border border-white/10 text-left space-y-2 text-xs text-zinc-300 font-mono">
              <p><strong className="text-white">Shipping To:</strong> {orderConfirmed.shippingAddress.fullName}</p>
              <p><strong className="text-white">Destination:</strong> {orderConfirmed.shippingAddress.addressLine}, {orderConfirmed.shippingAddress.city}, {orderConfirmed.shippingAddress.state} - {orderConfirmed.shippingAddress.pincode}</p>
              <p><strong className="text-white">Payment:</strong> {orderConfirmed.paymentMethod}</p>
              <p><strong className="text-white">Amount:</strong> {formatINR(orderConfirmed.total)}</p>
              <div className="pt-2 border-t border-white/10 text-emerald-400 flex items-center gap-1.5">
                <Truck className="w-4 h-4" />
                <span>Estimated BlueDart Express Dispatch within 24 Hours</span>
              </div>
            </div>

            <p className="text-zinc-500 text-xs">
              A dispatch notification and tracking link will be sent to your phone. Need immediate assistance? Call <strong className="text-white">+62 387 62227</strong>.
            </p>

            <button
              onClick={onClose}
              className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-heading font-bold text-base tracking-[0.2em] uppercase transition-colors cursor-pointer"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left Form (7 cols) */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-heading font-bold tracking-[0.3em] uppercase text-zinc-400">
                  EXPRESS ALL-INDIA CHECKOUT
                </span>
                <h3 className="font-heading font-black text-3xl uppercase tracking-wider text-white">
                  DELIVERY ADDRESS
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Arjun Sharma"
                    className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-white placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-white placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1">
                      6-DIGIT PINCODE *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="e.g. 110001"
                      className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-white placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1">
                    STREET ADDRESS / FLAT / GYM FACILITY *
                  </label>
                  <input
                    type="text"
                    required
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                    placeholder="e.g. Plot 42, Block C, Green Park Main"
                    className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-white placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1">
                      CITY *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. New Delhi"
                      className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-white placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1">
                      STATE *
                    </label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-white font-body text-sm focus:outline-none focus:border-white cursor-pointer"
                    >
                      {indianStates.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Selector */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <label className="block font-heading font-bold tracking-wider uppercase text-zinc-300 text-xs">
                  SELECT PAYMENT METHOD
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 border flex flex-col items-center gap-1.5 transition-all text-xs font-heading font-bold tracking-wider uppercase ${
                      paymentMethod === 'upi'
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-zinc-400 border-white/15 hover:border-white/40'
                    }`}
                  >
                    <Smartphone className="w-5 h-5" />
                    <span>INSTANT UPI</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 border flex flex-col items-center gap-1.5 transition-all text-xs font-heading font-bold tracking-wider uppercase ${
                      paymentMethod === 'cod'
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-zinc-400 border-white/15 hover:border-white/40'
                    }`}
                  >
                    <Banknote className="w-5 h-5" />
                    <span>CASH ON DELIVERY</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 border flex flex-col items-center gap-1.5 transition-all text-xs font-heading font-bold tracking-wider uppercase ${
                      paymentMethod === 'card'
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-zinc-400 border-white/15 hover:border-white/40'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>CARD / NETBANKING</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-heading font-black text-base tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <span>PLACE ORDER • {formatINR(total)}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Right Summary (5 cols) */}
            <div className="lg:col-span-5 bg-[#14141a] p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="font-heading font-bold text-lg uppercase tracking-wider text-white mb-4">
                  ORDER SUMMARY ({items.length})
                </h4>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-1 divide-y divide-white/5">
                  {items.map((it) => (
                    <div key={it.id} className="pt-3 first:pt-0 flex items-center gap-3">
                      <div className="w-12 h-14 bg-zinc-900 overflow-hidden flex-shrink-0">
                        <img src={it.selectedColor.image || it.product.primaryImage} alt={it.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-heading font-bold text-sm text-white uppercase line-clamp-1">{it.product.name}</p>
                        <p className="text-[11px] text-zinc-400 font-mono">Qty: {it.quantity} | Size: {it.selectedSize}</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-white">
                        {formatINR(it.product.price * it.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-zinc-400">
                    <span>SUBTOTAL</span>
                    <span>{formatINR(subtotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>DISCOUNT</span>
                      <span>-{formatINR(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-zinc-400">
                    <span>PAN-INDIA SHIPPING</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between text-white font-heading font-black text-lg pt-3 border-t border-white/10">
                    <span>TOTAL</span>
                    <span>{formatINR(total)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-zinc-500 text-[11px] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white flex-shrink-0" />
                <span>Encrypted 256-bit SSL transaction protected by VELTRO India Safeguard.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
