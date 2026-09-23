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

      <section className="course-hero" id="course-content">
        <span className="eyebrow">LEARN WITH GABBY / BUILD YOUR AI OS</span>
        <h1>You have a life to live.<br /><em>Not every tool to learn.</em></h1>
        <p>Build Your AI OS helps you use AI with more clarity, capability, and control. Learn the ideas, give your tools useful context, and build a way of working around your own knowledge and priorities.</p>
        <a className="course-crosslink" href="/services">Want Gabby’s help with your business? Work with her directly ↗</a>
        <span className="status-pill"><span />THE COURSE IS IN DEVELOPMENT · JOIN THE WAITLIST BELOW</span>
        <a className="course-crosslink" href="#waitlist">Join the course waitlist ↓</a>
      </section>

      <LearningStepCards />

      <section className="course-detail" id="course">
        <div>
          <span className="eyebrow">THE COURSE / BUILD YOUR AI OS</span>
          <h2>Make AI work<br /><em>around you.</em></h2>
          <p>A complete course for people who have decided to use AI and want to do it intentionally, without handing over their judgment or becoming dependent on one platform. Learn on your schedule.</p>
          <div className="price-line"><strong>$397</strong><span>COURSE PRICE · COMING SOON</span></div>
          <p>You can take the course on its own. The optional Vault adds ready-to-use resources, but it does not hold lessons or essential knowledge you need to finish the course.</p>
        </div>
        <div className="course-deliverables">
          <h3>What you’ll build toward</h3>
          <ol>
            <li><strong>Understand the tools.</strong>Learn the concepts in normal language and know where AI helps, guesses, or needs your review.</li>
            <li><strong>Think with AI.</strong>Use it to learn, question, and challenge ideas without outsourcing your judgment.</li>
            <li><strong>Give your knowledge a home.</strong>Build portable context around your work, expertise, priorities, and voice.</li>
            <li><strong>Set boundaries.</strong>Decide what information to share, which permissions to grant, and where a person stays in control.</li>
            <li><strong>Connect useful pieces.</strong>Create roles, skills, and a workflow that solves a real problem in your life or business.</li>
            <li><strong>Keep what matters yours.</strong>Document your system so you can maintain it and change tools when you need to.</li>
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
          <iframe title="Build Your AI OS course waitlist" src={waitlistUrl} loading="lazy" />
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
