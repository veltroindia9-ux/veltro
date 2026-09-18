import React from 'react';
import { Feather, Wind, Activity, Users } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  const features = [
    {
      title: 'Premium Comfort',
      icon: Feather,
      description: 'Second-skin ergonomics that eliminate friction points, allowing total concentration during max lifts and endurance runs.'
    },
    {
      title: 'Breathable Fabrics',
      icon: Wind,
      description: 'Micro-filament capillary moisture channeling actively regulates core body temperature across India’s extreme training climates.'
    },
    {
      title: 'Built for Performance',
      icon: Activity,
      description: 'Engineered with reinforced high-stress seams and 4-way kinetic memory that never deforms or loses tension.'
    },
    {
      title: 'For Every Athlete',
      icon: Users,
      description: 'Crafted for anyone who respects the grind—from track sprinters to powerlifters and morning pavement runners.'
    }
  ];

  return (
    <section id="brand-statement" className="py-24 bg-[#09090b] relative border-b border-white/5">
      {/* Background accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-zinc-500 inline-block" />
            THE VELTRO PHILOSOPHY
          </p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em] text-white leading-tight">
            MORE THAN JUST SPORTSWEAR. <br className="hidden sm:inline" />
            <span className="text-zinc-400">IT'S A MINDSET.</span>
          </h2>
          <p className="font-body text-zinc-300 text-lg sm:text-xl mt-6 leading-relaxed max-w-2xl font-light">
            “VELTRO is designed for people who never settle. Premium sportswear that blends performance, comfort and confidence.”
          </p>
        </div>

        {/* 4 Feature Cards with Simple Minimalist Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                id={`feature-card-${idx}`}
                className="group relative bg-[#101014] border border-white/10 hover:border-white/30 p-8 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Corner Subtle Accent */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-200">
                    <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <span className="font-heading text-sm text-zinc-600 font-bold tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl uppercase tracking-wider text-white mb-3 group-hover:text-zinc-100">
                    {feature.title}
                  </h3>
                  <p className="font-body text-zinc-400 text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom line hover effect */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-heading tracking-[0.2em] uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    PROVEN IN ARENA
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
