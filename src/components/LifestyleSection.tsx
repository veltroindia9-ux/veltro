import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LifestyleSectionProps {
  onExploreCampaign: () => void;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ onExploreCampaign }) => {
  return (
    <section id="lifestyle" className="py-24 bg-[#09090c] text-white relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-12 text-xs font-heading font-bold tracking-[0.25em] text-zinc-500 uppercase">
          <span>EDITORIAL // ATHLETIC IDENTITY</span>
          <span>VOLUME 01 • PROVEN IN ARENA</span>
        </div>

        {/* Asymmetrical Magazine-Style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Column (7 Cols) */}
          <div className="lg:col-span-7 relative group overflow-hidden bg-zinc-900 border border-white/10 min-h-[520px] lg:min-h-[640px] flex flex-col justify-between p-8 sm:p-12">
            {/* Background Athlete Photography */}
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=1600&auto=format&fit=crop"
              alt="Athlete training in dark stadium with VELTRO gear"
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-125 brightness-50 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

            {/* Top Magazine Label */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 bg-white text-black font-heading font-black text-xs tracking-widest uppercase">
                STADIUM ARCHIVES
              </span>
              <span className="text-xs font-mono text-zinc-300 tracking-widest">
                28.6139° N, 77.2090° E
              </span>
            </div>

            {/* Bottom Content Over Image */}
            <div className="relative z-10 mt-auto">
              <h3 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em] text-white leading-tight">
                BUILT IN THE SHADOWS. <br />
                PROVEN UNDER THE LIGHTS.
              </h3>
              <p className="font-body text-zinc-300 text-sm sm:text-base mt-4 max-w-lg leading-relaxed font-light">
                When you step onto the track at 5:00 AM or under the stadium floodlights at midnight, excuses cease to exist. Every seam is calibrated for zero distraction.
              </p>
            </div>
          </div>

          {/* Right Column (5 Cols) - Editorial Text & Supporting Images */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Editorial Statement Block */}
            <div className="bg-[#111116] border border-white/10 p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-heading font-bold tracking-[0.3em] text-zinc-400 uppercase mb-3">
                ATHLETE MANIFESTO
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-[0.05em] text-white leading-none">
                FOR EVERY ATHLETE.
              </h2>
              <blockquote className="font-body text-zinc-300 text-lg sm:text-xl font-light italic mt-6 leading-relaxed border-l-2 border-white pl-4">
                “Whether you're training, competing, or pushing yourself beyond the ordinary, VELTRO moves with you.”
              </blockquote>
              <p className="font-body text-zinc-400 text-sm mt-4 leading-relaxed font-normal">
                Our fabrics undergo rigorous kinetic friction testing to ensure maximum breathability and tensile endurance under the heaviest loads.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-heading text-2xl font-black text-white">100%</p>
                  <p className="text-[11px] uppercase tracking-wider text-zinc-500">Squat & Sprint Proof</p>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div>
                  <p className="font-heading text-2xl font-black text-white">4-WAY</p>
                  <p className="text-[11px] uppercase tracking-wider text-zinc-500">Kinetic Stretch</p>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div>
                  <p className="font-heading text-2xl font-black text-white">0%</p>
                  <p className="text-[11px] uppercase tracking-wider text-zinc-500">Chafe Tolerance</p>
                </div>
              </div>
            </div>

            {/* Secondary Supporting Action Image */}
            <div className="relative group overflow-hidden bg-zinc-900 border border-white/10 h-64 sm:h-72 cursor-pointer" onClick={onExploreCampaign}>
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
                alt="VELTRO Athlete sprint session"
                className="w-full h-full object-cover filter contrast-125 brightness-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-heading tracking-widest text-zinc-400 uppercase">FIELD TEST REPORT</p>
                  <p className="font-heading font-bold text-xl uppercase tracking-wider text-white">SPEED & CONDITIONING LABS</p>
                </div>
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
