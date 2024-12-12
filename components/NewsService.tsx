"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const newsroomData = [
  { title: "News 1", editor: "xyz", description: "Description of News 1" },
  { title: "News 2", editor: "xyz", description: "Description of News 2" },
  { title: "News 3", editor: "xyz", description: "Description of News 3" },
  { title: "News 4", editor: "xyz", description: "Description of News 4" },
];

export default function NewsService() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative bg-black" style={{ filter: "brightness(1.2)" }}>
        <div className="relative">
          <Image
            width={100}
            height={100}
            src="/news.png"
            alt="news-img"
            className="md:w-[700px] md:h-[550px] w-full h-full object-cover opacity-90"
          />

          <div className="absolute top-0 left-0 w-full h-full flex flex-col md:items-start mt-6 md:justify-center text-center">
            <h1 className="text-white md:text-5xl md:mx-20 text-3xl font-bold mb-6 underline">
              Newsroom
            </h1>
            <p className="text-white mx-4 md:mx-20 mb-8 md:mb-36 md:text-2xl text-lg font-serif">
              Stay tuned with the latest from
              <br /> KriptoBytes
            </p>
          </div>
        </div>

         {/* For mobile: slider below heading */}

         {/* Slider Section */}
        <div className="md:absolute md:hidden flex flex-col relative md:-mt-0 -mt-8 w-full md:top-1/2 md:left-3/4 md:mx-36 p-3 md:transform md:-translate-x-1/2 md:-translate-y-1/2 overflow-hidden">
         
         <div
           className="flex md:gap-4 gap-5 mx-10 transition-transform duration-500 ease-in-out"
           style={{
             transform: `translateX(-${currentIndex * 130}%)`,
           }}
         >
           {newsroomData.map((item, index) => (
             <div
               key={index}
               className="bg-gray-800 p-4 shadow-lg w-[250px] h-[250px] flex-shrink-0"
             >
               <h2 className="text-xl md:text-2xl text-gray-300 font-semibold mb-2">
                 {item.title}
               </h2>
               <button className="border w-fit h-fit p-2 text-gray-300 mt-2 mb-3">
                 {item.editor}
               </button>
               <p className="text-gray-400">{item.description}</p>
               <Link href="#">
                 <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 mt-4" />
               </Link>
             </div>
           ))}
         </div>

         {/* Pagination Dots */}
         <div className="flex justify-center mt-4 md:mt-6">
           {newsroomData.map((_, i) => (
             <button
               key={i}
               onClick={() => newsSlide(i)}
               className={`w-4 h-4 mx-1 rounded-full ${
                 currentIndex === i ? "bg-teal-400" : "bg-gray-500"
               }`}
             />
           ))}
         </div>
       </div>
     

        {/* Slider Section */}
        <div className="md:absolute md:flex hidden  flex-col relative md:-mt-0 -mt-8 w-full md:top-1/2 md:left-3/4 md:mx-36 p-3 md:transform md:-translate-x-1/2 md:-translate-y-1/2 overflow-hidden">
         
          <div
            className="flex md:gap-4 gap-2 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 32}%)`,
            }}
          >
            {newsroomData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 md:p-8 shadow-lg md:w-[450px] w-[100%] h-[350px] flex-shrink-0"
              >
                <h2 className="text-xl md:text-2xl text-gray-300 font-semibold mb-2">
                  {item.title}
                </h2>
                <button className="border w-fit h-fit p-2 text-gray-300 mt-2 mb-3">
                  {item.editor}
                </button>
                <p className="text-gray-400">{item.description}</p>
                <Link href="#">
                  <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 mt-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 md:mt-6">
            {newsroomData.map((_, i) => (
              <button
                key={i}
                onClick={() => newsSlide(i)}
                className={`w-4 h-4 mx-1 rounded-full ${
                  currentIndex === i ? "bg-teal-400" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
