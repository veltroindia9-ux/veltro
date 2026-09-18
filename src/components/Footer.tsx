import React from 'react';
import { VeltroLogo } from './VeltroLogo';
import { Phone, Mail, MapPin, Instagram, Youtube, Twitter, Facebook, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenAbout,
  onOpenContact
}) => {
  return (
    <footer id="footer" className="bg-black text-white border-t border-white/10 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <VeltroLogo size="lg" showTagline={true} />
            <p className="font-body text-zinc-400 text-sm leading-relaxed max-w-sm font-light mt-4">
              VELTRO is premium athletic sportswear engineered for those who refuse to settle. Designed with advanced thermal dispersion, friction-free ergonomics, and high-impact resilience.
            </p>
            <div className="space-y-2 text-xs text-zinc-400 font-mono">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                <a href="tel:+6238762227" className="hover:text-white transition-colors">
                  +62 387 62227
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:veltroindia9@gmail.com" className="hover:text-white transition-colors">
                  veltroindia9@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span>India / Pan-India Express Delivery across 28,000+ pincodes</span>
              </p>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div>
            <h4 className="font-heading font-bold text-base tracking-[0.2em] uppercase text-white mb-5">
              SHOP
            </h4>
            <ul className="space-y-3 text-xs tracking-wider font-medium text-zinc-400">
              <li>
                <button
                  onClick={() => onSelectCategory('men')}
                  className="hover:text-white transition-colors uppercase text-left"
                >
                  Men
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('women')}
                  className="hover:text-white transition-colors uppercase text-left"
                >
                  Women
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('new')}
                  className="hover:text-white transition-colors uppercase text-left"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('collections')}
                  className="hover:text-white transition-colors uppercase text-left"
                >
                  Collections
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: About VELTRO */}
          <div>
            <h4 className="font-heading font-bold text-base tracking-[0.2em] uppercase text-white mb-5">
              ABOUT VELTRO
            </h4>
            <ul className="space-y-3 text-xs tracking-wider font-medium text-zinc-400">
              <li>
                <button onClick={onOpenAbout} className="hover:text-white transition-colors uppercase text-left">
                  About VELTRO
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors uppercase text-left">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors uppercase text-left">
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors uppercase text-left">
                  Returns & Exchanges
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Verification */}
          <div>
            <h4 className="font-heading font-bold text-base tracking-[0.2em] uppercase text-white mb-5">
              LEGAL
            </h4>
            <ul className="space-y-3 text-xs tracking-wider font-medium text-zinc-400">
              <li>
                <button onClick={onOpenAbout} className="hover:text-white transition-colors uppercase text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-white transition-colors uppercase text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <div className="pt-2 flex items-center gap-1.5 text-zinc-400 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Genuine Apparel</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Social Icons and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="w-9 h-9 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          <div className="text-zinc-500 font-heading text-xs tracking-widest uppercase text-center sm:text-right">
            © 2026 VELTRO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};
