import type { MetadataRoute } from "next";

const pages = ["", "/about", "/services", "/learn", "/past-work", "/testimonials"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({ url: `https://gabrealinc.com${path}` }));
}
