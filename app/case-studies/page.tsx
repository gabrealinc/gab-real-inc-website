"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { SiteFooter } from "../site-footer";
import { SiteNavigation } from "../site-navigation";
import { caseStudies } from "./data";

export default function CaseStudiesPage() {
  const [folderOpen, setFolderOpen] = useState(true);
  const [activeCase, setActiveCase] = useState(0);
  const selectedCase = caseStudies[activeCase];

  return (
    <main className="ecosystem case-studies-page" id="top">
      <SiteNavigation />

      <section className="case-page-intro">
        <span className="eyebrow">SELECTED WORK</span>
        <h1>Complicated work,<br /><em>made easier.</em></h1>
        <p>Real projects explained without the technical fog. Pick a file to see the problem, what I built, and what changed.</p>
      </section>

      <section className="case-page-files" aria-label="Case studies">
        <div className={`case-folder-experience ${folderOpen ? "is-open" : ""}`}>
          <div className="case-folder-stage" role="group" aria-label="Case study folder">
            <div className="case-folder-shadow" aria-hidden="true" />
            <div className="case-folder-back" aria-hidden="true"><span /></div>
            <div className="case-paper-stack" id="case-study-papers" role="tablist" aria-label="Choose a case study">
              {caseStudies.map((item, index) => (
                <button
                  className={`case-paper case-paper-${index + 1} ${activeCase === index ? "is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={activeCase === index}
                  aria-controls="case-study-details"
                  tabIndex={folderOpen ? 0 : -1}
                  onClick={() => setActiveCase(index)}
                  key={item.number}
                >
                  <span>{item.number}</span>
                  <small>{item.label}</small>
                  <strong>{item.title}</strong>
                  <i>Open file ↗</i>
                </button>
              ))}
            </div>
            <div className="case-folder-front">
              <button className="case-folder-toggle" type="button" aria-expanded={folderOpen} aria-controls="case-study-papers" onClick={() => setFolderOpen((open) => !open)}>
                <span>Case files</span>
                <small>{folderOpen ? "Close folder" : "Open folder"}</small>
              </button>
              <div className="case-folder-dots" aria-hidden="true">
                {caseStudies.map((item, index) => <i className={activeCase === index ? "is-active" : ""} key={item.number} />)}
              </div>
            </div>
          </div>

          <article className="case-folder-detail" id="case-study-details" role="tabpanel" aria-live="polite">
            <div className="case-title">
              <span>{selectedCase.number} · {selectedCase.label}</span>
              <h2>{selectedCase.title}</h2>
            </div>
            <section className="case-metrics" aria-label="Quantified outcomes">
              <span className="case-metrics-label">Quantified outcomes</span>
              <div className="case-metrics-grid">
                {selectedCase.metrics.map((metric) => (
                  <div className="case-metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
              <p>{selectedCase.metricBasis}</p>
            </section>
            <dl>
              <div><dt>The problem</dt><dd>{selectedCase.problem}</dd></div>
              <div><dt>What I built</dt><dd>{selectedCase.built}</dd></div>
              <div><dt>What changed</dt><dd>{selectedCase.result}</dd></div>
              <div><dt>Financial impact</dt><dd>{selectedCase.financialImpact}</dd></div>
            </dl>
            <div className="case-folder-index" aria-label="Choose a case study">
              {caseStudies.map((item, index) => (
                <button className={activeCase === index ? "is-active" : ""} type="button" onClick={() => { setActiveCase(index); setFolderOpen(true); }} key={item.number}>
                  <span>{item.number}</span>{item.label}
                </button>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="case-page-footer">
        <p>Have a complicated process of your own?</p>
        <a href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Tell me about it <ArrowUpRight size={20} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
