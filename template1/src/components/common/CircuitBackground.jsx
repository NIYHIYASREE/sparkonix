import { useState } from 'react'

function CircuitBackground() {
  const [pointer, setPointer] = useState({ x: 50, y: 30 })
  const [ripples, setRipples] = useState([])

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100
    })
  }

  function handlePointerDown(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const ripple = {
      id: `${Date.now()}-${Math.random()}`,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top
    }
    setRipples((current) => [...current.slice(-3), ripple])
  }

  return (
    <div
      className="touch-ripple-field absolute inset-0 z-0 overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      style={{ '--pointer-x': `${pointer.x}%`, '--pointer-y': `${pointer.y}%` }}
      aria-hidden="true"
    >
      <div className="touch-ripple-glow" />
      {ripples.map((ripple) => (
        <span key={ripple.id} className="touch-ripple" style={{ left: ripple.x, top: ripple.y }} />
      ))}
      <svg className="h-full w-full opacity-30" viewBox="0 0 1440 900" preserveAspectRatio="none">
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
