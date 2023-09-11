import React, { useRef } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, RenderTexture } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Capsule } from '@react-three/drei';

function Shape() {
    const textRef = useRef()
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime))*2);//gets the text value and position
  return (
    <mesh>
         <Capsule args = {[ 2, 2, 1, 10 ]}>
            <meshStandardMaterial>
                <RenderTexture attach = 'map'>{/*inside the shape*/}
                    <PerspectiveCamera
                    makeDefault position= {[0, 0, 5]}/>
                    <color attach='background' args={['pink']}/>
                    <Text ref = {textRef} fontSize = {2} color='red'>
                    Hello{/*please note that the text shows up depending on the number of defined faces on the shape*/}
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
            </Capsule> 
        </mesh>
  )
}

export default Shape