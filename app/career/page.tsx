import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CareerPurposes from '@/components/CarrerPurposes';
import CareerVideo from '@/components/carrer-video';
import CarrerEmployee from '@/components/CarrerEmployee';
import EmployeePerks from '@/components/EmployeePerks';
import Competencies from '@/components/Carrer-competencies';
import CareerGrow from '@/components/Carrer-Grow';
import ImageSlider from '@/components/InnovationOffices';
import HiringProcess from '@/components/HiringProcess';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';
import Jobs from '@/components/jobs';

export default function Career() {
  return (
    <>
    <div className='bg-black'>
    <div className=" w-full  min-h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute  inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/carrer-bg.png')",
          filter: "brightness(1.1) contrast(1.1)",
        }}
      ></div>
     

      {/* Overlay Content */}
      <div className="relative min-h-screen animate-slide-in mt-12 py-10 px-8 z-10 flex flex-col items-start justify-center h-full  sm:px-12 md:px-20 lg:px-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our Team
        </h1>
        <p className="text-base md:text-xl mb-6 max-w-lg">
          At Kriptobytes, we’re on a mission to transform industries with
          innovative technology solutions. Discover exciting career
          opportunities with us!
        </p>
        <button className="flex items-center md:gap-2 text-sm bg-teal-500 hover:bg-teal-600 text-white md:px-6 p-3 md:py-3 md:text-lg transition-all duration-300">
          View Carrer Opportunities
          <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 md:ml-4 ml-2" />
        </button>
      </div>

     </div>
     </div>

     <CareerPurposes />
     <CareerVideo />
     <CarrerEmployee />
     <EmployeePerks />
     <Competencies />
     <CareerGrow />
     <ImageSlider />
     <HiringProcess />
     <Jobs />
     <JoinUs />
     <Footer />
     </>
  );
}
