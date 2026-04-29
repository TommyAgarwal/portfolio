"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Calendar, FileArrowDown, LinkedinLogo } from "@phosphor-icons/react";

export default function Navigation() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const overlayRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Active Section Tracking
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["work", "resume", "about"];
            const current = sections.find(section => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 400;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                overlayRef.current &&
                !overlayRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsProfileOpen(false);
            }
        };

        if (isProfileOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isProfileOpen]);

    // Live PST Time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString("en-US", {
                timeZone: "America/Los_Angeles",
                hour: "numeric",
                minute: "2-digit",
                hour12: true
            });
            setCurrentTime(`${timeString} PST`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000); // Check every second to switch exactly on the minute
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1001]">
            {/* Popover */}
            <div
                ref={overlayRef}
                className={`absolute bottom-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[340px] bg-card-bg-hover rounded-[32px] p-6 shadow-none border border-border origin-bottom flex flex-col items-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isProfileOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 translate-y-2 pointer-events-none"}`}
            >
                <div className="w-[88px] h-[88px] bg-card-bg-accent rounded-full mb-4 shadow-inner flex items-center justify-center overflow-hidden border border-border">
                    <img src="/assets/profile.png" alt="Tommy Agarwal" className="w-full h-full object-cover" />
                </div>

                <h3 className="text-[22px] font-bold text-text-primary mb-1 tracking-tight">Tommy Agarwal</h3>
                <p className="text-[15px] font-medium text-text-secondary mb-6">Product Designer</p>

                <div className="flex items-center gap-4 text-[13px] font-medium text-text-secondary mb-8 px-5">
                    <div className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        Palo Alto, CA
                    </div>
                    <div className="w-[1px] h-3.5 bg-text-secondary/20"></div>
                    <div className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        {currentTime || "Loading..."}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 w-full px-2">
                    <div className="flex flex-col items-center gap-2">
                        <a href="/assets/TommyAgarwalResume_NoContact.pdf" download className="w-full aspect-square flex items-center justify-center bg-card-bg hover:bg-card-bg-accent transition-colors rounded-[24px] shadow-sm border border-border cursor-pointer no-underline group">
                            <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                                <FileArrowDown size={24} weight="regular" className="text-text-primary" />
                            </div>
                        </a>
                        <span className="text-[12px] font-medium text-text-secondary">Resume</span>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex flex-col items-center gap-2">
                        <a href="https://linkedin.com/in/tommyagarwal" target="_blank" rel="noopener noreferrer" className="w-full aspect-square flex items-center justify-center bg-card-bg hover:bg-card-bg-accent transition-colors rounded-[24px] shadow-sm border border-border cursor-pointer no-underline group">
                            <div className="w-10 h-10 flex items-center justify-center transition-transform">
                                <LinkedinLogo size={24} weight="regular" className="text-text-primary" />
                            </div>
                        </a>
                        <span className="text-[12px] font-medium text-text-secondary">LinkedIn</span>
                    </div>

                    {/* Calendar */}
                    <div className="flex flex-col items-center gap-2">
                        <a href="https://calendar.app.google/jhoVvB8SBXb7rbFi6" target="_blank" rel="noopener noreferrer" className="w-full aspect-square flex items-center justify-center bg-card-bg hover:bg-card-bg-accent transition-colors rounded-[24px] shadow-sm border border-border cursor-pointer no-underline group">
                            <div className="w-10 h-10 flex items-center justify-center transition-transform">
                                <Calendar size={24} weight="regular" className="text-text-primary" />
                            </div>
                        </a>
                        <span className="text-[12px] font-medium text-text-secondary">Calendar</span>
                    </div>
                </div>
            </div>

            {/* Nav Pill */}
            <div className="bg-card-bg rounded-full shadow-none border border-border p-2 flex items-center gap-2">

                {/* Links */}
                <div className="flex items-center gap-1.5 px-3">
                    <Link href="#work" className={`px-4 py-2.5 text-[15px] transition-all hover:bg-white/5 rounded-full no-underline ${activeSection === "work" ? "font-bold text-text-primary" : "font-medium text-text-secondary"}`}>
                        Work
                    </Link>
                    <Link href="#resume" className={`px-4 py-2.5 text-[15px] transition-all hover:bg-white/5 rounded-full no-underline ${activeSection === "resume" ? "font-bold text-text-primary" : "font-medium text-text-secondary"}`}>
                        Resume
                    </Link>
                    <Link href="#about" className={`px-4 py-2.5 text-[15px] transition-all hover:bg-white/5 rounded-full no-underline ${activeSection === "about" ? "font-bold text-text-primary" : "font-medium text-text-secondary"}`}>
                        About
                    </Link>
                </div>

                <div className="w-[1px] h-8 bg-border mx-1"></div>

                {/* Profile Picture Trigger */}
                <button
                    ref={buttonRef}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="w-14 h-14 rounded-full bg-card-bg-accent shadow-inner transition-transform duration-200 hover:scale-[1.03] active:scale-95 flex items-center justify-center overflow-hidden cursor-pointer p-0 ml-1.5 focus:outline-none"
                    aria-label="Toggle Profile Menu"
                    aria-expanded={isProfileOpen}
                >
                    <img src="/assets/profile.png" alt="Profile" className="w-full h-full object-cover" />
                </button>
            </div>
        </nav>
    );
}
