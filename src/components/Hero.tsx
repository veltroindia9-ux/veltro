import React from 'react';
import { ArrowRight, Zap, Shield, Flame } from 'lucide-react';
import { VeltroLogo } from './VeltroLogo';

interface HeroProps {
  onShopMen: () => void;
  onShopWomen: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopMen, onShopWomen, onExploreCollection }) => {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] md:min-h-[94vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image: Athletic model in dramatic stadium environment with floodlights */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=85&w=2200&auto=format&fit=crop"
          alt="VELTRO Athlete in Dramatic Stadium Environment"
          className="w-full h-full object-cover object-center filter brightness-60 contrast-125 scale-105 transform duration-1000 ease-out"
        />

        {/* Subtle dark gradient overlay & stadium light flares */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-[#09090b]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/90 via-[#09090b]/50 to-transparent" />

        {/* Atmospheric stadium floodlight radial accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-zinc-400/[0.03] rounded-full blur-[140px] pointer-events-none" />
        
        {/* Subtle grid pattern overlay for high-tech performance feel */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Top athletic badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-zinc-300 text-xs font-semibold tracking-[0.25em] uppercase">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>SEASON 2026 PERFORMANCE SERIES</span>
          </div>

          {/* Brand Name & Tagline */}
          <div className="mb-2">
            <h1 className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-[0.08em] text-white leading-none drop-shadow-2xl">
              VELTRO
            </h1>
            <p className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.2em] text-zinc-300 mt-2 flex items-center gap-3">
              <span className="text-white">PLAY BEYOND.</span>
              <span className="h-[2px] w-12 sm:w-20 bg-white/40 inline-block" />
            </p>
          </div>

          {/* Subtext Quote */}
          <p className="font-body text-base sm:text-lg md:text-xl text-zinc-300 max-w-xl font-normal leading-relaxed mb-10 mt-6 tracking-wide">
            “Sportswear engineered for those who refuse to settle.”
          </p>

          {/* Action Buttons - Sharp Rectangular Athletic Styling */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="hero-shop-men-btn"
              onClick={onShopMen}
              className="px-8 py-4 bg-white text-black font-heading font-bold text-lg tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all duration-200 shadow-xl flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>SHOP MEN</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-shop-women-btn"
              onClick={onShopWomen}
              className="px-8 py-4 bg-transparent text-white border-2 border-white/80 font-heading font-bold text-lg tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>SHOP WOMEN</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Micro Feature Indicators */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-white flex-shrink-0" />
              <div>
                <p className="text-[11px] font-heading tracking-widest text-zinc-400 uppercase">AERO-VENT</p>
                <p className="text-xs font-bold text-white uppercase tracking-wider">MICRO MESH</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-white flex-shrink-0" />
              <div>
                <p className="text-[11px] font-heading tracking-widest text-zinc-400 uppercase">DURABILITY</p>
                <p className="text-xs font-bold text-white uppercase tracking-wider">REINFORCED</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Flame className="w-4 h-4 text-white flex-shrink-0" />
              <div>
                <p className="text-[11px] font-heading tracking-widest text-zinc-400 uppercase">PRO ATHLETE</p>
                <p className="text-xs font-bold text-white uppercase tracking-wider">TESTED</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient connector */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none" />
    </section>
  );
};
