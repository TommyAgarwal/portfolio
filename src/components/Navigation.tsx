"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navigation() {
    const pathname = usePathname();
    const [copied, setCopied] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const email = "tommyagarwalwork@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "WORK", href: "/" },
        { name: "ABOUT", href: "/about" },
        { name: "RESUME", href: "/resume" },
    ];

const AnimatedCopy = ({ size = 14, className = "" }: { size?: number; className?: string }) => {
  const copyVariants: Variants = {
    initial: {
      pathLength: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    },
    hover: {
      pathLength: [0, 1],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
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
      {/* Rear Square (Static) */}
      <polyline
        points="168 168 216 168 216 40 88 40 88 88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      {/* Front Square (Animated) */}
      <motion.rect
        x="40"
        y="88"
        width="128"
        height="128"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={copyVariants}
      />
    </svg>
  );
};

    const EmailButton = ({ className = "" }: { className?: string }) => (
        <motion.button 
            onClick={handleCopy}
            whileHover="hover"
            initial="initial"
            className={`group relative bg-black flex items-center gap-2 px-4 py-2 rounded-[6px] cursor-pointer transition-transform active:scale-95 ${className}`}
        >
            <span className="text-[14px] font-medium text-white whitespace-nowrap">
                {email}
            </span>
            <div className="flex items-center justify-center w-4 h-4 text-white">
                {copied ? (
                    <Check size={14} weight="bold" className="text-green-400" />
                ) : (
                    <AnimatedCopy size={14} className="text-white opacity-60 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
                )}
            </div>
            {copied && (
                <div className="absolute -bottom-8 right-0 text-[11px] font-medium text-black whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded shadow-sm border border-black/5">
                    Copied!
                </div>
            )}
        </motion.button>
    );

    return (
        <>
            {/* Desktop Navbar: narrow centered pill */}
            <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[1001] bg-white rounded-[16px] px-8 py-4 items-center justify-between w-[825px] max-w-[calc(100vw-48px)] shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
                {/* Nav Links */}
                <div className="flex items-center gap-16">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[16px] transition-all no-underline ${pathname === link.href ? "font-medium text-black" : "font-normal text-black/50 hover:text-black"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Email CTA */}
                <EmailButton />
            </nav>

            {/* Mobile Navbar: full-width top bar */}
            <nav className="md:hidden fixed top-0 left-0 w-full z-[1001] bg-[#F1F4FB]/90 backdrop-blur-md border-b border-border">
                <div className="px-6 h-16 flex items-center justify-between relative">
                    {/* Left: Name */}
                    <Link href="/" className="text-base font-bold text-black no-underline tracking-tight whitespace-nowrap z-[1002]">
                        TOMMY AGARWAL
                    </Link>

                    {/* Hamburger Button */}
                    <button 
                        className="z-[1002] p-1 text-black cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="fixed inset-0 z-[1000] bg-[#f5f5f5] pt-32 px-6 md:hidden flex flex-col"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`text-4xl font-bold no-underline tracking-tight ${pathname === link.href ? "text-black" : "text-black/30 hover:text-black transition-colors"}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Email Button */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12"
                        >
                            <p className="text-black/40 text-[12px] font-bold mb-4 uppercase tracking-widest">Get in touch</p>
                            <EmailButton className="w-fit" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
