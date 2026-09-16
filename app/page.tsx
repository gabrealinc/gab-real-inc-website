"use client";
import { ArrowUpRight, ArrowDown, Asterisk, Check, Plus, Minus } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const scenarios = [
 { label:"Follow-ups", before:"Finish the meeting. Then finish it again.", input:"Launch stays on June 12. Maya sends revised copy Friday. Homepage needs client approval.", steps:["Find decisions and owners","Prepare a clear recap","Check it before it leaves"], result:"Launch: June 12.\nMaya: revised copy by Friday.\nClient: review and approve the homepage.", review:"Confirm the dates, ownership, and recipients. Nothing is sent automatically.", change:"The follow-up starts with a draft, not your memory." },
 { label:"Finding information", before:"You know it’s somewhere. But where?", input:"A teammate asks: when do we send the welcome pack? The sample onboarding guide says within one business day of a signed agreement.", steps:["Search the agreed source","Bring the answer and its context","Check the source is current"], result:"Send the welcome pack within one business day after the agreement is signed.\nSource: sample onboarding guide, section 2.", review:"Verify that the guide is current and applies to this client.", change:"The answer has a source. And it doesn’t have to be you." },
 { label:"Planning projects", before:"A good idea shouldn’t disappear into a voice note.", input:"Let’s run an AI workshop next month. Ask the team what feels confusing, choose three everyday tasks, then build a practice session.", steps:["Capture the idea","Put the work in order","Agree on owners and dates"], result:"1. Ask the team where they get stuck.\n2. Choose three recurring tasks.\n3. Build a hands-on session.\n4. Agree on a workshop date.", review:"Assign owners and confirm timing before any tasks or calendar events are created.", change:"You have a starting point you can actually act on." }
];
export default function Home() {
 const [selected,setSelected] = useState("0");
 const [revealed,setRevealed] = useState(false);
 const [formState,setFormState] = useState(false);
 const [menuOpen,setMenuOpen] = useState(false);
 useEffect(()=>{
   const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
   if(reduced) return;
   const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.08});
   document.querySelectorAll("[data-reveal]").forEach(el=>{const bounds=el.getBoundingClientRect();if(bounds.top>window.innerHeight){el.classList.add("will-reveal");observer.observe(el)}});
   return ()=>observer.disconnect();
 },[]);
 function reviewForm(event:FormEvent<HTMLFormElement>){event.preventDefault();setFormState(true);}

return <main id="top">
<a className="skip-link" href="#main-content">Skip to content</a>
<header className="site-header"><a href="#top" className="wordmark" aria-label="Gab Real Inc home">gab real inc<span>®</span></a><button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-nav" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"} {menuOpen ? <Minus size={17}/> : <Plus size={17}/>}</button><nav id="main-nav" className={menuOpen ? "is-open" : ""} aria-label="Main navigation" onClick={()=>setMenuOpen(false)}><a href="#learn">Learn</a><a href="#work">Work with Gabby</a><a href="#ideas">Ideas</a><a href="#about">About</a></nav><a href="#contact" className="header-cta">Let’s talk <ArrowUpRight size={17}/></a></header>
<section className="hero" id="main-content">
<div className="hero-topline"><span>AI EDUCATION · ROADMAPS · CUSTOM BUILDS</span><span>FOR EVERYDAY PEOPLE & SMALL BUSINESS OWNERS.</span></div>
<div className="hero-grid"><div className="hero-copy"><h1><span>Use AI to think</span><span>more clearly.</span><em><span>Build what</span><span>matters.</span></em></h1><p className="hero-description">I help everyday people and small business owners learn AI, put it to work, and spend less time reminding, repeating, and chasing.</p><div className="hero-actions"><a className="button" href="#learn">Explore ways to work <ArrowDown size={18}/></a><a className="inline-link" href="/learn">Here to learn? <ArrowUpRight size={18}/></a></div></div>
<div className="hero-collage" aria-label="A different perspective on work and life"><img className="collage-main" src="/studio-martini.png" alt="A martini beside an orange vintage telephone" width="816" height="960" fetchPriority="high"/><figure className="photo-print boat-print"><img src="/studio-boat.png" alt="Looking toward the horizon from a boat" width="816" height="960"/><figcaption>Perspective changes things.</figcaption></figure><figure className="photo-print tennis-print"><img src="/studio-tennis.png" alt="A martini resting on a tennis racket on a green court" width="816" height="960"/><figcaption>Make room for the good stuff.</figcaption></figure><a className="question-note" href="#changes"><span>THE FIRST QUESTION</span><em>What would you<br/>{" "}rather be doing?</em><span>start here <ArrowUpRight size={18}/></span></a><span className="collage-caption">a business. a life. both yours.</span></div></div>
<div className="hero-bottom"><span>FOR CURIOUS PEOPLE. NO TECH BACKGROUND REQUIRED.</span><a href="#changes">A different way to work <ArrowDown size={16}/></a></div>
</section>

