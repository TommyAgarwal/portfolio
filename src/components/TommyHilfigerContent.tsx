import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
    ArrowDown,
    ChartLineUp,
    WarningCircle,
    CheckCircle,
    Chats,
    ClipboardText,
    Eyes,
    ListChecks,
    Flag,
    FileText,
    Wrench,
    Megaphone
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

export default function TommyHilfigerContent() {
    return (
        <div className="cs-wrapper cs-th-theme">
            {/* Hero Section */}
            <header className="cs-hero">
                <div className="cs-hero-content">
                    <div className="cs-hero-text">
                        <p className="cs-meta">Tommy Hilfiger • Pitched June 2025</p>
                        <h1 className="cs-title">
                            From Sales Associate to UX Lead: Redesigning Tommy Hilfiger&apos;s Checkout Experience
                        </h1>
                    </div>
                    <div className="cs-hero-image">
                        <img src="assets/images/pos/th-thumbnail-2.png" alt="Tommy Hilfiger POS Redesign" />
                    </div>
                </div>
                <div className="cs-hero-tags">
                    <span className="cs-tag">Internal Tool</span>
                    <span className="cs-tag">Full Redesign</span>
                    <span className="cs-tag">Bricks & Mortar Retail</span>
                </div>
            </header>

            {/* Metadata Grid */}
            <section className="cs-metadata">
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Timeline</h3>
                    <p className="cs-meta-value">1 Month</p>
                </div>
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Role</h3>
                    <ul className="cs-meta-value">
                        <li>UX/UI Design</li>
                        <li>UX Research</li>
                        <li>Sales Associate</li>
                    </ul>
                </div>
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Tools</h3>
                    <ul className="cs-meta-value">
                        <li>
                            <div className="cs-tool-hover">
                                <span className="cs-tool-name">Figma</span>
                                <div className="cs-tool-logo">
                                    <img src="/assets/images/ResumePhotos/toolslogo/figmalogo.png" alt="Figma" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cs-tool-hover">
                                <span className="cs-tool-name">Adobe Photoshop</span>
                                <div className="cs-tool-logo">
                                    <img src="/assets/images/ResumePhotos/toolslogo/photoshoplogo.png" alt="Adobe Photoshop" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="cs-meta-col">
                    <h3 className="cs-meta-label">Collaborators</h3>
                    <ul className="cs-meta-value">
                        <li>5 Sales Associates</li>
                        <li>2 Store Managers</li>
                        <li>1 HR Director</li>
                    </ul>
                </div>
            </section>

            {/* TLDR Section */}
            <section className="cs-section cs-tldr">
                <h2 className="cs-tldr-heading">TLDR</h2>
                <div className="cs-tldr-grid">
                    {/* Left Column: Problem & Outcome */}
                    <div className="cs-tldr-col-left">
                        {/* Problem Card */}
                        <div className="cs-card-problem">
                            <div className="cs-card-header">
                                <WarningCircle size={24} weight="regular" />
                                <h3>Problem</h3>
                            </div>
                            <p className="cs-card-text">
                                A slow, outdated POS system that confused both cashiers and customers,
                                negatively impacting the business&apos;s transaction speed.
                            </p>
                        </div>
                        {/* Outcome Card */}
                        <div className="cs-card-outcome">
                            <div className="cs-card-header">
                                <ChartLineUp size={24} weight="regular" />
                                <h3>Outcome</h3>
                            </div>
                            <div className="cs-stats-row">
                                <div className="cs-stat">
                                    <div className="cs-stat-value">
                                        <ArrowDown size={40} weight="regular" />
                                        <span><Counter value={50} />%</span>
                                    </div>
                                    <span className="cs-stat-label">Transaction Time</span>
                                </div>
                                <div className="cs-stat">
                                    <div className="cs-stat-value">
                                        <ArrowDown size={40} weight="regular" />
                                        <span><Counter value={85} />%</span>
                                    </div>
                                    <span className="cs-stat-label">Clicks in key flows</span>
                                </div>
                            </div>
                            <p className="cs-card-text">
                                I pitched the redesign to 3 levels of management and received
                                praise but ultimately, Tommy Hilfiger took no action to implement the improved POS.
                            </p>
                        </div>
                    </div>
                    {/* Right Column: Solution */}
                    <div className="cs-tldr-col-right">
                        <div className="cs-card-solution">
                            <div className="cs-card-header">
                                <CheckCircle size={24} weight="regular" />
                                <h3>Solution</h3>
                            </div>
                            <p className="cs-card-text">
                                I synthesized first hand research, user interviews, and a UX audit into
                                high fidelity mockups for a new POS and a reimagined checkout experience.
                            </p>
                            <div className="cs-solution-image-container">
                                <img src="assets/images/pos/main-4.png" alt="Solution Preview" className="cs-solution-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Background Section */}
            <section className="cs-section cs-background">
                <h3 className="cs-section-subtitle">Background</h3>
                <h2 className="cs-section-title">Going from Sales Associate to UX Lead</h2>
                <div className="cs-bg-content-container">
                    <p className="cs-section-desc-light">
                        Working as the main cashier at a Tommy Hilfiger outlet for 2 years
                        meant going into battle for 8 hours a day. Not with angry customers as you might expect, but with a
                        comically terrible POS.
                    </p>
                    <div className="cs-bg-image-full">
                        <img src="assets/images/pos/pos-image.png" alt="POS Hardware" className="cs-hardware-img" />
                    </div>
                    <p className="cs-section-desc-light">
                        A Point of Sale (POS) is the monitor or tablet attached to the cash
                        register used to facilitate transactions in retail. As a designer using the software for hours on
                        end, I saw an opportunity and approached my manager with a proposal to redesign it.
                    </p>
                </div>
            </section>

            {/* Research Section */}
            <section className="cs-section cs-research">
                <h3 className="cs-section-subtitle">Research</h3>
                <h2 className="cs-section-title">Pain points straight from the source</h2>
                <p className="cs-section-desc">
                    I didn’t get approval to run company-wide surveys or conduct formal interviews,
                    so I had to make due with what I could gather while working my usual shifts.
                </p>
                <div className="cs-research-grid">
                    <div className="cs-card cs-research-card">
                        <Chats size={64} weight="regular" />
                        <p>Informal interviews (conversations with coworkers)</p>
                    </div>
                    <div className="cs-card cs-research-card">
                        <ClipboardText size={64} weight="regular" />
                        <p>Self-recorded data of customer behavior & patterns</p>
                    </div>
                    <div className="cs-card cs-research-card">
                        <Eyes size={64} weight="regular" />
                        <p>Intentional observation of the checkout interaction</p>
                    </div>
                </div>
            </section>

            {/* UX Audit */}
            <section className="cs-section cs-audit">
                <h3 className="cs-section-subtitle">UX Audit</h3>
                <h2 className="cs-section-title">What wasn’t working and why</h2>
                <p className="cs-section-desc">Research revealed a much longer list of issues but here’s a taste:</p>

                <div className="cs-audit-grid">
                    <div className="cs-card cs-audit-card cs-card-danger">
                        <div className="cs-card-header">
                            <WarningCircle size={24} weight="regular" />
                            <h3>Adding a 10¢ bag fee takes SEVEN clicks</h3>
                        </div>
                        <p>
                            <strong>45% of customers choose to buy a bag.</strong> A key interaction like this must be
                            frictionless. This was the most common pain point amongst cashiers.
                        </p>
                    </div>
                    <div className="cs-card cs-audit-card cs-card-danger">
                        <div className="cs-card-header">
                            <WarningCircle size={24} weight="regular" />
                            <h3>65% of loyalty club signups take over a minute</h3>
                        </div>
                        <p>
                            Every transaction, customers must type their email and phone number on the card reader screen
                            which can easily double transaction time depending on the customer.
                        </p>
                    </div>
                </div>

                <div className="cs-card cs-lofi-card">
                    <img src="assets/images/pos/frame-507.png" alt="Current POS Wireframe" />
                    <p>Lo-fi Mockup of Current POS</p>
                </div>
            </section>

            {/* Ideation */}
            <section className="cs-section cs-ideation">
                <h3 className="cs-section-subtitle">Ideation</h3>
                <h2 className="cs-section-title">Laying the groundwork for faster transactions</h2>

                <div className="cs-ideation-content">
                    <div className="cs-ideation-goals">
                        <div className="cs-card cs-goals-card">
                            <div className="cs-card-header">
                                <ListChecks size={24} weight="regular" />
                                <h3>Redesign Goals</h3>
                            </div>
                            <ol>
                                <li>Refine and regroup the menus so that most transactions can be completed with ZERO navigation</li>
                                <li>Include the bag-fee as part of the core interaction instead of a lengthy detour</li>
                                <li>Reimagine the checkout flow to accommodate the loyalty program instead of tacking it onto the end</li>
                            </ol>
                        </div>
                    </div>

                    <div className="cs-ideation-process">
                        <p>
                            I started by listing all the functions that an average transaction might use. Then, I sketched
                            out different iterations of the main dashboard, grouping the functions logically.
                        </p>
                        <img src="assets/images/pos/lofi-ideation.png" alt="Sketches" className="cs-lofi-sketches" />
                    </div>
                </div>
            </section>

            {/* Testing */}
            <section className="cs-section cs-testing">
                <h3 className="cs-section-subtitle">Testing</h3>
                <h2 className="cs-section-title">Validating if users could find what they need faster and easier</h2>
                <p className="cs-section-desc">
                    I presented the mockups to Tommy Hilfiger coworkers, design mentors, and CS
                    classmates to collect feedback. I evaluated whether testers could locate key functions and how they read
                    the overall visual hierarchy.
                </p>

                <div className="cs-testing-comparison">
                    {/* What worked well */}
                    <div className="cs-card cs-testing-success cs-card-success">
                        <div className="cs-card-header justify-center">
                            <CheckCircle size={24} weight="regular" />
                            <h3>What worked well</h3>
                        </div>
                        <div className="cs-testing-items">
                            <div className="cs-testing-item bg-card-bg">
                                <div className="cs-testing-text">
                                    <h4>Smarter layout, less clicks</h4>
                                    <p>Users preferred the menu-less layout which removed unnecessary clicks and negated the need to search for functions.</p>
                                </div>
                                <img src="assets/images/pos/testing-smarter-layout.png" alt="Feedback Example 1" className="cs-feedback-img" />
                            </div>
                            <div className="cs-testing-item bg-card-bg">
                                <img src="assets/images/pos/desktop-12.png" alt="Feedback Example 2" className="cs-feedback-img" />
                                <div className="cs-testing-text">
                                    <h4>Quick & convenient bag fee</h4>
                                    <p>The built-in bag fee was well received by users and highly preferable to the old system.</p>
                                </div>
                            </div>
                            <div className="cs-testing-item bg-card-bg">
                                <div className="cs-testing-text">
                                    <h4>Making functions toggleable</h4>
                                    <p>For items missing tags or final sale, cashiers had to manually mark the receipt. That was negated by adding toggleable flags to the item functions.</p>
                                </div>
                                <img src="assets/images/pos/image-12.png" alt="Feedback Example 3" className="cs-feedback-img" />
                            </div>
                        </div>
                    </div>

                    {/* What needed to be improved */}
                    <div className="cs-card cs-testing-improve cs-card-danger">
                        <div className="cs-card-header justify-center">
                            <Flag size={24} weight="regular" />
                            <h3>What needed to be improved</h3>
                        </div>
                        <div className="cs-testing-items">
                            <div className="cs-testing-item bg-card-bg">
                                <div className="cs-testing-text">
                                    <h4>Button Size & Clickability</h4>
                                    <p>Our POS has an 18 inch touchscreen monitor, the buttons needed to be better sized and have increased padding in order to be easily clicked.</p>
                                </div>
                                <img src="assets/images/pos/screenshot-15840.png" alt="Improve Example 1" className="cs-feedback-img" />
                            </div>
                            <div className="cs-testing-item bg-card-bg">
                                <img src="assets/images/pos/rw-1920-2.png" alt="Improve Example 2" className="cs-feedback-img" />
                                <div className="cs-testing-text">
                                    <h4>Visual Polish</h4>
                                    <p>While users found the mockups functional, the designers I showed had UI-related feedback regarding contrast and spacing.</p>
                                </div>
                            </div>
                            <div className="cs-testing-item bg-card-bg">
                                <div className="cs-testing-text">
                                    <h4>Friendlier function names</h4>
                                    <p>Some of Tommy Hilfiger’s staff are non-native English speakers and found the names of the functions confusing.</p>
                                </div>
                                <img src="assets/images/pos/screenshot-15423.png" alt="Improve Example 3" className="cs-feedback-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Design */}
            <section className="cs-section cs-final">
                <h3 className="cs-section-subtitle">Final Design</h3>
                <h2 className="cs-section-title">An efficient checkout experience that anticipates cashier & customer needs</h2>
                <div className="cs-final-content">
                    <div className="cs-card cs-final-card">
                        <p className="cs-final-desc">An intuitive bag fee interaction, inspired by self-checkout machines</p>
                        <div className="cs-final-flows">
                            <div className="cs-flow-step">
                                <img src="assets/images/pos/main-4.png" alt="Step 1" />
                                <p>When finished scanning, click Continue to Payment</p>
                            </div>
                            <div className="cs-flow-step">
                                <img src="assets/images/pos/desktop-12.png" alt="Step 2" />
                                <p>Set bag quantity, then click Continue</p>
                            </div>
                            <div className="cs-flow-step">
                                <img src="assets/images/pos/payment-1.png" alt="Step 3" />
                                <p>Get payment from customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="cs-final-hero-image">
                        <img src="assets/images/pos/new-ui.png" alt="Final UI" />
                    </div>
                </div>
            </section>

            {/* Impact & Outcome */}
            <section className="cs-section cs-impact">
                <div className="cs-impact-header">
                    <h3 className="cs-section-subtitle">Impact & Outcome</h3>
                    <h2 className="cs-section-title">What (would’ve) changed for users, customers, and the business</h2>
                </div>
                <div className="cs-impact-content">
                    {/* Top Block */}
                    <div className="cs-impact-top-block">
                        <div className="cs-impact-cards">
                            <div className="cs-impact-card">
                                <h3>50% Faster Transactions</h3>
                                <p>As cashiers are scanning, folding, and bagging the items, the customer is inputting their own information for the loyalty program via the card reader. By completing both steps of the transaction simultaneously, we save half the amount of time.</p>
                            </div>
                            <div className="cs-impact-card">
                                <h3>85% Less Clicks on Bag Fees</h3>
                                <p>Going from 7 clicks to 1 isn’t just a quality-of-life change for cashiers. Complex interactions invite errors, which result in a customers being mistakenly overcharged and having to redo transactions. This loses time and damages brand image.</p>
                            </div>
                        </div>
                        <div className="cs-impact-image-container">
                            <img src="assets/images/pos/pos-terminal.png" alt="Improved POS Image" />
                        </div>
                    </div>

                    {/* Left out flowchart image if not available or just not originally coded in my typescript version? Wait, it is in original html:
                    <div class="cs-impact-flowchart">
                        <p class="cs-impact-flowchart-title">It’s not about prettier screens, a redesign would provide tangible business impact for Tommy Hilfiger:</p>
                        <img src="assets/images/pos/flowchart.svg" alt="Impact Flowchart" class="cs-impact-flowchart-img">
                    </div>
                    I will restore it exactly.
                    */}
                    <div className="cs-impact-flowchart">
                        <p className="cs-impact-flowchart-title">It’s not about prettier screens, a redesign would provide tangible business impact for Tommy Hilfiger:</p>
                        <img src="assets/images/pos/flowchart.svg" alt="Impact Flowchart" className="cs-impact-flowchart-img" />
                    </div>

                    {/* Bottom Block - Quotes */}
                    <div className="cs-impact-bottom-block">
                        <h4 className="cs-impact-outcome-title">Final Outcome</h4>
                        <div className="cs-impact-outcome-text">
                            <p>I presented this project to store-level management who applauded my efforts, showed interest in the redesign, and connected me to corporate. I got positive feedback from the head of HR who connected me to the North American Retail Operations team to whom I reached out multiple times but got ghosted.</p>
                        </div>
                        <div className="cs-impact-outcome-quotes">
                            <div className="cs-impact-quote-box">
                                <p className="cs-impact-quote">“During the holidays when we do line control, if checkout was faster, we could let more customers in to the store at a time and we would increase total profits”</p>
                                <p className="cs-impact-quote-author">— Store Manager</p>
                            </div>
                            <div className="cs-impact-quote-box">
                                <p className="cs-impact-quote">“This is awesome, right now we are using a program that’s like 10 years old”</p>
                                <p className="cs-impact-quote-author">— Sales Lead</p>
                            </div>
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
                <div className="cs-takeaways-grid">
                    <div className="cs-takeaway-card">
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon">
                                <FileText size={24} weight="regular" />
                            </span>
                            <h3>Research alone is not enough</h3>
                        </div>
                        <p>Already being an employee was the biggest strength of this project. I can’t imagine how I would’ve reached an effective solution without being fully immersed in the user’s shoes</p>
                    </div>
                    <div className="cs-takeaway-card">
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon">
                                <Wrench size={24} weight="regular" />
                            </span>
                            <h3>Seeking feedback early</h3>
                        </div>
                        <p>Had I not gone to my coworkers to test my first iterations, I would’ve missed several key features in this redesign. In this case the designer was a user, but not every user</p>
                    </div>
                    <div className="cs-takeaway-card">
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon">
                                <Megaphone size={24} weight="regular" />
                            </span>
                            <h3>Advocating for design</h3>
                        </div>
                        <p>I empathize with the fact that corporate or management didn’t ask me for this project and were ultimately uninterested in it. It’s up to the designer to communicate the value of their work.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
