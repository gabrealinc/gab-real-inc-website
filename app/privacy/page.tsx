import type { Metadata } from "next";
import { InteriorShell } from "../interior-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | Gab Real Inc.",
  description: "How Gab Real Inc. handles information submitted through this website.",
};

export default function PrivacyPage() {
  return <InteriorShell>
    <article className="privacy-page">
      <span className="eyebrow">GAB REAL INC. / PRIVACY</span>
      <h1>Privacy, in <em>plain English.</em></h1>
      <p className="privacy-updated">Last updated September 28, 2026</p>
      <p>Gab Real Inc. collects information when you choose to contact us, request services, or join the Build Your AI OS waitlist. This policy explains what happens to that information on this website.</p>

      <h2>What we collect</h2>
      <p>Our work inquiry and course waitlist forms may ask for your name, email address, phone number, business details, goals, and anything else you choose to share. The site and its hosting providers may also receive technical information such as your IP address, browser type, pages visited, and basic diagnostic logs. Embedded forms may use cookies or similar technology to operate and measure submissions.</p>

      <h2>Why we use it</h2>
      <p>We use form information to respond to your request, understand whether and how we can work together, manage inquiries, and send the course updates you asked to receive. We use basic technical information to run, secure, and improve the site. We do not use your inquiry as permission to send unrelated marketing messages.</p>

      <h2>Where it goes</h2>
      <p>Our forms are provided through GoHighLevel, which stores submissions and helps us manage follow-up. Our website hosting provider processes the data needed to serve and secure the site. Email and other service providers may process information when we respond to you. We share only what is needed for these purposes or when required by law. We do not sell personal information.</p>

      <h2>Your choices</h2>
      <p>You can ask us what personal information we have about you, request a correction or deletion, or stop course emails at any time. Use the unsubscribe link in an email, when available, or write to <a href="mailto:hello@gabrealinc.com">hello@gabrealinc.com</a>. We may need to keep limited information to meet legal obligations or document a business transaction. Privacy rights can also vary by location.</p>

      <h2>How long we keep it</h2>
      <p>We keep inquiry and waitlist details only as long as reasonably needed to handle your request, maintain a business relationship, or meet legal obligations. You can ask us to review or delete your information using the address above.</p>

      <h2>Cookies and browser signals</h2>
      <p>The site and embedded forms may use cookies or similar technology for basic operation and measurement. You can manage cookies in your browser settings. This website does not currently change its data practices in response to a browser Do Not Track signal. Third-party forms may have their own tracking practices.</p>

      <h2>Other sites and changes</h2>
      <p>Links to other websites have their own privacy practices. If our forms, providers, or data practices materially change, we will update this page and its date. Questions or requests to review or change your information can be sent to <a href="mailto:hello@gabrealinc.com">hello@gabrealinc.com</a>.</p>
    </article>
  </InteriorShell>;
}
