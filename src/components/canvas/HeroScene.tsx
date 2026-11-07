import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { Tier } from '../../hooks/usePerformanceTier'

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uScale;
  varying float vH;
  void main() {
    vec3 p = position;
    float h = sin(p.x * 0.45 + uTime * 0.8) * 0.35 + cos(p.z * 0.4 + uTime * 0.6) * 0.35;
    float d = distance(p.xz, uPointer);
    h += 0.9 * exp(-d * d * 0.12) * sin(d * 2.6 - uTime * 3.0);
    p.y = h;
    vH = h;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = clamp((1.6 + h * 0.8) * uScale / -mv.z, 1.0, 6.0);
    gl_Position = projectionMatrix * mv;
  }
`

const fragmentShader = /* glsl */ `
  varying float vH;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float a = smoothstep(0.5, 0.15, length(c));
    vec3 col = mix(vec3(0.02, 0.71, 0.83), vec3(0.06, 0.73, 0.5), clamp(vH * 0.7 + 0.5, 0.0, 1.0));
    gl_FragColor = vec4(col, a * 0.9);
  }
`

function ParticleWave({ size }: { size: number }) {
  const mat = useRef<THREE.ShaderMaterial>(null)
  const target = useRef(new THREE.Vector2())

  const { positions, uniforms } = useMemo(() => {
    const span = 22
    const arr = new Float32Array(size * size * 3)
    let i = 0
    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        arr[i++] = (x / (size - 1) - 0.5) * span
        arr[i++] = 0
        arr[i++] = (z / (size - 1) - 0.5) * span
      }
    }
    return {
      positions: arr,
      uniforms: {
        uTime: { value: 0 },
        uPointer: { value: new THREE.Vector2(99, 99) },
        uScale: { value: 160 },
      },
    }
  }, [size])

  useFrame((state, dt) => {
    if (!mat.current) return
    const u = mat.current.uniforms
    u.uTime.value += dt
    target.current.set(state.pointer.x * 9, -state.pointer.y * 5 - 1)
    ;(u.uPointer.value as THREE.Vector2).lerp(target.current, 1 - Math.pow(0.001, dt))
  })

  return (
    <points position={[0, -1.2, -2]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={mat}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Crystal() {
  const group = useRef<THREE.Group>(null)
  useFrame((state, dt) => {
    const g = group.current
    if (!g) return
    g.rotation.y += dt * 0.25
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -state.pointer.y * 0.5, 0.05)
    g.position.x = THREE.MathUtils.lerp(g.position.x, state.pointer.x * 0.6, 0.05)
    g.position.y = 1.3 + Math.sin(state.clock.elapsedTime * 0.9) * 0.15
  })
  return (
    <group ref={group} position={[0, 1.3, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.55} />
      </mesh>
    </group>
  )
}

export default function HeroScene({ tier }: { tier: Tier }) {
  const size = tier === 'high' ? 120 : 70
  return (
    <Canvas
      dpr={[1, tier === 'high' ? 1.75 : 1.25]}
      camera={{ position: [0, 3.2, 9], fov: 55 }}
      gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ParticleWave size={size} />
      <Crystal />
    </Canvas>
  )
}
