import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation when section is visible
      transition={{ duration: 1 }} // Animation duration
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('../images/hero.gif')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white px-6 md:px-24 w-full mt-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation when section is visible
          transition={{ duration: 1, delay: 0.5 }} // Delay added for staggered animation
          className="text-4xl md:text-7xl mb-2 font-light"
        >
          Numbers have a unique vibration
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation when section is visible
          transition={{ duration: 1, delay: 0.7 }} // Delay added for staggered animation
          className="text-4xl md:text-7xl mb-2 font-bold text-[#FFD700] italic"
        >
          that can reveal hidden truths
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation when section is visible
          transition={{ duration: 1, delay: 0.9 }} // Delay added for staggered animation
          className="text-4xl md:text-7xl font-light mb-4"
        >
          about your life.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation when section is visible
          transition={{ duration: 1, delay: 1.1 }} // Delay added for staggered animation
          className="mt-12 md:mt-24 text-center"
        >
          <button className="px-6 py-4 bg-[#173f36] text-white text-lg md:text-2xl font-bold rounded-lg shadow-lg transform transition-transform hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
