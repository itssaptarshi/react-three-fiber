import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadians } from "./angle";
import * as THREE from 'three'
import { gsap } from "gsap";
import { Model } from "./Model";

const Test = () => {
  const orbitControlRef = useRef(null);
//   useFrame((state) => {
//     if (!!orbitControlRef.current) {
//       const { x, y } = state.mouse;
//       orbitControlRef.current.setAzimuthalAngle(-x *angleToRadians(90));
//       orbitControlRef.current.setPolarAngle((y+1)* angleToRadians(60)    ); 
//       orbitControlRef.current.update();
//     }
//   });

//   useEffect(() => {
//     if (!!orbitControlRef.current) {
//       console.log(orbitControlRef.current);
//     }
//   }, [orbitControlRef.current]);

const ballRef = useRef(null)
useEffect(()=>{
    if(!!ballRef.current){
        gsap.to(ballRef.current.position,{
            x:2,
            duration:1
        })

        gsap.to(ballRef.current.position,{
            y:0.5,
            duration:1,
            ease:'bounce.out'
        },"<")

        
    }

},[ballRef.current])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls ref={orbitControlRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)}/>
      {/* <mesh position={[-2, 5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 20, 20]} />
        <meshStandardMaterial color="#67c1eb" roughness={0.1} metalness={0.7}/>
      </mesh> */}
      <Model/>

      {/* <mesh rotation={[5, 0, 0]} receiveShadow>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#67c1eb"  roughness={0.1} metalness={0.7} />
      </mesh> */}


      <ambientLight args={["#ffffff", 0]} />
      <spotLight args={['#ffffff',10,20,angleToRadians(80),0.7]} position={[-4,1,0]} castShadow/>


{/* 
      <Environment background>
        <mesh>
            <sphereGeometry args={[50,100,100]}/>
            <meshBasicMaterial side={THREE.BackSide} color='#67c1eb'/>
        </mesh>
      </Environment> */}
    </>
  );
};

export default Test;
