import type { Metadata } from "next";
import { InteriorShell } from "../interior-shell";
import { OfferFinder } from "./offer-finder";

export const metadata: Metadata = {
  title: "Work Directly with Gabby | Gab Real Inc.",
  description: "Work directly with Gabby on an AI blueprint, team workshop, speaking engagement, strategic advisory, or custom AI system.",
};

const offers = [
  {
    number: "01",
    title: "AI and Systems Blueprint",
    lead: "Get a clear plan",
    price: "$1,250",
    copy: "A 90-minute working session followed by an independent strategic blueprint for what to build, what to automate, and what should remain human.",
    note: "Keep the plan and implement it yourself, with your team, or with any provider. There is no obligation to continue.",
  },
  {
    number: "02",
    title: "Practical AI Workshops",
    lead: "Teach your team",
    price: "Custom · application required",
    copy: "Practical AI education designed around your team’s actual work, current experience, and goals. No generic tool parade.",
  },
  {
    number: "03",
    title: "Speaking Engagements",
    lead: "Start a useful conversation",
    price: "Custom · application required",
    copy: "Keynotes, panels, fireside conversations, and interactive sessions about AI, creativity, agency, systems, and the future of work.",
  },
  {
    number: "04",
    title: "Strategic Advisory",
    lead: "Keep Gabby in the room",
    price: "Custom · application required",
    copy: "Ongoing strategic access for founders and leaders navigating AI, business systems, products, operations, creative direction, or implementation decisions.",
  },
  {
    number: "05",
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
          <span className="eyebrow">WORK DIRECTLY WITH GABBY</span>
          <h1>You probably don’t need more AI tools.<br /><em>You need clarity.</em></h1>
          <p>Bring me into your business for a focused plan, team education, ongoing advice, or a system built around your work. We’ll figure out what is worth doing together.</p>
          <div className="services-hero-actions"><a className="services-hero-link" href="#offer-finder">Find your best next step ↓</a><a className="services-hero-link" href="/learn">Looking for a course you can take on your own? ↗</a></div>
        </div>
        <figure className="services-hero-image"><img src="/images/gabby/Airport.jpg" alt="Gabby working at a cafe table" width="1333" height="2000" fetchPriority="high" /></figure>
      </section>

      <section className="service-path" aria-label="Ways to work together">
        <span>Get a Blueprint</span><i>→</i><span>Teach your team</span><i>→</i><span>Bring Gabby to your event</span><i>→</i><span>Keep Gabby in the room</span><i>→</i><span>Have Gabby build it</span>
      </section>

      <OfferFinder />

      <section className="service-photo-story" aria-label="Working with Gabby in different settings">
        <div className="service-photo-story-heading">
          <span className="eyebrow">HOW WE CAN WORK TOGETHER</span>
          <h2>From the first conversation to <em>the room you want to move.</em></h2>
        </div>
        <div className="service-photo-story-grid">
          <figure><img src="/images/gabby/Presentation.jpg" alt="Gabby giving a presentation" width="2000" height="2000" loading="lazy" /><figcaption>Workshops</figcaption></figure>
          <figure><img src="/images/gabby/Speaking.jpg" alt="Gabby speaking into a microphone" width="1669" height="2000" loading="lazy" /><figcaption>Speaking</figcaption></figure>
          <figure><img src="/images/gabby/On-Stage.jpg" alt="Gabby addressing a room from the stage" width="2000" height="1847" loading="lazy" /><figcaption>Conversations</figcaption></figure>
        </div>
      </section>

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
    </InteriorShell>
  );
}
