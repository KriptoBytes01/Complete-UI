export default function HiringProcess() {
  return (
    <div
      className="relative bg-cover bg-center h-screen "
      style={{
        backgroundImage: "url('/hiring-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 ">
        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl  mb-4 text-center">
          Our Hiring Process
        </h1>
        <p className="text-gray-400  text-xs sm:text-base lg:text-lg text-center mb-6 md:mb-12 max-w-md sm:max-w-xl">
          Making the right choice begins with getting to know each other and an opportunity to talk
          about what we can achieve together. Our onboarding process is simple, transparent, and
          focuses on matching the right talent with the right opportunity.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-14 w-full max-w-lg sm:max-w-6xl">
          {[{
            step: "01",
            title: "Profile Shortlisting",
            items: [
              "Profile Screening",
              "Career Portal Registration",
              "Evaluation",
              "Role Feasibility Check",
              "Invitation for F2F Interview",
            ],
          }, {
            step: "02",
            title: "Written Test",
            items: [
              "Aptitude (if applicable)",
              "Programming & Logic (if applicable)",
              "Domain Specific (if any)",
            ],
          }, {
            step: "03",
            title: "Technical Evaluation",
            items: ["Level 1 - Basic", "Level 2 - Advanced", "Level 3 - Expert (if applicable)"],
          }, {
            step: "04",
            title: "HR Round",
            items: ["Remuneration", "Company Policies", "Queries"],
          }].map((process, index) => (
            <div
              key={index}
              className="relative pl-4 md:pt-10 pt-4 md:pb-4 pb-2 sm:pt-12 sm:pb-6 text-left border-l-2 border-dashed border-white"
            >
              <div className="absolute -top-5 sm:-top-6 left-0 bg-teal-700 text-white border border-white rounded-full w-6 h-6 md:w-12 md:h-12 flex items-center justify-center text-xs sm:text-lg font-bold">
                {process.step}
              </div>
              <h2 className="text-white text-base sm:text-xl lg:text-2xl underline mb-2 sm:mb-4">
                {process.title}
              </h2>
              <ul className="text-gray-300 text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2">
                {process.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}