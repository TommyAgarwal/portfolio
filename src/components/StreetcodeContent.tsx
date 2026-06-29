import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function StreetcodeContent() {
    const project = {
        title: "StreetCode Academy: Design and Tech",
        media: "/assets/videos/dsignthumbnail.mov",
        type: "video",
        metadata: {
            timeline: "6 Weeks",
            role: "Design Instructor\nProject Manager",
            tools: "Replit",
            collaborators: "6 Students\nDesign Instructor"
        },
        detailImage: "/assets/images/streetcode/streetcode.jpg",
        summary: "I served as an instructor for StreetCode Academy’s Design & Tech program, where our six-week project, D’Sign, evolved into an AI-powered speech-to-ASL website supporting the Deaf and hard-of-hearing community. After running a design sprint, the class collectively chose to focus on accessibility—sparked by the presence of a Deaf student on day one. Despite having no prior AI experience, students explored real-world applications, attended industry talks, and built a functional prototype in a single session using Replit. By Demo Day, they confidently presented a working product, demonstrating how accessible tools and collaboration can empower diverse groups to create meaningful, real-world solutions.",
        link: "https://d-sign--tommyagarwal118.replit.app/"
    };

    const TOOL_LOGOS: Record<string, string> = {
        "Replit": "replitlogo.png"
    };

    return (
        <div className="cs-wrapper cs-sc-theme !pb-20">
            {/* Hero Section */}
            <header className="cs-hero !pt-8 !pb-12">
                <div className="cs-hero-content">
                    <div className="cs-hero-text">
                        <p className="cs-meta">StreetCode Academy • Pitched May 2025</p>
                        <h1 className="cs-title">
                            Directing development of a speech to ASL translation app for deaf/HoH communities
                        </h1>
                        <div className="cs-hero-tags">
                            <span className="cs-tag">Mentorship</span>
                            <span className="cs-tag">Accessibility</span>
                            <span className="cs-tag">Design Thinking</span>
                        </div>
                    </div>
                    <div className="cs-hero-image">
                        <video
                            src={project.media}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            </header>

            {/* Metadata Grid */}
            <section className="cs-metadata !mb-16">
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Timeline</h3>
                    <p className="cs-meta-value">{project.metadata.timeline}</p>
                </div>
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Role</h3>
                    <div className="cs-meta-value whitespace-pre-line">{project.metadata.role}</div>
                </div>
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Tools</h3>
                    <div className="cs-meta-value flex flex-col gap-2">
                        {project.metadata.tools.split('\n').map((tool) => (
                            <div key={tool} className="cs-tool-hover w-fit !h-[1.25em]">
                                <span className="cs-tool-name">
                                    {tool}
                                </span>
                                <div className="cs-tool-logo">
                                    <img
                                        src={`/assets/images/logos/${TOOL_LOGOS[tool] || "figmalogo.png"}`}
                                        alt={tool}
                                        className="w-4 h-4 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Collaborators</h3>
                    <p className="cs-meta-value whitespace-pre-line">{project.metadata.collaborators}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="cs-section !mb-16">
                <div className="cs-bg-content-container">
                    <h2 className="cs-section-title">Project Overview</h2>
                    <p className="cs-section-desc-light">
                        {project.summary}
                    </p>

                    {project.detailImage && (
                        <div className="cs-bg-image-full border border-border mt-6 overflow-hidden rounded-xl">
                            <img
                                src={project.detailImage}
                                alt="StreetCode Class Project"
                                className="w-full h-auto block"
                            />
                        </div>
                    )}

                    {project.link && (
                        <div className="mt-8">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-text-primary text-bg px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-all group"
                            >
                                Visit Live Project
                                <ArrowUpRight size={18} weight="bold" />
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
