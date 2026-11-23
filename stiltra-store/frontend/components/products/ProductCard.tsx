import Image from 'next/image';
import Link from 'next/link';

import Badge from '@/components/ui/Badge';
import type { Product } from '@/types/product';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({
    product,
}: ProductCardProps) {
    return (

        <article className='group'>
            
            <Link href={`/products/${product.slug}`}>
            
                <div className='relative aspect-[4/3] overflow:hidden bg-[#E8E5DF]'>

                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {product.originalPrice && (
                        <div className='absolute left-3 top-3'>

                            <Badge variant='new'>
                                New
                            </Badge>

                        </div>
                    )}

                    {product.originalPrice && (
                        <div className='absolute right-3 top-3'>

                            <Badge variant='sale'>
                                Sale
                            </Badge>

                        </div>
                    )}

                </div>

                    <div className='pt-3'>
                    
                        <p className='text-xs text-[var(--color-secondary)]'>
                            {product.category}
                        </p>

                        <h3 className='mt-1 text-sm font-medium'>
                            {product.name}
                        </h3>

                        <div className='mt-2 flex items-center gap-2'>

                            <span className='text-sm font-semibold'>
                                ₹{product.price.toLocaleString("en-IN")}
                            </span>

                            {product.originalPrice && (
                                <span className='text-sm text-gray-400 line-through'>
                                    ₹{product.originalPrice.toLocaleString("en-IN")}
                                </span>
                            )}

                        </div>

                    </div>

            </Link>

        </article>

    );
}