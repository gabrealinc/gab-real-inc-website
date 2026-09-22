import type { MetadataRoute } from "next";

const pages = ["", "/about", "/services", "/learn", "/case-studies", "/testimonials"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({ url: `https://gabrealinc.com${path}` }));
}
