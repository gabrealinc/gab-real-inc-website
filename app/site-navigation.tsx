"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  ["about gabby", "/about"],
  ["testimonials", "/testimonials"],
  ["case studies", "/case-studies"],
  ["about the course", "/learn"],
  ["services", "/services"],
];

export function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    let animationFrame = 0;
    const update = () => {
      animationFrame = 0;
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScroll.current;
      setNavScrolled(currentScroll > 24);
      if (currentScroll < 90 || delta < -5) setNavVisible(true);
      else if (currentScroll > 150 && delta > 5) setNavVisible(false);
      lastScroll.current = currentScroll;
    };
    const onScroll = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={`nav-underlay nav-underlay-tan ${menuOpen ? "is-open" : ""}`} aria-hidden="true" />
      <div className={`nav-underlay nav-underlay-yellow ${menuOpen ? "is-open" : ""}`} aria-hidden="true" />
      <header className={`layer-nav ${menuOpen ? "is-open" : ""} ${navScrolled ? "is-scrolled" : ""} ${!navVisible && !menuOpen ? "is-hidden" : ""}`}>
        <div className="layer-nav-bar">
          <a className="layer-wordmark brand-wordmark" href="/" onClick={closeMenu} aria-label="Gab Real Inc. home">
            <span>GAB REAL INC</span><sup>®</sup>
          </a>
          <button className="layer-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="layer-menu" onClick={() => setMenuOpen((open) => !open)}>
            <span>{menuOpen ? "Close" : "Menu"}</span>
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={25} strokeWidth={1.5} />}
          </button>
        </div>
        <div className="layer-menu" id="layer-menu" aria-hidden={!menuOpen}>
          <div className="layer-contact">
            <p>Use AI to think more clearly. Build what matters.</p>
            <a href="mailto:hello@gabrealinc.com">hello@gabrealinc.com</a>
            <span>San Diego · working everywhere</span>
          </div>
          <nav aria-label="Main navigation">
            {navLinks.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          </nav>
          <div className="layer-secondary">
            <a href="/#more" onClick={closeMenu}>More to life</a>
            <a href="/#contact" onClick={closeMenu}>Let’s talk</a>
            <a href="https://growithgab.substack.com/" target="_blank" rel="noreferrer">Writing ↗</a>
            <a href="https://www.instagram.com/aiwithgab/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </div>
      </header>
    </>
  );
}
