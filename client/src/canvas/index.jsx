import {Canvas} from "@react-three/fiber";
import {Environment, Center} from "@react-three/drei";

// Import from ./canvas/*
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";

const CanvasModel = () => {
  return (
    // fov is like zoom
    <Canvas shadows camera={{position: [0,0,0], fov: 25}} gl={{preserveDrawingBuffer: true}} className="w-full max-w-full h-full transition-all ease-in">
      {/* Apply ambient lighting */}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        {/* glow behind the shirt */}
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
