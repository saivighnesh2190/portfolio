import { useRef, useState, useCallback, type ReactNode, type MouseEvent } from 'react'

interface TiltCardProps {
    children: ReactNode
    className?: string
    maxRotation?: number
    scale?: number
    glareEnabled?: boolean
}

export function TiltCard({
    children,
    className = '',
    maxRotation = 12,
    scale = 1.02,
    glareEnabled = true,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 })
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            if (!ref.current) return

            const rect = ref.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = ((y - centerY) / centerY) * -maxRotation
            const rotateY = ((x - centerX) / centerX) * maxRotation

            setTilt({ rotateX, rotateY, scale })
            setGlarePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
        },
        [maxRotation, scale]
    )

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
        setTilt({ rotateX: 0, rotateY: 0, scale: 1 })
        setIsHovered(false)
    }, [])

    return (
        <div
            ref={ref}
            className={`tilt-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            }}
        >
            {children}
            {glareEnabled && isHovered && (
                <div
                    className="tilt-card__glare"
                    style={{
                        background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.15), transparent 60%)`,
                    }}
                />
            )}
        </div>
    )
}
