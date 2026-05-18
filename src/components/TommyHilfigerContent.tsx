import { motion, useMotionValue, useTransform, animate, Variants } from "framer-motion";
import Counter from "./Counter";
import { useEffect, useRef, useState } from "react";
import {
    ArrowDown,
    TrendUp
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

const AnimatedWarningTriangle = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
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
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dotVariants: Variants = {
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
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
      {/* Triangle Outline */}
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
      {/* Line inside */}
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
      {/* Dot inside */}
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

const AnimatedListChecks = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const check1Variants: Variants = {
    animate: {
      pathLength: [0, 1, 1, 0],
      transition: {
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.3, 0.7, 1]
      }
    }
  };

  const check2Variants: Variants = {
    animate: {
      pathLength: [0, 0, 1, 1, 0],
      transition: {
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.55, 0.75, 1]
      }
    }
  };

  const check3Variants: Variants = {
    animate: {
      pathLength: [0, 0, 1, 1, 0],
      transition: {
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 0.8, 0.9, 1]
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
      {/* Top text line (Static) */}
      <line
        x1="128"
        y1="64"
        x2="216"
        y2="64"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      {/* Middle text line (Static) */}
      <line
        x1="128"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      {/* Bottom text line (Static) */}
      <line
        x1="128"
        y1="192"
        x2="216"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      {/* Top check polyline (Animated) */}
      <motion.polyline
        points="40 64 56 80 88 48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={check1Variants}
        animate="animate"
        initial={{ pathLength: 0 }}
      />
      {/* Middle check polyline (Animated) */}
      <motion.polyline
        points="40 128 56 144 88 112"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={check2Variants}
        animate="animate"
        initial={{ pathLength: 0 }}
      />
      {/* Bottom check polyline (Animated) */}
      <motion.polyline
        points="40 192 56 208 88 176"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={check3Variants}
        animate="animate"
        initial={{ pathLength: 0 }}
      />
    </svg>
  );
};
const AnimatedFileText = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const outlineVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const polyVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const line1Variants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        delay: 0.4,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const line2Variants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
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
        d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={outlineVariants}
      />
      <motion.polyline
        points="152 32 152 88 208 88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={polyVariants}
      />
      <motion.line
        x1="96"
        y1="136"
        x2="160"
        y2="136"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={line1Variants}
      />
      <motion.line
        x1="96"
        y1="168"
        x2="160"
        y2="168"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={line2Variants}
      />
    </svg>
  );
};

const AnimatedWrench = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const wrenchVariants: Variants = {
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
      <rect width="256" height="256" fill="none" />
      <motion.path
        d="M104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-90.29,80L73,217A24,24,0,0,1,39,183Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={wrenchVariants}
      />
    </svg>
  );
};

const AnimatedMegaphone = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const hornVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1],
      transition: {
        delay: 0.3,
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
      {/* Handle */}
      <motion.path
        d="M160,80V200.67a8,8,0,0,0,3.56,6.65l11,7.33a8,8,0,0,0,12.2-4.72L200,160"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={handleVariants}
      />
      {/* Horn (Megaphone body) */}
      <motion.path
        d="M40,200a8,8,0,0,0,13.15,6.12C105.55,162.16,160,160,160,160h40a40,40,0,0,0,0-80H160S105.55,77.84,53.15,33.89A8,8,0,0,0,40,40Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={hornVariants}
      />
    </svg>
  );
};

const AnimatedCheckFat = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const checkVariants: Variants = {
    animate: {
      pathLength: 1,
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
      <rect width="256" height="256" fill="none" />
      <motion.path
        d="M104,147.43l98.34-97.09a8,8,0,0,1,11.32,0l24,23.6a8,8,0,0,1,0,11.32l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={checkVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
    </svg>
  );
};

