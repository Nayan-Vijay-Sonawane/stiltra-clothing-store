import ProductListing from "@/components/products/ProductListing";
import { products } from "@/features/products/data/products";

export default function NewArrivalsPage() {
  const newProducts = products.filter(
    (product) => product.isNew
  );

  return (
    <ProductListing
      title="New Arrivals"
      description="Discover the latest additions to STILTRA."
      products={newProducts}
    />
  );
}