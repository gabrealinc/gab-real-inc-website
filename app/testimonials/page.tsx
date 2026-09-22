"use client";

import { useEffect, useState } from "react";
import { InteriorShell } from "../interior-shell";
import { approvedTestimonialFallback, type Testimonial } from "../testimonial-data";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(approvedTestimonialFallback);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/testimonials", { signal: controller.signal })
      .then((response): Promise<{ configured?: boolean; testimonials?: Testimonial[] }> => response.ok ? response.json() : Promise.reject(new Error("Testimonials unavailable")))
      .then((payload: { configured?: boolean; testimonials?: Testimonial[] }) => {
        if (payload.configured && payload.testimonials?.length) setTestimonials(payload.testimonials);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  return (
    <InteriorShell>
      <section className="interior-hero testimonial-page-hero">
        <span className="eyebrow">CLIENT NOTES</span>
        <h1>Good work changes<br /><em>how work feels.</em></h1>
        <p>Notes from founders, consultants, and teams who wanted more clarity, more confidence, and systems they could actually use.</p>
      </section>
      <section className="testimonial-page-list" aria-label="Testimonials">
        {testimonials.map((testimonial, index) => (
          <figure key={testimonial.id}>
            <span>“</span><blockquote><p>{testimonial.quote}</p></blockquote>
            <figcaption><strong>{testimonial.name}</strong><small>{testimonial.title || testimonial.service}</small><i>{String(index + 1).padStart(2, "0")}</i></figcaption>
          </figure>
        ))}
      </section>
    </InteriorShell>
  );
}
