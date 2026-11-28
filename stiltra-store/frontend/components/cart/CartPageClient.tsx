"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import type { CartItem as CartItemType } from "@/types/cart";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

import { getCartItems, getCartSubtotal, saveCartItems,} from "@/lib/cart";

export default function CartPageClient() {
    
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart data when the component mounts.
  useEffect(() => {
    const loadCart = () => {
      setCartItems(getCartItems());
      setIsLoaded(true);
    };

    loadCart();

    // Listen for cart changes from other components.
    window.addEventListener(
      "stiltra-cart-updated",
      loadCart
    );

    // Listen for changes from other browser tabs.
    window.addEventListener("storage", loadCart);

    return () => {
      window.removeEventListener(
        "stiltra-cart-updated",
        loadCart
      );

      window.removeEventListener("storage", loadCart);
    };
  }, []);

  // Update product quantity.
  const handleQuantityChange = useCallback(
    (
      productId: string,
      size: string,
      color: string,
      quantity: number
    ) => {
      if (quantity < 1) return;

      const updatedItems = cartItems.map((item) => {
        if (
          item.productId === productId &&
          item.size === size &&
          item.color === color
        ) {
          return { ...item, quantity };
        }

        return item;
      });

      setCartItems(updatedItems);
      saveCartItems(updatedItems);
    },
    [cartItems]
  );

  // Remove product from cart.
  const handleRemove = useCallback(
    (productId: string, size: string, color: string) => {
      const updatedItems = cartItems.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.size === size &&
            item.color === color
          )
      );

      setCartItems(updatedItems);
      saveCartItems(updatedItems);
    },
    [cartItems]
  );

  // Loading state.
  if (!isLoaded) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm text-gray-500">
          Loading your shopping bag...
        </p>
      </div>
    );
  }

  // Empty cart state.
  if (cartItems.length === 0) {
    return (
      <section className="flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">

        <p className="text-xs uppercase tracking-[0.2em] text-[#967d60]">
          STILTRA
        </p>

        <h1 className="mt-5 text-3xl font-normal sm:text-4xl">
          Your bag is currently empty.
        </h1>

        <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
          Discover contemporary everyday essentials
          designed for comfort, confidence and expression.
        </p>

        <Link
          href="/men"
          className="mt-9 bg-[#111111] px-10 py-4 text-xs font-medium uppercase tracking-widest text-white transition hover:bg-[#383838]"
        >
          Explore Collection
        </Link>

      </section>
    );
  }

  const subtotal = getCartSubtotal(cartItems);

  const itemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">

      {/* Page Heading */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#967d60]">
          STILTRA COLLECTION
        </p>

        <h1 className="mt-3 text-4xl font-normal tracking-tight sm:text-5xl">
          Shopping Bag
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          You have {itemCount} item{itemCount !== 1 ? "s" : ""} in your bag.
        </p>
      </div>

      {/* Cart Layout */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">

        {/* Cart Products */}
        <div>
          <div className="flex items-center justify-between border-b border-[#dedbd5] pb-4">
            <h2 className="text-sm font-medium uppercase tracking-widest">
              Your Items
            </h2>

            <span className="text-xs text-gray-500">
              {itemCount} items
            </span>
          </div>

          <div>
            {cartItems.map((item) => (
              <CartItem
                key={`${item.productId}-${item.size}-${item.color}`}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </div>

          <Link
            href="/men"
            className="mt-8 inline-block text-xs uppercase tracking-widest underline underline-offset-4"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <aside>
          <div className="lg:sticky lg:top-28">
            <CartSummary
              subtotal={subtotal}
              itemCount={itemCount}
            />
          </div>
        </aside>

      </div>
    </section>
  );
}