'use client';

import { useEffect, useRef } from 'react';

export default function About() {
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
        <section id="about" ref={sectionRef} className="section-padding bg-white">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="reveal opacity-0 inline-block text-[#ff9433] font-semibold text-sm uppercase tracking-wider mb-4">
                        About
                    </span>
                    <h2 className="reveal opacity-0 animation-delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191919] leading-tight mb-8">
                        A local web and logo designer
                    </h2>
                    <p className="reveal opacity-0 animation-delay-200 text-lg md:text-xl text-gray-600 leading-relaxed">
                        I'm Owen, a designer from Nantucket. I grew up here, know the island, and understand what local businesses actually need online: something clean, fast, and easy to update. No bloated agency fees, no six-week timelines. Just good work at a fair price from someone you can actually reach.
                    </p>
                </div>
            </div>
        </section>
    );
}
