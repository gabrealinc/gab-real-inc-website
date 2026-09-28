import type { Metadata } from "next";
import { InteriorShell } from "../interior-shell";
import { OfferFinder } from "./offer-finder";

export const metadata: Metadata = {
  title: "Work Directly with Gabby | Gab Real Inc.",
  description: "Work directly with Gabby on a strategy session, AI and Systems Blueprint, team workshop, speaking engagement, advisory, or custom system.",
};

const offers = [
  {
    number: "01",
    title: "Strategy Session",
    lead: "Think it through together",
    price: "$350 / 90 minutes",
    copy: "One focused conversation for a transition, opportunity, business decision, positioning question, or AI idea. Leave with clearer thinking and next steps, without a formal roadmap.",
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
        <div className="services-hero-copy">
          <span className="eyebrow">MAP IT / TEACH IT / BUILD IT</span>
          <h1>You probably don’t need more AI tools.<br /><em>You need clarity.</em></h1>
          <p>Bring me a decision, a team that needs to learn, or a system that needs to work better. We can think it through, map it, teach it, or build it together.</p>
          <div className="services-hero-actions"><a className="services-hero-link" href="#offer-finder">Find your best next step ↓</a><a className="services-hero-link" href="/learn">Looking for a course you can take on your own? ↗</a></div>
        </div>
        <figure className="services-hero-image"><img src="/images/gabby/Airport.jpg" alt="Gabby working at a cafe table" width="1333" height="2000" fetchPriority="high" /></figure>
      </section>

      <section className="service-path" aria-label="Ways to work together">
        <span>Think it through</span><i>→</i><span>Get a Blueprint</span><i>→</i><span>Teach your team</span><i>→</i><span>Build it together</span>
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
            <a href="#offer-finder">Is this right for me? ↓</a>
          </article>
        ))}
      </section>

      <section className="service-photo-story" aria-label="Working with Gabby in different settings">
        <div className="service-photo-story-heading">
          <span className="eyebrow">WORKSHOPS / SPEAKING / CONVERSATIONS</span>
          <h2>Change starts with <em>real conversations.</em></h2>
        </div>
        <div className="service-photo-story-grid">
          <figure><img src="/images/gabby/Presentation.jpg" alt="Gabby giving a presentation" width="2000" height="2000" loading="lazy" /><figcaption>Workshops</figcaption></figure>
          <figure><img src="/images/gabby/Speaking.jpg" alt="Gabby speaking into a microphone" width="1669" height="2000" loading="lazy" /><figcaption>Speaking</figcaption></figure>
          <figure><img src="/images/gabby/On-Stage.jpg" alt="Gabby addressing a room from the stage" width="2000" height="1847" loading="lazy" /><figcaption>Conversations</figcaption></figure>
        </div>
      </section>
    </InteriorShell>
  );
}
