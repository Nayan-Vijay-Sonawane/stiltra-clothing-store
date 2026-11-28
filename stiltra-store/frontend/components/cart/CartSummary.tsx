"use client";

import Link from 'next/link';
import { formatPrice } from '@/lib/cart';

interface CartSummaryProps {
    subtotal: number;
    itemCount: number;
}

export default function CartSummary({
    subtotal,
    itemCount,
}: CartSummaryProps) {

    const shipping = 0;
    const total = subtotal + shipping;

    return (

        <div className='bg-[#F3F1ED] p-6 sm:p-8'>

            <h2 className='text-lg font-medium'>
                Order Summary
            </h2>

            <div className='mt-7 space-y-5 border-b border-[#DEDBD5] pb-6'>

                <div className='flex justify-between text-sm'>
                    <span className='text-sm text-gray-600'>
                        Subtotal ({itemCount} items)
                    </span>

                    <span>{formatPrice(subtotal)}</span>
                </div>

                <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>
                        Shipping
                    </span>

                    <span>Free</span>
                </div>

            </div>

            <div className='flex justify-between py-6 text-base font-medium'>
                <span>Total</span>
                <span>{formatPrice(total)}</span>
            </div>

            <p className='mb-5 text-xs text-gray-500'>
                Shipping eligibility and final charges will be confirmed at checkout.
            </p>
            
            <Link
                href="/checkout"
                className='flex w-full items-center justify-center bg-[#111111] px-6 py-4 text-xs font-medium uppercase tracking-widest !text-white transition hover:bg-[#383838]'
            >
                Proceed to Checkout
            </Link>

            <Link
                href="/men"
                className='mt-5 block text-center text-xs uppercase tracking-widest underline underline-offset-4'
            >
                Continue Shopping
            </Link>

        </div>
    );
}