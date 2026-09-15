"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Check, Play, Sparkles } from "lucide-react";

const automations = [
  { tag: "MEETINGS", title: "The meeting that finishes itself", copy: "Notes become decisions, owners, follow-ups, and a ready-to-send recap before everyone opens another tab." },
  { tag: "KNOWLEDGE", title: "The answer that finds you", copy: "Scattered docs become one plain-language source of truth your team can actually ask questions." },
  { tag: "CREATIVE", title: "The blank-page breaker", copy: "A small spark becomes a useful first draft in your voice, with room for your taste and judgment." },
  { tag: "OPERATIONS", title: "The handoff that never drops", copy: "Intake, routing, status updates, and next steps move forward without the spreadsheet scavenger hunt." },
];

const presets = [
  "Turn client notes into a polished follow-up",
  "Find the answer hidden across our docs",
  "Turn a voice memo into a project plan",
];

type ModelContext = {
  registerTool: (tool: {
    name: string;
    title: string;
    description: string;
    inputSchema: object;
    annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
    execute: (input: unknown) => Promise<object>;
  }, options?: { signal?: AbortSignal }) => void | Promise<void>;
};

export default function Home() {
  const [idea, setIdea] = useState(presets[0]);
  const [running, setRunning] = useState(false);
  const [activeAutomation, setActiveAutomation] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const context = (document as Document & { modelContext?: ModelContext }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({
      name: "configure_possibility_machine",
      title: "Configure the Possibility Machine",
      description: "Put a repetitive task into the visible Gab Real automation demo and run its three-step system.",
      inputSchema: { type: "object", properties: { task: { type: "string", minLength: 3, maxLength: 220 } }, required: ["task"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: true },
      async execute(input) {
        const task = typeof input === "object" && input !== null && "task" in input ? String(input.task).trim() : "";
        if (task.length < 3 || task.length > 220) throw new Error("Task must be between 3 and 220 characters.");
        setIdea(task);
        setRunning(true);
        window.setTimeout(() => setRunning(false), 1400);
        return { task, stages: ["capture", "think", "act"], status: "running" };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  function runDemo() {
    setRunning(false);
    window.setTimeout(() => setRunning(true), 40);
    window.setTimeout(() => setRunning(false), 1450);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="wordmark">GAB REAL<span>®</span></a>
        <div className="nav-links"><a href="#learn">Learn</a><a href="#build">Build</a><a href="#about">About</a></div>
        <a className="nav-cta" href="#contact">Make it real <ArrowUpRight size={15} /></a>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><Asterisk size={14} /> AI education + automation studio</p>
          <h1>Learn AI.<br />Build <em>better</em> work.</h1>
          <p className="lede">Gab Real helps people and teams understand AI, automate the work that drains them, and use the time they get back to make something that matters.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">Start with Gab <ArrowUpRight size={16} /></a>
            <a className="text-link" href="#build">See how it works <ArrowDown size={15} /></a>
          </div>
        </div>

        <div className="automation-lab" aria-label="Interactive automation example">
          <div className="lab-topline"><span>THE POSSIBILITY MACHINE</span><span>01 / LIVE</span></div>
          <div className="lab-body">
            <label htmlFor="automation-idea">What should AI take off your plate?</label>
            <textarea id="automation-idea" value={idea} onChange={(event) => setIdea(event.target.value)} />
            <div className="preset-row" aria-label="Example ideas">
              {presets.map((preset, index) => <button type="button" key={preset} onClick={() => setIdea(preset)}>0{index + 1}</button>)}
            </div>
            <button onClick={runDemo} className="run-button" type="button"><Play size={14} fill="currentColor" /> Show me the system</button>
            <div className={`flow ${running ? "is-running" : ""}`}>
              <div><b>01</b><span>Capture</span><small>A signal arrives</small></div><i />
              <div><b>02</b><span>Think</span><small>AI finds the meaning</small></div><i />
              <div><b>03</b><span>Act</span><small>The next step is ready</small></div>
            </div>
          </div>
          <p className="lab-note">No jargon. No hype. Just one useful system at a time.</p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><span>AI FOR REAL PEOPLE</span><i>✦</i><span>AUTOMATION WITH A POINT OF VIEW</span><i>✦</i><span>LESS BUSYWORK, MORE HUMAN WORK</span></div>

      <section id="learn" className="belief-section section-pad">
        <p className="section-index">01 / THE BELIEF</p>
        <div className="belief-grid">
          <h2>AI should make you feel more <em>capable</em>, not less human.</h2>
          <div className="belief-copy">
            <p>You do not need to become a technologist. You need a translator, a safe place to experiment, and a few systems that genuinely change your day.</p>
            <p>That is the Gab Real difference: education and implementation happen together. You leave knowing what was built, why it works, and how to keep shaping it.</p>
          </div>
        </div>
        <div className="proof-strip">
          <div><strong>NO.</strong><span>Black-box consulting</span></div>
          <div><strong>YES.</strong><span>Skills that stay with you</span></div>
          <div><strong>ALWAYS.</strong><span>Human judgment in the loop</span></div>
        </div>
      </section>

      <section id="build" className="systems-section section-pad">
        <div className="systems-header"><p className="section-index">02 / WHAT WE BUILD</p><h2>Small systems.<br /><em>Big shifts.</em></h2></div>
        <div className="system-browser">
          <div className="system-list" role="tablist" aria-label="Automation ideas">
            {automations.map((item, index) => (
              <button className={activeAutomation === index ? "active" : ""} key={item.title} onClick={() => setActiveAutomation(index)} role="tab" aria-selected={activeAutomation === index}>
                <span>0{index + 1}</span>{item.title}<ArrowRight size={17} />
              </button>
            ))}
          </div>
          <div className="system-detail" role="tabpanel">
            <span>{automations[activeAutomation].tag}</span>
            <h3>{automations[activeAutomation].title}</h3>
            <p>{automations[activeAutomation].copy}</p>
            <div className="before-after"><small>BEFORE</small><b>Manual. Repetitive. Easy to miss.</b><ArrowDown size={18} /><small>AFTER</small><b>Automatic. Reviewable. Still yours.</b></div>
          </div>
        </div>
      </section>

      <section className="offers-section" aria-labelledby="offers-heading">
        <div className="offers-intro section-pad"><p className="section-index">03 / WAYS TO WORK</p><h2 id="offers-heading">Meet people<br />where they are.</h2><p>From “what even is a prompt?” to “let’s redesign this whole workflow.”</p></div>
        <div className="offer-grid">
          <article><span>01</span><Sparkles size={28} strokeWidth={1.2} /><h3>AI, but make it make sense</h3><p>Workshops that turn curiosity and anxiety into confidence, fluency, and an actual point of view.</p><a href="#contact">Bring Gab to your team <ArrowUpRight size={15} /></a></article>
          <article><span>02</span><Asterisk size={28} strokeWidth={1.2} /><h3>Your first useful automation</h3><p>We find one stubborn process and build a working system around the way you already think.</p><a href="#contact">Build something useful <ArrowUpRight size={15} /></a></article>
          <article><span>03</span><ArrowRight size={28} strokeWidth={1.2} /><h3>The whole new way of working</h3><p>Strategy, team learning, and custom automations for organizations ready to move with intention.</p><a href="#contact">Rethink the system <ArrowUpRight size={15} /></a></article>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-image"><img src="/gab-real-sculpture.png" alt="A glass ribbon woven through a chrome knot, with a small acid-yellow sphere" /><span>HUMAN × MACHINE × POSSIBILITY</span></div>
        <div className="about-copy section-pad">
          <p className="section-index">04 / WHY GAB REAL</p>
          <h2>Serious about the future.<br /><em>Not serious about gatekeeping it.</em></h2>
          <p className="about-lede">Gabby makes the complicated click.</p>
          <p>Part strategist, part teacher, part builder, she creates the kind of room where people can ask the obvious question, try the weird idea, and leave with something real.</p>
          <blockquote>“The future should not belong to the people who understood the demo first.”</blockquote>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <p className="section-index">05 / START HERE</p>
        <div className="contact-grid">
          <h2>What is the one thing at work you never want to do <em>again?</em></h2>
          <form onSubmit={submit}>
            {sent ? <div className="success-message"><Check size={30} /><h3>That is exactly where we start.</h3><p>Your note is saved in this preview. Connect this form to your inbox when you are ready to launch publicly.</p></div> : <>
              <label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="First name is perfect" />
              <label htmlFor="email">Email</label><input id="email" name="email" type="email" required placeholder="you@work.com" />
              <label htmlFor="stuck">The thing that is stuck</label><textarea id="stuck" name="stuck" required placeholder="Every Friday, I spend three hours..." />
              <button className="submit-button" type="submit">Send the messy version <ArrowUpRight size={17} /></button>
            </>}
          </form>
        </div>
      </section>

      <footer><a href="#top" className="wordmark">GAB REAL<span>®</span></a><p>LEARN IT. BUILD IT. MAKE IT MATTER.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
