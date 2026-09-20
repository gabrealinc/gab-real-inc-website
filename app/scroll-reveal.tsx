"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".ecosystem > section[data-rise]",
  ".interior-page #page-content > .interior-hero",
  ".about-story-image",
  ".about-story-copy > p",
  ".about-belief > *",
  ".service-page-grid > article",
  ".service-page-cta > *",
  ".testimonial-page-hero",
  ".testimonial-page-list > figure",
  ".course-hero",
  ".learning-steps-intro",
  ".learning-step-card",
  ".course-detail > div",
  ".course-faq > .eyebrow",
  ".course-faq > h2",
  ".course-questions > details",
  ".course-closing > *",
  ".case-page-intro > *",
  ".case-folder-stage",
  ".case-folder-detail > *",
  ".case-page-footer > *",
].join(", ");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    const register = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
      elements.forEach((element, index) => {
        if (element.dataset.scrollRevealReady === "true") return;
        element.dataset.scrollRevealReady = "true";
        element.classList.add("site-reveal");
        element.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);

        if (reducedMotion) {
          element.classList.add("is-visible");
          return;
        }

        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          window.requestAnimationFrame(() => element.classList.add("is-visible"));
        } else {
          observer.observe(element);
        }
      });
    };

    register();
    const mutationObserver = new MutationObserver(register);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
