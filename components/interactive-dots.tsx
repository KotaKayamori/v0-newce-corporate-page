"use client"

import { useEffect, useRef, useCallback } from "react"

interface Dot {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)
  const isMobileRef = useRef(false)

  const initDots = useCallback((width: number, height: number) => {
    const dots: Dot[] = []
    // Adjust dot spacing based on screen size
    const spacing = isMobileRef.current ? 28 : 22
    const cols = Math.ceil(width / spacing)
    const rows = Math.ceil(height / spacing)

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing + spacing / 2
        const y = j * spacing + spacing / 2
        dots.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          radius: isMobileRef.current ? 1.5 : 1.2,
          opacity: 0.15 + Math.random() * 0.1, // Very subtle opacity
        })
      }
    }
    dotsRef.current = dots
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const mouseX = mouseRef.current.x
    const mouseY = mouseRef.current.y
    // Larger interaction radius on mobile for better touch experience
    const interactionRadius = isMobileRef.current ? 120 : 80
    const pushStrength = isMobileRef.current ? 8 : 6

    dotsRef.current.forEach((dot) => {
      // Calculate distance from mouse/touch
      const dx = dot.x - mouseX
      const dy = dot.y - mouseY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < interactionRadius && distance > 0) {
        // Push dots away from cursor/touch
        const force = (interactionRadius - distance) / interactionRadius
        const angle = Math.atan2(dy, dx)
        dot.vx += Math.cos(angle) * force * pushStrength
        dot.vy += Math.sin(angle) * force * pushStrength
      }

      // Spring back to origin
      const springStrength = 0.08
      const damping = 0.9

      dot.vx += (dot.originX - dot.x) * springStrength
      dot.vy += (dot.originY - dot.y) * springStrength
      dot.vx *= damping
      dot.vy *= damping

      dot.x += dot.vx
      dot.y += dot.vy

      // Calculate current displacement for glow effect
      const displacement = Math.sqrt(
        Math.pow(dot.x - dot.originX, 2) + Math.pow(dot.y - dot.originY, 2)
      )
      
      // Dots glow slightly when displaced
      const glowIntensity = Math.min(displacement / 30, 0.4)
      const currentOpacity = dot.opacity + glowIntensity

      // Draw dot with subtle transparency
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
      ctx.fill()
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const parent = canvas.parentElement
    if (!parent) return

    const resizeCanvas = () => {
      const rect = parent.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      
      isMobileRef.current = window.innerWidth < 768
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.scale(dpr, dpr)
      }
      
      initDots(rect.width, rect.height)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    // Touch events
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        }
      }
    }

    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchMove, { passive: true })
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true })
    canvas.addEventListener("touchend", handleTouchEnd)

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationRef.current)
    }
  }, [initDots, animate])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-10"
      style={{ touchAction: "none" }}
    />
  )
}
