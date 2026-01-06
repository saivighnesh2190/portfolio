import { useEffect, useRef, useState } from 'react'

interface Particle {
    x: number
    y: number
    life: number
    maxLife: number
    vx: number
    vy: number
}

export function GlowCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const glowRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isHovering, setIsHovering] = useState(false)
    const position = useRef({ x: 0, y: 0 })
    const targetPosition = useRef({ x: 0, y: 0 })
    const particles = useRef<Particle[]>([])
    const lastParticleTime = useRef(0)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetPosition.current = { x: e.clientX, y: e.clientY }
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('card') ||
                target.closest('.card') ||
                target.classList.contains('tilt-card') ||
                target.closest('.tilt-card')
            ) {
                setIsHovering(true)
            }
        }

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('card') ||
                target.closest('.card') ||
                target.classList.contains('tilt-card') ||
                target.closest('.tilt-card')
            ) {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        let animationFrameId: number

        const animate = (time: number) => {
            // Smooth cursor follow
            position.current.x += (targetPosition.current.x - position.current.x) * 0.15
            position.current.y += (targetPosition.current.y - position.current.y) * 0.15

            // Update cursor elements
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${targetPosition.current.x}px, ${targetPosition.current.y}px, 0)`
            }
            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`
            }

            // Spawn particles
            if (time - lastParticleTime.current > 20) {
                const dx = targetPosition.current.x - position.current.x
                const dy = targetPosition.current.y - position.current.y
                const speed = Math.sqrt(dx * dx + dy * dy)

                if (speed > 2) {
                    particles.current.push({
                        x: position.current.x,
                        y: position.current.y,
                        life: 1,
                        maxLife: 1,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                    })
                }
                lastParticleTime.current = time
            }

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw and update particles
            particles.current = particles.current.filter((p) => {
                p.life -= 0.025
                p.x += p.vx
                p.y += p.vy
                p.vx *= 0.98
                p.vy *= 0.98

                if (p.life <= 0) return false

                const alpha = p.life * 0.6
                const size = p.life * 4

                // Create gradient for each particle
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size)
                gradient.addColorStop(0, `rgba(108, 141, 255, ${alpha})`)
                gradient.addColorStop(0.5, `rgba(127, 91, 255, ${alpha * 0.5})`)
                gradient.addColorStop(1, 'rgba(127, 91, 255, 0)')

                ctx.beginPath()
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
                ctx.fillStyle = gradient
                ctx.fill()

                return true
            })

            // Draw trail line
            if (particles.current.length > 1) {
                ctx.beginPath()
                ctx.moveTo(particles.current[0].x, particles.current[0].y)

                for (let i = 1; i < particles.current.length; i++) {
                    const p = particles.current[i]
                    ctx.lineTo(p.x, p.y)
                }

                ctx.strokeStyle = 'rgba(108, 141, 255, 0.1)'
                ctx.lineWidth = 2
                ctx.stroke()
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <>
            <canvas ref={canvasRef} className="cursor-canvas" />
            <div
                ref={glowRef}
                className={`cursor-glow ${isHovering ? 'cursor-glow--hover' : ''}`}
            />
            <div
                ref={cursorRef}
                className={`cursor-dot ${isHovering ? 'cursor-dot--hover' : ''}`}
            />
        </>
    )
}
