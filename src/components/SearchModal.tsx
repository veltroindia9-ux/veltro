import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isOpen]);

  const quickSearches = ['Performance Hoodie', 'Compression', 'Training Shorts', 'Joggers', 'Essential Tee', 'Women Sculpt'];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.tag?.toLowerCase().includes(q)
    );
  }, [query, products]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex flex-col items-center justify-start p-4 sm:p-8 select-none">
      {/* Search Header Container */}
      <div className="w-full max-w-3xl mt-12 animate-in fade-in slide-in-from-top-4 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-white/20">
          <div className="flex items-center gap-3 flex-grow">
            <Search className="w-6 h-6 text-white" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH BY PRODUCT, CATEGORY, OR ATHLETIC TECH..."
              className="w-full bg-transparent text-xl sm:text-2xl text-white placeholder:text-zinc-600 font-heading font-bold uppercase tracking-wider focus:outline-none"
            />
          </div>
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Trend Tags */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-heading font-bold tracking-widest text-zinc-500 uppercase mr-1">
            TRENDING:
          </span>
          {quickSearches.map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 bg-zinc-900 hover:bg-white hover:text-black border border-white/10 text-xs font-heading tracking-wider uppercase text-zinc-300 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="mt-8 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
          {query.trim() && results.length === 0 ? (
            <div className="py-12 text-center text-zinc-500">
              <p className="font-heading text-xl uppercase tracking-wider">No matching gear found for "{query}"</p>
              <p className="text-xs text-zinc-600 mt-1">Try searching for "tee", "shorts", "hoodie", or "compression"</p>
            </div>
          ) : (
            results.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
                className="p-3 bg-[#111116] hover:bg-[#181820] border border-white/10 hover:border-white/40 flex items-center justify-between cursor-pointer transition-all duration-150 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-16 bg-zinc-900 overflow-hidden flex-shrink-0">
                    <img src={p.primaryImage} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading tracking-widest text-zinc-400 uppercase">
                      {p.category} // {p.subcategory}
                    </span>
                    <h4 className="font-heading font-bold text-lg uppercase tracking-wider text-white group-hover:text-zinc-200">
                      {p.name}
                    </h4>
                    <p className="text-xs font-mono text-zinc-400">{formatINR(p.price)}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-zinc-800 text-zinc-300 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
