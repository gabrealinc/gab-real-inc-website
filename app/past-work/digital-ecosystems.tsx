"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const websites = [
  {
    name: "Golden Era Sciences",
    kind: "Research commerce",
    description: "A research catalog designed around clear product details and accessible batch documentation.",
    systems: "Product catalog · COA records · WooCommerce",
    image: "/work-sites/golden-era.webp",
    url: "https://goldenerasciences.com/",
  },
  {
    name: "Elevate with Kait",
    kind: "Wellness & experiences",
    description: "A home for classes, retreats, and private work, connected to booking and an updateable schedule.",
    systems: "GoHighLevel bookings · Subscriber form · Live schedules",
    image: "/work-sites/elevate-kait.webp",
    url: "https://www.elevatewithkait.com/",
  },
  {
    name: "Inspirit Alchemy",
    kind: "Healing practice",
    description: "A clear path from discovering the practice to booking acupuncture or applying for coaching.",
    systems: "GoHighLevel site · Lead capture · Booking paths",
    image: "/work-sites/inspirit-alchemy.webp",
    url: "https://inspiritalchemy.com/",
  },
  {
    name: "LUXX Wellness & Beauty",
    kind: "Concierge wellness",
    description: "A service-led website that makes mobile wellness easy to explore and book.",
    systems: "GoHighLevel · Booking paths · Client workflows",
    image: "/work-sites/luxx-wellness.webp",
    url: "https://luxxwellnessandbeauty.com/",
  },
];

export function DigitalEcosystems() {
  const rail = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const card = rail.current?.querySelector<HTMLElement>(".ecosystem-card");
    if (!card || !rail.current) return;
    const gap = parseFloat(getComputedStyle(rail.current).columnGap) || 0;
    rail.current.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  }

  return (
    <section className="ecosystem-gallery" id="ecosystem-gallery" aria-labelledby="ecosystem-gallery-title">
      <div className="ecosystem-gallery-heading">
        <div>
          <span className="eyebrow">MORE WORK / DIGITAL ECOSYSTEMS</span>
          <h2 id="ecosystem-gallery-title">The site is just the <em>front door.</em></h2>
          <p>Websites built to look good and connect visitors to the right next step. Explore the live work.</p>
        </div>
        <div className="ecosystem-gallery-controls" aria-label="Browse websites">
          <button type="button" onClick={() => move(-1)} aria-label="Previous websites"><ArrowLeft size={21} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next websites"><ArrowRight size={21} /></button>
        </div>
      </div>
      <div className="ecosystem-gallery-rail" ref={rail}>
        {websites.map((site, index) => (
          <article className="ecosystem-card" key={site.name}>
            <a className="ecosystem-card-image" href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${site.name} website (opens in a new tab)`}>
              <span className="ecosystem-card-browser" aria-hidden="true"><i /><i /><i /><span>{new URL(site.url).hostname}</span></span>
              <Image src={site.image} alt={`Homepage preview of ${site.name}`} width={1440} height={900} sizes="(max-width: 720px) 88vw, 56vw" priority={index === 0} />
              <span className="ecosystem-card-visit" aria-hidden="true"><ArrowUpRight size={25} /></span>
            </a>
            <div className="ecosystem-card-copy">
              <div className="ecosystem-card-meta"><span>{String(index + 1).padStart(2, "0")} / 04</span><span>{site.kind}</span></div>
              <h3>{site.name}</h3>
              <p>{site.description}</p>
              <div className="ecosystem-card-bottom"><span>{site.systems}</span><a href={site.url} target="_blank" rel="noopener noreferrer">Explore site <ArrowUpRight size={17} /></a></div>
            </div>
          </article>
        ))}
      </div>
      <p className="ecosystem-gallery-hint">Swipe or use the arrows to see all four sites.</p>
    </section>
  );
}
