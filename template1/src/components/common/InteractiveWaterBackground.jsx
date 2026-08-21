import { useEffect, useRef } from 'react'

const MAX_RIPPLES = 18
const RIPPLE_LIFETIME = 2200

function InteractiveWaterBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d', { alpha: true })
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const ripples = []
    let animationFrame
    let width = 0
    let height = 0
    let dpr = 1
    let lastFrame = 0
    let lastMoveRipple = 0

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function addRipple(x, y, strength = 1) {
      if (reducedMotion.matches) return
      ripples.push({ x, y, startedAt: performance.now(), strength })
      if (ripples.length > MAX_RIPPLES) ripples.shift()
    }

    function isInteractiveTarget(target) {
      return target instanceof Element && Boolean(target.closest('a, button, input, textarea, select, [role="button"]'))
    }

    function handlePointerDown(event) {
      if (!isInteractiveTarget(event.target)) addRipple(event.clientX, event.clientY, 1.15)
    }

    function handlePointerMove(event) {
      if (event.pointerType !== 'mouse' || isInteractiveTarget(event.target)) return
      const now = performance.now()
      if (now - lastMoveRipple > 140) {
        addRipple(event.clientX, event.clientY, 0.42)
        lastMoveRipple = now
      }
    }

    function draw(timestamp) {
      const delta = Math.min(timestamp - lastFrame || 16, 50)
      lastFrame = timestamp
      context.clearRect(0, 0, width, height)

      const wash = context.createLinearGradient(0, 0, width, height)
      wash.addColorStop(0, 'rgba(3, 20, 38, 0.5)')
      wash.addColorStop(0.5, 'rgba(5, 13, 29, 0.2)')
      wash.addColorStop(1, 'rgba(8, 28, 38, 0.5)')
      context.fillStyle = wash
      context.fillRect(0, 0, width, height)

      const time = reducedMotion.matches ? 0 : timestamp * 0.00032
      context.save()
      context.globalCompositeOperation = 'screen'
      context.lineWidth = 1
      for (let row = -40; row < height + 40; row += 44) {
        context.beginPath()
        for (let x = -20; x < width + 20; x += 18) {
          const y = row + Math.sin(x * 0.009 + time * 3 + row * 0.02) * 5 + Math.sin(x * 0.021 - time * 2) * 2
          if (x === -20) context.moveTo(x, y)
          else context.lineTo(x, y)
        }
        context.strokeStyle = `rgba(41, 173, 192, ${0.045 + (row / height) * 0.012})`
        context.stroke()
      }
      context.restore()

      const now = timestamp
      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index]
        const age = now - ripple.startedAt
        if (age > RIPPLE_LIFETIME) {
          ripples.splice(index, 1)
          continue
        }
        const progress = age / RIPPLE_LIFETIME
        const ease = 1 - Math.pow(1 - progress, 3)
        const radius = (18 + Math.min(width, height) * 0.34) * ease * ripple.strength
        const opacity = (1 - progress) ** 2
        context.save()
        context.globalCompositeOperation = 'screen'
        context.lineWidth = 1.2 + opacity * 1.4
        for (let ring = 0; ring < 3; ring += 1) {
          const ringRadius = radius * (0.72 + ring * 0.16)
          context.beginPath()
          context.arc(ripple.x, ripple.y, ringRadius, 0, Math.PI * 2)
          context.strokeStyle = ring === 1
            ? `rgba(116, 234, 230, ${opacity * 0.42})`
            : `rgba(0, 217, 255, ${opacity * (0.24 - ring * 0.045)})`
          context.stroke()
        }
        const highlight = context.createRadialGradient(ripple.x, ripple.y, 0, ripple.x, ripple.y, radius)
        highlight.addColorStop(0, `rgba(169, 255, 248, ${opacity * 0.12})`)
        highlight.addColorStop(0.32, 'rgba(0, 217, 255, 0)')
        highlight.addColorStop(1, 'rgba(0, 217, 255, 0)')
        context.fillStyle = highlight
        context.fillRect(ripple.x - radius, ripple.y - radius, radius * 2, radius * 2)
        context.restore()
      }

      animationFrame = window.requestAnimationFrame(draw)
      void delta
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    animationFrame = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="interactive-water-background" aria-hidden="true" />
}

export default InteractiveWaterBackground
