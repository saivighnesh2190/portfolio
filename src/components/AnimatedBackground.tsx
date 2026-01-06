import { useEffect, useRef } from 'react'

interface Point {
    x: number
    y: number
    vx: number
    vy: number
    size: number
}

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let points: Point[] = []
        let mouse = { x: 0, y: 0 }

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initPoints()
        }

        const initPoints = () => {
            points = []
            // Adjust density based on screen size
            const density = Math.floor((canvas.width * canvas.height) / 15000)

            for (let i = 0; i < density; i++) {
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 1.5 + 0.5
                })
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        resize()

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw points
            points.forEach((point, i) => {
                // Move points
                point.x += point.vx
                point.y += point.vy

                // Bounce off edges
                if (point.x < 0 || point.x > canvas.width) point.vx *= -1
                if (point.y < 0 || point.y > canvas.height) point.vy *= -1

                // Mouse interaction - slightly repel points
                const dx = mouse.x - point.x
                const dy = mouse.y - point.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < 100) {
                    const force = (100 - dist) / 100
                    point.vx -= (dx / dist) * force * 0.05
                    point.vy -= (dy / dist) * force * 0.05
                }

                // Draw point
                ctx.beginPath()
                ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
                ctx.fillStyle = 'rgba(108, 141, 255, 0.5)' // Blue-ish
                ctx.fill()

                // Connect lines
                for (let j = i + 1; j < points.length; j++) {
                    const p2 = points[j]
                    const dx = point.x - p2.x
                    const dy = point.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    const maxDist = 120

                    if (dist < maxDist) {
                        ctx.beginPath()
                        ctx.moveTo(point.x, point.y)
                        ctx.lineTo(p2.x, p2.y)
                        const opacity = 1 - (dist / maxDist)
                        ctx.strokeStyle = `rgba(108, 141, 255, ${opacity * 0.15})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <>
            <canvas ref={canvasRef} className="animated-bg-canvas" />
            <div className="animated-bg-overlay" />
        </>
    )
}
