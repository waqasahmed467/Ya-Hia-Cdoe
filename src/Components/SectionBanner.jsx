import { motion } from "framer-motion";

function SectionBanner() {
        
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative w-[90%] mx-auto mt-10 mb-10 py-10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.4)] bg-gradient-to-r from-yellow-500/80 via-orange-600/70 to-yellow-500/80 text-center"
    >
      {/* Subtle moving light overlay */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <h1 className="relative z-10 text-5xl font-bold text-white drop-shadow-md tracking-wide">
        Man’s Collections
      </h1>

      <p className="relative z-10 text-lg text-white/90 mt-3 font-medium">
        Discover the latest trends for 2025
      </p>
    </motion.div>
  );
}

export default SectionBanner;
