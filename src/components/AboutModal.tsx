import React from 'react';
import { X, Shield, Activity, Award, Compass, ArrowRight } from 'lucide-react';
import { VeltroLogo } from './VeltroLogo';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShopNow: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onShopNow }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none">
      <div className="relative w-full max-w-3xl bg-[#0e0e12] border border-white/20 shadow-2xl p-6 sm:p-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Close about modal"
          className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-block mb-3">
            <VeltroLogo size="lg" showTagline={true} />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-wider text-white mt-2">
            ENGINEERED IN THE DARK. <br />
            PROVEN UNDER THE LIGHTS.
          </h2>
          <p className="font-body text-zinc-300 text-sm mt-4 leading-relaxed font-light">
            Founded with a singular obsessive ethos: to design sportswear for those who refuse to settle. No promotional gimmicks, no flimsy fabrics. Only high-density technical weaves, ergonomic kinetic cuts, and relentless performance integrity.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <div className="p-4 bg-zinc-900 border border-white/10 text-center">
            <Activity className="w-6 h-6 text-white mx-auto mb-2" />
            <h4 className="font-heading font-bold text-base uppercase text-white tracking-wider">AERODYNAMIC SCIENCE</h4>
            <p className="text-xs text-zinc-400 mt-1">Micro-filament matrix optimizes skin respiration and heat dissipation.</p>
          </div>
          <div className="p-4 bg-zinc-900 border border-white/10 text-center">
            <Shield className="w-6 h-6 text-white mx-auto mb-2" />
            <h4 className="font-heading font-bold text-base uppercase text-white tracking-wider">ALL INDIA LOGISTICS</h4>
            <p className="text-xs text-zinc-400 mt-1">Express fulfillment network serving 28,000+ Indian pincodes with COD.</p>
          </div>
          <div className="p-4 bg-zinc-900 border border-white/10 text-center">
            <Award className="w-6 h-6 text-white mx-auto mb-2" />
            <h4 className="font-heading font-bold text-base uppercase text-white tracking-wider">PRO-ATHLETE TESTED</h4>
            <p className="text-xs text-zinc-400 mt-1">Stress-tested through thousands of sprint intervals and heavy load sessions.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 font-mono text-center sm:text-left">
            <span>VELTRO SPORTSWEAR LABS • ALL INDIA DELIVERY</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onShopNow();
            }}
            className="px-6 py-3 bg-white text-black font-heading font-bold text-xs tracking-widest uppercase hover:bg-zinc-200 transition-colors flex items-center gap-2"
          >
            <span>EXPLORE THE GEAR</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
