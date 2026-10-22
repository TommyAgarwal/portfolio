import { motion, useMotionValue, useTransform, animate, Variants } from "framer-motion";
import Counter from "./Counter";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  TrendUp,
  Warning,
  CheckCircle,
  Clock,
  Devices,
  Globe,
  DeviceMobile,
  ArrowRight,
  ChartBar
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
        <polyline
          points="172 104 113.3 160 84 132"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </motion.g>
    </svg>
  );
};

/* Problem Section: Animated Warning Triangle with Trace */
const AnimatedWarningTriangle = ({ size = 28, className = "" }: { size?: number; className?: string }) => {
  const triangleVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const lineVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        delay: 0.25,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const dotVariants: Variants = {
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
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
      <motion.path
        d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={triangleVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.line
        x1="128"
        y1="144"
        x2="128"
        y2="104"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={lineVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.circle
        cx="128"
        cy="180"
        r="12"
        fill="currentColor"
        variants={dotVariants}
        initial={{ scale: 0, opacity: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
    </svg>
  );
};

/* Problem Section: Animated Clock with Trace */
const AnimatedClock = ({ size = 28, className = "" }: { size?: number; className?: string }) => {
  const circleVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  const handsVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        delay: 0.35,
        duration: 0.6,
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
      <motion.circle
        cx="128"
        cy="128"
        r="104"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={circleVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.polyline
        points="128 72 128 128 184 128"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={handsVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
    </svg>
  );
};

/* Constraints Section: Animated Barcode with Trace */
const AnimatedBarcode = ({ size = 32, className = "" }: { size?: number; className?: string }) => {
  const cornerVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const barVariants = (delay: number): Variants => ({
    animate: {
      pathLength: 1,
      transition: {
        delay,
        duration: 0.5,
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
      {/* Top Left Corner */}
      <motion.path
        d="M32,88V56a8,8,0,0,1,8-8H72"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={cornerVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      {/* Top Right Corner */}
      <motion.path
        d="M184,48h32a8,8,0,0,1,8,8V88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={cornerVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      {/* Bottom Left Corner */}
      <motion.path
        d="M32,168v32a8,8,0,0,0,8,8H72"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={cornerVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      {/* Bottom Right Corner */}
      <motion.path
        d="M224,168v32a8,8,0,0,1-8,8H184"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={cornerVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      {/* Barcode Vertical Bars */}
      <motion.line
        x1="80"
        y1="84"
        x2="80"
        y2="172"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="16"
        variants={barVariants(0.15)}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.line
        x1="112"
        y1="84"
        x2="112"
        y2="172"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="16"
        variants={barVariants(0.25)}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.line
        x1="144"
        y1="84"
        x2="144"
        y2="172"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="16"
        variants={barVariants(0.35)}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.line
        x1="176"
        y1="84"
        x2="176"
        y2="172"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="16"
        variants={barVariants(0.45)}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
    </svg>
  );
};

/* Constraints Section: Animated Device Mobile with Trace */
const AnimatedDeviceMobile = ({ size = 32, className = "" }: { size?: number; className?: string }) => {
  const phoneVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const lineVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
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
      {/* Phone Outline */}
      <motion.rect
        x="64"
        y="24"
        width="128"
        height="208"
        rx="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={phoneVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      {/* Screen Division / Speaker Top */}
      <motion.line
        x1="112"
        y1="56"
        x2="144"
        y2="56"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="16"
        variants={lineVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      {/* Bottom Home Indicator */}
      <motion.line
        x1="116"
        y1="200"
        x2="140"
        y2="200"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="16"
        variants={lineVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
    </svg>
  );
};

/* Constraints Section: Animated Globe (Standard Phosphor Globe) with Trace */
const AnimatedGlobe = ({ size = 32, className = "" }: { size?: number; className?: string }) => {
  const circleVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const latitudeVariants = (delay: number): Variants => ({
    animate: {
      pathLength: 1,
      transition: {
        delay,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  });

  const longitudeVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        delay: 0.35,
        duration: 0.6,
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
      {/* Outer Circumference Circle */}
      <motion.circle
        cx="128"
        cy="128"
        r="104"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={circleVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      {/* Top Latitude line curve */}
      <motion.path
        d="M48,88H208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={latitudeVariants(0.2)}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      {/* Bottom Latitude line curve */}
      <motion.path
        d="M48,168H208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={latitudeVariants(0.28)}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      {/* Center Ellipse Longitude */}
      <motion.ellipse
        cx="128"
        cy="128"
        rx="40"
        ry="104"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={longitudeVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
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

export default function RalphLaurenContent() {
  const problemRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  const problemActive = useIsActive(problemRef);
  const outcomeActive = useIsActive(outcomeRef);
  const solutionActive = useIsActive(solutionRef);

  const problemAnimate = problemActive ? "hover" : "initial";
  const outcomeAnimate = outcomeActive ? "hover" : "initial";
  const solutionAnimate = solutionActive ? "hover" : "initial";

  return (
    <div className="cs-wrapper cs-rl-theme">
      {/* Hero Section */}
      <header className="cs-hero">
        <div className="cs-hero-content">
          <div className="cs-hero-text">
            <p className="cs-meta">Ralph Lauren • Pitched October 2026</p>
            <h1 className="cs-title">
              Reducing friction in Ralph Lauren&rsquo;s customer loyalty signup
            </h1>
            <div className="cs-hero-tags">
              <span className="cs-tag">Onboarding</span>
              <span className="cs-tag">Service Design</span>
              <span className="cs-tag">Customer Loyalty</span>
            </div>
          </div>
          {/* Thumbnail as Hero Image with colored background frame */}
          <div className="cs-hero-image">
            <div
              className="w-full h-[280px] sm:h-[320px] rounded-[4px] p-5 flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: "rgba(32, 62, 94, 0.25)" }}
            >
              <div
                className="relative overflow-hidden rounded-[8px] shadow-sm transform-gpu will-change-transform aspect-[444/960] h-full w-auto max-w-full flex items-center justify-center"
                style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
              >
                <video
                  src="/assets/videos/PoloConnectDemo_card.mp4"
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
          <p className="cs-meta-value">3 Weeks</p>
        </div>
        <div className="cs-meta-col">
          <h3 className="cs-meta-label">Role</h3>
          <ul className="cs-meta-value">
            <li>Product Designer</li>
            <li>Service Designer</li>
            <li>Brand Ambassador</li>
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
            <li>Brand Ambassadors</li>
            <li>Store Manager</li>
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
                The signup process for Ralph Lauren&rsquo;s loyalty program is slow and confusing, requiring associates to hand-hold most customers through the process. This friction is especially troublesome when the signup happens at the register, often doubling or even tripling transaction time.
              </p>
            </motion.div>

            {/* Outcome Card */}
            <motion.div
              ref={outcomeRef}
              whileHover="hover"
              animate={outcomeAnimate}
              initial="initial"
              className="cs-card-outcome"
            >
              <div className="cs-card-header">
                <AnimatedChartLineUp size={24} className="flex-shrink-0" />
                <h3>Outcome</h3>
              </div>
              <div className="cs-stats-row">
                <div className="cs-stat">
                  <div className="cs-stat-value !normal-case">
                    <span><Counter value={29} /><span className="lowercase">s</span></span>
                  </div>
                  <span className="cs-stat-label">Average sign up time</span>
                </div>
              </div>
              <p className="cs-card-text">
                The store manager supported the redesign and expressed interest in sharing it with a broader audience. A report was sent to the regional manager and I&apos;m waiting to hear back, check back for updates!
              </p>
            </motion.div>
          </div>

          {/* Right Column: Solution */}
          <div className="cs-tldr-col-right">
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
                A streamlined onboarding flow which allows signups to be completed independently and more efficiently.
              </p>
              <div className="cs-solution-image-container">
                <img
                  src="assets/images/ralphlauren/badgeandform.png"
                  alt="Ralph Lauren badge and form preview"
                  className="w-full h-auto object-contain rounded-[4px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="cs-section cs-background">
        <h3 className="cs-section-subtitle">Background</h3>
        <h2 className="cs-section-title">What is Polo Connect and why is it important?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="cs-card p-6 border border-border bg-card-bg rounded-[4px] flex flex-col justify-center">
            <p className="text-text-secondary leading-relaxed">
              Polo Connect is Ralph Lauren&rsquo;s in-store, mobile-based customer appreciation program. Members are sent weekly coupons, updates, and store info through text and/or email.
            </p>
          </div>
          <div className="cs-card p-6 border border-border bg-card-bg rounded-[4px] flex flex-col justify-center">
            <p className="text-text-secondary leading-relaxed">
              As Ralph Lauren employees, we are encouraged to sign up every customer, which we do very successfully. The vast majority of daily transactions stem from existing or new members.
            </p>
          </div>
        </div>

        <div className="cs-bg-image-full my-8">
          <img
            src="assets/images/ralphlauren/backgroundimage.png"
            alt="Polo Connect Program Overview"
            className="w-full h-auto object-cover rounded-[4px] border border-border"
          />
        </div>
      </section>

      {/* Problem Breakdown Section */}
      <section className="cs-section cs-problem-breakdown">
        <h3 className="cs-section-subtitle">Problem</h3>
        <h2 className="cs-section-title">The Friction of Signup</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="cs-card p-6 border border-border bg-card-bg rounded-[4px]">
            <div className="flex items-center gap-3 mb-4 text-[#FF4D4D]">
              <AnimatedWarningTriangle size={28} className="flex-shrink-0" />
              <h3 className="font-sans text-[18px] font-bold text-black">Complex Multi-App Journey</h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Signing up takes <strong>10 Steps</strong>, goes through <strong>4 different apps</strong>, and often <strong>requires associate supervision</strong>.
            </p>
          </div>

          <div className="cs-card p-6 border border-border bg-card-bg rounded-[4px]">
            <div className="flex items-center gap-3 mb-4 text-[#FF4D4D]">
              <AnimatedClock size={28} className="flex-shrink-0" />
              <h3 className="font-sans text-[18px] font-bold text-black">High Transaction Overhead</h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              <strong>Most signups take longer than a minute</strong>, stalling checkout lines and frustrating guests.
            </p>
          </div>
        </div>

        <p className="cs-section-desc mt-10">
          It&rsquo;s not simply that the sign up is slow and complicated, it&rsquo;s the context of WHERE the friction occurs.
        </p>

        {/* Floor vs Register Card */}
        <div className="cs-card border border-border bg-card-bg rounded-[4px] p-6 mt-8">
          <h3 className="font-sans text-[20px] font-bold text-black mb-6 border-b border-border pb-3">
            1 minute on the sales floor &ne; 1 minute at the register
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[12px] uppercase text-[#396EFF] font-bold">Signup on the Sales Floor</span>
              <p className="text-text-secondary">
                Gives the salesperson a chance to connect with the guest. Conversation is expected, and friction is tolerable.
              </p>
            </div>
            <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-8">
              <span className="font-mono text-[12px] uppercase text-[#FF4D4D] font-bold">Signup at the Register</span>
              <p className="text-text-secondary">
                Cashier is busy with the transaction. Customer wants to leave. Friction creates a direct operational cost.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="cs-section-desc-light">
            Every additional minute spent enrolling a customer at checkout extends the transaction, occupies an associate, and increases wait times for everyone else in line.
          </p>
        </div>
      </section>

      {/* How Might We Section */}
      <section className="cs-section my-16">
        <div className="bg-[#0A1B38] rounded-[8px] py-24 px-8 md:px-16 flex flex-col items-center justify-center text-center w-full">
          <h2 className="font-sans text-[20px] md:text-[24px] font-normal leading-[1.4] text-white max-w-[700px] mx-auto">
            &ldquo;How might we optimize the Polo Connect signup so that it can be completed efficiently and independently?&rdquo;
          </h2>
        </div>
      </section>

      {/* Constraints & Assumptions */}
      <section className="cs-section cs-constraints">
        <h3 className="cs-section-subtitle">Constraints &amp; Assumptions</h3>
        <h2 className="cs-section-title">Working with the existing architecture in place</h2>
        <p className="cs-section-desc">
          Ralph Lauren&rsquo;s data collection is handled externally by a company called Wyng. This redesign assumes the following:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border border-border rounded-[4px] bg-card-bg flex flex-col gap-3">
            <div className="text-[#396EFF]"><AnimatedBarcode size={32} /></div>
            <h4 className="font-sans font-bold text-black text-[16px]">Identical Coupon Policy</h4>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              The customer is still in charge of their own coupons and must receive them either by text or email.
            </p>
          </div>

          <div className="p-6 border border-border rounded-[4px] bg-card-bg flex flex-col gap-3">
            <div className="text-[#396EFF]"><AnimatedDeviceMobile size={32} /></div>
            <h4 className="font-sans font-bold text-black text-[16px]">No Mandatory SMS replies</h4>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              Wyng&rsquo;s data collection service can work without requiring SMS replies during the onboarding flow.
            </p>
          </div>

          <div className="p-6 border border-border rounded-[4px] bg-card-bg flex flex-col gap-3">
            <div className="text-[#396EFF]"><AnimatedGlobe size={32} /></div>
            <h4 className="font-sans font-bold text-black text-[16px]">Global Compatibility</h4>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              International customers' data can be collected using the same QR-code as local customers.
            </p>
          </div>
        </div>
      </section>

      {/* Solution & Flows Section */}
      <section className="cs-section cs-solution-flows">
        <h3 className="cs-section-subtitle">Solution</h3>
        <h2 className="cs-section-title">An intuitive flow that works for all customers, anywhere in the store</h2>

        <div className="flex flex-col gap-12 mt-8">
          {/* Old Flow vs New Flow comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Old Flow Column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-bold text-[18px] text-black pb-2 border-b border-border flex items-center justify-between">
                <span>Old Flow</span>
                <span className="font-mono text-[12px] font-normal px-2 py-1 bg-red-100 text-red-700 rounded">10 Steps • 4 Apps</span>
              </h3>
              <ol className="flex flex-col gap-3">
                {[
                  "Open camera app, scan one of the QR-codes displayed around the store",
                  "QR-code opens a link (browser opens) then re-directs the user to their messages (asking Safari to open Messages)",
                  "Messaging app opens with a pre-written message 'POLO222' filled out to a number (89488)",
                  "The user manually sends the message, and receives an automated reply containing a link seconds later",
                  "The user taps the link, re-opening the browser and they are sent to a signup form",
                  "The user types each response (first name, last name, email, zip code, birthday MM/DD) and clicks submit",
                  "If valid, the page changes to: 'You're almost in, reply Y to the message you're about to receive'",
                  "After a few seconds, the user receives another text, goes back into messages, and replies 'Y'",
                  "After replying 'Y' the user receives another automated message containing a link. They click the link",
                  "The link opens their welcome coupon barcode via their smart wallet, shown to cashier at checkout"
                ].map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-[14px] text-text-secondary bg-card-bg p-3 border border-border-subtle rounded-[4px]">
                    <span className="font-mono font-bold text-red-500 shrink-0">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* New Flow Column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-bold text-[18px] text-black pb-2 border-b border-border flex items-center justify-between">
                <span>New Flow</span>
                <span className="font-mono text-[12px] font-normal px-2 py-1 bg-green-100 text-green-700 rounded">6 Steps • Streamlined</span>
              </h3>
              <ol className="flex flex-col gap-3">
                {[
                  "Open camera app, scan one of the QR-codes displayed around the store",
                  "Click the link, opens browser directly to the new signup page",
                  "Select USA vs International onboarding flow",
                  "Fill in the clean, respective form (email, phone number, name, zip, birthmonth, country)",
                  "Press submit, wait for coupon link in text/email",
                  "Open coupon link, show cashier barcode directly"
                ].map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-[14px] text-text-secondary bg-[#0A1B38]/5 p-3 border border-[#0A1B38]/10 rounded-[4px]">
                    <span className="font-mono font-bold text-[#0A1B38] shrink-0">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Usability Testing Section */}
      <section className="cs-section cs-testing">
        <h3 className="cs-section-subtitle">Testing</h3>
        <h2 className="cs-section-title">Validating that users can sign up faster and without guidance</h2>
        <div className="cs-bg-content-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 border border-border rounded-[4px] bg-card-bg flex flex-col gap-2">
              <span className="font-mono text-[12px] uppercase text-[#396EFF] font-bold">Average Completion Time</span>
              <div className="font-sans text-[36px] font-bold text-black flex items-center gap-1">
                <span>29s</span>
              </div>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Total average duration across all tested signups.
              </p>
            </div>

            <div className="p-6 border border-border rounded-[4px] bg-card-bg flex flex-col gap-2">
              <span className="font-mono text-[12px] uppercase text-[#396EFF] font-bold">Ease Score</span>
              <div className="font-sans text-[36px] font-bold text-black flex items-center gap-1">
                <span>4/5</span>
              </div>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Self-reported usability rating after onboarding completion.
              </p>
            </div>

            <div className="p-6 border border-border rounded-[4px] bg-card-bg flex flex-col gap-2">
              <span className="font-mono text-[12px] uppercase text-[#396EFF] font-bold">Confidence</span>
              <div className="font-sans text-[36px] font-bold text-black flex items-center gap-1">
                <span>3/5</span>
              </div>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Participant self-assurance during independent completion.
              </p>
            </div>
          </div>

          <p className="cs-section-desc-light mt-6 text-[14px] italic">
            Participants were given the test with no guidance and limited context, the surveys indicated that the lower confidence and ease scores were mostly due to a lack of understanding of what they were completing, a fault on my part for not providing ample context.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="cs-section cs-impact !mb-20">
        <h3 className="cs-section-subtitle">Impact</h3>
        <h2 className="cs-section-title">Did this work go anywhere?</h2>

        <div className="bg-[#0A1B38] rounded-[8px] py-16 px-8 md:px-16 flex flex-col items-center justify-center text-center w-full my-8">
          <blockquote className="font-sans text-[18px] md:text-[22px] font-normal leading-[1.5] text-white max-w-[800px] mx-auto italic">
            &ldquo;I was impressed by Tommy&apos;s initiative in identifying a real operational issue and turning it into a thoughtful, user-tested solution. I&apos;d love to see his recommendations reviewed for potential implementation.&rdquo;
          </blockquote>
          <p className="font-mono text-[13px] text-white/70 uppercase tracking-wider mt-6">
            — Josh Valdes, Store Manager
          </p>
        </div>

        <div className="cs-card border border-border bg-card-bg rounded-[4px] p-6 mt-6">
          <p className="text-text-secondary leading-relaxed text-[15px]">
            A report has been sent to the regional manager and we are currently waiting on a response. After hearing back from the regional manager, I intend to send the report to the corporate operations team for feedback and discuss possible implementation.
          </p>
        </div>
      </section>
    </div>
  );
}
