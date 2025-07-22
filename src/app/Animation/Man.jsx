"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Man(props) {
  const { nodes, materials } = useGLTF("/man_in_suit.glb");

  const ManRef = useRef();

  useEffect(() => {
    const model = ManRef.current;

    if (!model) return;

    // Set the initial position directly
    model.position.set(-150, -250, -270);

    // Animate position on scroll
    gsap.to(model.position, {
      x: 500,
      y: 100,
      z: -700,
      scrollTrigger: {
        trigger: ".home",
        start: "top center",
        scrub: true,
      },
      ease: "power2.inOut",
    });
  }, []);

  return (
    <group {...props} dispose={null} ref={ManRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_suit_0.geometry}
          material={materials.suit}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_shirt_0.geometry}
          material={materials.shirt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_tie_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_leather_0.geometry}
          material={materials.leather}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_sole_0.geometry}
          material={materials.sole}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_skin_0.geometry}
          material={materials.skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["man_in_suit_Material_#128_0"].geometry}
          material={materials.Material_128}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_circle_0.geometry}
          material={materials.circle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_belt_part_0.geometry}
          material={materials.belt_part}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_button_0.geometry}
          material={materials.button}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_lips_0.geometry}
          material={materials.lips}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_hair_0.geometry}
          material={materials.hair}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_eye_mat3_0.geometry}
          material={materials.eye_mat3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_eye_mat2_0.geometry}
          material={materials.eye_mat2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_eye_mat1_0.geometry}
          material={materials.eye_mat1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor__0.geometry}
        material={materials.floor__0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/man_in_suit.glb");
