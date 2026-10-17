"use client";

import { useSyncExternalStore } from "react";
import { SITE } from "@/lib/site";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function subscribe(cb) {
  const id = setInterval(cb, 30000);
  return () => clearInterval(id);
}

// One string per minute, in Indian time, so it is a stable snapshot.
function snapshot() {
  const p = Object.fromEntries(fmt.formatToParts(new Date()).map((x) => [x.type, x.value]));
  return `${p.weekday}|${p.hour}:${p.minute}`;
}

const toMin = (t) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));
const label = (t) => {
  const h = Number(t.slice(0, 2));
  const m = t.slice(3, 5);
  return `${h % 12 || 12}${m === "00" ? "" : `:${m}`} ${h >= 12 ? "PM" : "AM"}`;
};

function status(snap) {
  const [day, time] = snap.split("|");
  const now = toMin(time);
  const slot = (d) => SITE.hoursSchema.find((h) => h.days.includes(d));
  const today = slot(day);
  if (today && now >= toMin(today.opens) && now < toMin(today.closes)) {
    return { open: true, text: `Abhi khula hai · ${label(today.closes)} tak` };
  }
  if (today && now < toMin(today.opens)) {
    return { open: false, text: `Abhi band hai · aaj ${label(today.opens)} se` };
  }
  const start = DAYS.indexOf(day);
  for (let i = 1; i <= 7; i++) {
    const d = DAYS[(start + i) % 7];
    const s = slot(d);
    if (s) {
      return { open: false, text: `Abhi band hai · ${i === 1 ? "kal" : d} ${label(s.opens)} se` };
    }
  }
  return null;
}

export default function OpenNow({ className = "" }) {
  const snap = useSyncExternalStore(subscribe, snapshot, () => null);
  if (!SITE.hoursSchema || !snap) return <span className={`open open--wait ${className}`} aria-hidden="true" />;
  const s = status(snap);
  if (!s) return null;
  return (
    <span className={`open ${s.open ? "open--yes" : "open--no"} ${className}`}>
      <i className="open__dot" aria-hidden="true" />
      {s.text}
    </span>
  );
}
