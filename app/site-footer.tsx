import { ArrowUp, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Gabby" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/learn", label: "About the course" },
  { href: "/case-studies", label: "Case studies" },
];

export function SiteFooter() {
  return (
    <footer className="shared-page-footer">
      <div className="shared-footer-top">
        <a className="brand-wordmark" href="/" aria-label="Gab Real Inc. home"><span>GAB REAL INC</span><sup>®</sup></a>
        <p>Use AI to think more clearly.<br />Build what matters.</p>
        <a className="shared-footer-top-link" href="#top">Back to top <ArrowUp size={17} /></a>
      </div>
      <nav className="shared-footer-nav" aria-label="Footer navigation">
        {footerLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
      </nav>
      <div className="shared-footer-bottom">
        <span>© 2026 GAB REAL INC.</span>
        <a href="https://links.gabrealinc.com/widget/bookings/1-on-1-with-gabby" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={18} /></a>
      </div>
    </footer>
  );
}
