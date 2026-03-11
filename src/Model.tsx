import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef, type JSX } from 'react'
import * as THREE from 'three'

type ModelProps = JSX.IntrinsicElements['group'] & {
  currentAnimation: string;
};

export default function Model( {currentAnimation, ...props}: ModelProps) {

const groupRef = useRef<THREE.Group>(null!)

const { scene, animations : baseAnimations } = useGLTF('public/models/yu_narukami_p5r.glb')

const { animations : mixamoAnimations } = useGLTF('public/animations/Death.glb')

console.log("Animation Mixamo :", mixamoAnimations)

const allAnimations = [...baseAnimations, ...mixamoAnimations]

const { actions } = useAnimations(allAnimations, groupRef)

useEffect(() => {
  if (actions[currentAnimation]) {
    actions[currentAnimation].reset().fadeIn(0.5).play()

    return () => {
        actions[currentAnimation]?.fadeOut(0.5)
    }
  }
}, [actions, currentAnimation])

  return (
    <group ref={groupRef} {...props}>
        <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('public/models/yu_narukami_p5r.glb')
useGLTF.preload('public/animations/Dance.glb')