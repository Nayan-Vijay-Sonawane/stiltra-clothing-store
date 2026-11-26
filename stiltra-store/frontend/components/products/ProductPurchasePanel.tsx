"use client";

import { useState } from "react";

interface PurchasePanelProps {
  product: {
    id: string;
    name: string;
    price: number;
    sizes?: string[];
    colors?: string[];
  };
}

export default function ProductPurchasePanel({
  product,
}: PurchasePanelProps) {
  const sizes = product.sizes ?? [];
  const colors = product.colors ?? [];

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(
    colors[0] ?? ""
  );
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  function handleAddToCart() {
    if (sizes.length > 0 && !selectedSize) {
      setMessage("Please select a size.");
      return;
    }

    if (colors.length > 0 && !selectedColor) {
      setMessage("Please select a colour.");
      return;
    }

    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity,
    };

    // Temporary MVP cart persistence.
    const existingCart = JSON.parse(
      localStorage.getItem("stiltra-cart") || "[]"
    );

    const existingIndex = existingCart.findIndex(
      (item: typeof cartItem) =>
        item.productId === cartItem.productId &&
        item.size === cartItem.size &&
        item.color === cartItem.color
    );

    if (existingIndex >= 0) {
      existingCart[existingIndex].quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem(
      "stiltra-cart",
      JSON.stringify(existingCart)
    );

    setMessage("Product added to your bag.");
  }

  return (
    <div className="space-y-7">

      {/* Colour Selection */}
      {colors.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-medium">
            Colour: {selectedColor}
          </h3>

          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => {
                  setSelectedColor(color);
                  setMessage("");
                }}
                className={`border px-4 py-2 text-sm ${
                  selectedColor === color
                    ? "border-black bg-black text-white"
                    : "border-gray-300"
                }`}
                aria-pressed={selectedColor === color}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      {sizes.length > 0 && (
        <div>
          <div className="mb-3 flex justify-between">
            <h3 className="text-sm font-medium">
              Select Size
            </h3>

            <button className="text-xs underline">
              Size Guide
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => {
                  setSelectedSize(size);
                  setMessage("");
                }}
                className={`border py-3 text-sm ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-gray-300 hover:border-black"
                }`}
                aria-pressed={selectedSize === size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <h3 className="mb-3 text-sm font-medium">
          Quantity
        </h3>

        <div className="flex w-fit items-center border border-gray-300">
          <button
            onClick={() =>
              setQuantity((current) =>
                Math.max(1, current - 1)
              )
            }
            className="px-4 py-2"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="min-w-10 text-center">
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity((current) => current + 1)
            }
            className="px-4 py-2"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-[#111111] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#8f775d]"
      >
        ADD TO BAG — ₹{product.price * quantity}
      </button>

      {message && (
        <p
          role="status"
          className="text-sm text-gray-600"
        >
          {message}
        </p>
      )}

    </div>
  );
}