<section className="changes section-pad" id="changes" data-reveal>
 <div className="section-meta"><span>LESS OF THIS.</span></div>
 <div className="section-heading"><h2>What would you rather<br/>{" "}<em>stop doing by hand?</em></h2><p>Not everything needs an automation.<br/>{" "}But some things don’t need another hour of you.</p></div>
 <div className="change-grid">
  <article><span className="small-number">01</span><h3>Explaining your business. <em>Again.</em></h3><div className="change-outcome"><ArrowUpRight size={19}/><p>Reusable context. Clear instructions. A starting point that isn’t zero.</p></div><details className="familiar-detail"><summary>Sound familiar? <Plus size={16}/></summary><p>A new AI conversation. Another twenty minutes explaining what you do, who you work with, and why that draft sounds nothing like you.</p></details></article>
  <article><span className="small-number">02</span><h3>Being the person everyone has to ask.</h3><div className="change-outcome"><ArrowUpRight size={19}/><p>Decisions, ownership, and current information have a place your team can use.</p></div><details className="familiar-detail"><summary>Sound familiar? <Plus size={16}/></summary><p>Where’s the latest version? What did the client decide? Who’s handling that? You know the answers. You’re interrupted every time someone needs one.</p></details></article>
  <article><span className="small-number">03</span><h3>Finishing the meeting <em>twice.</em></h3><div className="change-outcome"><ArrowUpRight size={19}/><p>A follow-up prepared for review. Your judgment, without all the reconstruction.</p></div><details className="familiar-detail"><summary>Sound familiar? <Plus size={16}/></summary><p>Once on the call. Again afterward, finding the decisions, writing the recap, and remembering who promised what.</p></details></article>
 </div>
 <div className="section-footnote"><Asterisk size={20}/><p>Sometimes the answer is AI. Sometimes it’s a simpler process. We start by figuring out which.</p></div>
</section>
<section className="example-section section-pad" id="examples" data-reveal>
 <div className="example-intro"><div><h2>Change<br/>{" "}<em>the record.</em></h2><p>The meeting ends. The recap is drafted.<br/>{" "}You check it, instead of starting over.</p></div><figure className="record-photo"><img src="/studio-record.png" alt="Hands choosing a record on a vintage turntable" width="816" height="960" loading="lazy"/></figure></div>
 <details className="workflow-disclosure"><summary>See how it could work <Plus size={20}/></summary><div className="workflow-content">
 <Tabs value={selected} onValueChange={value=>{setSelected(value);setRevealed(false)}} className="editorial-tabs">
  <TabsList aria-label="Choose a workflow example" className="example-tabs">{scenarios.map((item,index)=><TabsTrigger key={item.label} value={String(index)}><span className="tab-number">0{index+1}</span>{item.label}<ArrowUpRight size={17}/></TabsTrigger>)}</TabsList>
  {scenarios.map((item,index)=><TabsContent key={item.label} value={String(index)}>
   <div className="example-body"><div className="example-before"><span className="eyebrow">THE FAMILIAR PART</span><h3>{item.before}</h3><p className="sample-input">{item.input}</p><span className="micro">SAMPLE INPUT</span></div>
   <div className="example-after"><span className="eyebrow">A BETTER WAY THROUGH</span><ol>{item.steps.map((step,i)=><li key={step}><span>0{i+1}</span>{step}</li>)}</ol><button className="example-reveal" onClick={()=>setRevealed(!revealed)} aria-expanded={revealed} aria-controls={"sample-"+index}>{revealed ? "Close the sample" : "See the sample result"}{revealed ? <Minus size={20}/> : <Plus size={20}/>}</button>
   <div id={"sample-"+index} hidden={!revealed} className="sample-result"><p>{item.result}</p><div><Check size={17}/><span>{item.review}</span></div></div></div></div>
   <p className="example-takeaway">{item.change}</p>
  </TabsContent>)}
 </Tabs>
 <p className="micro example-note">Prepared examples, not client results. No accounts connected, no information sent, no AI running.</p>
 </div></details>
