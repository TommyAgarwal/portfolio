"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Copy,
  Check,
  LinkedinLogo,
  EnvelopeSimple,
  MapPin
} from "@phosphor-icons/react";
import CaseStudyOverlay from "../components/CaseStudyOverlay";
import TommyHilfigerSlideshow, { SLIDE_LABELS as TOMMY_SLIDE_LABELS } from "../components/TommyHilfigerSlideshow";
import TommyHilfigerContent from "../components/TommyHilfigerContent";
import GrammyArtistContent from "../components/GrammyArtistContent";
import RalphLaurenContent from "../components/RalphLaurenContent";
import EmbraceKongoContent from "../components/EmbraceKongoContent";
import lastUpdated from "../generated/last-updated.json";

interface ProjectCardData {
  id: string;
  brand: string;
  badge?: string;
  description: string;
  metricsHighlight?: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  bgColor: string; // Background frame color inside thumbnail container
  aspectRatioClass: string;
  fitMode: "height" | "width";
  category: "work" | "side-projects";
}

const PROJECTS: ProjectCardData[] = [
  {
    id: "ralph-lauren",
    brand: "Ralph Lauren",
    badge: "Case Study",
    description: "Reduced friction for in-store customer loyalty signup",
    metricsHighlight: "Loyalty conversion optimized",
    mediaType: "video",
    mediaSrc: "/assets/videos/PoloConnectDemo_card.mp4",
    bgColor: "rgba(32, 62, 94, 0.25)", // #203E5E 25% opacity
    aspectRatioClass: "aspect-[444/960]",
    fitMode: "height",
    category: "work",
  },
  {
    id: "tommy-hilfiger",
    brand: "Tommy Hilfiger",
    badge: "Case Study",
    description: "Research-based redesign of a retail POS dashboard which streamlined checkout and reduced transaction time by 50%",
    metricsHighlight: "50% faster checkout",
    mediaType: "image",
    mediaSrc: "/assets/images/pos/main-4.png",
    bgColor: "rgba(70, 124, 182, 0.25)", // #467CB6 25% opacity
    aspectRatioClass: "aspect-[2880/2088]",
    fitMode: "height",
    category: "work",
  },
  {
    id: "grammy-artist",
    brand: "Freelance",
    badge: "Web Design",
    description: "Designed Grammy artist’s website, driving 4k clicks and 58k impressions in first week, increased subscribers by 30%",
    metricsHighlight: "+30% subscribers",
    mediaType: "video",
    mediaSrc: "/assets/videos/grammythumbnailflow_card.mp4",
    bgColor: "rgba(255, 141, 1, 0.25)", // #FF8D01 25% opacity
    aspectRatioClass: "aspect-[960/488]",
    fitMode: "width",
    category: "work",
  },
  {
    id: "embrace-kongo",
    brand: "Freelance",
    badge: "Web Design & Dev",
    description: "Strategy and web design for launch of a non-profit cultural immersion program",
    metricsHighlight: "Web design & development",
    mediaType: "video",
    mediaSrc: "/assets/videos/embracekongolanding_card.mp4",
    bgColor: "rgba(252, 86, 5, 0.25)", // #FC5605 25% opacity
    aspectRatioClass: "aspect-[960/468]",
    fitMode: "width",
    category: "work",
  },
];

interface SideProjectCardData {
  id: string;
  brand: string;
  description: string;
  mediaType: "video" | "multi-image";
  videoSrc?: string;
  imageSrcs?: string[];
  bgColor: string;
  colSpanClass: string;
  thumbnailHeightClass: string;
  videoAspectClass?: string;
  isInProgress?: boolean;
}

