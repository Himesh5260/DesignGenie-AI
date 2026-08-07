import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

export default HomePage;