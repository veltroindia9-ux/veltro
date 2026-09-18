import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronRight, Phone, ShieldCheck, Truck } from 'lucide-react';
import { VeltroLogo } from './VeltroLogo';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onSelectCategory: (cat: string) => void;
  activeCategory: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
  onOpenAbout,
  onOpenContact,
  onSelectCategory,
  activeCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', action: () => { onSelectCategory('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, active: activeCategory === 'all' },
    { label: 'MEN', action: () => onSelectCategory('men'), active: activeCategory === 'men' },
    { label: 'WOMEN', action: () => onSelectCategory('women'), active: activeCategory === 'women' },
    { label: 'NEW ARRIVALS', action: () => onSelectCategory('new'), active: activeCategory === 'new' },
    { label: 'COLLECTIONS', action: () => onSelectCategory('collections'), active: activeCategory === 'collections' },
    { label: 'ABOUT', action: onOpenAbout, active: false },
    { label: 'CONTACT', action: onOpenContact, active: false }
  ];

  return (
    <>
      {/* Top Banner Ticker */}
      <div id="top-announcement-bar" className="bg-[#121216] border-b border-white/5 py-1.5 px-4 text-xs tracking-wider text-zinc-400 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 mx-auto md:mx-0 overflow-hidden text-center md:text-left">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Truck className="w-3.5 h-3.5 text-white" />
              <span>ALL INDIA EXPRESS DELIVERY — FREE ABOVE ₹1,999</span>
            </span>
            <span className="hidden md:inline-block text-zinc-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>100% SQUAT-TESTED & PRO ATHLETE APPROVED</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-zinc-400 text-[11px]">
            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer" onClick={onOpenContact}>
              <Phone className="w-3 h-3 text-zinc-500" />
              +62 387 62227
            </span>
            <span>•</span>
            <span className="text-zinc-500">COD AVAILABLE</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090c]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-[#09090c]/70 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-2 -ml-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Center-Left: VELTRO Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer group"
            >
              <VeltroLogo size="md" showTagline={true} />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={link.action}
                className={`text-xs font-semibold tracking-[0.18em] transition-all uppercase py-1 relative ${
                  link.active
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                {link.active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all" />
                )}
              </button>
            ))}
          </nav>

          {/* Right: Actions (Search, Account, Wishlist, Bag) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search */}
            <button
              id="nav-search-button"
              onClick={onOpenSearch}
              aria-label="Search Catalog"
              className="p-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <button
              id="nav-account-button"
              onClick={onOpenAccount}
              aria-label="Account and Orders"
              className="p-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              id="nav-wishlist-button"
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              className="p-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded-sm transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-white text-black font-extrabold text-[10px] flex items-center justify-center rounded-full leading-none">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag */}
            <button
              id="nav-cart-button"
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="p-2 sm:px-3 text-zinc-100 bg-white/10 hover:bg-white hover:text-black border border-white/20 transition-all duration-200 flex items-center gap-2"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-white text-black font-bold text-[9px] flex items-center justify-center rounded-full border border-black">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-heading tracking-widest text-sm font-bold">
                BAG {cartCount > 0 && `(${cartCount})`}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 left-0 w-[82%] max-w-sm bg-[#0d0d11] border-r border-white/10 p-6 flex flex-col justify-between shadow-2xl z-50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <VeltroLogo size="sm" showTagline={true} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/5"
                  aria-label="Close Navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      link.action();
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-3 py-3.5 text-left font-heading text-lg font-bold tracking-wider transition-colors ${
                      link.active
                        ? 'text-white bg-white/10'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="text-xs text-zinc-400 space-y-1">
                <p className="font-semibold text-zinc-200">VELTRO INDIA HQ</p>
                <p>Support: +62 387 62227</p>
                <p>Email: veltroindia9@gmail.com</p>
                <p className="text-zinc-500">Pan-India Delivery across 28,000+ pincodes</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWishlist();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 bg-zinc-900 border border-white/10 text-xs font-semibold tracking-wider text-zinc-300 hover:text-white"
                >
                  <Heart className="w-4 h-4" />
                  WISHLIST ({wishlistCount})
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAccount();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 bg-zinc-900 border border-white/10 text-xs font-semibold tracking-wider text-zinc-300 hover:text-white"
                >
                  <User className="w-4 h-4" />
                  MY ACCOUNT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
