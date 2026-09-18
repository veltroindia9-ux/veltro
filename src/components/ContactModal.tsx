import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Send, CheckCircle2, Clock, Truck } from 'lucide-react';
import { VeltroLogo } from './VeltroLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none">
      <div className="relative w-full max-w-2xl bg-[#0e0e12] border border-white/20 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Close contact modal"
          className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <VeltroLogo size="sm" showTagline={true} />
          <h2 className="font-heading font-black text-3xl uppercase tracking-wider text-white mt-2">
            CONNECT WITH VELTRO
          </h2>
          <p className="font-body text-zinc-400 text-sm mt-1">
            Apparel engineering inquiries, bulk athlete orders, exchanges, and Pan-India shipment support.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 bg-zinc-900 border border-white/10 text-xs font-mono">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-zinc-400 uppercase font-heading font-bold">
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>DIRECT LINE</span>
            </div>
            <p className="text-white font-bold">+62 387 62227</p>
            <p className="text-[10px] text-zinc-500">Mon - Sat: 9 AM - 8 PM IST</p>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-3">
            <div className="flex items-center gap-1.5 text-zinc-400 uppercase font-heading font-bold">
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>SUPPORT EMAIL</span>
            </div>
            <p className="text-white font-bold truncate">veltroindia9@gmail.com</p>
            <p className="text-[10px] text-zinc-500">Avg. Response: &lt; 2 hours</p>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-3">
            <div className="flex items-center gap-1.5 text-zinc-400 uppercase font-heading font-bold">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>ALL INDIA LOGISTICS</span>
            </div>
            <p className="text-white font-bold">Pan-India Express</p>
            <p className="text-[10px] text-zinc-500">COD Available Across India</p>
          </div>
        </div>

        {/* Quick Message Form */}
        {sent ? (
          <div className="p-8 bg-zinc-900 border border-white/10 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="font-heading font-black text-2xl uppercase tracking-wider text-white">
              TRANSMISSION RECEIVED
            </h4>
            <p className="text-xs text-zinc-400">
              A VELTRO apparel coordinator will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div>
              <label className="block font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1">
                YOUR NAME
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-white placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <label className="block font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="athlete@domain.com"
                className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-white placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <label className="block font-heading font-bold tracking-wider uppercase text-zinc-300 mb-1">
                MESSAGE / INQUIRY
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your sizing inquiry, bulk team order, or feedback..."
                className="w-full px-3.5 py-2.5 bg-black border border-white/15 text-white placeholder:text-zinc-600 font-body text-sm focus:outline-none focus:border-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-white hover:bg-zinc-200 text-black font-heading font-bold text-sm tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>TRANSMIT MESSAGE</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
