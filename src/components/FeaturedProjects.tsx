"use client";

import { useState, useEffect, useRef } from "react";
import CaseStudyOverlay from "./CaseStudyOverlay";
import TommyHilfigerContent from "./TommyHilfigerContent";
import GrammyArtistContent from "./GrammyArtistContent";
import BridgegoodContent from "./BridgegoodContent";
import StreetcodeContent from "./StreetcodeContent";

export default function FeaturedProjects() {
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [isTommyHovered, setIsTommyHovered] = useState(false);
    const [isGrammyHovered, setIsGrammyHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const tommyVideoRef = useRef<HTMLVideoElement>(null);
    const grammyVideoRef = useRef<HTMLVideoElement>(null);

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Tommy Video Control
    useEffect(() => {
        if (tommyVideoRef.current) {
            if (isMobile || isTommyHovered) {
                tommyVideoRef.current.play().catch(() => {});
            } else {
                tommyVideoRef.current.pause();
                tommyVideoRef.current.currentTime = 0;
            }
        }
    }, [isMobile, isTommyHovered]);

    // Grammy Video Control
    useEffect(() => {
        if (grammyVideoRef.current) {
            if (isMobile || isGrammyHovered) {
                grammyVideoRef.current.play().catch(() => {});
            } else {
                grammyVideoRef.current.pause();
                grammyVideoRef.current.currentTime = 0;
            }
        }
    }, [isMobile, isGrammyHovered]);



    // Deep linking logic
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            if (hash === "tommy-hilfiger") setActiveProject("tommy-hilfiger");
            else if (hash === "grammy-artist") setActiveProject("grammy-artist");
            else if (hash === "bridgegood") setActiveProject("bridgegood");
            else if (hash === "streetcode") setActiveProject("streetcode");
            else if (!hash) setActiveProject(null);
        };
        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <div className="max-w-[1440px] mx-auto w-full px-8 md:px-16 flex flex-col gap-12">


            {/* Stacked Main Case Studies */}
            <div className="flex flex-col gap-12">
                {/* Tommy Hilfiger */}
                <div
                    className="group cursor-pointer flex flex-col md:flex-row md:items-end relative rounded-[16px] overflow-hidden h-[680px] md:h-[421px] bg-[#D8E2ED] hover:bg-[#C2CBD5] transition-all duration-300 ease-in-out"
                    onClick={() => setActiveProject("tommy-hilfiger")}
                    onMouseEnter={() => !isMobile && setIsTommyHovered(true)}
                    onMouseLeave={() => !isMobile && setIsTommyHovered(false)}
                >
                    <div className="flex flex-col gap-1 pt-12 pb-10 md:pb-0 md:pt-0 h-auto md:h-full items-start justify-start md:justify-center px-8 md:px-16 relative z-10 w-full md:w-[45%] transition-all duration-500 ease-in-out origin-left">
                        <p className="text-[14px] md:text-[16px] text-black/60 font-medium uppercase tracking-wider">
                            Tommy Hilfiger
                        </p>
                        <h2 className="text-[28px] md:text-[32px] font-normal text-black leading-[1.1] tracking-tight">
                            Redesigned retail Point-of-Sale dashboard to increase transaction speed
                        </h2>
                    </div>
                    <div className="mt-auto ml-8 md:ml-0 h-[352px] md:h-[90%] relative rounded-tl-[24px] md:rounded-t-none md:rounded-tl-[24px] flex-grow overflow-hidden shadow-2xl transition-all duration-500 ease-in-out">
                        <video
                            ref={tommyVideoRef}
                            src="assets/videos/THVideoThumbnail.mp4"
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-tl-[24px]"
                        />
                    </div>
                </div>

                {/* Grammy Artist */}
                <div
                    className="group cursor-pointer flex flex-col md:flex-row md:items-end relative rounded-[16px] overflow-hidden h-[680px] md:h-[421px] bg-[#D8E2ED] hover:bg-[#C2CBD5] transition-all duration-300 ease-in-out"
                    onClick={() => setActiveProject("grammy-artist")}
                    onMouseEnter={() => !isMobile && setIsGrammyHovered(true)}
                    onMouseLeave={() => !isMobile && setIsGrammyHovered(false)}
                >
                    <div className="flex flex-col gap-1 pt-12 pb-10 md:pb-0 md:pt-0 h-auto md:h-full items-start justify-start md:justify-center px-8 md:px-16 relative z-10 w-full md:w-[45%] transition-all duration-500 ease-in-out origin-left">
                        <p className="text-[14px] md:text-[16px] text-black/60 font-medium uppercase tracking-wider">
                            Freelance
                        </p>
                        <h2 className="text-[28px] md:text-[32px] font-normal text-black leading-[1.1] tracking-tight">
                            Boosting Grammy Artist&apos;s audience conversion through a website redesign
                        </h2>
                    </div>
                    <div className="mt-auto ml-8 md:ml-0 h-[352px] md:h-[90%] relative rounded-tl-[24px] md:rounded-t-none md:rounded-tl-[24px] flex-grow overflow-hidden shadow-2xl transition-all duration-500 ease-in-out">
                        <video
                            ref={grammyVideoRef}
                            src="assets/videos/grammythumbnailflow.mov"
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-tl-[24px]"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Bridgegood */}
                <div
                    className="group cursor-pointer flex flex-col pt-8 px-8 rounded-[16px] overflow-hidden h-[540px] bg-[#D8E2ED] border border-border/50 hover:bg-[#C2CBD5] transition-all duration-300 ease-in-out"
                    onClick={() => setActiveProject("bridgegood")}
                >
                    <div className="flex flex-col gap-1 mb-6">
                        <p className="text-[14px] md:text-[16px] text-black/60 font-medium uppercase tracking-wider">
                            AI FOR SOCIAL GOOD HACKATHON
                        </p>
                        <h3 className="text-[24px] md:text-[32px] font-normal text-black leading-[1.2] tracking-tight">
                            Gamified AI learning tool to help students with social anxiety
                        </h3>
                    </div>
                    <div className="mt-auto h-[320px] relative rounded-t-[16px] overflow-hidden shadow-sm">
                        <img
                            src="assets/images/bridgegood/bridgegood-thumbnail.png"
                            alt="Bridgegood AI for Social Good"
                            className="w-full h-full object-cover rounded-t-[16px]"
                        />
                    </div>
                </div>

                {/* StreetCode */}
                <div
                    className="group cursor-pointer flex flex-col pt-8 px-8 rounded-[16px] overflow-hidden h-[540px] bg-[#D8E2ED] border border-border/50 hover:bg-[#C2CBD5] transition-all duration-300 ease-in-out"
                    onClick={() => setActiveProject("streetcode")}
                >
                    <div className="flex flex-col gap-1 mb-6">
                        <p className="text-[14px] md:text-[16px] text-black/60 font-medium uppercase tracking-wider">
                            STREETCODE ACADEMY
                        </p>
                        <h3 className="text-[24px] md:text-[32px] font-normal text-black leading-[1.2] tracking-tight">
                            Directing development of a speech to ASL translation app for deaf/HoH communities
                        </h3>
                    </div>
                    <div className="mt-auto h-[320px] relative rounded-t-[16px] overflow-hidden shadow-sm">
                        <img
                            src="assets/images/streetcode/streetcode-thumbnail.png"
                            alt="StreetCode Academy ASL App"
                            className="w-full h-full object-cover rounded-t-[16px]"
                        />
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
                {activeProject === "bridgegood" && <BridgegoodContent />}
                {activeProject === "streetcode" && <StreetcodeContent />}
            </CaseStudyOverlay>
        </div>
    );
}

