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
<<<<<<< HEAD
  sizes?: string[];
=======
  size?: string[];
>>>>>>> febf00eea8958a1c1fec1a01c32ee9b4b58a5050
  colors?: string[];
  originalPrice?: number;
  isNew?: boolean;
  loading?: "eager" | "lazy";
}