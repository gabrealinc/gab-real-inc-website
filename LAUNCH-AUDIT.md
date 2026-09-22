# Gab Real Inc website launch audit

Updated September 21, 2026. This records work on the `codex/website-launch-infrastructure` GitHub branch. The site has not been published from these changes.

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
- Replaced the Offer Finder's unsent email draft with the new GoHighLevel intake. Its result panel now embeds the form and offers a direct link if the embed is unavailable.
- Added page titles for case studies and testimonials, a desk image for social sharing, and search engine discovery files for the confirmed gabrealinc.com domain.
- Updated the local testimonials preview to show all 26 current Notion testimonial records. Removed client names from the testimonials page and the homepage quote, including the quote selector labels. The public build still limits testimonials to records marked `On Website` in Notion.
- Separated self-paced courses from direct work with Gabby in the menu, footer, homepage, and page introductions. The direct-work page now lists five services and its finder routes only to those services, with a clear link to the courses for people who prefer to learn independently.
- Cleared all lint errors and TypeScript errors.

## Launch blockers

1. **GHL routing:** The new `Work With Me | Offer Finder Intake` form is live at [the intake URL](https://links.gabrealinc.com/widget/form/i1x5pHufXkhLxVxCgX0K). A public test submission created a contact and saved the selected AI blueprints service and all written answers. GHL showed it as `Form 3` until the builder's internal form name was corrected. The new workflow remains a draft because its `Form submitted` trigger initially did not list this form. Retest the trigger after the name change, then scope it to this form, create or update a Clients pipeline opportunity, and verify routing. Do not publish a trigger that catches every form.
2. **Visual and interaction verification:** The local and live site still need a complete desktop and mobile browser pass, including the embedded GHL form, navigation, every external destination, and calendar links.
3. **Course offer decision:** Confirm whether the two course names and planned prices on `/learn` replace the Build Your AI OS, Vault, and complete package in the September 20 brief.
4. **Privacy information:** No approved privacy or terms destination has been found on the current or new site. Confirm the approved policy location before launch with live lead collection.
5. **Testimonial publication:** Only 1 of the 26 Notion testimonial records is marked `On Website`. The other 25 now appear in the local review preview but remain gated from the public build. One LACES testimonial record explicitly says its final wording and attribution need confirmation before public use. Review and approve the intended public quotes in Notion before launch.

## Checks completed

- Production build succeeds and produces all seven site routes and the testimonials API.
- TypeScript type check passes.
- ESLint passes with five image optimization warnings and no errors.
- Local page links and referenced local images resolve in the repository. The new GHL intake URL returns HTTP 200, and its public form successfully saved a test lead.
- No `human-first AI` phrase remains in site source.
- The local `/testimonials` response contains 26 quote cards and no displayed client names.

These checks do not prove that the new embed renders and submits in the site, that calendar and opportunity routing works, or that responsive rendering is correct.
