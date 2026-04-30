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
                            I&apos;m Owen Hudson — a designer from Nantucket. I grew up here, my family&apos;s been in business on this island for decades, and I know what local businesses actually need — good design and someone you can reach when something needs fixing. No bloated agency fees, no off-island templates, no six-week timelines. Good work, fair pricing, from a neighbor.
                        </p>
                    </div>

                    {/* Browser mockup */}
                    <div className="reveal opacity-0 animation-delay-200">
                        <a
                            href="https://owenhudsondesign.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block max-w-sm mx-auto opacity-90 hover:opacity-100 transition-opacity"
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                {/* Browser chrome */}
                                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                                    </div>
                                    <div className="flex-1 bg-white rounded-md text-[10px] text-gray-400 px-2 py-1 text-center font-mono">
                                        owenhudsondesign.com
                                    </div>
                                </div>
                                {/* Website preview screenshot */}
                                <div className="relative aspect-[16/9]">
                                    <Image
                                        src="/images/ohd-portfolio.png"
                                        alt="Owen Hudson Design portfolio website"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>
                        </a>
                        <p className="text-center text-sm text-gray-500 mt-4">
                            More of my design work at{' '}
                            <a
                                href="https://owenhudsondesign.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ff9433] hover:underline"
                            >
                                owenhudsondesign.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
