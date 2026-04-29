"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

interface Project {
    id: number;
    title: string;
    media?: string;
    type?: string;
    metadata?: {
        timeline: string;
        role: string;
        tools: string;
        collaborators: string;
    };
    detailImage?: string;
    summary?: string;
    link?: string;
    linkText?: string;
    placeholderClass?: string;
}

const TOOL_LOGOS: Record<string, string> = {
    "Figma": "figmalogo.png",
    "Lovable": "lovablelogo.png",
    "Replit": "replitlogo.png",
    "ChatGPT": "chatgptlogo.png",
    "Figma Make": "figmamakelogo.svg",
    "Antigravity": "antigravitylogo.png"
};

const projects: Project[] = [
    {
        id: 0,
        title: "Bridgegood AI for Social Good Design-a-thon",
        media: "/assets/videos/BridgegoodThumbnail.mov",
        type: "video",
        metadata: {
            timeline: "48 hours",
            role: "UX/UI Design\nUX Research",
            tools: "Figma\nLovable",
            collaborators: "2 Developers\n2 Designers"
        },
        detailImage: "/assets/images/bridgegood/DetailImage.jpg",
        summary: "Myself and 4 teammates participated in Bridgegood's AI for Social Good Design-a-thon. We shipped BoldSteps, a gamified, AI-learning tool which builds confidence in students struggling with social anxiety. My biggest takeaway centered around the power of narrowing down the scope of a problem to a specific user group in order to design a solution, not a feature.",
        link: "https://boldsteps.lovable.app/"
    },
    {
        id: 1,
        title: "StreetCode Academy: Design and Tech",
        media: "/assets/videos/StreetCodeThumbnail.mov",
        type: "video",
        metadata: {
            timeline: "6 weeks",
            role: "Design Instructor\nProject Manager",
            tools: "Replit",
            collaborators: "6 Students\n1 Design Instructor"
        },
        detailImage: "/assets/images/streetcode/streetcode.jpg",
        summary: "I served as an instructor for StreetCode Academy’s Design & Tech program, where our six-week project, D’Sign, evolved into an AI-powered speech-to-ASL website supporting the Deaf and hard-of-hearing community. After running a design sprint, the class collectively chose to focus on accessibility—sparked by the presence of a Deaf student on day one. Despite having no prior AI experience, students explored real-world applications, attended industry talks, and built a functional prototype in a single session using Replit. By Demo Day, they confidently presented a working product, demonstrating how accessible tools and collaboration can empower diverse groups to create meaningful, real-world solutions.",
        link: "https://d-sign--tommyagarwal118.replit.app/"
    },
    {
        id: 2,
        title: "Web & Brand Design for Dance Teacher",
        media: "/assets/videos/DanceTeacherThumbnail.mov",
        type: "video",
        metadata: {
            timeline: "2 days",
            role: "Web Designer",
            tools: "ChatGPT\nFigma Make",
            collaborators: "1 Client"
        },
        detailImage: "/assets/images/danceteacher/danceteacher.png",
        summary: "I partnered with dance teacher and choreographer Arnaud Loubayi to establish his online presence by creating his first website. Using a 100% AI-driven workflow with ChatGPT and Figma Make, I designed and launched the site in hours. The site gave Arnaud a consistent professional brand and significantly improved his online visibility. Within weeks, he reported new booking inquiries and stronger SEO performance, positioning him for future growth.",
        link: "https://loubayidance.com/"
    },
    {
        id: 3,
        title: "Amazon Music x UC Berkeley Design-a-thon",
        media: "/assets/images/AmazonThumbnail.png",
        type: "image",
        metadata: {
            timeline: "5 hours",
            role: "UX Designer",
            tools: "Figma",
            collaborators: "1 Designer\n1 Developer\n1 Marketing"
        },
        detailImage: "/assets/images/amazon/amazon.jpeg",
        summary: "I participated in a design-a-thon hosted by Amazon Music and UC Berkeley’s design club. My team designed a feature, Amazon Stitched, which automatically creates custom merch using gen-AI. It was a combination of multiple different ideas and ultimately would’ve been more fleshed out with a bit more time, but nonetheless, I’m proud that I advocated for my ideas and pushed-back even when it was uncomfortable."
    },
    {
        id: 4,
        title: "Blue Magnolia Catering & Events Website",
        media: "/assets/videos/BlueMagnoliaThumbnail.mov",
        type: "video",
        metadata: {
            timeline: "3 Days",
            role: "Web Designer",
            tools: "Antigravity",
            collaborators: "1 Client"
        },
        detailImage: "/assets/images/bluemagnolia/BlueMagnoliaDetail.png",
        summary: "I was hired by Chef Alton, the owner of Blue Magnolia Catering & Events to design their website. The client was extremely pleased with the site and reported that it garnered interest for potential clients. \n\nThe first designs that Antigravity spit out looked like generic AI-slop but I started getting results by modifying my prompting. First, I provided 5 reference screenshots and told the agent to perform a deep analysis on the layout of each reference. Then it consolidated its findings into a design-rule.md file which it continuously referenced when I actually started building."
    },
    {
        id: 5,
        title: "This Design Portfolio",
        media: "/assets/videos/PortfolioThumbnail.mov",
        type: "video",
        metadata: {
            timeline: "3 months",
            role: "Product Designer",
            tools: "Figma\nAntigravity",
            collaborators: "4 Design Mentors"
        },
        detailImage: "/assets/images/portfolio/PortfolioDetail.png",
        summary: "This portfolio was an extremely rewarding but difficult project. It’s current iteration took me 3 months of consistent work, not including the restarts and tool changes which I’ve honestly lost track of. \n\nThe entire thing was vibe-coded in Google Antigravity and I occasionally used the Figma MCP server for specific components.\n\nSome Helpful Resources:\n1. Using LinkedIn to find early-career designers and curating a library of reference portfolios\n2. Youtube Content by: UI Collective, Tommy Geoco, Tae Online HD, Cecilia Kim, Kole Jain, Justeen15\n3. Feedback Fridays in the Design Buddies Discord"
    },
];

