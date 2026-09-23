import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past Work | Gab Real Inc.",
  description: "Selected systems and client experiences built by Gabby Greenberg to make complicated work clearer and easier to run.",
};

export default function PastWorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
