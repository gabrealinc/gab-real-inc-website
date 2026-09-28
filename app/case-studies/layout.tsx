import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What I’ve Built | Gab Real Inc.",
  description: "Explore websites, systems, and workflows Gabby Greenberg has built with clients.",
};

export default function CaseStudiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
