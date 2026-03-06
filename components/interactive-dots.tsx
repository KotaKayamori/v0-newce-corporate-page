"use client"

import { useEffect, useRef, useCallback } from "react"

interface Blob {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  targetRadius: number
  wobble: number
  wobbleSpeed: number
  wobblePhase: number
}

export function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const blobsRef = useRef<Blob[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })
  const animationRef = useRef<number>(0)
  const isMobileRef = useRef(false)
  const timeRef = useRef(0)
  const lastMouseRef = useRef({ x: -1000, y: -1000 })

  const initBlobs = useCallback((width: number, height: number) => {
    const blobs: Blob[] = []
    // Only 30-50 larger blobs for fluid feel
    const blobCount = isMobileRef.current ? 25 : 40

    for (let i = 0; i < blobCount; i++) {
      const baseRadius = isMobileRef.current 
        ? 30 + Math.random() * 50 
        : 40 + Math.random() * 80
      
      blobs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: baseRadius,
        targetRadius: baseRadius,
        wobble: Math.random() * 10,
        wobbleSpeed: 0.02 + Math.random() * 0.03,
        wobblePhase: Math.random() * Math.PI * 2,
      })
    }
    blobsRef.current = blobs
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width / (window.devicePixelRatio || 1)
    const height = canvas.height / (window.devicePixelRatio || 1)

    // Clear with transparent
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    timeRef.current += 0.016

    const mouseX = mouseRef.current.x
    const mouseY = mouseRef.current.y
    const mouseActive = mouseRef.current.active
    
    // Calculate mouse velocity for fluid disturbance
    const mouseVelX = mouseX - lastMouseRef.current.x
    const mouseVelY = mouseY - lastMouseRef.current.y
    lastMouseRef.current = { x: mouseX, y: mouseY }

    const interactionRadius = isMobileRef.current ? 180 : 150

    // Update and draw blobs
    blobsRef.current.forEach((blob, i) => {
      // Autonomous slow drifting movement
      blob.x += blob.vx
      blob.y += blob.vy
      
      // Soft boundary bouncing
      if (blob.x < -blob.radius) blob.x = width + blob.radius
      if (blob.x > width + blob.radius) blob.x = -blob.radius
      if (blob.y < -blob.radius) blob.y = height + blob.radius
      if (blob.y > height + blob.radius) blob.y = -blob.radius

      // Mouse/touch interaction - fluid displacement
      const dx = blob.x - mouseX
      const dy = blob.y - mouseY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < interactionRadius && distance > 0 && mouseActive) {
        // Push blobs away like stirring water
        const force = Math.pow((interactionRadius - distance) / interactionRadius, 2)
        const pushStrength = isMobileRef.current ? 8 : 6
        
        // Add mouse velocity influence for "dragging" feel
        blob.vx += (dx / distance) * force * pushStrength + mouseVelX * 0.1 * force
        blob.vy += (dy / distance) * force * pushStrength + mouseVelY * 0.1 * force
        
        // Squish the blob when touched
        blob.targetRadius = blob.radius * (1 - force * 0.3)
      } else {
        // Return to original size
        blob.targetRadius = blob.radius
      }

      // Viscous drag (high viscosity = slow, syrupy)
      const viscosity = 0.96
      blob.vx *= viscosity
      blob.vy *= viscosity

      // Blob-blob soft repulsion (surface tension)
      blobsRef.current.forEach((other, j) => {
        if (i === j) return
        const odx = blob.x - other.x
        const ody = blob.y - other.y
        const odist = Math.sqrt(odx * odx + ody * ody)
        const minDist = (blob.radius + other.radius) * 0.6
        
        if (odist < minDist && odist > 0) {
          const repel = (minDist - odist) / minDist * 0.5
          blob.vx += (odx / odist) * repel
          blob.vy += (ody / odist) * repel
        }
      })

      // Wobble animation for organic feel
      blob.wobblePhase += blob.wobbleSpeed
      const wobbleAmount = Math.sin(blob.wobblePhase) * blob.wobble
      const currentRadius = blob.targetRadius + wobbleAmount

      // Draw blob with heavy blur gradient for metaball-like effect
      const gradient = ctx.createRadialGradient(
        blob.x, blob.y, 0,
        blob.x, blob.y, currentRadius
      )
      
      // More visible blobs - 40% opacity
      const baseOpacity = 0.4
      gradient.addColorStop(0, `rgba(255, 255, 255, ${baseOpacity})`)
      gradient.addColorStop(0.3, `rgba(240, 248, 255, ${baseOpacity * 0.8})`)
      gradient.addColorStop(0.6, `rgba(230, 240, 255, ${baseOpacity * 0.5})`)
      gradient.addColorStop(1, `rgba(220, 235, 255, 0)`)

      ctx.beginPath()
      ctx.arc(blob.x, blob.y, currentRadius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    })

    // Apply metaball effect using threshold filter
    // This creates the "merging liquid" look
    applyMetaballFilter(ctx, width, height)

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  // Metaball threshold filter for liquid merging effect
  const applyMetaballFilter = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Get image data
    const imageData = ctx.getImageData(0, 0, width * (window.devicePixelRatio || 1), height * (window.devicePixelRatio || 1))
    const data = imageData.data

    // Apply threshold to create metaball merging effect
    const threshold = 30 // Pixels above this alpha value become more visible
    const softness = 60

    for (let i = 3; i < data.length; i += 4) {
      const alpha = data[i]
      if (alpha > threshold) {
        // Boost alpha for areas where blobs overlap
        const boost = Math.min((alpha - threshold) / softness, 1)
        data[i] = Math.min(alpha + boost * 80, 180) // Higher visibility
      } else {
        // Keep thin areas slightly visible
        data[i] = alpha * 0.7
      }
    }

    ctx.putImageData(imageData, 0, 0)
  }

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
      
      initBlobs(rect.width, rect.height)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseEnter = () => {
      mouseRef.current.active = true
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false }
    }

    // Touch events
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
          active: true,
        }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
          active: true,
        }
      }
    }

    const handleTouchEnd = () => {
      mouseRef.current = { ...mouseRef.current, active: false }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseenter", handleMouseEnter)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart, { passive: true })
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true })
    canvas.addEventListener("touchend", handleTouchEnd)

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseenter", handleMouseEnter)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationRef.current)
    }
  }, [initBlobs, animate])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ 
        touchAction: "none", 
        zIndex: 10,
        mixBlendMode: "overlay",
      }}
    />
  )
}
