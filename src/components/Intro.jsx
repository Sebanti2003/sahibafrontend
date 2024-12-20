import { motion,useInView } from 'motion/react'
import Tiltedtext from "./Tiltedtext";
import img from "/sideface.png";
import { useRef } from 'react';
const Intro = () => {
  const imgref=useRef(null);
  const useview=useInView(imgref,{triggerOnce:false,threshold:0.2});

  return (
    <div className="flex min-h-screen flex-col lg:flex-row gap-1 bg-transparent">
      <div className="w-full lg:w-1/2  max-sm:font-bold flex items-center capitalize justify-start p-2">
        <Tiltedtext />
      </div>
      <div ref={imgref} className="w-full lg:w-1/2   flex justify-center items-center">
        {useview && <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-[400px] h-[400px] blob overflow-hidden shadow-xl bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-900">
          <img src={img} alt="sideface" />
        </motion.div>}
      </div>
    </div>
  );
};

export default Intro;
