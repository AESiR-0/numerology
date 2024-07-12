import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <div
      className="bg-[#173f36] border-t-2 border-t-[#FFD700] text-white bg-center cursor-pointer bg-cover py-6 px-10"
      style={{
        backgroundImage: "url('../images/hero.gif')",
        cursor: "url('../images/cursor.png'), default",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row cursor-pointer items-start lg:items-center justify-between">
        <div className="mb-6 lg:mb-0">
          <img
            src="../images/logo.png"
            alt="logo"
            className="h-20 md:h-[10rem]"
          />
        </div>
        <div className="mb-6 lg:mb-0">
          <h5 className="text-lg font-bold mb-2">Contact Us</h5>
          <p>
            <FiPhone className="inline-block mr-2" /> +123 456 7890
          </p>
          <p>
            <FiMail className="inline-block mr-2" /> info@numerologist.com
          </p>
        </div>
        <div className="mb-6 lg:mb-0">
          <h5 className="text-lg font-bold mb-2">Follow Us</h5>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-[#FFD700] transition-colors duration-300"
            >
              <FaFacebook className="h-8 w-8" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFD700] transition-colors duration-300"
            >
              <FaTwitter className="h-8 w-8" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFD700] transition-colors duration-300"
            >
              <FaInstagram className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div className="mb-6 lg:mb-0">
          <h5 className="text-lg font-bold mb-2">Newsletter</h5>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-[#FFD700] text-black font-bold rounded hover:bg-[#FFD700] hover:text-white transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>{" "}
      <p className="text-center text-white text-sm sm:text-base mt-2">
         2024 Agraneeh Man. All Rights Reserved.
      </p>
    </div>
  );
}
