import { ImageResponse } from "next/og";

export const alt = "Iqbal Khan Passport Consultant, Dewas. Passport, PAN card and driving licence assistance.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #172B4D 0%, #0E1D38 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              background: "#0E1D38",
              border: "3px solid #E87835",
              color: "#E87835",
              fontSize: 36,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            IK
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, display: "flex" }}>
            Iqbal Khan Passport Consultant
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: "flex",
            }}
          >
            Passport Consultant in Dewas
          </div>
          <div style={{ fontSize: 36, color: "#F6B27D", display: "flex" }}>
            Passport  •  PAN Card  •  Driving Licence
          </div>
        </div>

        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.75)", display: "flex" }}>
          L-55 Supermarket, Dewas, Madhya Pradesh
        </div>
      </div>
    ),
    { ...size },
  );
}
