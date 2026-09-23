"use client";

import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { useState } from "react";

type Goal = "blueprint" | "workshop" | "speaking" | "advisory" | "systems";

type Route = {
  label: string;
  result: string;
  reason: string;
};

const intakeUrl = "https://links.gabrealinc.com/widget/form/i1x5pHufXkhLxVxCgX0K";

const routes: Record<Goal, Route> = {
  blueprint: {
    label: "I need clarity on what my business should build",
    result: "AI blueprints",
    reason: "You need an objective plan before investing in tools or implementation. A blueprint gives you priorities, architecture, and a roadmap you own.",
  },
  workshop: {
    label: "I want practical AI education for my team",
    result: "Practical AI workshops",
    reason: "Your team needs shared language and useful practice grounded in the work they actually do.",
  },
  speaking: {
    label: "I am planning an event and need a speaker",
    result: "Speaking",
    reason: "You are looking for a smart, human conversation about AI, creativity, agency, systems, or the future of work.",
  },
  advisory: {
    label: "I want ongoing strategic support",
    result: "Strategic advisory",
    reason: "You want Gabby’s perspective available as decisions arise, without hiring for a full implementation engagement.",
  },
  systems: {
    label: "I know what I need and want it built",
    result: "Custom AI builds",
    reason: "You have a valuable use case and want strategy, design, and implementation that works with the rest of your business.",
  },
};

export function OfferFinder() {
  const [goal, setGoal] = useState<Goal | null>(null);
  const route = goal ? routes[goal] : null;

  return (
    <section className="offer-finder" id="offer-finder" aria-labelledby="offer-finder-title">
      <div className="offer-finder-intro">
        <span className="eyebrow">THE OFFER FINDER</span>
        <h2 id="offer-finder-title">Let’s find the right way <em>to help.</em></h2>
        <p>Tell me what you want help with. I’ll suggest a way we could work together, then you can share the details with me.</p>
        <a className="finder-course-link" href="/learn">Prefer to learn on your own? Explore Build Your AI OS ↗</a>
      </div>

      <div className="finder-chat" aria-live="polite">
        <div className="chat-message chat-message-gabby">
          <span>G</span>
          <p>{goal ? "Here is where I would start. If it feels right, tell me a little more." : "What are you trying to do?"}</p>
        </div>

        {!goal ? (
          <div className="finder-choices">
            {(Object.entries(routes) as [Goal, Route][]).map(([key, item]) => (
              <button key={key} type="button" onClick={() => setGoal(key)}>
                <span>{item.label}</span><ArrowRight size={18} />
              </button>
            ))}
          </div>
        ) : null}

        {route ? (
          <div className="finder-result">
            <div className="finder-result-check"><Check size={22} /></div>
            <span>YOUR RECOMMENDED STARTING POINT</span>
            <h3>{route.result}</h3>
            <p>{route.reason}</p>
            <p className="finder-intake-intro">Share what you are working on in the form below. Your answers are saved in the Gab Real Inc intake system for Gabby to review.</p>
            <iframe className="finder-intake-frame" title="Gab Real Inc work with me intake" src={intakeUrl} loading="lazy" />
            <a className="finder-intake-fallback" href={intakeUrl} target="_blank" rel="noreferrer">Open the form in a new tab <ArrowRight size={16} /></a>
            <button className="finder-reset" type="button" onClick={() => setGoal(null)}><RotateCcw size={15} /> Start over</button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
