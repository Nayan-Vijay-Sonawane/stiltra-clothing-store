import ProductListing from "@/components/products/ProductListing";
import { products } from "@/features/products/data/products";

export default function WomenPage() {
  const womenProducts = products.filter(
    (product) => product.audience === "women"
  );

  return (
    <ProductListing
      title="Women's Collection"
      description="Effortless styles designed for comfort and confidence."
      products={womenProducts}
    />
  );
}