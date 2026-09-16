import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gab Real Inc. | Use AI to Think More Clearly. Build What Matters.",
  description: "AI education, strategy, and systems engineering for founders and teams. Learn with Gabby Greenberg or work together to build better ways of working.",
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
