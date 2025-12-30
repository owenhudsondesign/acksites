'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text content */}
                    <div className="text-center lg:text-left">
                        <span className="reveal opacity-0 inline-block text-[#ff9433] font-semibold text-sm uppercase tracking-wider mb-4">
                            About
                        </span>
                        <h2 className="reveal opacity-0 animation-delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#191919] leading-tight mb-8">
                            A local web and logo designer
                        </h2>
                        <p className="reveal opacity-0 animation-delay-200 text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                            I'm Owen, a designer from Nantucket. I grew up here, know the island, and understand what local businesses actually need online: something clean, fast, and easy to update. No bloated agency fees, no six-week timelines. Just good work at a fair price from someone you can actually reach.
                        </p>
                        <a
                            href="https://owenhudson.design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal opacity-0 animation-delay-300 inline-flex items-center gap-2 text-[#ff9433] font-semibold hover:underline"
                        >
                            View my full portfolio
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Browser mockup */}
                    <a
                        href="https://owenhudson.design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reveal opacity-0 animation-delay-200 group"
                    >
                        <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                            {/* Browser chrome */}
                            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                                </div>
                                <div className="flex-1 bg-white rounded-md text-xs text-gray-400 px-3 py-1.5 text-center font-mono">
                                    owenhudson.design
                                </div>
                            </div>
                            {/* Website preview screenshot */}
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src="/images/ohd-mockup.png"
                                    alt="Owen Hudson Design portfolio website"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
