import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PurchaseParallax = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when section is 50% visible
  });

  const [animateSection, setAnimateSection] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimateSection(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="parallax bg-fixed bg-center bg-cover h-[30rem] flex items-center justify-center"
    >
      <div className="bg-black opacity-50 h-[100%]"></div>
      <div className="container mx-auto px-4 text-center text-white">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={animateSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Discover the Power of Numerology
        </motion.h2>
        <motion.p
          className="mt-4 text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={animateSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Unlock the secrets of your life path. Learn how numbers can influence your career, relationships, and future.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={animateSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <button className="px-8 py-4 text-lg bg-[#FFD700] text-black font-bold rounded shadow-lg transform transition-transform hover:scale-105">
            Purchase Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PurchaseParallax;
