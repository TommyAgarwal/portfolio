import Navigation from "../../components/Navigation";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="max-w-[1440px] mx-auto w-full px-8 md:px-16 relative bg-transparent pt-32">
        <section id="about" className="py-12">
          <AboutSection />
        </section>
      </div>
      <Footer />
    </>
  );
}
