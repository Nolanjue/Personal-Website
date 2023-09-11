import React, { useRef } from 'react'
import {Canvas} from '@react-three/fiber'
import {  OrbitControls, RenderTexture } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import { Text } from '@react-three/drei';
import { MeshDistortMaterial } from '@react-three/drei';
import { Sphere } from '@react-three/drei';



function Distortion() {
  return (
    <Canvas>
    <OrbitControls enableZoom= {false} autoRotate = {true}/>
    <ambientLight intensity = {1}/>
    <directionalLight position={[3, 2, 1]}/>
        <Sphere args = {[ 2.4, 100, 200]} scale = {1}>
            <MeshDistortMaterial color = 'yellow' 
            attach = 'material' distort= {0.5} speed = {3}/>
        </Sphere> 
    </Canvas>
  )
}

export default Distortion