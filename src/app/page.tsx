import Navigation from "../components/Navigation";
import ShaderHero from "../components/ShaderHero";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <ShaderHero />

      {/* Main Content Area */}
      <div className="w-full mx-auto relative bg-transparent">
        <section id="work" className="pt-8 pb-24">
          <FeaturedProjects />
        </section>
      </div>

      <Footer />
    </>
  );
}
