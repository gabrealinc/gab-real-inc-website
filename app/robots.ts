import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/mobile-preview", "/api/"] }],
    sitemap: "https://gabrealinc.com/sitemap.xml",
  };
}
