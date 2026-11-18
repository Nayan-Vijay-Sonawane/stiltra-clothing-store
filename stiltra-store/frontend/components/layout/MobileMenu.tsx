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
                    <X size={20} strokeWidth={1.6} />
                ) : (
                    <Menu size={20} strokeWidth={1.6} />
                )}
            </button>

        </div>
    )
}