import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
    WarningCircle,
    CheckCircle,
    ChartLineUp,
    ArrowUpRight,
    ArrowUp,
    ArrowDown,
    StarFour,
    Heart,
    MagicWand,
    Code,
    FigmaLogo,
    OpenAiLogo
} from "@phosphor-icons/react";

function Counter({ value }: { value: number }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration: 1.5,
                ease: "easeOut"
            });
            return controls.stop;
        } else {
            count.set(0);
        }
    }, [isInView, count, value]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function GrammyArtistContent() {
    return (
        <div className="cs-wrapper cs-wd-theme">
            {/* Hero Section */}
            <header className="cs-hero">
                <div className="cs-hero-content">
                    <div className="cs-hero-text">
                        <p className="cs-meta">Freelance • Shipped October 2025</p>
                        <h1 className="cs-title">
                            Boosting Grammy Artist’s Audience Engagement and Conversion via Web Design
                        </h1>
                    </div>
                    <div className="cs-hero-image">
                        <img src="assets/images/WebDesignThumbnail.png" alt="Web Design Case Study" className="w-full h-full object-cover block" />
                    </div>
                </div>
                <div className="cs-hero-tags">
                    <span className="cs-tag">Web Development</span>
                    <span className="cs-tag">Brand Design</span>
                    <span className="cs-tag">Client Work</span>
                </div>
            </header>

            {/* Metadata Grid */}
            <section className="cs-metadata">
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Timeline</h3>
                    <p className="cs-meta-value">3 Weeks</p>
                </div>
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Role</h3>
                    <ul className="cs-meta-value">
                        <li>UX/UI Design</li>
                        <li>Brand Design</li>
                        <li>Frontend Dev</li>
                        <li>Product Strategy</li>
                    </ul>
                </div>
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Tools</h3>
                    <ul className="cs-meta-value">
                        <li>
                            <div className="cs-tool-hover">
                                <span className="cs-tool-name">Figma Make</span>
                                <div className="cs-tool-logo">
                                    <img src="/assets/images/ResumePhotos/toolslogo/figmamakelogo.svg" alt="Figma" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cs-tool-hover">
                                <span className="cs-tool-name">ChatGPT</span>
                                <div className="cs-tool-logo">
                                    <img src="/assets/images/ResumePhotos/toolslogo/chatgptlogo.png" alt="ChatGPT" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Collaborators</h3>
                    <ul className="cs-meta-value">
                        <li>1 Client</li>
                    </ul>
                </div>
            </section>

            {/* TLDR Section */}
            <section className="cs-section cs-tldr">
                <h2 className="cs-tldr-heading">TLDR</h2>
                <div className="flex flex-col gap-2">
                    <div className="cs-tldr-grid">
                        {/* Left Column: Problem & Solution */}
                        <div className="cs-tldr-col-left">
                            {/* Problem Card */}
                            <div className="cs-card-problem">
                                <div className="cs-card-header">
                                    <WarningCircle size={24} weight="regular" />
                                    <h3>Problem</h3>
                                </div>
                                <p className="cs-card-text">
                                    Grammy Artist's old website was missing clear CTAs and didn’t mesh visually with his artistic identity.
                                </p>
                            </div>
                            {/* Solution Card */}
                            <div className="cs-card-solution">
                                <div className="cs-card-header">
                                    <CheckCircle size={24} weight="regular" />
                                    <h3>Solution</h3>
                                </div>
                                <p className="cs-card-text">
                                    A custom-built, dynamic website consistent with the artist’s brand aesthetic, a revamped subscriber newsletter, and donation integration.
                                </p>
                            </div>
                        </div>
                        {/* Right Column: Outcome (the blue-er section) */}
                        <div className="cs-tldr-col-right">
                            <div className="cs-card-outcome h-full">
                                <div className="cs-card-header">
                                    <ChartLineUp size={24} weight="regular" />
                                    <h3>Outcome</h3>
                                </div>
                                <div className="cs-stats-row">
                                    <div className="cs-stat">
                                        <div className="cs-stat-value">
                                            <ArrowUp size={40} weight="regular" />
                                            <span><Counter value={30} />%</span>
                                        </div>
                                        <span className="cs-stat-label">Newsletter Subscribers</span>
                                    </div>
                                    <div className="cs-stat">
                                        <div className="cs-stat-value">
                                            <ArrowDown size={40} weight="regular" />
                                            <span><Counter value={96} />%</span>
                                        </div>
                                        <span className="cs-stat-label">Annual Expenses</span>
                                    </div>
                                </div>
                                <p className="cs-card-text">
                                    The new site was positively received by the client’s 80,000 followers. Client was extremely satisfied with the final product and anecdotally reported an increase in bookings/inquires.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Walkthrough Video */}
                    <div
                        className="cs-walkthrough-video relative group w-full cursor-pointer rounded-lg border border-border overflow-hidden"
                        onClick={() => window.open('https://kiazimalonga.com/', '_blank')}
                    >
                        <video
                            src="assets/videos/KiaziSiteWalkthough-HD 1080p.mov"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto"
                            style={{ transform: 'scale(1.01)' }}
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                            <span className="text-white font-medium text-xl flex items-center gap-2">
                                kiazimalonga.com
                                <ArrowUpRight size={24} weight="regular" />
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Background Section */}
            <section className="cs-section cs-background">
                <h3 className="cs-section-subtitle">Background & Context</h3>
                <h2 className="cs-section-title">What wasn’t working and why I was hired</h2>
                <div className="cs-bg-content-container">
                    <p className="cs-section-desc-light">
                        Kiazi Malonga is a world renowned and Grammy-nominated musician. His old site was more or less a static biography. Each page lacked a call-to-action and felt bland in contrast to the artist’s vibrant and energetic brand identity.
                    </p>
                    <div className="cs-bg-image-full border border-border">
                        <img src="assets/images/webdesign/OldSiteScreenshot.png" alt="Old Website" className="cs-hardware-img" />
                    </div>
                    <p className="cs-section-desc-light">
                        Kiazi solicited my web design services in order to completely revamp the site.
                    </p>
                </div>
            </section>

            {/* Competitive Analysis Section */}
            <section className="cs-section cs-audit">
                <h3 className="cs-section-subtitle">Competitive Analysis</h3>
                <h2 className="cs-section-title">Lessons from 15 Artist Websites</h2>
                <p className="cs-section-desc">The client came in with a strong vision and multiple reference sites. My role was to extract the common aesthetic language from these sources and define a unique brand identity for the client. What the reference websites accomplished well:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="cs-card cs-audit-card bg-card-bg justify-center items-center text-center !p-6 flex min-h-[100px] border border-border">
                        <h3 className="text-lg font-semibold m-0">Booking/Contact is the primary CTA</h3>
                    </div>
                    <div className="cs-card cs-audit-card bg-card-bg justify-center items-center text-center !p-6 flex min-h-[100px] border border-border">
                        <h3 className="text-lg font-semibold m-0">Numerous Work Samples</h3>
                    </div>
                    <div className="cs-card cs-audit-card bg-card-bg justify-center items-center text-center !p-6 flex min-h-[100px] border border-border">
                        <h3 className="text-lg font-semibold m-0">Established Credibility</h3>
                    </div>
                    <div className="cs-card cs-audit-card bg-card-bg justify-center items-center text-center !p-6 flex min-h-[100px] border border-border">
                        <h3 className="text-lg font-semibold m-0">Comprehensive Biography</h3>
                    </div>
                    <div className="cs-card cs-audit-card bg-card-bg justify-center items-center text-center !p-6 flex min-h-[100px] border border-border">
                        <h3 className="text-lg font-semibold m-0">Social Media Platform Links</h3>
                    </div>
                    <div className="cs-card cs-audit-card bg-card-bg justify-center items-center text-center !p-6 flex min-h-[100px] border border-border">
                        <h3 className="text-lg font-semibold m-0">Captivating Visuals</h3>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="cs-section cs-ideation">
                <h3 className="cs-section-subtitle">Workflow</h3>
                <h2 className="cs-section-title">Turning Vision into Reality with AI-Driven Development</h2>

                <div className="cs-testing-comparison mt-8">
                    <div className="cs-testing-items">
                        <div className="cs-testing-item cs-workflow-item bg-card-bg-hover border border-border">
                            <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                <OpenAiLogo size={40} weight="regular" />
                            </div>
                            <div className="cs-testing-text">
                                <h4 className="text-lg! mb-1 font-semibold!">Conversation → PRD</h4>
                                <p className="text-base! opacity-80 text-text-secondary">Synthesized conversation with client, reference sites, and competitive analysis into a PRD using ChatGPT.</p>
                            </div>
                        </div>
                        <div className="cs-testing-item cs-workflow-item bg-card-bg-hover border border-border">
                            <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                <FigmaLogo size={40} weight="regular" />
                            </div>
                            <div className="cs-testing-text">
                                <h4 className="text-lg! mb-1 font-semibold!">PRD → Figma Make</h4>
                                <p className="text-base! opacity-80 text-text-secondary">Converted the PRD into a thorough Figma Make prompt.</p>
                            </div>
                        </div>
                        <div className="cs-testing-item cs-workflow-item bg-card-bg-hover border border-border">
                            <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                <Code size={40} weight="regular" />
                            </div>
                            <div className="cs-testing-text">
                                <h4 className="text-lg! mb-1 font-semibold!">Figma Make → Manual Refining</h4>
                                <p className="text-base! opacity-80 text-text-secondary">General Troubleshooting, Restyling, CSS Tweaks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cs-section cs-background">
                <h3 className="cs-section-subtitle text-danger">When things went wrong</h3>
                <h2 className="cs-section-title">Figma Make one-shotted it right?</h2>
                <div className="cs-bg-content-container">
                    <p className="cs-section-desc-light">
                        If by one-shotted it you mean one-hundred-eighty-shotted it then yes.
                    </p>
                    <div className="cs-bg-image-full border border-border">
                        <img src="assets/images/webdesign/VersionHistory.png" alt="Version History" className="cs-hardware-img" />
                    </div>
                    <p className="cs-section-desc-light">
                        On multiple occasions, a simple prompt to a specific area would disrupt the entire app forcing me to double-back, fix the stuff that broke, and still not have what I asked for originally. I found that styling errors were much easier to fix by hand instead of relying on the agent.
                    </p>
                </div>
            </section>

            {/* Impact 1 Section */}
            <section className="cs-section cs-background">
                <h3 className="cs-section-subtitle text-success">Impact #1</h3>
                <h2 className="cs-section-title">Creating tangible avenues to drive conversion</h2>
                <div className="cs-bg-content-container">
                    <p className="cs-section-desc-light">
                        While the visual revamp was much appreciated, the more important work was in relation to the CTAs that got added across the site. By introducing the client to Mailchimp and PayPal Business, we provided concrete avenues for audience conversion.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <img src="assets/images/webdesign/Contact.png" alt="Contact Section" className="flex-1 object-cover rounded-lg border border-border min-w-0" />
                        <img src="assets/images/webdesign/Footer.png" alt="Footer Section" className="flex-1 object-cover rounded-lg border border-border min-w-0" />
                    </div>
                    <p className="cs-section-desc-light">
                        Newsletter subscribers increased by 30% and anecdotally, the client reported an increase in inquiries thanks to the site.
                    </p>
                </div>
            </section>

            {/* Impact 2 Section */}
            <section className="cs-section cs-background">
                <h3 className="cs-section-subtitle text-success">Impact #2</h3>
                <h2 className="cs-section-title">Engaging the audience</h2>
                <div className="cs-bg-content-container">
                    <p className="cs-section-desc-light">
                        When my client posted the new website to his 79K social media followers, it garnered an immediate positive reaction and almost 60,000 impressions within the first week.
                    </p>
                    <div className="cs-bg-image-full w-full">
                        <img src="assets/images/webdesign/Impressions.png" alt="Social Media Impressions" className="w-full h-auto border border-border rounded-lg" />
                    </div>
                </div>
            </section>

            {/* Impact 3 Section */}
            <section className="cs-section cs-background">
                <h3 className="cs-section-subtitle text-success">Impact #3</h3>
                <h2 className="cs-section-title">I saved the client 96% in annual expenses</h2>
                <div className="cs-bg-content-container">
                    <p className="cs-section-desc-light">
                        Instead of paying a heavy monthly subscription for a Squarespace template, my client now gets a fully custom-built product and pays just $12/year for the domain.
                    </p>
                    <div className="w-full bg-card-bg p-8 rounded-lg flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-center border border-border">
                        <div className="text-center">
                            <h4 className="text-3xl font-bold mb-2 text-danger">$<Counter value={240} />/yr</h4>
                            <p className="text-base text-text-secondary font-medium">Squarespace Template</p>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-border"></div>
                        <div className="text-center">
                            <h4 className="text-3xl font-bold mb-2 text-success">$<Counter value={12} />/yr</h4>
                            <p className="text-base text-text-secondary font-medium">Custom Site + Domain via Porkbun</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Takeaways */}
            <section className="cs-section cs-takeaways">
                <div className="cs-takeaways-header">
                    <h3 className="cs-section-subtitle">Takeaways</h3>
                    <h2 className="cs-section-title">What I learned from this project</h2>
                </div>
                <div className="cs-takeaways-grid text-left">
                    <div className="cs-takeaway-card">
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon">
                                <StarFour size={24} weight="regular" />
                            </span>
                            <h3>Working with AI-Design tools</h3>
                        </div>
                        <p>This project was my introduction to using an AI Design tool. I’m not sure if I would use Figma Make for a 0-1 project again but, I’m excited to lean into my CS background and work with more dev-focused tools like Cursor and Claude.</p>
                    </div>
                    <div className="cs-takeaway-card">
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon">
                                <Heart size={24} weight="regular" />
                            </span>
                            <h3>Defining the feel</h3>
                        </div>
                        <p>I took my time analyzing references and understanding the client’s vision. Using ChatGPT to prompt Figma Make was incredibly effective in maintaining a consistent aesthetic across the site.</p>
                    </div>
                    <div className="cs-takeaway-card">
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon">
                                <MagicWand size={24} weight="regular" />
                            </span>
                            <h3>Using AI to animate micro interactions</h3>
                        </div>
                        <p>Linking Figma Make with Framer motion made it super easy to inject subtle motion and make the site feel more dynamic.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
