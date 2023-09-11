import React from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, RenderTexture } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Shape from './Shape';

//trying to use *canvas which is a different environment, need it for three.JS
function Test() {
  return (
    <Canvas>
        <OrbitControls enableZoom= {false} autoRotate = {true}/>
        <ambientLight intensity = {1}/>
        <directionalLight position={[3, 2, 1]}/>
            {/*ambient light gives all positions the same amount of light with argument intensity, directionalight gives an array that  */ }
        {/*orbit controls, light and directional light are all affects that dont affect the mesh*/}
        
        <Shape/>{/*in order to use useFrame, we must have a seperate component that contains useframe that is then nested in a "canvas"*/}

    </Canvas>
  )
}

export default Test