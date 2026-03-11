//import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

import { EffectComposer, Noise, Scanline, Vignette, Bloom } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import Model from './Model'

export function Scene() {
    const pointLightRef = useRef<THREE.PointLight>(null!);
    return (
        <>            
            <EffectComposer>
                <Scanline 
                    blendFunction={BlendFunction.OVERLAY} 
                    density={1.5} 
                    opacity={0.2} 
                />
                <Noise 
                    opacity={0.15} 
                    blendFunction={BlendFunction.SOFT_LIGHT} 
                />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
                <Bloom luminanceThreshold={0.5} mipmapBlur intensity={0.5} />
            </EffectComposer>
            <Model position={[0, -2, 0]} scale={1} />
            {/* <OrbitControls /> */}
            
            <ambientLight intensity={0.5} />
            <pointLight ref={pointLightRef} position={[2, 2, 2]} intensity={10} color="#F9E219" />
        </>
    )
}