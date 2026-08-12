function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-30">
      <svg className="h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#39FF88" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <path d="M0 100 H200 V300 H400 V100 H600 V400 H800 V150 H1000 V450 H1200 V250 H1440" stroke="url(#trace)" strokeWidth="1.5" fill="none" />
        <circle cx="120" cy="120" r="3" fill="#00D9FF" />
        <circle cx="720" cy="260" r="2.5" fill="#39FF88" />
        <circle cx="1300" cy="210" r="3" fill="#00D9FF" />
      </svg>
    </div>
  )
}

export default CircuitBackground
