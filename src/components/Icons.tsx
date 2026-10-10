type IconProps = { className?: string };

export function IconMegaphone({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.5 10.5v3c0 .8.7 1.5 1.5 1.5h2l5 3.5V6L7 9.5H5c-.8 0-1.5.7-1.5 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 9.2a3.2 3.2 0 0 1 0 5.6M18 7a6 6 0 0 1 0 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M7 15.5v2.2a1.8 1.8 0 0 0 2.7 1.5L11 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconDocuments({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3.75h5.2L18.5 9v11.25a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M13.2 3.75V9H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 13h4.5M10 16.5h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconRepair({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.2 5.2a3.6 3.6 0 0 0 4.6 4.6l-3.1 3.1a1.2 1.2 0 0 1-1.7 0l-1.9-1.9a1.2 1.2 0 0 1 0-1.7l2.1-2.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 19.5 10 14M8.2 8.8 4.8 5.4a2.2 2.2 0 0 0-3.1 3.1l3.4 3.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconContact({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 4.75h9a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9.5 8.5h5M9.5 12h5M9.5 15.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.2 4.8c.4-.8 1.4-1.1 2.1-.6l1.8 1.2c.7.5.9 1.5.4 2.2l-.9 1.3a1.4 1.4 0 0 0 .2 1.8l2.7 2.7c.5.5 1.3.6 1.8.2l1.3-.9c.7-.5 1.7-.3 2.2.4l1.2 1.8c.5.7.2 1.7-.6 2.1l-1.5.8c-.8.4-1.8.3-2.7-.2-2.3-1.3-4.4-3.3-6-5.9-1.3-2.1-1.8-3.7-1.6-5 .1-.8.5-1.5 1.1-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.75" y="5.75" width="16.5" height="12.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10.8" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconChevron({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4.5 6 8.5l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
