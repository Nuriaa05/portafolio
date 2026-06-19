"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== "undefined" && window.innerWidth >= 1024)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)")
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches || window.innerWidth >= 1024)

    updateIsDesktop()
    mediaQuery.addEventListener("change", updateIsDesktop)

    return () => mediaQuery.removeEventListener("change", updateIsDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const canvasElement = canvas
    const context = ctx

    let devicePixelRatio: number
    let animationFrameId = 0

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvasElement.getBoundingClientRect()

      canvasElement.width = rect.width * devicePixelRatio
      canvasElement.height = rect.height * devicePixelRatio

      context.setTransform(1, 0, 0, 1, 0, 0)
      context.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasElement.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      distance: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 5 + 2
        this.density = Math.random() * 30 + 1
        this.distance = 0

        // Create a gradient from purple to pink
        const hue = Math.random() * 60 + 270 // 270-330 range for purples and pinks
        this.color = `hsl(${hue}, 70%, 60%)`
      }

      update() {
        // Calculate distance between mouse and particle
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        const forceDirectionX = dx / this.distance
        const forceDirectionY = dy / this.distance

        const maxDistance = 100
        const force = (maxDistance - this.distance) / maxDistance

        if (this.distance < maxDistance) {
          const directionX = forceDirectionX * force * this.density
          const directionY = forceDirectionY * force * this.density

          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 10
          }
        }
      }

      draw() {
        context.fillStyle = this.color
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.closePath()
        context.fill()
      }
    }

    // Create particle grid
    const particlesArray: Particle[] = []
    const gridSize = 30

    function init() {
      particlesArray.length = 0

      const canvasWidth = canvasElement.width / devicePixelRatio
      const canvasHeight = canvasElement.height / devicePixelRatio

      const numX = Math.floor(canvasWidth / gridSize)
      const numY = Math.floor(canvasHeight / gridSize)

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2
          const posY = y * gridSize + gridSize / 2
          particlesArray.push(new Particle(posX, posY))
        }
      }
    }

    init()

    // Animation loop
    const animate = () => {
      context.clearRect(0, 0, canvasElement.width, canvasElement.height)

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      // Draw connections
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()

        // Draw connections
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 30) {
            context.beginPath()
            context.strokeStyle = `rgba(180, 120, 255, ${0.2 - distance / 150})`
            context.lineWidth = 0.5
            context.moveTo(particlesArray[i].x, particlesArray[i].y)
            context.lineTo(particlesArray[j].x, particlesArray[j].y)
            context.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions()
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [isDesktop])

  return (
    <motion.div
      className="hidden lg:block w-full h-[500px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
