import approvedSnapshot from "./approved-testimonial-snapshot.json";

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  service: string;
  quote: string;
};

// Approved Notion snapshot until a live Notion integration is connected.
export const visibleTestimonialFallback: Testimonial[] = approvedSnapshot;
