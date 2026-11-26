export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  audience: "men" | "women";
  price: number;
  image: string;
  description: string;

  images?: string[];
  size?: string[];
  colors?: string[];
  originalPrice?: number;
  isNew?: boolean;
  loading?: "eager" | "lazy";
}