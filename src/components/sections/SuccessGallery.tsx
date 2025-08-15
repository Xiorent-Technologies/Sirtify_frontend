import { Button } from "../ui/Button"
import { ArrowRight } from "lucide-react"
import img1 from "../../assets/succes1.jpg"
import img2 from "../../assets/success2.jpg"
import img3 from "../../assets/success3.jpg"
import img4 from "../../assets/success4.jpg"

export default function SuccessGallery() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
        Success Gallery
      </h2>
      <p className="text-lg text-gray-600">
        Moments and milestones from our learning community
      </p>
    </div>

    {/* Gallery Slider / Grid */}
    <div className="flex overflow-x-auto scrollbar-hide gap-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-6 mb-10">
      <img
        className="w-72 h-64 rounded-lg border-gray-200 snap-center flex-shrink-0"
        src={img1}
        alt="Gallery Image 1"
      />
      <img
        className="w-72 h-64 rounded-lg border-gray-200 snap-center flex-shrink-0"
        src={img2}
        alt="Gallery Image 2"
      />
      <img
        className="w-72 h-64 rounded-lg border-gray-200 snap-center flex-shrink-0"
        src={img3}
        alt="Gallery Image 3"
      />
      <img
        className="w-72 h-64 rounded-lg border-gray-200 snap-center flex-shrink-0"
        src={img4}
        alt="Gallery Image 4"
      />
    </div>

    {/* Bottom Navigation */}
    <div className="flex items-center justify-center gap-4">
      <Button className="bg-[#ff7847] hover:bg-[#e56a3f] text-white px-8 py-3 rounded-full">
        Explore Gallery
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
