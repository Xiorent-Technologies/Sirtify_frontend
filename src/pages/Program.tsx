import { Footer, Header } from "../components";
import { useState } from "react";
import Hero from "../components/sections/program/hero";
import About from "../components/sections/program/about";
import Benefits from "../components/sections/program/benefits";
import Features from "../components/sections/program/features";
import AddOnsPricing from "../components/sections/program/addons-pricing";
import WhoCanUse from "../components/sections/program/who-can-use";
import FAQ from "../components/sections/program/faq";
import SkillPhase from "../components/sections/program/pricing/skill";
import Practice from "../components/sections/program/pricing/practice";
import Progress from "../components/sections/program/pricing/progress";

type ProgramProps = {
  variant_url?: string | null;
};

export default function Program({ variant_url }: ProgramProps) {
  const [variant, setVariant] = useState(variant_url || "skill");
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* hero */}
      <Hero />

      {/* about */}
      <About />

      {/* benefits */}
      <Benefits />
      {/* features */}
      <Features />
      {/* pricing */}
      <section className="md:min-h-screen w-screen bg-[#FEF7F1] py-4 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8  justify-center min-h-screen w-screen">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-[30px] md:text-[60px] font-[600] text-black capitalize text-center">
              Simple, Transparent Pricing
            </h1>
            <p className="text-[#4B5563] text-base max-w-[538px] text-center mt-4">
              One-time payment for lifetime access to our comprehensive program
              with on going support.
            </p>
          </div>

          <div
            className="p-2 rounded-full md:border md:border-[#FC4C0373] md:bg-white mt-4 md:mt-8 
                flex flex-col md:flex-row items-center justify-center 
                space-y-4 md:space-y-0 md:space-x-6"
          >
            <button
              onClick={() => setVariant("skill")}
              className={`${
                variant === "skill" ? "bg-[#FE7642]" : "bg-[#CAC6C6]"
              } rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto`}
            >
              Skill Phase
            </button>
            <button
              onClick={() => setVariant("practice")}
              className={`${
                variant === "practice" ? "bg-[#FE7642]" : "bg-[#CAC6C6]"
              } rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto`}
            >
              Practice Phase
            </button>
            <button
              onClick={() => setVariant("progress")}
              className={`${
                variant === "progress" ? "bg-[#FE7642]" : "bg-[#CAC6C6]"
              } rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto`}
            >
              Progress Phase
            </button>
          </div>

          {variant == "skill" && <SkillPhase />}

          {variant === "practice" && <Practice />}
          {variant === "progress" && <Progress />}
        </div>
      </section>

      {/* Adds on pricing */}

      <AddOnsPricing />

      {/* who can use it */}
      <WhoCanUse />
      {/* FAQS */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
