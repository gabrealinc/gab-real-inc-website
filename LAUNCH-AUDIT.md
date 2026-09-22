# Gab Real Inc website launch audit

Updated September 21, 2026. This records local work only. The site has not been published from these changes.

## Confirmed against the current Ways to Work brief

- Six service paths: self-paced learning, AI and Systems Blueprint, practical workshops, speaking, strategic advisory, and custom AI systems.
- Blueprint price: $1,250. Custom service prices depend on scope.
- The intended inquiry flow is one GoHighLevel intake. Answers should be saved to contact fields, qualified opportunities should be created or updated, and the relevant calendar should appear after intake and qualification.
- The current learning page lists AI Foundations and Build Your AI System as in development. Enrollment is closed. The September 20 Ways to Work brief still uses the older Build Your AI OS packaging and prices, so the final course naming and pricing need a business decision before enrollment opens.

Source: [Gab Real Inc – The Menu (Ways to Work Copy)](https://docs.google.com/document/d/1upA2qYEUmnepTcDz_INZ8g28L0rB_WmgurPmCHLD9qY?tab=t.0#heading=h.0).

## Local fixes made

- Kept the editorial desk hero and its warm brand gradient. Updated the moving words to the requested service language, including AI blueprints.
- Aligned the home, services, Offer Finder, and navigation copy with the two current learning paths and removed the incorrect $1,500 minimum shown beside the $1,250 Blueprint.
- Routed general home and case study calls to action into Ways to Work.
- Made the email draft limitation visible before and after the Offer Finder intake.
- Added page titles for case studies and testimonials, a desk image for social sharing, and search engine discovery files for the confirmed gabrealinc.com domain.
- Cleared all lint errors and TypeScript errors.

## Launch blockers

1. **Intake delivery:** The Offer Finder does not send or save answers. It opens an email draft, which the visitor must send. It does not create a GoHighLevel contact or opportunity and cannot qualify or route the workshop, speaking, advisory, and systems calendars. Connect the existing GoHighLevel form or workflow, then verify a test lead end to end.
2. **Visual and interaction verification:** An administrative browser security check blocked automated inspection of the local and live site. Desktop and mobile layout, every menu action, external destination, and real form delivery still need a browser pass.
3. **Course offer decision:** Confirm whether the two course names and planned prices on `/learn` replace the Build Your AI OS, Vault, and complete package in the September 20 brief.
4. **Privacy information:** No privacy or terms page/link is present in the current site. Confirm the approved policy location before collecting leads through a live intake.

## Checks completed

- Production build succeeds and produces all seven site routes and the testimonials API.
- TypeScript type check passes.
- ESLint passes with five image optimization warnings and no errors.
- Local page links and referenced local images resolve in the repository.
- No `human-first AI` phrase remains in site source.

These checks do not prove that remote links, calendar routing, data delivery, or responsive rendering work in a browser.
