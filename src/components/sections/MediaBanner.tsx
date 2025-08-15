import { FaPlay, FaCalendarAlt } from "react-icons/fa";
import heroImg from "../../assets/image.png"; // replace with your actual path

export default function HeroSection() {
  return (
    <section className="bg-[#fef6f1]  sm:py-12 px-8 sm:px-14">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-4 lg:px-8">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-4xl lg:text-6xl sm:w-[45vw] Open-Sans font-semibold text-black leading-tight">
            Sirtifai In Action – Stories, Stats, And Events That Inspire Careers
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl">
            From learner success stories to live income tracking, discover how Sirtifai is transforming careers across India and beyond.
          </p>
{/* mobile image  */}
          <img
            src={heroImg}
            alt="Person thinking"
            className="relative sm:hidden z-10 py-8 sm:py-0  object-contain w-[80vw] sm:pb-12"
          />
{/* mobile image  */}

          {/* Buttons */}
          <div className="flex sm:flex-wrap  items-center gap-2 sm:gap4 pb-10 sm:pb-0 mt-8">
            <button className="flex items-center gap-3 bg-[#183447] text-white px-1.5 py-1 sm:px-2 sm:py-2 rounded-full shadow-md hover:opacity-90 transition">
            <button className="flex items-center gap-3 bg-[#183447] text-white rounded-full border-zinc-200 px-2.5 py-2 sm:px-3.5 sm:py-1.5 border ">
              <span className="text-sm sm:text-base">Watch Stories</span>
              <FaPlay className="text-white w-3 h-3" />
            </button>
            </button>
            <button className="flex items-center gap-2 sm:gap-3 bg-orange-500 text-white px-3.5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-md hover:bg-orange-600 transition">
              <span className="text-sm sm:text-base">Join Next Event</span>
              <FaCalendarAlt className="text-white w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right Image with Shapes */}
        <div className="flex-1 relative flex justify-center">
          {/* Shapes */}
          {/* <div className="absolute -top-8 -left-8 w-72 h-72 bg-yellow-200 z-0"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rotate-6 z-0"></div>
          <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-[#183447] z-0"></div>
          <div className="absolute top-2 left-2 w-64 h-64 border-2 border-black rotate-3 z-0"></div> */}

          {/* Main Image */}
          <img
            src={heroImg}
            alt="Person thinking"
            className="relative z-10 hidden sm:block object-contain w-[85%] sm:pb-12"
          />
        </div>

      </div>
    </section>
  );
}
