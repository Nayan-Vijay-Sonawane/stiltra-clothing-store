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

            </Container>

        </section>

    )
}