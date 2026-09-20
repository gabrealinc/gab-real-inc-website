"use client";

import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const philosophyStatement = "Ask harder questions. Challenge what’s normal. Have an actual say in the future we’re building.";
const philosophySupport = "You don’t have to use AI, or even like it, to have a point of view.";
const philosophyWords = philosophyStatement.split(" ");
const katieTestimonial = "She is a true unicorn of a human in all of the ways… and among the bevy of things she is incredible at, she is a TRUE MAVEN at all things AI. What I find most incredible about her perspective and insight on AI is how effortlessly she makes it make sense. She is able to immediately demystify things that otherwise feel intimidating, confusing or overwhelming to those of us (aka: me) who feel like dinosaurs learning about a whole new world of technology. At times, I feel like she is singlehandedly coaching me through a journey of how to function more efficiently and strategically with the help of these insane new tools that we have at our fingertips.";

const courseSteps = [
  { title: "Understand", copy: "Know what AI is doing, what it is guessing, and where human judgment still matters." },
  { title: "Choose", copy: "Decide which tools deserve a place in your work and which ones are more noise than help." },
  { title: "Set up", copy: "Give the tool useful context, clear boundaries, and information you are comfortable sharing." },
  { title: "Use", copy: "Ask better questions, check the answer, and keep your own voice and judgment in the process." },
  { title: "Improve", copy: "Notice what works, remove what does not, and build a practice that gets more useful over time." },
];

const services = [
  { title: "Team training", label: "Learn together", copy: "Clear, practical sessions that help your team use AI in everyday work and understand where to be careful.", fit: "Best when people need a shared language and a confident place to begin." },
  { title: "Speaking", label: "Start the conversation", copy: "Keynotes and conversations about AI, the future of work, and what people should still control.", fit: "Best for events, leadership gatherings, and teams navigating change." },
  { title: "AI advice", label: "Make better decisions", copy: "Ongoing help choosing tools, setting priorities, and making confident decisions as technology changes.", fit: "Best when the questions keep changing and you want a trusted thinking partner." },
  { title: "Custom systems", label: "Build what is useful", copy: "Workflows, dashboards, and AI assistants designed around how your business really works.", fit: "Best when the problem is clear and the current process is costing too much time." },
];

const bookLeaves = [
  [
    { eyebrow: "GABRIELLE GREENBERG + RYAN WELTI", title: "FROM SCRATCH", copy: "Creating a life that feels like yours.", cover: true },
    { eyebrow: "START HERE", title: "Who decided what success should look like?", copy: "Turn the page to question the definitions you inherited." },
  ],
  [
    { eyebrow: "PART ONE", title: "Question the default.", copy: "Notice the rules, expectations, and identities you accepted without choosing." },
    { eyebrow: "PART TWO", title: "Define success for yourself.", copy: "Build a definition that belongs to your actual life, not somebody else’s." },
  ],
  [
    { eyebrow: "THE SCENIC ROUTE", title: "Your nonlinear path still counts.", copy: "You are allowed to evolve, change your mind, and begin again." },
    { eyebrow: "FROM SCRATCH", title: "A place honest enough to begin.", copy: "239 pages · 12 chapters · 4 parts", back: true },
  ],
];

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

const navLinks = [
  ["The idea", "#explore"],
  ["Learn AI", "#course"],
  ["Work with me", "#work-with-me"],
  ["Case studies", "#selected-work"],
  ["Client note", "#testimonial"],
  ["More to life", "#more"],
];

