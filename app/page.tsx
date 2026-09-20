"use client";

import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    number: "01",
    label: "Client onboarding",
    title: "A faster welcome for every new partner.",
    problem: "A growing company was welcoming hundreds of partners by hand. Every person needed a web page, instructions, files, and follow-up.",
    built: "One connected process that creates the right materials and guides each person from approval to launch.",
    result: "The team spends less time copying information and more time helping people succeed.",
  },
  {
    number: "02",
    label: "Client experience",
    title: "One calm home for the whole client journey.",
    problem: "Intake forms, payments, plans, and weekly check-ins lived in different places. The founder had to chase every update.",
    built: "A private client portal that brings each step together, from the first form to ongoing progress.",
    result: "Clients know what happens next, and the team can support them without the constant manual follow-up.",
  },
  {
    number: "03",
    label: "Business overview",
    title: "The numbers leaders need, all in one place.",
    problem: "Important information was spread across different tools, so reports were slow to build and hard to trust.",
    built: "A central workspace that brings the company’s data together and gives each team a clear view of its work.",
    result: "Leaders can see what is happening sooner, make decisions with confidence, and catch problems before they grow.",
  },
];

const testimonials = [
  {
    quote: "Gabby integrated everything we needed. My clients now have a flawless experience from discovery call to payment. It’s like she built a magic backstage conveyor belt that handles every detail.",
    name: "Olivia M.",
    role: "Wellness Coach",
  },
  {
    quote: "Implementing new systems is always overwhelming, but Gabby made it so smooth and simple. Now we have real-time visibility into every prospect, and our follow-up rates have skyrocketed.",
    name: "Sarah L.",
    role: "Director of Operations",
  },
  {
    quote: "Our team loved working with Gabby. She was patient, explained everything clearly, and made sure we could confidently use the system ourselves.",
    name: "Emily K.",
    role: "Head of Client Success",
  },
];

