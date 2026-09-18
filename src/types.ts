export type Category = 'all' | 'men' | 'women' | 'new' | 'collections' | 'outerwear' | 'bottoms';

export type ProductTag = 'NEW' | 'BESTSELLER' | 'PRO TECH' | 'LIMITED DROP';

export interface ProductColor {
  name: string;
  hex: string;
  image: string;
  altImage?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'men' | 'women' | 'unisex';
  subcategory: 't-shirts' | 'shorts' | 'joggers' | 'sets' | 'hoodies' | 'outerwear';
  price: number; // in INR
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  tag?: ProductTag;
  description: string;
  features: string[];
  fabricSpecs: string;
  careGuide: string;
  colors: ProductColor[];
  sizes: string[];
  primaryImage: string;
  secondaryImage: string;
  isNewArrival?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  id: string; // unique cart entry id
  productId: string;
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
}

export interface UserOrder {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  shippingAddress: {
    fullName: string;
    phone: string;
    pincode: string;
    city: string;
    state: string;
    addressLine: string;
  };
  paymentMethod: string;
  status: 'Confirmed' | 'Dispatched' | 'Out for Delivery';
}
