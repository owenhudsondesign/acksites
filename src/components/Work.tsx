'use client';

import { useEffect, useRef } from 'react';

const projects = [
    {
        name: 'Island Contractor Co.',
        description: 'Service business site with booking integration',
        category: 'Service Business',
        color: '#1a365d',
    },
    {
        name: 'Nantucket Provisions',
        description: 'E-commerce for a local specialty food shop',
        category: 'E-commerce',
        color: '#744210',
    },
    {
        name: 'Harbor Property Management',
        description: 'Portfolio site for vacation rentals',
        category: 'Real Estate',
        color: '#234e52',
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
        <section id="work" ref={sectionRef} className="section-padding bg-[#191919]">
            <div className="container-custom">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="reveal opacity-0 inline-block text-[#ff9433] font-semibold text-sm uppercase tracking-wider mb-4">
                        Our Work
                    </span>
                    <h2 className="reveal opacity-0 animation-delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-2xl mx-auto leading-tight">
                        Websites that work as hard as you do
                    </h2>
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`reveal opacity-0 animation-delay-${(index + 2) * 100} group cursor-pointer`}
                        >
                            <div className="card-hover bg-[#252525] rounded-2xl overflow-hidden h-full">
                                {/* Preview area */}
                                <div
                                    className="aspect-[4/3] relative overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)`,
                                    }}
                                >
                                    {/* Browser mockup */}
                                    <div className="absolute inset-4 top-6 bg-white rounded-lg shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                                        {/* Browser chrome */}
                                        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                                                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                                                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                                            </div>
                                            <div className="flex-1 bg-white rounded-md text-xs text-gray-400 px-3 py-1.5 text-center font-mono">
                                                {project.name.toLowerCase().replace(/\s+/g, '').replace(/&/g, '')}.com
                                            </div>
                                        </div>
                                        {/* Website preview */}
                                        <div
                                            className="h-full p-6"
                                            style={{
                                                background: `linear-gradient(180deg, white 0%, ${project.color}08 100%)`,
                                            }}
                                        >
                                            <div className="w-20 h-2 bg-gray-200 rounded mb-3"></div>
                                            <div className="w-32 h-4 rounded mb-2" style={{ backgroundColor: project.color + '40' }}></div>
                                            <div className="w-full h-2 bg-gray-100 rounded mb-2"></div>
                                            <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
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
                        </div>
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
