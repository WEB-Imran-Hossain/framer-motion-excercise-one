import React from "react";
import { motion } from "framer-motion"; //must be import this line

const ExampleTwo = () => {
  return (
    <div>
      <motion.div
        className="text-xl font-bold text-center border border-gray-400 p-3 bg-sky-500 w-52 text-white mx-auto"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        Hover or Click Me!
      </motion.div>
    </div>
  );
};

export default ExampleTwo;
