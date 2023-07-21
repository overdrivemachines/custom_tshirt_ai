// AnimatePresence  enables the animation of components that have been removed from the tree
import {motion, AnimatePresence} from  "framer-motion";

// React state library
import { useSnapshot } from 'valtio';

// Make framer motion animations work
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../config/motion";
const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
