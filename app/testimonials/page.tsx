"use client";

import { useEffect, useState } from "react";
import { InteriorShell } from "../interior-shell";
import { visibleTestimonialFallback, type Testimonial } from "../testimonial-data";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(visibleTestimonialFallback);
  useEffect(() => {
    const controller = new AbortController();
    const refresh = () => {
      fetch("/api/testimonials", { signal: controller.signal, cache: "no-store" })
        .then((response): Promise<{ configured?: boolean; testimonials?: Testimonial[] }> => response.ok ? response.json() : Promise.reject(new Error("Testimonials unavailable")))
        .then((payload: { configured?: boolean; testimonials?: Testimonial[] }) => {
          if (payload.configured) setTestimonials(payload.testimonials ?? []);
        })
        .catch(() => undefined);
    };
    const refreshWhenVisible = () => { if (!document.hidden) refresh(); };
    refresh();
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => {
      controller.abort();
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, []);

  return (
    <InteriorShell>
      <section className="interior-hero testimonial-page-hero">
        <span className="eyebrow">CLIENT NOTES</span>
        <h1>Good work changes<br /><em>how work feels.</em></h1>
        <p>Notes from founders, consultants, and teams who wanted more clarity, more confidence, and systems they could actually use.</p>
      </section>
      <section className="testimonial-page-list" aria-label="Testimonials">
        {testimonials.length === 0 && <p className="testimonial-empty">Client notes are being updated. Please check back soon.</p>}
        {testimonials.map((testimonial, index) => (
          <figure key={testimonial.id}>
            <span>“</span><blockquote><p>{testimonial.quote}</p></blockquote>
            <figcaption><small>{testimonial.title || testimonial.service || "Client note"}</small><i>{String(index + 1).padStart(2, "0")}</i></figcaption>
          </figure>
        ))}
      </section>
    </InteriorShell>
  );
}
