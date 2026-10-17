import WhatsAppIcon from "@/components/WhatsAppIcon";
import TrackedLink from "@/components/TrackedLink";
import { waLink } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <TrackedLink
      href={waLink()}
      external
      event="whatsapp_click"
      params={{ cta_location: "floating" }}
      className="fwa"
      aria-label="Chat with Iqbal Khan on WhatsApp"
    >
      <WhatsAppIcon size={26} />
      WhatsApp us
    </TrackedLink>
  );
}
