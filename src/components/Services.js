import { FaUser, FaBuilding, FaHeart, FaCrystalBall } from 'react-icons/fa';

const services = [
  {
    title: "Personal Numerology Reading",
    description: "Get personalized insights based on your numbers.",
    // icon: <FaUser className="text-4xl text-green-700 mb-4" />,
  },
  {
    title: "Business Numerology",
    description: "Optimize your business success with numerology.",
    // icon: <FaBuilding className="text-4xl text-green-700 mb-4" />,
  },
  {
    title: "Compatibility Analysis",
    description: "Find out how compatible you are with others.",
    // icon: <FaHeart className="text-4xl text-green-700 mb-4" />,
  },
  {
    title: "Future Predictions",
    description: "Gain insights into your future through numbers.",
    // icon: <FaCrystalBall className="text-4xl text-green-700 mb-4" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#173f36] text-white py-20 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#ffd900]">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white text-black rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center justify-center">
              {/* {service.icon} */}
              <h3 className="text-2xl font-bold text-[#173f36] mb-2">{service.title}</h3>
              <p className="text-lg text-center">{service.description}</p>
              <a href="#" className="mt-4 bg-[#173f36] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors duration-300">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
