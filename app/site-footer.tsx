const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/learn", label: "Course" },
  { href: "/case-studies", label: "Case studies" },
];

export function SiteFooter() {
  return (
    <footer className="ecosystem-footer">
      <a className="footer-wordmark brand-wordmark" href="/" aria-label="Gab Real Inc. home"><span>GAB REAL INC</span><sup>®</sup></a>
      <p>Use AI to think more clearly.<br />Build what matters.</p>
      <nav aria-label="Footer navigation">
        {footerLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
      </nav>
    </footer>
  );
}
