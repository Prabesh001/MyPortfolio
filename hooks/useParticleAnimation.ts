"use client"


import { useState, useEffect, useRef, useCallback, type RefObject } from "react"
import type { Particle, FragmentParticle } from "@/types"

const PARTICLE_COUNT = 40
const MIN_RADIUS = 4 // px
const MAX_RADIUS = 8 // px
const MIN_SPEED = 0.5 // px per frame
const MAX_SPEED = 2 // px per frame
const NUM_FRAGMENTS_PER_BLAST = 8
const FRAGMENT_SPREAD_MIN = 20 // px
const FRAGMENT_SPREAD_MAX = 60 // px
const FRAGMENT_SIZE_MIN = 2 // px
const FRAGMENT_SIZE_MAX = 5 // px
const FRAGMENT_DURATION_MIN = 0.3 // seconds
const FRAGMENT_DURATION_MAX = 0.7 // seconds

const PARTICLE_COLORS = [
  "rgba(59, 130, 246, 0.8)", // blue
  "rgba(139, 92, 246, 0.8)", // purple
  "rgba(245, 158, 11, 0.8)", // orange
  "rgba(239, 68, 68, 0.8)", // red
  "rgba(16, 185, 129, 0.8)", // green
]

interface UseParticleAnimationProps {
  containerRef: RefObject<HTMLElement>
  blastAudioRef: RefObject<HTMLAudioElement>
}

export function useParticleAnimation({ containerRef, blastAudioRef }: UseParticleAnimationProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [fragments, setFragments] = useState<FragmentParticle[]>([])
  const blastingParticles = useRef(new Set<string>()) // To prevent multiple blasts from one hover/collision

  // Function to generate a single particle
  const generateParticle = useCallback((): Particle => {
    const radius = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS
    const speed = Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED
    const angle = Math.random() * Math.PI * 2 // Random direction

    const containerWidth = containerRef.current?.offsetWidth || window.innerWidth
    const containerHeight = containerRef.current?.offsetHeight || window.innerHeight

    return {
      id: Math.random().toString(36).substring(2, 15),
      x: Math.random() * containerWidth,
      y: Math.random() * containerHeight,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: radius,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      isBlasting: false,
    }
  }, [containerRef])

  const playBlastSound = useCallback(() => {
    if (blastAudioRef.current) {
      blastAudioRef.current.currentTime = 0 // Rewind to start
      blastAudioRef.current.play().catch((e) => console.error("Audio play failed:", e))
    }
  }, [blastAudioRef])

  // Helper to generate fragments
  const generateFragments = useCallback((blastX: number, blastY: number, color: string): FragmentParticle[] => {
    return Array.from({ length: NUM_FRAGMENTS_PER_BLAST }).map(() => {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * (FRAGMENT_SPREAD_MAX - FRAGMENT_SPREAD_MIN) + FRAGMENT_SPREAD_MIN
      return {
        id: Math.random().toString(36).substring(2, 15),
        x: blastX,
        y: blastY,
        color: color,
        size: Math.random() * (FRAGMENT_SIZE_MAX - FRAGMENT_SIZE_MIN) + FRAGMENT_SIZE_MIN,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        duration: Math.random() * (FRAGMENT_DURATION_MAX - FRAGMENT_DURATION_MIN) + FRAGMENT_DURATION_MIN,
      }
    })
  }, [])

  const handleParticleBlast = useCallback(
    (id: string, blastX: number, blastY: number, color: string) => {
      if (blastingParticles.current.has(id)) return
      blastingParticles.current.add(id)

      playBlastSound()

      setParticles((prevParticles) => prevParticles.map((p) => (p.id === id ? { ...p, isBlasting: true } : p)))

      setFragments((prev) => [...prev, ...generateFragments(blastX, blastY, color)])
    },
    [playBlastSound, generateFragments],
  )

  const handleParticleBlastEnd = useCallback(
    (id: string) => {
      blastingParticles.current.delete(id)
      setParticles((prevParticles) =>
        prevParticles.map((p) => (p.id === id ? { ...generateParticle(), isBlasting: false } : p)),
      )
    },
    [generateParticle],
  )

  useEffect(() => {
    // Initialize particles after containerRef is available
    if (containerRef.current) {
      setParticles(Array.from({ length: PARTICLE_COUNT }, generateParticle))
    }

    let animationFrameId: number

    const animateParticles = () => {
      if (!containerRef.current) {
        animationFrameId = requestAnimationFrame(animateParticles)
        return
      }

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerWidth = containerRect.width
      const containerHeight = containerRect.height

      setParticles((prevParticles) => {
        const newParticles = prevParticles.map((p) => {
          if (p.isBlasting) return p

          let newX = p.x + p.vx
          let newY = p.y + p.vy

          // Boundary collision detection and bounce
          if (newX - p.radius < 0 || newX + p.radius > containerWidth) {
            p.vx *= -1
            newX = Math.max(p.radius, Math.min(newX, containerWidth - p.radius))
          }
          if (newY - p.radius < 0 || newY + p.radius > containerHeight) {
            p.vy *= -1
            newY = Math.max(p.radius, Math.min(newY, containerHeight - p.radius))
          }

          return { ...p, x: newX, y: newY }
        })

        // Collision detection between particles
        for (let i = 0; i < newParticles.length; i++) {
          for (let j = i + 1; j < newParticles.length; j++) {
            const p1 = newParticles[i]
            const p2 = newParticles[j]

            if (p1.isBlasting || p2.isBlasting) continue

            const dx = p1.x - p2.x
            const dy = p1.y - p2.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < p1.radius + p2.radius) {
              // Trigger blast for both
              handleParticleBlast(p1.id, p1.x, p1.y, p1.color)
              handleParticleBlast(p2.id, p2.x, p2.y, p2.color)

              // Simple bounce effect (reverse velocities)
              p1.vx *= -1
              p1.vy *= -1
              p2.vx *= -1
              p2.vy *= -1
            }
          }
        }
        return newParticles
      })

      animationFrameId = requestAnimationFrame(animateParticles)
    }

    animationFrameId = requestAnimationFrame(animateParticles)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [containerRef, generateParticle, handleParticleBlast])

  return { particles, fragments, handleParticleBlast, handleParticleBlastEnd }
}
