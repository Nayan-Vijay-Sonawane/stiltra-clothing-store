import type { Product } from "@/types/product";
import ProductGallery from "./ProductGallery";
import ProductPurchasePanel from "./ProductPurchasePanel";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const images =
    product.images?.length
      ? product.images
      : [product.image];

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">

      {/* Product Gallery */}
      <ProductGallery
        images={images}
        name={product.name}
      />

      {/* Product Information */}
      <div className="flex flex-col pt-2">

        <p className="text-xs uppercase tracking-[0.18em] text-[#967d60]">
          {product.category}
        </p>

        <h1 className="mt-3 text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl">
          {product.name}
        </h1>

        <div className="mt-5 flex items-center gap-3">
          <p className="text-xl font-medium">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          {product.originalPrice &&
            product.originalPrice > product.price && (
              <>
                <p className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </p>

                <span className="text-xs text-[#8F775D]">
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}% OFF
                </span>
              </>
            )}
        </div>

        <div className="my-7 border-t border-gray-200" />

        <p className="text-sm leading-7 text-gray-600">
          {product.description}
        </p>

        <div className="my-7 border-t border-gray-200" />

        {/* Purchase Controls */}
        <ProductPurchasePanel product={product} />

        <div className="mt-8 space-y-4 border-t border-gray-200 pt-6">
          <details className="group">
            <summary className="cursor-pointer text-sm font-medium">
              Product Details
            </summary>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {product.description}
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-sm font-medium">
              Shipping Information
            </summary>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Shipping information will be available during checkout.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-sm font-medium">
              Returns and Exchanges
            </summary>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Please refer to our returns policy for applicable conditions.
            </p>
          </details>
        </div>

      </div>
    </div>
  );
}