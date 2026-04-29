"use client";

import { useState, useEffect } from "react";
import CaseStudyOverlay from "./CaseStudyOverlay";
import TommyHilfigerContent from "./TommyHilfigerContent";
import GrammyArtistContent from "./GrammyArtistContent";

export default function FeaturedProjects() {
    const [activeProject, setActiveProject] = useState<string | null>(null);

    // Deep linking logic: Open project based on URL hash
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            if (hash === "tommy-hilfiger") setActiveProject("tommy-hilfiger");
            else if (hash === "grammy-artist") setActiveProject("grammy-artist");
            else if (!hash) setActiveProject(null);
        };

        // Check on mount
        handleHashChange();

        // Listen for back/forward buttons
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <main id="work" className={`w-full flex flex-col items-start gap-6 relative ${activeProject ? 'z-[3000]' : 'z-10'}`}>
        <div className={`w-full flex flex-col items-start gap-6 relative ${activeProject ? 'z-0' : 'z-10'}`}>
                <h3 className="text-[20px] font-medium text-white/50 leading-none m-0">
                    Featured Case Studies
                </h3>
                <div className="w-full flex flex-col lg:flex-row gap-6 relative">
                    {/* Case Study 1 */}
                    <div
                        className="project-card flex-1 flex flex-col items-center gap-4 rounded-2xl p-6 group cursor-pointer project-border-glow"
                        onClick={() => setActiveProject("tommy-hilfiger")}
                    >
                        <div className="w-full h-[400px] relative rounded-xl overflow-hidden mb-2">
                            <img
                                src="assets/images/pos-thumbnail.png"
                                alt="Tommy Hilfiger POS Redesign Thumbnail"
                                className="w-full h-full object-cover block"
                            />
                        </div>
                        <div className="project-card-content flex flex-col items-center text-center gap-1 w-full px-6">
                            <p className="text-base text-text-secondary font-normal">
                                Tommy Hilfiger • Pitched June 2025
                            </p>
                            <h3 className="text-2xl font-medium leading-normal text-white mb-0 transition-colors duration-300 group-hover:text-[#3C88DB]">
                                Sales Associate → UX Lead: Redesigning Tommy Hilfiger&apos;s Checkout Experience
                            </h3>
                            <div className="flex gap-[19.5px] w-full px-4 lg:px-8 xl:px-12 mt-4">
                                <div className="flex-1 bg-card-bg-accent rounded-lg py-2 px-4 flex flex-col items-center justify-center gap-0 group-hover:bg-card-bg-accent transition-colors">
                                    <div className="flex items-center gap-[3px] text-white text-xl font-medium">
                                        <span className="flex items-center justify-center w-[14px] h-[14px] transition-transform duration-300 rotate-0">
                                            <svg className="w-full h-full" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span>50%</span>
                                    </div>
                                    <span className="text-xs text-white font-normal text-center">
                                        Transaction Time
                                    </span>
                                </div>
                                <div className="flex-1 bg-card-bg-accent rounded-lg py-2 px-4 flex flex-col items-center justify-center gap-0 group-hover:bg-card-bg-accent transition-colors">
                                    <div className="flex items-center gap-[3px] text-white text-xl font-medium">
                                        <span className="flex items-center justify-center w-[14px] h-[14px] transition-transform duration-300 rotate-0">
                                            <svg className="w-full h-full" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span>85%</span>
                                    </div>
                                    <span className="text-xs text-white font-normal text-center">
                                        Clicks in key flows
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 2 */}
                    <div 
                        className="project-card flex-1 flex flex-col items-center gap-4 bg-card-bg-hover rounded-2xl p-6 group cursor-pointer border border-border"
                        onClick={() => setActiveProject("grammy-artist")}
                    >
                        <div className="w-full h-[400px] relative rounded-xl overflow-hidden mb-2">
                            <img
                                src="assets/images/WebDesignThumbnail.png"
                                alt="Web Design Case Study Thumbnail"
                                className="w-full h-full object-cover block"
                            />
                        </div>
                        <div className="project-card-content flex flex-col items-center text-center gap-1 w-full px-6">
                            <p className="text-base text-text-secondary font-normal">
                                Freelance • Shipped October 2025
                            </p>
                            <h3 className="text-2xl font-medium leading-normal text-white mb-0 transition-colors duration-300 group-hover:text-[#FE6603]">
                                Boosting Grammy Artist’s Audience Engagement & Conversion via Web Design
                            </h3>
                            <div className="flex gap-[19.5px] w-full px-4 lg:px-8 xl:px-12 mt-4">
                                <div className="flex-1 bg-card-bg-accent rounded-lg py-2 px-4 flex flex-col items-center justify-center gap-0 group-hover:bg-card-bg-accent transition-colors">
                                    <div className="flex items-center gap-[3px] text-white text-xl font-medium">
                                        <span className="flex items-center justify-center w-[14px] h-[14px] transition-transform duration-300 rotate-180">
                                            <svg className="w-full h-full" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span>30%</span>
                                    </div>
                                    <span className="text-xs text-white font-normal text-center">
                                        Newsletter Subscribers
                                    </span>
                                </div>
                                <div className="flex-1 bg-card-bg-accent rounded-lg py-2 px-4 flex flex-col items-center justify-center gap-0 group-hover:bg-card-bg-accent transition-colors">
                                    <div className="flex items-center gap-[3px] text-white text-xl font-medium">
                                        <span className="flex items-center justify-center w-[14px] h-[14px] transition-transform duration-300 rotate-0">
                                            <svg className="w-full h-full" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span>96%</span>
                                    </div>
                                    <span className="text-xs text-white font-normal text-center">
                                        Annual Expenses
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseStudyOverlay 
                isOpen={activeProject !== null} 
                onClose={() => setActiveProject(null)}
                projectId={activeProject || undefined}
            >
                {activeProject === "tommy-hilfiger" && <TommyHilfigerContent />}
                {activeProject === "grammy-artist" && <GrammyArtistContent />}
            </CaseStudyOverlay>
        </main>
    );
}