</section>
<section className="offer-section section-pad" id="learn" data-reveal>
 <div className="section-meta"><span>TWO WAYS IN.</span></div>
 <div className="section-heading"><h2>Learn with me.<br/>{" "}<em>Or bring me the problem.</em></h2></div>
 <div className="offer-grid">
  <div className="learn-offer"><span className="eyebrow">THE SELF-GUIDED ROUTE</span><h3>Learn with me.</h3><p>AI education for everyday people and small business owners. Learn to make your own decisions and build something useful, without making every new tool your hobby.</p>
   <a className="course-row" href="/learn#foundations"><span className="course-index">01</span><span><strong>AI Foundations</strong><small>A useful starting point you understand and control.</small></span><ArrowUpRight size={24}/></a>
   <a className="course-row" href="/learn#advanced"><span className="course-index">02</span><span><strong>Build Your AI System</strong><small>Connect the context, tools, and work. Keep the judgment.</small></span><ArrowUpRight size={24}/></a>
   <div className="offer-bottom"><span className="status-pill"><span/>COURSES COMING SOON</span><a href="/learn" className="inline-link">Explore the courses <ArrowUpRight size={18}/></a></div>
  </div>
  <div className="work-offer" id="work"><span className="eyebrow">THE WORK-TOGETHER ROUTE</span><h3>Bring the<br/>{" "}<em>interesting problem.</em></h3><p>The one that doesn’t fit a tutorial. We look at how your business actually works, decide what needs to change, and shape the right next step.</p>
   <Accordion type="single" collapsible className="service-list">
    <AccordionItem value="strategy"><AccordionTrigger>AI roadmaps & advisory</AccordionTrigger><AccordionContent>A practical plan for where AI fits in your business, what to try first, and what to leave alone. We map the work before choosing the tools.</AccordionContent></AccordionItem>
    <AccordionItem value="workshops"><AccordionTrigger>Workshops & speaking</AccordionTrigger><AccordionContent>Help your team understand AI well enough to question it, try it, and make informed decisions. Practical examples and discussion shaped around the people in the room.</AccordionContent></AccordionItem>
    <AccordionItem value="custom-builds"><AccordionTrigger>Custom AI builds</AccordionTrigger><AccordionContent>Connected tools, workflows, and AI assistants built around how your business actually works. We agree on scope, human review steps, and handoff before building.</AccordionContent></AccordionItem>
   </Accordion>
   <a href="#contact" className="inline-link">Tell me what you’re working on <ArrowUpRight size={18}/></a>
  </div>
 </div>
</section>
<section className="about-section section-pad" id="about" data-reveal>
 <div className="section-meta"><span>HI, I’M GABBY.</span></div>
 <div className="about-grid"><div className="portrait-composition"><figure><div className="portrait-crop"><img src="/gabby-portrait.jpg" alt="Gabby Greenberg, founder of Gab Real Inc" width="2400" height="1600" loading="lazy"/></div><figcaption>AI EDUCATOR. STRATEGIST. BUILDER.</figcaption></figure><span className="portrait-note">But why are we<br/>{" "}doing it this way?</span></div>
 <div className="about-copy"><h2>I didn’t leave one<br/>{" "}way of working<br/>{" "}<em>just to recreate it<br/>{" "}for myself.</em></h2><p>When I started working for myself, I took on too much, stayed constantly available, and measured my value by how much I could get done.</p><p>I had changed who I worked for. I hadn’t changed the rules.</p><p>My brain naturally connects the dots: what repeats, what gets stuck, and what could work better. I learned AI by following that curiosity, building things, testing them, and figuring out why they broke.</p><p>Now I help other people understand what’s possible and put it to work in their own lives and businesses. You don’t need to become technical. You need enough understanding to make your own decisions and build something useful.</p><a className="inline-link" href="https://growithgab.substack.com/p/three-years-later-im-finally-free" target="_blank" rel="noreferrer">The longer story <ArrowUpRight size={18}/></a></div></div>