const AnimatedFlag = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const poleVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const bannerVariants: Variants = {
    animate: {
      pathLength: 1,
      transition: {
        delay: 0.3,
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
      {/* Pole (Animated) */}
      <motion.line
        x1="48"
        y1="224"
        x2="48"
        y2="56"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={poleVariants}
        initial={{ pathLength: 0 }}
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      />
      {/* Banner (Animated) */}
      <motion.path
        d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={bannerVariants}
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

const AnimatedChats = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const topBubbleVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1, 1, 0],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.45, 0.7, 1]
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
      {/* Top Bubble (Animated) */}
      <motion.path
        d="M71.58,144,32,176V48a8,8,0,0,1,8-8H168a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={topBubbleVariants}
      />
      {/* Bottom Bubble (Static) */}
      <path
        d="M80,144v40a8,8,0,0,0,8,8h96.42L224,224V96a8,8,0,0,0-8-8H176"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  );
};

const AnimatedClipboardText = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const topLineVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1, 1, 0, 0],
      transition: {
        duration: 2.0,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.35, 0.65, 0.8, 1]
      }
    }
  };

  const bottomLineVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 0, 1, 1, 0],
      transition: {
        duration: 2.0,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.35, 0.7, 0.85, 1]
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
      {/* Clipboard Board Outline (Static) */}
      <path
        d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      {/* Board Handle (Static) */}
      <path
        d="M88,72V64a40,40,0,0,1,80,0v8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      {/* Top text line (Animated) */}
      <motion.line
        x1="96"
        y1="120"
        x2="160"
        y2="120"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={topLineVariants}
      />
      {/* Bottom text line (Animated) */}
      <motion.line
        x1="96"
        y1="152"
        x2="160"
        y2="152"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={bottomLineVariants}
      />
    </svg>
  );
};

