import type { MetadataRoute } from "next";
import { clinicConfig } from "@/config/clinic";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = clinicConfig.siteUrl || "https://example.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
