'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export default function ChessBoard3D() {
  const boardRef = useRef<Group>(null);

  useFrame((state) => {
    if (boardRef.current) {
      boardRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      boardRef.current.rotation.x = 0.2;
    }
  });

  const createSquare = (x: number, z: number, isLight: boolean) => {
    return (
      <mesh key={`${x}-${z}`} position={[x - 3.5, 0, z - 3.5]}>
        <boxGeometry args={[0.95, 0.1, 0.95]} />
        <meshStandardMaterial
          color={isLight ? '#f0d9b5' : '#b58863'}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
    );
  };

  const createPiece = (x: number, z: number, height: number, color: string) => {
    return (
      <group key={`piece-${x}-${z}`} position={[x - 3.5, 0.5, z - 3.5]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.25, height, 16]} />
          <meshStandardMaterial
            color={color}
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    );
  };

  const squares = [];
  for (let x = 0; x < 8; x++) {
    for (let z = 0; z < 8; z++) {
      const isLight = (x + z) % 2 === 0;
      squares.push(createSquare(x, z, isLight));
    }
  }

  const pieces = [
    createPiece(0, 0, 0.8, '#1a1a1a'),
    createPiece(7, 0, 0.8, '#1a1a1a'),
    createPiece(1, 0, 0.7, '#1a1a1a'),
    createPiece(6, 0, 0.7, '#1a1a1a'),
    createPiece(3, 0, 1.0, '#1a1a1a'),
    createPiece(0, 7, 0.8, '#e8e8e8'),
    createPiece(7, 7, 0.8, '#e8e8e8'),
    createPiece(1, 7, 0.7, '#e8e8e8'),
    createPiece(6, 7, 0.7, '#e8e8e8'),
    createPiece(3, 7, 1.0, '#e8e8e8'),
  ];

  return (
    <group ref={boardRef}>
      {squares}
      {pieces}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, 10, -10]} intensity={1} color="#8b5cf6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.6}
        penumbra={1}
        intensity={1}
        castShadow
      />
    </group>
  );
}
