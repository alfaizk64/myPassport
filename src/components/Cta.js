import { Navigation, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import TrackedLink from "@/components/TrackedLink";
import { directionsLink, telLink, waLink } from "@/lib/site";

export function WhatsAppButton({
  message,
  location,
  service = "general",
  className = "btn btn--wa",
  children = "WhatsApp for Guidance",
}) {
  return (
    <TrackedLink
      href={waLink(message)}
      external
      event="whatsapp_click"
      params={{ cta_location: location, service_category: service }}
      className={className}
    >
      <WhatsAppIcon size={20} />
      {children}
    </TrackedLink>
  );
}

export function CallButton({
  location,
  className = "btn btn--navy",
  children = "Call the Office",
}) {
  return (
    <TrackedLink
      href={telLink}
      event="phone_click"
      params={{ cta_location: location }}
      className={className}
    >
      <Phone size={20} aria-hidden="true" />
      {children}
    </TrackedLink>
  );
}

export function DirectionsButton({
  location,
  className = "btn btn--ghost",
  children = "Get Directions",
}) {
  return (
    <TrackedLink
      href={directionsLink}
      external
      event="directions_click"
      params={{ cta_location: location }}
      className={className}
    >
      <Navigation size={20} aria-hidden="true" />
      {children}
    </TrackedLink>
  );
}
