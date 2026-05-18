import { motion, useMotionValue, useTransform, animate, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
    ArrowUpRight,
    ArrowUp,
    ArrowDown
} from "@phosphor-icons/react";

const AnimatedWarningCircle = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const bobVariants: Variants = {
    initial: { y: 0 },
    hover: {
      y: [0, -6, 0],
      transition: {
        delay: 0.4,
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const lineVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const dotVariants: Variants = {
    initial: { scale: 1, opacity: 1 },
    hover: {
      scale: [0, 1.2, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none" />
      {/* Entire Icon Group (Animated Bobbing) */}
      <motion.g variants={bobVariants}>
        {/* Circle */}
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="16"
        />
        {/* Exclamation line */}
        <motion.line
          x1="128"
          y1="136"
          x2="128"
          y2="80"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
          variants={lineVariants}
        />
        {/* Exclamation dot */}
        <motion.circle
          cx="128"
          cy="172"
          r="12"
          fill="currentColor"
          variants={dotVariants}
        />
      </motion.g>
    </svg>
  );
};

const AnimatedCheckCircle = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const bobVariants: Variants = {
    initial: { y: 0 },
    hover: {
      y: [0, -4, 0],
      transition: {
        delay: 0.4,
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const checkVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none" />
      {/* Entire Icon Group (Animated Bobbing) */}
      <motion.g variants={bobVariants}>
        {/* Circle */}
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeWidth="16"
        />
        {/* Check */}
        <motion.polyline
          points="88 136 112 160 168 104"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
          variants={checkVariants}
        />
      </motion.g>
    </svg>
  );
};

const AnimatedChartLineUp = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const chartVariants: Variants = {
    initial: {
      pathLength: 1
    },
    hover: {
      pathLength: [0, 1, 1, 0],
      transition: {
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.45, 0.55, 1]
      }
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none" />
      {/* Axes (Static) */}
      <polyline
        points="224 208 32 208 32 48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      {/* Arrow Segment Combined (Animated) */}
      <motion.path
        d="M32 176 L96 112 L128 144 L200 72 M200 112 L200 72 L160 72"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={chartVariants}
      />
    </svg>
  );
};

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

const AnimatedOpenAiLogo = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const createPetalVariants = (delay: number): Variants => ({
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        delay,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none"/>
      <motion.path
        d="M104,141.86V77.19L148.5,51.5a48,48,0,0,1,66.4,64.08"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPetalVariants(0.0)}
      />
      <motion.path
        d="M128,155.71,72,123.38V72a48,48,0,0,1,88.69-25.47"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPetalVariants(0.1)}
      />
      <motion.path
        d="M152,141.86,96,174.19,51.5,148.5A48,48,0,0,1,73.79,59"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPetalVariants(0.2)}
      />
      <motion.path
        d="M152,114.14v64.67L107.5,204.5a48,48,0,0,1-66.4-64.08"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPetalVariants(0.3)}
      />
      <motion.path
        d="M128,100.29l56,32.33V184a48,48,0,0,1-88.69,25.47"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPetalVariants(0.4)}
      />
      <motion.path
        d="M104,114.14l56-32.33,44.5,25.69a48,48,0,0,1-22.29,89.55"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPetalVariants(0.5)}
      />
    </svg>
  );
};

const AnimatedFigmaLogo = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const createPartVariants = (delay: number): Variants => ({
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        delay,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none" />
      {/* Top Left Shape */}
      <motion.path
        d="M136,32H96a32,32,0,0,0,0,64h40Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPartVariants(0.0)}
      />
      {/* Top Right Shape */}
      <motion.path
        d="M136,96h32a32,32,0,0,0,0-64H136"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPartVariants(0.15)}
      />
      {/* Middle Left Shape */}
      <motion.path
        d="M136,96H96a32,32,0,0,0,0,64h40Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPartVariants(0.3)}
      />
      {/* Middle Right Circle */}
      <motion.circle
        cx="168"
        cy="128"
        r="32"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPartVariants(0.45)}
      />
      {/* Bottom Left Shape */}
      <motion.path
        d="M136,160H100a36,36,0,1,0,36,36Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createPartVariants(0.6)}
      />
    </svg>
  );
};

const AnimatedCode = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const leftVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const middleVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        delay: 0.25,
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const rightVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        delay: 0.5,
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none" />
      <motion.polyline
        points="64 88 16 128 64 168"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={leftVariants}
      />
      <motion.line
        x1="160"
        y1="40"
        x2="96"
        y2="216"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={middleVariants}
      />
      <motion.polyline
        points="192 88 240 128 192 168"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={rightVariants}
      />
    </svg>
  );
};

const AnimatedStarFour = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const starVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none"/>
      <motion.path
        d="M159.82,159.82l-24.34,66.94a8,8,0,0,1-15,0L96.18,159.82,29.24,135.48a8,8,0,0,1,0-15L96.18,96.18l24.34-66.94a8,8,0,0,1,15,0l24.34,66.94,66.94,24.34a8,8,0,0,1,0,15Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={starVariants}
      />
    </svg>
  );
};

