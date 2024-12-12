"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faGoogle,
  faMicrosoft,
  faAmazon,
  faFacebook,
  faTwitter,
  faSpotify,
  faChrome,
  faAndroid,
  faLinux,
  faGithub,
  faDocker,
  faInstagram,
  faLinkedin,
  faYoutube,
  faWhatsapp,
  faSnapchat,
  faTiktok,
  faPaypal,
  faFirefox,
  faSkype,
  faSlack,
  faBitbucket,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

export default function OurClients() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slideContent = [
    [
      { icon: faApple, name: "Apple" },
      { icon: faGoogle, name: "Google" },
      { icon: faMicrosoft, name: "Microsoft" },
      { icon: faAmazon, name: "Amazon" },
      { icon: faFacebook, name: "Facebook" },
      { icon: faTwitter, name: "Twitter" },
      { icon: faSpotify, name: "Spotify" },
      { icon: faChrome, name: "Chrome" },
      { icon: faAndroid, name: "Android" },
      { icon: faLinux, name: "Linux" },
      { icon: faGithub, name: "GitHub" },
      { icon: faDocker, name: "Docker" },
    ],
    [
      { icon: faInstagram, name: "Instagram" },
      { icon: faLinkedin, name: "LinkedIn" },
      { icon: faYoutube, name: "YouTube" },
      { icon: faWhatsapp, name: "WhatsApp" },
      { icon: faSnapchat, name: "Snapchat" },
      { icon: faTiktok, name: "TikTok" },
      { icon: faPaypal, name: "PayPal" },
      { icon: faFirefox, name: "Firefox" },
      { icon: faSkype, name: "Skype" },
      { icon: faSlack, name: "Slack" },
      { icon: faBitbucket, name: "Bitbucket" },
      { icon: faDiscord, name: "Discord" },
    ],
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    if (slideIndex > 0) {
      setSlideIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (slideIndex < slideContent.length - 1) {
      setSlideIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="bg-black text-white p-8 md:p-20 flex flex-col md:flex-row items-center gap-8">
      <div className="max-w-md space-y-4 text-center md:text-left">
        <hr className="border-t-2 border-gray-300 md:w-2/3 mb-6 md:mb-8" />
        <h2 className="text-2xl md:text-5xl">Our Happy Clients</h2>
        <p className="text-sm md:text-xl text-gray-300">
          They trust us, and we keep giving them reasons to.
        </p>
        <button className="bg-transparent text-sm md:text-lg w-fit mx-auto md:mx-0 md:p-4 p-3 border border-white">
          View all clients
          <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
        </button>
      </div>

      <div className="flex-1 text-center relative p-1 md:p-12">
        {isMobile ? (
          <>
            <div className="grid grid-cols-3 gap-4">
              {slideContent[slideIndex].map((logo, index) => (
                <div
                  key={index}
                  className="bg-white text-black flex flex-col items-center justify-center h-20 w-20 shadow-md"
                >
                  <FontAwesomeIcon icon={logo.icon} className="text-xl mb-1" />
                  <span className="text-xs">{logo.name}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {slideContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSlideIndex(index)}
                  className={`w-3 h-3 mx-2 rounded-full ${
                    slideIndex === index ? "bg-teal-500" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </>
        ) : (
          <>
            <button
              onClick={handlePrevious}
              disabled={slideIndex === 0}
              className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${
                slideIndex === 0 ? "text-gray-500 cursor-not-allowed" : "text-white"
              }`}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-2xl md:text-4xl" />
            </button>
            <div className="grid grid-cols-4 gap-8">
              {slideContent[slideIndex].map((logo, index) => (
                <div
                  key={index}
                  className="bg-white text-black flex flex-col items-center justify-center h-40 w-40 shadow-md"
                >
                  <FontAwesomeIcon icon={logo.icon} className="text-2xl mb-2" />
                  <span className="text-sm">{logo.name}</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={slideIndex === slideContent.length - 1}
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 ${
                slideIndex === slideContent.length - 1 ? "text-gray-500 cursor-not-allowed" : "text-white"
              }`}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-2xl md:text-4xl" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
