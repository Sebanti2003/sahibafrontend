
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const TiltedText = () => {
  // Create a ref to attach to the animated element
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  return (
    <div className=" font-[anzo5]">
      <div
        ref={ref} // Attach the ref to the parent container
        className="bg-gradient-to-r flex flex-col gap- from-slate-300 to-slate-100 text-transparent bg-clip-text text-4xl font-bold"
      >
        {isInView && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-2 hello"
            >
              Hello There!!<span className="text-yellow-500">👋</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:text-5xl name p-2 bg-gradient-to-r from-blue-600 to-blue-300 text-transparent bg-clip-text"
            >
              Sebanti Dasgupta
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:text-7xl title p-2 bg-gradient-to-r from-blue-600 to-blue-300 text-transparent bg-clip-text"
            >
              Full Stack Developer
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="text-lg max-lg:text-base p-2 bg-gradient-to-r about from-blue-200 to-slate-300 text-transparent bg-clip-text"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                I’m Sebanti Dasgupta, and I’m on a mission to tackle challenging
                full-stack projects with unwavering dedication.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                I thrive on hard work and am eager to take on any project that
                comes my way.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
              >
                With a passion for both backend and frontend development, I’m
                committed to delivering high-quality solutions that make a real
                impact.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.8 }}
              >
                If you’re looking for someone who is driven, passionate, and
                ready to dive into meaningful work, I’m your ideal team member.
                Let’s create something amazing together.
              </motion.p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default TiltedText;
