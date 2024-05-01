import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Camera(props: {}) {
  const { nodes, materials } = useGLTF("/camera.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-1600, 2500, -1300]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Mesh_(3)_palette_0"].geometry}
          material={materials.palette}
          position={[-600, 400, -600]}
        />
      </group>
      <group position={[-2700, 6700, -1800]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Mesh_(4)_palette_0"].geometry}
          material={materials.palette}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_umi_0.geometry}
        material={materials.material}
        scale={10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(2)_palette_0"].geometry}
        material={materials.palette}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(5)_palette_0"].geometry}
        material={materials.palette}
        position={[145, 150, 310]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(6)_palette_0"].geometry}
        material={materials.palette}
        position={[145, 150, 310]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(7)_palette_0"].geometry}
        material={materials.palette}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(8)_palette_0"].geometry}
        material={materials.palette}
        position={[-4000, 0, -10050]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(9)_palette_0"].geometry}
        material={materials.palette}
        position={[-2435, 1710, -10770]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(10)_palette_0"].geometry}
        material={materials.palette}
        position={[6700, 8560, -2500]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(11)_palette_0"].geometry}
        material={materials.palette}
        position={[10040, 0, 4260]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(12)_palette_0"].geometry}
        material={materials.palette}
        position={[9500, 2800, 4180]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(13)_palette_0"].geometry}
        material={materials.palette}
        position={[7040, 5760, -4420]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_(14)_palette_0"].geometry}
        material={materials.palette}
        position={[6940, 3260, -3570]}
      />
    </group>
  );
}

useGLTF.preload("/camera.glb");
