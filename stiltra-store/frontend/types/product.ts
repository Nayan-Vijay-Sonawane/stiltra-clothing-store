export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  audience: "men" | "women";
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
}