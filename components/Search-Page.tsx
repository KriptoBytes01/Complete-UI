// Import necessary modules
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SearchPage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => setIsSearchOpen(true);
  const handleSearchClose = () => setIsSearchOpen(false);

  return (
    <>
      {/* Navbar Search Icon */}
      <div className="flex flex-row items-center space-x-2">
        <h4 className="hidden sm:block">Explore</h4>
        <button onClick={handleSearchOpen} aria-label="Search">
          <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
        </button>
      </div>

      {/* Fullscreen Search Page */}
      {isSearchOpen && (
        <div className="fixed inset-0 items-center w-full justify-center bg-black z-50 flex flex-col p-6">
          {/* Close Button */}
          <button
            onClick={handleSearchClose}
            aria-label="Close"
            className="absolute top-6 right-6 text-gray-500 hover:text-teal-600"
          >
            <FontAwesomeIcon icon={faTimes} className="w-8 h-8" />
          </button>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl  text-center  mb-20">
            What are you looking for?
          </h1>

          {/* Search Bar */}
          <div className="relative mb-20 flex mx-auto w-full max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-b-2 bg-transparent border-gray-300 focus:border-teal-500 outline-none text-lg px-2 py-1"
            />
           <Link href="/">
           <FontAwesomeIcon icon={faSearch} />
           </Link>
          </div>

          {/* Trending Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <div className="border-l-4 border-teal-500 h-6"></div>
              <h2 className="text-xl ">Trending</h2>
            </div>

            <div className="flex space-x-4">
              <button className="md:px-4 md:py-2 p-2 border hover:border-teal-600 border-gray-300 rounded-2xl bg-transparent text-white  hover:bg-teal-600">
                Services
              </button>
              <button className="md:px-4 md:py-2 p-2 border hover:border-teal-600 border-gray-300 rounded-2xl  bg-transparent text-white  hover:bg-teal-600">
                Solutions
              </button>
              <button className="md:px-4 md:py-2 p-2 border hover:border-teal-600 border-gray-300 rounded-2xl  bg-transparent text-white  hover:bg-teal-600">
               Locations
              </button>
              <button className="md:px-4 md:py-2 p-2 border hover:border-teal-600 border-gray-300 rounded-2xl  bg-transparent text-white  hover:bg-teal-600">
                Jobs
              </button>
              <button className="md:px-4 md:py-2 p-2 hover:border-teal-600 border border-gray-300 rounded-2xl  bg-transparent text-white  hover:bg-teal-600">
               <Link href="/">
               KriptoBytes
               </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPage;
