'use client';

import { useState, useEffect, useRef } from 'react';

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            business: formData.get('business'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert('Something went wrong. Please email us directly at hello@acksites.com');
            }
        } catch {
            alert('Something went wrong. Please email us directly at hello@acksites.com');
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" ref={sectionRef} className="section-padding bg-[#191919] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#ff9433]/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff9433]/5 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left content */}
                    <div>
                        <span className="reveal opacity-0 inline-block text-[#ff9433] font-semibold text-sm uppercase tracking-wider mb-4">
                            Start a Project
                        </span>
                        <h2 className="reveal opacity-0 animation-delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
                            Ready to build something great?
                        </h2>
                        <p className="reveal opacity-0 animation-delay-200 text-lg text-gray-300 leading-relaxed mb-10">
                            Tell us about your project and we&apos;ll get back to you within one
                            business day. No pressure, no obligation — just a conversation about
                            how we can help.
                        </p>

                        {/* Contact info */}
                        <div className="reveal opacity-0 animation-delay-300 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#252525] rounded-xl flex items-center justify-center text-[#ff9433]">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email us at</p>
                                    <a
                                        href="mailto:hello@acksites.com"
                                        className="text-white font-medium hover:text-[#ff9433] transition-colors"
                                    >
                                        hello@acksites.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#252525] rounded-xl flex items-center justify-center text-[#ff9433]">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Based in</p>
                                    <p className="text-white font-medium">Nantucket, MA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="reveal opacity-0 animation-delay-200">
                        {isSubmitted ? (
                            <div className="bg-[#252525] rounded-2xl p-10 text-center">
                                <div className="w-20 h-20 bg-[#ff9433]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg
                                        className="w-10 h-10 text-[#ff9433]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    Thanks for reaching out!
                                </h3>
                                <p className="text-gray-400">
                                    We&apos;ll get back to you within one business day.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-[#252525] rounded-2xl p-8 lg:p-10">
                                <div className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-300 mb-2"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:border-[#ff9433] focus:ring-2 focus:ring-[#ff9433]/20 transition-all"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-300 mb-2"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:border-[#ff9433] focus:ring-2 focus:ring-[#ff9433]/20 transition-all"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="business"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Business Name{' '}
                                            <span className="text-gray-500 font-normal">(optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="business"
                                            name="business"
                                            className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:border-[#ff9433] focus:ring-2 focus:ring-[#ff9433]/20 transition-all"
                                            placeholder="Your business name"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Tell us about your project
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:border-[#ff9433] focus:ring-2 focus:ring-[#ff9433]/20 transition-all resize-none"
                                            placeholder="What are you looking to build?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn-primary justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
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
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
