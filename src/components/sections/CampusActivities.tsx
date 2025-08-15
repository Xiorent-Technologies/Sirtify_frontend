import { Button } from "../ui/Button"
import { CheckCircle } from "lucide-react"
import campusactivity from "../../assets/campusactivity.jpg"

export default function CampusActivities() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">Campus Activities & Career Fairs</h2>
          <p className="text-lg text-gray-600">Bringing career opportunities directly to your campus</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <img
              src={campusactivity}
              alt="Campus career fair"
              className="w-full h-[35vw] object-cover rounded-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8 p-6 rounded-md  shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)]">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bring Sirtifai to Your Campus</h3>

            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#ff7847] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Career Fair Organization</h4>
                  <p className="text-gray-600">Complete end-to-end career fair management with top recruiters.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#ff7847] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Student Ambassador Program</h4>
                  <p className="text-gray-600">
                    Train student leaders to guide their peers through career development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#ff7847] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Industry Expert Workshops</h4>
                  <p className="text-gray-600">Regular sessions with professionals sharing real-world insights.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#ff7847] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Placement Support</h4>
                  <p className="text-gray-600">Dedicated placement assistance for participating students.</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed bg-zinc-200 rounded-lg px-5 py-4">
                Partner with us to organize career fairs, workshops, and placement drives that connect your students
                with global opportunities.
              </p>
            </div>

        <button className="bg-[#ff7847] w-full hover:bg-[#e56a3f] text-white px-8 py-3 rounded-sm">
          Invite Sirtifai to Your Campus
        </button>
          </div>
        </div>
      </div>
    </section>
  )
}
