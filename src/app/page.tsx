import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import OtherProjects from "../components/OtherProjects";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <>
      <Navigation />

      <Hero />

      {/* Main Content Area with side borders */}
      <div className="w-full px-8 mx-auto relative bg-transparent">
        <section id="work" className="pt-12 pb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-text-primary tracking-tight">Work</h2>
          </div>
          
          <div className="work-section-container bg-card-bg w-full p-8 lg:p-10 rounded-[32px] flex flex-col items-start gap-12 relative border border-border">
            <FeaturedProjects />
            <OtherProjects />
          </div>
        </section>

        <section id="resume" className="py-24">
           <Resume />
        </section>


        <section id="about" className="py-24">
           <AboutSection />
        </section>
      </div>

      <Footer />
    </>
  );
}