function LiquidDivider({ top, bottom }: { top: string; bottom: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let running = true;
    let lastScroll = window.scrollY;
    let energy = 0;
    let direction = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * ratio));
      canvas.height = Math.max(1, Math.round(rect.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const onScroll = () => {
      const delta = window.scrollY - lastScroll;
      if (Math.abs(delta) > 1) direction = Math.sign(delta);
      energy = Math.min(34, energy + Math.abs(delta) * .18);
      lastScroll = window.scrollY;
    };
    const draw = (time = 0) => {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      context.fillStyle = bottom;
      context.fillRect(0, 0, width, height);

      const amplitude = reducedMotion ? 4 : 7 + energy;
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0, height * .48);
      for (let x = 0; x <= width + 8; x += 8) {
        const wave = Math.sin(x * .012 + time * .0011 * direction) * amplitude;
        const ripple = Math.sin(x * .031 - time * .0018 * direction) * amplitude * .32;
        context.lineTo(x, height * .48 + wave + ripple);
      }
      context.lineTo(width, 0);
      context.closePath();
      context.fillStyle = top;
      context.fill();

      context.beginPath();
      for (let x = 0; x <= width + 8; x += 8) {
        const y = height * .49 + Math.sin(x * .014 + time * .0013 * direction) * amplitude * .7;
        if (x === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.strokeStyle = "rgba(23,23,20,.4)";
      context.lineWidth = 2;
      context.stroke();
      energy *= .92;
      if (running && !reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running && !reducedMotion) {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(draw);
      }
    });
    resize();
    draw();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      running = false;
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [top, bottom]);

  return <div className="liquid-divider" aria-hidden="true" style={{ background: bottom }}><canvas ref={canvasRef} /></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [caseFolderOpen, setCaseFolderOpen] = useState(true);
  const [activeCase, setActiveCase] = useState(0);
  const [philosophyLitCount, setPhilosophyLitCount] = useState(0);
  const [bookPage, setBookPage] = useState(0);
  const [activeCourseStep, setActiveCourseStep] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [moreIndex, setMoreIndex] = useState(0);
  const [curtainPhase, setCurtainPhase] = useState<"closed" | "open" | "done">("closed");
  const philosophyRef = useRef<HTMLElement>(null);
  const moreTouchStart = useRef<number | null>(null);
  const selectedCase = caseStudies[activeCase];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurtainPhase("done");
      return;
    }
    const openTimer = window.setTimeout(() => setCurtainPhase("open"), 80);
    const doneTimer = window.setTimeout(() => setCurtainPhase("done"), 980);
    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

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
    const section = philosophyRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!section) return;
    if (reducedMotion) {
      setPhilosophyLitCount(philosophyWords.length);
      return;
    }

    let animationFrame = 0;
    let previousCount = -1;
    const updateWords = () => {
      animationFrame = 0;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / distance));
      const nextCount = Math.ceil(progress * philosophyWords.length);
      if (nextCount !== previousCount) {
        previousCount = nextCount;
        setPhilosophyLitCount(nextCount);
      }
    };
    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateWords);
    };

    updateWords();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="ecosystem" id="top">
      {curtainPhase !== "done" && (
        <div className={`curtain-reveal ${curtainPhase === "open" ? "is-open" : ""}`} aria-hidden="true">
          <div /><div /><span>Gab Real Inc.</span>
        </div>
      )}
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

      <section className="editorial-hero" id="main-content">
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

      <section className="philosophy-section" id="explore" ref={philosophyRef}>
        <div className="philosophy-sticky">
          <div className="section-label"><span>01</span><span>THE PHILOSOPHY</span></div>
          <div className="philosophy-copy-wrap">
            <span className="eyebrow">A HUMAN-FIRST POINT OF VIEW</span>
            <h2 className="philosophy-headline"><span>It’s time to</span><em>think bigger.</em></h2>
            <p className="philosophy-statement" aria-label={philosophyStatement}>
              {philosophyWords.map((word, index) => (
                <span className={index < philosophyLitCount ? "is-lit" : ""} aria-hidden="true" key={`${word}-${index}`}>{word}{" "}</span>
              ))}
            </p>
            <p className="philosophy-support">{philosophySupport}</p>
          </div>
          <div className="philosophy-footer">
            <p>When we understand something, we can make better choices about what happens next.</p>
            <div className="philosophy-progress" aria-hidden="true"><i style={{ width: `${(philosophyLitCount / philosophyWords.length) * 100}%` }} /></div>
          </div>
        </div>
      </section>

      <LiquidDivider top="#f4efe3" bottom="#b6350b" />

      <section className="course-section" id="course" data-rise>
        <div className="section-label"><span>02</span><span>LEARN AI</span></div>
        <div className="course-grid">
          <div>
            <span className="eyebrow">SELF-PACED COURSE</span>
            <h2>Use AI without having to<br /><em>become an engineer.</em></h2>
          </div>
          <div className="course-summary">
            <p>Learn what AI can do, where it gets things wrong, how to protect your information, and how to build simple workflows that save time.</p>
            <a className="primary-link light" href="/learn">Explore the course <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <div className="course-flipper" role="tablist" aria-label="Course learning path">
          {courseSteps.map((step, index) => (
            <button
              className={activeCourseStep === index ? "is-active" : ""}
              type="button"
              role="tab"
              aria-selected={activeCourseStep === index}
              onClick={() => setActiveCourseStep(index)}
              onMouseEnter={() => setActiveCourseStep(index)}
              key={step.title}
            >
              <span>0{index + 1}</span><strong>{step.title}</strong><p>{step.copy}</p>
            </button>
          ))}
        </div>
      </section>

      <LiquidDivider top="#b6350b" bottom="#f4efe3" />

      <section className="plain-section work-section" id="work-with-me" data-rise>
        <div className="section-label"><span>03</span><span>WORK WITH ME</span></div>
        <div className="section-heading">
          <h2>Choose the help<br /><em>you actually need.</em></h2>
          <p>From one useful conversation to a complete system built around your business.</p>
        </div>
        <div className="service-switcher">
          <div className="service-tabs" role="tablist" aria-label="Ways to work together">
            {services.map((service, index) => (
              <button
                className={activeService === index ? "is-active" : ""}
                type="button"
                role="tab"
                aria-selected={activeService === index}
                aria-controls="service-panel"
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
                key={service.title}
              >
                <span>0{index + 1}</span>{service.title}
              </button>
            ))}
          </div>
          <article className="service-panel" id="service-panel" role="tabpanel" aria-live="polite">
            <span>{services[activeService].label}</span>
            <h3>{services[activeService].title}</h3>
            <p>{services[activeService].copy}</p>
            <small>{services[activeService].fit}</small>
          </article>
        </div>
        <a className="primary-link" href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Tell me what you’re working on <ArrowUpRight size={18} /></a>
      </section>

      <section className="case-section" id="selected-work" data-rise>
        <div className="section-label"><span>04</span><span>CASE STUDIES</span></div>
        <div className="section-heading">
          <h2>Complicated work,<br /><em>made easier.</em></h2>
          <p>Three examples of what changed, without the technical fog.</p>
        </div>
        <div className={`case-folder-experience ${caseFolderOpen ? "is-open" : ""}`}>
          <div className="case-folder-stage" role="group" aria-label="Case study folder">
            <div className="case-folder-shadow" aria-hidden="true" />
            <div className="case-folder-back" aria-hidden="true"><span /></div>
            <div className="case-paper-stack" id="case-study-papers" role="tablist" aria-label="Choose a case study">
              {caseStudies.map((item, index) => (
                <button
                  className={`case-paper case-paper-${index + 1} ${activeCase === index ? "is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={activeCase === index}
                  aria-controls="case-study-details"
                  tabIndex={caseFolderOpen ? 0 : -1}
                  onClick={() => setActiveCase(index)}
                  key={item.number}
                >
                  <span>{item.number}</span>
                  <small>{item.label}</small>
                  <strong>{item.title}</strong>
                  <i>Open file ↗</i>
                </button>
              ))}
            </div>
            <div className="case-folder-front">
              <button
                className="case-folder-toggle"
                type="button"
                aria-expanded={caseFolderOpen}
                aria-controls="case-study-papers"
                onClick={() => setCaseFolderOpen((open) => !open)}
              >
                <span>Case files</span>
                <small>{caseFolderOpen ? "Close folder" : "Open folder"}</small>
              </button>
              <div className="case-folder-dots" aria-hidden="true">
                {caseStudies.map((item, index) => <i className={activeCase === index ? "is-active" : ""} key={item.number} />)}
              </div>
            </div>
          </div>

          <article className="case-folder-detail" id="case-study-details" role="tabpanel" aria-live="polite">
            <div className="case-title">
              <span>{selectedCase.number} · {selectedCase.label}</span>
              <h3>{selectedCase.title}</h3>
            </div>
            <dl>
              <div><dt>The problem</dt><dd>{selectedCase.problem}</dd></div>
              <div><dt>What I built</dt><dd>{selectedCase.built}</dd></div>
              <div><dt>What changed</dt><dd>{selectedCase.result}</dd></div>
            </dl>
            <div className="case-folder-index" aria-label="Choose a case study">
              {caseStudies.map((item, index) => (
                <button className={activeCase === index ? "is-active" : ""} type="button" onClick={() => { setActiveCase(index); setCaseFolderOpen(true); }} key={item.number}>
                  <span>{item.number}</span>{item.label}
                </button>
              ))}
            </div>
          </article>
        </div>
      </section>

      <LiquidDivider top="#f4efe3" bottom="#171714" />

      <section className="featured-testimonial" id="testimonial" data-rise>
        <div className="section-label"><span>05</span><span>CLIENT NOTE</span></div>
        <figure className="featured-quote">
          <span aria-hidden="true">“</span>
          <blockquote>
            <p>{katieTestimonial}</p>
            <figcaption><strong>Katie Kuhn</strong><small>Client testimonial</small></figcaption>
          </blockquote>
        </figure>
      </section>

      <LiquidDivider top="#171714" bottom="#f4efe3" />

      <section className="more-section" id="more" data-rise>
        <div className="section-label"><span>06</span><span>MORE TO LIFE</span></div>
        <div className="section-heading">
          <h2>Work matters.<br /><em>It isn’t everything.</em></h2>
          <p>The other places I explore identity, creativity, technology, and how we choose to live.</p>
        </div>
        <div
          className="more-carousel"
          onTouchStart={(event) => { moreTouchStart.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            if (moreTouchStart.current === null) return;
            const distance = (event.changedTouches[0]?.clientX ?? moreTouchStart.current) - moreTouchStart.current;
            if (Math.abs(distance) > 45) setMoreIndex((index) => Math.max(0, Math.min(2, index + (distance < 0 ? 1 : -1))));
            moreTouchStart.current = null;
          }}
        >
          <div className="more-carousel-track">
          <article className={`more-card from-scratch-feature ${moreIndex === 0 ? "is-active" : ""}`} data-position={0 - moreIndex} onClick={() => setMoreIndex(0)}>
            <span>THE BOOK</span>
            <div className={`interactive-book-stage ${bookPage > 0 ? "is-open" : ""}`}>
              <button
                className="interactive-book"
                type="button"
                onClick={() => setBookPage((page) => page >= bookLeaves.length ? 0 : page + 1)}
                aria-label={bookPage >= bookLeaves.length ? "Close From Scratch book" : `Turn to page ${bookPage + 1} of From Scratch`}
              >
                <span className="book-volume">
                  {bookLeaves.map(([front, back], index) => (
                    <span className={`book-leaf ${index < bookPage ? "is-flipped" : ""}`} style={{ zIndex: index === bookPage - 1 ? 20 : index < bookPage ? index + 1 : bookLeaves.length - index }} key={front.eyebrow}>
                      <span className={`book-face book-face-front ${front.cover ? "is-cover" : ""}`}>
                        <small>{front.eyebrow}</small><strong>{front.title}</strong><i>{front.copy}</i><b aria-hidden="true" />
                      </span>
                      <span className={`book-face book-face-back ${back.back ? "is-back-cover" : ""}`}>
                        <small>{back.eyebrow}</small><strong>{back.title}</strong><i>{back.copy}</i><b aria-hidden="true" />
                      </span>
                    </span>
                  ))}
                </span>
              </button>
              <small className="book-instruction">Tap the book to turn the page · {bookPage}/{bookLeaves.length}</small>
            </div>
            <a className="from-scratch-copy" href="https://readfromscratch.com/" target="_blank" rel="noreferrer">
              <h3>From Scratch.</h3><p>Question the life you inherited and create one that feels like yours.</p><ArrowUpRight />
            </a>
          </article>
          <a className={`more-card more-writing ${moreIndex === 1 ? "is-active" : ""}`} data-position={1 - moreIndex} onClick={(event) => { if (moreIndex !== 1) { event.preventDefault(); setMoreIndex(1); } }} href="https://growithgab.substack.com/" target="_blank" rel="noreferrer" tabIndex={moreIndex === 1 ? 0 : -1}><span>THE WRITING</span><h3>Grow with Gab.</h3><p>Essays about AI, identity, creativity, work, and whatever I cannot stop thinking about.</p><ArrowUpRight /></a>
          <article className={`more-card more-podcast ${moreIndex === 2 ? "is-active" : ""}`} data-position={2 - moreIndex} onClick={() => setMoreIndex(2)}><span>THE PODCAST</span><h3>Exploit.</h3><p>Honest conversations about technology, creativity, and what comes next.</p><small>COMING SOON</small></article>
          </div>
          <div className="more-carousel-controls">
            <button type="button" onClick={() => setMoreIndex((index) => Math.max(0, index - 1))} disabled={moreIndex === 0} aria-label="Previous item">←</button>
            <span>0{moreIndex + 1} / 03</span>
            <button type="button" onClick={() => setMoreIndex((index) => Math.min(2, index + 1))} disabled={moreIndex === 2} aria-label="Next item">→</button>
          </div>
        </div>
      </section>

      <LiquidDivider top="#f4efe3" bottom="#b6350b" />

      <section className="final-cta" id="contact" data-rise>
        <span>HAVE A PROJECT, A TEAM, OR A VERY MESSY SYSTEM?</span>
        <h2>Let’s make it<br /><em>actually useful.</em></h2>
        <a href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={24} /></a>
      </section>

      <LiquidDivider top="#b6350b" bottom="#171714" />

      <footer className="ecosystem-footer">
        <a className="footer-wordmark" href="#top">Gab Real Inc.</a>
        <p>Use AI to think more clearly.<br />Build what matters.</p>
        <div><a href="/learn">Learn AI</a><a href="https://growithgab.substack.com/" target="_blank" rel="noreferrer">Writing ↗</a><a href="https://www.instagram.com/aiwithgab/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
      </footer>
    </main>
  );
}
