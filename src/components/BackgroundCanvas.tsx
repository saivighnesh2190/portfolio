import { Suspense, memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Stars } from '@react-three/drei'

const DistortedShape = ({ position, scale, color }: { position: [number, number, number]; scale?: number; color: string }) => (
  <Float speed={2} floatIntensity={1.5} rotationIntensity={0.8}>
    <mesh position={position} scale={scale ?? 1}>
      <icosahedronGeometry args={[1.5, 1]} />
      <MeshDistortMaterial color={color} speed={2.5} metalness={0.2} roughness={0.1} distort={0.4} />
    </mesh>
  </Float>
)

const Ribbon = () => (
  <Float speed={1.5} floatIntensity={0.8} rotationIntensity={0.4}>
    <mesh position={[0, -0.6, -1.2]} rotation={[Math.PI / 5, Math.PI / 4, 0]}>
      <torusKnotGeometry args={[0.9, 0.24, 200, 32]} />
      <MeshDistortMaterial color="#7f5bff" speed={2} distort={0.3} opacity={0.85} transparent />
    </mesh>
  </Float>
)

const BackgroundCanvasComponent = () => (
  <Canvas className="hero__canvas" camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 1.5]}>
    <ambientLight intensity={0.8} />
    <directionalLight position={[6, 8, 4]} intensity={1.5} />
    <directionalLight position={[-6, -3, -4]} intensity={0.8} color="#36478f" />
    <Suspense fallback={null}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <DistortedShape position={[-2.2, 1.4, -0.6]} color="#6c8dff" />
      <DistortedShape position={[2.4, -1.4, -0.3]} scale={0.7} color="#8d6cff" />
      <Ribbon />
      <Sparkles count={150} speed={0.6} size={4} scale={[10, 8, 5]} opacity={0.8} color="#9db4ff" />
    </Suspense>
  </Canvas>
)

export const BackgroundCanvas = memo(BackgroundCanvasComponent)
