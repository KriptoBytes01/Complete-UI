"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white px-6 py-10 space-y-8 border-b border-gray-300">
      {/* Wrapper for all sections */}
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        {/* Section 1 */}
        <div className="flex flex-col space-y-4 items-center md:items-start md:w-1/5">
          <h2 className="text-xl text-zinc-200 font-semibold">Stay Connected</h2>
          <div className="bg-teal-900 p-3 w-36 text-center">
            <p>Subscribe for updates</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col space-y-2 items-center md:items-start md:w-1/5">
          <h2 className="text-zinc-200 text-xl font-semibold">Our Company</h2>
          {["Our Company", "About us", "Industries", "Clientele", "Careers", "Contact us"].map((item, index) => (
            <a key={index} href="#" className="hover:text-teal-500 text-zinc-400">
              {item}
            </a>
          ))}
          <h3 className="mt-4 text-xl font-semibold text-gray-300">Resources</h3>
          <a href="#" className="hover:text-teal-500 text-zinc-400">Blogs</a>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col space-y-2 items-center md:items-start md:w-1/5">
          <h2 className="text-xl text-zinc-200 font-semibold">Services</h2>
          {[
            "Digital Transformation",
            "Team Augmentation",
            "Product Engineering",
            "Application Development",
            "Innovation Lab",
            "UI/UX",
            "Artificial Intelligence (AI)",
            "Internet of Things (IoT)",
            "Blockchain",
            "Data Science",
            "Big Data & Analytics",
            "DevOps",
            "IMS",
            "Quality Engineering",
            "Cloud Services",
          ].map((service, index) => (
            <a key={index} href="#" className="hover:text-teal-500 text-zinc-400">
              {service}
            </a>
          ))}
        </div>

        {/* Section 4 */}
        <div className="flex flex-col space-y-2 items-center md:items-start md:w-1/5">
          <h2 className="text-xl text-zinc-200 font-semibold">Solutions</h2>
          {["eCommerce", "CRM", "CMS", "RPA", "SAP", "ERP"].map((solution, index) => (
            <a key={index} href="#" className="text-zinc-400 hover:text-teal-500">
              {solution}
            </a>
          ))}
        </div>

        {/* Section 5 */}
        <div className="flex flex-col items-center md:items-start md:w-1/5">
          <h2 className="text-xl text-gray-300 font-semibold">Our Brands</h2>
          <div className="grid grid-cols-1 gap-2 mt-4">
            {Array(3).fill("").map((_, i) => (
              <div key={i} className="w-32 h-12 bg-zinc-200"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          className="text-gray-400 hover:text-teal-500 text-lg sm:text-xl md:text-2xl"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://linkedin.com"
          className="text-gray-400 hover:text-teal-500 text-lg sm:text-xl md:text-2xl"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://youtube.com"
          className="text-gray-400 hover:text-teal-500 text-lg sm:text-xl md:text-2xl"
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
        <a
          href="https://instagram.com"
          className="text-gray-400 hover:text-teal-500 text-lg sm:text-xl md:text-2xl"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
