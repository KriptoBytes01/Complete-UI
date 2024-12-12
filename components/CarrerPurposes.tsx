"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const careerData = [
  {
    title: "Integrity",
    image: "/integrity.png",
    description: "An expression of our courage and accountability.",
  },
  {
    title: "Diversity",
    image: "/diversity.png",
    description: "Create user-centric designs for engaging experiences.",
  },
  {
    title: "Changemakers",
    image: "/changemakers.png",
    description: "Analyze and interpret complex data for actionable insights.",
  },
  {
    title: "Impact",
    image: "/impact.png",
    description: "Ensure seamless integration and deployment of code.",
  },
  {
    title: "Social Responsibility",
    image: "/social-responsibility.png",
    description: "Lead cross-functional teams to deliver impactful products.",
  },
];

export default function CareerPurposes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev === 0 ? careerData.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === careerData.length - 1 ? 0 : prev + 1));
    }
  };

  const handleHeadingClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-black text-white py-10 px-6">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-24 px-4 md:px-12 py-6 md:py-10 mb-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl mb-2 md:mb-4">{careerData[activeIndex].title}</h1>
          <p className="text-sm md:text-lg">{careerData[activeIndex].description}</p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            height={100}
            width={100}
            src={careerData[activeIndex].image}
            alt={careerData[activeIndex].title}
            className="w-40 h-40 md:w-60 md:h-60 bg-transparent"
          />
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-end md:justify-start items-center gap-4 mb-6 md:mb-8">
        <button
          onClick={() => handleArrowClick("left")}
          className="p-2 md:p-3 bg-transparent hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-8 h-8 md:w-12 md:h-12" />
        </button>
        <button
          onClick={() => handleArrowClick("right")}
          className="p-2 md:p-3 bg-transparent hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-8 h-8 md:w-12 md:h-12" />
        </button>
      </div>

      {/* Headings with Bottom Border */}
      <div className="flex flex-wrap justify-center md:justify-between items-center border-t border-gray-600 pt-4">
        {careerData.map((item, index) => (
          <button
            key={index}
            onClick={() => handleHeadingClick(index)}
            className={`text-sm md:text-2xl mt-3 px-2 md:px-4 font-medium pb-2 ${
              activeIndex === index ? "border-b-4 border-teal-500" : "border-b-4 border-transparent"
            } transition-all duration-300`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