const AnimatedEyes = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const pupilVariants: Variants = {
    initial: { pathLength: 1 },
    hover: {
      pathLength: [0, 1, 1, 0],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.45, 0.7, 1]
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
      {/* Outer Left Eye Shape (Static) */}
      <ellipse
        cx="80"
        cy="128"
        rx="48"
        ry="88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      {/* Outer Right Eye Shape (Static) */}
      <ellipse
        cx="176"
        cy="128"
        rx="48"
        ry="88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      {/* Left Pupil Circle (Animated) */}
      <motion.circle
        cx="56"
        cy="128"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={pupilVariants}
      />
      {/* Right Pupil Circle (Animated) */}
      <motion.circle
        cx="152"
        cy="128"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={pupilVariants}
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

export default function TommyHilfigerContent() {
    const problemRef = useRef<HTMLDivElement>(null);
    const outcomeRef = useRef<HTMLDivElement>(null);
    const solutionRef = useRef<HTMLDivElement>(null);
    const chatsRef = useRef<HTMLDivElement>(null);
    const clipboardRef = useRef<HTMLDivElement>(null);
    const eyesRef = useRef<HTMLDivElement>(null);
    const takeaway1Ref = useRef<HTMLDivElement>(null);
    const takeaway2Ref = useRef<HTMLDivElement>(null);
    const takeaway3Ref = useRef<HTMLDivElement>(null);

    const problemActive = useIsActive(problemRef);
    const outcomeActive = useIsActive(outcomeRef);
    const solutionActive = useIsActive(solutionRef);
    const chatsActive = useIsActive(chatsRef);
    const clipboardActive = useIsActive(clipboardRef);
    const eyesActive = useIsActive(eyesRef);
    const takeaway1Active = useIsActive(takeaway1Ref);
    const takeaway2Active = useIsActive(takeaway2Ref);
    const takeaway3Active = useIsActive(takeaway3Ref);

    const problemAnimate = problemActive ? "hover" : "initial";
    const outcomeAnimate = outcomeActive ? "hover" : "initial";
    const solutionAnimate = solutionActive ? "hover" : "initial";
    const chatsAnimate = chatsActive ? "hover" : "initial";
    const clipboardAnimate = clipboardActive ? "hover" : "initial";
    const eyesAnimate = eyesActive ? "hover" : "initial";
    const takeaway1Animate = takeaway1Active ? "hover" : "initial";
    const takeaway2Animate = takeaway2Active ? "hover" : "initial";
    const takeaway3Animate = takeaway3Active ? "hover" : "initial";

    return (
        <div className="cs-wrapper cs-th-theme">
            {/* Hero Section */}
            <header className="cs-hero">
                <div className="cs-hero-content">
                    <div className="cs-hero-text">
                        <p className="cs-meta">Tommy Hilfiger • Pitched June 2025</p>
                        <h1 className="cs-title">
                            Redesigned retail Point-of-Sale dashboard to increase transaction speed
                        </h1>
                    </div>
                    <div className="cs-hero-image">
                        <img src="assets/images/pos/tommyheroimage.png" alt="Tommy Hilfiger POS Redesign" />
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
                                    <img src="/assets/images/logos/figmalogo.png" alt="Figma" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cs-tool-hover">
                                <span className="cs-tool-name">Adobe Photoshop</span>
                                <div className="cs-tool-logo">
                                    <img src="/assets/images/logos/photoshoplogo.png" alt="Adobe Photoshop" />
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
                        <li>HR Director</li>
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
                                A slow, outdated POS system that confused both cashiers and customers,
                                negatively impacting the business&apos;s transaction speed.
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
                                I synthesized first hand research, user interviews, and a UX audit into
                                high fidelity mockups for a new POS and a reimagined checkout experience.
                            </p>
                            <div className="cs-solution-image-container">
                                <img src="assets/images/pos/main-4.png" alt="Solution Preview" className="cs-solution-img" />
                            </div>
                        </motion.div>
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
                        <img src="assets/images/pos/pos-thumbnail.png" alt="POS Hardware" className="cs-hardware-img" />
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
                    <motion.div
                        ref={chatsRef}
                        whileHover="hover"
                        animate={chatsAnimate}
                        initial="initial"
                        className="cs-card cs-research-card"
                    >
                        <AnimatedChats size={64} />
                        <p>Informal interviews (conversations with coworkers)</p>
                    </motion.div>
                    <motion.div
                        ref={clipboardRef}
                        whileHover="hover"
                        animate={clipboardAnimate}
                        initial="initial"
                        className="cs-card cs-research-card"
                    >
                        <AnimatedClipboardText size={64} />
                        <p>Self-recorded data of customer behavior & patterns</p>
                    </motion.div>
                    <motion.div
                        ref={eyesRef}
                        whileHover="hover"
                        animate={eyesAnimate}
                        initial="initial"
                        className="cs-card cs-research-card"
                    >
                        <AnimatedEyes size={64} />
                        <p>Intentional observation of the checkout interaction</p>
                    </motion.div>
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
                            <AnimatedWarningTriangle size={24} className="flex-shrink-0" />
                            <h3>Adding a 10¢ bag fee takes SEVEN clicks</h3>
                        </div>
                        <p>
                            <strong>45% of customers choose to buy a bag.</strong> A key interaction like this must be
                            frictionless. This was the most common pain point amongst cashiers.
                        </p>
                    </div>
                    <div className="cs-card cs-audit-card cs-card-danger">
                        <div className="cs-card-header">
                            <AnimatedWarningTriangle size={24} className="flex-shrink-0" />
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
                                <AnimatedListChecks size={24} className="flex-shrink-0" />
                                <h3>Redesign Goals</h3>
                            </div>
                            <ol>
                                <li>1. Refine and regroup the menus so that most transactions can be completed with ZERO navigation</li>
                                <li>2. Include the bag-fee as part of the core interaction instead of a lengthy detour</li>
                                <li>3. Reimagine the checkout flow to accommodate the loyalty program instead of tacking it onto the end</li>
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
                            <AnimatedCheckFat size={24} className="flex-shrink-0" />
                            <h3>What worked well</h3>
                        </div>
                        <div className="cs-testing-items">
                            <div className="cs-testing-item bg-card-bg">
                                <div className="cs-testing-text">
                                    <h4>Smarter layout, less clicks</h4>
                                    <p>Users preferred the menu-less layout which removed unnecessary clicks and negated the need to search for functions.</p>
                                </div>
                            </div>
                            <div className="cs-testing-item bg-card-bg">
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
                            </div>
                        </div>
                    </div>

                    {/* What needed to be improved */}
                    <div className="cs-card cs-testing-improve cs-card-danger">
                        <div className="cs-card-header justify-center">
                            <AnimatedFlag size={24} className="flex-shrink-0" />
                            <h3>What needed to be improved</h3>
                        </div>
                        <div className="cs-testing-items">
                            <div className="cs-testing-item bg-card-bg">
                                <div className="cs-testing-text">
                                    <h4>Button Size & Clickability</h4>
                                    <p>Our POS has an 18 inch touchscreen monitor, the buttons needed to be better sized and have increased padding in order to be easily clicked.</p>
                                </div>
                            </div>
                            <div className="cs-testing-item bg-card-bg">
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

                        {/* Responsive Card-based Flowchart */}
                        <div className="cs-flow-container">
                            <div className="cs-flow-node cs-flow-node-main cs-flow-start">
                                <span>An improved POS would've lead to...</span>
                            </div>

                            <div className="cs-flow-grid">
                                {/* Track 1: Business */}
                                <div className="cs-flow-track">
                                    <div className="cs-flow-label">FOR THE BUSINESS</div>
                                    <div className="cs-flow-card">Faster Transactions</div>
                                    <div className="cs-flow-card">Shorter Lines</div>
                                    <div className="cs-flow-card">Higher Store Traffic</div>
                                </div>

                                {/* Track 2: Users */}
                                <div className="cs-flow-track">
                                    <div className="cs-flow-label">FOR USERS</div>
                                    <div className="cs-flow-card">Higher Confidence</div>
                                    <div className="cs-flow-card">More Cashiers Trained</div>
                                    <div className="cs-flow-card">More Store Coverage</div>
                                </div>

                                {/* Track 3: Customers */}
                                <div className="cs-flow-track">
                                    <div className="cs-flow-label">FOR CUSTOMERS</div>
                                    <div className="cs-flow-card">Quicker Checkout</div>
                                    <div className="cs-flow-card">Better Customer Experience</div>
                                    <div className="cs-flow-card">Better Brand Reputation</div>
                                </div>
                            </div>

                            <div className="cs-flow-node cs-flow-node-main cs-flow-end">
                                <div className="cs-flow-revenue-content">
                                    <span>Which all, in turn, would've lead to MORE REVENUE</span>
                                    <TrendUp size={32} weight="bold" />
                                </div>
                            </div>
                        </div>
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
                    <motion.div
                        ref={takeaway1Ref}
                        whileHover="hover"
                        animate={takeaway1Animate}
                        initial="initial"
                        className="cs-takeaway-card"
                    >
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon">
                                <AnimatedFileText size={24} className="flex-shrink-0" />
                            </span>
                            <h3>Research alone is not enough</h3>
                        </div>
                        <p>Already being an employee was the biggest strength of this project. I can’t imagine how I would’ve reached an effective solution without being fully immersed in the user’s shoes</p>
                    </motion.div>
                    <motion.div
                        ref={takeaway2Ref}
                        whileHover="hover"
                        animate={takeaway2Animate}
                        initial="initial"
                        className="cs-takeaway-card"
                    >
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon">
                                <AnimatedWrench size={24} className="flex-shrink-0" />
                            </span>
                            <h3>Seeking feedback early</h3>
                        </div>
                        <p>Had I not gone to my coworkers to test my first iterations, I would’ve missed several key features in this redesign. In this case the designer was a user, but not every user</p>
                    </motion.div>
                    <motion.div
                        ref={takeaway3Ref}
                        whileHover="hover"
                        animate={takeaway3Animate}
                        initial="initial"
                        className="cs-takeaway-card"
                    >
                        <div className="cs-takeaway-header">
                            <span className="cs-takeaway-icon">
                                <AnimatedMegaphone size={24} className="flex-shrink-0" />
                            </span>
                            <h3>Advocating for design</h3>
                        </div>
                        <p>I empathize with the fact that corporate or management didn’t ask me for this project and were ultimately uninterested in it. It’s up to the designer to communicate the value of their work.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
