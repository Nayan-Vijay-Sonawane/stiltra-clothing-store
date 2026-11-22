import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/ui/Container';

const categories = [
    {
        title: "MEN",
        subtitle: "Everyday essentials, elevated.",
        image: "/images/home/men-category.png",
        href: "/men",
    },
    {
        title: "WOMEN",
        subtitle: "Express your everyday style.",
        image: "/images/home/women-category.png",
        href: "/women",
    },
];

export default function CategorySection() {
    return (

        <section className='bg-[#F8F7F4] py-16 sm:py-20'>

            <Container>

                {/* Section Heading */}

                <div className='mb-10 text-center'>

                    <p className='text-xs font-medium tracking-[0.2em] text-[#8B7355]'>
                        FIND YOUR STYLE
                    </p>

                    <h2 className='mt-3 font-[var(--font-heading)] text-4xl sm:text-5xl'>
                        Shop by category
                    </h2>

                </div>

            </Container>

        </section>

    )
}