'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin } from '@phosphor-icons/react';
import Counter from './Counter';

const IntroCard = () => {
  const tabs = [
    { id: 'lore', label: 'Lore' },
    { id: 'upto', label: "What I'm up to" },
    { id: 'and', label: 'And?' },
  ];
  const [activeTab, setActiveTab] = React.useState('upto');

  const content = {
    lore: (
      <>
        My journey into tech started as a musician performing at Meta’s headquarters for the launch of StreetCode Academy. By connecting with StreetCode, I started learning to code and eventually decided to pursue my B.S in Computer Science at San Jose State University.
        <br /><br />
        As a CS student, I realized I was more drawn to the human side of problem-solving and eventually learned about UX Design. It clicked instantly and I began approaching my coursework like a designer — mapping user journeys, identifying pain points, and mocking up interfaces.
      </>
    ),
    upto: (
      <>
        After graduating, I earned the <span className="font-semibold text-black">Google UX Design certificate</span> and started building practical experience through hands-on work. In the past year, I’ve been developing my craft through <span className="font-semibold text-black">independent client work, volunteering, and design-a-thons</span>. More recently, I’ve put special focus on <span className="font-semibold text-black">integrating agentic AI</span> tools into my workflow, leveraging my <span className="font-semibold text-black">CS foundation</span> to <span className="font-semibold text-black">bridge design and development</span>.
      </>
    ),
    and: (
      <>
        I’m currently looking for Product/UX Design roles where I can help brands translate user needs into measurable business outcomes.

        Whether it’s streamlining workflows for an internal tool, revamping visuals for a landing page, or organizing a messy Figma file, I’m a problem solver at heart, and <span className="font-semibold text-black">I’m driven by the impact I can create for users, the business, and the team</span>.
      </>
    ),
  };

  return (
    <div className="bg-white grid grid-cols-1 lb:grid-cols-[1fr_auto] gap-8 lb:gap-10 p-8 lb:p-10 relative rounded-[16px] border border-border w-full lb:h-[520px] overflow-hidden">
      <div className="flex flex-col gap-6 lb:gap-8 items-start relative text-black h-full min-w-0 min-h-0">
        <h1 className="font-sans font-medium leading-tight relative text-2xl lb:text-[32px] w-full tracking-tight">
          Hi! I’m Tommy, a musician turned programmer turned designer.
        </h1>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#f5f5f5] rounded-full border border-border/50 flex-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-1.5 rounded-full font-sans font-bold text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 ${activeTab === tab.id ? 'text-black' : 'text-black/40 hover:text-black'
                }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-border/20"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative flex-1 w-full overflow-y-auto custom-scrollbar pr-2">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-sans font-normal leading-relaxed text-base lb:text-[16px] w-full text-black/80 pb-6"
          >
            {content[activeTab as keyof typeof content]}
          </motion.p>
        </div>
      </div>
      <div className="w-full lb:w-auto lb:h-full aspect-[2810/4096] relative rounded-[24px] lb:rounded-[32px] bg-[#f0f0f0] overflow-hidden">
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
      <span className="font-sans font-medium text-black/40 text-[11px] lb:text-[13px] uppercase tracking-wider whitespace-nowrap">{row.date}</span>
    </div>
  );

  return (
    <div className="bg-white p-8 lb:p-10 rounded-[16px] border border-border w-full h-full flex flex-col gap-10">
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
    <div className="bg-[#e8f5e9] p-6 lb:p-8 rounded-[16px] border border-[#c8e6c9] w-full flex items-center justify-center h-full min-h-[160px]">
      <p className="font-sans font-semibold text-[#2e7d32] text-center text-lg lb:text-xl tracking-tight leading-tight">
        Currently<br />#OpenToWork
      </p>
    </div>
  );
};

const LocationCard = () => {
  return (
    <div className="bg-white p-6 lb:p-8 rounded-[16px] border border-border w-full flex flex-col items-center justify-center gap-4 h-full min-h-[160px]">
      <div className="w-12 h-12 bg-[#f5f5f5] rounded-full flex items-center justify-center">
        <MapPin size={24} weight="regular" className="text-black/80" />
      </div>
      <p className="font-sans font-medium text-black text-center text-[15px]">Palo Alto, CA</p>
    </div>
  );
};

const AnimatedArrowSquareOut = ({ size = 18, className = "" }: { size?: number; className?: string }) => {
  const arrowVariants: Variants = {
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
      {/* Static Square */}
      <path
        d="M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      {/* Animated Arrow Shaft */}
      <motion.line
        x1="136"
        y1="120"
        x2="216"
        y2="40"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={arrowVariants}
      />
      {/* Animated Arrowhead */}
      <motion.polyline
        points="216 104 215.99 40.01 152 40"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        variants={arrowVariants}
      />
    </svg>
  );
};

