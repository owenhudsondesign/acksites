'use client';

import { useEffect, useRef } from 'react';

const benefits = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        text: "We're available for in-person meetings",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        text: 'We know the local market and competition',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        text: 'We build for tourist season surges and year-round residents',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        text: "We're here for the long term, not a one-off project",
    },
];

export default function LocalSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

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

        const elements = sectionRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-[#faf9f7] relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#ff9433]/5 to-transparent"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left content */}
                    <div>
                        <span className="reveal opacity-0 inline-block text-[#ff9433] font-semibold text-sm uppercase tracking-wider mb-4">
                            Why Local Matters
                        </span>
                        <h2 className="reveal opacity-0 animation-delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191919] leading-tight mb-6">
                            Nantucket-Based.{' '}
                            <span className="gradient-text">Island-Focused.</span>
                        </h2>
                        <p className="reveal opacity-0 animation-delay-200 text-lg text-[#4d4d4d] leading-relaxed mb-8">
                            We&apos;re not a mainland agency that&apos;s never set foot on the island.
                            AckSites is based in Nantucket — we understand seasonal rhythms,
                            local customers, and what island businesses actually need.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className={`reveal opacity-0 animation-delay-${(index + 3) * 100} flex items-start gap-4`}
                                >
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#ff9433] shadow-sm flex-shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <span className="text-[#4d4d4d] pt-2">{benefit.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Visual */}
                    <div className="reveal opacity-0 animation-delay-200 relative">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                            {/* Stats/highlights */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-[#faf9f7] rounded-2xl">
                                    <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">ACK</div>
                                    <p className="text-sm text-[#4d4d4d]">Airport Code</p>
                                </div>
                                <div className="text-center p-6 bg-[#faf9f7] rounded-2xl">
                                    <div className="text-4xl lg:text-5xl font-bold text-[#191919] mb-2">24h</div>
                                    <p className="text-sm text-[#4d4d4d]">Response Time</p>
                                </div>
                                <div className="text-center p-6 bg-[#faf9f7] rounded-2xl">
                                    <div className="text-4xl lg:text-5xl font-bold text-[#191919] mb-2">100%</div>
                                    <p className="text-sm text-[#4d4d4d]">Local Expertise</p>
                                </div>
                                <div className="text-center p-6 bg-[#faf9f7] rounded-2xl">
                                    <div className="text-4xl lg:text-5xl font-bold text-[#191919] mb-2">∞</div>
                                    <p className="text-sm text-[#4d4d4d]">Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
