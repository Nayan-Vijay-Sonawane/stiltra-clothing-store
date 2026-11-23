import ProductListing from "@/components/products/ProductListing";
import { products } from "@/features/products/data/products";

export default function MenPage() {
  const menProducts = products.filter(
    (product) => product.audience === "men"
  );

  return (
    <ProductListing
      title="Men's Collection"
      description="Contemporary essentials designed for everyday expression."
      products={menProducts}
    />
  );
}