const AnimatedHeart = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const heartVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none"/>
      <motion.path
        d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={heartVariants}
      />
    </svg>
  );
};

const AnimatedMagicWand = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const wandVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const highlightVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        delay: 0.2,
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const createSparkleVariants = (delay: number): Variants => ({
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        delay,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none" />
      {/* Sparkle 1 (middle right) */}
      <motion.line
        x1="216"
        y1="128"
        x2="216"
        y2="176"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createSparkleVariants(0.45)}
      />
      <motion.line
        x1="192"
        y1="152"
        x2="240"
        y2="152"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createSparkleVariants(0.45)}
      />
      {/* Sparkle 2 (top left) */}
      <motion.line
        x1="80"
        y1="40"
        x2="80"
        y2="88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createSparkleVariants(0.3)}
      />
      <motion.line
        x1="56"
        y1="64"
        x2="104"
        y2="64"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createSparkleVariants(0.3)}
      />
      {/* Sparkle 3 (bottom middle) */}
      <motion.line
        x1="168"
        y1="184"
        x2="168"
        y2="216"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createSparkleVariants(0.6)}
      />
      <motion.line
        x1="152"
        y1="200"
        x2="184"
        y2="200"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={createSparkleVariants(0.6)}
      />
      {/* Highlight inside wand */}
      <motion.line
        x1="144"
        y1="80"
        x2="176"
        y2="112"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={highlightVariants}
      />
      {/* Wand Body */}
      <motion.rect
        x="21.49"
        y="105.37"
        width="213.02"
        height="45.25"
        rx="8"
        transform="translate(-53.02 128) rotate(-45)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={wandVariants}
      />
    </svg>
  );
};

function useIsActive(ref: React.RefObject<HTMLElement | null>) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        setIsActive(element.classList.contains("is-active"));

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsActive(element.classList.contains("is-active"));
                }
            });
        });

        observer.observe(element, { attributes: true });
        return () => observer.disconnect();
    }, [ref]);

    return isActive;
}