export default function OtherProjects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setSelectedId(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Desktop: 3 columns, 2 items per column vertically
    const desktopCols = [
        [projects[0], projects[3]], // Col 1
        [projects[1], projects[4]], // Col 2
        [projects[2], projects[5]], // Col 3
    ];

    // Mobile: 2 columns, 3 items per column vertically
    const mobileCols = [
        [projects[0], projects[2], projects[4]], // Col 1
        [projects[1], projects[3], projects[5]], // Col 2
    ];

    // Tiny Mobile: 1 column, all 6 items vertically
    const tinyMobileCols = [
        [projects[0], projects[1], projects[2], projects[3], projects[4], projects[5]]
    ];

    const renderColumn = (colProjects: Project[], colIdx: number, isMobile: boolean) => {
        const hasSelectedInCol = colProjects.some(p => p.id === selectedId);
        // Column flex width: if any item is selected, this column gets wider.
        // If nothing is selected anywhere, all are flex-1.
        // If something is selected IN ANOTHER column, this column shrinks (flex-[1]).
        // If something is selected in THIS column, it expands (flex-[3]).
        const colFlex = selectedId === null ? 1 : (hasSelectedInCol ? 3 : 1);

        return (
            <motion.div
                layout
                key={`col-${colIdx}`}
                className="flex flex-col gap-4"
                style={{ flex: colFlex }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            >
                {colProjects.map((project) => {
                    const isSelected = selectedId === project.id;
                    const defaultFlex = 1;
                    const selectedFlex = isMobile ? 3 : 3; // Height expansion ratio inside the column

                    return (
                        <motion.div
                            layout
                            key={project.id}
                            onClick={() => setSelectedId(selectedId === project.id ? null : project.id)}
                            className={`rounded-2xl ${project.placeholderClass || 'bg-card-bg'} relative overflow-hidden flex flex-col items-start justify-end cursor-pointer group border border-border/50 p-4`}
                            style={{
                                flex: isSelected ? selectedFlex : defaultFlex,
                                // Enforce a min-height so extreme scaling doesn't collapse standard items too far
                                minHeight: isSelected ? 'auto' : (isMobile ? '120px' : '150px')
                            }}
                            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        >
                            {/* Media Background */}
                            {!isSelected && project.media && (
                                <div className="absolute inset-0 z-0">
                                    {project.type === "video" ? (
                                        <video
                                            src={project.media}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src={project.media}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                    {/* Overlay for better text legibility if needed, or just hover effect */}
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300"></div>
                                </div>
                            )}

                            {!isSelected && !project.media && (
                                <div className="absolute inset-0 bg-white/25 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"></div>
                            )}

                            <AnimatePresence mode="wait">
                                {isSelected ? (
                                    <motion.div
                                        key="expanded-content"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="absolute inset-0 bg-card-bg-hover p-6 lg:p-8 flex flex-col items-start z-20 overflow-y-auto border border-border"
                                    >
                                        <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto pb-12">
                                            {/* Header / Title Tag */}
                                            <div className="bg-card-bg-accent text-text-primary text-sm font-medium px-4 py-2 rounded-[32px] w-fit border border-border">
                                                {project.title}
                                            </div>

                                            {/* Image 1: Thumbnail Expansion */}
                                            <div className="w-full aspect-video rounded-xl overflow-hidden bg-white/5 relative flex-shrink-0">
                                                {project.type === "video" ? (
                                                    <video
                                                        src={project.media}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <img
                                                        src={project.media}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>

                                            {/* Metadata Section */}
                                            {project.metadata && (
                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full py-6 border-y border-text-secondary/20">
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-wider text-text-secondary/60 mb-1">Timeline</p>
                                                        <p className="text-sm font-medium text-text-primary leading-tight">{project.metadata.timeline}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-wider text-text-secondary/60 mb-1">Role</p>
                                                        <p className="text-sm font-medium text-text-primary leading-tight whitespace-pre-line">{project.metadata.role}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-wider text-text-secondary/60 mb-1">Tools</p>
                                                        <div className="flex flex-col">
                                                            {project.metadata.tools.split('\n').map((tool: string) => (
                                                                <div key={tool} className="cs-tool-hover w-fit !h-[1.25em]">
                                                                    <span className="cs-tool-name text-sm font-medium text-text-primary leading-tight">
                                                                        {tool}
                                                                    </span>
                                                                    <div className="cs-tool-logo">
                                                                        <img
                                                                            src={`/assets/images/ResumePhotos/toolslogo/${TOOL_LOGOS[tool] || "figmalogo.png"}`}
                                                                            alt={tool}
                                                                            className="w-4 h-4 object-contain"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-wider text-text-secondary/60 mb-1">Collaborators</p>
                                                        <p className="text-sm font-medium text-text-primary leading-tight whitespace-pre-line">{project.metadata.collaborators}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Image 2: Detail Image */}
                                            {project.detailImage && (
                                                <div className="w-full aspect-video rounded-xl overflow-hidden bg-card-bg-accent flex-shrink-0 border border-border">
                                                    <img
                                                        src={project.detailImage}
                                                        alt="Detail"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}

                                            {/* Project Summary */}
                                            {project.summary && (
                                                <div className="space-y-6">
                                                    <p className="text-text-primary text-base lg:text-lg leading-relaxed font-light whitespace-pre-line">
                                                        {project.summary}
                                                    </p>

                                                    {project.link && (
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 bg-text-primary text-bg px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-all group"
                                                            onClick={(e) => e.stopPropagation()} // Prevent collapse when clicking link
                                                        >
                                                            {project.linkText || "Visit Live Project"}
                                                            <ArrowUpRight size={18} weight="bold" />
                                                        </a>
                                                    )}
                                                </div>
                                            )}

                                            {/* Placeholders for unfinished projects */}
                                            {!project.summary && (
                                                <div className="w-full space-y-4">
                                                    <div className="w-full h-[140px] lg:h-[200px] bg-card-bg-accent/40 rounded-xl animate-pulse"></div>
                                                    <div className="w-full h-[140px] lg:h-[200px] bg-card-bg-accent/40 rounded-xl animate-pulse"></div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="thumbnail"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-card-bg-accent/80 backdrop-blur-sm text-text-primary text-xs font-medium px-3 py-1.5 rounded-[32px] text-left z-10 w-fit border border-border/50"
                                    >
                                        {project.title}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className="w-full flex flex-col gap-4" ref={containerRef}>
            <h3 className="text-[20px] font-medium text-white/50 m-0">
                Other Projects
            </h3>

            {/* Desktop View (3 Columns) */}
            <div className="hidden lg:flex flex-row gap-4 w-full h-[500px]">
                {desktopCols.map((col, idx) => renderColumn(col, idx, false))}
            </div>

            {/* Mobile View (2 Columns) */}
            <div className="hidden min-[550px]:flex lg:hidden flex-row gap-4 w-full h-[700px]">
                {mobileCols.map((col, idx) => renderColumn(col, idx, true))}
            </div>

            {/* Tiny Mobile View (1 Column) */}
            <div className="flex min-[550px]:hidden flex-row gap-4 w-full h-[1200px]">
                {tinyMobileCols.map((col, idx) => renderColumn(col, idx, true))}
            </div>
        </div>
    );
}
