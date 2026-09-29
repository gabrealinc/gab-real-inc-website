# Gab Real Inc. GHL workflow map

Reviewed September 28, 2026 in the Gab Real Inc. GHL location. This is a review map, not an activation record. No workflow was published or edited during this review.

## Currently present

| Workflow | GHL status | Verified path | Next check |
| --- | --- | --- | --- |
| Website Leads | Published | Inbound webhook → Create contact → Add Tag. 18 total enrollments showed in the list. | Identify what sends the webhook, the destination tag, and whether this legacy path still receives current website leads. |
| Website Inquiry Form Submission | Published | Website Contact Form submitted → Add Tag. 1 total enrollment showed in the list. | Confirm whether the older Website Contact Form is still in use. Keep it from overlapping the new intake. |
| Website \| Work With Me Intake | Draft | Specific Work With Me \| Offer Finder Intake form submitted → Create opportunity → Add Tag → Internal Notification. No enrollments. | Verify field mapping, pipeline/stage, notification recipient, consent, duplicate handling, and one test submission before publishing. |
| DRAFT – AI OS Foundations purchase, access & onboarding | Draft | Offer access granted trigger → access/welcome action. No offer filter was visible. No enrollments. | Keep draft until checkout, offer filter, course delivery, and welcome copy are ready. |
| New Lead Created | Draft | Empty builder; no trigger or actions. No enrollments. | Decide whether to complete or retire after the live paths are confirmed. |

## Needed for the current waitlist launch

| Flow | Proposed trigger and path | Verification |
| --- | --- | --- |
| Course waitlist | Build Your AI OS waitlist form submitted → create/update contact → course waitlist tag → clear confirmation email for the requested course updates. | Submit a test contact, check fields/tag and one email, confirm unsubscribe and no general marketing enrollment. |
| Work inquiry | Current Work With Me form submitted → contact → New Lead opportunity in Clients → `new lead` tag → Gabby notification → acknowledgment or personal follow-up. | Verify a test entry end to end before moving the existing draft to Published. Keep it separate from the course waitlist. |
| Discovery call booking | Appropriate discovery calendar booked → appointment confirmation and reminders → opportunity stage update; cancellation/reschedule should update the same record. | Check the right calendar link for each offer, connected availability, time zone, and a full booking/reschedule test. |
| Strategy session purchase and booking | Payment succeeds → paid session tag/opportunity → booking link for the 90-minute strategy session → prep request and reminder. | Build only after payment and booking destinations are confirmed; test payment and calendar handoff before public sale. |
| Course purchase and onboarding | Exact Build Your AI OS offer purchased/access granted → grant course access → receipt and welcome → optional Vault access only if purchased. | Wait until course and checkout are real. Add an exact offer filter so unrelated purchases cannot enter. |

## Calendar inventory

Five meeting calendars are active in GHL: `1:1 Call with Gabby (Current Clients)` (60 minutes), `Discovery Call: AI Workshop` (60 minutes), `Discovery Call: Build with Gabby` (60 minutes), `New Client Kickoff Call` (60 minutes), and `1:1 Strategy Session with Gabby` (90 minutes). Active status does not prove connected availability, correct booking links, confirmations, reminders, or payment settings. Those require a booking test.

## Decision before activation

Use the site’s current intake and waitlist forms as the source of each new workflow. Verify the older webhook and Website Contact Form first so a submission cannot create duplicate contacts or messages. No new workflow should be made live merely because its steps are present in the builder.
