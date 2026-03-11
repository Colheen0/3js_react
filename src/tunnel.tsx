import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Tunnel() {
  const count = 25; 
  const gap = 3;   
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    groupRef.current.children.forEach((mesh, i) => {
      mesh.position.z += 0.08; // Vitesse légèrement augmentée pour le dynamisme

      if (mesh.position.z > 5) {
        mesh.position.z = - (count * gap) + 5;
      }

      // Rotation pour créer l'effet de spirale désaxée de l'image
      mesh.rotation.z += (i % 2 === 0 ? 0.003 : -0.003);
    });
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} position={[0, 0, -i * gap]} rotation={[0, 0, Math.PI / 4]}>
          {/* Arguments modifiés : 
              4 : Rayon global
              1.2 : Épaisseur du tube (beaucoup plus large pour l'effet "cadre")
              4 : Segments radiaux (pour faire le carré)
              4 : Segments tubulaires (pour des angles bien nets)
          */}
          <torusGeometry args={[8, 1.2, 4, 4]} /> 
          <meshBasicMaterial color="red" />
        </mesh>
      ))}
    </group>
  )
}