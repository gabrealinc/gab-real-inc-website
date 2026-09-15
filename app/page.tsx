"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Check, Play, Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const automations = [
  { tag: "MEETINGS", title: "The meeting that finishes itself", copy: "Notes become decisions, owners, follow-ups, and a ready-to-send recap before everyone opens another tab." },
  { tag: "KNOWLEDGE", title: "The answer that finds you", copy: "Scattered docs become one plain-language source of truth your team can actually ask questions." },
  { tag: "CREATIVE", title: "The blank-page breaker", copy: "A small spark becomes a useful first draft in your voice, with room for your taste and judgment." },
  { tag: "OPERATIONS", title: "The handoff that never drops", copy: "Intake, routing, status updates, and next steps move forward without the spreadsheet scavenger hunt." },
];

const demos = [
  { label: "Follow-ups", input: "Client call: keep the launch on June 12. Maya sends revised copy by Friday. We need approval on the homepage.", steps: ["Read the notes", "Find decisions + owners", "Draft the follow-up"], result: "Hi team, we’re keeping June 12 as our launch date. Maya will share revised copy by Friday. Please review and approve the homepage so we can move forward.", review: "Confirm dates, owners, and tone before sending." },
  { label: "Find answers", input: "Question: When should a new client receive their welcome pack? Sample onboarding guide, section 2: send it within one business day of the signed agreement.", steps: ["Search the guide", "Locate the source", "Answer with context"], result: "Send the welcome pack within one business day after the agreement is signed. Source: sample onboarding guide, section 2.", review: "Check that the guide is current and applies to this client." },
  { label: "Plan projects", input: "Voice memo: Let’s run an AI workshop next month. First ask the team what feels confusing, then choose three everyday tasks and build a practice session.", steps: ["Capture the idea", "Sequence the work", "Draft the plan"], result: "1. Survey the team this week.\n2. Select three recurring tasks from their answers.\n3. Build a hands-on practice session.\n4. Choose a workshop date for next month.", review: "Assign owners and agree on dates before adding tasks to your calendar." },
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
  const [demoIndex, setDemoIndex] = useState("0");
  const [showResult, setShowResult] = useState(false);
  const demo = demos[Number(demoIndex)];
  const [activeAutomation, setActiveAutomation] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const context = (document as Document & { modelContext?: ModelContext }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({
      name: "configure_possibility_machine",
      title: "Configure the Possibility Machine",
      description: "Select and reveal a prepared automation demonstration. This does not run AI or send data.",
      inputSchema: { type: "object", properties: { example: { type: "integer", minimum: 0, maximum: 2 } }, required: ["example"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: true },
      async execute(input) {
        const example = typeof input === "object" && input !== null && "example" in input ? input.example : undefined;
        if (typeof example !== "number" || !Number.isInteger(example) || example < 0 || example > 2) throw new Error("Choose example 0, 1, or 2.");
        setDemoIndex(String(example)); setShowResult(true);
        await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
        return { example, result: demos[example].result, review: demos[example].review, status: "demonstration" };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  function runDemo() {
    setShowResult(value => !value);
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
          <h1>Use AI to think<br />more clearly.<br /><em>Build what<br />matters.</em></h1>
          <p className="lede">Gab Real helps founders and teams learn AI, automate repetitive work, and build better ways of working.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">Start with Gab <ArrowUpRight size={16} /></a>
            <a className="text-link" href="#build">See how it works <ArrowDown size={15} /></a>
          </div>
        </div>

        <div className="automation-lab" aria-label="Interactive automation example">
          <div className="lab-topline"><span>THE POSSIBILITY MACHINE</span><span>DEMONSTRATION</span></div>
          <div className="lab-body">
            <h2>What could come<br /><em>off your plate?</em></h2>
            <Tabs value={demoIndex} onValueChange={value => { setDemoIndex(value); setShowResult(false); }} className="demo-tabs">
              <TabsList aria-label="Choose a demonstration" className="demo-choices">{demos.map((item,index) => <TabsTrigger key={item.label} value={String(index)}>{item.label}</TabsTrigger>)}</TabsList>
              {demos.map((item,index) => <TabsContent key={item.label} value={String(index)}><p className="demo-caption">SAMPLE INPUT</p><p className="demo-input">{item.input}</p></TabsContent>)}
            </Tabs>
            <ol className="demo-steps">{demo.steps.map((step,index) => <li key={step}><span>0{index+1}</span>{step}</li>)}</ol>
            <button onClick={runDemo} className="run-button" type="button" aria-expanded={showResult} aria-controls="demo-result"><Play size={14} /> {showResult ? "Hide sample result" : "Show sample result"}</button>
            <div id="demo-result" hidden={!showResult} aria-live="polite" className="demo-result"><p className="demo-caption">SAMPLE RESULT</p><p>{demo.result}</p><div className="human-review"><Check size={18} /><p><strong>Your judgment stays in the loop.</strong><br />{demo.review}</p></div></div>
          </div>
          <p className="lab-note">Prepared examples. No live AI or connected accounts.</p>
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
          <div className="system-list" role="group" aria-label="Automation ideas">
            {automations.map((item, index) => (
              <button type="button" className={activeAutomation === index ? "active" : ""} key={item.title} onClick={() => setActiveAutomation(index)} aria-pressed={activeAutomation === index} aria-controls="automation-detail">
                <span>0{index + 1}</span>{item.title}<ArrowRight size={17} />
              </button>
            ))}
          </div>
          <div className="system-detail" id="automation-detail" role="region" aria-label="Selected automation" aria-live="polite">
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
        <div className="about-image"><img src="/orange-disco.png" loading="lazy" alt="An orange sliced open inside a sparkling golden disco ball" /><span>HUMAN × MACHINE × POSSIBILITY</span></div>
        <div className="about-copy section-pad">
          <p className="section-index">04 / WHY GAB REAL</p>
          <h2>Serious about the future.<br /><em>Not serious about gatekeeping it.</em></h2>
          <p className="about-lede">Gabby makes the complicated click.</p>
          <p>Part strategist, part teacher, part builder, she creates the kind of room where people can ask the obvious question, try the weird idea, and leave with something real.</p>
          <blockquote>“The future should not belong to the people who understood the demo first.”</blockquote>
        </div>
      </section>

      <section className="reclaimed"><img src="/time-reclaimed.png" loading="lazy" alt="Friends sharing a relaxed meal beside the water" /><div><p className="section-index">ROOM FOR WHAT MATTERS</p><h2>The time you get back<br />is <em>yours.</em></h2><p>To create. To connect. To actually be there.</p></div></section>

      <section id="contact" className="contact-section section-pad">
        <p className="section-index">05 / START HERE</p>
        <div className="contact-grid">
          <h2>What is the one thing at work you never want to do <em>again?</em></h2>
          <form onSubmit={submit}>
            <p className="prototype-note">Preview form only. Entries are not sent or saved.</p>
            {sent ? <div className="success-message" role="status"><Check size={30} /><h3>That is exactly where we start.</h3><p>This demonstrates the confirmation screen. No message was sent or saved.</p><button type="button" className="submit-button" onClick={() => setSent(false)}>Try the form again</button></div> : <>
              <label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="First name is perfect" />
              <label htmlFor="email">Email</label><input id="email" name="email" type="email" required placeholder="you@work.com" />
              <label htmlFor="stuck">The thing that is stuck</label><textarea id="stuck" name="stuck" required placeholder="Every Friday, I spend three hours..." />
              <button className="submit-button" type="submit">Preview inquiry <ArrowUpRight size={17} /></button>
            </>}
          </form>
        </div>
      </section>

      <footer><a href="#top" className="wordmark">GAB REAL<span>®</span></a><p>LEARN IT. BUILD IT. MAKE IT MATTER.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
