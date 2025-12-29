import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0f0f0f] py-12 lg:py-16">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <a href="#" className="transition-opacity hover:opacity-80">
                        <Image
                            src="/acksites-logo.svg"
                            alt="AckSites"
                            width={140}
                            height={28}
                            className="h-7 w-auto brightness-0 invert opacity-90"
                        />
                    </a>

                    {/* Center text */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} AckSites. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                            Based in Nantucket, MA — building for island businesses.
                        </p>
                    </div>

                    {/* Email */}
                    <a
                        href="mailto:hello@acksites.com"
                        className="flex items-center gap-2 text-gray-400 hover:text-[#ff9433] transition-colors text-sm"
                    >
                        <svg
                            className="w-4 h-4"
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
                        hello@acksites.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
