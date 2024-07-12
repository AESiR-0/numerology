import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "John Doe",
    message: "This numerology service changed my life! I was skeptical at first, but the insights I received were incredibly accurate and helpful. It's amazing how much clarity and direction I've gained since using this service.",
    occupation: "Software Engineer",
    avatar: "../images/hero.webp",
    date: "March 15, 2024",
    rating: 5,
  },
  {
    name: "Jane Smith",
    message: "Amazing insights and accurate readings. The numerologist was very professional and provided detailed explanations for everything. Highly recommended for anyone looking to understand themselves better.",
    occupation: "Marketing Manager",
    avatar: "../images/hero.webp",
    date: "April 3, 2024",
    rating: 4,
  },
  {
    name: "James Smith",
    message: "The readings were spot on and really helped me during a tough time in my life. The numerologist was very empathetic and provided great advice.",
    occupation: "Marketing Manager",
    avatar: "../images/hero.webp",
    date: "April 7, 2024",
    rating: 5,
  },
  {
    name: "Robert Brown",
    message: "Highly recommended for anyone seeking clarity. The insights were very valuable, and the numerologist took the time to explain everything in detail.",
    occupation: "Business Consultant",
    avatar: "../images/hero.webp",
    date: "May 20, 2024",
    rating: 4,
  },
  {
    name: "Emily White",
    message: "A must-try for anyone curious about their numbers. The service was very professional, and the readings provided a lot of useful information.",
    occupation: "Teacher",
    avatar: "../images/hero.webp",
    date: "June 12, 2024",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    message: "I gained so much clarity and direction. The numerologist's insights were incredibly accurate and helpful. I feel much more confident about my future now.",
    occupation: "Financial Analyst",
    avatar: "../images/hero.webp",
    date: "July 1, 2024",
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
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
      id="testimonials"
      className="bg-[#173f36] text-black py-20 overflow-hidden"
    >
      <div className="container mx-auto text-center px-10">
        <h2 className="text-4xl font-extrabold text-[#FFD700]">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="py-6 px-6 bg-gray-100 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={animateSection ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-24 w-24 rounded-full mr-4"
                />
                <div>
                  <p className="text-xl italic text-justify text-gray-700">
                    "{testimonial.message}"
                  </p>
                  <p className="mt-1 text-left text-lg text-gray-500">
                    {testimonial.occupation}
                  </p>
                  <p className="mt-1 text-left text-sm text-gray-400">
                    Date: {testimonial.date}
                  </p>
                  <p className="mt-1 text-left text-sm text-gray-400">
                    Rating: {"⭐".repeat(testimonial.rating)}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <p className="font-bold text-[#173f36]">- {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
