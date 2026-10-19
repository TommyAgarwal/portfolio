'use client';

import React from 'react';
import { MapPin, GraduationCap, Certificate } from '@phosphor-icons/react';
import { motion, LayoutGroup } from 'framer-motion';
import TextRotate from './TextRotate';

const ExperienceCard = () => {
  const mainExperience = [
    { role: "Product Designer", company: "FREELANCE", date: "MAY 2025 - PRESENT" },
    { role: "Design Instructor", company: "STREETCODE ACADEMY", date: "JAN 2025 - JUN 2025" },
    { role: "Graphic Designer", company: "FREELANCE", date: "MAR 2018 - APR 2025" },
    { role: "IT/Lab Intern", company: "TARANA WIRELESS", date: "JUN 2019 - AUG 2021" },
  ];

  const secondaryExperience = [
    { role: "Performer/Musician", company: "FUA DIA KONGO", date: "SEP 2005 - PRESENT" },
    { role: "Brand Ambassador", company: "RALPH LAUREN", date: "JUN 2023 - PRESENT" },
    { role: "Sales Associate", company: "TOMMY HILFIGER", date: "NOV 2022 - AUG 2025" },
  ];

  const renderRow = (row: any, i: number, isLast: boolean) => (
    <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 ${!isLast ? 'border-b border-border' : ''} gap-2 sm:gap-0`}>
      <div className="flex flex-col gap-1">
        <span className="font-sans font-normal text-[var(--color-text-primary)] text-[15px]">{row.role}</span>
        <span className="font-mono text-[var(--color-text-secondary)] text-[12px] uppercase tracking-wider">{row.company}</span>
      </div>
      <span className="font-mono text-[var(--color-text-secondary)] text-[12px] uppercase tracking-wider whitespace-nowrap">{row.date}</span>
    </div>
  );

  return (
    <div className="border border-border p-[24px] rounded-[4px] w-full flex flex-col gap-[32px] bg-transparent">
      <div className="flex flex-col gap-4">
        <h2 className="font-mono text-[12px] font-normal text-[var(--color-text-secondary)] uppercase tracking-wider">Experience</h2>
        <div className="flex flex-col">
          {mainExperience.map((row, i) => renderRow(row, i, i === mainExperience.length - 1))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-mono text-[12px] font-normal text-[var(--color-text-secondary)] uppercase tracking-wider">Other Experience</h2>
        <div className="flex flex-col">
          {secondaryExperience.map((row, i) => renderRow(row, i, i === secondaryExperience.length - 1))}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] md:gap-[48px] items-start">

        {/* Left Column - Text Content */}
        <div className="md:col-span-7 flex flex-col">
          <p className="font-mono text-[16px] text-[var(--color-text-secondary)] uppercase tracking-wider mb-[8px]">
            Hello World!
          </p>

          <LayoutGroup>
            <motion.div className="flex flex-wrap items-center gap-x-2 font-sans text-[32px] font-normal text-[var(--color-text-primary)] leading-tight mb-[16px]" layout>
              <motion.span
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                I’m
              </motion.span>
              <TextRotate
                texts={[
                  "Tommy...",
                  "a Product Designer🗒️📐💻",
                  "a Computer Science Grad🎓💻📓",
                  "a Sales Associate🏇👕🛍",
                  "a Professional Percussionist🎛️🎙️🪘",
                  "#OpenToWork❇️"
                ]}
                mainClassName="bg-[var(--color-button-bg)] text-[var(--color-button-text)] px-3 py-1 rounded-[4px] inline-flex items-center text-[28px] md:text-[32px] font-sans font-normal whitespace-nowrap overflow-hidden"
                splitBy="characters"
                staggerDuration={0.025}
                staggerFrom="last"
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3500}
              />
            </motion.div>
          </LayoutGroup>

          {/* Metadata Line */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] text-[var(--color-text-secondary)] uppercase tracking-wider mb-[48px]">
            <span className="flex items-center gap-[6px]">
              <MapPin size={16} />
              Palo Alto, CA
            </span>
            <span className="flex items-center gap-[6px]">
              <GraduationCap size={16} />
              San Jose State &apos;24
            </span>
            <span className="flex items-center gap-[6px]">
              <Certificate size={16} />
              Google & Meta
            </span>
          </div>

          {/* Short Blurb 1 */}
          <p className="font-sans text-[16px] text-[var(--color-text-primary)] leading-relaxed mb-[32px]">
            Whether it’s streamlining workflows for an internal tool, revamping visuals for a landing page, or organizing a messy Figma file, I’m a problem solver at heart, and I’m driven by the
          </p>

          {/* Second Blurb with Bullets */}
          <div className="font-sans text-[16px] text-[var(--color-text-primary)] leading-relaxed flex flex-col gap-3 mb-[48px]">
            <p>Since graduating, I’ve been developing my craft through:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li>Independent client work</li>
              <li>Volunteering</li>
              <li>Design-a-thons</li>
              <li>UX-ing in my capacity as a retail associate</li>
              <li>Certifications from Google and Meta</li>
            </ul>
          </div>

          {/* Experience Card */}
          <ExperienceCard />
        </div>

        {/* Right Column - Image Masonry Grid */}
        <div className="md:col-span-5 grid grid-cols-2 gap-[16px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-[16px]">
            <div className="w-full h-[300px] bg-[#396EFF] rounded-[4px] border border-border" />
            <div className="w-full h-[180px] bg-[#396EFF] rounded-[4px] border border-border" />
            <div className="w-full h-[260px] bg-[#396EFF] rounded-[4px] border border-border" />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-[16px]">
            <div className="w-full h-[200px] bg-[#396EFF] rounded-[4px] border border-border" />
            <div className="w-full h-[320px] bg-[#396EFF] rounded-[4px] border border-border" />
            <div className="w-full h-[220px] bg-[#396EFF] rounded-[4px] border border-border" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
