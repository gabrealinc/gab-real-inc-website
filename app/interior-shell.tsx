import type { ReactNode } from "react";
import { SiteNavigation } from "./site-navigation";

export function InteriorShell({ children }: { children: ReactNode }) {
  return (
    <main className="ecosystem interior-page" id="top">
      <a className="skip-link" href="#page-content">Skip to content</a>
      <SiteNavigation />
      <div id="page-content">{children}</div>
      <footer className="interior-footer">
        <a className="brand-wordmark" href="/" aria-label="Gab Real Inc. home"><span>GAB REAL INC</span><sup>®</sup></a>
        <p>Use AI to think more clearly. Build what matters.</p>
        <a href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Start a conversation ↗</a>
      </footer>
    </main>
  );
}
