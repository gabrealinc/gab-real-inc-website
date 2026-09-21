"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const photographs = {
  desk: "https://images.unsplash.com/photo-1728314167356-4bb8ee3b2256?auto=format&fit=crop&w=1600&q=82",
  workspace: "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33?auto=format&fit=crop&w=1000&q=82",
  keyboard: "https://images.unsplash.com/photo-1698422454438-da3c03db4d96?auto=format&fit=crop&w=1000&q=82",
};

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = parallaxRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      [
        { layer: "1", yPercent: -15 },
        { layer: "2", yPercent: 27 },
        { layer: "3", yPercent: -24 },
        { layer: "4", yPercent: 18 },
      ].forEach(({ layer, yPercent }, index) => {
        timeline.to(section.querySelectorAll(`[data-parallax-layer="${layer}"]`), {
          yPercent,
          ease: "none",
        }, index === 0 ? 0 : "<");
      });
    }, section);

    // Keep touch scrolling native. Lenis only softens the desktop scroll motion.
    const lenis = window.matchMedia("(pointer: fine)").matches ? new Lenis() : null;
    const tick = (time: number) => lenis?.raf(time * 1000);
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
    }

    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      context.revert();
    };
  }, []);

  return (
    <section className="parallax-computers" ref={parallaxRef} aria-label="Make technology work for your life">
      <div className="parallax-computers__stage" data-parallax-layers>
        <img className="parallax-computers__image parallax-computers__image--main" src={photographs.desk} width="1600" height="1067" alt="A warm-toned computer workspace" loading="lazy" data-parallax-layer="1" />
        <img className="parallax-computers__image parallax-computers__image--side" src={photographs.workspace} width="1000" height="1250" alt="Computer and keyboard in a creative workspace" loading="lazy" data-parallax-layer="2" />
        <div className="parallax-computers__title" data-parallax-layer="3">
          <span>THE TOOLS SHOULD WORK FOR YOU</span>
          <h2>Less busywork.<br /><em>More life.</em></h2>
        </div>
        <img className="parallax-computers__image parallax-computers__image--detail" src={photographs.keyboard} width="1000" height="800" alt="Hands typing at a computer" loading="lazy" data-parallax-layer="4" />
      </div>
    </section>
  );
}
