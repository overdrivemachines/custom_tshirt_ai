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
/
      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
      <Shirt />
    </Canvas>
  )
}

export default CanvasModel
