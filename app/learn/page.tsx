import { ArrowUpRight, Asterisk } from "lucide-react";
import type { Metadata } from "next";
import { SiteFooter } from "../site-footer";
import { SiteNavigation } from "../site-navigation";
import { LearningStepCards } from "./learning-step-cards";

const waitlistUrl = "https://links.gabrealinc.com/widget/form/7MXragO1jKZmny3oNFkt";

export const metadata: Metadata = {
  title: "Build Your AI OS | Learn with Gabby | Gab Real Inc.",
  description: "Build Your AI OS is a course to help you use AI intentionally and build a useful system around your own knowledge and work. Join the waitlist for launch updates.",
};

export default function Learn() {
  return (
    <main className="course-page" id="top">
      <a className="skip-link" href="#course-content">Skip to the course</a>
      <SiteNavigation />

      <section className="course-hero course-hero-new" id="course-content">
        <div className="course-hero-copy">
          <span className="eyebrow">ONE COURSE / YOUR OWN WAY THROUGH AI</span>
          <h1>Understand AI. <em>Build on your terms.</em></h1>
          <p>Learn where AI belongs in your work and life, where it does not, and how to build a useful system without handing over your judgment.</p>
          <div className="course-hero-actions"><a className="course-hero-cta" href="#waitlist">Join the waitlist ↗</a><a href="#course" className="course-hero-secondary">See what you’ll build ↓</a></div>
          <span className="course-hero-status">SELF-GUIDED COURSE · BUILT AROUND YOUR LIFE · IN DEVELOPMENT</span>
        </div>
        <figure className="course-hero-art"><img src="/course-cosmic.png" alt="Retro futuristic scene exploring ideas and technology" width="1200" height="900" fetchPriority="high" /><figcaption>Tools change. Your judgment travels with you.</figcaption></figure>
      </section>

      <section className="course-shift" aria-labelledby="course-shift-title">
        <span className="eyebrow">WHY THIS EXISTS</span>
        <h2 id="course-shift-title">Know the technology. <em>Keep the choice.</em></h2>
        <div className="course-shift-grid"><p>You can use AI every day and still have questions about what it knows, what it gets wrong, and what information you should share with it.</p><p>This course helps you answer those questions, decide which work is worth changing, and put a system together around your own goals and boundaries.</p></div>
      </section>

      <LearningStepCards />

      <section className="course-detail" id="course">
        <div>
          <span className="eyebrow">THE COURSE / BUILD YOUR AI OS</span>
          <h2>Understand. <em>Decide.</em><br />Build what matters.</h2>
          <p>Each stage ends with a choice, an exercise, or one piece of your own AI OS. Work through the lessons on your schedule and use current tools to practice ideas that will still matter when the tools change.</p>
          <div className="price-line"><strong>$397</strong><span>COURSE PRICE · COMING SOON</span></div>
          <p>One complete course. The optional Vault adds templates and examples that can speed up implementation; it does not hold lessons you need to finish.</p>
        </div>
        <div className="course-deliverables">
          <h3>What you’ll make along the way</h3>
          <ol>
            <li><strong>Your AI use map.</strong>Identify where AI could help and where it does not belong.</li>
            <li><strong>Your decision rules.</strong>Choose what stays human, what needs review, and which data to protect.</li>
            <li><strong>Your reusable context.</strong>Give your tools the right information about your work, priorities, and voice.</li>
            <li><strong>Your first useful workflow.</strong>Build one process around a real problem, then connect only what helps.</li>
            <li><strong>Your tool compass.</strong>Compare cloud, business, API, open, and local options without becoming attached to one company.</li>
            <li><strong>Your first AI OS.</strong>Document what you built so you can improve it as your needs and tools change.</li>
          </ol>
        </div>
      </section>

      <section className="course-detail course-addon" id="vault">
        <div>
          <span className="eyebrow">OPTIONAL ADD-ON / AI OS VAULT</span>
          <h2>Good ideas need<br /><em>a place to start.</em></h2>
          <p>The AI OS Vault is Gabby’s implementation library. It gives you templates and examples to help put the course into practice faster. It is an add-on to the course, not a second course.</p>
        </div>
        <div className="course-deliverables">
          <h3>Planned resources</h3>
          <ol>
            <li><strong>Context and knowledge templates.</strong>Starting structures for your second brain, source of truth, and reusable instructions.</li>
            <li><strong>Role and workflow builders.</strong>Examples and checklists for defining useful AI roles, permissions, reviews, and handoffs.</li>
            <li><strong>Decision tools.</strong>Ways to evaluate tools, protect information, and keep your system useful as AI changes.</li>
          </ol>
        </div>
      </section>

      <section className="course-faq">
        <span className="eyebrow">BEFORE YOU PLAN YOUR NEXT STEP</span>
        <h2 style={{ marginTop: 20 }}>A few good questions.</h2>
        <div className="course-questions">
          <details><summary>Do I need to be technical?</summary><p>No. The course explains the concepts in everyday language. You’ll build around your real work and learn to evaluate what is useful before connecting tools.</p></details>
          <details><summary>Do I need the Vault?</summary><p>No. Build Your AI OS is a complete course on its own. The Vault is an optional library of templates and examples if you want more starting points for implementation.</p></details>
          <details><summary>Will this work with my existing tools?</summary><p>The approach is designed to travel with you. Your email, files, accounts, and permissions still affect which connections are possible, so the course teaches you how to assess your setup.</p></details>
          <details><summary>Are calls or community participation required?</summary><p>No. You can work through the course on your schedule. It does not require calls, a cohort, or a managed community. If you want Gabby’s direct help, explore the Work with Gabby page.</p></details>
          <details><summary>Are software subscriptions included?</summary><p>No software subscriptions are included in the course price. Tool requirements and any additional costs will be listed before enrollment opens.</p></details>
          <details><summary>When can I enroll?</summary><p>The course is in development. There is no active checkout or confirmed launch date yet. Join the waitlist for launch updates.</p></details>
        </div>
      </section>

      <section className="course-waitlist" id="waitlist" aria-labelledby="course-waitlist-title">
        <div>
          <span className="eyebrow">BUILD YOUR AI OS / WAITLIST</span>
          <h2 id="course-waitlist-title">Get first word <em>when it’s ready.</em></h2>
          <p>The course is still being built. Leave your first name and email and I’ll let you know when enrollment opens. No launch date has been set yet.</p>
        </div>
        <div className="course-waitlist-form">
          <span className="course-form-label">FIRST TO KNOW / BUILD YOUR AI OS</span>
          <iframe title="Build Your AI OS course waitlist" src={waitlistUrl} loading="lazy" />
          <p className="form-privacy-note">By joining, you ask Gab Real Inc. to email you about this course. See the <a href="/privacy">Privacy Policy</a> for how your information is handled.</p>
          <a href={waitlistUrl} target="_blank" rel="noreferrer">Open the waitlist form in a new tab ↗</a>
        </div>
      </section>

      <section className="course-closing">
        <div><Asterisk size={30} /><h2 style={{ marginTop: 20 }}>The system should serve you.</h2><p>Join the waitlist for course updates, and follow Gabby’s writing while it takes shape.</p></div>
        <a className="inline-link" href="https://growithgab.substack.com/" target="_blank" rel="noreferrer">Read Grow With Gab <ArrowUpRight size={18} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
