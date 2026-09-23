import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const BASE = 'https://www.acksites.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts().map((p) => ({
        url: `${BASE}/blog/${p.slug}`,
        lastModified: new Date(`${p.date}T12:00:00Z`),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));
    return [
        { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1 },
        { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE}/faq`, changeFrequency: 'monthly', priority: 0.6 },
        ...posts,
    ];
}
