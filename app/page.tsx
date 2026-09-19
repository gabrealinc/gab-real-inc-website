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

      <section className="portfolio-hero" id="main-content">
        <img className="portfolio-hero-background" src="/gabby-portrait.jpg" alt="Gabby Greenberg, founder of Gab Real Inc." width="2400" height="1600" fetchPriority="high" />
        <div className="portfolio-hero-wash" aria-hidden="true" />
        <div className="portfolio-hero-topline"><span>AI STRATEGY + SYSTEMS</span><span>BASED IN SAN DIEGO</span><span>WORKING GLOBALLY</span></div>
        <h1 className="portfolio-promise">AI MADE<br />SIMPLE</h1>
        <p className="portfolio-hero-description">Practical AI education, strategy, and systems that help people work better without losing what makes them human.</p>
        <p className="portfolio-hero-belief">QUESTION THE DEFAULT.<br />BUILD WHAT MATTERS.</p>
        <p className="portfolio-hero-brand">GAB REAL<br />INC.</p>
      </section>

      <section className="idea-section" id="about" data-rise>
        <div className="section-label"><span>01</span><span>THE PERSON BEHIND THE WORK</span></div>
        <div className="bio-layout">
          <div className="bio-left"><h2>I’m Gabby<br /><em>Greenberg.</em></h2><p>I’m an AI strategist, systems consultant, writer, and educator based in San Diego.</p></div>
          <figure className="bio-photo"><img src="/gabby-portrait.jpg" alt="Gabby Greenberg" width="2400" height="1600" loading="lazy" /></figure>
          <div className="bio-right"><p>I help people and small businesses understand AI, fix systems that waste their time, and build useful tools around the way they actually work.</p><p>I’m also the co-author of <em>From Scratch</em>, a book about questioning the definitions we inherit and deciding what we want instead.</p><a className="text-link" href="#work-with-me">Work with me <ArrowUpRight size={18} /></a></div>
        </div>
      </section>

      <section className="explore-section thesis-section" id="explore" data-rise>
        <div className="section-label"><span>02</span><span>THE POINT</span></div>
        <div className="creative-mode">
          <div className="creative-switch-card" role="img" aria-label="Creative mode switching from off to on">
            <span className="creative-switch-title">CREATIVE<br />MODE</span>
            <div className="creative-switch-face"><span className="creative-status creative-status-on">ON</span><span className="creative-switch-track"><span className="creative-switch-knob" /></span><span className="creative-status creative-status-off">OFF</span></div>
          </div>
          <div className="creative-message">
            <h2>Turning creative mode <em>on.</em></h2>
            <p className="creative-lede">AI should give us more room to think, create, connect, and do the work that actually matters.</p>
            <p>I help people understand the tools, decide where they belong, and use them without handing over their voice or judgment.</p>
            <div className="creative-manifesto" aria-label="Less busywork. More human work.">
              <span>LESS BUSYWORK.</span><span>MORE HUMAN WORK.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work-with-me" data-rise>
        <div className="section-label light"><span>03</span><span>WORK WITH ME</span></div>
        <div className="work-heading"><h2>What Gab Real Inc.<br /><em>actually does.</em></h2><p>Choose the kind of help you need, from a one-time talk or workshop to ongoing advice or a custom AI system.</p></div>
        <div className="service-stack">
          <article><span>01</span><h3>Workshops + Team Training</h3><p>Practical sessions that help your team understand AI, use it in their day-to-day work, and know where to be careful.</p></article>
          <article><span>02</span><h3>Speaking Engagements</h3><p>Keynotes, panels, and conversations about AI, the future of work, human agency, and how we shape what comes next.</p></article>
          <article><span>03</span><h3>AI Strategy + Advisory</h3><p>Ongoing guidance to help you decide where AI fits, choose the right tools, and make better decisions as things change.</p></article>
          <article><span>04</span><h3>Custom AI Buildouts</h3><p>Useful workflows, dashboards, internal tools, and AI assistants designed around how your business actually works.</p></article>
        </div>
        <div className="work-actions"><a className="yellow-button work-cta" href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Tell me what you’re working on <ArrowUpRight size={18} /></a><a className="text-link light-link" href="/learn">Or learn with AI with Gab <ArrowUpRight size={18} /></a></div>
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
        <div className="section-label"><span>05</span><span>THERE’S MORE TO LIFE THAN WORK</span></div>
        <div className="section-title-row life-title"><h2>There’s more to life<br /><em>than work.</em></h2><p>These are the places where I question the rules we inherit, follow what I’m curious about, and make room for conversations that matter.</p></div>
        <div className="world-cards">
          <a className="world-card book-world" href="https://readfromscratch.com/" target="_blank" rel="noreferrer"><span>01 / THE BOOK</span><h3>From<br /><em>Scratch.</em></h3><p>A book about questioning the life you inherited and creating one that actually feels like yours.</p><small>READ THE BOOK <ArrowUpRight size={17} /></small></a>
          <a className="world-card writing-world" href="https://growithgab.substack.com/" target="_blank" rel="noreferrer"><span>02 / THE WRITING</span><h3>Grow<br /><em>with Gab.</em></h3><p>Essays and field notes about AI, identity, creativity, work, and whatever I can’t stop thinking about.</p><small>READ THE LATEST <ArrowUpRight size={17} /></small></a>
          <article className="world-card exploit-world"><span>03 / THE PODCAST</span><h3>Exploit<em>.</em></h3><p>Honest conversations with people using technology, creativity, and their own lives to question what comes next.</p><small>COMING SOON <span aria-hidden="true">↗</span></small></article>
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
