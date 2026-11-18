import Link from 'next/link';

import { Search, Heart, ShoppingBag } from 'lucide-react';

import Container from '@/components/ui/Container';
import MobileMenu from "./MobileMenu";
import { siteConfig } from '@/config/site';

export default function Navbar() {
    return (

        <header className='sticky top-0 z-50 bg-[var-(--color-background)]'>

        {/* Announcement Bar */}

        <div className='bg-[var-(--color-primary)] py-2 text-center text-xs text-white'>
            CONTEMPORARY EVERYDAY WEAR - STYLE IN EVERY FORM.
        </div>

        {/* Main Navigation */}
        
        <div className='border-b border-[var-(--color-border)]'>

        <Container>

            <div className='flex h-20 items-center justify-between'>

                {/* Mobile Menu */}

                <div className='flex items-center lg:hidden'>
                    <MobileMenu />
                </div>

                {/* Brand Logo */}
                
                <Link 
                    href= '/'
                    className='text-2xl font-semibold tracking-[0.12em]'
                >
                    {siteConfig.name}
                </Link>

                {/* Desktop Navigation */}

                <nav className='hidden items-center gap-8 lg:flex'>

                    {siteConfig.navigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className='text-sm font-medium transition-colors hover:text-[var(--color-accent)]'
                        >
                            {item.label}
                        </Link>
                    ))}

                </nav>

                {/* Navigation Actions */}

                <div className='flex items-center gap-4'>

                    <Link
                        href='/search'
                        aria-label='Search products'
                        className='transition-colors hover:text-[var(--color-accent)]'
                    >
                        <Search size={20} strokeWidth={1.6} />
                    </Link>

                    <Link
                        href='/wishlist'
                        aria-label='Wishlist'
                        className='transition-colors hover:text-[var(--color-accent)]'
                    >
                        <Heart size={20} strokeWidth={1.6} />
                    </Link>

                    <Link
                        href='/cart'
                        aria-label='Shopping bag'
                        className='transition-colors hover:text-[var(--color-accent)]'
                    >
                        <ShoppingBag size={20} strokeWidth={1.6} />
                    </Link>

                </div>

            </div>

        </Container>

        </div>

        </header>

    );
}