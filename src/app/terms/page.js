import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { DISCLAIMER, SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms and Disclaimer | Iqbal Khan Passport Consultant",
  description:
    "What Iqbal Khan Passport Consultant in Dewas does and does not do, how fees work and where official decisions rest.",
  path: "/terms/",
});

export default function Terms() {
  return (
    <LegalPage title="Terms and Disclaimer">
      <p>{DISCLAIMER}</p>

      <h2>What we do</h2>
      <p>
        We explain the application process, prepare a document checklist, help you
        complete forms and prepare for appointments and tests for passport, PAN card
        and driving licence applications.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>Issue passports, PAN cards or driving licences.</li>
        <li>Guarantee approval, appointment dates or processing times.</li>
        <li>Attend biometrics, interviews or driving tests on your behalf.</li>
        <li>Represent ourselves as, or act as, a government office.</li>
      </ul>

      <h2>Fees</h2>
      <p>
        Government fees are set by the relevant authority and paid on the official
        portal. Our own charge is confirmed with you before work begins. Starting prices
        shown on this website are a guide and the final amount depends on your case.
      </p>

      <h2>Your responsibilities</h2>
      <p>
        You are responsible for the accuracy of the information and the genuineness of
        the documents you provide, and for attending any step that needs your presence.
      </p>

      <h2>Information on this website</h2>
      <p>
        Rules, fees and timelines set by the authorities change. The information here
        is general guidance, last reviewed {SITE.contentReviewed}. Always confirm the
        current requirements on the official portal.
      </p>

      <h2>Third-party services</h2>
      <p>
        Links to official portals, WhatsApp and maps open services we do not control.
        Their own terms apply.
      </p>

      <h2>Limits of responsibility</h2>
      <p>
        To the extent permitted by law, we are not responsible for decisions, delays or
        outcomes that rest with government authorities.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Call{" "}
        <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a>.
      </p>
    </LegalPage>
  );
}
