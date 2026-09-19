"use client";

import { ArrowDown, ArrowUpRight, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const selectedWork = [
  { label: "Internal AI tool", number: "01", title: "Weekly reporting in one place.", description: "A luxury wellness business was using separate tools for weekly reports and client protocols. I combined them into one internal system.", outcome: "The team can spend less time switching between tools and see the information they need more easily." },
  { label: "Digital operations", number: "02", title: "Important product information, easier to find.", description: "A healthcare e-commerce business needed a clearer way to organize product details, documentation, and customer information across its website.", outcome: "Customers can make more informed decisions, and the internal team has a simpler process to manage." },
  { label: "AI workspace", number: "03", title: "An AI setup made for the actual team.", description: "A consulting team wanted to use AI without creating more confusion. I organized its business information, files, and AI workflows around each person’s real role.", outcome: "The team has a practical system it can understand, use, and improve over time." },
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
        </div>
        <figure className="hero-portrait">
          <div className="hero-photo-crop"><img src="/gabby-portrait.jpg" alt="Gabby Greenberg, founder of Gab Real Inc." width="2400" height="1600" fetchPriority="high" /></div>
          <figcaption><span>GABBY GREENBERG</span><span>SAN DIEGO · 2026</span></figcaption>
          <span className="hero-stamp">QUESTION<br />THE<br />DEFAULT.</span>
        </figure>
        <div className="hero-intro">
          <p>I help people and small businesses figure out how to use AI in ways that are actually useful—without losing their voice, judgment, or time to another complicated tool.</p>
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
          <h2>One company for <em>everything I do.</em></h2>
          <div>
            <p>Gab Real Inc. is where I put all my work: teaching people about AI, helping businesses fix messy systems, building useful tools, and writing about the bigger questions technology brings up.</p>
            <p>Serious health experiences in my twenties forced me to question how I was living and what I had been taught to chase. That experience still shapes my work today: understand what is influencing you, decide what you actually want, and build from there.</p>
          </div>
        </div>
        <div className="idea-question"><span>THE QUESTION UNDERNEATH EVERYTHING</span><p>How can we use technology to make our work and lives better—not just faster?</p></div>
      </section>

      <section className="explore-section" id="explore" data-rise>
        <div className="section-label"><span>02</span><span>CHOOSE YOUR DOOR</span></div>
        <div className="section-title-row"><h2>Want to learn?<br /><em>Or want my help?</em></h2><p>Learn how to use AI yourself, or bring me a problem inside your business that you’re tired of dealing with.</p></div>
        <div className="door-grid">
          <a className="door-card learn-door" href="/learn"><span className="door-number">01 / LEARN</span><div><h3>AI with Gab</h3><p>Practical AI courses for people who want to use the tools well without becoming tech experts.</p></div><span className="door-action">Explore the courses <ArrowUpRight size={22} /></span></a>
          <a className="door-card work-door" href="#work-with-me"><span className="door-number">02 / GET HELP</span><div><h3>Work with me</h3><p>Book a workshop or speaking engagement, get ongoing advice, or bring me an AI system you need help building.</p></div><span className="door-action">See how I can help <ArrowDown size={22} /></span></a>
        </div>
      </section>

      <section className="work-section" id="work-with-me" data-rise>
        <div className="section-label light"><span>03</span><span>WORK WITH ME</span></div>
        <div className="work-heading"><h2>Four ways we can<br /><em>work together.</em></h2><p>Choose the kind of help you need, from a one-time talk or workshop to ongoing advice or a custom AI system.</p></div>
        <div className="service-stack">
          <article><span>01</span><h3>Workshops + Team Training</h3><p>Practical sessions that help your team understand AI, use it in their day-to-day work, and know where to be careful.</p></article>
          <article><span>02</span><h3>Speaking Engagements</h3><p>Keynotes, panels, and conversations about AI, the future of work, human agency, and how we shape what comes next.</p></article>
          <article><span>03</span><h3>AI Strategy + Advisory</h3><p>Ongoing guidance to help you decide where AI fits, choose the right tools, and make better decisions as things change.</p></article>
          <article><span>04</span><h3>Custom AI Buildouts</h3><p>Useful workflows, dashboards, internal tools, and AI assistants designed around how your business actually works.</p></article>
        </div>
        <a className="yellow-button work-cta" href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Tell me what you’re working on <ArrowUpRight size={18} /></a>
      </section>

      <section className="selected-section" id="selected-work" data-rise>
        <div className="section-label"><span>04</span><span>SELECTED WORK</span></div>
        <div className="section-title-row"><h2>Here’s what that looks like<br /><em>in real life.</em></h2><p>A few examples of problems I’ve helped businesses make simpler.</p></div>
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
        <div className="section-title-row"><h2>There’s more to me<br /><em>than AI.</em></h2><p>The other work and experiences that shape how I think, teach, and build.</p></div>
        <div className="world-cards">
          <a className="world-card book-world" href="https://readfromscratch.com/" target="_blank" rel="noreferrer"><span>THE BOOK</span><h3>From<br /><em>Scratch.</em></h3><p>Creating a life that feels like yours.</p><small>READ THE BOOK <ArrowUpRight size={17} /></small></a>
          <a className="world-card writing-world" href="https://growithgab.substack.com/" target="_blank" rel="noreferrer"><span>THE WRITING</span><h3>Grow<br /><em>with Gab.</em></h3><p>Ideas about AI, work, identity, creativity, and whatever I can’t stop thinking about.</p><small>READ THE LATEST <ArrowUpRight size={17} /></small></a>
          <article className="world-card founder-world"><span>THE BUILDER</span><h3>Food.<br />Community.<br /><em>Technology.</em></h3><p>I’ve built businesses, events, experiences, recipes, brands, and systems. The medium changes. The instinct doesn’t.</p></article>
          <article className="world-card champion-world"><span>THE BACKSTORY</span><h3>6× national<br /><em>champion.</em></h3><p>I rode competitively from age three to eighteen. Discipline, pattern recognition, and learning to respond in real time started there.</p></article>
        </div>
      </section>

      <section className="closing-section" data-rise>
        <img src="/gab-real-sculpture.png" alt="An interlocking silver and glass sculpture with a yellow sphere" width="1122" height="1402" loading="lazy" />
        <div><span>ONE COMPANY. MANY THREADS. ONE POINT OF VIEW.</span><h2>Let’s build something<br /><em>actually useful.</em></h2><a className="yellow-button" href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={18} /></a></div>
      </section>

      <footer className="ecosystem-footer">
        <a className="ecosystem-wordmark" href="#top">GAB REAL INC.<span>®</span></a>
        <p>Think clearly. Question the default.<br />Build what matters.</p>
        <div><a href="/learn">AI with Gab</a><a href="https://readfromscratch.com/" target="_blank" rel="noreferrer">From Scratch ↗</a><a href="https://growithgab.substack.com/" target="_blank" rel="noreferrer">Substack ↗</a><a href="https://www.instagram.com/aiwithgab/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
      </footer>
    </main>
  );
}
