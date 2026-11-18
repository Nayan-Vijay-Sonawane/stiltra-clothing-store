"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className='lg:hidden'>

            {/* Menu Toggle */}

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className='flex items-center justify-center'
            >
                {isOpen ? (
                    <X size={23} strokeWidth={1.6} />
                ) : (
                    <Menu size={23} strokeWidth={1.6} />
                )}
            </button>

            {/* Mobile Navigation Panel */}

            {isOpen && (

                <div 
                    id="mobile-navigation"
                    className='absolute left-0 top-full w-full border-b border-[var(--color-border)] bg-[var(--color-background)] shadow-lg'
                >

                    <nav className='px-6 py-6'>

                        <p className='mb-5 text-xs font-medium tracking-widest text-[var(--color-secondary)]'>
                            EXPLORE STILTRA
                        </p>

                        <div className='flex flex-col'>

                            {siteConfig.navigation.map((item) => (

                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className='flex items-center justify-between border-b border-[var(--color-border)] px-4 text-sm font-medium'
                                >
                                    {item.label}

                                    <ChevronRight size={17} strokeWidth={1.5} />

                                </Link>
                            ))}

                        </div>

                        <div className='mt-6 space-y-3'>

                            <Link
                                href="/account/login"
                                onClick={() => setIsOpen(false)}
                                className='block text-sm text-[var(--color-secondary)]'
                            >
                                My Account
                            </Link>

                            <p className='text-xs text-[var(--color-secondary)]'>
                                {siteConfig.tagline}
                            </p>

                        </div>

                    </nav>

                </div>

            )}

        </div>
    );
}