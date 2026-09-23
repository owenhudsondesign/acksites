import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');
const REQUIRED = ['title', 'slug', 'description', 'date', 'cover', 'cover_alt', 'category', 'lede'] as const;

export type Post = {
    title: string;
    slug: string;
    description: string;
    date: string;
    cover: string;
    coverAlt: string;
    category: string;
    lede: string;
    keywords: string[];
    order: number;
    html: string;
};

function toIsoDate(value: unknown): string {
    const d = value instanceof Date ? value : new Date(String(value));
    if (Number.isNaN(d.getTime())) throw new Error(`Invalid date: ${String(value)}`);
    return d.toISOString().slice(0, 10);
}

function readPost(file: string): Post {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    for (const key of REQUIRED) {
        if (!data[key]) throw new Error(`${file}: missing front matter key "${key}"`);
    }
    if (!/^[a-z0-9-]+$/.test(String(data.slug))) throw new Error(`${file}: bad slug`);
    const html = marked.parse(content, { async: false }) as string;
    return {
        title: String(data.title),
        slug: String(data.slug),
        description: String(data.description),
        date: toIsoDate(data.date),
        cover: String(data.cover),
        coverAlt: String(data.cover_alt),
        category: String(data.category),
        lede: String(data.lede),
        keywords: String(data.keywords ?? '').split(',').map((k) => k.trim()).filter(Boolean),
        order: Number(data.order ?? 100),
        html,
    };
}

export function getAllPosts(): Post[] {
    if (!fs.existsSync(BLOG_DIR)) return [];
    return fs
        .readdirSync(BLOG_DIR)
        .filter((f) => f.endsWith('.md'))
        .map(readPost)
        .sort((a, b) => b.date.localeCompare(a.date) || a.order - b.order || a.slug.localeCompare(b.slug));
}

export function getPost(slug: string): Post | undefined {
    return getAllPosts().find((p) => p.slug === slug);
}

export function relatedPosts(post: Post, all: Post[]): Post[] {
    const same = all.filter((p) => p.slug !== post.slug && p.category === post.category);
    const others = all.filter((p) => p.slug !== post.slug && p.category !== post.category);
    return [...same, ...others].slice(0, 3);
}

export function formatDate(iso: string): string {
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    });
}
