import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <Hero />

      {/* Main Content Area */}
      <div className="w-full mx-auto relative bg-transparent">
        <section id="work" className="pt-12 pb-24">
          <FeaturedProjects />
        </section>
      </div>

      <Footer />
    </>
  );
}
