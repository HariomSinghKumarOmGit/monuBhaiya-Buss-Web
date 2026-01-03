import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Float, ContactShadows, RoundedBox, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'

function LogoStructure() {
  const meshRef = useRef()
  const texture = useTexture('/logo.jpg')
  
  texture.anisotropy = 16
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  
  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef}>
        {/* Architectural Pure White Slab */}
        <RoundedBox args={[1.4, 1.4, 0.4]} radius={0.08} smoothness={4}>
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0} // Matte white for a clean look
            roughness={1}
          />
        </RoundedBox>

        {/* The VR Logo Layer - Rendered as Dark Blue on White */}
        <mesh position={[0, 0, 0.201]}>
          <planeGeometry args={[1.35, 1.35]} />
          <meshStandardMaterial 
            color="#0A1128" // Dark Blue-Black brand color
            alphaMap={texture} // Use the white VR text from the JPG as a transparency mask
            transparent={true}
            side={THREE.DoubleSide}
          />
        </mesh>
      </mesh>
    </Float>
  )
}

// Preload the texture to ensure it's available immediately on every reload
useTexture.preload('/logo.jpg')

export default function Logo3D() {
  return (
    <div className="w-24 h-24 flex items-center justify-center">
      {/* 
          Ensures the logo space is NEVER empty. 
          The fallback is a simple blue square that matches the branding 
          until the 3D textures are fully ready.
      */}
      <Suspense fallback={<div className="w-12 h-12 bg-white rounded-xl animate-pulse" />}>
        <Canvas 
          alpha 
          shadows 
          dpr={[1, 2]} 
          camera={{ position: [0, 0, 4.5], fov: 32 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          {/* Robust lighting that doesn't depend on external environment files */}
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <pointLight position={[-10, 5, 5]} color="#3b82f6" intensity={1} />
          <spotLight position={[0, 5, 10]} angle={0.3} intensity={1} />
          
          <PresentationControls
            global={true} // Allows user to interact from anywhere
            cursor={true}
            snap={true} // IMMEDIATELY returns to mean position on release
            speed={2.5} // Faster interaction
            zoom={1}
            rotation={[0, 0, 0]} // Baseline 0 position
            polar={[-0.4, 0.4]} // Vertical swing
            azimuth={[-0.4, 0.4]} // Horizontal swing
            // TENSION 500 makes it snap back extremely fast ("automatically")
            config={{ mass: 1, tension: 500, friction: 30 }}
          >
            <LogoStructure />
          </PresentationControls>
          
          <ContactShadows 
            position={[0, -1.2, 0]} 
            opacity={0.4} 
            scale={4} 
            blur={2.5} 
            far={1.5} 
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
