export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface CatalogueItem {
  id: string;
  name: string;
  emoji: string;
  category: 'grafted' | 'nongrafted' | 'indigenous' | 'shade' | 'herbs' | 'ornamental';
  grafted?: boolean;
}

export interface LaybyePackage {
  id: string;
  trees: number;
  durationMonths: 6 | 12;
  pricePerMonth: number;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatarUrl?: string;
}
