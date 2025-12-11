'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo - switches between white and color based on scroll */}
                <a href="#" className="flex items-center transition-transform duration-300 hover:scale-105 relative shrink-0">
                    <Image
                        src="/acksites-logo-white.svg"
                        alt="AckSites"
                        width={140}
                        height={28}
                        priority
                        className={`h-6 md:h-8 w-auto absolute transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <Image
                        src="/acksites-logo.svg"
                        alt="AckSites"
                        width={140}
                        height={28}
                        priority
                        className={`h-6 md:h-8 w-auto transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
                    />
                </a>

                {/* CTA Button - switches style based on scroll */}
                <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm transition-all duration-500 shrink-0 ${isScrolled
                        ? 'bg-[#ff9433] text-white hover:bg-[#e67d1a]'
                        : 'bg-white text-[#191919] hover:bg-white/90'
                    }`}
                >
                    <span className="hidden sm:inline">Start a Project</span>
                    <span className="sm:hidden">Contact</span>
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>
        </header>
    );
}
