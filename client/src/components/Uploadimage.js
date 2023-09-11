import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import  Model  from './Hp_elitebook_laptop'
import { Stage } from '@react-three/drei'




function Uploadimage() {
 
  return (
    <Canvas>
      <OrbitControls enableZoom = {false} autoRotate={true}/>
      <Stage environment = 'city' intensity = {0.6}>
      <Model/>
      </Stage>
      
    </Canvas>
  )
}

export default Uploadimage