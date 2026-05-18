import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function ResumePage() {
  return (
    <>
      <Navigation />
      <div className="w-full px-4 md:px-8 mx-auto relative bg-transparent pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h1 className="text-4xl font-bold text-text-primary tracking-tight">Resume</h1>
          </div>

          <div className="w-full bg-card-bg rounded-[32px] border border-border overflow-hidden shadow-2xl h-[calc(100vh-250px)] min-h-[600px]">
            <iframe
              src="/assets/TommyAgarwalResumePublic.pdf#view=FitH"
              className="w-full h-full border-none"
              title="TommyAgarwalResumePUBLIC"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
