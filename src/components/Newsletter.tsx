import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-24 bg-[#0d0d11] relative border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 mb-4 text-zinc-400 text-xs font-semibold tracking-[0.3em] uppercase">
          <span>INNER CIRCLE ACCESS</span>
        </div>

        {/* Title */}
        <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.06em] text-white leading-none">
          STAY IN THE GAME.
        </h2>

        {/* Supporting text */}
        <p className="font-body text-zinc-300 text-base sm:text-lg mt-4 max-w-xl mx-auto font-light">
          “Get new drops, exclusive releases and VELTRO updates.”
        </p>

        {submitted ? (
          <div className="mt-8 p-6 bg-[#15151c] border border-white/20 max-w-md mx-auto animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-black text-2xl uppercase tracking-wider text-white">
              YOU'RE ON THE ROSTER.
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Use VIP code <span className="text-white font-mono font-bold bg-white/10 px-2 py-0.5">VELTROCLUB15</span> for 15% off your first checkout.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR ATHLETE EMAIL"
              className="flex-grow px-4 py-3.5 bg-black border border-white/20 text-white placeholder:text-zinc-600 font-body text-sm tracking-wider focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-white hover:bg-zinc-200 text-black font-heading font-bold text-sm tracking-[0.2em] uppercase transition-all duration-200 flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
            >
              <span>JOIN US</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Assurance microtext */}
        <p className="mt-6 text-zinc-500 text-xs tracking-wider flex items-center justify-center gap-1.5">
          <Shield className="w-3.5 h-3.5" />
          <span>ZERO SPAM. ONLY SPRINT DROPS, VAULT ACCESS & PERFORMANCE SCIENCE.</span>
        </p>
      </div>
    </section>
  );
};