const SIDE_PROJECTS: SideProjectCardData[] = [
  {
    id: "streetcode",
    brand: "StreetCode Academy",
    description: "Directed development of a speech to ASL translation app as a design instructor",
    mediaType: "video",
    videoSrc: "/assets/videos/dsign_card.mp4",
    videoAspectClass: "aspect-[960/472]",
    bgColor: "rgba(133, 82, 219, 0.25)", // #8552DB 25%
    colSpanClass: "md:col-span-5",
    thumbnailHeightClass: "h-[320px] sm:h-[350px]",
  },
  {
    id: "amazon-music",
    brand: "Amazon Music",
    description: "Co-designed a personalized merch feature for Amazon Music during a 5-hour design-a-thon at UC Berkeley",
    mediaType: "multi-image",
    imageSrcs: [
      "/assets/images/amazon1.png",
      "/assets/images/amazon2.png",
      "/assets/images/amazon3.png",
    ],
    bgColor: "rgba(37, 209, 219, 0.25)", // #25D1DB 25%
    colSpanClass: "md:col-span-7",
    thumbnailHeightClass: "h-[320px] sm:h-[350px]",
  },
  {
    id: "bridgegood",
    brand: "Bridgegood",
    description: "Co-built an AI learning tool for students struggling with social anxiety, placed top 5 at the Design For Social Good Hackathon",
    mediaType: "video",
    videoSrc: "/assets/videos/boldstepss_card.mp4",
    videoAspectClass: "aspect-[960/468]",
    bgColor: "rgba(34, 197, 95, 0.25)", // #22C55F 25%
    colSpanClass: "md:col-span-7",
    thumbnailHeightClass: "h-[275px] sm:h-[300px]",
  },
  {
    id: "konference",
    brand: "Freelance",
    description: "Building Konference, a ticketing platform for multi-part events and conferences",
    mediaType: "video",
    videoSrc: "/assets/videos/KonferenceSite-HD 720p_card.mp4",
    videoAspectClass: "aspect-[960/492]",
    bgColor: "rgba(208, 119, 220, 0.25)", // #D077DC 25%
    colSpanClass: "md:col-span-5",
    thumbnailHeightClass: "h-[275px] sm:h-[300px]",
    isInProgress: true,
  },
  {
    id: "alton-the-chef",
    brand: "Freelance",
    description: "Designed an informational website for a local chef's catering company",
    mediaType: "video",
    videoSrc: "/assets/videos/AltonTheChefFirstDraft_card.mp4",
    videoAspectClass: "aspect-[960/480]",
    bgColor: "rgba(43, 60, 79, 0.25)", // #2B3C4F 25%
    colSpanClass: "md:col-span-8",
    thumbnailHeightClass: "h-[235px] sm:h-[260px]",
  },
  {
    id: "loubayi",
    brand: "Freelance",
    description: "Designed and shipped informational website for a dance teacher",
    mediaType: "video",
    videoSrc: "/assets/videos/LoubayiSiteVideo-HD 720p_card.mp4",
    videoAspectClass: "aspect-[960/492]",
    bgColor: "rgba(226, 166, 23, 0.25)", // #E2A617 25%
    colSpanClass: "md:col-span-4",
    thumbnailHeightClass: "h-[235px] sm:h-[260px]",
  },
];

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
}

const MAIN_EXPERIENCE: ExperienceItem[] = [
  { role: "Product Designer", company: "Freelance", date: "MAY 2025 - PRESENT" },
  { role: "Design Instructor", company: "StreetCode Academy", date: "JAN 2025 - JUN 2025" },
  { role: "Graphic Designer", company: "Freelance", date: "MAR 2018 - APR 2025" },
  { role: "IT/Lab Intern", company: "Tarana Wireless", date: "JUN 2019 - AUG 2021" },
];

const OTHER_EXPERIENCE: ExperienceItem[] = [
  { role: "Brand Ambassador", company: "Ralph Lauren", date: "JUN 2023 - PRESENT" },
  { role: "Performer/Musician", company: "Fua Dia Kongo", date: "SEP 2005 - PRESENT" },
  { role: "Sales Associate", company: "Tommy Hilfiger", date: "NOV 2022 - AUG 2025" },
];

interface EducationItem {
  title: string;
  institution: string;
  date: string;
}

const EDUCATION_ITEMS: EducationItem[] = [
  {
    title: "B.S. Computer Science",
    institution: "San Jose State University",
    date: "MAY 2024",
  },
  {
    title: "Principles of UX/UI Design Certificate",
    institution: "Meta",
    date: "JUL 2024",
  },
  {
    title: "UX Design Certificate",
    institution: "Google",
    date: "SEP 2024",
  }
];

