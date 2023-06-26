import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense } from "react";
import Test from "./components/three";

function App() {
  return (
    <>
   
      <Canvas id="canv" shadows>
        <Suspense fallback={null}>
         <Test/>
        </Suspense>
      </Canvas>
      
    </>
  );
}

export default App;
