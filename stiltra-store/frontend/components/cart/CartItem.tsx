"use client";

import Image from 'next/image';
import type { CartItem as CartItemType } from '@/types/cart';
import { formatPrice } from "@/lib/cart";

interface CartItemProps {
    item: CartItemType;
    onQuantityChange: (
        productId: string,
        size: string,
        color: string,
        quantity: number
    ) => void;
    onRemove: (
        productId: string,
        size: string,
        color: string
    ) => void;
}

export default function CartItem({
    item,
    onQuantityChange,
    onRemove
}: CartItemProps) {

    return (

        <div className='flex gap-5 border-b border-[#E8E5DF] py-7'>

            {/* Product Image */}

            <div className='relative h-36 w-28 shrink-0 bg-[#EEECE7] sm:h-44 sm:w-36'>

                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes='1440px'
                        className='object-cover'
                    />
                ) : (
                    <div className='flex h-full items-center justify-center text-xs text-gray-500'>
                        STILTRA
                    </div>
                )}
                
            </div>

            {/* Product Information */}

            <div className='flex flex-1 flex-col justify-between'>

                <div>
                    <div className='flex justify-between gap-3'>

                        <div>
                            <h3 className='text-sm font-medium bg-[#171717] sm:text-base'>
                                {item.name}
                            </h3>

                            <p className='mt-2 text-xs text-gray-500'>
                                Colour: {item.color}
                            </p>

                            <p className='mt-1 text-xs text-gray-500'>
                                Size: {item.size}
                            </p>

                        </div>

                        <p className='whitespace-nowrap text-sm font-medium'>
                            {formatPrice(item.price * item.quantity)}
                        </p>

                    </div>
                </div>

                <div className='mt-5 flex flex-wrap items-center justify-between gap-4'>

                    {/* Quantity Controls */}

                    <div className='flex items-center border border-[#DEDBD5]'>

                        <button 
                            type="button"
                            aria-label='Decrease quantity'
                            disabled={item.quantity <= 1}
                            onClick={() => 
                                onQuantityChange(
                                    item.productId,
                                    item.size,
                                    item.color,
                                    item.quantity - 1
                                )
                            }

                            className='px-3 py-2 text-sm disabled:opacity-30'
                        >
                            -
                        </button>

                        <span className='min-w-8 text-center text-sm'>
                            {item.quantity}
                        </span>

                        <button 
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => 
                                onQuantityChange(
                                    item.productId,
                                    item.size,
                                    item.color,
                                    item.quantity + 1
                                )
                            }
                            className='px-3 py-2 text-sm'
                        >
                            +
                        </button>

                    </div>

                    {/* Remove Product */}

                    <button 
                        type="button"
                        onClick={() => 
                            onRemove(
                                item.productId,
                                item.size,
                                item.color
                            )
                        }

                        className='text-xs text-gray-500 underline underline-offset-4 hover:text-black'
                    >
                        Remove
                    </button>

                </div>

            </div>

        </div>

    );
}