"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MyStory = () => {
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
      id="my-story"
      className="py-20 bg-center bg-cover bg-[#173f36] relative text-white"
      // style={{ backgroundImage: "url('../images/hero.gif')" }}
    >
      {/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full z-0"
      >
        <source src="../images/aboutus.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <div className="container relative mx-auto px-12 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <motion.img
            src="../images/image.png"
            alt="Founder"
            className="w-full scale-75 h-auto rounded-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl font-extrabold text-[#FFD700] mb-6"
          >
            My Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6 text-lg text-justify leading-relaxed text-white"
          >
            Born with a passion for numbers and a deep understanding of the
            cosmic vibrations, our founder has been a guiding light for many
            individuals seeking to understand their life paths and destinies.
            With years of experience in numerology and a dedication to
            empowering others, the journey from a curious seeker to a renowned
            numerologist has been nothing short of inspiring.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-6 text-lg text-justify leading-relaxed text-white"
          >
            Through meticulous study and practical applications, the founder has
            unlocked the secrets of numerology, helping countless individuals
            find clarity and direction. Their expertise lies in translating
            complex numerical patterns into actionable insights, making the
            mystical art of numerology accessible to all.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-6 text-lg text-justify leading-relaxed text-white"
          >
            Join us on this transformative journey and discover how the power of
            numbers can illuminate your path and reveal your true potential.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#FFD700] text-[#0F172A] font-bold rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={animateSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.0 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