const TOOLKIT_LOGOS = [
  { name: "Figma", src: "/assets/images/logos/figmalogo.png" },
  { name: "FigJam", src: "/assets/images/logos/figmamakelogo.png" },
  { name: "Adobe XD", src: "/assets/images/logos/adobexdlogo.png" },
  { name: "Photoshop", src: "/assets/images/logos/photoshoplogo.png" },
  { name: "HTML", src: "/assets/images/logos/htmllogo.png" },
  { name: "CSS", src: "/assets/images/logos/csslogo.png" },
  { name: "Python", src: "/assets/images/logos/pythonlogo.png" },
  { name: "Java", src: "/assets/images/logos/javalogo.png" },
  { name: "Claude", src: "/assets/images/logos/claudelogo.png" },
  { name: "ChatGPT", src: "/assets/images/logos/chatgptlogo.png" },
  { name: "Cursor", src: "/assets/images/logos/cursorlogo.png" },
  { name: "Antigravity", src: "/assets/images/logos/antigravitylogo.png" },
  { name: "Google Stitch", src: "/assets/images/logos/googlestitchlogo.png" },
  { name: "Lovable", src: "/assets/images/logos/lovablelogo.png" },
  { name: "Replit", src: "/assets/images/logos/replitlogo.png" },
];

