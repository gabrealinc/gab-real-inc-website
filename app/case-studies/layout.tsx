import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Gab Real Inc.",
  description: "Selected AI systems and strategy work by Gabby Greenberg, with the problem, the build, and the outcomes explained clearly.",
};

export default function CaseStudiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
