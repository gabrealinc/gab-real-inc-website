import type { Metadata } from "next";
import "./globals.css";
import "./studio.css";
import "./depth.css";

export const metadata: Metadata = {
  title: "Gab Real Inc. | Use AI to Think More Clearly. Build What Matters.",
  description: "AI education for everyday people and small business owners, with practical AI roadmaps and custom builds. Learn with Gabby Greenberg or work together to build better ways of working.",
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
