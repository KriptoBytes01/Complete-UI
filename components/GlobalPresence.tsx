export default function GlobalPresence() {
  const boxData = [
    { heading: "50+", description: "Countries" },
    { heading: "25+", description: "Years of excellence" },
    { heading: "4000+", description: "Talent Pool" },
    { heading: "1500+", description: "Clients" },
  ];

  const buttonData = [
    { name: "India" },
    { name: "Asia Pacific" },
    { name: "South Africa" },
    { name: "Middle East" },
    { name: "Europe" },
    { name: "North America" },
    { name: "South America" },
  ];

  return (
    <>
      <div className="bg-zinc-800">
        {/* 4 Boxes on Top with Borders */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 mb-12 border-b-2 border-gray-300">
          {boxData.map((box, index) => (
            <div
              key={index}
              className="bg-transparent border border-t-transparent border-gray-300 flex flex-col justify-between p-6 sm:p-6 md:p-6"
            >
              <div className="text-white flex flex-col items-center py-6 px-2 sm:py-10 sm:px-4 mb-2 sm:mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold">{box.heading}</h3>
                <p className="text-sm sm:text-lg mt-2 sm:mt-4">{box.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-28">
          <h1 className="mt-4 text-gray-200 text-2xl  md:text-5xl mb-10 md:mb-16">
            Our Global Presence
          </h1>

          {/* Buttons Section */}
          <div className="flex flex-wrap gap-2 sm:gap-8 mb-8 sm:mb-12 justify-center">
            <button className="bg-white px-4 py-2 rounded-3xl text-xs sm:text-sm text-black hover:text-white transition-all duration-300 hover:bg-teal-500 hover:border-teal-500 hover:translate-x-2">
              All
            </button>
            {buttonData.map((button, index) => (
              <button
                key={index}
                className="border-2 border-gray-400 bg-transparent text-gray-300 text-xs sm:text-sm px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-teal-500 hover:border-teal-500 hover:translate-x-2"
              >
                {button.name}
              </button>
            ))}
          </div>

         {/* Image and Text Section */}
<div className="flex flex-col-reverse sm:flex-row gap-8">
  {/* Left-side Box with Text */}
  <div className="mt-4 bg-transparent border-2 border-gray-400 px-6 py-10 sm:px-10 sm:py-14 w-full sm:w-fit text-center sm:text-left">
    <h1 className="text-5xl sm:text-8xl font-bold text-gray-200">21</h1>
    <h2 className="text-xl sm:text-3xl mb-2 sm:mb-4 text-gray-200 underline border-b-red-600">
      Offices
    </h2>
    <p className="text-gray-300 text-base sm:text-2xl">
      Across 10+ Territories with <br /> 4000+ Global Workforce
    </p>
  </div>

  {/* Right-side Image */}
  <div className="relative sm:w-1/2 bg-cover bg-center h-60 sm:h-full mx-auto sm:mx-0">
    {/* Add a dark overlay for better contrast */}
    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>

    {/* The image itself */}
    <div
      className="w-full h-full bg-[url('/globe-img.png')] bg-no-repeat bg-cover rounded-lg z-10"
      style={{
        backgroundSize: "contain", // Adjust for better scaling
        backgroundPosition: "center center",
      }}
    ></div>
  </div>
</div>

        </div>
      </div>
    </>
  );
}
