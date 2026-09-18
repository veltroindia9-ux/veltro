import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Product, ProductColor } from '../types';
import { ProductCard } from './ProductCard';

interface NewArrivalsCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, size: string, color: ProductColor) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: Set<string>;
}

export const NewArrivalsCarousel: React.FC<NewArrivalsCarouselProps> = ({
  products,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Only new arrivals or featured items
  const newArrivals = products.filter((p) => p.isNewArrival || p.tag === 'NEW' || p.tag === 'LIMITED DROP');

  return (
    <section id="new-arrivals" className="py-24 bg-[#09090c] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 mb-3 text-zinc-400 text-xs font-semibold tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>FRESH RELEASE DROP</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.05em] text-white leading-none">
              NEW ARRIVALS
            </h2>
            <p className="font-body text-zinc-400 text-sm sm:text-base mt-2 font-normal">
              The latest technical cuts and next-generation athletic formulations.
            </p>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-11 h-11 bg-zinc-900 hover:bg-white hover:text-black text-white border border-white/15 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-11 h-11 bg-zinc-900 hover:bg-white hover:text-black text-white border border-white/15 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Product Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="w-[280px] sm:w-[320px] md:w-[350px] flex-shrink-0 snap-start"
            >
              <ProductCard
                product={product}
                onSelectProduct={onSelectProduct}
                onQuickAdd={onQuickAdd}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.has(product.id)}
              />
            </div>
          ))}
        </div>

        {/* Carousel hint for mobile */}
        <div className="sm:hidden flex items-center justify-center gap-2 mt-4 text-xs font-heading tracking-widest text-zinc-500 uppercase">
          <span>← SWIPE TO EXPLORE MORE →</span>
        </div>
      </div>
    </section>
  );
};
