"use client";

import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Goal = "course" | "blueprint" | "workshop" | "speaking" | "advisory" | "systems";

type Route = {
  label: string;
  short: string;
  result: string;
  reason: string;
  action: string;
  href?: string;
  detailPrompt: string;
};

const routes: Record<Goal, Route> = {
  course: {
    label: "I want to understand AI and build my own system",
    short: "learn and build it myself",
    result: "Build Your AI OS",
    reason: "You want the understanding and structure to build a useful AI system yourself, without becoming an engineer or chasing every new tool.",
    action: "Explore Build Your AI OS",
    href: "/learn",
    detailPrompt: "What would you most like AI to make easier?",
  },
  blueprint: {
    label: "I need clarity on what my business should build",
    short: "get clarity before I build",
    result: "AI and Systems Blueprint",
    reason: "You need an objective plan before investing in tools or implementation. The Blueprint gives you priorities, architecture, and a roadmap you own.",
    action: "Book the Blueprint session",
    href: "https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby",
    detailPrompt: "Where is work currently getting stuck, repeated, or dropped?",
  },
  workshop: {
    label: "I want practical AI education for my team",
    short: "teach my team",
    result: "Practical AI Workshop",
    reason: "Your team needs shared language and useful practice grounded in the work they actually do, not a generic tour of AI tools.",
    action: "Send my workshop intake",
    detailPrompt: "How large is the team, and what work should the session focus on?",
  },
  speaking: {
    label: "I am planning an event and need a speaker",
    short: "bring Gabby to an event",
    result: "Speaking Engagement",
    reason: "You are looking for a smart, human conversation about AI, creativity, agency, systems, or the future of work.",
    action: "Send my speaking intake",
    detailPrompt: "What is the event, audience, format, and proposed date?",
  },
  advisory: {
    label: "I want ongoing strategic support",
    short: "get ongoing perspective",
    result: "Strategic Advisory",
    reason: "You want Gabby’s perspective available as decisions arise, without hiring for a full implementation engagement.",
    action: "Send my advisory intake",
    detailPrompt: "Which decisions or areas would benefit most from ongoing strategic support?",
  },
  systems: {
    label: "I know what I need and want it built",
    short: "have the system built",
    result: "Custom AI Systems",
    reason: "You have a valuable use case and want selective strategy, design, and implementation that works with the rest of your business.",
    action: "Send my systems intake",
    detailPrompt: "What needs to be built, who will use it, and what must it connect with?",
  },
};

const timingOptions = ["As soon as possible", "Within 1–3 months", "Within 3–6 months", "I’m exploring"];
const budgetOptions = ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000–$15,000", "$15,000+", "Not sure yet"];

type Intake = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  website: string;
  change: string;
  win: string;
  timing: string;
  budget: string;
  details: string;
};

const emptyIntake: Intake = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  website: "",
  change: "",
  win: "",
  timing: "",
  budget: "",
  details: "",
};

