import React from "react";
import { motion } from "framer-motion"; //must be import this line

const ExampleOne = () => {
  return (
    <motion.div
      className="text-3xl font-bold text-center my-20"
      initial={{ opacity: 0 }} //below the Explanation of Props
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Hello, Imran!
    </motion.div>
  );
};

export default ExampleOne;
