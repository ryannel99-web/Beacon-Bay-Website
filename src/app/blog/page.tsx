import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "News",
  description:
    "Clinic news and pet care updates from Beacon Bay Veterinary Clinic.",
};

export default function BlogPage() {
  return (
    <div className="bg-lightBlue">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            News
          </p>
          <h1 className="font-display text-4xl text-black">
            Clinic updates and pet care tips
          </h1>
          <p className="mt-4 text-black">
            Stay up to date with seasonal guidance, wellness tips, and clinic
            updates.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
