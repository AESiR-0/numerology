import { useState, useEffect } from "react";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Added state for isOpen

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          isSticky
            ? "bg-black bg-opacity-90 shadow-2xl"
            : "bg-black bg-opacity-50"
        } text-white px-6 fixed w-full z-50 transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="../images/logo.png"
            alt="logo"
            className="h-16 md:h-[7rem]"
          />
          <div className="hidden md:flex space-x-8">
            <Link href="/" passHref>
              <span
                className={`cursor-pointer text-lg hover:text-[#FFD700] ${
                  activeSection === "" ? "text-[#FFD700]" : ""
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="#about" passHref>
              <span
                className={`cursor-pointer text-lg hover:text-[#FFD700] ${
                  activeSection === "about" ? "text-[#FFD700]" : ""
                }`}
              >
                About Us
              </span>
            </Link>
            <Link href="#services" passHref>
              <span
                className={`cursor-pointer text-lg hover:text-[#FFD700] ${
                  activeSection === "services" ? "text-[#FFD700]" : ""
                }`}
              >
                Our Services
              </span>
            </Link>
            <Link href="#testimonials" passHref>
              <span
                className={`cursor-pointer text-lg hover:text-[#FFD700] ${
                  activeSection === "testimonials" ? "text-[#FFD700]" : ""
                }`}
              >
                Testimonials
              </span>
            </Link>
            <Link href="#contact" passHref>
              <span
                className={`cursor-pointer text-lg hover:text-[#FFD700] ${
                  activeSection === "contact" ? "text-[#FFD700]" : ""
                }`}
              >
                Contact Us
              </span>
            </Link>
          </div>
          <Link href="#contact" passHref>
            <button className="hidden md:block bg-[#173f36] text-white font-bold py-3 px-6 rounded shadow-lg transition-transform transform hover:scale-105">
              Get in Touch
            </button>
          </Link>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-black bg-opacity-90 w-full text-white`}
      >
        <div className="px-6 py-2">
          <Link href="/" passHref>
            <span
              className={`block py-2 text-lg hover:text-[#FFD700] ${
                activeSection === "" ? "text-[#FFD700]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </span>
          </Link>
          <Link href="#about" passHref>
            <span
              className={`block py-2 text-lg hover:text-[#FFD700] ${
                activeSection === "about" ? "text-[#FFD700]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </span>
          </Link>
          <Link href="#services" passHref>
            <span
              className={`block py-2 text-lg hover:text-[#FFD700] ${
                activeSection === "services" ? "text-[#FFD700]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Our Services
            </span>
          </Link>
          <Link href="#testimonials" passHref>
            <span
              className={`block py-2 text-lg hover:text-[#FFD700] ${
                activeSection === "testimonials" ? "text-[#FFD700]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </span>
          </Link>
          <Link href="#contact" passHref>
            <span
              className={`block py-2 text-lg hover:text-[#FFD700] ${
                activeSection === "contact" ? "text-[#FFD700]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </span>
          </Link>
          <Link href="#contact" passHref>
            <button className="w-full bg-[#FFD700] text-black font-bold py-3 mt-2 rounded shadow-lg transition-transform transform hover:scale-105">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex fixed flex-col bottom-2 left-0">
        <ul>
          <li className="z-20 w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#FFD700]">
            <a
              className="flex justify-between items-center px-5 w-full text-[#173f36]"
              href="/"
            >
              Contact <img src="../images/logo.png" height={80} width={80} />
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex fixed flex-col top-[50%] right-0">
        <ul>
          <li className="z-20 w-[100px] h-[60px] flex justify-between items-center  bg-[#FFD700] hover:bg-[#ffd90083]">
            <a
              className="flex justify-between text-sm items-center px-6 py-4 w-full text-[#173f36]"
              href="/purchase"
            >
              Purchase Now
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
