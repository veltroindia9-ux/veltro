import React, { useState } from 'react';
import { Heart, Plus, Check, Eye } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, size: string, color: ProductColor) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  isWishlisted
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [showSizePicker, setShowSizePicker] = useState(false);
  const [recentlyAdded, setRecentlyAdded] = useState(false);

  // Format currency in INR (e.g. ₹1,899)
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleSizeClick = (e: React.MouseEvent, size: string) => {
    e.stopPropagation();
    onQuickAdd(product, size, selectedColor);
    setRecentlyAdded(true);
    setShowSizePicker(false);
    setTimeout(() => setRecentlyAdded(false), 1800);
  };

  const currentImage = selectedColor.image || product.primaryImage;
  const secondaryImage = selectedColor.altImage || product.secondaryImage || currentImage;

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col bg-[#111115] border border-white/10 hover:border-white/40 transition-all duration-300 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowSizePicker(false);
      }}
    >
      {/* Image Container with secondary image hover reveal */}
      <div
        className="relative w-full aspect-[4/5] bg-[#18181c] overflow-hidden cursor-pointer"
        onClick={() => onSelectProduct(product)}
      >
        {/* Primary Image */}
        <img
          src={currentImage}
          alt={product.name}
          className={`w-full h-full object-cover object-center transition-all duration-500 ease-out ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />

        {/* Secondary Hover Image */}
        <img
          src={secondaryImage}
          alt={`${product.name} alternate angle`}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          loading="lazy"
        />

        {/* Subtle Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Tag Badge */}
        {product.tag && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block px-2.5 py-1 bg-black/90 backdrop-blur-md border border-white/20 text-white font-heading font-bold text-xs tracking-[0.18em] uppercase">
              {product.tag}
            </span>
          </div>
        )}

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center transition-all duration-200 ${
            isWishlisted
              ? 'bg-white text-black'
              : 'bg-black/60 text-white hover:bg-white hover:text-black border border-white/20'
          }`}
        >
          <Heart
            className={`w-4 h-4 ${isWishlisted ? 'fill-black text-black' : 'text-current'}`}
          />
        </button>

        {/* Quick View Button on Desktop Hover */}
        <div className="absolute inset-x-3 bottom-14 hidden sm:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="w-full py-2 bg-black/80 hover:bg-black text-white border border-white/30 text-xs font-heading font-bold tracking-widest uppercase flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>VIEW TECH SPECS</span>
          </button>
        </div>

        {/* Quick Add / Size Selector Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          {showSizePicker ? (
            <div className="bg-[#0e0e12] border-t border-white/20 p-2.5 flex flex-col gap-1.5 animate-in fade-in slide-in-from-bottom duration-150">
              <div className="flex items-center justify-between text-[11px] font-heading tracking-wider text-zinc-400 px-1">
                <span>SELECT SIZE:</span>
                <span className="text-zinc-500">ALL SIZES IN STOCK</span>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={(e) => handleSizeClick(e, sz)}
                    className="py-1.5 bg-zinc-900 hover:bg-white hover:text-black border border-white/10 font-heading font-bold text-xs tracking-wider text-white transition-colors"
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowSizePicker(true);
              }}
              className={`w-full py-3 px-4 font-heading font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                recentlyAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-black hover:bg-zinc-200'
              }`}
            >
              {recentlyAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ADDED TO BAG</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>QUICK ADD</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-[#0e0e12]">
        <div>
          {/* Color Swatches */}
          <div className="flex items-center gap-2 mb-2.5">
            {product.colors.map((clr) => (
              <button
                key={clr.name}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(clr);
                }}
                aria-label={`Color ${clr.name}`}
                title={clr.name}
                className={`w-4 h-4 rounded-full border transition-all ${
                  selectedColor.name === clr.name
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0e0e12] border-white scale-110'
                    : 'border-zinc-700 hover:border-zinc-400 opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: clr.hex }}
              />
            ))}
            <span className="text-[10px] tracking-wider text-zinc-500 uppercase ml-1">
              {product.colors.length} {product.colors.length === 1 ? 'COLOR' : 'COLORS'}
            </span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onSelectProduct(product)}
            className="font-heading font-bold text-lg sm:text-xl uppercase tracking-wider text-white hover:text-zinc-300 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-zinc-400 text-xs mt-1 line-clamp-1 font-light">
            {product.subcategory.toUpperCase()} • {product.category.toUpperCase()}
          </p>
        </div>

        {/* Pricing */}
        <div className="mt-3 pt-2.5 border-t border-white/5 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-black text-lg text-white tracking-wider">
              {formatINR(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-zinc-500 line-through font-mono">
                {formatINR(product.originalPrice)}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-[10px] font-heading font-bold tracking-wider text-emerald-400">
              SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
