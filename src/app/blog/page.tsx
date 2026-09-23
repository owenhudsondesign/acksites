import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
    title: 'Nantucket Small Business Guides | AckSites',
    description:
        'Practical guides on website cost, local SEO, Google Business Profile, photography, and seasonal marketing for Nantucket small businesses, from the island web design studio.',
    alternates: { canonical: 'https://www.acksites.com/blog' },
    openGraph: {
        title: 'Nantucket Small Business Guides | AckSites',
        description: 'Straight answers on websites and getting found on Google, written for Nantucket business owners.',
        url: 'https://www.acksites.com/blog',
        type: 'website',
    },
};

export default function BlogIndex() {
    const posts = getAllPosts();
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': 'https://www.acksites.com/blog#blog',
        url: 'https://www.acksites.com/blog',
        name: 'AckSites Guides',
        description: metadata.description,
        publisher: { '@type': 'Organization', name: 'AckSites', url: 'https://www.acksites.com' },
        blogPost: posts.map((p) => ({ '@id': `https://www.acksites.com/blog/${p.slug}#article` })),
    };

    return (
        <>
            <Header solid />
            <main className="bg-white pt-28 pb-24 lg:pt-36">
                <div className="container-custom">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#ff9433]">
                            Guides
                        </span>
                        <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#191919] md:text-5xl">
                            Straight answers for Nantucket business owners
                        </h1>
                        <p className="mt-5 text-lg text-[#4d4d4d]">
                            Websites, pricing, Google, photography, and the off-season, written by someone who grew up here and
                            builds this stuff for a living.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            </main>
            <Footer />
        </>
    );
}
