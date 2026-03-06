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
  baseOpacity: number
  phase: number // For subtle animation variation
}

export function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)
  const isMobileRef = useRef(false)
  const timeRef = useRef(0)

  const initDots = useCallback((width: number, height: number) => {
    const dots: Dot[] = []
    // Base spacing with randomization
    const baseSpacing = isMobileRef.current ? 32 : 26
    const dotCount = isMobileRef.current ? 800 : 1500

    for (let i = 0; i < dotCount; i++) {
      // Random position with some clustering tendency
      const x = Math.random() * width
      const y = Math.random() * height
      
      // Random size variation (small to medium)
      const radius = (isMobileRef.current ? 1.2 : 0.8) + Math.random() * (isMobileRef.current ? 2 : 1.5)
      
      dots.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: 0,
        vy: 0,
        radius,
        baseOpacity: 0.06 + Math.random() * 0.08, // Very low opacity (6-14%)
        phase: Math.random() * Math.PI * 2, // Random phase for subtle breathing
      })
    }
    dotsRef.current = dots
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    timeRef.current += 0.02

    const mouseX = mouseRef.current.x
    const mouseY = mouseRef.current.y
    // Larger interaction radius on mobile for better touch experience
    const interactionRadius = isMobileRef.current ? 140 : 100
    const pushStrength = isMobileRef.current ? 12 : 10

    dotsRef.current.forEach((dot) => {
      // Calculate distance from mouse/touch
      const dx = dot.x - mouseX
      const dy = dot.y - mouseY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < interactionRadius && distance > 0) {
        // Push dots away with elastic feel
        const force = Math.pow((interactionRadius - distance) / interactionRadius, 2)
        const angle = Math.atan2(dy, dx)
        dot.vx += Math.cos(angle) * force * pushStrength
        dot.vy += Math.sin(angle) * force * pushStrength
      }

      // Spring back to origin with bouncy effect
      const springStrength = 0.04 // Softer spring for more bounce
      const damping = 0.92 // Less damping for more elasticity

      const offsetX = dot.originX - dot.x
      const offsetY = dot.originY - dot.y
      
      dot.vx += offsetX * springStrength
      dot.vy += offsetY * springStrength
      dot.vx *= damping
      dot.vy *= damping

      dot.x += dot.vx
      dot.y += dot.vy

      // Calculate current displacement for glow effect
      const displacement = Math.sqrt(offsetX * offsetX + offsetY * offsetY)
      
      // Dots glow when displaced - "light particles" effect
      const glowIntensity = Math.min(displacement / 20, 0.5)
      
      // Subtle breathing effect
      const breathe = Math.sin(timeRef.current + dot.phase) * 0.02
      
      const currentOpacity = Math.min(dot.baseOpacity + glowIntensity + breathe, 0.6)

      // Draw dot with radial gradient for soft edges
      const gradient = ctx.createRadialGradient(
        dot.x, dot.y, 0,
        dot.x, dot.y, dot.radius
      )
      gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`)
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${currentOpacity * 0.5})`)
      gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)

      ctx.beginPath()
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
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
      style={{ touchAction: "none", mixBlendMode: "overlay" }}
    />
  )
}
