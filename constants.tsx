import { Product, Review, ProductSegment } from './types';

const generateReviews = (productName: string): Review[] => {
  const commonReviews = [
    { name: "Rahul Sharma", comment: "Excellent quality, fits perfectly! The build quality is better than expected.", rating: 5 },
    { name: "Anita Desai", comment: "Very premium feel, totally worth the price. Highly recommended.", rating: 5 },
    { name: "Vikram Singh", comment: "Fast delivery and the finish is top notch. Looks stunning in my room.", rating: 4 },
    { name: "Sneha Patel", comment: "Looks much better in person. The 3D effect is unbelievable.", rating: 5 },
    { name: "Amit Kumar", comment: "Installation was easy. The lighting in the premium edition is worth the extra cost.", rating: 5 },
    { name: "Priya Menon", comment: "The finish is exactly what I wanted. Feels very sturdy.", rating: 5 },
    { name: "Sameer Vora", comment: "Absolutely delighted with the stealth look. Changed my space's appearance.", rating: 5 },
  ];

  const count = Math.floor(Math.random() * 3) + 4; // 4 to 6 reviews
  const shuffled = [...commonReviews].sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, count).map((r, i) => ({
    id: `rev-${Math.random().toString(36).substr(2, 5)}`,
    userName: r.name,
    comment: r.comment,
    rating: r.rating,
    date: new Date(Date.now() - (Math.random() * 10 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }));
};

const BASE_IMG_URL = "https://raw.githubusercontent.com/yashharad/images/main/";
const HW_BASE_URL = "https://raw.githubusercontent.com/yashharad/hot-wheels/main/";
const METAL_CAR_BASE_URL = "https://raw.githubusercontent.com/yashharad/super-car-3d/main/";
const PREMIUM_CAR_BASE_URL = "https://raw.githubusercontent.com/yashharad/3d-premium/main/";
const CAR_2D_BASE_URL = "https://raw.githubusercontent.com/yashharad/2d-cars/main/";

export const SEGMENTS_INFO: { id: ProductSegment; title: string; subtitle: string; image: string }[] = [
  { 
    id: 'bike-2d', 
    title: 'Bike Frame (2D)', 
    subtitle: 'Sleek, Durable & Minimalist', 
    image: `${BASE_IMG_URL}classic%20350.jpg` 
  },
  { 
    id: 'car-2d', 
    title: 'Car Frame (2D)', 
    subtitle: 'Classic Silhouettes & Specs', 
    image: `${CAR_2D_BASE_URL}IMG-20260203-WA0003.jpg` 
  },
  { 
    id: '3d-hotwheels', 
    title: '3D Hotwheels Frame', 
    subtitle: 'Iconic Die-Cast Display', 
    image: `${HW_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.21%20PM%20(1).jpeg` 
  },
  { 
    id: '3d-car', 
    title: '3D Metal Car', 
    subtitle: 'Metal Supercars in Depth', 
    image: `${METAL_CAR_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.55%20PM%20(1).jpeg` 
  },
  { 
    id: '3d-car-premium', 
    title: '3D Car (Premium)', 
    subtitle: 'Integrated LEDs & Luxury Finish', 
    image: `${PREMIUM_CAR_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.15.31%20PM.jpeg` 
  },
  { 
    id: 'special', 
    title: 'Special Edition', 
    subtitle: 'Sports Legends & Icons', 
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800' 
  },
];

export const PRODUCTS: Product[] = [
  // Segment: Bike Frame (2D)
  {
    id: 'bk-2d-1',
    name: 'Royal Enfield 350',
    segment: 'bike-2d',
    price: 999,
    image: `${BASE_IMG_URL}classic%20350.jpg`,
    description: 'A beautiful frame for the classic Royal Enfield 350. Perfect for bike lovers and their rooms.',
    specifications: ['High Quality Print', 'Durable Frame', 'Easy to Hang', 'Bike Stats Included'],
    reviews: generateReviews('Royal Enfield 350')
  },
  {
    id: 'bk-2d-2',
    name: 'Kawasaki Ninja H2',
    segment: 'bike-2d',
    price: 999,
    image: `${BASE_IMG_URL}kawasaki%20ninja%20h2.jpg`,
    description: 'Get the superfast Kawasaki Ninja H2 on your wall. High quality design with detailed bike info.',
    specifications: ['Sleek Black Border', 'Premium Finish', 'Clear Specs Display', 'A4 Size'],
    reviews: generateReviews('Kawasaki Ninja H2')
  },
  {
    id: 'bk-2d-3',
    name: 'Ride Framework',
    segment: 'bike-2d',
    price: 999,
    image: `${BASE_IMG_URL}just%20ride.jpg`,
    description: 'A motivational frame for every rider. "Riding is a simple solution" quote with a great sunset look.',
    specifications: ['Artistic Look', 'Solid Wood Frame', 'Inspirational Text', 'Wall Ready'],
    reviews: generateReviews('Ride Framework')
  },
  {
    id: 'bk-2d-4',
    name: 'GT650',
    segment: 'bike-2d',
    price: 999,
    image: `${BASE_IMG_URL}gt650%20(2).jpg`,
    description: 'The elegant Royal Enfield Continental GT 650 frame. A must-have for Cafe Racer fans.',
    specifications: ['Glossy Print', 'Clean Design', 'Twin Engine Details', 'Premium Frame Material'],
    reviews: generateReviews('GT650')
  },
  {
    id: 'bk-2d-5',
    name: 'BMW S100RR',
    segment: 'bike-2d',
    price: 999,
    image: `${BASE_IMG_URL}s100rr.jpg`,
    description: 'High performance art. The BMW S1000RR 2009 edition frame with full power stats.',
    specifications: ['Sporty Background', 'Blue & White Theme', 'Detailed Performance Info', 'Strong Build'],
    reviews: generateReviews('BMW S100RR')
  },

  // Segment: Car Frame (2D)
  {
    id: 'cr-2d-exclusive-1',
    name: 'BMW M4 Competition',
    segment: 'car-2d',
    price: 999,
    image: `${CAR_2D_BASE_URL}IMG-20260203-WA0003.jpg`,
    description: 'Premium 2D automotive silhouette frame of the aggressive BMW M4 Competition. Features a sleek, minimalist profile.',
    specifications: ['Matte Black Frame', 'High-Gsm Paper', 'Precision Silhouette', 'Sleek Aesthetic'],
    reviews: generateReviews('BMW M4 Competition')
  },
  {
    id: 'cr-2d-exclusive-2',
    name: 'Performance Silhouette 02',
    segment: 'car-2d',
    price: 999,
    image: `${CAR_2D_BASE_URL}IMG-20260203-WA0004.jpg`,
    description: 'Complementary 2D performance frame. A perfect match for any enthusiast gallery or garage workspace.',
    specifications: ['Glass Front', 'Minimalist Design', 'Durable Backing', 'Wall Mount Ready'],
    reviews: generateReviews('Performance Silhouette 02')
  },

  // Segment: 3D Hotwheels Frame
  {
    id: 'hw-3d-1',
    name: 'Exotic Drift Edition',
    segment: '3d-hotwheels',
    price: 999,
    image: `${HW_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.21%20PM%20(1).jpeg`,
    description: 'Premium frame featuring an iconic high-performance drift machine.',
    specifications: ['Collector Case', 'Deep Frame', 'Acrylic Front', 'Vibrant Backing'],
    reviews: generateReviews('Exotic Drift Edition')
  },
  {
    id: 'hw-3d-2',
    name: 'Vintage Speed Art',
    segment: '3d-hotwheels',
    price: 999,
    image: `${HW_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.21%20PM.jpeg`,
    description: 'Classic automotive speed captured in a detailed 3D die-cast display.',
    specifications: ['Retro Aesthetic', 'Dustproof Acrylic', 'Wall Mountable', 'Artisanal Print'],
    reviews: generateReviews('Vintage Speed Art')
  },
  {
    id: 'hw-3d-3',
    name: 'Ice Charger Fast and Furious',
    segment: '3d-hotwheels',
    price: 999,
    image: `${HW_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.21%20PM%20(2).jpeg`,
    description: 'The legendary Ice Charger from the Fast & Furious franchise, framed in high detail.',
    specifications: ['Movie Edition', 'Premium Texture', 'High Contrast Background', 'Secure Hold'],
    reviews: generateReviews('Ice Charger Fast and Furious')
  },
  {
    id: 'hw-3d-4',
    name: '67 Camaro Legacy',
    segment: '3d-hotwheels',
    price: 999,
    image: `${HW_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.21%20PM%20(3).jpeg`,
    description: 'A tribute to American muscle racing history with the iconic 1967 Camaro.',
    specifications: ['Muscle Series', 'Premium Wood Frame', 'Carbon Fiber Texture', 'Authentic Die-Cast'],
    reviews: generateReviews('67 Camaro Legacy')
  },
  {
    id: 'hw-3d-5',
    name: 'Subaru Impreza',
    segment: '3d-hotwheels',
    price: 999,
    image: `${HW_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.22%20PM.jpeg`,
    description: 'Rally legend Subaru Impreza showcased in a modern floating frame.',
    specifications: ['Rally Heritage', 'Modern Minimalist', 'High Gloss Finish', 'Limited Edition'],
    reviews: generateReviews('Subaru Impreza')
  },

  // Segment: 3D Metal Car
  {
    id: 'mc-3d-1',
    name: 'Ferrari SF90',
    segment: '3d-car',
    price: 999,
    image: `${METAL_CAR_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.55%20PM.jpeg`,
    description: 'A stunning 3D metal representation of the Ferrari SF90 Stradale.',
    specifications: ['Solid Metal', 'Hand Painted', '3D Pop-out Effect'],
    reviews: generateReviews('Ferrari SF90')
  },
  {
    id: 'mc-3d-2',
    name: 'BMW GT3',
    segment: '3d-car',
    price: 999,
    image: `${METAL_CAR_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.55%20PM%20(1).jpeg`,
    description: 'High-detail 3D art featuring the aggressive lines of the BMW GT3 racer.',
    specifications: ['Brushed Metal Finish', 'Premium Deep Frame', 'Limited Batch'],
    reviews: generateReviews('BMW GT3')
  },
  {
    id: 'mc-3d-3',
    name: 'McLaren P1',
    segment: '3d-car',
    price: 999,
    image: `${METAL_CAR_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.55%20PM%20(2).jpeg`,
    description: 'The legendary McLaren P1 hypercar showcased in deep 3D metalwork.',
    specifications: ['Metallic Shadow Design', 'Floating Frame', 'Artisanal Build'],
    reviews: generateReviews('McLaren P1')
  },
  {
    id: 'mc-3d-4',
    name: 'Porsche',
    segment: '3d-car',
    price: 999,
    image: `${METAL_CAR_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.56%20PM.jpeg`,
    description: 'Iconic Porsche styling captured in a premium 3D metal frame.',
    specifications: ['German Engineering Art', 'Sleek Aesthetic', 'Wall Ready'],
    reviews: generateReviews('Porsche')
  },
  {
    id: 'mc-3d-5',
    name: 'Supra',
    segment: '3d-car',
    price: 999,
    image: `${METAL_CAR_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.14.56%20PM%20(1).jpeg`,
    description: 'The fan-favorite Toyota Supra rendered in high-grade metal for enthusiasts.',
    specifications: ['JDM Legend Series', 'Highly Detailed', 'Exclusive Item'],
    reviews: generateReviews('Supra')
  },

  // Segment: 3D Car (Premium)
  {
    id: 'pr-3d-1',
    name: 'Shelby GT500',
    segment: '3d-car-premium',
    price: 999,
    image: `${PREMIUM_CAR_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.15.31%20PM.jpeg`,
    description: '100% Handcrafted Shelby GT500 metal frame with integrated LED effects and premium materials.',
    specifications: ['Hand Crafted', 'LED Glow System', 'Imported Durable Items', 'Elite Finish'],
    reviews: generateReviews('Shelby GT500')
  },
  {
    id: 'pr-3d-2',
    name: 'Thar',
    segment: '3d-car-premium',
    price: 999,
    image: `${PREMIUM_CAR_BASE_URL}WhatsApp%20Image%202026-02-01%20at%207.15.31%20PM%20(1).jpeg`,
    description: 'The iconic Thar captured in a handcrafted 3D masterpiece with custom LED backlighting.',
    specifications: ['Bespoke Build', 'Dynamic LEDs', 'High-Grade Materials', 'Lifetime Frame'],
    reviews: generateReviews('Thar')
  },

  // Segment: Special
  {
    id: 'sp-1',
    name: 'Virat Kohli Iconic 82*',
    segment: 'special',
    price: 999,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    description: '3D frame celebrating the legendary MCG knock with authentic ground texture.',
    specifications: ['Handcrafted', 'Commemorative', 'Gold Embossed'],
    reviews: generateReviews('Virat Kohli Iconic 82*')
  },
  {
    id: 'sp-2',
    name: 'MS Dhoni Finisher',
    segment: 'special',
    price: 999,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    description: '3D silhouette of the helicopter shot with the 2011 WC theme.',
    specifications: ['Laser Etched', 'Exclusive Art', 'Victory Series'],
    reviews: generateReviews('MS Dhoni Finisher')
  },
];

export const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
  'Uttarakhand', 'West Bengal'
];

/** Contact for order receiving and live support: +91 91754 88551 */
export const CONTACT_WHATSAPP = "919175488551";

/** Contact for payment and QR remains as prior: +91 7977687041 */
export const UPI_ID = "7977687041@fam";

export const UPI_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=upi://pay?pa=${UPI_ID}%26pn=DYmartins%26cu=INR`;
