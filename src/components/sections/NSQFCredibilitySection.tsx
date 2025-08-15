export const NSQFCredibilitySection = () => {
  return (
    <section className="w-full sm:bg-[#FEF7F1] bg-white  sm:-mt-0 -mt-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Orange Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-12">
          <div className="bg-orange-500 text-white px-6 py-3 rounded-xs sm:rounded-lg font-semibold sm:font-bold text-xs sm:text-base whitespace-nowrap">
            NSQF-Certified Programs - Credibility & Compliance
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Establish that Sirtifai certifications are officially recognized and structured to national skill standards.
          </p>
        </div>

        {/* Main Content Box - Dark Blue with Three Columns */}
        <div className="sm:bg-gray-900 bg-slate-700 rounded-lg mb-5 sm:mb-0 sm:rounded-2xl px-6 py-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 - What is NSQF? */}
            <div className="text-center border-b pb-4 sm:pb-0 border-zinc-200 sm:border-none md:text-left">
              <h3 className="text-xl font-semibold sm:font-bold text-white mb-4">
                What is NSQF?
              </h3>
              <p className="text-gray-300 sm:text-base text-sm  leading-relaxed">
                National Skills Qualifications Framework, a government-approved standard aligning learning outcomes with job roles.
              </p>
            </div>

            {/* Column 2 - Why it matters */}
            <div className="text-center border-b pb-4 sm:pb-0 border-zinc-200 sm:border-none md:text-left">
              <h3 className="text-xl font-semibold sm:font-bold text-white mb-4">
                Why it matters:
              </h3>
              <p className="text-gray-300 sm:text-base text-sm  leading-relaxed">
                Ensures your qualification matches the skill level employers expect.
              </p>
            </div>

            {/* Column 3 - How Sirtifai applies it */}
            <div className="text-center border-b pb-4 sm:pb-0 border-zinc-200 sm:border-none md:text-left">
              <h3 className="text-xl font-semibold sm:font-bold text-white mb-4">
                How Sirtifai applies it:
              </h3>
              <p className="text-gray-300 sm:text-base text-sm  leading-relaxed">
                Every Skill, Practice, and Progress phase is mapped to specific NSQF levels for accurate, job-ready skill benchmarking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
};
