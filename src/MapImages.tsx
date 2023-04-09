import { motion } from "framer-motion";
import { animationStart } from "./utils/animation";

function MapImages() {
  return (
    <div className="absolute w-full flex justify-between transform -translate-y-200px -z-1 overflow-hidden">
      <motion.img
        src="src/assets/map_1.png"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: animationStart + 1.2,
          type: "tween",
          duration: 0.5,
        }}
        className="object-cover"
      />
      <motion.img
        src="src/assets/map_2.png"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: animationStart + 1.2,
          type: "tween",
          duration: 0.5,
        }}
        className="object-cover"
      />
    </div>
  );
}

export default MapImages;
