"use client";

import { useState, useEffect, useRef } from "react";
import CaseStudyOverlay from "./CaseStudyOverlay";
import StorySlideshowOverlay from "./StorySlideshowOverlay";
import TommyHilfigerSlideshow, { SLIDE_LABELS as TOMMY_SLIDE_LABELS } from "./TommyHilfigerSlideshow";
import GrammyArtistContent from "./GrammyArtistContent";
import BridgegoodContent from "./BridgegoodContent";
import StreetcodeContent from "./StreetcodeContent";
import RalphLaurenContent from "./RalphLaurenContent";

// Tag pill component
function Tag({ label }: { label: string }) {
    return (
        <div className="border border-[var(--color-text-secondary)] flex items-center justify-center px-[12px] py-[8px] rounded-[4px] shrink-0 bg-transparent">
            <p className="text-[var(--color-text-secondary)] font-mono text-[12px] font-normal uppercase whitespace-nowrap">
                {label}
            </p>
        </div>
    );
}

export default function FeaturedProjects() {
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [tommySlideIndex, setTommySlideIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const tommyVideoRef = useRef<HTMLVideoElement>(null);
    const grammyVideoRef = useRef<HTMLVideoElement>(null);
    const streetcodeVideoRef = useRef<HTMLVideoElement>(null);
    const ralphVideoRef = useRef<HTMLVideoElement>(null);

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            tommyVideoRef.current?.play().catch(() => { });
            grammyVideoRef.current?.play().catch(() => { });
            streetcodeVideoRef.current?.play().catch(() => { });
            ralphVideoRef.current?.play().catch(() => { });
        }
    }, [isMobile]);

    // Deep linking logic
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            if (hash === "tommy-hilfiger") setActiveProject("tommy-hilfiger");
            else if (hash === "grammy-artist") setActiveProject("grammy-artist");
            else if (hash === "bridgegood") setActiveProject("bridgegood");
            else if (hash === "streetcode") setActiveProject("streetcode");
            else if (hash === "ralph-lauren") setActiveProject("ralph-lauren");
            else if (!hash) setActiveProject(null);
        };
        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <div className="max-w-[1100px] mx-auto w-full px-4 md:px-0 flex flex-col gap-16 mt-16 pb-24">

            {/* Selected Work Section */}
            <div className="flex flex-col gap-[32px] w-full">
                <p className="font-mono text-[12px] font-normal text-[var(--color-text-primary)] uppercase tracking-wider">
                    SELECTED WORK
                </p>

                {/* Case Studies Grids */}
                <div className="flex flex-col gap-[16px] w-full">

                    {/* Row 1: Ralph Lauren (Narrow) & Tommy Hilfiger (Wide) */}
                    <div className="flex flex-col md:flex-row gap-[16px] items-stretch w-full">

                        {/* Ralph Lauren Card */}
                        <div
                            className="cursor-pointer border border-border flex flex-col gap-[48px] justify-between p-[24px] rounded-[4px] w-full md:w-[33.5%] min-h-[500px] md:h-[873px] transition-colors"
                            onClick={() => setActiveProject("ralph-lauren")}
                        >
                            {/* Thumbnail */}
                            <div className="w-full rounded-[2px] overflow-hidden flex-grow relative aspect-[305/465] md:aspect-auto md:h-0">
                                <video
                                    ref={ralphVideoRef}
                                    src="assets/videos/poloconnectthumbnail.mov"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-[2px]"
                                />
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col gap-[20px] items-start w-full">
                                <p className="font-mono text-[var(--color-text-secondary)] text-[14px] md:text-[16px] uppercase tracking-wider">
                                    RALPH LAUREN
                                </p>
                                <h3 className="font-sans text-[24px] sm:text-[28px] md:text-[32px] font-normal text-[var(--color-text-primary)] leading-[1.1] tracking-tight">
                                    Streamlining retail loyalty sign up process
                                </h3>
                                <div className="flex gap-[16px] items-center flex-wrap">
                                    <Tag label="MOBILE ONBOARDING" />
                                    <Tag label="CUSTOMER LOYALTY" />
                                </div>
                            </div>
                        </div>

                        {/* Tommy Hilfiger Card */}
                        <div
                            className="cursor-pointer border border-border flex flex-col gap-[48px] justify-between p-[24px] rounded-[4px] w-full md:w-[66.5%] min-h-[500px] md:h-[873px] transition-colors"
                            onClick={() => setActiveProject("tommy-hilfiger")}
                        >
                            {/* Thumbnail */}
                            <div className="w-full rounded-[2px] overflow-hidden flex-grow relative aspect-[683/465] md:aspect-auto md:h-0">
                                <video
                                    ref={tommyVideoRef}
                                    src="assets/videos/posthumbnail-HD 1080p.mov"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-[2px]"
                                />
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col gap-[20px] items-start w-full">
                                <p className="font-mono text-[var(--color-text-secondary)] text-[14px] md:text-[16px] uppercase tracking-wider">
                                    TOMMY HILFIGER
                                </p>
                                <h3 className="font-sans text-[24px] sm:text-[28px] md:text-[32px] font-normal text-[var(--color-text-primary)] leading-[1.1] tracking-tight">
                                    Redesigned POS dashboard to increase retail transaction speed
                                </h3>
                                <div className="flex gap-[16px] items-center flex-wrap">
                                    <Tag label="Internal Tool" />
                                    <Tag label="B2B Product Design" />
                                    <Tag label="UX Audit" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Row 2: Freelance (Narrow) & Streetcode Academy (Wide) */}
                    <div className="flex flex-col md:flex-row gap-[16px] items-stretch w-full">

                        {/* Freelance Card */}
                        <div
                            className="cursor-pointer border border-border flex flex-col gap-[48px] justify-between p-[24px] rounded-[4px] w-full md:w-[45%] min-h-[450px] md:h-[565px] transition-colors"
                            onClick={() => setActiveProject("grammy-artist")}
                        >
                            {/* Thumbnail */}
                            <div className="w-full rounded-[2px] overflow-hidden flex-grow relative aspect-[448/157] md:aspect-auto md:h-0">
                                <video
                                    ref={grammyVideoRef}
                                    src="assets/videos/webdesignthumbnail-HD 1080p.mov"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-[2px]"
                                />
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col gap-[20px] items-start w-full">
                                <p className="font-mono text-[var(--color-text-secondary)] text-[14px] md:text-[16px] uppercase tracking-wider">
                                    FREELANCE
                                </p>
                                <h3 className="font-sans text-[24px] sm:text-[28px] md:text-[32px] font-normal text-[var(--color-text-primary)] leading-[1.1] tracking-tight">
                                    Boosting Grammy Artist’s audience conversion through a website redesign
                                </h3>
                                <div className="flex gap-[16px] items-center flex-wrap">
                                    <Tag label="Web Development" />
                                    <Tag label="Brand Design" />
                                    <Tag label="Client Work" />
                                </div>
                            </div>
                        </div>

                        {/* Streetcode Academy Card */}
                        <div
                            className="cursor-pointer border border-border flex flex-col gap-[48px] justify-between p-[24px] rounded-[4px] w-full md:w-[55%] min-h-[450px] md:h-[565px] transition-colors"
                            onClick={() => setActiveProject("streetcode")}
                        >
                            {/* Thumbnail */}
                            <div className="w-full rounded-[2px] overflow-hidden flex-grow relative aspect-[536/157] md:aspect-auto md:h-0">
                                <video
                                    ref={streetcodeVideoRef}
                                    src="assets/videos/dsignthumbnail.mov"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-[2px]"
                                />
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col gap-[20px] items-start w-full">
                                <p className="font-mono text-[var(--color-text-secondary)] text-[14px] md:text-[16px] uppercase tracking-wider">
                                    STREETCODE ACADEMY
                                </p>
                                <h3 className="font-sans text-[24px] sm:text-[28px] md:text-[32px] font-normal text-[var(--color-text-primary)] leading-[1.1] tracking-tight">
                                    Directing development of an AI speech to ASL translation app for deaf/HoH communities
                                </h3>
                                <div className="flex gap-[16px] items-center flex-wrap">
                                    <Tag label="MENTORSHIP" />
                                    <Tag label="ACCESSIBILITY" />
                                    <Tag label="DESIGN THINKING" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Other Projects Section */}
            <div className="flex flex-col gap-[32px] w-full">
                <p className="font-mono text-[12px] font-normal text-[var(--color-text-primary)] uppercase tracking-wider">
                    OTHER PROJECTS & EXPERIMENTS
                </p>

                {/* 3 Columns Desktop / 2 Columns Mobile masonry grid */}
                <div className="hidden md:flex gap-[16px] w-full items-start">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-[16px] flex-1">
                        <div className="bg-[#396EFF] border border-border h-[318px] rounded-[4px] w-full animate-pulse-slow" />
                        <div className="bg-[#396EFF] border border-border h-[199px] rounded-[4px] w-full animate-pulse-slow" />
                        <div className="bg-[#396EFF] border border-border h-[229px] rounded-[4px] w-full animate-pulse-slow" />
                    </div>
                    {/* Column 2 */}
                    <div className="flex flex-col gap-[14px] flex-1">
                        <div className="bg-[#396EFF] border border-border h-[153px] rounded-[4px] w-full animate-pulse-slow" />
                        <div className="bg-[#396EFF] border border-border h-[446px] rounded-[4px] w-full animate-pulse-slow" />
                        <div className="bg-[#396EFF] border border-border h-[151px] rounded-[4px] w-full animate-pulse-slow" />
                    </div>
                    {/* Column 3 */}
                    <div className="flex flex-col gap-[16px] flex-1">
                        <div className="bg-[#396EFF] border border-border h-[226px] rounded-[4px] w-full animate-pulse-slow" />
                        <div className="bg-[#396EFF] border border-border h-[164px] rounded-[4px] w-full animate-pulse-slow" />
                        <div className="bg-[#396EFF] border border-border h-[356px] rounded-[4px] w-full animate-pulse-slow" />
                    </div>
                </div>

                {/* Mobile / Tablet 2-column fallback */}
                <div className="flex md:hidden gap-[16px] w-full items-start">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-[16px] flex-1">
                        <div className="bg-[#396EFF] border border-border h-[318px] rounded-[4px] w-full" />
                        <div className="bg-[#396EFF] border border-border h-[229px] rounded-[4px] w-full" />
                        <div className="bg-[#396EFF] border border-border h-[446px] rounded-[4px] w-full" />
                        <div className="bg-[#396EFF] border border-border h-[164px] rounded-[4px] w-full" />
                    </div>
                    {/* Column 2 */}
                    <div className="flex flex-col gap-[16px] flex-1">
                        <div className="bg-[#396EFF] border border-border h-[199px] rounded-[4px] w-full" />
                        <div className="bg-[#396EFF] border border-border h-[153px] rounded-[4px] w-full" />
                        <div className="bg-[#396EFF] border border-border h-[151px] rounded-[4px] w-full" />
                        <div className="bg-[#396EFF] border border-border h-[226px] rounded-[4px] w-full" />
                        <div className="bg-[#396EFF] border border-border h-[356px] rounded-[4px] w-full" />
                    </div>
                </div>
            </div>

            {/* Overlays */}
            {activeProject === "tommy-hilfiger" ? (
                <StorySlideshowOverlay
                    isOpen={activeProject === "tommy-hilfiger"}
                    onClose={() => setActiveProject(null)}
                    totalSlides={8}
                    currentSlide={tommySlideIndex}
                    onSlideChange={setTommySlideIndex}
                    slideLabels={TOMMY_SLIDE_LABELS}
                >
                    <TommyHilfigerSlideshow
                        currentSlide={tommySlideIndex}
                        onSelectProject={(projId) => setActiveProject(projId)}
                    />
                </StorySlideshowOverlay>
            ) : (
                <CaseStudyOverlay
                    isOpen={activeProject !== null}
                    onClose={() => setActiveProject(null)}
                    projectId={activeProject || undefined}
                >
                    {activeProject === "grammy-artist" && <GrammyArtistContent />}
                    {activeProject === "bridgegood" && <BridgegoodContent />}
                    {activeProject === "streetcode" && <StreetcodeContent />}
                    {activeProject === "ralph-lauren" && <RalphLaurenContent />}
                </CaseStudyOverlay>
            )}
        </div>
    );
}
