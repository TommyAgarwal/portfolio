"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, useAnimationControls, Transition } from "framer-motion"
import { cn } from "@/lib/utils"

interface ComesInGoesOutUnderlineProps {
  /**
   * The content to be displayed and animated
   */
  children: React.ReactNode

  /**
   * Direction of the animation
   * @default "left"
   */
  direction?: "left" | "right"

  /**
   * Optional class name for styling
   */
  className?: string

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

  /**
   * Animation transition configuration
   * @default { duration: 0.4, ease: "easeInOut" }
   */
  transition?: Transition

  /**
   * External trigger for the animation (e.g. from parent component hover)
   */
  isHovered?: boolean
}

const ComesInGoesOutUnderline = ({
  children,
  direction = "left",
  className,
  underlineHeightRatio = 0.1,
  underlinePaddingRatio = 0.01,
  transition = {
    duration: 0.4,
    ease: "easeInOut",
  },
  isHovered,
  ...props
}: ComesInGoesOutUnderlineProps) => {
  const controls = useAnimationControls()
  const blockedRef = useRef(false)
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

  const animate = useCallback(async () => {
    if (blockedRef.current) return

    blockedRef.current = true

    await controls.start({
      width: "100%",
      transition,
      transitionEnd: {
        left: direction === "left" ? "auto" : 0,
        right: direction === "left" ? 0 : "auto",
      },
    })

    await controls.start({
      width: 0,
      transition,
      transitionEnd: {
        left: direction === "left" ? 0 : "",
        right: direction === "left" ? "" : 0,
      },
    })

    blockedRef.current = false
  }, [controls, direction, transition])

  // Trigger animation if external isHovered prop changes to true
  useEffect(() => {
    if (isHovered) {
      animate()
    }
  }, [isHovered, animate])

  return (
    <motion.span
      className={cn("relative inline-block cursor-pointer", className)}
      onHoverStart={animate}
      ref={textRef}
      {...props}
    >
      <span>{children}</span>
      <motion.span
        className={cn("absolute bg-current w-0", {
          "left-0": direction === "left",
          "right-0": direction === "right",
        })}
        style={{
          height: "var(--underline-height)",
          bottom: "calc(-1 * var(--underline-padding))",
        }}
        animate={controls}
        aria-hidden="true"
      />
    </motion.span>
  )
}

ComesInGoesOutUnderline.displayName = "ComesInGoesOutUnderline"

export default ComesInGoesOutUnderline
