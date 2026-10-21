type IconProps = { className?: string };

export function IconMegaphone({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.5 10.5v3c0 .8.7 1.5 1.5 1.5h2l5 3.5V6L7 9.5H5c-.8 0-1.5.7-1.5 1.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 9.2a3.2 3.2 0 0 1 0 5.6M18 7a6 6 0 0 1 0 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M7 15.5v2.2a1.8 1.8 0 0 0 2.7 1.5L11 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconDocuments({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3.75h5.2L18.5 9v11.25a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M13.2 3.75V9H18.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 13h4.5M10 16.5h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconRepair({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.7 4.4a3.8 3.8 0 0 0-5.1 5.1l-6.3 6.3a1.7 1.7 0 0 0 2.4 2.4l6.3-6.3a3.8 3.8 0 0 0 5.1-5.1l-2.5 2.5-2.4-2.4 2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
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
        d="M8.2 4.8c.4-.8 1.4-1.1 2.1-.6l1.8 1.2c.7.5.9 1.5.4 2.2l-.9 1.3a1.4 1.4 0 0 0 .2 1.8l2.7 2.7c.5.5 1.3.6 1.8.2l1.3-.9c.7-.5 1.7-.3 2.2.4l1.2 1.8c.5.7.2 1.7-.6 2.1l-1.5.8c-.8.4-1.8.3-2.7-.2-2.3-1.3-4.4-3.3-6-5.9-1.3-2.1-1.8-3.7-1.6-5 .1-.8.5-1.5 1.1-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.2 4.8c.4-.8 1.4-1.1 2.1-.6l1.8 1.2c.7.5.9 1.5.4 2.2l-.9 1.3a1.4 1.4 0 0 0 .2 1.8l2.7 2.7c.5.5 1.3.6 1.8.2l1.3-.9c.7-.5 1.7-.3 2.2.4l1.2 1.8c.5.7.2 1.7-.6 2.1l-1.5.8c-.8.4-1.8.3-2.7-.2-2.3-1.3-4.4-3.3-6-5.9-1.3-2.1-1.8-3.7-1.6-5 .1-.8.5-1.5 1.1-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.75" y="5.75" width="16.5" height="12.5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10.8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4.2l2.8 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.12" />
      <path d="m6.2 10.2 2.4 2.4 5.2-5.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGear({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M19.4 13.2v-2.4l-1.7-.3a5.8 5.8 0 0 0-.5-1.2l1-1.4-1.7-1.7-1.4 1a5.8 5.8 0 0 0-1.2-.5l-.3-1.7h-2.4l-.3 1.7a5.8 5.8 0 0 0-1.2.5l-1.4-1-1.7 1.7 1 1.4a5.8 5.8 0 0 0-.5 1.2l-1.7.3v2.4l1.7.3c.1.4.3.8.5 1.2l-1 1.4 1.7 1.7 1.4-1c.4.2.8.4 1.2.5l.3 1.7h2.4l.3-1.7c.4-.1.8-.3 1.2-.5l1.4 1 1.7-1.7-1-1.4c.2-.4.4-.8.5-1.2l1.7-.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBuilding({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 20V6.5A1.5 1.5 0 0 1 6.5 5H14a1.5 1.5 0 0 1 1.5 1.5V20" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 10H18a1 1 0 0 1 1 1v9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 20h16M8 8.5h2M8 12h2M8 15.5h2M12 8.5h2M12 12h2M12 15.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconCoins({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="9.5" cy="8" rx="5.5" ry="2.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 8v4.5c0 1.5 2.5 2.8 5.5 2.8s5.5-1.3 5.5-2.8V8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14.5 11.2c1.7.4 3.8 1.3 3.8 2.8 0 1.5-2.5 2.8-5.5 2.8-1.2 0-2.3-.2-3.2-.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14.5 14.8v2.7c0 1.5-2.5 2.8-5.5 2.8S3.5 19 3.5 17.5v-1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconPeople({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.8 18.5c.7-2.6 2.7-4 5.2-4s4.5 1.4 5.2 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16.5" cy="8.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.2 14.6c1.7-.4 3.4.2 4.5 2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
