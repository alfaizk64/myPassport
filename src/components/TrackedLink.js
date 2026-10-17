"use client";

import { track } from "@/lib/analytics";

export default function TrackedLink({
  event,
  params,
  external,
  onClick,
  children,
  ...rest
}) {
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={(e) => {
        if (event) track(event, params);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
