'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Word = ({ children, progress, range }: { children: string; progress: any; range: [number, number] }) => {
  const color = useTransform(progress, range, ["#AAAAAA", "#FFFFFF"]);
  return (
    <motion.span 
      style={{ color }} 
      className="mr-[0.25em] inline-block"
    >
      {children}
    </motion.span>
  );
};

const ScrollHighlightedText = ({ paragraphs }: { paragraphs: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 15%"]
  });

  const allWords = paragraphs.map(p => p.split(/\s+/));
  const totalWords = allWords.reduce((acc, words) => acc + words.length, 0);
  
  let wordCount = 0;

  return (
    <div ref={containerRef} className="flex flex-col gap-6 md:gap-8">
      {allWords.map((words, pIndex) => (
        <p key={pIndex} className="text-xl md:text-[24px] leading-relaxed font-medium text-text-secondary">
          {words.map((word, wIndex) => {
            const start = wordCount / totalWords;
            const end = (wordCount + 1) / totalWords;
            wordCount++;
            return (
              <Word key={wIndex} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      ))}
    </div>
  );
};

const AboutSection = () => {
  const [greeting, setGreeting] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const aboutParagraphs = [
    "Hi! I’m Tommy, a Computer Science graduate turned Product Designer. I was initially set on becoming a software engineer until I discovered UX, which instantly clicked as the perfect mix of my technical and creative backgrounds.",
    "After graduating, I earned the Google UX Design certificate and started building practical experience through hands-on work. In the past year, I’ve been developing my craft through independent client work, volunteering, and design-a-thons. More recently, I’ve put special focus on integrating agentic AI tools into my workflow, leveraging my CS foundation to bridge design and development.",
    "Whether it’s streamlining workflows for an internal tool, revamping visuals for a landing page, or organizing a messy Figma file, I’m a problem solver at heart, and I’m driven by the impact I can create for users, the business, and the team."
  ];

  return (
    <div className="about-container w-full py-12">
      {/* Header matching Work and Resume sections */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-4xl font-bold text-text-primary tracking-tight">About</h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4">

        {/* Row 1: Scroll Highlighted Text (Replacing Video) */}
        <div className="md:col-span-12 rounded-[32px] bg-[#1C1C1C] border border-border p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <ScrollHighlightedText paragraphs={aboutParagraphs} />
        </div>

        {/* Row 2: Non-ATS-Friendly Experience & Languages */}
        {/* Box 2: Not on my Resume (Wider) */}
        <div className="md:col-span-8 rounded-[32px] bg-[#1C1C1C] border border-border h-[500px] relative flex flex-col overflow-hidden group">

          {/* Scrollable Content with vertical padding to keep scrollbar clear of rounded corners */}
          <div className="overflow-y-auto card-scrollbar flex-1 my-8 lg:my-10 px-8 lg:px-10">
            <div className="flex flex-col gap-6">
              {/* Header Section */}
              <div className="flex flex-col gap-4">
                {/* Bento Label now scrolls with content */}
                <span className="text-[10px] font-bold text-text-secondary tracking-widest uppercase opacity-50">
                  Not on my Resume
                </span>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
                  Non-ATS-friendly experiences that shaped how I design and collaborate
                </p>
              </div>

              {/* Experience Items sorted by Active first, then date */}
              <div className="flex flex-col gap-3">
                {/* Musician - ACTIVE */}
                <div className="bg-[#282828] p-6 rounded-2xl border border-white/5 flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h4 className="text-lg font-semibold text-text-primary">Musician/Performer – Fua Dia Congo</h4>
                    <span className="text-xs font-bold text-text-secondary px-3 py-1 bg-white/5 rounded-full tracking-wider uppercase whitespace-nowrap w-fit">2005 - PRESENT</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    I started playing percussion at 3 years old; I regularly perform both locally, in the Bay Area, and internationally. Being a musician has taught me how to master a skill, communicate in front of an audience, receive feedback, and learn/improvise on the fly – all of which I’ve taken into design.
                  </p>
                </div>

                {/* Ralph Lauren - ACTIVE */}
                <div className="bg-[#282828] p-6 rounded-2xl border border-white/5 flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h4 className="text-lg font-semibold text-text-primary">Sales Associate – Ralph Lauren</h4>
                    <span className="text-xs font-bold text-text-secondary px-3 py-1 bg-white/5 rounded-full tracking-wider uppercase whitespace-nowrap w-fit">2023 - PRESENT</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    This role deepened my commitment to customer service and problem solving under pressure. I regularly rearranged store displays to guide traffic flow and highlight key products, an exercise in spatial design and subtle user experience that mirrors digital interaction principles.
                  </p>
                </div>

                {/* Tommy Hilfiger - 2022-2025 */}
                <div className="bg-[#282828] p-6 rounded-2xl border border-white/5 flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h4 className="text-lg font-semibold text-text-primary">Sales Associate – Tommy Hilfiger</h4>
                    <span className="text-xs font-bold text-text-secondary px-3 py-1 bg-white/5 rounded-full tracking-wider uppercase whitespace-nowrap w-fit">2022 - 2025</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Working on the register revealed how often user behavior diverges from expectations. To create a positive shopping experience, I had to observe patterns, anticipate needs, and adjust in real time, reinforcing the importance of user research and behavior-driven design.
                  </p>
                </div>

                {/* Basketball Coach - 2018-2020 */}
                <div className="bg-[#282828] p-6 rounded-2xl border border-white/5 flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h4 className="text-lg font-semibold text-text-primary">Middle School Basketball Coach – City of Palo Alto</h4>
                    <span className="text-xs font-bold text-text-secondary px-3 py-1 bg-white/5 rounded-full tracking-wider uppercase whitespace-nowrap w-fit">2018 - 2020</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Coaching taught me how to communicate clearly and adapt messages to different personalities and skill levels. Guiding players through skills and strategy strengthened my ability to explain complex ideas simply—a skill that directly supports cross-functional collaboration in design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 3: Languages - Matching height of Experience card */}
        <div
          className="md:col-span-4 rounded-[32px] bg-[#1C1C1C] border border-border h-[500px] p-8 lg:p-10 relative flex flex-col group transition-all duration-300 overflow-hidden"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setCursorPos({ x: e.clientX, y: e.clientY });
          }}
        >
          <div className="flex flex-col h-full gap-6">
            <span className="text-[10px] font-bold text-text-secondary tracking-widest uppercase opacity-50">
              Languages
            </span>

            <div className="flex-1 flex flex-col gap-4">
              {[
                { name: 'English', flag: '🇺🇸', level: 'Native', greeting: 'Hello!', progress: 'w-full' },
                { name: 'Français', flag: '🇫🇷', level: 'Working Proficiency', greeting: 'Salut!', progress: 'w-[75%]' },
                { name: 'Lingala', flag: '🇨🇩🇨🇬', level: 'Limited Working', greeting: 'Losako!', progress: 'w-[50%]' },
                { name: 'Lari', flag: '🇨🇬', level: 'Elementary', greeting: 'Mboté!', progress: 'w-[30%]' },
              ].map((lang) => (
                <div
                  key={lang.name}
                  onMouseEnter={() => setGreeting(lang.greeting)}
                  onMouseLeave={() => setGreeting(null)}
                  className="flex-1 bg-[#282828] p-5 rounded-2xl border border-white/5 flex flex-col justify-between group/lang transition-all duration-300 cursor-none"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-text-primary">{lang.name} {lang.flag}</span>
                    <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold opacity-60">{lang.level}</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full bg-text-secondary/40 ${lang.progress} rounded-full transition-all duration-1000`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Cursor */}
          <AnimatePresence>
            {greeting && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="fixed pointer-events-none z-[100] flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl min-w-[80px] aspect-square"
                style={{
                  left: cursorPos.x,
                  top: cursorPos.y,
                  x: "-50%",
                  y: "-50%",
                }}
              >
                <span className="text-white text-xs font-bold tracking-tight mb-1">{greeting}</span>
                <motion.span
                  animate={{ rotate: [0, 15, -15, 15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl inline-block origin-[70%_70%]"
                >
                  👋
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Row 3: Photo Strip & Basketball Game */}
        {/* Box 4: Photo Container (Smaller) */}
        <div className="md:col-span-6 rounded-2xl bg-border/20 border border-border p-3 h-[380px] relative flex flex-col group hover:bg-border/30 transition-all duration-300">
          {/* Labels for small boxes as shown in screenshot */}
          <div className="flex gap-2 h-full w-full">
            <div className="flex-1 rounded-xl border border-border/50 overflow-hidden relative group/photo">
              <img
                src="/assets/images/about/IMG_7122.png"
                alt="About photo 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-2 transition-opacity duration-300">
                <span className="text-[10px] font-medium text-white/90 tracking-wide uppercase">
                  @Config 2025
                </span>
              </div>
            </div>
            <div className="flex-1 rounded-xl border border-border/50 overflow-hidden relative group/photo">
              <img
                src="/assets/images/about/drummingphoto.jpg"
                alt="About photo 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-2 transition-opacity duration-300">
                <span className="text-[10px] font-medium text-white/90 tracking-wide uppercase">
                  Performing @ UC Berkeley
                </span>
              </div>
            </div>
            <div className="flex-1 rounded-xl border border-border/50 overflow-hidden relative group/photo">
              <img
                src="/assets/images/about/209eb704-2d28-4128-b908-cbcc41888ce5.JPG"
                alt="About photo 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-2 transition-opacity duration-300">
                <span className="text-[10px] font-medium text-white/90 tracking-wide uppercase">
                  À Paris🇫🇷
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 rounded-2xl bg-[#1C1C1C] border border-border p-8 lg:p-10 h-[380px] relative flex flex-col gap-6 group transition-all duration-300">
          <span className="text-[10px] font-bold text-text-secondary tracking-widest uppercase opacity-50">
            Some Of My Favorite Music
          </span>
          <div className="flex flex-col gap-4">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/1EIz92Oy4INWPvflAaQyk6?utm_source=generator&theme=0"
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/1oOuVGKCjRYyyAZHfKy1yp?utm_source=generator&theme=0"
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/7jqANyIZWHhVDJRE6pxPnn?utm_source=generator&theme=0"
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
