"use client";

import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { useState } from "react";

type Goal = "learn" | "clarity" | "team" | "build" | "event";
type Need = "explore" | "plan" | "do" | "partner";
type Offer = "course" | "session" | "blueprint" | "workshop" | "speaking" | "advisory" | "systems";

const intakeUrl = "https://links.gabrealinc.com/widget/form/i1x5pHufXkhLxVxCgX0K";

const goals: { id: Goal; label: string; detail: string }[] = [
  { id: "learn", label: "Get more confident with AI", detail: "I want practical skills I can use myself." },
  { id: "clarity", label: "Figure out my next move", detail: "I have ideas or challenges, but need direction." },
  { id: "team", label: "Bring my team along", detail: "We need a shared way to understand and use AI." },
  { id: "build", label: "Make a system work", detail: "I want a useful workflow, tool, or automation." },
  { id: "event", label: "Book Gabby for an event", detail: "I need a speaker who can make this click." },
];

const needs: { id: Need; label: string; detail: string }[] = [
  { id: "explore", label: "A place to start", detail: "Help me see what is possible and make sense of it." },
  { id: "plan", label: "A clear plan", detail: "I want priorities and a path I can act on." },
  { id: "do", label: "Hands-on help", detail: "I am ready to put something into practice." },
  { id: "partner", label: "An ongoing partner", detail: "I want someone to think through decisions with me over time." },
];

const offers: Record<Offer, { name: string; explanation: string; firstStep: string; href?: string; cta?: string }> = {
  course: {
    name: "Build Your AI OS",
    explanation: "Start with a guided learning path so you can use AI with more confidence in your own work.",
    firstStep: "Join the waitlist to hear when the course opens.",
    href: "/learn#waitlist",
    cta: "Explore the course",
  },
  session: {
    name: "Strategy session",
    explanation: "A focused conversation with Gabby can help you sort the possibilities and decide what deserves your attention first.",
    firstStep: "Bring one real decision or challenge. Leave with a clearer next move.",
  },
  blueprint: {
    name: "AI and Systems Blueprint",
    explanation: "Before you invest in a build, map the opportunity, priorities, and systems that will actually support your business.",
    firstStep: "Share your current workflow and goals. Gabby will help shape a roadmap you can use.",
  },
  workshop: {
    name: "Practical AI workshop",
    explanation: "Give your team shared language and hands-on practice tied to the work they really do.",
    firstStep: "Tell Gabby who is in the room and what you want them to be able to do afterward.",
  },
  speaking: {
    name: "Speaking with Gabby",
    explanation: "Bring an accessible, memorable conversation about AI and what it means for your audience.",
    firstStep: "Share the event, audience, and the idea you want people to leave with.",
  },
  advisory: {
    name: "Strategic advisory",
    explanation: "Keep Gabby close as your business makes decisions, tests ideas, and navigates change.",
    firstStep: "Describe the decisions ahead and the kind of support that would be useful.",
  },
  systems: {
    name: "Custom AI build",
    explanation: "Turn a valuable use case into a working system designed around the way your business operates.",
    firstStep: "Show Gabby the process you want to improve and what success would look like.",
  },
};

function findOffer(goal: Goal, need: Need): Offer {
  if (goal === "event") return "speaking";
  if (goal === "learn") return need === "partner" ? "session" : "course";
  if (goal === "team") return need === "partner" ? "advisory" : "workshop";
  if (goal === "clarity") return need === "partner" ? "advisory" : need === "plan" || need === "do" ? "blueprint" : "session";
  return need === "partner" ? "advisory" : need === "explore" ? "session" : need === "plan" ? "blueprint" : "systems";
}

export function OfferFinder() {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [need, setNeed] = useState<Need | null>(null);
  const [showIntake, setShowIntake] = useState(false);
  const offer = goal === "event" ? offers.speaking : goal && need ? offers[findOffer(goal, need)] : null;
  const step = !goal ? 1 : !need && goal !== "event" ? 2 : 3;

  function reset() {
    setGoal(null);
    setNeed(null);
    setShowIntake(false);
  }

  return (
    <section className="offer-finder" id="offer-finder" aria-labelledby="offer-finder-title">
      <div className="offer-finder-intro">
        <span className="eyebrow">FIND YOUR NEXT MOVE</span>
        <h2 id="offer-finder-title">Start wherever <em>you are.</em></h2>
        <p>A couple of quick choices. A useful starting point. No email required to see your result.</p>
        <a className="finder-course-link" href="/learn">Already know you want to learn on your own? Explore Build Your AI OS ↗</a>
      </div>

      <div className="finder-chat">
        <div className="finder-step-header">
          <span>{step === 3 ? "YOUR NEXT MOVE" : `QUESTION ${step}`}</span>
          <div className="finder-step-bars" aria-hidden="true"><i className="is-active" /><i className={step > 1 ? "is-active" : ""} /></div>
        </div>

        {step < 3 ? (
          <div className="finder-question" key={step}>
            <span className="finder-kicker">{step === 1 ? "LET’S START HERE" : "ONE MORE THING"}</span>
            <h3>{step === 1 ? "What are you hoping to move forward?" : "What kind of help would feel most useful?"}</h3>
            <div className="finder-choices">
              {(step === 1 ? goals : needs).map((choice) => (
                <button key={choice.id} type="button" onClick={() => {
                  if (step === 1) setGoal(choice.id as Goal);
                  else setNeed(choice.id as Need);
                }}>
                  <span><strong>{choice.label}</strong><small>{choice.detail}</small></span><ArrowRight size={18} aria-hidden="true" />
                </button>
              ))}
            </div>
            {step === 2 ? <button className="finder-back" type="button" onClick={() => setGoal(null)}><ArrowLeft size={16} /> Back to first question</button> : null}
          </div>
        ) : null}

        {offer ? (
          <div className="finder-result" aria-live="polite">
            <div className="finder-result-check"><Check size={22} aria-hidden="true" /></div>
            <span>A GOOD PLACE TO START</span>
            <h3>{offer.name}</h3>
            <p>{offer.explanation}</p>
            <div className="finder-result-next"><span>YOUR FIRST STEP</span><p>{offer.firstStep}</p></div>
            {offer.href ? (
              <a className="finder-result-cta" href={offer.href}>{offer.cta} <ArrowRight size={18} /></a>
            ) : (
              <>
                <button className="finder-result-cta" type="button" onClick={() => setShowIntake(true)} aria-expanded={showIntake}>
                  {showIntake ? "Your inquiry form" : "Tell Gabby what you’re working on"} <ArrowRight size={18} />
                </button>
                {showIntake ? <div className="finder-intake" id="finder-intake">
                  <p>Share a little about your project. The quiz result is just a starting point, and Gabby will review your inquiry personally.</p>
                  <iframe className="finder-intake-frame" title="Gab Real Inc work with me inquiry" src={intakeUrl} loading="lazy" />
                  <p className="form-privacy-note">By sending an inquiry, you ask Gab Real Inc. to contact you about working together. See the <a href="/privacy">Privacy Policy</a>.</p>
                  <a className="finder-intake-fallback" href={intakeUrl} target="_blank" rel="noreferrer">Open the form in a new tab <ArrowRight size={16} /></a>
                </div> : null}
              </>
            )}
            <button className="finder-reset" type="button" onClick={reset}><RotateCcw size={15} /> Try different answers</button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
