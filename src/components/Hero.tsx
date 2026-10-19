"use client";

import React from "react";
import { Briefcase, GraduationCap } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="w-full border-b border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-0">
        {/* Main column with side borders */}
        <div className="w-full border-l border-r border-[var(--color-border)] flex flex-col gap-4 pt-[112px] md:pt-[136px] pb-[48px] relative">
          
          {/* Top block: Header content */}
          <div className="flex flex-col gap-2 items-start px-4 md:px-4 w-full">
            <p className="font-mono text-[var(--color-text-secondary)] text-[16px] font-normal leading-normal">
              Hello World!
            </p>
            <h1 className="font-sans text-[32px] sm:text-[36px] md:text-[40px] font-normal text-[var(--color-text-primary)] leading-snug tracking-tight max-w-[572px]">
              I’m Tommy, a UX Designer who makes products more effective.
            </h1>
          </div>

          {/* Divider line matching design */}
          <div className="w-full border-b border-[var(--color-border)] my-2" />

          {/* Bottom block: Footer sub-text & status */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-4 gap-4 md:gap-0 w-full">
            
            {/* Left metadata group */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
              {/* Experience item */}
              <div className="flex items-start gap-2">
                <Briefcase size={24} weight="regular" className="text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
                <p className="font-mono text-[var(--color-text-secondary)] text-[12px] font-normal leading-normal w-[237px]">
                  6 years of retail experience (customer service and sales)
                </p>
              </div>

              {/* Education item */}
              <div className="flex items-start gap-3">
                <GraduationCap size={24} weight="regular" className="text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
                <p className="font-mono text-[var(--color-text-secondary)] text-[12px] font-normal leading-normal w-[188px]">
                  Recent Comp Sci grad from San Jose State University
                </p>
              </div>
            </div>

            {/* Right status item */}
            <p className="font-mono text-[var(--color-text-secondary)] text-[12px] font-normal uppercase leading-normal tracking-wide whitespace-nowrap">
              CURRENTLY OPEN TO WORK
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

