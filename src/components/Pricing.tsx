'use client';

import { useEffect, useRef } from 'react';

const tiers = [
    {
        name: 'Standard Site',
        price: '$2,000',
        description: 'A custom, design-led site for Nantucket businesses.',
        features: [
            'Custom designed, not templated',
            'Up to 7 pages, responsive',
            'Local search setup and structured data',
            'Contact form integration',
            '3 rounds of revisions',
            'You own the files',
        ],
        cta: 'Start a Project',
        popular: false,
    },
    {
        name: 'Site + Photography',
        price: '$3,200',
        description: 'The Standard Site with a half-day shoot, so nothing on it is stock.',
        features: [
            'Everything in Standard',
            'Half-day on-location shoot',
            'Edited images for site, Google, and social',
            'Full usage rights',
        ],
        cta: 'Start a Project',
        popular: true,
    },
    {
        name: 'Booking or Menu Site',
        price: '$4,500+',
        description: 'For restaurants, rentals, charters, and anyone who takes bookings online.',
        features: [
            'Everything in Site + Photography',
            'Reservations, rental calendar, or live menu',
            'Deposit and payment flow where needed',
            'Seasonal hours wired to Google',
            'Typically $4,500 to $6,500',
        ],
        cta: 'Start a Project',
        highlighted: true,
        popular: false,
    },
    {
        name: 'Rebrand + Site',
        price: '$7,500+',
        description: 'A fresh logo and simple identity delivered with the site. The top of what AckSites does.',
        features: [
            'Logo and core identity',
            'Everything in Booking or Menu Site',
            'Signage and print templates',
            'Typically $7,500 to $10,000',
        ],
        cta: 'Start a Project',
        popular: false,
    },
];

const carePlans = [
    {
        name: 'Care',
        price: '$50',
        period: '/month',
        description: 'Keep your site healthy, current, and looked after.',
        features: [
            'Reliable cloud hosting and SSL',
            'Domain management',
            '2 content edits per month',
            'Quarterly site review',
            'A real human who picks up',
        ],
    },
    {
        name: 'Seasonal',
        price: '$150',
        period: '/month',
        description: 'For businesses whose hours, menus, and offers change with the island.',
        features: [
            'Everything in Care',
            'Seasonal hours and menu changes',
            'Google Business Profile management',
            'Monthly photo upload to Google',
        ],
        highlighted: true,
    },
    {
        name: 'Growth',
        price: '$400',
        period: '/month',
        description: 'A campaign a month and a quarterly look at what is working.',
        features: [
            'Everything in Seasonal',
            'One campaign a month, produced on-brand',
            'Quarterly search and traffic report',
            'Priority turnaround',
        ],
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

                {/* Site tiers */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <PricingCard key={tier.name} tier={tier} index={index} />
                    ))}
                </div>

                {/* Care plans */}
                <div className="text-center mt-20 mb-10">
                    <h3 className="reveal opacity-0 text-2xl md:text-3xl font-semibold text-[#191919]">
                        Care plans
                    </h3>
                    <p className="reveal opacity-0 animation-delay-100 text-[#4d4d4d] mt-3 max-w-xl mx-auto">
                        Hosting, updates, and someone who answers. Pick the level that matches how much your business changes through the year.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {carePlans.map((tier, index) => (
                        <PricingCard key={tier.name} tier={tier} index={index} />
                    ))}
                </div>

                {/* Studio referral */}
                <div className="reveal opacity-0 text-center mt-12 lg:mt-16 p-6 bg-[#faf9f7] rounded-2xl max-w-2xl mx-auto border border-gray-100">
                    <p className="text-[#191919] font-semibold mb-1">
                        Need brand strategy, product design, or something bigger?
                    </p>
                    <p className="text-[#4d4d4d] text-sm">
                        That is the other half of what Owen does. Brand identity, product and 3D, and flagship sites for larger projects run through{' '}
                        <a href="https://www.owenhudsondesign.com" target="_blank" rel="noopener noreferrer" className="text-[#ff9433] font-medium hover:underline">
                            his design office
                        </a>
                        .
                    </p>
                </div>

                {/* Bottom note */}
                <p className="reveal opacity-0 text-center text-[#717171] text-sm mt-6">
                    Site prices are one-time. Care plans are monthly and can be cancelled any time. Not sure which fits?{' '}
                    <a href="#contact" className="text-[#ff9433] font-medium hover:underline">
                        Let&apos;s talk
                    </a>
                </p>
            </div>
        </section>
    );
}

type Tier = {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    cta?: string;
    highlighted?: boolean;
    popular?: boolean;
};

function PricingCard({ tier, index }: { tier: Tier; index: number }) {
    return (
        <div className={`reveal opacity-0 animation-delay-${Math.min(index + 2, 5) * 100} relative`}>
            <div
                className={`card-hover h-full rounded-2xl p-7 ${tier.highlighted
                    ? 'bg-[#191919] text-white ring-4 ring-[#ff9433]'
                    : 'bg-[#faf9f7] border border-gray-100'
                    }`}
            >
                {tier.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff9433] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                        Most Popular
                    </span>
                )}
                <div className="mb-6">
                    <h3 className={`text-xl font-semibold mb-2 ${tier.highlighted ? 'text-white' : 'text-[#191919]'}`}>
                        {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-bold ${tier.highlighted ? 'text-[#ff9433]' : 'text-[#191919]'}`}>
                            {tier.price}
                        </span>
                        {tier.period && (
                            <span className={tier.highlighted ? 'text-gray-400' : 'text-[#4d4d4d]'}>{tier.period}</span>
                        )}
                    </div>
                    <p className={`text-sm mt-3 ${tier.highlighted ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
                        {tier.description}
                    </p>
                </div>
                <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                        <li
                            key={feature}
                            className={`flex items-start gap-3 text-sm ${tier.highlighted ? 'text-gray-200' : 'text-[#4d4d4d]'}`}
                        >
                            <svg className="w-5 h-5 flex-shrink-0 text-[#ff9433]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
                <a
                    href="#contact"
                    className={`block text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${tier.highlighted
                        ? 'bg-[#ff9433] text-white hover:bg-[#e67d1a]'
                        : 'bg-[#191919] text-white hover:bg-[#333]'
                        }`}
                >
                    {tier.cta ?? 'Start a Project'}
                </a>
            </div>
        </div>
    );
}
