import type { Metadata } from "next";
import { InteriorShell } from "../interior-shell";

export const metadata: Metadata = {
  title: "Services | Gab Real Inc.",
  description: "AI advice, team training, speaking, and custom systems designed around how your business actually works.",
};

const offers = [
  { number: "01", title: "Team training", lead: "Learn together", copy: "Clear, practical sessions that help your team use AI in everyday work, build shared language, and understand where human judgment still matters." },
  { number: "02", title: "Speaking", lead: "Start the conversation", copy: "Keynotes and participatory conversations about AI, the future of work, and the choices people and organizations should still control." },
  { number: "03", title: "AI advice", lead: "Make better decisions", copy: "A trusted thinking partner for choosing tools, setting priorities, testing assumptions, and responding intelligently as the technology changes." },
  { number: "04", title: "Custom systems", lead: "Build what is useful", copy: "Workflows, dashboards, and AI assistants designed around the real needs, context, and constraints of your business." },
];

export default function ServicesPage() {
  return (
    <InteriorShell>
      <section className="interior-hero">
        <span className="eyebrow">WAYS TO WORK TOGETHER</span>
        <h1>Start with the problem.<br /><em>Then choose the help.</em></h1>
        <p>From one useful conversation to a complete system built around how your business actually works.</p>
      </section>
      <section className="service-page-grid" aria-label="Services">
        {offers.map((offer) => (
          <article key={offer.number}>
            <span>{offer.number}</span><small>{offer.lead}</small><h2>{offer.title}</h2><p>{offer.copy}</p>
          </article>
        ))}
      </section>
      <section className="interior-band service-page-cta">
        <span>NOT SURE WHAT YOU NEED YET?</span>
        <h2>Bring the messy version.<br /><em>We’ll find the real problem.</em></h2>
        <a href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Tell me what you’re working on ↗</a>
      </section>
    </InteriorShell>
  );
}
