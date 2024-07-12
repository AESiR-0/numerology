import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
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
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={animateSection ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      id="about"
      className="bg-[#173f36] text-white py-20 px-20 text-justify"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animateSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">About Us</h2>
          <p className="text-lg leading-relaxed mb-8">
            At Numerologist, we are passionate about decoding the language of
            numbers to empower individuals and businesses alike. Our journey
            began with a commitment to uncover the hidden meanings behind
            numbers and their profound impact on life’s journey.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            With a dedicated team of experienced numerologists and cutting-edge
            technology, we offer personalized numerological readings that
            provide clarity and guidance. From understanding core numbers to
            navigating karmic challenges and exploring practical remedies,
            Numerologist is your trusted partner in uncovering insights and
            unlocking potential.
          </p>
          <p className="text-lg leading-relaxed">
            Join us on a transformative journey where numbers become your allies
            in achieving personal and professional growth. Discover the power of
            numerology and embark on a path of self-discovery and success with
            Numerologist.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animateSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="md:w-1/2 md:mr-10 mb-10 md:mb-0 pl-10"
        >
          <video width='600' controls>
            <source src="../images/numerology.mp4"></source>
          </video>
        </motion.div>
      </div>
    </motion.section>
  );
}