</section>
<section className="ideas-section section-pad" id="ideas" data-reveal>
 <div className="section-meta"><span>BEYOND THE BUSINESS.</span></div>
 <div className="section-heading"><h2>Still asking<br/>{" "}<em>better questions.</em></h2></div>
 <div className="ideas-grid">
  <a className="idea-feature book-feature" href="https://readfromscratch.com/" target="_blank" rel="noreferrer"><div className="idea-top"><span>THE BOOK</span><span>AVAILABLE NOW ↗</span></div><div className="book-title">From<br/>{" "}<em>Scratch.</em></div><div className="idea-bottom"><p>The book I co-wrote with Ryan Welti about redefining success and creating a life that feels like yours.</p><span className="idea-link">Explore the book <ArrowUpRight size={20}/></span></div></a>
  <article className="idea-feature podcast-feature"><div className="idea-top"><span>THE PODCAST</span><span>COMING SOON</span></div><div className="podcast-title">exploit<span>WITH GABBY GREENBERG</span></div><div className="idea-bottom"><p>The ideas we inherit. The questions we can’t leave alone. And what the hell we do with what we learn.</p><details className="podcast-details"><summary>Meet the podcast <Plus size={18}/></summary><p>A curiosity-led conversation across technology, creativity, work, culture, and whatever question comes next. Guest conversations and solo explorations. Launch details to come.</p></details></div></article>
  <a className="idea-feature writing-feature" href="https://growithgab.substack.com/" target="_blank" rel="noreferrer"><div className="idea-top"><span>THE WRITING</span><ArrowUpRight size={20}/></div><h3>Still<br/>{" "}<em>figuring<br/>{" "}it out.</em></h3><div className="idea-bottom"><p>Essays on work, technology, success, and the things I’m still thinking through.</p><span className="idea-link">Read Grow With Gab <ArrowUpRight size={20}/></span></div></a>
 </div>
</section>
<section className="contact-section section-pad" id="contact" data-reveal>
 <div className="section-meta"><span>LET’S TALK.</span></div>
 <div className="contact-grid"><div><h2>What keeps<br/>{" "}coming back<br/>{" "}<em>to you?</em></h2><p>The task nobody owns. The information only you can find. The idea you know could work, but haven’t figured out how to build.</p><span className="handwritten">let’s talk about that.</span></div>
 <form onSubmit={reviewForm} onChange={()=>setFormState(false)}><p className="form-note">Preview form · not connected. Nothing entered here is sent or saved.</p><div className="form-pair"><label>Your name<input name="name" autoComplete="name" required placeholder="First & last name"/></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@yourbusiness.com"/></label></div><label>What are you working on?<textarea name="project" required rows={2} placeholder="The business, project, or question on your mind."/></label><label>What would you like to change?<textarea name="change" required rows={2} placeholder="Tell me what happens now, and what you wish happened instead."/></label><div className="form-bottom"><span>No polished pitch necessary.</span><button className="button" type="submit">Preview inquiry <ArrowUpRight size={18}/></button></div><p className="form-feedback" role="status">{formState ? "Your inquiry is ready to review here. This preview isn’t connected, so nothing has been sent or saved." : ""}</p></form></div>
</section>
<footer className="site-footer"><div className="footer-top"><a className="wordmark" href="#top">gab real inc<span>®</span></a><p>Think clearly. Stay curious.<br/>{" "}Make something that matters.</p><a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={18}/></a></div><div className="footer-bottom"><span>© 2026 GAB REAL INC.</span><div><a href="/learn">Learn</a><a href="#work">Work</a><a href="#ideas">Ideas</a><a href="#about">About</a><a href="https://growithgab.substack.com/" target="_blank" rel="noreferrer">Substack ↗</a><a href="https://www.linkedin.com/in/gabriellegreenberg" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><span>HUMAN FIRST. ALWAYS.</span></div></footer>
</main>;
}
