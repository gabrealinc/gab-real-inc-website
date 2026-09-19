"use client";

import { ArrowDown, ArrowUpRight, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const selectedWork = [
  { label: "Internal AI tool", number: "01", title: "One place to see the signal.", description: "For a luxury wellness business, I combined weekly reporting and a protocol-generation workflow into a clearer internal tool.", outcome: "Less switching between systems and a more usable view of the information that matters." },
  { label: "Digital operations", number: "02", title: "Complex information, made usable.", description: "For a healthcare e-commerce business, I reorganized product information, documentation, and customer-facing workflows across the site.", outcome: "A clearer experience for both the internal team and the people trying to make an informed purchase." },
  { label: "AI workspace", number: "03", title: "Built around the people using it.", description: "For a consulting team, I structured business context, file organization, and AI workflows around real roles—not generic prompts.", outcome: "A practical system the team could understand, test, and evolve." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeWork, setActiveWork] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.1 });
    document.querySelectorAll("[data-rise]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="ecosystem" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="ecosystem-header">
        <a className="ecosystem-wordmark" href="#top" aria-label="Gab Real Inc. home">GAB REAL INC.<span>®</span></a>
        <button className="ecosystem-menu" type="button" aria-expanded={menuOpen} aria-controls="ecosystem-nav" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? "Close" : "Menu"} {menuOpen ? <Minus size={17} /> : <Plus size={17} />}
        </button>
        <nav id="ecosystem-nav" className={menuOpen ? "is-open" : ""} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
          <a href="#about">The idea</a><a href="#explore">Explore</a><a href="#work-with-me">Work with me</a><a href="#selected-work">Past work</a>
        </nav>
        <a className="ecosystem-header-cta" href="#work-with-me">Start here <ArrowDown size={16} /></a>
      </header>

      <section className="ecosystem-hero" id="main-content">
        <div className="hero-identity">
          <p className="hero-kicker">AI STRATEGY · SYSTEMS · WRITING · EDUCATION</p>
          <h1>GAB<br />REAL<br /><em>INC.</em></h1>
          <p className="hero-thesis">The real me.<br />All in one company.</p>
        </div>
        <figure className="hero-portrait">
          <img src="/gabby-portrait.jpg" alt="Gabby Greenberg, founder of Gab Real Inc." width="2400" height="1600" fetchPriority="high" />
          <figcaption><span>GABBY GREENBERG</span><span>SAN DIEGO · 2026</span></figcaption>
          <span className="hero-stamp">QUESTION<br />THE<br />DEFAULT.</span>
        </figure>
        <div className="hero-intro">
          <p>I help people understand AI, rethink the systems they inherited, and build work and lives that feel more intentional.</p>
          <div className="hero-links">
            <a className="yellow-button" href="#explore">Explore the work <ArrowDown size={18} /></a>
            <a className="text-link" href="#work-with-me">Work with me <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <div className="hero-index" aria-label="Gabby at a glance">
          <span>AI strategist + systems consultant</span><span>Co-author of <em>From Scratch</em></span><span>Founder across food, community + tech</span><span>6× national champion equestrian</span>
        </div>
      </section>

      <section className="idea-section" id="about" data-rise>
        <div className="section-label"><span>01</span><span>THE IDEA</span></div>
        <div className="idea-copy">
          <h2>Not a holding company. <em>A home for all of it.</em></h2>
          <div>
            <p>Gab Real Inc. is AI strategy, systems thinking, writing, education, experimentation, and an ongoing refusal to accept “that’s just how it’s done” as a good enough answer.</p>
            <p>Serious health experiences in my twenties forced me to question what I had been taught to chase. Now my work helps other people understand the systems shaping their lives—and recognize that they have a role in building what comes next.</p>
          </div>
        </div>
        <div className="idea-question"><span>THE QUESTION UNDERNEATH EVERYTHING</span><p>What do we actually want technology—and our lives—to help us create?</p></div>
      </section>

      <section className="explore-section" id="explore" data-rise>
        <div className="section-label"><span>02</span><span>CHOOSE YOUR DOOR</span></div>
        <div className="section-title-row"><h2>There are two<br /><em>ways in.</em></h2><p>Learn to use AI with more clarity—or bring me the interesting problem that doesn’t fit a tutorial.</p></div>
        <div className="door-grid">
          <a className="door-card learn-door" href="/learn"><span className="door-number">01 / LEARN</span><div><h3>AI with Gab</h3><p>Human-first, practical AI education for people who want to understand what they’re using—not just collect prompts.</p></div><span className="door-action">Explore the courses <ArrowUpRight size={22} /></span></a>
          <a className="door-card work-door" href="#work-with-me"><span className="door-number">02 / BUILD</span><div><h3>Work with me</h3><p>Strategy, advisory, workshops, and selected builds for problems worth thinking about properly.</p></div><span className="door-action">See how we can work together <ArrowDown size={22} /></span></a>
        </div>
      </section>

      <section className="work-section" id="work-with-me" data-rise>
        <div className="section-label light"><span>03</span><span>WORK WITH ME</span></div>
        <div className="work-heading"><h2>Bring me the problem<br /><em>behind the problem.</em></h2><p>I’m most useful upstream—before a business buys another platform, automates the wrong process, or builds something nobody actually needs.</p></div>
        <div className="service-stack">
          <article><span>01</span><h3>AI Strategy + Advisory</h3><p>Figure out where AI belongs, what it should change, and how to move forward responsibly.</p></article>
          <article><span>02</span><h3>Workshops + Speaking</h3><p>Make AI understandable, relevant, and discussable for the actual humans in the room.</p></article>
          <article><span>03</span><h3>Selected Systems + Builds</h3><p>Design and prototype the right workflow, internal tool, dashboard, or AI-assisted experience.</p></article>
        </div>
        <a className="yellow-button work-cta" href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Tell me what you’re working on <ArrowUpRight size={18} /></a>
      </section>

      <section className="selected-section" id="selected-work" data-rise>
        <div className="section-label"><span>04</span><span>SELECTED WORK</span></div>
        <div className="section-title-row"><h2>Built around real work.<br /><em>Not hypothetical use cases.</em></h2><p>A few examples of the systems, experiences, and ways of working I’ve helped make clearer.</p></div>
        <div className="case-folder">
          <div className="folder-tabs" role="tablist" aria-label="Selected work categories">
            {selectedWork.map((item, index) => <button key={item.label} role="tab" aria-selected={activeWork === index} onClick={() => setActiveWork(index)}><span>{item.number}</span>{item.label}</button>)}
          </div>
          <div className="folder-body" role="tabpanel">
            <div><span className="folder-meta">GAB REAL INC. / SELECTED WORK / {selectedWork[activeWork].number}</span><h3>{selectedWork[activeWork].title}</h3></div>
            <div className="folder-detail"><p>{selectedWork[activeWork].description}</p><span>THE CHANGE</span><strong>{selectedWork[activeWork].outcome}</strong></div>
          </div>
        </div>
      </section>

      <section className="world-section" data-rise>
        <div className="section-label"><span>05</span><span>THE REST OF THE UNIVERSE</span></div>
        <div className="section-title-row"><h2>AI is part of the story.<br /><em>Not the whole story.</em></h2><p>The things that make this work mine—and explain why I see technology, systems, and possibility the way I do.</p></div>
        <div className="world-cards">
          <a className="world-card book-world" href="https://readfromscratch.com/" target="_blank" rel="noreferrer"><span>THE BOOK</span><h3>From<br /><em>Scratch.</em></h3><p>Creating a life that feels like yours.</p><small>READ THE BOOK <ArrowUpRight size={17} /></small></a>
          <a className="world-card writing-world" href="https://growithgab.substack.com/" target="_blank" rel="noreferrer"><span>THE WRITING</span><h3>Grow<br /><em>with Gab.</em></h3><p>Ideas about AI, work, identity, creativity, and whatever I can’t stop thinking about.</p><small>READ THE LATEST <ArrowUpRight size={17} /></small></a>
          <article className="world-card founder-world"><span>THE BUILDER</span><h3>Food.<br />Community.<br /><em>Technology.</em></h3><p>I’ve built businesses, events, experiences, recipes, brands, and systems. The medium changes. The instinct doesn’t.</p></article>
          <article className="world-card champion-world"><span>THE BACKSTORY</span><h3>6× national<br /><em>champion.</em></h3><p>I rode competitively from age three to eighteen. Discipline, pattern recognition, and learning to respond in real time started there.</p></article>
        </div>
      </section>

      <section className="closing-section" data-rise>
        <img src="/gab-real-sculpture.png" alt="An interlocking silver and glass sculpture with a yellow sphere" width="1122" height="1402" loading="lazy" />
        <div><span>ONE COMPANY. MANY THREADS. ONE POINT OF VIEW.</span><h2>Let’s build something<br /><em>that actually matters.</em></h2><a className="yellow-button" href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={18} /></a></div>
      </section>

      <footer className="ecosystem-footer">
        <a className="ecosystem-wordmark" href="#top">GAB REAL INC.<span>®</span></a>
        <p>Think clearly. Question the default.<br />Build what matters.</p>
        <div><a href="/learn">AI with Gab</a><a href="https://readfromscratch.com/" target="_blank" rel="noreferrer">From Scratch ↗</a><a href="https://growithgab.substack.com/" target="_blank" rel="noreferrer">Substack ↗</a><a href="https://www.instagram.com/aiwithgab/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
      </footer>
    </main>
  );
}
