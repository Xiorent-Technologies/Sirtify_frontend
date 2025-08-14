import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { AboutUsPage } from "../components/sections/AboutUsPage";

export const AboutUs = () => {
  return (
    <div className="font-sans min-h-screen overflow-x-hidden">
      <Header />
      <AboutUsPage />
      <Footer />
    </div>
  );
};
