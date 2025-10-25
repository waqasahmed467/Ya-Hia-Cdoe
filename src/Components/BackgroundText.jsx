import { motion } from "framer-motion";

function BackgroundText() {
  return (
    <>
      <motion.h1
        className="absolute left-10 top-1/7 text-[150px] font-bold text-white/10 select-none tracking-wider"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        STYLE
      </motion.h1>

      <motion.h1
        className="absolute right-10 top-1/7 text-[150px] font-bold text-white/10 select-none tracking-wider"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        FASHION
      </motion.h1>
    </>
  );
}

export default BackgroundText;
