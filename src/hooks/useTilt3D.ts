import { useRef, useState, useCallback, type MouseEvent } from 'react'

interface TiltState {
    rotateX: number
    rotateY: number
    scale: number
}

interface UseTilt3DOptions {
    maxRotation?: number
    scale?: number
    perspective?: number
}

export function useTilt3D(options: UseTilt3DOptions = {}) {
    const { maxRotation = 15, scale = 1.02, perspective = 1000 } = options
    const ref = useRef<HTMLDivElement>(null)
    const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0, scale: 1 })

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
        },
        [maxRotation, scale]
    )

    const handleMouseLeave = useCallback(() => {
        setTilt({ rotateX: 0, rotateY: 0, scale: 1 })
    }, [])

    const style = {
        transform: `perspective(${perspective}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        transition: tilt.scale === 1 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out',
    }

    return {
        ref,
        style,
        handlers: {
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
        },
    }
}
