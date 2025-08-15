import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Faqs } from "../components/sections/Faqs";
import { GotMoreQuestions } from "../components/sections/GotMoreQuestions";
import { FaqHero } from "../components/sections/FaqHero";

export const FrequentlyAskedQuestionsPage = () => {
  return (
    <div className="bg-white font-sans min-h-screen overflow-x-hidden">
      <Header />
        <FaqHero/>
        <Faqs/>
        <GotMoreQuestions/>
      <Footer />
    </div>
  );
};
