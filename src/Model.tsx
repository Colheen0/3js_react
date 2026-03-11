import { useGLTF } from '@react-three/drei'
import type { JSX } from 'react'

export default function Model(props: JSX.IntrinsicElements['group']) {
const { scene, animations } = useGLTF('/models/yu_narukami_p5r.glb')
console.log("Animations dispo :", animations) 
// Regarde dans la console de ton navigateur s'il y a des trucs dedans !  
  return (
    <primitive object={scene} {...props} />
  )
}

useGLTF.preload('public/models/yu_narukami_p5r.glb')