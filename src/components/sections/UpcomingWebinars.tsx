import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import { Calendar, Clock, Users, ArrowRight } from "lucide-react"
import img1 from "../../assets/webinarImg.jpg"
import img2 from "../../assets/webinarImg2.jpg"
import img3 from "../../assets/webinarImg3.jpg"

export default function UpcomingWebinars() {
  return (
    <section className="bg-[#FEF7F1] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">Upcoming Webinars & Events</h2>
          <p className="text-lg text-gray-600">Join live sessions with industry experts and successful alumni</p>
        </div>

        {/* Events Grid */}

<div className="lg:grid lg:grid-cols-3 gap-8 mb-12 scrollbar-hide
                flex overflow-x-auto space-x-4 snap-x snap-mandatory lg:space-x-0 lg:overflow-visible px-4 lg:px-0">
  
  {/* Event 1 */}
  <div className="flex-shrink-0 w-80 snap-center lg:w-96 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
    {/* Image & Badge */}
    <div className="relative">
      <img src={img1} alt="Global Career Webinar" className="w-full h-48 object-cover" />
      <span className="absolute top-4 left-4 bg-orange-400 text-white text-sm font-medium px-4 py-1 rounded-full">
        Career Webinar
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">
        Mastering UI/UX for Global Clients
      </h3>
      <p className="text-gray-600 mb-6">
        Learn how to create designs that appeal international clients and command premium rates.
      </p>
      <div className="flex items-center mb-6">
        {/* <div className="w-12 h-12 rounded-full bg-gray-200"></div> */}
        <div className="ml-3">
          <div className="text-slate-800 font-medium">Riya Kapoor</div>
          <div className="text-gray-500 text-sm">Senior UX Designer, Google</div>
        </div>
      </div>
      <div className="flex justify-between items-center text-gray-700 text-base mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-400 rounded"></div>
          Aug 15, 2023
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-400 rounded"></div>
          6:00 PM IST
        </div>
      </div>
      <button className="w-full bg-orange-400 text-white py-2 rounded-md">
        Register Now
      </button>
    </div>
  </div>

  {/* Event 2 */}
  <div className="flex-shrink-0 w-80 snap-center lg:w-96 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
    <div className="relative">
      <img src={img2} alt="Placement Drive" className="w-full h-48 object-cover" />
      <span className="absolute top-4 left-4 bg-slate-800 text-white text-sm font-medium px-4 py-1 rounded-full">
        Placement Drive
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-3">
        International Placement Drive
      </h3>
      <p className="text-gray-600 mb-4">
        Virtual interviews with 5+ US & European companies hiring remote developers from India.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-gray-100 px-2 py-1 rounded text-gray-700 text-xs">React.js</span>
        <span className="bg-gray-100 px-2 py-1 rounded text-gray-700 text-xs">Node.js</span>
        <span className="bg-gray-100 px-2 py-1 rounded text-gray-700 text-xs">Python</span>
        <span className="bg-gray-100 px-2 py-1 rounded text-gray-700 text-xs">Data Science</span>
      </div>
      <div className="flex justify-between items-center text-gray-700 text-base mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-400 rounded"></div>
          Aug 22-23, 2023
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-400 rounded"></div>
          All Day
        </div>
      </div>
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-orange-400 h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>75% spots filled</span>
          <span>25 spots left</span>
        </div>
      </div>
      <button className="w-full bg-orange-400 text-white py-2 rounded-md">
        Register Now
      </button>
    </div>
  </div>

  {/* Event 3 */}
  <div className="flex-shrink-0 w-80 snap-center lg:w-96 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
    <div className="relative">
      <img src={img3} alt="Alumni Networking" className="w-full h-48 object-cover" />
      <span className="absolute top-4 left-4 bg-orange-400/80 text-white text-sm font-medium px-4 py-1 rounded-full">
        Networking
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">
        Alumni Networking Meetup
      </h3>
      <p className="text-gray-600 mb-6">
        Connect with successful Sirtifai alumni, share experiences, and build your professional network.
      </p>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-4 bg-orange-400 rounded"></div>
          <span className="text-gray-700 text-base">Bengaluru & Online</span>
        </div>
        <p className="text-gray-600 text-sm">
          Join in person at our Bengaluru office or connect virtually from anywhere.
        </p>
      </div>
      <div className="flex justify-between items-center text-gray-700 text-base mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-400 rounded"></div>
          Aug 28, 2023
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-400 rounded"></div>
          5:30 PM IST
        </div>
      </div>
      <button className="w-full bg-orange-400 text-white py-2 rounded-md">
        RSVP Now
      </button>
    </div>
  </div>

</div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-end gap-4">
          <Button className="bg-orange-400 hover:bg-[#e56a3f] text-white px-8 py-3 rounded-full">
            Register for Next Webinar
          </Button>
        <div className="w-14 h-14 px-5 py-1.5 bg-zinc-900 rounded-[68px] inline-flex justify-center items-center">
    <div className="w-12 h-12 relative flex justify-center items-center overflow-hidden">
            <ArrowRight className="w-12 h-12 text-white" />
    </div>
</div>
        </div>
      </div>
    </section>
  )
}
