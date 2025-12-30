'use client';

import { useEffect, useRef } from 'react';

const services = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Website Design',
        description:
            'Clean, fast websites built for how your customers actually find you. Perfect for restaurants, shops, contractors, and service businesses.',
        highlight: null,
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        title: 'Website Redesigns',
        description:
            "Already have a site that's not working? We'll rebuild it right: faster, mobile-friendly, and built to convert.",
        highlight: null,
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        title: 'Hosting & Support',
        description:
            "Reliable hosting, security updates, and ongoing support. We keep things running so you don't have to think about it.",
        highlight: null,
    },
];

export default function Services() {
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
        <section id="services" ref={sectionRef} className="section-padding bg-white">
            <div className="container-custom">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="reveal opacity-0 inline-block text-[#ff9433] font-semibold text-sm uppercase tracking-wider mb-4">
                        What We Do
                    </span>
                    <h2 className="reveal opacity-0 animation-delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191919] max-w-2xl mx-auto leading-tight">
                        Everything you need to succeed online
                    </h2>
                </div>

                {/* Services grid */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`reveal opacity-0 animation-delay-${(index + 2) * 100} relative group`}
                        >
                            <div className="card-hover bg-[#faf9f7] rounded-2xl p-8 lg:p-10 h-full border border-transparent hover:border-[#ff9433]/20">
                                {/* Highlight badge */}
                                {service.highlight && (
                                    <span className="absolute -top-3 left-8 bg-[#ff9433] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {service.highlight}
                                    </span>
                                )}

                                {/* Icon */}
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#ff9433] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-[#191919] mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-[#4d4d4d] leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
