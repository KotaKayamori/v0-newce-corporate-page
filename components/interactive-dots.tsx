"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  radius: number
  color: string
}

export function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const parent = canvas.parentElement
    if (!parent) return

    let width = 0
    let height = 0
    const isMobile = window.innerWidth < 768

    const initCanvas = () => {
      const rect = parent.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      
      width = rect.width
      height = rect.height
      
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      
      ctx.scale(dpr, dpr)
      
      initParticles()
    }

    const initParticles = () => {
      particlesRef.current = []
      
      // Create particles in a loose grid with randomness
      const spacing = isMobile ? 60 : 50
      const cols = Math.ceil(width / spacing) + 2
      const rows = Math.ceil(height / spacing) + 2
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Add randomness to position
          const x = i * spacing + (Math.random() - 0.5) * spacing * 0.8
          const y = j * spacing + (Math.random() - 0.5) * spacing * 0.8
          
          // Random size variation
          const radius = isMobile 
            ? 3 + Math.random() * 4
            : 4 + Math.random() * 5
          
          // White with slight transparency variation
          const alpha = 0.3 + Math.random() * 0.3
          
          particlesRef.current.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
            radius,
            color: `rgba(255, 255, 255, ${alpha})`,
          })
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y
      const interactionRadius = isMobile ? 120 : 100
      const springStrength = 0.08
      const friction = 0.85

      particlesRef.current.forEach((p) => {
        // Calculate distance from mouse
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Mouse repulsion
        if (distance < interactionRadius && distance > 0) {
          const force = (interactionRadius - distance) / interactionRadius
          const angle = Math.atan2(dy, dx)
          const pushForce = force * force * 15
          
          p.vx -= Math.cos(angle) * pushForce
          p.vy -= Math.sin(angle) * pushForce
        }

        // Spring back to origin
        const dxOrigin = p.originX - p.x
        const dyOrigin = p.originY - p.y
        
        p.vx += dxOrigin * springStrength
        p.vy += dyOrigin * springStrength

        // Apply friction
        p.vx *= friction
        p.vy *= friction

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Draw particle with glow effect
        const currentRadius = p.radius + Math.abs(p.vx + p.vy) * 0.5
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, currentRadius * 2.5
        )
        gradient.addColorStop(0, p.color)
        gradient.addColorStop(0.4, `rgba(255, 255, 255, 0.15)`)
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, currentRadius * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

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
      mouseRef.current = { x: -9999, y: -9999 }
    }

    // Initialize
    initCanvas()
    
    // Event listeners
    window.addEventListener("resize", initCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchMove, { passive: true })
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true })
    canvas.addEventListener("touchend", handleTouchEnd)

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", initCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        touchAction: "none",
        zIndex: 10,
      }}
    />
  )
}
