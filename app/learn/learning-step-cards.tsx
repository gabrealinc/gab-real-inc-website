import type { CSSProperties } from "react";

const learningSteps = [
  {
    number: "01",
    title: "Read AI clearly.",
    copy: "Understand what these systems can do, where they guess, and how to evaluate an answer before it shapes a real decision.",
    outcome: "You stop treating confidence like accuracy.",
  },
  {
    number: "02",
    title: "Choose less, better.",
    copy: "Know which tools deserve your time, what to ignore, and how to recognize when a shiny feature will create more work than it saves.",
    outcome: "You make decisions without chasing every release.",
  },
  {
    number: "03",
    title: "Give AI the right context.",
    copy: "Create reusable context for your business, priorities, voice, and boundaries so you are not starting from zero every time.",
    outcome: "Your tools understand the work before they attempt it.",
  },
  {
    number: "04",
    title: "Build around real life.",
    copy: "Turn one draining, repeatable process into a useful workflow, then connect the pieces only when the connection earns its keep.",
    outcome: "You save time without creating another system to manage.",
  },
  {
    number: "05",
    title: "Stay human and in control.",
    copy: "Protect sensitive information, keep judgment with the right person, and use AI to make more room for creativity, relationships, and actual life.",
    outcome: "More effective. More creative. More human.",
  },
];

export function LearningStepCards() {
  return (
    <section className="learning-steps" aria-labelledby="learning-steps-title">
      <div className="learning-steps-intro">
        <span className="eyebrow">WHAT YOU’LL LEARN</span>
        <h2 id="learning-steps-title">Five shifts from overwhelmed to <em>actually useful.</em></h2>
        <p>This is not a tour of every new tool. It is a sequence for making better choices and building a way of working that gives you time back.</p>
      </div>
      <div className="learning-step-stack">
        {learningSteps.map((step, index) => (
          <article
            className={`learning-step-card learning-step-card-${index + 1}`}
            style={{ "--step-index": index } as CSSProperties}
            key={step.number}
          >
            <div className="learning-step-number"><span>{step.number}</span><small>OF 05</small></div>
            <div className="learning-step-copy">
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
            <p className="learning-step-outcome"><span>THE SHIFT</span>{step.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