export default function NewPortfolioPage() {
  const [activeTab, setActiveTab] = useState<"work" | "side-projects" | "about">("work");
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [tommySlideIndex, setTommySlideIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [timeState, setTimeState] = useState<{ hours: string; minutes: string; period: string }>({
    hours: "",
    minutes: "",
    period: "",
  });

  const email = "tommyagarwalwork@gmail.com";

  const [colonVisible, setColonVisible] = useState(true);

  // Live Local Time ticker formatted as HH:MM AM with crisp 0-100% blinking colon
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 hour should be 12
      setTimeState({
        hours: hours.toString().padStart(2, "0"),
        minutes,
        period,
      });
      setColonVisible(v => !v);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  // Deep-link initial load & hash sync
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      const projectIds = ["ralph-lauren", "tommy-hilfiger", "grammy-artist", "embrace-kongo"];
      if (projectIds.includes(hash)) {
        setActiveProject(hash);
      } else if (!hash) {
        setActiveProject(null);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const filteredProjects = activeTab === "side-projects"
    ? PROJECTS.filter(p => p.category === "side-projects")
    : PROJECTS; // Default shows selected work

  return (
    <div className="min-h-screen bg-[#e7ecf9] text-[#2c2f3a] font-sans antialiased selection:bg-[#2c2f3a] selection:text-white">
      <div className="w-full min-h-screen flex flex-col lg:flex-row relative">

        {/* ========================================================= */}
        {/* LEFT COLUMN: HERO (Fixed sidebar on desktop)             */}
        {/* ========================================================= */}
        <aside className="w-full lg:w-[350px] shrink-0 lg:fixed lg:top-0 lg:left-0 lg:h-screen border-b lg:border-b-0 lg:border-r border-[#bfc2d1] px-6 pt-8 pb-6 flex flex-col justify-between overflow-hidden z-20 bg-[#e7ecf9]">

          <div className="flex flex-col gap-12">

            {/* Group 1: Hello World badge & Value Prop */}
            <div className="flex flex-col gap-3 items-start">
              <div className="bg-[#2a60ee] inline-flex items-center justify-center px-2.5 py-1.5 rounded-[4px]">
                <p className="font-mono text-[#f8f8f8] text-[12px] whitespace-nowrap leading-none">
                  Hello World! I’m Tommy✌️
                </p>
              </div>

              <h1 className="font-sans text-[26px] font-normal leading-[1.2] text-[#2c2f3a] tracking-tight">
                A UX Designer with a CS degree 🎓 and 6 years of experience in retail 🛍️
              </h1>
            </div>

            {/* Group 2: Looking for role & Connect buttons */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-1 shrink-0" />
                <p className="font-mono text-[12px] leading-relaxed text-[#616475]">
                  Currently looking for a full time, entry-level UX/Product design role. Know of one? Let&apos;s connect!
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/tommyagarwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-[4px] border border-[#bfc2d1] bg-white/30 hover:bg-white/80 transition-colors text-[#2c2f3a]"
                >
                  <div className="flex items-center gap-2.5 font-mono text-[12.5px]">
                    <LinkedinLogo size={18} className="text-[#0a66c2]" weight="fill" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight size={15} className="text-[#616475]" />
                </a>

                {/* Copy Email Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-[4px] border border-[#bfc2d1] bg-white/30 hover:bg-white/80 transition-colors text-[#2c2f3a] text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 font-mono text-[12.5px]">
                    <EnvelopeSimple size={18} className="text-[#2c2f3a]" />
                    {copied ? (
                      <span className="text-emerald-700 font-medium">Copied!</span>
                    ) : (
                      <span className="truncate max-w-[210px]">{email}</span>
                    )}
                  </div>
                  <Copy size={15} className="text-[#616475]" />
                </button>
              </div>
            </div>

          </div>

          {/* Footer of Left Column: Palo Alto, CA with Phosphor Pin & HH:MM AM with blinking colon */}
          <div className="pt-6 mt-8 flex items-center justify-between font-mono text-[11px] text-[#616475]">
            <div className="flex items-center gap-1.5">
              <MapPin size={15} weight="bold" className="text-[#616475]" />
              <span>Palo Alto, CA</span>
            </div>
            <div className="tabular-nums font-normal text-[#616475] flex items-center">
              {timeState.hours ? (
                <>
                  <span>{timeState.hours}</span>
                  <span className={`mx-[1px] transition-opacity duration-150 ${colonVisible ? "opacity-100" : "opacity-0"}`}>
                    :
                  </span>
                  <span>{timeState.minutes}</span>
                  <span className="ml-1">{timeState.period}</span>
                </>
              ) : (
                <span>--:-- --</span>
              )}
            </div>
          </div>

        </aside>

        {/* Spacer for fixed sidebar on large screens */}
        <div className="hidden lg:block w-[350px] shrink-0" aria-hidden="true" />

        {/* ========================================================= */}
        {/* RIGHT COLUMN: MAIN CONTENT (Scrollable canvas)            */}
        {/* ========================================================= */}
        <main className="flex-1 min-w-0 px-6 pt-6 pb-6 lg:px-10 lg:pt-10 lg:pb-6 flex flex-col gap-8">

          {/* Top Navigation Bar: Pill Tabs */}
          <header className="flex items-center justify-between pb-2">
            <nav className="flex items-center gap-1.5 sm:gap-2 p-1 bg-white/40 border border-[#bfc2d1] rounded-full backdrop-blur-xs">
              <button
                type="button"
                onClick={() => setActiveTab("work")}
                className={`px-4 sm:px-5 py-2 rounded-full font-mono text-[12px] uppercase tracking-wider transition-colors cursor-pointer ${activeTab === "work"
                  ? "bg-[#bfc2d1]/60 text-[#2c2f3a] font-medium"
                  : "text-[#616475] hover:text-[#2c2f3a]"
                  }`}
              >
                Selected Work
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("side-projects")}
                className={`px-4 sm:px-5 py-2 rounded-full font-mono text-[12px] uppercase tracking-wider transition-colors cursor-pointer ${activeTab === "side-projects"
                  ? "bg-[#bfc2d1]/60 text-[#2c2f3a] font-medium"
                  : "text-[#616475] hover:text-[#2c2f3a]"
                  }`}
              >
                Side Projects
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className={`px-4 sm:px-5 py-2 rounded-full font-mono text-[12px] uppercase tracking-wider transition-colors cursor-pointer ${activeTab === "about"
                  ? "bg-[#bfc2d1]/60 text-[#2c2f3a] font-medium"
                  : "text-[#616475] hover:text-[#2c2f3a]"
                  }`}
              >
                About Me
              </button>
            </nav>

            <span className="hidden md:inline-block font-mono text-[12px] text-[#616475]">
              Last Updated: {lastUpdated.date}
            </span>
          </header>

          {/* Selected Work Tab: 2x2 Grid */}
          {activeTab === "work" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {PROJECTS.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setActiveProject(project.id)}
                  className="group cursor-pointer bg-[#e7ecf9] border border-[#bfc2d1] hover:border-[#2c2f3a] rounded-[4px] p-5 flex flex-col gap-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  {/* Thumbnail: Fixed size background container with 4px border radius */}
                  <div
                    className="w-full h-[280px] sm:h-[310px] rounded-[4px] p-5 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]"
                    style={{ backgroundColor: project.bgColor }}
                  >
                    {/* Media item: 8px border radius, locked aspect ratio, height or width fill */}
                    <div
                      className={`relative overflow-hidden rounded-[8px] shadow-sm transform-gpu will-change-transform ${project.aspectRatioClass} ${project.fitMode === "height"
                        ? "h-full w-auto max-w-full"
                        : "w-full h-auto max-h-full"
                        } flex items-center justify-center`}
                      style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
                    >
                      {project.mediaType === "video" ? (
                        <video
                          src={project.mediaSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover rounded-[8px] transform-gpu will-change-transform backface-hidden"
                        />
                      ) : (
                        <img
                          src={project.mediaSrc}
                          alt={project.brand}
                          className="w-full h-full object-cover rounded-[8px]"
                        />
                      )}
                    </div>
                  </div>

                  {/* Text: Organization (brand) and short description */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex items-center justify-between">
                      <h2 className="relative font-sans text-[22px] font-normal text-[#2c2f3a] inline-block">
                        <span>{project.brand}</span>
                        <span
                          className="absolute left-0 bottom-0.5 w-full h-[1.5px] bg-[#2c2f3a] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                          aria-hidden="true"
                        />
                      </h2>
                      <ArrowUpRight size={18} className="text-[#616475] group-hover:text-[#2c2f3a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>

                    <p className="font-mono text-[12.5px] leading-relaxed text-[#616475]">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Side Projects Tab: Asymmetrical 6-Box Bento Grid */}
          {activeTab === "side-projects" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
              {SIDE_PROJECTS.map((project) => (
                <article
                  key={project.id}
                  className={`bg-[#e7ecf9] border border-[#bfc2d1] rounded-[4px] p-5 flex flex-col justify-between gap-4 ${project.colSpanClass
                    }`}
                >
                  {/* Thumbnail: Container with custom height and colored background frame */}
                  <div
                    className={`w-full ${project.thumbnailHeightClass} rounded-[4px] p-3 sm:p-4 flex items-center justify-center overflow-hidden`}
                    style={{ backgroundColor: project.bgColor }}
                  >
                    {project.mediaType === "multi-image" && project.imageSrcs ? (
                      /* 3 Amazon Music Mockups side-by-side, full width */
                      <div className="grid grid-cols-3 gap-2 sm:gap-3.5 w-full h-full items-center justify-items-center">
                        {project.imageSrcs.map((src, idx) => (
                          <div
                            key={idx}
                            className="relative w-full h-full max-h-full rounded-[8px] overflow-hidden shadow-sm flex items-center justify-center transform-gpu will-change-transform"
                            style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
                          >
                            <img
                              src={src}
                              alt={`Amazon Music Mockup ${idx + 1}`}
                              className="w-full h-full object-contain rounded-[8px]"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Single Video Thumbnail */
                      <div
                        className={`relative overflow-hidden rounded-[8px] shadow-sm transform-gpu will-change-transform ${project.videoAspectClass || "aspect-video"
                          } max-h-full max-w-full flex items-center justify-center`}
                        style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
                      >
                        <video
                          src={project.videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover rounded-[8px] transform-gpu will-change-transform backface-hidden"
                        />
                      </div>
                    )}
                  </div>

                  {/* Text: Organization (brand) & Short description */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex items-center justify-between">
                      <h2 className="font-sans text-[22px] font-normal text-[#2c2f3a]">
                        <span>{project.brand}</span>
                      </h2>

                      {/* In Progress indicator where arrow went on original card */}
                      {project.isInProgress && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] text-[#2c2f3a] bg-white/60 border border-[#bfc2d1] shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                          <span>In Progress</span>
                        </div>
                      )}
                    </div>

                    <p className="font-mono text-[12.5px] leading-relaxed text-[#616475]">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* About Me Tab */}
          {activeTab === "about" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">

              {/* Left Column: Background Blurb, Experience Card, Education Card */}
              <div className="lg:col-span-7 flex flex-col gap-6">

                {/* Bio / Background Blurb Card */}
                <article className="bg-[#e7ecf9] border border-[#bfc2d1] rounded-[4px] p-5 sm:p-6 flex flex-col gap-5">
                  <p className="font-sans text-[20px] sm:text-[16px] text-[#2c2f3a] leading-relaxed">
                    I’m a designer with a technical lens and a background in service roles. Problem solving is my jam, especially systems thinking and product strategy.
                  </p>

                  <div className="border-t border-[#bfc2d1]/60 pt-4 flex flex-col gap-3">
                    <p className="font-sans text-[14px] text-[#2c2f3a]">
                      Since graduating, I’ve been developing my craft through:
                    </p>
                    <ul className="flex flex-col gap-2 font-sans text-[14px] text-[#2c2f3a]">
                      {[
                        "Independent client work",
                        "Volunteering",
                        "Design-a-thons",
                        "UX-ing in my capacity as a retail associate",
                        "Certifications from Google and Meta",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2c2f3a] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>

                {/* Experience Card */}
                <article className="bg-[#e7ecf9] border border-[#bfc2d1] rounded-[4px] p-5 sm:p-6 flex flex-col gap-6">
                  {/* Main Work Experience */}
                  <div className="flex flex-col gap-3">
                    <h2 className="font-mono text-[12px] uppercase tracking-wider text-[#616475]">
                      Experience
                    </h2>
                    <div className="flex flex-col">
                      {MAIN_EXPERIENCE.map((row, i) => (
                        <div
                          key={i}
                          className={`flex flex-col sm:flex-row sm:items-center justify-between py-3.5 ${i !== MAIN_EXPERIENCE.length - 1 ? "border-b border-[#bfc2d1]/60" : ""
                            } gap-1 sm:gap-0`}
                        >
                          <div className="flex flex-col gap-0.5">
                            <span className="font-sans font-normal text-[#2c2f3a] text-[15px]">
                              {row.role}
                            </span>
                            <span className="font-mono text-[#616475] text-[11.5px] uppercase tracking-wider">
                              {row.company}
                            </span>
                          </div>
                          <span className="font-mono text-[#616475] text-[11.5px] uppercase tracking-wider whitespace-nowrap">
                            {row.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Experience */}
                  <div className="flex flex-col gap-3">
                    <h2 className="font-mono text-[12px] uppercase tracking-wider text-[#616475]">
                      Other Experience
                    </h2>
                    <div className="flex flex-col">
                      {OTHER_EXPERIENCE.map((row, i) => (
                        <div
                          key={i}
                          className={`flex flex-col sm:flex-row sm:items-center justify-between py-3.5 ${i !== OTHER_EXPERIENCE.length - 1 ? "border-b border-[#bfc2d1]/60" : ""
                            } gap-1 sm:gap-0`}
                        >
                          <div className="flex flex-col gap-0.5">
                            <span className="font-sans font-normal text-[#2c2f3a] text-[15px]">
                              {row.role}
                            </span>
                            <span className="font-mono text-[#616475] text-[11.5px] uppercase tracking-wider">
                              {row.company}
                            </span>
                          </div>
                          <span className="font-mono text-[#616475] text-[11.5px] uppercase tracking-wider whitespace-nowrap">
                            {row.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Education Card */}
                <article className="bg-[#e7ecf9] border border-[#bfc2d1] rounded-[4px] p-5 sm:p-6 flex flex-col gap-3">
                  <h2 className="font-mono text-[12px] uppercase tracking-wider text-[#616475]">
                    Education & Certifications
                  </h2>
                  <div className="flex flex-col">
                    {EDUCATION_ITEMS.map((row, i) => (
                      <div
                        key={i}
                        className={`flex flex-col sm:flex-row sm:items-center justify-between py-3.5 ${i !== EDUCATION_ITEMS.length - 1 ? "border-b border-[#bfc2d1]/60" : ""
                          } gap-1 sm:gap-0`}
                      >
                        <div className="flex flex-col gap-0.5">
                          <span className="font-sans font-normal text-[#2c2f3a] text-[15px]">
                            {row.title}
                          </span>
                          <span className="font-mono text-[#616475] text-[11.5px] uppercase tracking-wider">
                            {row.institution}
                          </span>
                        </div>
                        <span className="font-mono text-[#616475] text-[11.5px] uppercase tracking-wider whitespace-nowrap">
                          {row.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>

              </div>

              {/* Right Column: Image 1, Toolkit Card (replacing Image 2), Image 3 */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                {/* Two Equal Rectangular Containers for Vertical Photos */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {/* Photo 1: aboutimage.png */}
                  <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px] rounded-[4px] border border-[#bfc2d1] overflow-hidden bg-[#bfc2d1]/20 relative">
                    <img
                      src="/assets/images/about/aboutimage.png"
                      alt="Tommy Agarwal"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Photo 2: config2025.png */}
                  <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px] rounded-[4px] border border-[#bfc2d1] overflow-hidden bg-[#bfc2d1]/20 relative">
                    <img
                      src="/assets/images/about/config2025.png"
                      alt="Config 2025"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Toolkit Card (Image 02 replacement) */}
                <article className="w-full rounded-[4px] border border-[#bfc2d1] bg-[#e7ecf9] p-5 sm:p-6 flex flex-col gap-4 overflow-hidden relative">
                  <div className="flex items-center justify-between">
                    <h2 className="font-mono text-[12px] uppercase tracking-wider text-[#616475]">
                      TOOLKIT
                    </h2>
                  </div>

                  {/* Infinite Scrolling Logo Marquee with gradient masks */}
                  <div className="relative w-full overflow-hidden py-1">
                    {/* Left & Right gradient fade masks */}
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-10 bg-gradient-to-r from-[#e7ecf9] to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-10 bg-gradient-to-l from-[#e7ecf9] to-transparent" />

                    <div className="animate-marquee flex items-center gap-5 sm:gap-6 pointer-events-none select-none">
                      {/* First set of logos */}
                      {TOOLKIT_LOGOS.map((tool, idx) => (
                        <div
                          key={`first-${idx}`}
                          className="flex items-center justify-center shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-[6px] bg-white/40 border border-[#bfc2d1]/50 p-2 shadow-2xs"
                          title={tool.name}
                        >
                          <img
                            src={tool.src}
                            alt={tool.name}
                            className="w-full h-full object-contain filter drop-shadow-2xs"
                          />
                        </div>
                      ))}

                      {/* Duplicate set for seamless continuous loop */}
                      {TOOLKIT_LOGOS.map((tool, idx) => (
                        <div
                          key={`second-${idx}`}
                          className="flex items-center justify-center shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-[6px] bg-white/40 border border-[#bfc2d1]/50 p-2 shadow-2xs"
                          title={tool.name}
                        >
                          <img
                            src={tool.src}
                            alt={tool.name}
                            className="w-full h-full object-contain filter drop-shadow-2xs"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Image 03 */}
                <div className="w-full h-[220px] sm:h-[250px] lg:h-[280px] rounded-[4px] border border-[#bfc2d1] overflow-hidden bg-[#bfc2d1]/20 relative">
                  <img
                    src="/assets/images/about/aboutimage2.jpg"
                    alt="Tommy Agarwal"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

            </div>
          )}

          {/* Bottom footer */}
          <footer className="pt-6 flex justify-end font-mono text-[11px] text-[#616475]">
            <p>© {new Date().getFullYear()} Tommy Agarwal</p>
          </footer>

        </main>
      </div>

      {/* ========================================================= */}
      {/* CASE STUDY MODAL OVERLAYS (Preserves all full writeups)   */}
      {/* ========================================================= */}
      <CaseStudyOverlay
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
        projectId={activeProject || undefined}
      >
        {activeProject === "tommy-hilfiger" && <TommyHilfigerContent />}
        {activeProject === "ralph-lauren" && <RalphLaurenContent />}
        {activeProject === "grammy-artist" && <GrammyArtistContent />}
        {activeProject === "embrace-kongo" && <EmbraceKongoContent />}
      </CaseStudyOverlay>

    </div>
  );
}
