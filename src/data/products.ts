import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'veltro-perf-tee',
    name: 'VELTRO Performance T-Shirt',
    slug: 'veltro-performance-t-shirt',
    category: 'men',
    subcategory: 't-shirts',
    price: 1899,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 142,
    tag: 'BESTSELLER',
    description:
      'Engineered with VELTRO AeroVent™ micro-mesh matrix for rapid thermal dispersion and zero-chafing seam technology. Crafted for explosive training, sprints, and heavy compound lifts.',
    features: [
      'AeroVent™ 4-way micro-perforated stretch fabric',
      'Ergonomic athletic taper with curved split hem',
      'Anti-odor silver ion antimicrobial treatment',
      'Reflective VELTRO "PLAY BEYOND" stadium graphics on spine',
      'Reinforced shoulder seams for bar friction resistance'
    ],
    fabricSpecs: '88% Technical Recycled Polyester, 12% Spandex (185 GSM)',
    careGuide: 'Machine wash cold inside out with like colors. Tumble dry low or hang dry. Do not iron print.',
    colors: [
      {
        name: 'Pitch Black',
        hex: '#0a0a0c',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop'
      },
      {
        name: 'Charcoal Steel',
        hex: '#2b2c31',
        image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop'
      },
      {
        name: 'Titanium White',
        hex: '#e5e7eb',
        image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    primaryImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: 'veltro-training-shorts',
    name: 'VELTRO Training Shorts',
    slug: 'veltro-training-shorts',
    category: 'men',
    subcategory: 'shorts',
    price: 1699,
    originalPrice: 2199,
    rating: 4.8,
    reviewsCount: 98,
    tag: 'PRO TECH',
    description:
      'Dual-layer performance shorts featuring an ultralight ripstop outer shell and an integrated compression liner with phone stash pocket. Unrestricted leg drive for squats, plyometrics, and sprints.',
    features: [
      'Built-in 7-inch anti-chafe compression liner',
      'Deep concealed zip pocket for phone and locker key',
      'Bonded side vents for full range of hip mobility',
      'Drawcord waistband with internal grip silicone',
      'Sweat-activated cooling zone along lower back'
    ],
    fabricSpecs: 'Shell: 90% Ultra-Flex Poly, 10% Spandex; Liner: 82% Nylon, 18% Elastane',
    careGuide: 'Machine wash cold delicate. Do not bleach. Air dry recommended.',
    colors: [
      {
        name: 'Matte Obsidian',
        hex: '#111215',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop'
      },
      {
        name: 'Dark Heather Gray',
        hex: '#374151',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    primaryImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: 'veltro-perf-joggers',
    name: 'VELTRO Performance Joggers',
    slug: 'veltro-performance-joggers',
    category: 'men',
    subcategory: 'joggers',
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviewsCount: 185,
    tag: 'BESTSELLER',
    description:
      'Precision-tailored athletic joggers with articulated knee articulation and dense thermal-regulate weave. Designed for pre-game tunnel walks, outdoor conditioning, and post-session recovery.',
    features: [
      'Articulated darting at knees for frictionless movement',
      'Concealed waterproof YKK zip pockets',
      'Cuffed rib-knit aerodynamic ankles',
      'Heavy-duty tactical drawcord with matte zinc aglets',
      'VELTRO subtle 3D rubberized crest branding'
    ],
    fabricSpecs: '76% Combed Dense Cotton, 18% Performance Poly, 6% Elastane (340 GSM)',
    careGuide: 'Wash cold inside out. Flat dry to preserve structural taper.',
    colors: [
      {
        name: 'Deep Shadow',
        hex: '#0d0d0f',
        image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop'
      },
      {
        name: 'Asphalt Carbon',
        hex: '#1f2937',
        image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    primaryImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: 'veltro-training-set',
    name: 'VELTRO Training Set',
    slug: 'veltro-training-set',
    category: 'men',
    subcategory: 'sets',
    price: 3499,
    originalPrice: 4699,
    rating: 5.0,
    reviewsCount: 76,
    tag: 'LIMITED DROP',
    description:
      'The complete performance uniform. Includes the VELTRO Compression Short Sleeve and Matching Kinetic Shorts. Engineered to streamline blood flow and maximize muscle endurance in high-intensity training.',
    features: [
      'Graduated targeted compression across torso and quadriceps',
      'Laser-cut ventilation matrix across upper spinal corridor',
      'Hydro-shield moisture evaporation technology',
      'Dual-piece color-matched dark stadium aesthetic',
      'Comes with commemorative VELTRO "PLAY BEYOND" gear bag'
    ],
    fabricSpecs: 'Ultra-Compression Matrix: 85% Polyamide, 15% Spandex',
    careGuide: 'Hand wash or gentle machine wash cold. Hang dry in shade.',
    colors: [
      {
        name: 'Stadium Dark',
        hex: '#09090b',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop'
      },
      {
        name: 'Monochrome Shadow',
        hex: '#18181b',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    primaryImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: 'veltro-essential-tee',
    name: 'VELTRO Essential Tee',
    slug: 'veltro-essential-tee',
    category: 'men',
    subcategory: 't-shirts',
    price: 1399,
    originalPrice: 1799,
    rating: 4.7,
    reviewsCount: 64,
    tag: 'NEW',
    description:
      'Minimalist athletic streetwear tailored with heavy luxury cotton and an active elastane blend. Clean boxy athletic silhouette for versatile gym-to-street transitions.',
    features: [
      'Heavyweight 240 GSM organic cotton blend',
      'Drop shoulder tailored drape for broad athletic physique',
      'High rib collar that retains form through repeated washes',
      'Tonal minimalist VELTRO chest embroidery',
      'Side seam reinforcement stitches'
    ],
    fabricSpecs: '95% Premium Heavy Cotton, 5% Elastane (240 GSM)',
    careGuide: 'Machine wash warm with dark colors. Do not dry clean.',
    colors: [
      {
        name: 'Charcoal Noir',
        hex: '#1f2024',
        image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop'
      },
      {
        name: 'Pure White',
        hex: '#f3f4f6',
        image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    primaryImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: 'veltro-perf-hoodie',
    name: 'VELTRO Performance Hoodie',
    slug: 'veltro-performance-hoodie',
    category: 'men',
    subcategory: 'hoodies',
    price: 2999,
    originalPrice: 3999,
    rating: 4.9,
    reviewsCount: 210,
    tag: 'BESTSELLER',
    description:
      'Heavyweight blackout training pullover with scuba hood construction and thermal fleece interior. Keeps muscles warm in cool outdoor stadiums and pre-fight warm-ups.',
    features: [
      'Scuba neck thermal hood with matte drawstring toggles',
      'Kangaroo pocket with internal phone retention divider',
      'Thumbhole cuffs for aerodynamic wrist lockdown',
      'High-density 380 GSM fleece back cotton blend',
      'Rubberized matte VELTRO logo on chest and "PLAY BEYOND" on forearm'
    ],
    fabricSpecs: '82% Premium Combed Cotton, 18% Poly Fleece (380 GSM)',
    careGuide: 'Turn inside out, wash cold. Line dry in shade to maintain fleece softness.',
    colors: [
      {
        name: 'Blackout',
        hex: '#050507',
        image: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop'
      },
      {
        name: 'Gunmetal Gray',
        hex: '#27272a',
        image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    primaryImage: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: false,
    isFeatured: true
  },
  {
    id: 'veltro-women-sculpt-leggings',
    name: "VELTRO Women's Kinetic Sculpt Leggings",
    slug: 'veltro-womens-kinetic-sculpt-leggings',
    category: 'women',
    subcategory: 'joggers',
    price: 2299,
    originalPrice: 2999,
    rating: 4.9,
    reviewsCount: 119,
    tag: 'PRO TECH',
    description:
      'High-waisted compression tights built with second-skin zero-seam waistband. Provides muscular stability and squat-proof opacity through any rigorous training routine.',
    features: [
      '100% squat-tested blackout opacity fabric',
      'Bonded high-rise compressive waistband that stays anchored',
      'Seamless outer thigh with ergonomic contour stitching',
      'Moisture-wicking QuickDry™ micro-filament weave',
      'Subtle reflective VELTRO logo at ankle'
    ],
    fabricSpecs: '75% Nylon, 25% High-Recovery Lycra (260 GSM)',
    careGuide: 'Machine wash cold delicate. Do not use fabric softener.',
    colors: [
      {
        name: 'Carbon Onyx',
        hex: '#0e0e11',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop'
      },
      {
        name: 'Slate Shadow',
        hex: '#334155',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    primaryImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: 'veltro-women-sports-bra',
    name: "VELTRO Women's Core Impact Sports Bra",
    slug: 'veltro-womens-core-impact-sports-bra',
    category: 'women',
    subcategory: 'sets',
    price: 1599,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 88,
    tag: 'NEW',
    description:
      'High-support athletic sports bra featuring wide stabilization straps and a breathable racerback mesh panel. Engineered for high-impact sprint intervals and weight training.',
    features: [
      'High-impact encapsulated support without underwire friction',
      'Laser-cut ventilation panel across spinal groove',
      'Removable molded breathable pads',
      'Branded plush elastic chest band for slip-free grip',
      'Clean athletic silhouette in charcoal monochrome'
    ],
    fabricSpecs: '78% Recycled Poly, 22% Elastane',
    careGuide: 'Remove pads before washing. Machine wash cold, air dry.',
    colors: [
      {
        name: 'Stealth Black',
        hex: '#0a0a0c',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    primaryImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: true,
    isFeatured: false
  },
  {
    id: 'veltro-stealth-compression-top',
    name: 'VELTRO Stealth Compression Top',
    slug: 'veltro-stealth-compression-top',
    category: 'men',
    subcategory: 't-shirts',
    price: 2199,
    originalPrice: 2799,
    rating: 4.9,
    reviewsCount: 92,
    tag: 'PRO TECH',
    description:
      'Long-sleeve performance compression top engineered to reduce muscle oscillation, accelerate blood circulation, and maintain core muscle temperature during intense training sessions.',
    features: [
      'Zoned anatomic compression ribs along lats and deltoids',
      'Flatlock 6-thread ergonomic seam assembly',
      'Anti-odor zinc micro-infusion technology',
      'Reflective stadium accents on wrists and collar',
      'Extended lower hem that prevents riding up during deadlifts'
    ],
    fabricSpecs: '84% Polyamide, 16% Spandex (210 GSM)',
    careGuide: 'Machine wash cold. Do not iron or dry clean.',
    colors: [
      {
        name: 'Pitch Black',
        hex: '#0a0a0c',
        image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    primaryImage: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: true,
    isFeatured: false
  },
  {
    id: 'veltro-storm-anorak',
    name: 'VELTRO Storm-Shield Technical Anorak',
    slug: 'veltro-storm-shield-technical-anorak',
    category: 'men',
    subcategory: 'outerwear',
    price: 3899,
    originalPrice: 4999,
    rating: 5.0,
    reviewsCount: 57,
    tag: 'LIMITED DROP',
    description:
      'Water-repellent windbreaker jacket engineered with DWR ripstop membrane. Built for nighttime stadium track work, wet weather drills, and cold morning conditioning.',
    features: [
      'DWR treated wind-and-water resistant micro-ripstop shell',
      'Adjustable storm hood with stiffened visor edge',
      'Dual zippered chest cargo pockets with taped seams',
      'Breathable underarm ventilation vents with mesh backing',
      'Concealed hem bungee cinch cords'
    ],
    fabricSpecs: '100% Lightweight Technical Nylon Ripstop (3-Layer Membrane)',
    careGuide: 'Wipe clean or gentle cold wash. Hang dry away from heat.',
    colors: [
      {
        name: 'Black Steel',
        hex: '#141416',
        image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1000&auto=format&fit=crop',
        altImage: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    primaryImage: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: true,
    isFeatured: true
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Vikram S.',
    location: 'Mumbai',
    rating: 5,
    verified: true,
    product: 'VELTRO Performance T-Shirt',
    comment: 'The fit on the shoulders is phenomenal. Stays dry even during high-intensity 90-minute conditioning in Mumbai humidity.'
  },
  {
    id: 'rev-2',
    author: 'Arjun M.',
    location: 'Bengaluru',
    rating: 5,
    verified: true,
    product: 'VELTRO Training Shorts',
    comment: 'Best training shorts I have owned. The compression liner does not bunch up during heavy squats and the zip phone pocket is genius.'
  },
  {
    id: 'rev-3',
    author: 'Kavita R.',
    location: 'Delhi NCR',
    rating: 5,
    verified: true,
    product: "VELTRO Women's Kinetic Sculpt Leggings",
    comment: 'Completely squat-proof, thick yet breathable fabric. The dark aesthetic looks super premium.'
  }
];
