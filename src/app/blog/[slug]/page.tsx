import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  return {
    title: post ? post.title : "News",
    description: post ? post.excerpt : "Clinic news and pet care guidance.",
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    return (
      <div className="mx-auto w-full max-w-4xl px-6 py-20">
        <p className="text-sm text-black">Post not found.</p>
        <Link
          href="/blog"
          className="mt-4 inline-flex text-sm font-semibold text-black"
        >
          Back to news
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-lightBlue">
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-white/60 bg-white p-8 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            {post.date} - {post.readTime}
          </p>
          <h1 className="mt-4 font-display text-4xl text-black">
            {post.title}
          </h1>
          <p className="mt-4 text-black">{post.excerpt}</p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/60 shadow-soft">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={960}
              height={520}
              className="h-80 w-full object-cover"
            />
          </div>
          <div className="mt-8 space-y-4 text-black">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-10 inline-flex rounded-full border border-primaryBlue/30 px-5 py-2 text-sm font-semibold text-black transition hover:border-primaryBlue hover:bg-primaryBlue/5"
          >
            Back to news
          </Link>
        </div>
      </section>
    </div>
  );
}
