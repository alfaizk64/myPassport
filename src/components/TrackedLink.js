// Plain link. Click tracking is done by one delegated listener (see SiteScripts),
// so there is no per-link client component.
export default function TrackedLink({ event, params, external, children, ...rest }) {
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(event ? { "data-ev": event, "data-p": JSON.stringify(params ?? {}) } : {})}
    >
      {children}
    </a>
  );
}
