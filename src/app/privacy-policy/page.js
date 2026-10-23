import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS_ONE_LINE, SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy | Iqbal Khan Passport Consultant",
  description:
    "How Iqbal Khan Passport Consultant in Dewas handles the information you share when you contact us or ask for help with an application.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This policy explains what information {SITE.name} handles, why, and the
        choices you have. We keep it short and plain.
      </p>

      <h2>Who we are</h2>
      <p>
        {SITE.name} is an independent document assistance office at {ADDRESS_ONE_LINE}.
        We are not a government department.
      </p>

      <h2>What this website collects</h2>
      <p>
        This website has no accounts, no enquiry form and no document upload. We do not
        ask you to enter personal details on the site. We use Google Analytics to see
        anonymous usage, such as which pages are viewed and which contact buttons are
        tapped. It does not record your name, phone number or messages, and we have
        turned off ad personalisation and Google signals for this data. Google processes
        this data under its own privacy policy, available at{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2>When you contact us</h2>
      <p>
        If you call or message us on WhatsApp, we see your phone number and whatever you
        choose to send. WhatsApp and your phone network handle those messages under their
        own policies. Please do not send identity documents in your first message. We
        will tell you what is needed and how to share it.
      </p>

      <h2>Documents you share for an application</h2>
      <ul>
        <li>We use them only to complete the application you asked us to help with.</li>
        <li>Access is limited to the people at the office who work on your case.</li>
        <li>
          They are submitted to the relevant government portals as part of your
          application. We do not sell them or use them for marketing.
        </li>
        <li>
          Copies are deleted once the work is complete, unless you ask us to keep them or
          the law requires otherwise.
        </li>
      </ul>

      <h2>Your choices</h2>
      <p>
        You can ask us what we hold about you, ask us to correct it, or ask us to delete
        it, by calling{" "}
        <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a> or messaging us on
        WhatsApp. If you are applying for a child, the request should come from a parent
        or guardian.
      </p>

      <h2>Cookies</h2>
      <p>
        This website does not set cookies for advertising. Google Analytics sets a small
        number of cookies to count visits anonymously, as described above.
      </p>

      <h2>Changes</h2>
      <p>
        If we change how we handle information, we will update this page and its date.
      </p>
    </LegalPage>
  );
}