export default function GrammyArtistContent() {
    const problemRef = useRef<HTMLDivElement>(null);
    const solutionRef = useRef<HTMLDivElement>(null);
    const outcomeRef = useRef<HTMLDivElement>(null);
    const workflow1Ref = useRef<HTMLDivElement>(null);
    const workflow2Ref = useRef<HTMLDivElement>(null);
    const workflow3Ref = useRef<HTMLDivElement>(null);

    const problemActive = useIsActive(problemRef);
    const solutionActive = useIsActive(solutionRef);
    const outcomeActive = useIsActive(outcomeRef);
    const workflow1Active = useIsActive(workflow1Ref);
    const workflow2Active = useIsActive(workflow2Ref);
    const workflow3Active = useIsActive(workflow3Ref);

    const problemAnimate = problemActive ? "hover" : "initial";
    const solutionAnimate = solutionActive ? "hover" : "initial";
    const outcomeAnimate = outcomeActive ? "hover" : "initial";
    const workflow1Animate = workflow1Active ? "hover" : "initial";
    const workflow2Animate = workflow2Active ? "hover" : "initial";
    const workflow3Animate = workflow3Active ? "hover" : "initial";

    const takeaway1Ref = useRef<HTMLDivElement>(null);
    const takeaway2Ref = useRef<HTMLDivElement>(null);
    const takeaway3Ref = useRef<HTMLDivElement>(null);

    const takeaway1Active = useIsActive(takeaway1Ref);
    const takeaway2Active = useIsActive(takeaway2Ref);
    const takeaway3Active = useIsActive(takeaway3Ref);

    const takeaway1Animate = takeaway1Active ? "hover" : "initial";
    const takeaway2Animate = takeaway2Active ? "hover" : "initial";
    const takeaway3Animate = takeaway3Active ? "hover" : "initial";

    return (
        <div className="cs-wrapper cs-wd-theme">
            {/* Hero Section */}
            <header className="cs-hero">
                <div className="cs-hero-content">
                    <div className="cs-hero-text">
                        <p className="cs-meta">Freelance • Shipped October 2025</p>
                        <h1 className="cs-title">
                            Boosting Grammy Artist's audience conversion through a website redesign
                        </h1>
                    </div>
                    <div className="cs-hero-image">
                        <img src="assets/images/webdesign/grammyheroimage.png" alt="Web Design Case Study" className="w-full h-full object-cover block" />
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
                                    <img src="/assets/images/logos/figmamakelogo.png" alt="Figma" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cs-tool-hover">
                                <span className="cs-tool-name">ChatGPT</span>
                                <div className="cs-tool-logo">
                                    <img src="/assets/images/logos/chatgptlogo.png" alt="ChatGPT" />
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
                            <motion.div
                                ref={problemRef}
                                whileHover="hover"
                                animate={problemAnimate}
                                initial="initial"
                                className="cs-card-problem"
                            >
                                <div className="cs-card-header">
                                    <AnimatedWarningCircle size={24} />
                                    <h3>Problem</h3>
                                </div>
                                <p className="cs-card-text">
                                    Grammy Artist's old website was missing clear CTAs and didn’t mesh visually with his artistic identity.
                                </p>
                            </motion.div>
                            {/* Solution Card */}
                            <motion.div
                                ref={solutionRef}
                                whileHover="hover"
                                animate={solutionAnimate}
                                initial="initial"
                                className="cs-card-solution"
                            >
                                <div className="cs-card-header">
                                    <AnimatedCheckCircle size={24} />
                                    <h3>Solution</h3>
                                </div>
                                <p className="cs-card-text">
                                    A custom-built, dynamic website consistent with the artist’s brand aesthetic, a revamped subscriber newsletter, and donation integration.
                                </p>
                            </motion.div>
                        </div>
                        {/* Right Column: Outcome (the blue-er section) */}
                        <div className="cs-tldr-col-right">
                            <motion.div
                                ref={outcomeRef}
                                whileHover="hover"
                                animate={outcomeAnimate}
                                initial="initial"
                                className="cs-card-outcome h-full"
                            >
                                <div className="cs-card-header">
                                    <AnimatedChartLineUp size={24} />
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
                            </motion.div>
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
                        <motion.div
                            ref={workflow1Ref}
                            whileHover="hover"
                            animate={workflow1Animate}
                            initial="initial"
                            className="cs-testing-item cs-workflow-item bg-card-bg-hover border border-border"
                        >
                            <div className="w-12 h-12 flex items-center justify-center shrink-0 text-text-primary">
                                <AnimatedOpenAiLogo size={40} />
                            </div>
                            <div className="cs-testing-text">
                                <h4 className="text-lg! mb-1 font-semibold!">Conversation → PRD</h4>
                                <p className="text-base! opacity-80 text-text-secondary">Synthesized conversation with client, reference sites, and competitive analysis into a PRD using ChatGPT.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            ref={workflow2Ref}
                            whileHover="hover"
                            animate={workflow2Animate}
                            initial="initial"
                            className="cs-testing-item cs-workflow-item bg-card-bg-hover border border-border"
                        >
                            <div className="w-12 h-12 flex items-center justify-center shrink-0 text-text-primary">
                                <AnimatedFigmaLogo size={40} />
                            </div>
                            <div className="cs-testing-text">
                                <h4 className="text-lg! mb-1 font-semibold!">PRD → Figma Make</h4>
                                <p className="text-base! opacity-80 text-text-secondary">Converted the PRD into a thorough Figma Make prompt.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            ref={workflow3Ref}
                            whileHover="hover"
                            animate={workflow3Animate}
                            initial="initial"
                            className="cs-testing-item cs-workflow-item bg-card-bg-hover border border-border"
                        >
                            <div className="w-12 h-12 flex items-center justify-center shrink-0 text-text-primary">
                                <AnimatedCode size={40} />
                            </div>
                            <div className="cs-testing-text">
                                <h4 className="text-lg! mb-1 font-semibold!">Figma Make → Manual Refining</h4>
                                <p className="text-base! opacity-80 text-text-secondary">General Troubleshooting, Restyling, CSS Tweaks.</p>
                            </div>
                        </motion.div>
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
                    <motion.div
                        ref={takeaway1Ref}
                        whileHover="hover"
                        animate={takeaway1Animate}
                        initial="initial"
                        className="cs-takeaway-card"
                    >
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon text-text-primary">
                                <AnimatedStarFour size={24} />
                            </span>
                            <h3>Working with AI-Design tools</h3>
                        </div>
                        <p>This project was my introduction to using an AI Design tool. I’m not sure if I would use Figma Make for a 0-1 project again but, I’m excited to lean into my CS background and work with more dev-focused tools like Cursor and Claude.</p>
                    </motion.div>
                    <motion.div
                        ref={takeaway2Ref}
                        whileHover="hover"
                        animate={takeaway2Animate}
                        initial="initial"
                        className="cs-takeaway-card"
                    >
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon text-text-primary">
                                <AnimatedHeart size={24} />
                            </span>
                            <h3>Defining the feel</h3>
                        </div>
                        <p>I took my time analyzing references and understanding the client’s vision. Using ChatGPT to prompt Figma Make was incredibly effective in maintaining a consistent aesthetic across the site.</p>
                    </motion.div>
                    <motion.div
                        ref={takeaway3Ref}
                        whileHover="hover"
                        animate={takeaway3Animate}
                        initial="initial"
                        className="cs-takeaway-card"
                    >
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon text-text-primary">
                                <AnimatedMagicWand size={24} />
                            </span>
                            <h3>Using AI to animate micro interactions</h3>
                        </div>
                        <p>Linking Figma Make with Framer motion made it super easy to inject subtle motion and make the site feel more dynamic.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
