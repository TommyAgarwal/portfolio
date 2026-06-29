"use client";

import { useState, useEffect, useRef } from "react";
import CaseStudyOverlay from "./CaseStudyOverlay";
import TommyHilfigerContent from "./TommyHilfigerContent";
import GrammyArtistContent from "./GrammyArtistContent";
import BridgegoodContent from "./BridgegoodContent";
import StreetcodeContent from "./StreetcodeContent";

// Tag pill component
function Tag({ label }: { label: string }) {
    return (
        <div className="border border-[#555555] flex items-center justify-center px-3 py-2 rounded-[8px] shrink-0">
            <p className="text-[#555555] text-[12px] font-normal whitespace-nowrap">
                {label}
            </p>
        </div>
    );
}

export default function FeaturedProjects() {
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const tommyVideoRef = useRef<HTMLVideoElement>(null);
    const grammyVideoRef = useRef<HTMLVideoElement>(null);
    const streetcodeVideoRef = useRef<HTMLVideoElement>(null);
    const bridgegoodVideoRef = useRef<HTMLVideoElement>(null);

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Auto-play videos on mobile
    useEffect(() => {
        if (isMobile) {
            tommyVideoRef.current?.play().catch(() => { });
            grammyVideoRef.current?.play().catch(() => { });
            streetcodeVideoRef.current?.play().catch(() => { });
            bridgegoodVideoRef.current?.play().catch(() => { });
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
            else if (!hash) setActiveProject(null);
        };
        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <div className="max-w-[1100px] mx-auto w-full px-8 md:px-0 flex flex-col gap-8">

            {/* Main Featured Projects — full-width horizontal cards */}
            <div className="flex flex-col gap-8">

                {/* Tommy Hilfiger */}
                <div
                    className="cursor-pointer bg-white flex flex-col md:flex-row items-center gap-12 p-6 rounded-[16px] w-full"
                    onClick={() => setActiveProject("tommy-hilfiger")}
                >
                    {/* Text side */}
                    <div className="flex flex-col gap-5 items-start justify-center shrink-0 w-full md:w-[493px]">
                        <p className="text-[#555555] text-[16px] font-normal uppercase tracking-wider">
                            Tommy Hilfiger
                        </p>
                        <h2 className="text-[32px] font-normal text-black leading-[1.1] tracking-tight">
                            Redesigned POS dashboard to increase retail transaction speed
                        </h2>
                        <div className="flex gap-4 items-center flex-wrap">
                            <Tag label="Internal Tool" />
                            <Tag label="B2B Product Design" />
                            <Tag label="UX Audit" />
                        </div>
                    </div>
                    {/* Thumbnail side */}
                    <div className="flex-1 min-w-0 h-[292px] rounded-[8px] overflow-hidden">
                        <video
                            src="assets/videos/posthumbnail-HD 1080p.mov"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Grammy Artist */}
                <div
                    className="cursor-pointer bg-white flex flex-col md:flex-row items-center gap-12 p-6 rounded-[16px] w-full"
                    onClick={() => setActiveProject("grammy-artist")}
                >
                    {/* Text side */}
                    <div className="flex flex-col gap-5 items-start justify-center shrink-0 w-full md:w-[493px]">
                        <p className="text-[#555555] text-[16px] font-normal uppercase tracking-wider">
                            Freelance
                        </p>
                        <h2 className="text-[32px] font-normal text-black leading-[1.1] tracking-tight">
                            Boosting Grammy Artist&apos;s audience conversion through a website redesign
                        </h2>
                        <div className="flex gap-4 items-center flex-wrap">
                            <Tag label="Web Development" />
                            <Tag label="Brand Design" />
                            <Tag label="Client Work" />
                        </div>
                    </div>
                    {/* Thumbnail side */}
                    <div className="flex-1 min-w-0 h-[292px] rounded-[8px] overflow-hidden">
                        <video
                            src="assets/videos/webdesignthumbnail-HD 1080p.mov"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Other Projects — same card style but stacked vertically (two columns on desktop) */}
            <div className="flex flex-col md:flex-row gap-8">

                {/* StreetCode */}
                <div
                    className="cursor-pointer bg-white flex flex-col gap-12 p-6 rounded-[16px] flex-1"
                    onClick={() => setActiveProject("streetcode")}
                >
                    <div className="flex flex-col gap-5 items-start justify-center">
                        <p className="text-[#555555] text-[16px] font-normal uppercase tracking-wider">
                            StreetCode Academy
                        </p>
                        <h3 className="text-[32px] font-normal text-black leading-[1.1] tracking-tight">
                            Directing development of an AI speech to ASL translation app for deaf/HoH communities
                        </h3>
                        <div className="flex gap-4 items-center flex-wrap">
                            <Tag label="Mentorship" />
                            <Tag label="Accessibility" />
                            <Tag label="Design Thinking" />
                        </div>
                    </div>
                    <div className="h-[292px] rounded-[8px] overflow-hidden w-full">
                        <video
                            src="assets/videos/dsignthumbnail.mov"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Bridgegood */}
                <div
                    className="cursor-pointer bg-white flex flex-col gap-12 p-6 rounded-[16px] flex-1"
                    onClick={() => setActiveProject("bridgegood")}
                >
                    <div className="flex flex-col gap-5 items-start justify-center">
                        <p className="text-[#555555] text-[16px] font-normal uppercase tracking-wider">
                            Bridgegood Hackathon
                        </p>
                        <h3 className="text-[32px] font-normal text-black leading-[1.1] tracking-tight">
                            Pitching an AI learning tool for students with anxiety in a social good hackathon
                        </h3>
                        <div className="flex gap-4 items-center flex-wrap">
                            <Tag label="Cross-Functional Collaboration" />
                            <Tag label="AI-Assisted Workflow" />
                            <Tag label="Hackathon" />
                        </div>
                    </div>
                    <div className="h-[292px] rounded-[8px] overflow-hidden w-full">
                        <video
                            src="assets/videos/boldstepsthumbnail-HD 1080p.mov"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
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
