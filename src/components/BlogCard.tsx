import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-2xl border border-primaryBlue/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
    >
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={640}
          height={420}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-3 h-1 w-10 rounded-full bg-primaryBlue" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
          {post.date}
        </p>
        <h3 className="mt-3 text-lg font-semibold text-black">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-black">{post.excerpt}</p>
        <p className="mt-4 text-xs font-semibold text-black">
          {post.readTime}
        </p>
      </div>
    </Link>
  );
}
