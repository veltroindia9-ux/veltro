import React, { useState, useMemo } from 'react';
import { Product, ProductColor } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

interface FeaturedCollectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, size: string, color: ProductColor) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: Set<string>;
  activeCategoryFilter: string;
  onFilterChange: (cat: string) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  products,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds,
  activeCategoryFilter,
  onFilterChange
}) => {
  const [selectedSubfilter, setSelectedSubfilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const filterTabs = [
    { id: 'all', label: 'ALL GEAR' },
    { id: 'men', label: 'MEN' },
    { id: 'women', label: 'WOMEN' },
    { id: 't-shirts', label: 'TEES & TOPS' },
    { id: 'bottoms', label: 'SHORTS & JOGGERS' },
    { id: 'outerwear', label: 'HOODIES & SETS' }
  ];

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Priority filter from navbar (men, women, new, collections)
    if (activeCategoryFilter === 'men') {
      list = list.filter((p) => p.category === 'men' || p.category === 'unisex');
    } else if (activeCategoryFilter === 'women') {
      list = list.filter((p) => p.category === 'women' || p.category === 'unisex');
    } else if (activeCategoryFilter === 'new') {
      list = list.filter((p) => p.isNewArrival);
    }

    // Local subfilter
    if (selectedSubfilter === 'men') {
      list = list.filter((p) => p.category === 'men' || p.category === 'unisex');
    } else if (selectedSubfilter === 'women') {
      list = list.filter((p) => p.category === 'women' || p.category === 'unisex');
    } else if (selectedSubfilter === 't-shirts') {
      list = list.filter((p) => p.subcategory === 't-shirts');
    } else if (selectedSubfilter === 'bottoms') {
      list = list.filter((p) => p.subcategory === 'shorts' || p.subcategory === 'joggers');
    } else if (selectedSubfilter === 'outerwear') {
      list = list.filter((p) => p.subcategory === 'hoodies' || p.subcategory === 'sets' || p.subcategory === 'outerwear');
    }

    // Sort
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, activeCategoryFilter, selectedSubfilter, sortBy]);

  return (
    <section id="featured-collection" className="py-20 bg-[#0b0b0e] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 mb-3 text-zinc-400 text-xs font-semibold tracking-[0.25em] uppercase">
              <span>PRO ATHLETIC SERIES</span>
            </div>
            <h2 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-[0.05em] text-white leading-none">
              BUILT TO MOVE.
            </h2>
            <p className="font-body text-zinc-400 text-base sm:text-lg mt-3 font-normal max-w-xl">
              Engineered with thermal dissipation architecture, articulated seam contours, and zero-compromise fabric integrity.
            </p>
          </div>

          {/* Subfilter Tabs & Sort */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center bg-[#131318] p-1 border border-white/10 overflow-x-auto no-scrollbar max-w-full">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedSubfilter(tab.id);
                    if (tab.id === 'all') onFilterChange('all');
                  }}
                  className={`px-3 py-1.5 font-heading text-xs sm:text-sm font-bold tracking-widest uppercase transition-all whitespace-nowrap ${
                    selectedSubfilter === tab.id
                      ? 'bg-white text-black shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sort Selector */}
            <div className="relative inline-flex items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products"
                className="bg-[#131318] text-zinc-300 border border-white/10 font-heading text-xs font-bold tracking-wider uppercase px-3 py-2 pr-8 focus:outline-none focus:border-white cursor-pointer"
              >
                <option value="featured">SORT: FEATURED</option>
                <option value="price-low">PRICE: LOW TO HIGH</option>
                <option value="price-high">PRICE: HIGH TO LOW</option>
              </select>
            </div>
          </div>
        </div>

        {/* 4-column grid on desktop, 2-column grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onQuickAdd={onQuickAdd}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.has(product.id)}
            />
          ))}
        </div>

        {/* Bottom banner statement */}
        <div className="mt-16 p-6 sm:p-8 bg-[#101014] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-black text-2xl uppercase tracking-wider text-white">
              NEED CUSTOM TEAM / GYM SIZING?
            </h4>
            <p className="text-zinc-400 text-sm mt-1">
              Direct consultation with VELTRO India apparel engineers for bulk academy and athletic team orders.
            </p>
          </div>
          <a
            href="tel:+6238762227"
            className="px-6 py-3 bg-zinc-800 hover:bg-white hover:text-black border border-white/20 text-white font-heading font-bold text-sm tracking-widest uppercase transition-all whitespace-nowrap"
          >
            CALL +62 387 62227
          </a>
        </div>
      </div>
    </section>
  );
};