export function OfferFinder() {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [intake, setIntake] = useState<Intake>(emptyIntake);
  const route = goal ? routes[goal] : null;

  const emailHref = useMemo(() => {
    if (!route) return "#";
    const lines = [
      `Recommended offer: ${route.result}`,
      `Goal: ${route.short}`,
      `Name: ${intake.fullName}`,
      `Email: ${intake.email}`,
      `Phone: ${intake.phone || "Not provided"}`,
      `Organization: ${intake.organization || "Not provided"}`,
      `Website: ${intake.website || "Not provided"}`,
      `What they want to change, build, teach, or decide: ${intake.change}`,
      `Meaningful win: ${intake.win}`,
      `Timeline: ${intake.timing}`,
      `Investment range: ${intake.budget}`,
      `${route.detailPrompt} ${intake.details || "Not provided"}`,
    ];
    return `mailto:hello@gabrealinc.com?subject=${encodeURIComponent(`${route.result} intake from ${intake.fullName}`)}&body=${encodeURIComponent(lines.join("\n\n"))}`;
  }, [intake, route]);

  const update = (field: keyof Intake, value: string) => setIntake((current) => ({ ...current, [field]: value }));

  const chooseGoal = (value: Goal) => {
    setGoal(value);
    setStep(2);
  };

  const submitIntake = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(3);
  };

  const reset = () => {
    setGoal(null);
    setIntake(emptyIntake);
    setStep(1);
  };

  return (
    <section className="offer-finder" id="offer-finder" aria-labelledby="offer-finder-title">
      <div className="offer-finder-intro">
        <span className="eyebrow">THE OFFER FINDER</span>
        <h2 id="offer-finder-title">Let’s find the right way <em>to help.</em></h2>
        <p>Answer a few questions. You’ll get a clear recommendation, not a mystery sales call.</p>
        <div className="finder-progress" aria-label={`Step ${step} of 3`}>
          {[1, 2, 3].map((item) => <i key={item} className={item <= step ? "is-active" : ""} />)}
          <span>0{step} / 03</span>
        </div>
      </div>

      <div className="finder-chat" aria-live="polite">
        <div className="chat-message chat-message-gabby">
          <span>G</span>
          <p>{step === 1 ? "What are you trying to do?" : step === 2 ? `Got it. You want to ${route?.short}. Tell me a little more so I can point you somewhere useful.` : "Based on what you shared, this is your strongest next step."}</p>
        </div>

        {step === 1 ? (
          <div className="finder-choices">
            {(Object.entries(routes) as [Goal, Route][]).map(([key, item]) => (
              <button key={key} type="button" onClick={() => chooseGoal(key)}>
                <span>{item.label}</span><ArrowRight size={18} />
              </button>
            ))}
          </div>
        ) : null}

        {step === 2 && route ? (
          <form className="finder-form" onSubmit={submitIntake}>
            <div className="finder-form-grid">
              <label>Full name<input required autoComplete="name" value={intake.fullName} onChange={(event) => update("fullName", event.target.value)} /></label>
              <label>Email<input required type="email" autoComplete="email" value={intake.email} onChange={(event) => update("email", event.target.value)} /></label>
              <label>Phone <small>optional</small><input type="tel" autoComplete="tel" value={intake.phone} onChange={(event) => update("phone", event.target.value)} /></label>
              <label>Organization <small>optional</small><input autoComplete="organization" value={intake.organization} onChange={(event) => update("organization", event.target.value)} /></label>
              <label className="finder-wide">Website <small>optional</small><input type="url" placeholder="https://" value={intake.website} onChange={(event) => update("website", event.target.value)} /></label>
              <label className="finder-wide">What are you trying to change, build, teach, or decide?<textarea required rows={3} value={intake.change} onChange={(event) => update("change", event.target.value)} /></label>
              <label className="finder-wide">What would a meaningful win look like?<textarea required rows={3} value={intake.win} onChange={(event) => update("win", event.target.value)} /></label>
              <label>How soon do you want to move?<select required value={intake.timing} onChange={(event) => update("timing", event.target.value)}><option value="">Choose one</option>{timingOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label>What investment range feels realistic?<select required value={intake.budget} onChange={(event) => update("budget", event.target.value)}><option value="">Choose one</option>{budgetOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label className="finder-wide">{route.detailPrompt}<textarea rows={3} value={intake.details} onChange={(event) => update("details", event.target.value)} /></label>
            </div>
            <div className="finder-actions">
              <button className="finder-back" type="button" onClick={() => setStep(1)}><ArrowLeft size={17} /> Back</button>
              <button className="finder-next" type="submit">Show me my best fit <ArrowRight size={18} /></button>
            </div>
          </form>
        ) : null}

        {step === 3 && route ? (
          <div className="finder-result">
            <div className="finder-result-check"><Check size={22} /></div>
            <span>YOUR RECOMMENDED NEXT STEP</span>
            <h3>{route.result}</h3>
            <p>{route.reason}</p>
            <div className="finder-result-actions">
              <a href={route.href ?? emailHref} target={route.href?.startsWith("http") || !route.href ? "_blank" : undefined} rel={route.href?.startsWith("http") || !route.href ? "noreferrer" : undefined}>{route.action} <ArrowRight size={18} /></a>
              {route.href ? <a className="finder-email" href={emailHref}>Send Gabby my answers</a> : null}
            </div>
            <button className="finder-reset" type="button" onClick={reset}><RotateCcw size={15} /> Start over</button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
