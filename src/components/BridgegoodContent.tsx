import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function BridgegoodContent() {
    const project = {
        title: "Bridgegood AI for Social Good Design-a-thon",
        media: "/assets/videos/BoldStepsDemo.mov",
        type: "video",
        metadata: {
            timeline: "48 hours",
            role: "UX/UI Design\nUX Research",
            tools: "Figma\nLovable",
            collaborators: "2 Developers\n2 Designers"
        },
        detailImage: "/assets/images/bridgegood/DetailImage.jpg",
        summary: "Myself and 4 teammates participated in Bridgegood's AI for Social Good Hackathon. We shipped BoldSteps, a gamified, AI-learning tool which builds confidence in students struggling with social anxiety. My biggest takeaway centered around the power of narrowing down the scope of a problem to a specific user group in order to design a solution, not a feature.",
        link: "https://boldsteps.lovable.app/"
    };

    const TOOL_LOGOS: Record<string, string> = {
        "Figma": "figmalogo.png",
        "Lovable": "lovablelogo.png"
    };

    return (
        <div className="cs-wrapper cs-bg-theme !pb-20">
            {/* Hero Section */}
            <header className="cs-hero !pt-8 !pb-12">
                <div className="cs-hero-content">
                    <div className="cs-hero-text">
                        <p className="cs-meta">Bridgegood • Pitched November 2025</p>
                        <h1 className="cs-title">
                            Gamified AI learning tool to help students with social anxiety
                        </h1>
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
                <div className="cs-hero-tags">
                    <span className="cs-tag">Cross-functional Collaboration</span>
                    <span className="cs-tag">Hackathon</span>
                    <span className="cs-tag">AI-Assisted Workflow</span>
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
                                alt="BoldSteps App Detail"
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
