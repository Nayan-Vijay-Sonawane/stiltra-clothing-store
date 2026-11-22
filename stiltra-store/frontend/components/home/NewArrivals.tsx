import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

const products = [
    {
        id: "p1",
        name: "Everyday Oversized T-Shirt",
        category: "Men",
        price: 799,
        image: "/images/home/product-1.png",
        label: "New Arrival",
        slug: "essential-oversied-tshirt",
    },
    {
        id: "p2",
        name: "Everyday Relaxed Top",
        category: "Women",
        price: 899,
        image: "/images/home/product-2.png",
        label: "New Arrival",
        slug: "everyday-relaxed-top",
    },
    {
        id: "p3",
        name: "Classic Streetwear Hoodie",
        category: "Men",
        price: 1499,
        image: "/images/home/product-3.png",
        label: "Bestseller",
        slug: "classic-streetwear-hoodie",
    },
    {
        id: "p4",
        name: "Minimal Everyday Trousers",
        category: "Women",
        price: 1199,
        image: "/images/home/product-4.png",
        label: "New Arrival",
        slug: "minimal-everyday-trousers",
    },
];


export default function NewArrivals() {
    return (

        <section className='bg-[#F8F7F4] py-16 sm:py-20'>

            <Container>
            
                {/* Heading */}

                <div className='mb-10 text-center'>

                    <p className='text-xs font-medium tracking-[0.2em] text-[#8B7355]'>
                        JUST LANDED
                    </p>

                    <h2 className='mt-3 font-[var(--font-heading)] text-4xl sm:text-5xl'>
                        New arrivals
                    </h2>

                    <p className='mt-3 text-sm text-[#6B6B6B]'>
                        Discover the latest additions to your everyday wardobe.
                    </p>

                </div>

                {/* Product Grid */}

                <div className='grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-6'>

                    {products.map((product) => (
                        
                        <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className='group'
                        >

                            {/* Product Image */}

                            <div className='relative aspect-[3/4] overflow:hidden bg-[#E8E5DF]'>
                            
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes='(max-width: 768px) 50vw, 25vw'
                                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                                />

                                <div className='absolute left-2 top-2 sm:left-3 sm:top-3'>
                                    <Badge variant='new'>
                                        {product.label}
                                    </Badge>
                                </div>
                            
                            </div>

                            {/* Product Details */}

                            <div className='mt-3 space-y-1'>

                                <p className='text-xs text-[#6B6B6B]'>
                                    {product.category}
                                </p>

                                <h3 className='text-sm font-medium'>
                                    {product.name}
                                </h3>

                                <p className='text-sm font-semibold'>
                                    ₹{product.price.toLocaleString("en-IN")}
                                </p>

                            </div>

                        </Link>
                    ))}

                </div>

                {/* View All */}

                <div className='mt-12 text-center'>

                    <Link
                        href="/category/new-arrivals"
                        className='inline-flex border border-[#111111] px-8 py-4 text-xs font-semibold -tracking-widest transition-colors hover:bg-[#111111] hover:text-white'
                    >
                        VIEW ALL PRODUCTS
                    </Link>

                </div>

            </Container>

        </section>

    )
}