import React, { Suspense } from 'react';
import { Canvas, Dom } from 'react-three-fiber';
import Scene from './components/Scene';

const App = () => {

  return (
    <div>
      <Canvas camera={{ zoom: 160, position: [0, 0, 500] }}>
        <Suspense fallback={<Dom center className='loading' children='Loading...' />}>
          <Scene />
        </Suspense>
      </Canvas>
      <span className='header'>CLIMBING FINLAND</span>
    </div>
  )
}

export default App;
