"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Copyright } from "@phosphor-icons/react";
import lastUpdated from "../generated/last-updated.json";

export default function Footer() {
    const socialLinks = [
        { name: "LINKEDIN", href: "https://www.linkedin.com/in/tommyagarwal/" },
        { name: "CALENDAR", href: "https://calendar.app.google/FYbb8Ja6KmRCbH5M8" },
        { name: "EMAIL", href: "mailto:tommyagarwalwork@gmail.com" },
    ];

    const mobileNavLinks = [
        { name: "WORK", href: "/" },
        { name: "ABOUT", href: "/about" },
        { name: "RESUME", href: "/resume" },
    ];

    return (
        <footer className="w-full border-t border-border bg-[var(--color-bg)]">
            {/* Top Footer Section */}
            <div className="max-w-[1100px] mx-auto px-4 md:px-0">
                <div className="w-full border-l border-r border-border pt-6 pb-12 md:py-12 px-6 flex flex-col gap-10 relative">

                    {/* Mobile Only: Repeated Navigation Links */}
                    <div className="flex md:hidden items-center justify-between -mx-6 px-6 pb-6 border-b border-border">
                        {mobileNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-mono text-[12px] font-normal text-[var(--color-text-primary)] uppercase tracking-wider no-underline"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Row 1: Core Message and Contact Info */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 w-full">
                        {/* Message block */}
                        <div className="flex flex-col gap-2 items-start max-w-[450px]">
                            <h4 className="font-sans text-[24px] font-normal text-[var(--color-text-primary)] leading-tight tracking-tight">
                                Thanks for visiting!
                            </h4>
                            <p className="font-mono text-[var(--color-text-secondary)] text-[12px] uppercase tracking-wider leading-relaxed">
                                Like what you saw? Let&apos;s chat!
                            </p>
                        </div>

                        {/* Social/Call Links */}
                        <div className="flex flex-col gap-3 items-start md:items-end">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group font-mono text-[12px] font-normal text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] uppercase tracking-wider no-underline transition-colors flex items-center gap-1"
                                >
                                    {link.name}
                                    <ArrowUpRight
                                        size={14}
                                        className="opacity-70 transition-all duration-300 transform md:opacity-0 md:-translate-x-1 md:translate-y-1 group-hover:opacity-70 group-hover:translate-x-0 group-hover:translate-y-0"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Full-Width Separator Stroke */}
            <div className="w-full border-b border-border" />

            {/* Bottom Footer Section */}
            <div className="max-w-[1100px] mx-auto px-4 md:px-0">
                <div className="w-full border-l border-r border-border py-8 px-6 flex flex-col gap-10 relative">

                    {/* Row 2: Copyright & Meta Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                        {/* Copyright and framework credits */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center">
                            <p className="font-mono text-[var(--color-text-secondary)] text-[12px] uppercase tracking-wider flex items-center gap-1">
                                <Copyright size={14} className="opacity-70" />
                                2026 Tommy Agarwal
                            </p>
                            <span className="hidden sm:inline text-border font-mono text-[12px]">|</span>
                            <p className="font-mono text-[var(--color-text-secondary)] text-[12px] uppercase tracking-wider">
                                Designed & built in Next.js
                            </p>
                        </div>

                        {/* Last Updated Label */}
                        <div className="flex items-center">
                            <p className="font-mono text-[12px] font-normal text-[var(--color-text-secondary)] uppercase tracking-wider">
                                LAST UPDATED: {lastUpdated.date}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
