import { motion, useMotionValue, useTransform, animate, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
      <motion.g variants={bobVariants}>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="16"
        />
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
      <motion.g variants={bobVariants}>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeWidth="16"
        />
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
      <polyline
        points="224 208 32 208 32 48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
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

export default function EmbraceKongoContent() {
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);

  const problemActive = useIsActive(problemRef);
  const solutionActive = useIsActive(solutionRef);
  const outcomeActive = useIsActive(outcomeRef);

  const problemAnimate = problemActive ? "hover" : "initial";
  const solutionAnimate = solutionActive ? "hover" : "initial";
  const outcomeAnimate = outcomeActive ? "hover" : "initial";

  return (
    <div className="cs-wrapper cs-ek-theme">
      {/* Hero Section */}
      <header className="cs-hero">
        <div className="cs-hero-content">
          <div className="cs-hero-text">
            <p className="cs-meta">Freelance • Shipped October 2026</p>
            <h1 className="cs-title">
              Strategy and web design for launch of a non-profit cultural immersion program
            </h1>
            <div className="cs-hero-tags">
              <span className="cs-tag">Web Design</span>
              <span className="cs-tag">Brand Design</span>
              <span className="cs-tag">Client Work</span>
            </div>
          </div>
          <div className="cs-hero-image">
            <div
              className="w-full h-[280px] sm:h-[320px] rounded-[4px] p-5 flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: "rgba(252, 86, 5, 0.25)" }}
            >
              <div
                className="relative overflow-hidden rounded-[8px] shadow-sm transform-gpu will-change-transform aspect-[960/468] w-full h-auto max-h-full flex items-center justify-center"
                style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
              >
                <video
                  src="/assets/videos/embracekongolanding_card.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[8px] transform-gpu will-change-transform backface-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Metadata Grid */}
      <section className="cs-metadata">
        <div className="cs-meta-col">
          <h3 className="cs-meta-label">Timeline</h3>
          <p className="cs-meta-value">2 Weeks</p>
        </div>
        <div className="cs-meta-col">
          <h3 className="cs-meta-label">Role</h3>
          <ul className="cs-meta-value">
            <li>UX/UI Design</li>
            <li>Frontend Dev</li>
            <li>Brand Design</li>
          </ul>
        </div>
        <div className="cs-meta-col">
          <h3 className="cs-meta-label">Tools</h3>
          <ul className="cs-meta-value">
            <li>
              <div className="cs-tool-hover">
                <span className="cs-tool-name">Antigravity</span>
                <div className="cs-tool-logo">
                  <img src="/assets/images/logos/antigravitylogo.png" alt="Antigravity" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="cs-meta-col">
          <h3 className="cs-meta-label">Collaborators</h3>
          <ul className="cs-meta-value">
            <li>2 Trip Organizers</li>
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
                  <AnimatedWarningCircle size={24} className="flex-shrink-0" />
                  <h3>Problem</h3>
                </div>
                <p className="cs-card-text">
                  The organizers of Embrace Kongo lacked a centralized hub to display information about their upcoming travel experience.
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
                  <AnimatedCheckCircle size={24} className="flex-shrink-0" />
                  <h3>Solution</h3>
                </div>
                <p className="cs-card-text">
                  A custom-built website with a clear CTA for their upcoming info session and the pertinant trip details.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Outcome */}
            <div className="cs-tldr-col-right">
              <motion.div
                ref={outcomeRef}
                whileHover="hover"
                animate={outcomeAnimate}
                initial="initial"
                className="cs-card-outcome h-full"
              >
                <div className="cs-card-header">
                  <AnimatedChartLineUp size={24} className="flex-shrink-0" />
                  <h3>Outcome</h3>
                </div>
                <div className="cs-stats-row">
                  <div className="cs-stat">
                    <div className="cs-stat-value">
                      <span><Counter value={13} /></span>
                    </div>
                    <span className="cs-stat-label">Info Session Signups</span>
                  </div>
                </div>
                <p className="cs-card-text">
                  The project is still ongoing but in it&apos;s current state, the site has helped generate 13 signups for the informational session.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* In Progress Notice */}
      <section className="cs-section pt-0 pb-16 flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[12px] text-[#2c2f3a] bg-white/70 border border-[#bfc2d1] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
          <span>Project still ongoing, full case study coming soon...</span>
        </div>
      </section>
    </div>
  );
}
