import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import faq from '@/content/faq.json';

type Item = { q: string; a: string };
const items = faq as Item[];

export const metadata: Metadata = {
    title: 'FAQ | AckSites, Nantucket Web Design',
    description:
        'Answers to the questions Nantucket business owners ask about websites, logos, photography, timelines, hosting, and getting started with AckSites.',
    alternates: { canonical: 'https://www.acksites.com/faq' },
};

export default function FaqPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((i) => ({
            '@type': 'Question',
            name: i.q,
            acceptedAnswer: { '@type': 'Answer', text: i.a },
        })),
    };

    return (
        <>
            <Header solid />
            <main className="bg-white pt-28 pb-24 lg:pt-36">
                <div className="container-custom">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#ff9433]">FAQ</span>
                        <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#191919] md:text-5xl">
                            Questions island businesses ask
                        </h1>
                        <p className="mt-5 text-lg text-[#4d4d4d]">
                            If yours is not here, <a href="/#contact" className="text-[#ff9433] hover:underline">ask directly</a>.
                        </p>
                    </div>
                    <div className="mx-auto mt-14 max-w-3xl divide-y divide-gray-200">
                        {items.map((item) => (
                            <details key={item.q} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[#191919]">
                                    {item.q}
                                    <span className="text-2xl leading-none text-[#ff9433] transition-transform group-open:rotate-45" aria-hidden="true">
                                        +
                                    </span>
                                </summary>
                                <p className="mt-3 leading-relaxed text-[#4d4d4d]">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            </main>
            <Footer />
        </>
    );
}
