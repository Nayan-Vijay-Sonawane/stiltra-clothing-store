"use client";

import { useMemo, useState } from 'react';

import ProductCard from './ProductCard';
import type { Product } from '@/types/product';

interface ProductListingProps {
    title: string;
    description: string;
    products: Product[];
}

export default function ProductListing ({
    title,
    description,
    products,
}: ProductListingProps) {

    const [ selectedCategory, setSelectedCategory ] = useState("All");

    const [ sortBy, setSortBy ] = useState("featured");

    const categories = [
        "All",
        ...Array.from(
            new Set(products.map((product) => product.category))
        ),
    ];

    const filterProducts = useMemo(() => {
        let result = [...products];

        // Category filtering
        if(selectedCategory != "All") {
            result = result.filter(
                (product) => 
                    product.category === selectedCategory
            );
        }

        // Sorting
        if(sortBy === "price-low") {
            result.sort((a, b) => a.price - b.price);
        }

        if(sortBy === "price-high") {
            result.sort((a, b) => b.price - a.price);
        }

        if(sortBy === "newest") {
            result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        }

        return result;

    }, [products, selectedCategory, sortBy]);

    return (
        
        <main className='min-h-screen py-12'>

            <div className='max-auto max-w-[1440px] px-4 sm:px-6 lg:px-10'>

                {/* Page Heading */}

                <div className='mb-10'>

                    <p className='text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]'>
                        STILITRA COLLECTION
                    </p>

                    <h1 className='mt-3 text-4xl md:text-5xl'>
                        {title}
                    </h1>

                    <p className='mt-3 text-sm text-[var(--color-secondary)]'>
                        {description}
                    </p>

                </div>

                {/* Filtering and Sorting */}

                <div className='mb-8 flex flex-col gap-4 border-b border-[var(--color-border)] pb-5 sm:flex-row sm:items-center sm:justify-between'>

                    <div className='flex flex-wrap gap-2'>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`border px-4 py-2 text-xs transition-colors ${
                                    selectedCategory === category 
                                    ? "border-black bg-black text-white" 
                                    : "border-[var(--color-border)] hover:border-black"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        aria-label="Sort products"
                        className='border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm'
                    >
                        <option value="featured">Featured</option>
                        <option value="newest">Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>

                </div>

                {/* Product Count */}

                <p className="mb-5 text-xs text-[var(--color-secondary)]">
                    Showing {filterProducts.length} products
                </p>

                {/* Product grid */}

                {filterProducts.length > 0 ? (
                    <div className='grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6'>

                        {filterProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}

                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <h2 className="text-xl">
                        No products found
                        </h2>

                        <p className="mt-2 text-sm text-[var(--color-secondary)]">
                        Try selecting another category.
                        </p>
                    </div>
                    
                )}

            </div>

        </main>

    );
}