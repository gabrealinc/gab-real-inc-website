import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "../site-footer";
import { SiteNavigation } from "../site-navigation";
import { caseStudies } from "../case-studies/data";

export default function PastWorkPage() {
  return (
    <main className="ecosystem past-work-page" id="top">
      <SiteNavigation />

      <section className="past-work-hero">
        <span className="eyebrow">PAST WORK / SELECTED PROJECTS</span>
        <h1>Things I’ve <em>built.</em></h1>
        <div className="past-work-hero-bottom">
          <p>A few examples of making complicated work clearer, calmer, and easier to move forward. Each one started with understanding the real problem.</p>
          <a href="#selected-work">Explore the work <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="past-work-content" id="selected-work" aria-label="Selected projects">
        <nav className="past-work-index" aria-label="Jump to a project">
          <span className="eyebrow">THE WORK / 01–03</span>
          {caseStudies.map((item) => (
            <a href={`#work-${item.number}`} key={item.number}>
              <span>{item.number}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="past-work-stories">
          {caseStudies.map((item) => (
            <article className="past-work-story" id={`work-${item.number}`} key={item.number}>
              <div className="past-work-story-top">
                <span className="past-work-story-number">{item.number}</span>
                <span className="eyebrow">{item.label}</span>
              </div>
              <h2>{item.title}</h2>
              <div className="past-work-story-details">
                <div><h3>The challenge</h3><p>{item.problem}</p></div>
                <div><h3>What I built</h3><p>{item.built}</p></div>
                <div><h3>What changed</h3><p>{item.result}</p></div>
              </div>
              {item.number === "02" && (
                <figure className="past-work-feature">
                  <div className="past-work-feature-heading">
                    <span className="eyebrow">WORK FEATURE / LUXX WELLNESS & BEAUTY</span>
                    <h3>Inside the Peptide Patient Portal</h3>
                  </div>
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster="/luxx-portal-preview.webp"
                    aria-label="Silent walkthrough of the LUXX Peptide Patient Portal"
                  >
                    <source src="/luxx-portal-walkthrough.mp4" type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                  <figcaption>Seven moments from the practitioner workflow. Patient names, contact details, and health information are obscured.</figcaption>
                </figure>
              )}
              <div className="past-work-outcomes" aria-label="Documented outcomes">
                <span className="eyebrow">THE OUTCOMES</span>
                <div className="past-work-metrics">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                  ))}
                </div>
                <p>{item.metricBasis}</p>
              </div>
              <div className="past-work-impact"><h3>Financial impact</h3><p>{item.financialImpact}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="past-work-closing">
        <span className="eyebrow">YOUR WORK COULD BE NEXT</span>
        <h2>Let’s make the useful thing <em>real.</em></h2>
        <a href="/services#offer-finder">Find your best next step <ArrowUpRight size={20} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
