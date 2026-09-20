"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".interior-page #page-content > section:not(.testimonial-page-list)",
  ".testimonial-page-list > figure",
  ".course-page > section",
  ".case-studies-page > section",
  ".ecosystem > section[data-rise]",
].join(", ");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element, index) => {
      element.classList.add("site-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    });

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
