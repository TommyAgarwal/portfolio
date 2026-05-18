import Navigation from "../../components/Navigation";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="max-w-[1440px] mx-auto w-full px-8 lb:px-16 relative bg-transparent pt-24 lb:pt-28">
        <section id="about" className="pb-12">
          <AboutSection />
        </section>
      </div>
      <Footer />
    </>
  );
}
