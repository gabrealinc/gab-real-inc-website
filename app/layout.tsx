import type { Metadata } from "next";
import "./globals.css";
import "./studio.css";
import "./depth.css";
import "./ecosystem.css";
import { ScrollReveal } from "./scroll-reveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://gabrealinc.com"),
  title: "Gab Real Inc. | Useful AI for Real Life",
  description: "AI education, advice, and useful systems that give people more time for the work and life that matter.",
  openGraph: {
    title: "Gab Real Inc. | AI Made Simple",
    description: "Learn to make informed decisions around AI without having to become an engineer.",
    images: [{ url: "/hero-editorial-desk-desktop.png", width: 1672, height: 941, alt: "A warm editorial desk scene at sunset" }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
