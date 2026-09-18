/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductColor, CartItem, UserOrder } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { FeaturedCollection } from './components/FeaturedCollection';
import { PromotionalSection } from './components/PromotionalSection';
import { LifestyleSection } from './components/LifestyleSection';
import { NewArrivalsCarousel } from './components/NewArrivalsCarousel';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { AccountModal } from './components/AccountModal';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  // Local storage persisted state for Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('veltro_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Local storage persisted state for Wishlist
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('veltro_wishlist');
      return saved ? new Set(JSON.parse(saved)) : new Set(['veltro-perf-tee', 'veltro-perf-hoodie']);
    } catch {
      return new Set(['veltro-perf-tee']);
    }
  });

  // Local storage persisted state for Orders
  const [orders, setOrders] = useState<UserOrder[]>(() => {
    try {
      const saved = localStorage.getItem('veltro_orders');
      return saved
        ? JSON.parse(saved)
        : [
            {
              orderId: 'VEL-782914',
              date: 'Sep 14, 2026',
              items: [
                {
                  id: 'init-1',
                  productId: 'veltro-perf-tee',
                  product: PRODUCTS[0],
                  selectedColor: PRODUCTS[0].colors[0],
                  selectedSize: 'L',
                  quantity: 1
                }
              ],
              subtotal: 1899,
              discount: 0,
              total: 1899,
              shippingAddress: {
                fullName: 'Arjun Verma',
                phone: '+91 98112 34567',
                pincode: '110016',
                city: 'New Delhi',
                state: 'Delhi NCR',
                addressLine: 'Hauz Khas Enclave'
              },
              paymentMethod: 'Instant UPI',
              status: 'Dispatched'
            }
          ];
    } catch {
      return [];
    }
  });

  // Modal & Drawer visibility
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Category filter
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  // Toast message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('veltro_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('veltro_wishlist', JSON.stringify(Array.from(wishlistIds)));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Sync orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('veltro_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Cart operations
  const handleAddToCart = (product: Product, size: string, color: ProductColor, quantity: number = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.selectedSize === size && item.selectedColor.name === color.name
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        const newItem: CartItem = {
          id: `${product.id}-${size}-${color.name}-${Date.now()}`,
          productId: product.id,
          product,
          selectedColor: color,
          selectedSize: size,
          quantity
        };
        return [...prev, newItem];
      }
    });

    showToast(`Added ${product.name} (${size}) to bag`);
  };

  const handleUpdateCartQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveCartItem(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  // Wishlist toggle
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast(`Removed from wishlist`);
      } else {
        next.add(product.id);
        showToast(`Added ${product.name} to wishlist`);
      }
      return next;
    });
  };

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.has(p.id));

  // Category navigation handler
  const handleSelectCategory = (cat: string) => {
    setActiveCategoryFilter(cat);
    const featuredEl = document.getElementById('featured-collection');
    if (featuredEl) {
      featuredEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Checkout complete
  const handleOrderComplete = (newOrder: UserOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
  };

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#ededed] flex flex-col font-body selection:bg-white selection:text-black">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white text-black px-4 py-3 border border-white font-heading font-bold text-xs tracking-wider uppercase shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sticky Navigation Bar */}
      <Navbar
        cartCount={cartTotalItems}
        wishlistCount={wishlistIds.size}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onSelectCategory={handleSelectCategory}
        activeCategory={activeCategoryFilter}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Full-Width Hero Section */}
        <Hero
          onShopMen={() => handleSelectCategory('men')}
          onShopWomen={() => handleSelectCategory('women')}
          onExploreCollection={() => handleSelectCategory('all')}
        />

        {/* 2. Brand Statement Mindset Section */}
        <BrandStatement />

        {/* 3. Featured Collection Grid ("BUILT TO MOVE.") */}
        <FeaturedCollection
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onQuickAdd={(p, size, color) => handleAddToCart(p, size, color, 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          activeCategoryFilter={activeCategoryFilter}
          onFilterChange={setActiveCategoryFilter}
        />

        {/* 4. Full-Width Dramatic Promotional Section ("PLAY BEYOND YOUR LIMITS.") */}
        <PromotionalSection
          onShopCollection={() => handleSelectCategory('all')}
        />

        {/* 5. Editorial-Style Lifestyle Section ("FOR EVERY ATHLETE.") */}
        <LifestyleSection
          onExploreCampaign={() => handleSelectCategory('all')}
        />

        {/* 6. Horizontally Scrollable Product Carousel ("NEW ARRIVALS") */}
        <NewArrivalsCarousel
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onQuickAdd={(p, size, color) => handleAddToCart(p, size, color, 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* 7. Newsletter Subscription ("STAY IN THE GAME.") */}
        <Newsletter />
      </main>

      {/* 8. Black Footer with VELTRO logo and navigation */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Modals & Slide-out Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, size, color, qty) => handleAddToCart(p, size, color, qty)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlistIds.has(selectedProduct.id) : false}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        products={wishlistedProducts}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onRemoveFromWishlist={handleToggleWishlist}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        subtotal={cartSubtotal}
        discount={0}
        total={cartSubtotal >= 1999 || cartSubtotal === 0 ? cartSubtotal : cartSubtotal + 99}
        onOrderComplete={handleOrderComplete}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        orders={orders}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onShopNow={() => handleSelectCategory('all')}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
