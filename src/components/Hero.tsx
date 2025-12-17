'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = heroRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={heroRef}
            className="min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/orange-background.png"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
                {/* Sky texture overlay */}
                <Image
                    src="/images/sky-texture.png"
                    alt=""
                    fill
                    className="object-cover opacity-50 mix-blend-screen"
                />
            </div>

            {/* Nantucket icon - large decorative element */}
            <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[-5%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                <Image
                    src="/nantucket-icon-white.svg"
                    alt=""
                    width={1200}
                    height={780}
                    className="h-auto w-[140vw] md:w-[65vw] max-w-none"
                    aria-hidden="true"
                />
            </div>

            {/* Content */}
            <div className="container-custom pb-24 relative z-10 w-full" style={{ paddingTop: '120px' }}>
                <div className="max-w-5xl">
                    {/* Eyebrow - hidden on mobile since logo is visible */}
                    <div className="reveal opacity-0 hidden md:flex items-center gap-3 mb-8">
                        <span className="w-8 h-[2px] bg-white"></span>
                        <p className="text-sm tracking-[0.15em] uppercase text-white/70 font-medium">
                            Nantucket Web Design
                        </p>
                    </div>

                    {/* Main headline */}
                    <h1 className="reveal opacity-0 animation-delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-8">
                        We build websites
                        <br />
                        for <span className="text-white/90">island businesses</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="reveal opacity-0 animation-delay-200 text-xl md:text-2xl text-white/80 leading-relaxed max-w-xl mb-12">
                        Fast, affordable websites for Nantucket restaurants, shops, contractors, and service providers.
                    </p>

                    {/* CTAs */}
                    <div className="reveal opacity-0 animation-delay-300 flex flex-col sm:flex-row gap-4">
                        <a href="#work" className="inline-flex items-center gap-2 bg-white text-[#191919] px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors">
                            See Our Work
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white hover:text-[#191919] transition-colors">
                            Get in Touch
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="reveal opacity-0 animation-delay-400 mt-12 md:mt-20 pt-8 pb-8 border-t border-white/20">
                        <div className="flex flex-wrap gap-6 md:gap-10 text-white/80 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white"></span>
                                <span>100% Local</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white"></span>
                                <span>48 Hour Turnaround</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white"></span>
                                <span>Ongoing Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
