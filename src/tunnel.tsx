import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Tunnel() {
  const count = 25; 
  const gap = 3;   
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    groupRef.current.children.forEach((mesh, i) => {
      mesh.position.z += 0.08;

      if (mesh.position.z > 5) {
        mesh.position.z = - (count * gap) + 5;
      }

      mesh.rotation.z += (i % 2 === 0 ? 0.003 : -0.003);
    });
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} position={[0, 0, -i * gap]} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[8, 1.2, 4, 4]} /> 
          <meshBasicMaterial color="yellow" />
        </mesh>
      ))}
    </group>
  )
}