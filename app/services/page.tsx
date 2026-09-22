import type { Metadata } from "next";
import { InteriorShell } from "../interior-shell";
import { OfferFinder } from "./offer-finder";

export const metadata: Metadata = {
  title: "Ways to Work Together | Gab Real Inc.",
  description: "Find the right way to learn AI, get a strategic blueprint, teach your team, keep Gabby in the room, or build a custom AI system.",
};

const offers = [
  {
    number: "01",
    title: "Self-paced learning",
    lead: "Learn it yourself",
    price: "In development · enrollment not open",
    copy: "Start with AI Foundations, then build a more connected system when you are ready. Learn to make smarter choices without becoming dependent on one tool or platform.",
    note: "Both courses are in development. Enrollment is not open yet.",
    href: "/learn",
  },
  {
    number: "02",
    title: "AI and Systems Blueprint",
    lead: "Get a clear plan",
    price: "$1,250",
    copy: "A 90-minute working session followed by an independent strategic blueprint for what to build, what to automate, and what should remain human.",
    note: "Keep the plan and implement it yourself, with your team, or with any provider. There is no obligation to continue.",
  },
  {
    number: "03",
    title: "Practical AI Workshops",
    lead: "Teach your team",
    price: "Custom · application required",
    copy: "Practical AI education designed around your team’s actual work, current experience, and goals. No generic tool parade.",
  },
  {
    number: "04",
    title: "Speaking Engagements",
    lead: "Start a useful conversation",
    price: "Custom · application required",
    copy: "Keynotes, panels, fireside conversations, and interactive sessions about AI, creativity, agency, systems, and the future of work.",
  },
  {
    number: "05",
    title: "Strategic Advisory",
    lead: "Keep Gabby in the room",
    price: "Custom · application required",
    copy: "Ongoing strategic access for founders and leaders navigating AI, business systems, products, operations, creative direction, or implementation decisions.",
  },
  {
    number: "06",
    title: "Custom AI Systems",
    lead: "Have Gabby build it",
    price: "Custom · application required",
    copy: "Selective strategy, design, and implementation of valuable AI systems, internal tools, agents, knowledge systems, research workflows, and automations.",
  },
];

export default function ServicesPage() {
  return (
    <InteriorShell>
      <section className="interior-hero services-hero">
        <span className="eyebrow">WAYS TO WORK TOGETHER</span>
        <h1>You probably don’t need more AI tools.<br /><em>You need clarity.</em></h1>
        <p>Clarity about what is worth building, what should remain human, and which systems will make your work meaningfully better.</p>
        <a className="services-hero-link" href="#offer-finder">Find your best next step ↓</a>
      </section>

      <section className="service-path" aria-label="Ways to work together">
        <span>Learn it yourself</span><i>→</i><span>Get a Blueprint</span><i>→</i><span>Teach your team</span><i>→</i><span>Keep Gabby in the room</span><i>→</i><span>Have Gabby build it</span>
      </section>

      <OfferFinder />

      <section className="service-page-grid" aria-label="Current offers">
        {offers.map((offer) => (
          <article key={offer.number}>
            <span>{offer.number}</span>
            <small>{offer.lead}</small>
            <h2>{offer.title}</h2>
            <strong className="service-price">{offer.price}</strong>
            <p>{offer.copy}</p>
            {offer.note ? <p className="service-note">{offer.note}</p> : null}
            <a href={offer.href ?? "#offer-finder"}>{offer.href ? "Explore the learning paths ↗" : "Is this right for me? ↓"}</a>
          </article>
        ))}
      </section>
    </InteriorShell>
  );
}
