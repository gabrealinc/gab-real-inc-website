import type { Metadata } from "next";
import { InteriorShell } from "../interior-shell";

export const metadata: Metadata = {
  title: "About Gabby | Gab Real Inc.",
  description: "Meet Gabby Greenberg, founder of Gab Real Inc. and a strategist working across brand, AI systems, and creative direction.",
};

export default function AboutPage() {
  return (
    <InteriorShell>
      <section className="interior-hero about-page-hero">
        <figure className="about-hero-image">
          <img src="/about-gabby-portrait.jpg" alt="Gabby Greenberg smiling at the camera" width="2400" height="1600" />
        </figure>
        <div className="about-hero-copy">
          <span className="eyebrow">ABOUT GABBY</span>
          <h1>Hi, I’m <em>Gabby!</em></h1>
          <p>Founder of Gab Real Inc. I work at the intersection of brand strategy, AI systems, and creative direction.</p>
        </div>
      </section>
      <section className="about-story">
        <figure className="about-story-image">
          <div className="about-story-photo">
            <img src="/about-gabby-phone.jpg" alt="Gabby Greenberg smiling while speaking on the phone" width="2400" height="1600" />
          </div>
          <figcaption>Your business should be an asset that provides you with a life you love, not another job that burns you out.</figcaption>
        </figure>
        <div className="about-story-copy">
          <p className="about-story-lead">I started Gab Real Inc because I kept seeing the same thing everywhere I looked: brilliant people quietly burning themselves out trying to keep up.</p>
          <p>My specialty is building AI the right way, from the ground up. Solid infrastructure and architecture for scalable systems that can actually grow with you. Anyone can create individual tools. The real craft is making sure they all work together, freeing you from the tasks that drain your energy and giving you more time for the work you love. That is the difference between adding more noise and building something that lasts.</p>
          <p>What drives me most is keeping our humanity intact as AI evolves. I want to empower as many people to understand this technology well enough to have smart conversations about it, to use it with intention, and to help shape a future where technology serves people instead of replacing them.</p>
        </div>
      </section>
      <section className="interior-band about-belief">
        <span>THE FUTURE IS SOMETHING WE PARTICIPATE IN</span>
        <h2>We have more power as a <em>collective.</em></h2>
        <p>It’s time to take proactive action towards a future we are proud we created.</p>
      </section>
    </InteriorShell>
  );
}
