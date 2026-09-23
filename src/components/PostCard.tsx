import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/lib/blog';
import { formatDate } from '@/lib/blog';

export default function PostCard({ post }: { post: Post }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-[#faf9f7]">
                <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#ff9433]">
                {post.category} · {formatDate(post.date)}
            </p>
            <h3 className="mt-1 text-xl font-semibold leading-snug text-[#191919] group-hover:underline">
                {post.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4d4d4d]">{post.description}</p>
        </Link>
    );
}
