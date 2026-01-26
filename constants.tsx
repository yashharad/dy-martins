
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

export const SEGMENTS_INFO: { id: ProductSegment; title: string; subtitle: string; image: string }[] = [
  { 
    id: 'bike-2d', 
    title: 'Bike Frame (2D)', 
    subtitle: 'Sleek, Durable & Minimalist', 
    image: `${BASE_IMG_URL}classic%20350.jpg` 
  },
  { 
    id: '3d-hotwheels', 
    title: '3D Hotwheels Frame', 
    subtitle: 'Iconic Die-Cast Display', 
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '3d-car', 
    title: '3D Metal Car', 
    subtitle: 'Metal Supercars in Depth', 
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '3d-car-premium', 
    title: '3D Car (Premium)', 
    subtitle: 'Integrated LEDs & Luxury Finish', 
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800' 
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
    price: 649,
    image: `${BASE_IMG_URL}classic%20350.jpg`,
    description: 'A beautiful frame for the classic Royal Enfield 350. Perfect for bike lovers and their rooms.',
    specifications: ['High Quality Print', 'Durable Frame', 'Easy to Hang', 'Bike Stats Included'],
    reviews: generateReviews('Royal Enfield 350')
  },
  {
    id: 'bk-2d-2',
    name: 'Kawasaki Ninja H2',
    segment: 'bike-2d',
    price: 699,
    // Updated filename based on user feedback that "Kawasaki Ninja H2" was not displaying
    image: `${BASE_IMG_URL}kawasaki%20ninja%20h2.jpg`,
    description: 'Get the superfast Kawasaki Ninja H2 on your wall. High quality design with detailed bike info.',
    specifications: ['Sleek Black Border', 'Premium Finish', 'Clear Specs Display', 'A4 Size'],
    reviews: generateReviews('Kawasaki Ninja H2')
  },
  {
    id: 'bk-2d-3',
    name: 'Ride Framework',
    segment: 'bike-2d',
    price: 449,
    image: `${BASE_IMG_URL}just%20ride.jpg`,
    description: 'A motivational frame for every rider. "Riding is a simple solution" quote with a great sunset look.',
    specifications: ['Artistic Look', 'Solid Wood Frame', 'Inspirational Text', 'Wall Ready'],
    reviews: generateReviews('Ride Framework')
  },
  {
    id: 'bk-2d-4',
    name: 'GT650',
    segment: 'bike-2d',
    price: 749,
    image: `${BASE_IMG_URL}gt650%20(2).jpg`,
    description: 'The elegant Royal Enfield Continental GT 650 frame. A must-have for Cafe Racer fans.',
    specifications: ['Glossy Print', 'Clean Design', 'Twin Engine Details', 'Premium Frame Material'],
    reviews: generateReviews('GT650')
  },
  {
    id: 'bk-2d-5',
    name: 'BMW S100RR',
    segment: 'bike-2d',
    price: 599,
    image: `${BASE_IMG_URL}s100rr.jpg`,
    description: 'High performance art. The BMW S1000RR 2009 edition frame with full power stats.',
    specifications: ['Sporty Background', 'Blue & White Theme', 'Detailed Performance Info', 'Strong Build'],
    reviews: generateReviews('BMW S100RR')
  },

  // Segment: 3D Hotwheels Frame
  {
    id: 'hw-3d-1',
    name: '911 Turbo Display',
    segment: '3d-hotwheels',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800',
    description: 'Premium frame featuring an authentic 1/64 Porsche 911 Turbo.',
    specifications: ['Collector Case', 'Deep Frame', 'Acrylic Front'],
    reviews: generateReviews('911 Turbo Display')
  },
  {
    id: 'hw-3d-2',
    name: 'Skyline GTR JDM Frame',
    segment: '3d-hotwheels',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&q=80&w=800',
    description: 'Iconic R34 Skyline in a custom JDM themed background.',
    specifications: ['Limited Run', 'Dustproof', 'Wall Mountable'],
    reviews: generateReviews('Skyline GTR JDM Frame')
  },
  {
    id: 'hw-3d-3',
    name: 'Mustang 67 Muscle',
    segment: '3d-hotwheels',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&q=80&w=800',
    description: 'Vintage Mustang 1967 displayed against a retro garage backdrop.',
    specifications: ['High Contrast', 'Gift Ready', 'Premium Print'],
    reviews: generateReviews('Mustang 67 Muscle')
  },
  {
    id: 'hw-3d-4',
    name: 'Supra MK4 Legend',
    segment: '3d-hotwheels',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&q=80&w=800',
    description: 'The holy grail of JDM, showcased in a modern floating frame.',
    specifications: ['Carbon Background', 'Secure Hold', 'Modern Art'],
    reviews: generateReviews('Supra MK4 Legend')
  },
  {
    id: 'hw-3d-5',
    name: 'Countach Retro Wave',
    segment: '3d-hotwheels',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&q=80&w=800',
    description: 'Lamborghini Countach with an 80s synthwave inspired backdrop.',
    specifications: ['Vibrant Colors', 'Exclusive Design', 'High Gloss'],
    reviews: generateReviews('Countach Retro Wave')
  },

  // Segment: 3D Metal Car
  {
    id: 'mc-3d-1',
    name: 'Aventador SVJ Steel',
    segment: '3d-car',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    description: 'Solid metal 3D sculpture of the Aventador SVJ in a luxury frame.',
    specifications: ['Solid Metal', 'Hand Painted', '3D Pop-out'],
    reviews: generateReviews('Aventador SVJ Steel')
  },
  {
    id: 'mc-3d-2',
    name: 'Ferrari Purosangue Art',
    segment: '3d-car',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800',
    description: 'The latest Ferrari masterpiece rendered in high-grade aluminum.',
    specifications: ['Brushed Metal', 'Museum Quality', 'Deep Shadowbox'],
    reviews: generateReviews('Ferrari Purosangue Art')
  },
  {
    id: 'mc-3d-3',
    name: 'McLaren 720S Shadow',
    segment: '3d-car',
    price: 2899,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    description: 'Stealth black metal finish with orange accents for the 720S.',
    specifications: ['Matte Black Metal', 'Floating Design', 'Lightweight Alloy'],
    reviews: generateReviews('McLaren 720S Shadow')
  },
  {
    id: 'mc-3d-4',
    name: 'Bugatti Chiron Steel',
    segment: '3d-car',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1605733513597-a8f8d410fe3c?auto=format&fit=crop&q=80&w=800',
    description: 'A heavy-duty 3D representation of the speed king.',
    specifications: ['Laser Cut', 'Stainless Steel', 'Premium Mounting'],
    reviews: generateReviews('Bugatti Chiron Steel')
  },
  {
    id: 'mc-3d-5',
    name: 'Pagani Huayra Artisanal',
    segment: '3d-car',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    description: 'Intricate metalwork showing the beauty of Pagani engineering.',
    specifications: ['Highly Detailed', 'Velvet Backing', 'Signature Series'],
    reviews: generateReviews('Pagani Huayra Artisanal')
  },

  // Segment: 3D Car (Premium)
  {
    id: 'pr-3d-1',
    name: 'Luminous Aventador',
    segment: '3d-car-premium',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    description: '3D Metal car with app-controlled RGB LED backlighting.',
    specifications: ['Smart LEDs', 'Real Carbon Fiber', 'Bluetooth Control'],
    reviews: generateReviews('Luminous Aventador')
  },
  {
    id: 'pr-3d-2',
    name: 'Chrome G-Wagon Elite',
    segment: '3d-car-premium',
    price: 6499,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    description: 'Fully chrome-plated 3D G-Wagon with halo lighting effects.',
    specifications: ['Mirror Finish', 'Wall Glow', 'Remote Operated'],
    reviews: generateReviews('Chrome G-Wagon Elite')
  },
  {
    id: 'pr-3d-3',
    name: 'Royal Gold Phantom',
    segment: '3d-car-premium',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    description: '24K Gold plated 3D details on a luxury black velvet canvas.',
    specifications: ['Gold Plated', 'Spirit of Ecstasy 3D', 'Authentic Velvet'],
    reviews: generateReviews('Royal Gold Phantom')
  },
  {
    id: 'pr-3d-4',
    name: 'GT3 RS Night Edition',
    segment: '3d-car-premium',
    price: 6999,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&get=80&w=800',
    description: 'Glow-in-the-dark accents combined with dynamic ambient LEDs.',
    specifications: ['Dusk Sensor', 'Motion Lighting', 'Alcantara Frame'],
    reviews: generateReviews('GT3 RS Night Edition')
  },
  {
    id: 'pr-3d-5',
    name: 'Platinum Chiron Ultra',
    segment: '3d-car-premium',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    description: 'The pinnacle of framing: Brushed platinum metal with crystal accents.',
    specifications: ['Platinum Finish', 'Crystal Headlights', 'Numbered 1/10'],
    reviews: generateReviews('Platinum Chiron Ultra')
  },

  // Segment: Special
  {
    id: 'sp-1',
    name: 'Virat Kohli Iconic 82*',
    segment: 'special',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    description: '3D frame celebrating the legendary MCG knock with authentic ground texture.',
    specifications: ['Handcrafted', 'Commemorative', 'Gold Embossed'],
    reviews: generateReviews('Virat Kohli Iconic 82*')
  },
  {
    id: 'sp-2',
    name: 'MS Dhoni Finisher',
    segment: 'special',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    description: '3D silhouette of the helicopter shot with the 2011 WC theme.',
    specifications: ['Laser Etched', 'Exclusive Art', 'Victory Series'],
    reviews: generateReviews('MS Dhoni Finisher')
  },
  {
    id: 'sp-3',
    name: 'Lionel Messi G.O.A.T',
    segment: 'special',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    description: 'World Cup winning moment in a deep gold-leafed floating frame.',
    specifications: ['Canvas Print', '3D Medal Replica', 'Signature Style'],
    reviews: generateReviews('Lionel Messi G.O.A.T')
  },
  {
    id: 'sp-4',
    name: 'Cristiano Ronaldo CR7',
    segment: 'special',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    description: 'High-gloss 3D frame featuring the iconic "Siu" silhouette.',
    specifications: ['Sports Minimalist', 'Modern Acrylic', 'Champion Edition'],
    reviews: generateReviews('Cristiano Ronaldo CR7')
  },
  {
    id: 'sp-5',
    name: 'Sachin Master Blaster',
    segment: 'special',
    price: 2799,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    description: 'A tribute to the God of Cricket featuring his career stats 3D etched.',
    specifications: ['Stat-Etched Glass', 'Veneer Wood', 'Timeless Design'],
    reviews: generateReviews('Sachin Master Blaster')
  },
];

export const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
  'Uttarakhand', 'West Bengal'
];

export const CONTACT_WHATSAPP = "917977687041";
export const UPI_ID = "7977687041@fam";

export const UPI_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=upi://pay?pa=${UPI_ID}%26pn=DYmartins%26cu=INR`;
