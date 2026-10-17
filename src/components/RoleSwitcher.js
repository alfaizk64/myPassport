"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Icon from "@/components/Icon";

export default function RoleSwitcher({ roles }) {
  const [i, setI] = useState(1);
  const role = roles[i];

  return (
    <div className="roles">
      <div className="roles__bar" role="group" aria-label="Kaun kya karta hai">
        <span
          className="roles__thumb"
          style={{ transform: `translateX(${i * 100}%)` }}
          aria-hidden="true"
        />
        {roles.map((r, idx) => (
          <button
            key={r.who}
            type="button"
            className="roles__btn"
            aria-pressed={i === idx}
            onClick={() => setI(idx)}
          >
            <Icon name={r.icon} size={18} />
            {r.who}
          </button>
        ))}
      </div>

      <div className="roles__panel" aria-live="polite" key={role.who}>
        <p className="roles__lead">{role.lead}</p>
        <ul className="tick-list">
          {role.points.map((p) => (
            <li key={p}>
              <Check size={18} aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
