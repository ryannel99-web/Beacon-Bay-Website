import type { MetadataRoute } from "next";
import { clinicConfig } from "@/config/clinic";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = clinicConfig.siteUrl || "https://example.com";
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/book-appointment",
    "/contact",
    "/faqs",
    "/blog",
    "/resources",
    "/shop",
    "/testimonials",
    "/locations",
    "/privacy",
    "/popia",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
