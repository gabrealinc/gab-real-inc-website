# Gab Real Inc website launch audit

Updated September 28, 2026. This is a readiness record for the `codex/website-launch-infrastructure` branch. The site is still private and has not been launched on gabrealinc.com. See [GHL-WORKFLOW-MAP.md](./GHL-WORKFLOW-MAP.md) for the verified automation and calendar inventory.

## Current positioning and offers

The current [About Gab Real Inc](https://app.notion.com/p/374a4fa77eaf81f1967bd7b999e5cbd7), [Founder Freedom & Revenue System](https://app.notion.com/p/3cfa4fa77eaf811da721d1fef4f6aeda), and [Build Your AI OS](https://app.notion.com/p/3dda4fa77eaf80b3a905efcba3558e84) pages describe one clear offer ladder: LEARN IT, MAP IT, TEACH IT, BUILD IT. The direct-work entry offer is a $350, 90-minute Strategy Session; the independent AI and Systems Blueprint is $1,250. Workshops, speaking, advisory, and custom systems are scoped separately. Build Your AI OS is one $397 course with an optional $197 Vault and a planned $497 bundle. The course remains in development and the website offers a waitlist, not checkout. A 30-day build path is an optional curriculum structure, not a committed daily challenge.

The services page and Offer Finder now include the Strategy Session and use the current offer language. The course page shows one course price and describes the Vault as an add-on. The public GHL Work With Me form now lists Strategy Session instead of self-paced learning. The user's preference to avoid the phrase “human-first AI” takes precedence over the newer Notion draft; it does not appear in site copy.

## Verified this review

- `npm run build` succeeded after the offer edits.
- The Work With Me and Build Your AI OS waitlist GHL forms rendered inside their local site pages in Chrome. The intake form's service picker was updated and its GHL builder name is `Work With Me | Offer Finder Intake`.
- The GHL `Website | Work With Me Intake` workflow has a form-specific `Form Submitted` trigger, a `Clients` pipeline opportunity action at `New Lead`, a `new lead` tag action, and an in-app notification to Gabrielle Greenberg. It is saved as a draft and has not been activated or tested end to end.
- The current Notion Client Testimonials database has 15 records checked `On Website`. The site's approved fallback snapshot has the same 15 record IDs. Client names are not displayed in the testimonial page design. The live Notion API integration is not connected, so future changes will not appear automatically.
- Sampled frames and the poster from the LUXX portal walkthrough show the patient interface heavily blurred. This is a visual spot check, not a frame-by-frame or client-permission review.
- The managed Site remains private with no custom domain attached. Its current live URL is `https://gab-real-inc.gabrealinc.chatgpt.site` and only the owner is allowed access.
- The course page now uses a visual build-as-you-learn presentation, one course price, an optional 30-day path, and a waitlist. The homepage leads its service selector with AI advice. The book preview uses the four parts and chapter titles from the current ebook manuscript. The services photo story moved below the offers with a plain-English heading.
- A plain-English privacy page is linked in the footer and beside the site's two embedded lead forms. The site build succeeds. The current course hero was checked at desktop and mobile viewport sizes.

## Required before a public, lead-collecting launch

1. **Privacy review.** The new policy covers the known site and GHL form uses. Confirm the contact email, actual provider list, retention practice, cookies/analytics, and embedded form consent match production before making the site public. A posted policy cannot guarantee legal compliance by itself. Review checkout terms when payment opens.
2. **GHL lead handling.** The Work With Me draft now creates a `New Lead` opportunity in `Clients`, adds the `new lead` tag, and alerts Gabby in-app. Review the calendar handoff and test the full route before activating it. Create and test a separate course waitlist tag/workflow and confirmation. Keep each workflow scoped to its own form. Do a real test submission with disposable contact details, then check contact fields, list/tag, opportunity, notifications, and confirmation. Avoid publishing an untested broad trigger.
3. **Public work media.** Gabby confirmed LUXX and LACES permit public project display. The walkthrough files are heavily compressed, and the original screenshots are no longer available at their temporary paths. Obtain sharp, redacted exports or new recordings before replacing them; project permission alone does not establish permission to show individual patient or athlete details. Review every frame and poster before public release.
4. **Final QA.** Review homepage, About, Services, Learn, Testimonials, and Past Work on desktop and mobile; test navigation, forms, external links, and calendar destinations in the deployed build. Confirm the selected cosmic collage hero and mobile crop.
5. **Deployment and domain.** Publish the approved build, connect and verify `gabrealinc.com`, check SSL and redirects, then repeat the form smoke test on the real domain. The current hosted Site is private and has no custom domain.

## Can follow the initial launch

- Connect a read-only Notion integration so checked testimonials refresh automatically; until then the 15 approved quotes are a manual snapshot.
- Finish course lessons, the optional Vault, $497 bundle checkout, access delivery, and purchase automation before opening enrollment. These do not block a waitlist-only launch.
- Refine a 30-day build path after the curriculum is real. Avoid promising 30 daily lessons before they exist.