const AnimatedCopy = ({ size = 18, className = "" }: { size?: number; className?: string }) => {
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

const ContactCard = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tommyagarwalwork@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-8 lb:p-10 rounded-[16px] border border-border w-full flex flex-col gap-6 h-full min-h-[280px]">
      <h2 className="font-sans text-xl font-semibold text-black tracking-tight">Contact</h2>
      <div className="flex flex-col gap-3">
        {/* Email */}
        <motion.div
          onClick={handleCopyEmail}
          whileHover="hover"
          initial="initial"
          className="flex items-center justify-between w-full p-4 bg-[#f9f9f9] rounded-[12px] border border-border/50 cursor-pointer group transition-all duration-300 hover:border-black/20"
        >
          <span className="font-sans text-[14px] lb:text-[15px] text-black/80 group-hover:text-black truncate mr-2">tommyagarwalwork@gmail.com</span>
          <div className="flex items-center gap-2 flex-shrink-0">
            {copied && <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Copied!</span>}
            <AnimatedCopy size={18} className="text-black opacity-40 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
          </div>
        </motion.div>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/tommyagarwal/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
          initial="initial"
          className="flex items-center justify-between w-full p-4 bg-[#f9f9f9] rounded-[12px] border border-border/50 group transition-all duration-300 hover:border-black/20 cursor-pointer"
        >
          <span className="font-sans text-[14px] lb:text-[15px] text-black/80 group-hover:text-black truncate mr-2">linkedin.com/in/tommyagarwal</span>
          <AnimatedArrowSquareOut size={18} className="text-black opacity-40 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
        </motion.a>

        {/* Calendar */}
        <motion.a
          href="https://calendar.app.google/FYbb8Ja6KmRCbH5M8"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
          initial="initial"
          className="flex items-center justify-between w-full p-4 bg-[#f9f9f9] rounded-[12px] border border-border/50 group transition-all duration-300 hover:border-black/20 cursor-pointer"
        >
          <span className="font-sans text-[14px] lb:text-[15px] text-black/80 group-hover:text-black truncate mr-2">Book a meeting with me!</span>
          <AnimatedArrowSquareOut size={18} className="text-black opacity-40 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
        </motion.a>
      </div>
    </div>
  );
};

const StatsCard = () => {
  const stats = [
    { value: 4, label: "Client Projects Completed" },
    { value: 4, label: "Design-a-thons Attended" },
    { value: 19, label: "Students Mentored" },
    { value: 313, label: "Portfolio Revisions" },
  ];

  return (
    <div className="bg-white p-8 lb:p-10 rounded-[16px] border border-border w-full h-full flex flex-col gap-6 justify-center">
      <div className="flex flex-col gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-start">
            <div className="flex items-baseline gap-1">
              <span className="font-sans font-bold text-3xl lb:text-4xl text-black tracking-tighter">
                <Counter value={stat.value} />
              </span>
            </div>
            <span className="font-sans text-[11px] lb:text-[12px] font-bold text-black/30 uppercase tracking-[0.15em] leading-tight max-w-[140px]">
              {stat.label}
              {stat.label === "Portfolio Revisions" && <span className="block normal-case font-medium text-[10px] tracking-normal mt-1 opacity-60">(and counting)</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageCard = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => {
  return (
    <div className={`bg-white rounded-[16px] border border-border w-full h-full overflow-hidden relative ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
};

const PlaceholderCard = ({ title = "Placeholder", minHeight = "160px" }: { title?: string, minHeight?: string }) => {
  return (
    <div
      className="bg-white p-8 rounded-[16px] border border-border border-dashed w-full h-full flex items-center justify-center bg-black/[0.01]"
      style={{ minHeight }}
    >
      <p className="font-sans text-black/10 font-semibold text-[10px] uppercase tracking-[0.2em]">{title}</p>
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
    <div className="bg-white p-8 lb:p-10 rounded-[16px] border border-border w-full flex flex-col gap-6 min-h-[280px]">
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

const AntigravityCard = () => {
  return (
    <div className="bg-white p-4 lb:p-5 rounded-[16px] border border-border w-full flex items-center justify-center text-center bg-[#fafafa]/50 flex-none transition-all duration-300 hover:border-black/10">
      <p className="font-sans text-[11px] lb:text-[12px] font-medium text-black/40 tracking-tight leading-normal">
        This portfolio was built with <span className="text-black/60 font-semibold">Google Antigravity</span>
      </p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="about-container w-full pb-12">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 lb:grid-cols-12 gap-4">
        {/* Row 1: Intro + Sidebar */}
        <div className="lb:col-span-8">
          <IntroCard />
        </div>

        <div className="lb:col-span-4 flex flex-col gap-4 h-full">
          <div className="grid grid-cols-2 gap-4 flex-none">
            <OpenToWorkCard />
            <LocationCard />
          </div>
          <div className="flex-1">
            <ContactCard />
          </div>
        </div>

        {/* Row 2: Experience + Languages */}
        <div className="lb:col-span-7">
          <ExperienceCard />
        </div>

        <div className="lb:col-span-5 flex flex-col gap-4 h-full">
          <LanguagesCard />
          <div className="grid grid-cols-2 gap-4 flex-1">
            <StatsCard />
            <div className="flex flex-col gap-4 h-full">
              <div className="flex-1 min-h-0">
                <ImageCard src="/assets/images/about/config2025.png" alt="Config 2025" />
              </div>
              <AntigravityCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
