export type ProductSegment = 'bike-2d' | 'car-2d' | '3d-hotwheels' | '3d-car' | '3d-car-premium' | 'special';

export interface Review {
  id: string;
  userName: string;
  comment: string;
  rating: number;
  date: string;
}

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
  transactionId: string;
  screenshot?: string;
  status: 'paid' | 'pending';
  timestamp: number;
  isCloudOrder: boolean;
  locationNode?: string;
}

export interface User {
  id: string;
  identifier: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface RegisteredUser {
  identifier: string;
  name: string;
  password?: string;
  role: 'admin' | 'user';
  createdAt: number;
}

export enum CheckoutStep {
  CATALOG,
  PRODUCT_PAGE,
  DETAILS,
  PAYMENT,
  SUCCESS
}