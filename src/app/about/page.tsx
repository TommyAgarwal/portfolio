import Navigation from "../../components/Navigation";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="w-full mx-auto relative bg-transparent">
        <div className="max-w-[1100px] mx-auto px-4 md:px-0">
          <div className="w-full pt-[120px] md:pt-[144px] pb-12 relative min-h-screen">
            <section id="about" className="px-6 pb-12">
              <AboutSection />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
