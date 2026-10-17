import { CallButton, WhatsAppButton } from "@/components/Cta";

export default function MobileContactBar() {
  return (
    <div className="mbar" role="group" aria-label="Contact options">
      <WhatsAppButton location="mobile-bar">WhatsApp</WhatsAppButton>
      <CallButton location="mobile-bar" className="btn btn--navy">
        Call Now
      </CallButton>
    </div>
  );
}
