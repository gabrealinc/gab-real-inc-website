import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteNavigation } from "./site-navigation";

export function InteriorShell({ children }: { children: ReactNode }) {
  return (
    <main className="ecosystem interior-page" id="top">
      <a className="skip-link" href="#page-content">Skip to content</a>
      <SiteNavigation />
      <div id="page-content">{children}</div>
      <SiteFooter />
    </main>
  );
}
