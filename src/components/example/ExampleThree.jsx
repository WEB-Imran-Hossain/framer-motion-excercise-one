import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ExampleThree = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="text-center">
      <button
        className="text-xl font-bold border border-gray-400 p-3 bg-sky-500 w-52 text-white w-40 mt-5"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            I will fade in and out
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExampleThree;
