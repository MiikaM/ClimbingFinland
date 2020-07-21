import React from "react";
import { degToRad } from 'three'

import { useTransition, a } from 'react-spring'
import { useFrame, useUpdate, SVGLoader } from "react-three-fiber";
import { noise } from './perlin'

const deg = Math.degToRad

const Terrain = () => {

  const transitions = useTransition(shapes, item => item.shape.uuid, {
    from: { rotation: [-0.2, 0.9, 0], position: [0, 50, -200], opacity: 0 },
    enter: { rotation: [0, 0, 0], position: [0, 0, 0], opacity: 1 },
    leave: { rotation: [0.2, -0.9, 0], position: [0, -400, 200], opacity: 0 },
    config: { mass: 30, tension: 800, friction: 190, precision: 0.0001 },
    ...{ order: ['leave', 'enter', 'update'], trail: 15, lazy: true, unique: true, reset: true }
  })

  return (
    <mesh scale={[20000, 20000, 1]} rotation={[0, deg(-20), 0]}>
      <planeGeometry attach="geometry" args={[1, 1]} />
      <a.meshPhongMaterial attach="material" color={color} depthTest={false} />
    </mesh>
  );
};

export default Terrain;
