import { Suspense, memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'

const DistortedShape = ({ position, scale, color }: { position: [number, number, number]; scale?: number; color: string }) => (
  <Float speed={1.6} floatIntensity={1.2} rotationIntensity={0.5}>
    <mesh position={position} scale={scale ?? 1}>
      <icosahedronGeometry args={[1.5, 1]} />
      <MeshDistortMaterial color={color} speed={1.8} metalness={0.1} roughness={0.1} distort={0.35} />
    </mesh>
  </Float>
)

const Ribbon = () => (
  <Float speed={1} floatIntensity={0.4} rotationIntensity={0.1}>
    <mesh position={[0, -0.6, -1.2]} rotation={[Math.PI / 5, Math.PI / 4, 0]}>
      <torusKnotGeometry args={[0.9, 0.24, 200, 32]} />
      <MeshDistortMaterial color="#7f5bff" speed={1.2} distort={0.28} opacity={0.85} transparent />
    </mesh>
  </Float>
)

const BackgroundCanvasComponent = () => (
  <Canvas className="hero__canvas" camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 1.5]}>
    <color attach="background" args={["#030511"]} />
    <ambientLight intensity={0.6} />
    <directionalLight position={[6, 8, 4]} intensity={1.2} />
    <directionalLight position={[-6, -3, -4]} intensity={0.5} color="#36478f" />
    <Suspense fallback={null}>
      <DistortedShape position={[-2.2, 1.4, -0.6]} color="#6c8dff" />
      <DistortedShape position={[2.4, -1.4, -0.3]} scale={0.7} color="#8d6cff" />
      <Ribbon />
      <Sparkles count={80} speed={0.3} size={2.5} scale={[7, 4.5, 3]} opacity={0.7} color="#9db4ff" />
    </Suspense>
  </Canvas>
)

export const BackgroundCanvas = memo(BackgroundCanvasComponent)
