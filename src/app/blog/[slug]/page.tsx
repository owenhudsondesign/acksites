import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import { formatDate, getAllPosts, getPost, relatedPosts } from '@/lib/blog';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
    return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return {};
    const url = `https://www.acksites.com/blog/${post.slug}`;
    return {
        title: `${post.title} | AckSites`,
        description: post.description,
        alternates: { canonical: url },
        openGraph: {
            title: post.title,
            description: post.description,
            url,
            type: 'article',
            images: [{ url: `https://www.acksites.com${post.cover}`, alt: post.coverAlt }],
        },
    };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();
    const all = getAllPosts();
    const related = relatedPosts(post, all);
    const url = `https://www.acksites.com/blog/${post.slug}`;
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BlogPosting',
                '@id': `${url}#article`,
                mainEntityOfPage: url,
                headline: post.title,
                description: post.description,
                image: `https://www.acksites.com${post.cover}`,
                datePublished: post.date,
                dateModified: post.date,
                keywords: post.keywords,
                articleSection: post.category,
                inLanguage: 'en-US',
                author: { '@type': 'Person', name: 'Owen Hudson', url: 'https://www.owenhudsondesign.com/about' },
                publisher: { '@type': 'Organization', name: 'AckSites', url: 'https://www.acksites.com' },
                isPartOf: { '@id': 'https://www.acksites.com/blog#blog' },
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.acksites.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.acksites.com/blog' },
                    { '@type': 'ListItem', position: 3, name: post.title, item: url },
                ],
            },
        ],
    };

    return (
        <>
            <Header solid />
            <main className="bg-white pt-28 pb-24 lg:pt-36">
                <article className="container-custom">
                    <div className="mx-auto max-w-3xl">
                        <nav aria-label="Breadcrumb" className="text-sm text-[#717171]">
                            <Link href="/" className="hover:text-[#ff9433]">Home</Link> /{' '}
                            <Link href="/blog" className="hover:text-[#ff9433]">Guides</Link> / {post.category}
                        </nav>
                        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#ff9433]">
                            <time dateTime={post.date}>{formatDate(post.date)}</time> · By Owen Hudson
                        </p>
                        <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight text-[#191919] md:text-5xl">
                            {post.title}
                        </h1>
                        <p className="mt-6 text-xl leading-relaxed text-[#4d4d4d]">{post.lede}</p>
                    </div>
                    <figure className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl">
                        <Image src={post.cover} alt={post.coverAlt} width={1600} height={900} priority className="h-auto w-full" />
                    </figure>
                    <div
                        className="post-content mx-auto mt-12 max-w-3xl"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                    <aside className="mx-auto mt-16 max-w-3xl rounded-2xl bg-[#191919] p-8 text-center text-white">
                        <h2 className="text-2xl font-semibold">Need a website for your Nantucket business?</h2>
                        <p className="mt-3 text-gray-300">
                            Custom sites from $2,000, care plans from $50 a month, and a designer who actually lives here.
                        </p>
                        <a
                            href="/#contact"
                            className="mt-6 inline-block rounded-full bg-[#ff9433] px-6 py-3 font-semibold text-white hover:bg-[#e67d1a]"
                        >
                            Start a project
                        </a>
                    </aside>
                    <div className="mx-auto mt-10 max-w-3xl text-sm text-[#4d4d4d]">
                        <p>
                            <strong className="text-[#191919]">Owen Hudson</strong> grew up on Nantucket and runs AckSites, the
                            island&apos;s fixed-price website studio. For brand strategy, product design, and larger projects,
                            see his design office at{' '}
                            <a href="https://www.owenhudsondesign.com" className="text-[#ff9433] hover:underline">
                                owenhudsondesign.com
                            </a>
                            .
                        </p>
                    </div>
                </article>
                {related.length > 0 && (
                    <section className="container-custom mt-24">
                        <h2 className="text-2xl font-semibold text-[#191919]">More guides</h2>
                        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((p) => (
                                <PostCard key={p.slug} post={p} />
                            ))}
                        </div>
                    </section>
                )}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            </main>
            <Footer />
        </>
    );
}
