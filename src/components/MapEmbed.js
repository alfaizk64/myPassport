import { directionsLink, mapEmbedSrc, SITE } from "@/lib/site";
import { DirectionsButton } from "@/components/Cta";


export default function MapEmbed() {
  return (
    <div className="map">
      <iframe
        title="Map showing the Iqbal Khan Passport Consultant office in Dewas"
        src={mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="map__bar">
        <span>{SITE.address.line1}, {SITE.address.city}</span>
        <DirectionsButton location="map" className="btn btn--navy btn--sm">
          Directions
        </DirectionsButton>
      </div>
      <a className="sr-only" href={directionsLink}>
        Open directions in Google Maps
      </a>
    </div>
  );
}
