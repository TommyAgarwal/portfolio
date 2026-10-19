"use client"

import { useEffect, useRef } from "react"
import { motion, Transition } from "framer-motion"
import { cn } from "@/lib/utils"

interface UnderlineProps {
  /**
   * The content to be displayed and animated
   */
  children: React.ReactNode

  /**
   * Optional class name for styling
   */
  className?: string

  /**
   * Animation transition configuration
   * @default { duration: 0.25, ease: "easeInOut" }
   */
  transition?: Transition

  /**
   * Height of the underline as a ratio of font size
   * @default 0.1
   */
  underlineHeightRatio?: number

  /**
   * Padding of the underline as a ratio of font size
   * @default 0.01
   */
  underlinePaddingRatio?: number
}

const CenterUnderline = ({
  children,
  className,
  transition = { duration: 0.25, ease: "easeInOut" },
  underlineHeightRatio = 0.1,
  underlinePaddingRatio = 0.01,
  ...props
}: UnderlineProps) => {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const updateUnderlineStyles = () => {
      if (textRef.current) {
        const fontSize = parseFloat(getComputedStyle(textRef.current).fontSize)
        const underlineHeight = fontSize * underlineHeightRatio
        const underlinePadding = fontSize * underlinePaddingRatio
        textRef.current.style.setProperty(
          "--underline-height",
          `${underlineHeight}px`
        )
        textRef.current.style.setProperty(
          "--underline-padding",
          `${underlinePadding}px`
        )
      }
    }

    updateUnderlineStyles()
    window.addEventListener("resize", updateUnderlineStyles)

    return () => window.removeEventListener("resize", updateUnderlineStyles)
  }, [underlineHeightRatio, underlinePaddingRatio])

  const underlineVariants = {
    hidden: {
      width: 0,
      originX: 0.5,
    },
    visible: {
      width: "100%",
      transition: transition,
    },
  }

  return (
    <motion.span
      className={cn("relative inline-block cursor-pointer", className)}
      whileHover="visible"
      initial="hidden"
      ref={textRef}
      {...props}
    >
      <span>{children}</span>
      <motion.div
        className="absolute left-1/2 bg-current -translate-x-1/2"
        style={{
          height: "var(--underline-height)",
          bottom: "calc(-1 * var(--underline-padding))",
        }}
        variants={underlineVariants}
        aria-hidden="true"
      />
    </motion.span>
  )
}

CenterUnderline.displayName = "CenterUnderline"

export default CenterUnderline
