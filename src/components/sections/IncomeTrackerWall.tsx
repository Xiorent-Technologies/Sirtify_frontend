import { Card } from "../ui/Card"
import incomeImg from "../../assets/income.jpg"


export default function IncomeTrackerWall() {
  return (
    <section className="bg-[#FEF7F1] py-8 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">Income Tracker Wall</h2>
          <p className="text-sm sm:text-lg text-gray-600">Real-time salary increases from our community</p>
        </div>

        {/* Main Stats Card */}
<div className="sm:w-[1248px] w-[355px]  sm:h-72  relative bg-white rounded-xl  shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] border-gray-200">

<img src={incomeImg} alt="" />

    <div className="w-[1184px] h-20 left-[32px] top-[172px]  absolute bg-black/0 border-gray-200">
        <div className="w-96 h-20 left-0 top-0 hidden sm:flex  absolute bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-100">
            <div className=" hidden w-80 h-6 left-[17px] top-[17px] absolute bg-black/0 border-gray-200 sm:inline-flex justify-between items-center">
                <div className="w-36 h-6 relative bg-black/0 border-gray-200">
                    <div className="w-36 h-6 left-0 top-0 absolute justify-start text-gray-700 text-base font-medium font-['Inter']">Average Monthly</div>
                </div>
                <div className=" w-16 h-6 relative bg-black/0 border-gray-200">
                    <div className="w-20 h-6 left-[-0.28px] top-0 absolute justify-start text-orange-400 text-base font-bold font-['Inter']">₹42,800</div>
                </div>
            </div>
            <div className="w-80 h-2 left-[17px] top-[49px] absolute bg-gray-200 rounded-full border-gray-200">
                <div className="w-64 h-2 left-0 top-0 absolute bg-orange-400 rounded-full border-gray-200" />
            </div>
        </div>
        <div className="w-96 h-20 left-[402.66px] top-0 absolute bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-100">
            <div className="w-80 h-6 left-[17px] top-[17px] absolute bg-black/0 border-gray-200 inline-flex justify-between items-center">
                <div className="w-28 h-6 relative bg-black/0 border-gray-200">
                    <div className="w-28 text-nowrap h-6 left-0 top-0 absolute justify-start text-gray-700 text-base font-medium font-['Inter']">Highest Earner</div>
                </div>
                <div className="w-20 h-6 relative bg-black/0 border-gray-200">
                    <div className="w-20 h-6 left-0 top-0 absolute justify-start text-orange-400 text-base font-bold font-['Inter']">₹3.2L/mo</div>
                </div>
            </div>
            <div className="w-80 h-2 left-[17px] top-[49px] absolute bg-gray-200 rounded-full border-gray-200">
                <div className="w-80 h-2 left-0 top-0 absolute bg-orange-400 rounded-full border-gray-200" />
            </div>
        </div>
        <div className="w-96 h-20 left-[805.33px] top-0 absolute bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-100">
            <div className="w-80 h-6 left-[17px] top-[17px] absolute bg-black/0 border-gray-200 inline-flex justify-between items-center">
                <div className="w-32 h-6 relative bg-black/0 border-gray-200">
                    <div className="w-32 h-6 left-0 top-0 absolute justify-start text-gray-700 text-base font-medium font-['Inter']">Placement Rate</div>
                </div>
                <div className="w-8 h-6 relative bg-black/0 border-gray-200">
                    <div className="w-12 h-6 left-[-17.08px] top-0 absolute justify-start text-orange-400 text-base font-bold font-['Inter']">92%</div>
                </div>
            </div>
            <div className="w-80 h-2 left-[17px] top-[49px] absolute bg-gray-200 rounded-full border-gray-200">
                <div className="w-80 h-2 left-0 top-0 absolute bg-orange-400 rounded-full border-gray-200" />
            </div>
        </div>
    </div>
</div>

        {/* Stats Grid */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Average Monthly</h4>
            <p className="text-2xl font-bold text-gray-900">$2,847</p>
          </Card>
          <Card className="p-6 text-center">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Highest Earner</h4>
            <p className="text-2xl font-bold text-gray-900">$8,500</p>
          </Card>
          <Card className="p-6 text-center">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Placement Rate</h4>
            <p className="text-2xl font-bold text-gray-900">94%</p>
          </Card>
        </div> */}

        {/* Leaderboard and Badges */}
     {/* Monthly Leaderboard */}
<div className="flex flex-col lg:flex-row sm:mt-14 gap-6">
  {/* Monthly Leaderboard */}
  <div className="bg-white rounded-2xl shadow p-6 flex-1">
    <h2 className="text-lg font-semibold mb-4">Monthly Leaderboard</h2>

    {/* 1st */}
    <div className="flex items-center justify-between bg-orange-50 rounded-xl p-3 mb-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full font-bold bg-orange-500 text-white">1</div>
        <div>
          <p className="font-semibold">Vikram Singh</p>
          <p className="text-sm text-gray-500">Full-Stack Development</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-orange-500 font-semibold">₹1,87,500</p>
        <p className="text-xs text-gray-400">This month</p>
      </div>
    </div>

    {/* 2nd */}
    <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3 mb-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full font-bold bg-gray-300 text-gray-700">2</div>
        <div>
          <p className="font-semibold">Anjali Verma</p>
          <p className="text-sm text-gray-500">UI/UX Design</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-orange-500 font-semibold">₹1,65,200</p>
        <p className="text-xs text-gray-400">This month</p>
      </div>
    </div>

    {/* 3rd */}
    <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3 mb-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full font-bold bg-gray-300 text-gray-700">3</div>
        <div>
          <p className="font-semibold">Raj Malhotra</p>
          <p className="text-sm text-gray-500">Data Science</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-orange-500 font-semibold">₹1,42,800</p>
        <p className="text-xs text-gray-400">This month</p>
      </div>
    </div>

    {/* 4th */}
    <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full font-bold bg-gray-300 text-gray-700">4</div>
        <div>
          <p className="font-semibold">Neha Gupta</p>
          <p className="text-sm text-gray-500">Digital Marketing</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-orange-500 font-semibold">₹1,35,750</p>
        <p className="text-xs text-gray-400">This month</p>
      </div>
    </div>
  </div>

  {/* Milestone Badges */}
  <div className="bg-white rounded-2xl shadow p-6 flex-1">
    <h2 className="text-lg font-semibold mb-4">Milestone Badges</h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
      <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
        <div className="bg-orange-100 text-orange-500 rounded-full px-4 py-2 mb-2 text-2xl">₹</div>
        <p className="font-semibold">₹1L+ Club</p>
        <p className="text-xs text-gray-500">183 learners</p>
        <p className="text-[10px] text-gray-400 mt-1">Earned over ₹1 lakh in a month</p>
      </div>

      <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
        <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-2 text-2xl">🌐</div>
        <p className="font-semibold">Global Earner</p>
        <p className="text-xs text-gray-500">97 learners</p>
        <p className="text-[10px] text-gray-400 mt-1">First international salary</p>
      </div>

      <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
        <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-2 text-2xl">📈</div>
        <p className="font-semibold">Consistent Growth</p>
        <p className="text-xs text-gray-500">142 learners</p>
        <p className="text-[10px] text-gray-400 mt-1">Income growth for 6+ months</p>
      </div>

      <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
        <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-2 text-2xl">💼</div>
        <p className="font-semibold">12-Month Retention</p>
        <p className="text-xs text-gray-500">76 learners</p>
        <p className="text-[10px] text-gray-400 mt-1">+1 year at same company</p>
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  )
}
