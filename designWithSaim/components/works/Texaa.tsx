import React from "react";
import { motion } from "framer-motion";

const Textaa = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="absolute whitespace-nowrap"
        animate={{ x: [0, "100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        }}
      >
        <p className="inline-block text-white text-lg">
          This is the horizontally scrolling text that loops infinitely in a
          continuous motion. This is the horizontally scrolling text that loops
          infinitely in a continuous motion.
        </p>
      </motion.div>
    </div>
  );
};
export default Textaa;