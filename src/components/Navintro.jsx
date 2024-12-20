import HireMeButton from "./HireMeButton";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Navintro = () => {
  const nav = useRef();
  const useview = useInView(nav, { triggerOnce: false, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      ease: "easeInOut",
      duration: 0.9,
      transition: {
        staggerChildren: 0.6,
        duration: 0.5,
         // Adjust the stagger timing here
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={nav}
      className="px-5 min-h-16 flex justify-between items-center gap-3 capitalize font-[poppins400] font-semibold border- border-black"
    >
      {useview && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex gap-5 text-white text-base font-[anzo5]"
        >
          <motion.div className="cursor-pointer" variants={itemVariants}>About</motion.div>
          <motion.div className="cursor-pointer" variants={itemVariants}>Skills</motion.div>
        </motion.div>
      )}
      <div className="flex items-center">
        <HireMeButton />
        <i className="ri-more-2-fill text-4xl text-black cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Navintro;
