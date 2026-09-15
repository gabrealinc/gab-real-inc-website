import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gab Real Inc. | Learn AI. Build Better Work.",
  description: "Human-first AI education and automation systems that make work better.",
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
