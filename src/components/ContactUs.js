import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactUs = () => {
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
      id="contact"
      className="bg-[#173f36] text-white py-20"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={animateSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-[#FFD700]"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={animateSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg text-white"
        >
          We'd love to hear from you! Fill out the form below to get in touch.
        </motion.p>
        <form className="mt-12 space-y-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FFD700] text-black"
            />
          </motion.div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={animateSection ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative flex-1"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FFD700] text-black"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={animateSection ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative flex-1 mt-4 md:mt-0"
            >
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FFD700] text-black"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.0 }}
            className="relative"
          >
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FFD700] text-black"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative"
          >
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FFD700] text-black"
              rows="4"
            ></textarea>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
            type="submit"
            className="w-full px-4 py-2 bg-[#FFD700] text-black font-bold rounded shadow-lg transform transition-transform hover:scale-105"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
