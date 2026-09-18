import React, { useState } from 'react';
import { X, Star, Heart, Shield, Check, Ruler, Truck, RotateCcw, ChevronDown, ChevronUp, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: ProductColor, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(product.colors[0]?.image || product.primaryImage);
  const [pincode, setPincode] = useState<string>('');
  const [pincodeResult, setPincodeResult] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('specs');
  const [addedToast, setAddedToast] = useState<boolean>(false);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const galleryImages = [
    selectedColor.image || product.primaryImage,
    selectedColor.altImage || product.secondaryImage || product.primaryImage,
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop'
  ];

  const handleColorChange = (color: ProductColor) => {
    setSelectedColor(color);
    setActiveImage(color.image);
  };

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length === 6 && /^\d+$/.test(pincode)) {
      setPincodeResult(`Delivery to ${pincode} available in 2–3 business days. Cash on Delivery (COD) eligible.`);
    } else {
      setPincodeResult('Please enter a valid 6-digit Indian pincode.');
    }
  };

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 select-none">
      <div className="relative w-full max-w-5xl bg-[#0e0e12] border border-white/20 shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Left Gallery (7 Columns) */}
          <div className="lg:col-span-7 bg-[#141418] p-4 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/5] w-full bg-[#1b1b22] overflow-hidden border border-white/10">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              {product.tag && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/90 text-white border border-white/20 font-heading font-black text-xs tracking-widest uppercase">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Thumbnail Switcher */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-24 flex-shrink-0 bg-black overflow-hidden border transition-all ${
                    activeImage === img ? 'border-white ring-2 ring-white/50' : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Angle ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Product Specs & Purchase (5 Columns) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs tracking-widest text-zinc-400 font-semibold uppercase mb-2">
                <span>{product.category} // {product.subcategory}</span>
                <div className="flex items-center gap-1 text-white">
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-zinc-500">({product.reviewsCount})</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-wider text-white leading-tight">
                {product.name}
              </h2>

              {/* Pricing */}
              <div className="flex items-baseline gap-3 mt-3">
                <span className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wider">
                  {formatINR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-zinc-500 line-through font-mono">
                    {formatINR(product.originalPrice)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="px-2 py-0.5 bg-white/10 text-white font-heading font-bold text-xs tracking-wider uppercase border border-white/20">
                    SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">Inclusive of all Indian taxes. All India Free Express Shipping over ₹1,999.</p>

              {/* Description */}
              <p className="font-body text-zinc-300 text-sm mt-4 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-center justify-between text-xs font-heading font-bold tracking-wider uppercase mb-2">
                  <span className="text-zinc-300">COLOR: <span className="text-white">{selectedColor.name}</span></span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => handleColorChange(c)}
                      className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor.name === c.name
                          ? 'border-white scale-110 ring-2 ring-white/50'
                          : 'border-zinc-700 opacity-60 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor.name === c.name && (
                        <span className={`w-2 h-2 rounded-full ${c.hex === '#0a0a0c' || c.hex === '#111215' ? 'bg-white' : 'bg-black'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-heading font-bold tracking-wider uppercase mb-2">
                  <span className="text-zinc-300">SELECT SIZE</span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-zinc-400 hover:text-white flex items-center gap-1 underline underline-offset-4"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    SIZE GUIDE
                  </button>
                </div>

                {/* Size Chart Modal Inline */}
                {showSizeGuide && (
                  <div className="p-3 bg-zinc-900 border border-white/20 mb-3 text-xs text-zinc-300 animate-in fade-in duration-150">
                    <p className="font-heading font-bold text-white uppercase tracking-wider mb-1">CHEST & WAIST FIT (INCHES)</p>
                    <div className="grid grid-cols-5 text-center gap-1 border-t border-white/10 pt-1 font-mono text-[11px]">
                      <div>S: 36-38"</div>
                      <div>M: 39-41"</div>
                      <div>L: 42-44"</div>
                      <div>XL: 45-47"</div>
                      <div>XXL: 48-50"</div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2.5 font-heading font-bold text-sm tracking-widest uppercase transition-all ${
                        selectedSize === sz
                          ? 'bg-white text-black border border-white'
                          : 'bg-zinc-900 text-zinc-300 border border-white/10 hover:border-white/40'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs font-heading font-bold tracking-wider text-zinc-400 uppercase">QTY:</span>
                <div className="flex items-center border border-white/20 bg-zinc-900">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="p-2 text-zinc-400 hover:text-white"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 font-heading font-bold text-sm text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="p-2 text-zinc-400 hover:text-white"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleAdd}
                  className={`flex-grow py-4 px-6 font-heading font-bold text-base tracking-[0.2em] uppercase transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer ${
                    addedToast
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-black hover:bg-zinc-200'
                  }`}
                >
                  {addedToast ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>ADD TO BAG</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  aria-label="Wishlist"
                  className={`p-4 border transition-colors ${
                    isWishlisted
                      ? 'bg-white text-black border-white'
                      : 'bg-zinc-900 text-zinc-300 border-white/20 hover:border-white hover:text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-black' : ''}`} />
                </button>
              </div>

              {/* India Pincode Delivery Checker */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <form onSubmit={handlePincodeCheck} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Check All-India Delivery Pincode"
                    className="flex-grow px-3 py-2 bg-black border border-white/15 text-xs text-white placeholder:text-zinc-600 font-mono tracking-wider focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-zinc-800 hover:bg-white hover:text-black text-xs font-heading font-bold tracking-wider uppercase text-white transition-colors"
                  >
                    CHECK
                  </button>
                </form>
                {pincodeResult && (
                  <p className="text-[11px] text-zinc-400 mt-2 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-white" />
                    <span>{pincodeResult}</span>
                  </p>
                )}
              </div>

              {/* Collapsible Tech Accordions */}
              <div className="mt-6 border-t border-white/10 divide-y divide-white/10">
                {/* Tech Specs */}
                <div>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'specs' ? null : 'specs')}
                    className="w-full py-3 flex items-center justify-between text-xs font-heading font-bold tracking-wider uppercase text-zinc-300 hover:text-white text-left"
                  >
                    <span>TECHNICAL SPECIFICATIONS & MATERIAL</span>
                    {openAccordion === 'specs' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'specs' && (
                    <div className="pb-4 text-xs text-zinc-400 space-y-2">
                      <p><strong className="text-zinc-200">Fabric Composition:</strong> {product.fabricSpecs}</p>
                      <ul className="list-disc pl-4 space-y-1">
                        {product.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Care Guide */}
                <div>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                    className="w-full py-3 flex items-center justify-between text-xs font-heading font-bold tracking-wider uppercase text-zinc-300 hover:text-white text-left"
                  >
                    <span>CARE & MAINTENANCE</span>
                    {openAccordion === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'care' && (
                    <div className="pb-4 text-xs text-zinc-400">
                      <p>{product.careGuide}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
