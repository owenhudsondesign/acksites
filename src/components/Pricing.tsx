'use client';

import { useEffect, useRef } from 'react';

const tiers = [
    {
        name: 'Starter Site',
        price: 'from $500',
        description: 'For new businesses that need a clean, professional web presence.',
        features: [
            '5-page responsive website',
            'Mobile-friendly design',
            'Basic SEO setup',
            'Contact form integration',
            '3 rounds of revisions',
        ],
        cta: 'Get Started',
        popular: false,
    },
    {
        name: 'Custom Site',
        price: 'from $1,500',
        description: 'For established businesses that need more.',
        features: [
            'Custom design & branding',
            'Unlimited pages',
            'SEO optimized',
            'Booking/reservation systems',
            'Optional custom CMS/dashboard',
            'Priority support',
        ],
        cta: 'Get Started',
        popular: true,
    },
    {
        name: 'Hosting & Care',
        price: '$20',
        period: '/month',
        description: 'Keep your site online and up to date.',
        features: [
            'Reliable cloud hosting',
            '99.9% uptime guarantee',
            '3 updates/revisions per month',
        ],
        cta: 'Add to Plan',
        popular: false,
    },
];

export default function Pricing() {
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
        <section ref={sectionRef} className="section-padding bg-white">
            <div className="container-custom">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="reveal opacity-0 inline-block text-[#ff9433] font-semibold text-sm uppercase tracking-wider mb-4">
                        Pricing
                    </span>
                    <h2 className="reveal opacity-0 animation-delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191919] max-w-2xl mx-auto leading-tight mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="reveal opacity-0 animation-delay-200 text-lg text-[#4d4d4d] max-w-xl mx-auto">
                        No hidden fees. No surprises. Just great websites at fair prices.
                    </p>
                </div>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`reveal opacity-0 animation-delay-${(index + 2) * 100} relative`}
                        >
                            <div
                                className={`card-hover h-full rounded-2xl p-8 ${tier.popular
                                    ? 'bg-[#191919] text-white ring-4 ring-[#ff9433]'
                                    : 'bg-[#faf9f7] border border-gray-100'
                                    }`}
                            >
                                {/* Popular badge */}
                                {tier.popular && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff9433] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                                        Most Popular
                                    </span>
                                )}

                                {/* Header */}
                                <div className="mb-6">
                                    <h3
                                        className={`text-xl font-semibold mb-2 ${tier.popular ? 'text-white' : 'text-[#191919]'
                                            }`}
                                    >
                                        {tier.name}
                                    </h3>
                                    <div className="flex items-baseline gap-1">
                                        <span
                                            className={`text-4xl font-bold ${tier.popular ? 'text-[#ff9433]' : 'text-[#191919]'
                                                }`}
                                        >
                                            {tier.price}
                                        </span>
                                        {tier.period && (
                                            <span className={tier.popular ? 'text-gray-400' : 'text-[#4d4d4d]'}>
                                                {tier.period}
                                            </span>
                                        )}
                                    </div>
                                    <p
                                        className={`text-sm mt-3 ${tier.popular ? 'text-gray-300' : 'text-[#4d4d4d]'
                                            }`}
                                    >
                                        {tier.description}
                                    </p>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className={`flex items-center gap-3 text-sm ${tier.popular ? 'text-gray-200' : 'text-[#4d4d4d]'
                                                }`}
                                        >
                                            <svg
                                                className={`w-5 h-5 flex-shrink-0 ${tier.popular ? 'text-[#ff9433]' : 'text-[#ff9433]'
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2.5}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="#contact"
                                    className={`block text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${tier.popular
                                        ? 'bg-[#ff9433] text-white hover:bg-[#e67d1a]'
                                        : 'bg-[#191919] text-white hover:bg-[#333]'
                                        }`}
                                >
                                    {tier.cta}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <p className="reveal opacity-0 text-center text-[#717171] text-sm mt-12">
                    All prices are one-time unless noted. Looking for something custom?{' '}
                    <a href="#contact" className="text-[#ff9433] font-medium hover:underline">
                        Let&apos;s talk
                    </a>
                </p>
            </div>
        </section>
    );
}
