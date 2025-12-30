'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const projects = [
    {
        name: 'Triple Eight Distillery',
        description: 'Craft spirits distillery on Nantucket Island',
        category: 'Distillery',
        color: '#8b5c2a',
        image: '/images/triple-eight-distillery.png',
        url: 'https://tripleeightdistillery.com',
        displayUrl: 'tripleeightdistillery.com',
    },
    {
        name: 'Civic Index',
        description: 'AI-powered town meeting search platform',
        category: 'Civic Tech',
        color: '#2563eb',
        image: '/images/nantucket-civic-index.png',
        url: 'https://nantucket.civicindex.io',
        displayUrl: 'civicindex.io',
    },
];

export default function Work() {
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
        <section id="work" ref={sectionRef} className="section-padding relative overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="reveal opacity-0 inline-block text-white font-semibold text-sm uppercase tracking-wider mb-4">
                        Recent Projects
                    </span>
                    <h2 className="reveal opacity-0 animation-delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-2xl mx-auto leading-tight">
                        Websites that bring in customers
                    </h2>
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`reveal opacity-0 animation-delay-${(index + 2) * 100} group cursor-pointer block`}
                        >
                            <div className="card-hover bg-[#252525] rounded-2xl overflow-hidden h-full">
                                {/* Preview area */}
                                <div
                                    className="aspect-[16/10] relative overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)`,
                                    }}
                                >
                                    {/* Browser mockup */}
                                    <div className="absolute inset-4 top-6 bg-white rounded-lg shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                                        {/* Browser chrome */}
                                        <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                                            </div>
                                            <div className="flex-1 bg-white rounded-md text-[10px] text-gray-400 px-2 py-1 text-center font-mono truncate">
                                                {project.displayUrl}
                                            </div>
                                        </div>
                                        {/* Website preview screenshot */}
                                        <div className="relative w-full h-[calc(100%-32px)]">
                                            <Image
                                                src={project.image}
                                                alt={`${project.name} website preview`}
                                                fill
                                                className="object-cover object-top"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Project info */}
                                <div className="p-6 lg:p-8">
                                    <span className="text-[#ff9433] text-xs font-semibold uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-semibold text-white mt-2 mb-2 group-hover:text-[#ff9433] transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="reveal opacity-0 text-center mt-12 lg:mt-16">
                    <a href="#contact" className="btn-primary">
                        Start Your Project
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
            </div>
        </section>
    );
}
