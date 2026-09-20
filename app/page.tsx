"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { approvedTestimonialFallback, type Testimonial } from "./testimonial-data";
import { SiteNavigation } from "./site-navigation";

const philosophyStatement = "Ask harder questions. Challenge what’s normal. Have an actual say in the future we’re building.";
const philosophySupport = "You don’t have to use AI, or even like it, to have a point of view.";
const philosophyWords = philosophyStatement.split(" ");
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

const heroServices = ["Team training", "Speaking", "AI advice", "Custom systems"];

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
  const [philosophyLitCount, setPhilosophyLitCount] = useState(0);
  const [bookPage, setBookPage] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [moreIndex, setMoreIndex] = useState(0);
  const [morePaused, setMorePaused] = useState(false);
  const [moreInView, setMoreInView] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(approvedTestimonialFallback);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [curtainPhase, setCurtainPhase] = useState<"closed" | "open" | "done">("closed");
  const heroRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const moreCarouselRef = useRef<HTMLDivElement>(null);
  const moreTouchStart = useRef<number | null>(null);

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
    const controller = new AbortController();
    fetch("/api/testimonials", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Testimonials unavailable")))
      .then((payload: { configured?: boolean; testimonials?: Testimonial[] }) => {
        if (payload.configured) {
          setTestimonials(payload.testimonials ?? []);
          setTestimonialIndex(0);
        }
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const carousel = moreCarouselRef.current;
    if (!carousel) return;
    const observer = new IntersectionObserver(([entry]) => setMoreInView(entry.isIntersecting), { threshold: .55 });
    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!moreInView || morePaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const delay = moreIndex === 0 ? 12000 : 8000;
    const timer = window.setTimeout(() => setMoreIndex((index) => (index + 1) % 3), delay);
    return () => window.clearTimeout(timer);
  }, [moreInView, morePaused, moreIndex]);

  useEffect(() => {
    const hero = heroRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hero || reducedMotion) return;

    let animationFrame = 0;
    const updateHero = () => {
      animationFrame = 0;
      const rect = hero.getBoundingClientRect();
      const distance = Math.max(1, rect.height * .82);
      const progress = Math.max(0, Math.min(1, -rect.top / distance));
      hero.style.setProperty("--hero-scroll", progress.toFixed(3));
    };
    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateHero);
    };

    updateHero();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
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

  return (
    <main className="ecosystem" id="top">
      {curtainPhase !== "done" && (
        <div className={`curtain-reveal ${curtainPhase === "open" ? "is-open" : ""}`} aria-hidden="true">
          <div /><div /><span>Gab Real Inc.</span>
        </div>
      )}
      <a className="skip-link" href="#main-content">Skip to content</a>

      <SiteNavigation />

      <section className="editorial-hero" id="main-content" ref={heroRef}>
        <div className="hero-collage" aria-label="A surreal retro scene about technology, imagination, and possibility">
          <figure className="hero-main-image"><img src="/course-cosmic.png" alt="A retro illustration of a woman working on a laptop inside a glowing orange galaxy" width="864" height="1536" fetchPriority="high" /></figure>
          <div className="hero-card hero-confidence"><small>CONFIDENCE</small><strong>+ clarity</strong><span aria-hidden="true">⌁⌁⌁</span></div>
          <a className="hero-card hero-question" href="/learn" aria-label="Start with the AI course"><small>THE FIRST QUESTION</small><p>What problem<br />are we actually<br />solving?</p><em>start here ↗</em></a>
        </div>
        <div className="hero-copy">
          <span className="eyebrow">AI ADVISORY · EDUCATION · CUSTOM BUILDS</span>
          <h1><span>Use AI to think</span><span>more clearly.</span><strong>Build what matters.</strong></h1>
          <p>Gab Real Inc. helps founders and teams understand AI, make smarter business decisions, and design better ways of working.</p>
          <a className="hero-button" href="#work-with-me">Explore ways to work <ArrowDown size={17} /></a>
        </div>
        <div className="hero-service-line" aria-label="Services: team training, speaking, AI advice, and custom systems">
          <div className="hero-service-track" aria-hidden="true">
            {[...heroServices, ...heroServices].map((service, index) => <span key={`${service}-${index}`}>{service}<i /></span>)}
          </div>
        </div>
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
          <div className="course-heading">
            <span className="eyebrow">AI WITHOUT THE BULLSHIT</span>
            <h2>Learn AI without having to <em>become an engineer.</em></h2>
          </div>
          <div className="course-summary">
            <p>Most AI courses throw a million tools at you or try to sell you more. This one teaches you how to decide what is actually worth using, what to leave alone, and how to build tools that work for your real life. Less stress. Better work. More time to touch grass.</p>
            <a className="primary-link light" href="/learn">See what changes <ArrowUpRight size={18} /></a>
            <figure className="course-visual">
              <img src="/course-work.png" alt="Hands typing on a retro keyboard beside a notebook and coffee" />
              <figcaption>More effective. More creative. More human.</figcaption>
            </figure>
          </div>
        </div>
        <div className="course-offer-bar" aria-label="Course details">
          <span><strong>Use less, better</strong><small>Know which tools deserve your time and which do not.</small></span>
          <span><strong>Build for your real life</strong><small>Create useful workflows instead of collecting generic hacks.</small></span>
          <span><strong>Stay human</strong><small>Save time without giving up your judgment, voice, or creativity.</small></span>
          <a href="/learn">Explore the transformation <ArrowUpRight size={17} /></a>
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

      <LiquidDivider top="#f4efe3" bottom="#171714" />

      {testimonials.length > 0 && <section className="featured-testimonial" id="testimonial" data-rise>
        <div className="section-label"><span>04</span><span>CLIENT NOTES</span></div>
        <figure className="featured-quote">
          <span aria-hidden="true">“</span>
          <blockquote>
            <p>{testimonials[testimonialIndex]?.quote}</p>
            <figcaption>
              <span><strong>{testimonials[testimonialIndex]?.name}</strong><small>{testimonials[testimonialIndex]?.title || testimonials[testimonialIndex]?.service}</small></span>
              {testimonials.length > 1 && <span className="testimonial-controls" aria-label="Choose a testimonial">
                {testimonials.map((testimonial, index) => <button className={index === testimonialIndex ? "is-active" : ""} type="button" aria-label={`Show testimonial from ${testimonial.name}`} onClick={() => setTestimonialIndex(index)} key={testimonial.id}>{String(index + 1).padStart(2, "0")}</button>)}
              </span>}
            </figcaption>
          </blockquote>
        </figure>
        <a className="testimonial-more" href="/testimonials">See more client notes <ArrowUpRight size={18} /></a>
      </section>}

      <LiquidDivider top="#171714" bottom="#f4efe3" />

      <section className="more-section" id="more" data-rise>
        <div className="section-label"><span>05</span><span>MORE TO LIFE</span></div>
        <div className="section-heading">
          <h2>Work matters.<br /><em>It isn’t everything.</em></h2>
          <p>The other places I explore identity, creativity, technology, and how we choose to live.</p>
        </div>
        <div
          className="more-carousel"
          ref={moreCarouselRef}
          onMouseEnter={() => setMorePaused(true)}
          onMouseLeave={() => setMorePaused(false)}
          onFocus={() => setMorePaused(true)}
          onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setMorePaused(false); }}
          onTouchStart={(event) => { setMorePaused(true); moreTouchStart.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            if (moreTouchStart.current === null) return;
            const distance = (event.changedTouches[0]?.clientX ?? moreTouchStart.current) - moreTouchStart.current;
            if (Math.abs(distance) > 45) setMoreIndex((index) => Math.max(0, Math.min(2, index + (distance < 0 ? 1 : -1))));
            moreTouchStart.current = null;
            setMorePaused(false);
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
                        {front.cover
                          ? <img className="book-cover-image" src="/from-scratch-cover.png" alt="From Scratch: Creating a Life That Feels Like Yours" />
                          : <><small>{front.eyebrow}</small><strong>{front.title}</strong><i>{front.copy}</i><b aria-hidden="true" /></>}
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
        <h2>Let’s make AI <em>actually useful</em><br />and create a better future, <em>together.</em></h2>
        <a href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={24} /></a>
      </section>

      <LiquidDivider top="#b6350b" bottom="#171714" />

      <footer className="ecosystem-footer">
        <a className="footer-wordmark brand-wordmark" href="#top" aria-label="Gab Real Inc. home"><span>GAB REAL INC</span><sup>®</sup></a>
        <p>Use AI to think more clearly.<br />Build what matters.</p>
        <div><a href="/about">About</a><a href="/services">Services</a><a href="/testimonials">Testimonials</a><a href="/learn">Course</a><a href="/case-studies">Case studies</a></div>
      </footer>
    </main>
  );
}
