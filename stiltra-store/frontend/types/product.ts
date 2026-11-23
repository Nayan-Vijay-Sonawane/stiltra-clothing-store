export interface Product {
    id: String;
    slug: String;
    name: String;
    category: String;
    audience: "men" | "women";
    price: number;
    originalPrice?: number;
    image: String;
    isNew?: boolean;
}