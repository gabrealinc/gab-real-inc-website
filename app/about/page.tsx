import type { Metadata } from "next";
import { InteriorShell } from "../interior-shell";

export const metadata: Metadata = {
  title: "About Gabby | Gab Real Inc.",
  description: "Meet Gabby Greenberg, founder of Gab Real Inc. She helps people and teams make clearer decisions and build useful business systems.",
};

export default function AboutPage() {
  return (
    <InteriorShell>
      <section className="interior-hero about-page-hero">
        <figure className="about-hero-image">
          <img src="/images/gabby/Office.jpg" alt="Gabby at a desk beside a sunlit window" width="1700" height="2000" fetchPriority="high" />
        </figure>
        <div className="about-hero-copy">
          <span className="eyebrow">ABOUT GABBY</span>
          <h1>Hi, I’m <em>Gabby!</em></h1>
          <p>I help people and teams make clearer decisions, design better ways to work, and use AI where it actually helps.</p>
        </div>
      </section>
      <section className="about-story">
        <figure className="about-story-image">
          <div className="about-story-photo">
            <img src="/images/gabby/Cafe.jpg" alt="Gabby writing in a notebook at a cafe by the ocean" width="1333" height="2000" loading="lazy" />
          </div>
          <figcaption>Your business should be an asset that provides you with a life you love, not another job that burns you out.</figcaption>
        </figure>
        <div className="about-story-copy">
          <p className="about-story-lead">I started Gab Real Inc to help people make sense of complicated work and decide what is actually worth building.</p>
          <p>Some people need a conversation. Some need a clear plan, a team workshop, or a system that connects the pieces behind the scenes. I teach, advise, design, and build depending on what the problem calls for.</p>
          <p>I care about making technology understandable and useful. The goal is better decisions and more room for the work and life that matter to you.</p>
        </div>
      </section>
      <section className="about-moments" aria-label="Gabby in conversation">
        <div className="about-moments-heading">
          <span className="eyebrow">BEYOND THE DESK</span>
          <h2>Ideas are better <em>out loud.</em></h2>
        </div>
        <div className="about-moments-grid">
          <figure>
            <img src="/images/gabby/Podcast.jpg" alt="Gabby at a podcast microphone" width="2000" height="1684" loading="lazy" />
            <figcaption>On the mic</figcaption>
          </figure>
          <figure>
            <img src="/images/gabby/Panel.jpg" alt="Gabby holding a microphone in a panel setting" width="1952" height="2000" loading="lazy" />
            <figcaption>In conversation</figcaption>
          </figure>
        </div>
      </section>
      <section className="interior-band about-belief">
        <span>THE FUTURE IS SOMETHING WE PARTICIPATE IN</span>
        <h2>We have more power as a <em>collective.</em></h2>
        <p>It’s time to take proactive action towards a future we are proud to say we helped create.</p>
      </section>
    </InteriorShell>
  );
}
