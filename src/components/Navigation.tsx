"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, List, X, Copy } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import CenterUnderline from "./CenterUnderline";
import ComesInGoesOutUnderline from "./ComesInGoesOutUnderline";

interface EmailButtonProps {
    email: string;
    copied: boolean;
    handleCopy: () => void;
    className?: string;
}

const EmailButton = ({ email, copied, handleCopy, className = "" }: EmailButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button 
            onClick={handleCopy}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative bg-[var(--color-text-primary)] flex items-center gap-[12px] px-[16px] py-[8px] rounded-[4px] cursor-pointer transition-transform active:scale-95 ${className}`}
        >
            <ComesInGoesOutUnderline
                isHovered={isHovered}
                underlineHeightRatio={0.08}
                underlinePaddingRatio={0.1}
                className="font-mono text-[12px] text-white tracking-[0.36px] whitespace-nowrap"
            >
                {email}
            </ComesInGoesOutUnderline>
            <div className="flex items-center justify-center w-4 h-4 text-white">
                {copied ? (
                    <Check size={14} weight="bold" className="text-green-400" />
                ) : (
                    <Copy size={16} className="text-white opacity-60 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
                )}
            </div>
            {copied && (
                <div className="absolute -bottom-8 right-0 font-mono text-[10px] text-black whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm border border-border">
                    Copied!
                </div>
            )}
        </motion.button>
    );
};

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
        Promise.resolve().then(() => {
            setIsMenuOpen(false);
        });
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



    return (
        <>
            {/* Desktop Navbar - Full width header */}
            <nav className="hidden md:flex fixed top-0 left-0 w-full z-[1001] bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-border px-[64px] py-[16px] items-center justify-between">
                {/* Nav Links */}
                <div className="flex items-center gap-[48px]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-mono text-[12px] no-underline transition-colors uppercase font-normal text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                        >
                            <CenterUnderline underlineHeightRatio={0.08} underlinePaddingRatio={0.1}>
                                {link.name}
                            </CenterUnderline>
                        </Link>
                    ))}
                </div>

                {/* Email CTA */}
                <EmailButton email={email} copied={copied} handleCopy={handleCopy} />
            </nav>

            {/* Mobile Navbar */}
            <nav className="md:hidden fixed top-0 left-0 w-full z-[1001] bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
                <Link href="/" className="font-sans text-[16px] font-bold text-[var(--color-text-primary)] no-underline tracking-tight">
                    TOMMY AGARWAL
                </Link>
                <button 
                    className="p-1 text-[var(--color-text-primary)] cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="fixed inset-0 z-[1000] bg-[var(--color-bg)] pt-24 px-6 md:hidden flex flex-col justify-between pb-8"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-mono text-[24px] no-underline uppercase font-normal text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <CenterUnderline underlineHeightRatio={0.08} underlinePaddingRatio={0.1}>
                                        {link.name}
                                    </CenterUnderline>
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-mono text-[var(--color-text-secondary)] text-[11px] uppercase tracking-wider">Get in touch</p>
                            <EmailButton className="w-full justify-between" email={email} copied={copied} handleCopy={handleCopy} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
