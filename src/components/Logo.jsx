export default function Logo() {
  return (
    <span className="logo">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5b5bf0" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#logo-g)" />
        <path d="M9 10h14M16 10v13M11 16h4" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="logo__word">Tallybase</span>
    </span>
  )
}
