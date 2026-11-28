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

                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}