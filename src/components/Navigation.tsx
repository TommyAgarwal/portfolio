"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copy, Check, List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

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

    const EmailButton = ({ className = "" }: { className?: string }) => (
        <button 
            onClick={handleCopy}
            className={`relative bg-black flex items-center gap-2 px-4 py-2 rounded-[6px] cursor-pointer transition-transform active:scale-95 ${className}`}
        >
            <span className="text-[14px] font-medium text-white whitespace-nowrap">
                {email}
            </span>
            <div className="flex items-center justify-center w-4 h-4 text-white">
                {copied ? (
                    <Check size={14} weight="bold" className="text-green-400" />
                ) : (
                    <Copy size={14} className="opacity-60" />
                )}
            </div>
            {copied && (
                <div className="absolute -bottom-8 right-0 text-[11px] font-medium text-black whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded shadow-sm border border-black/5">
                    Copied!
                </div>
            )}
        </button>
    );

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[1001] bg-[#f5f5f5]/80 backdrop-blur-md border-b border-border">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-20 flex items-center justify-between relative">
                    {/* Left: Name */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/" className="text-lg md:text-xl font-bold text-black no-underline tracking-tight whitespace-nowrap z-[1002]">
                            TOMMY AGARWAL
                        </Link>
                    </div>

                    {/* Middle: Nav Elements (Desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[15px] transition-all no-underline ${pathname === link.href ? "font-bold text-black" : "font-medium text-black/60 hover:text-black"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right: CTA Button (Desktop) & Mobile Toggle */}
                    <div className="flex-1 flex justify-end items-center gap-4">
                        <div className="hidden md:block">
                            <EmailButton />
                        </div>

                        {/* Hamburger Button */}
                        <button 
                            className="md:hidden z-[1002] p-1 text-black cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
                        </button>
                    </div>
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
