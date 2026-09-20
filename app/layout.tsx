import type { Metadata } from "next";
import "./globals.css";
import "./studio.css";
import "./depth.css";
import "./ecosystem.css";

export const metadata: Metadata = {
  title: "Gab Real Inc. | Useful AI for Real Life",
  description: "AI education, advice, and useful systems that give people more time for the work and life that matter.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
