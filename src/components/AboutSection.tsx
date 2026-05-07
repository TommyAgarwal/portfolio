'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from '@phosphor-icons/react';

const IntroCard = () => {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-[1fr_40%] lg:grid-cols-[1fr_35%] gap-8 md:gap-10 p-8 md:p-10 relative rounded-[16px] border border-border w-full overflow-hidden">
      <div className="flex flex-col gap-6 md:gap-8 items-start relative text-black justify-center">
        <h1 className="font-sans font-medium leading-tight relative text-2xl md:text-[32px] w-full tracking-tight">
          Hi! I’m Tommy, a Computer Science graduate turned Product Designer.
        </h1>
        <p className="font-sans font-normal leading-relaxed relative text-base md:text-[16px] w-full text-black/80">
          After graduating, I earned the <span className="font-semibold text-black">Google UX Design certificate</span> and started building practical experience through hands-on work. In the past year, I’ve been developing my craft through <span className="font-semibold text-black">independent client work, volunteering, and design-a-thons</span>. More recently, I’ve put special focus on <span className="font-semibold text-black">integrating agentic AI</span> tools into my workflow, leveraging my <span className="font-semibold text-black">CS foundation</span> to <span className="font-semibold text-black">bridge design and development</span>.
          <br /><br />
          Whether it’s streamlining workflows for an internal tool, revamping visuals for a landing page, or organizing a messy Figma file, I’m a problem solver at heart, and <span className="font-semibold text-black">I’m driven by the impact I can create for users, the business, and the team</span>.
        </p>
      </div>
      <div className="w-full aspect-[2810/4096] relative rounded-[24px] md:rounded-[32px] bg-[#f0f0f0] overflow-hidden self-center">
        <img
          alt="Tommy Agarwal Portrait"
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/images/about/aboutimage.png"
        />
      </div>
    </div>
  );
};

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
    { role: "Youth Athletics Coach", company: "CITY OF PALO ALTO", date: "NOV 2018 - MAR 2020" },
  ];

  const renderRow = (row: any, i: number, isLast: boolean) => (
    <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 ${!isLast ? 'border-b border-border/50' : ''} gap-2 sm:gap-0`}>
      <div className="flex flex-col gap-1">
        <span className="font-sans font-medium text-black text-[15px]">{row.role}</span>
        <span className="font-sans text-black/60 text-[14px]">{row.company}</span>
      </div>
      <span className="font-sans font-medium text-black/40 text-[11px] md:text-[13px] uppercase tracking-wider whitespace-nowrap">{row.date}</span>
    </div>
  );

  return (
    <div className="bg-white p-8 md:p-10 rounded-[16px] border border-border w-full h-full flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="font-sans text-xl font-semibold text-black tracking-tight">Experience</h2>
        <div className="flex flex-col">
          {mainExperience.map((row, i) => renderRow(row, i, i === mainExperience.length - 1))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-sans text-[11px] font-bold text-black/30 uppercase tracking-[0.2em]">Less-Related Experience</h2>
        <div className="flex flex-col">
          {secondaryExperience.map((row, i) => renderRow(row, i, i === secondaryExperience.length - 1))}
        </div>
      </div>
    </div>
  );
};

const OpenToWorkCard = () => {
  return (
    <div className="bg-[#e8f5e9] p-6 md:p-8 rounded-[16px] border border-[#c8e6c9] w-full flex items-center justify-center h-full min-h-[160px]">
      <p className="font-sans font-semibold text-[#2e7d32] text-center text-lg md:text-xl tracking-tight leading-tight">
        Currently<br />#OpenToWork
      </p>
    </div>
  );
};

const LocationCard = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[16px] border border-border w-full flex flex-col items-center justify-center gap-4 h-full min-h-[160px]">
      <div className="w-12 h-12 bg-[#f5f5f5] rounded-full flex items-center justify-center">
        <MapPin size={24} weight="fill" className="text-black/80" />
      </div>
      <p className="font-sans font-medium text-black text-center text-[15px]">Palo Alto, CA</p>
    </div>
  );
};

const LanguagesCard = () => {
  const languages = [
    { name: "English🇺🇸", level: "Native" },
    { name: "Français🇫🇷", level: "Working Proficiency" },
    { name: "Lingala🇨🇩", level: "Limited Working" },
    { name: "Lari🇨🇬", level: "Elementary" },
  ];

  return (
    <div className="bg-white p-8 md:p-10 rounded-[16px] border border-border w-full flex flex-col gap-6 flex-1 min-h-[280px]">
      <h2 className="font-sans text-xl font-semibold text-black tracking-tight">Languages</h2>
      <div className="grid grid-cols-2 gap-4 h-full">
        {languages.map((lang, i) => (
          <div key={i} className="flex flex-col items-start justify-center gap-1 p-4 bg-[#f9f9f9] rounded-[12px] border border-border/50 h-full min-h-[80px]">
            <span className="font-sans font-medium text-black text-[15px]">{lang.name}</span>
            <span className="font-sans text-[11px] text-black/50 uppercase tracking-widest font-semibold">{lang.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="about-container w-full pb-12">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Row 1 */}
        <div className="md:col-span-12 flex justify-center">
          <div className="w-full max-w-[960px]">
            <IntroCard />
          </div>
        </div>

        {/* Row 2: Asymmetrical Layout */}
        <div className="md:col-span-7">
          <ExperienceCard />
        </div>

        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <OpenToWorkCard />
            <LocationCard />
          </div>
          <LanguagesCard />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
