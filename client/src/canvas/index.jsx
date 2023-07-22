import {Canvas} from "@react-three/fiber";
import {Environment, Center} from "@react-three/drei";

// Import from ./canvas/*
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";

const CanvasModel = () => {
  return (
    <Canvas>
      {/* Apply ambient lighting */}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        {/* glow behind the shirt */}
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
