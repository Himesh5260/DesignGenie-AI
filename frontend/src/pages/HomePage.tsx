import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default HomePage;