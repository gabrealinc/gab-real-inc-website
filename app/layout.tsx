import type { Metadata } from "next";
import "./globals.css";
import "./studio.css";
import "./depth.css";
import "./ecosystem.css";

export const metadata: Metadata = {
  title: "Gab Real Inc. | AI Strategy, Systems, Writing & Education",
  description: "Gab Real Inc. is the home of Gabby Greenberg’s work across human-first AI strategy, systems, education, writing, and intentional living.",
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
