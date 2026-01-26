
export interface User {
  id: string;
  email: string;
  name: string;
  photoUrl?: string;
  role: 'admin' | 'user';
  identifier?: string;
}

export interface RegisteredUser {
  identifier: string;
  name: string;
  password?: string;
  role: 'admin' | 'user';
  createdAt: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export type ProductSegment = 'bike-2d' | '3d-hotwheels' | '3d-car' | '3d-car-premium' | 'special';

export interface Product {
  id: string;
  name: string;
  segment: ProductSegment;
  price: number;
  image: string;
  description: string;
  specifications: string[];
  reviews: Review[];
}

export interface CustomerDetails {
  fullName: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface Order {
  orderId: string;
  userId: string;
  productId: string;
  productName: string;
  price: number;
  customerDetails: CustomerDetails;
  transactionId?: string;
  screenshot?: string;
  status: 'pending' | 'paid' | 'confirmed';
  timestamp: number;
  isCloudOrder?: boolean;
  locationNode?: string; 
}

export enum CheckoutStep {
  CATALOG = 'CATALOG',
  PRODUCT_PAGE = 'PRODUCT_PAGE',
  DETAILS = 'DETAILS',
  PAYMENT = 'PAYMENT',
  CONFIRMATION = 'CONFIRMATION',
  SUCCESS = 'SUCCESS'
}
