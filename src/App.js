import React, { useRef } from "react";

import { Canvas, useFrame } from "react-three-fiber";
import { Stars, OrbitControls } from "@react-three/drei";

import "./style.css";

function Box() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <OrbitControls />
      <Stars />
      <Box />
    </Canvas>
  );
}
