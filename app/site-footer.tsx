import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Work with Gabby" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/learn", label: "Build Your AI OS" },
  { href: "/past-work", label: "Past Work" },
];

export function SiteFooter() {
  return (
    <footer className="ecosystem-footer">
      <Link className="footer-wordmark brand-wordmark" href="/" aria-label="Gab Real Inc. home"><span>GAB REAL INC</span><sup>®</sup></Link>
      <p>AI made simple.<br />Start wherever you are.</p>
      <nav aria-label="Footer navigation">
        {footerLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
      </nav>
    </footer>
  );
}
