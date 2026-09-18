import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { VeltroLogo } from './VeltroLogo';

interface PromotionalSectionProps {
  onShopCollection: () => void;
}

export const PromotionalSection: React.FC<PromotionalSectionProps> = ({ onShopCollection }) => {
  return (
    <section
      id="promotional-section"
      className="relative w-full py-28 md:py-36 bg-black text-white overflow-hidden border-y border-white/10"
    >
      {/* Background Graphic: Stadium Floodlight Beam Atmosphere & Silhouette */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2000&auto=format&fit=crop"
          alt="Athlete running on night track in stadium"
          className="w-full h-full object-cover object-center filter grayscale contrast-150 brightness-40 opacity-35 scale-105"
        />
        {/* Dark Vignettes and Beam Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        {/* Diagonal Light Streak Angle */}
        <div className="absolute -top-24 right-1/4 w-[400px] h-[600px] bg-gradient-to-b from-white/10 to-transparent rotate-12 blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Monogram Icon */}
        <div className="mb-6">
          <VeltroLogo size="lg" showTagline={false} />
        </div>

        {/* Headline */}
        <h2 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-[0.06em] text-white leading-none">
          PLAY BEYOND YOUR LIMITS.
        </h2>

        {/* Subtext Quote */}
        <p className="font-body text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light italic mt-6 max-w-2xl leading-relaxed tracking-wide">
          “Performance starts where excuses end.”
        </p>

        {/* Micro Tag */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs tracking-[0.3em] font-heading font-bold text-zinc-400 uppercase">
          <Flame className="w-4 h-4 text-white" />
          <span>ZERO DISTRACTIONS • 100% UNCOMPROMISING RELENTLESS FOCUS</span>
          <Flame className="w-4 h-4 text-white" />
        </div>

        {/* Rectangular Action Button */}
        <div className="mt-10">
          <button
            id="promo-shop-collection-btn"
            onClick={onShopCollection}
            className="px-10 py-4 bg-white text-black font-heading font-bold text-lg tracking-[0.25em] uppercase hover:bg-zinc-200 transition-all duration-200 shadow-2xl flex items-center gap-3 group cursor-pointer"
          >
            <span>SHOP THE COLLECTION</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