const navLinks = [
  ["The idea", "#explore"],
  ["Learn AI", "#course"],
  ["Work with me", "#work-with-me"],
  ["Case studies", "#selected-work"],
  ["Client notes", "#testimonials"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    document.querySelectorAll("[data-rise]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!hero || reducedMotion.matches) return;

    let animationFrame = 0;

    const updateHeroMotion = () => {
      animationFrame = 0;
      const heroHeight = Math.max(hero.offsetHeight, 1);
      const progress = Math.max(0, Math.min(1, window.scrollY / heroHeight));
      const mobile = window.matchMedia("(max-width: 720px)").matches;
      const strength = mobile ? 1 : 0.68;

      hero.style.setProperty("--hero-copy-y", `${progress * -12 * strength}px`);
      hero.style.setProperty("--hero-main-y", `${progress * -32 * strength}px`);
      hero.style.setProperty("--hero-main-scale", `${(mobile ? 1.13 : 1.1) + progress * (mobile ? 0.055 : 0.032)}`);
      hero.style.setProperty("--hero-boat-x", `${progress * 13 * strength}px`);
      hero.style.setProperty("--hero-boat-y", `${progress * -50 * strength}px`);
      hero.style.setProperty("--hero-tennis-x", `${progress * -10 * strength}px`);
      hero.style.setProperty("--hero-tennis-y", `${progress * 42 * strength}px`);
      hero.style.setProperty("--hero-confidence-y", `${progress * -28 * strength}px`);
      hero.style.setProperty("--hero-question-y", `${progress * 24 * strength}px`);
      hero.style.setProperty("--hero-education-y", `${progress * 17 * strength}px`);
    };

    const requestHeroUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateHeroMotion);
    };

    updateHeroMotion();
    window.addEventListener("scroll", requestHeroUpdate, { passive: true });
    window.addEventListener("resize", requestHeroUpdate);

    return () => {
      window.removeEventListener("scroll", requestHeroUpdate);
      window.removeEventListener("resize", requestHeroUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="ecosystem" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className={`nav-underlay nav-underlay-tan ${menuOpen ? "is-open" : ""}`} aria-hidden="true" />
      <div className={`nav-underlay nav-underlay-yellow ${menuOpen ? "is-open" : ""}`} aria-hidden="true" />
      <header className={`layer-nav ${menuOpen ? "is-open" : ""}`}>
        <div className="layer-nav-bar">
          <a className="layer-wordmark" href="#top" onClick={closeMenu} aria-label="Gab Real Inc. home">
            <span>Gab Real Inc.</span>
          </a>
          <button className="layer-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="layer-menu" onClick={() => setMenuOpen((open) => !open)}>
            <span>{menuOpen ? "Close" : "Menu"}</span>
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={25} strokeWidth={1.5} />}
          </button>
        </div>
        <div className="layer-menu" id="layer-menu" aria-hidden={!menuOpen}>
          <div className="layer-contact">
            <p>Use AI to think more clearly. Build what matters.</p>
            <a href="mailto:hello@gabrealinc.com">hello@gabrealinc.com</a>
            <span>San Diego · working everywhere</span>
          </div>
          <nav aria-label="Main navigation">
            {navLinks.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          </nav>
          <div className="layer-secondary">
            <a href="#more" onClick={closeMenu}>More to life</a>
            <a href="#contact" onClick={closeMenu}>Let’s talk</a>
            <a href="https://growithgab.substack.com/" target="_blank" rel="noreferrer">Writing ↗</a>
            <a href="https://www.instagram.com/aiwithgab/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </div>
      </header>

      <section className="editorial-hero" id="main-content" ref={heroRef}>
        <div className="hero-copy">
          <span className="eyebrow">AI ADVISORY · EDUCATION · CUSTOM BUILDS</span>
          <h1>Use AI to think<br />more clearly.<br /><em>Build what<br />matters.</em></h1>
          <p>Gab Real Inc. helps founders and teams understand AI, make smarter business decisions, and design better ways of working.</p>
          <a className="hero-button" href="#work-with-me">Explore ways to work <ArrowDown size={17} /></a>
        </div>
        <div className="hero-collage" aria-label="A warm editorial collage featuring a martini, a vintage telephone, a speedboat, and a tennis court">
          <figure className="hero-main-image"><img src="/studio-martini.png" alt="Martini beside a vintage telephone and record player" width="816" height="960" fetchPriority="high" /></figure>
          <figure className="hero-polaroid hero-boat"><img src="/studio-boat.png" alt="Woman looking through binoculars on a speedboat" width="816" height="960" /><figcaption>Perspective<br />changes things.</figcaption></figure>
          <figure className="hero-polaroid hero-tennis"><img src="/studio-tennis.png" alt="Martini glass resting on a tennis racket" width="816" height="960" /><figcaption>Aperitivo<br />is a valid KPI.</figcaption></figure>
          <div className="hero-card hero-confidence"><small>CONFIDENCE</small><strong>+ clarity</strong><span aria-hidden="true">⌁⌁⌁</span></div>
          <div className="hero-card hero-question"><small>THE FIRST QUESTION</small><p>What problem<br />are we actually<br />solving?</p><em>start here ↗</em></div>
          <div className="hero-card hero-education">EDUCATION<br />BEFORE<br />IMPLEMENTATION.</div>
        </div>
        <div className="hero-service-line" aria-label="Services"><span>Workshops</span><i /> <span>Advisory</span><i /> <span>Experience design</span><i /> <span>Custom builds</span></div>
      </section>

      <section className="plain-section thesis-section" id="explore" data-rise>
        <div className="section-label"><span>01</span><span>THE IDEA</span></div>
        <div className="thesis-grid">
          <h2>AI should make<br />life feel <em>more human.</em></h2>
          <div>
            <p className="large-copy">The goal is not to use the most AI. It is to remove the work that drains your time and attention.</p>
            <p>I help you understand the tools, choose the useful ones, and keep your voice and judgment in the process.</p>
          </div>
        </div>
      </section>

      <section className="course-section" id="course" data-rise>
        <div className="section-label"><span>02</span><span>LEARN AI</span></div>
        <div className="course-grid">
          <div>
            <span className="eyebrow">SELF-PACED COURSE</span>
            <h2>Use AI without becoming<br /><em>an AI person.</em></h2>
          </div>
          <div className="course-summary">
            <p>Learn what AI can do, where it gets things wrong, how to protect your information, and how to build simple workflows that save time.</p>
            <a className="primary-link light" href="/learn">Explore the course <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <div className="course-path" aria-label="Course learning path"><span>Understand</span><span>Choose</span><span>Set up</span><span>Use</span><span>Improve</span></div>
      </section>

      <section className="plain-section work-section" id="work-with-me" data-rise>
        <div className="section-label"><span>03</span><span>WORK WITH ME</span></div>
        <div className="section-heading">
          <h2>Choose the help<br /><em>you actually need.</em></h2>
          <p>From one useful conversation to a complete system built around your business.</p>
        </div>
        <div className="services">
          <article><span>01</span><h3>Team training</h3><p>Clear, practical sessions that help your team use AI in everyday work and understand where to be careful.</p></article>
          <article><span>02</span><h3>Speaking</h3><p>Keynotes and conversations about AI, the future of work, and what people should still control.</p></article>
          <article><span>03</span><h3>AI advice</h3><p>Ongoing help choosing tools, setting priorities, and making confident decisions as technology changes.</p></article>
          <article><span>04</span><h3>Custom systems</h3><p>Workflows, dashboards, and AI assistants designed around how your business really works.</p></article>
        </div>
        <a className="primary-link" href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Tell me what you’re working on <ArrowUpRight size={18} /></a>
      </section>

      <section className="case-section" id="selected-work" data-rise>
        <div className="section-label"><span>04</span><span>CASE STUDIES</span></div>
        <div className="section-heading">
          <h2>Complicated work,<br /><em>made easier.</em></h2>
          <p>Three examples of what changed, without the technical fog.</p>
        </div>
        <div className="case-list">
          {caseStudies.map((item) => (
            <article className="case-study" key={item.number}>
              <div className="case-title"><span>{item.number} · {item.label}</span><h3>{item.title}</h3></div>
              <dl>
                <div><dt>The problem</dt><dd>{item.problem}</dd></div>
                <div><dt>What I built</dt><dd>{item.built}</dd></div>
                <div><dt>What changed</dt><dd>{item.result}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="plain-section testimonial-section" id="testimonials" data-rise>
        <div className="section-label"><span>05</span><span>CLIENT NOTES</span></div>
        <div className="section-heading testimonial-heading"><h2>Kind words from<br /><em>people I’ve helped.</em></h2></div>
        <div className="testimonials">
          {testimonials.map((item, index) => (
            <blockquote key={item.name}>
              <span>0{index + 1}</span>
              <p>“{item.quote}”</p>
              <footer><strong>{item.name}</strong><small>{item.role}</small></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="more-section" id="more" data-rise>
        <div className="section-label"><span>06</span><span>MORE TO LIFE</span></div>
        <div className="section-heading">
          <h2>Work matters.<br /><em>It isn’t everything.</em></h2>
          <p>The other places I explore identity, creativity, technology, and how we choose to live.</p>
        </div>
        <div className="more-links">
          <a href="https://readfromscratch.com/" target="_blank" rel="noreferrer"><span>THE BOOK</span><h3>From Scratch.</h3><p>Question the life you inherited and create one that feels like yours.</p><ArrowUpRight /></a>
          <a href="https://growithgab.substack.com/" target="_blank" rel="noreferrer"><span>THE WRITING</span><h3>Grow with Gab.</h3><p>Essays about AI, identity, creativity, work, and whatever I cannot stop thinking about.</p><ArrowUpRight /></a>
          <article><span>THE PODCAST</span><h3>Exploit.</h3><p>Honest conversations about technology, creativity, and what comes next.</p><small>COMING SOON</small></article>
        </div>
      </section>

      <section className="final-cta" id="contact" data-rise>
        <span>HAVE A PROJECT, A TEAM, OR A VERY MESSY SYSTEM?</span>
        <h2>Let’s make it<br /><em>actually useful.</em></h2>
        <a href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={24} /></a>
      </section>

      <footer className="ecosystem-footer">
        <a className="footer-wordmark" href="#top">Gab Real Inc.</a>
        <p>Use AI to think more clearly.<br />Build what matters.</p>
        <div><a href="/learn">Learn AI</a><a href="https://growithgab.substack.com/" target="_blank" rel="noreferrer">Writing ↗</a><a href="https://www.instagram.com/aiwithgab/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
      </footer>
    </main>
  );
}
