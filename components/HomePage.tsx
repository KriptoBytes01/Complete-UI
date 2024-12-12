import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePage() {
  return (
   <>
   {/* Background Video */}
   <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-30"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
   <div className=" md:h-screen md:mx-6  md:mt-52 p-8 md:p-28 bg-[url('/bg-image.jpg')] bg-cover bg-center text-white"
          style={{ filter: 'brightness(1.2)' }}>
          <h2 className="text-2xl  md:text-5xl font-mono text-balance md:text-balance">
            Driving Digital Growth, Led By Technology
          </h2>
          <p className="text-balance md:text-xl md:text-balance text-base md:mt-10 mt-5 md:font-serif">
            Fueling business with sustained digital capabilities,<br /> resilient products, and next-gen solutions.
          </p>
          <button className="bg-teal-600 p-2 md:py-3 md:px-6 text-sm md:text-lg md:mt-10 mt-5 mb-6 w-fit h-fit">
          {`Let's Talk`} <FontAwesomeIcon icon={faArrowRight} className="mx-4" />
          </button>
        </div>

   </>
  )
}
