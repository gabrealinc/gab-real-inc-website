import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Notes | Gab Real Inc.",
  description: "Hear from founders, consultants, and teams who worked with Gabby Greenberg on strategy, AI, and useful systems.",
};

export default function TestimonialsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
