"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

export function FluidCursor() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const rippleIdRef = useRef(0)

  // Smooth cursor following with spring physics
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  // Spring config for "purun" elastic feel
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)

  // Secondary follower with more lag
  const lagConfig = { damping: 30, stiffness: 100, mass: 1 }
  const lagX = useSpring(cursorX, lagConfig)
  const lagY = useSpring(cursorY, lagConfig)

  // Tertiary follower with even more lag
  const slowConfig = { damping: 35, stiffness: 50, mass: 1.5 }
  const slowX = useSpring(cursorX, slowConfig)
  const slowY = useSpring(cursorY, slowConfig)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      cursorX.set(x)
      cursorY.set(y)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Create ripple on click
      const newRipple: Ripple = {
        id: rippleIdRef.current++,
        x,
        y,
        size: 100 + Math.random() * 100,
      }
      setRipples(prev => [...prev, newRipple])
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 1000)
    }

    // Touch events
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect()
        const x = e.touches[0].clientX - rect.left
        const y = e.touches[0].clientY - rect.top
        
        cursorX.set(x)
        cursorY.set(y)
        setIsHovering(true)

        // Create ripple trail on touch
        if (Math.random() > 0.7) {
          const newRipple: Ripple = {
            id: rippleIdRef.current++,
            x,
            y,
            size: 60 + Math.random() * 40,
          }
          setRipples(prev => [...prev.slice(-10), newRipple])
          setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== newRipple.id))
          }, 800)
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect()
        const x = e.touches[0].clientX - rect.left
        const y = e.touches[0].clientY - rect.top
        cursorX.set(x)
        cursorY.set(y)
        setIsHovering(true)
      }
    }

    const handleTouchEnd = () => setIsHovering(false)

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)
    container.addEventListener("click", handleClick)
    container.addEventListener("touchstart", handleTouchStart, { passive: true })
    container.addEventListener("touchmove", handleTouchMove, { passive: true })
    container.addEventListener("touchend", handleTouchEnd)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("click", handleClick)
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
      container.removeEventListener("touchend", handleTouchEnd)
    }
  }, [cursorX, cursorY])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: 10 }}
    >
      {/* Main cursor follower - largest, slowest */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          x: slowX,
          y: slowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 180,
          height: 180,
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
          filter: "blur(20px)",
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Secondary follower - medium */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          x: lagX,
          y: lagY,
          translateX: "-50%",
          translateY: "-50%",
          width: 100,
          height: 100,
          background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, transparent 70%)",
          filter: "blur(10px)",
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Primary cursor - smallest, fastest */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: 40,
          height: 40,
          background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 50%, transparent 70%)",
          filter: "blur(4px)",
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="pointer-events-none absolute rounded-full"
          initial={{ 
            x: ripple.x, 
            y: ripple.y, 
            scale: 0, 
            opacity: 0.6,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{ 
            scale: 2, 
            opacity: 0,
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut" 
          }}
          style={{
            width: ripple.size,
            height: ripple.size,
            background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      ))}

      {/* Ambient floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="pointer-events-none absolute rounded-full"
          initial={{
            x: `${20 + (i * 10)}%`,
            y: `${30 + ((i % 3) * 20)}%`,
          }}
          animate={{
            x: [`${20 + (i * 10)}%`, `${25 + (i * 10)}%`, `${20 + (i * 10)}%`],
            y: [`${30 + ((i % 3) * 20)}%`, `${35 + ((i % 3) * 20)}%`, `${30 + ((i % 3) * 20)}%`],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: 20 + (i % 3) * 15,
            height: 20 + (i % 3) * 15,
            background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
            filter: "blur(6px)",
          }}
        />
      ))}
    </div>
  )
}
