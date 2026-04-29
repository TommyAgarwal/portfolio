'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';

const Resume = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (imagePath: string) => {
    setHoveredImage(imagePath);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const [focusId, setFocusId] = useState<number | string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({ summary: true });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 450);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (section: string) => {
    if (!isMobile) return;
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isExpanded = (section: string) => !isMobile || expandedSections[section];

  return (
    <div className="resume-container w-full py-12 relative" ref={containerRef}>
      {/* Header with Title and Download Icon */}
      <div className="flex items-center gap-4 mb-8 px-0 lg:px-0">
        <h2 className="text-4xl font-bold text-text-primary tracking-tight">Resume</h2>
        <a 
          href="/assets/TommyAgarwalResume_NoContact.pdf" 
          download 
          className="flex items-center justify-center w-10 h-10 bg-card-bg-accent hover:bg-card-bg-hover rounded-full transition-all duration-300 border border-border group"
          title="Download PDF"
        >
          <img src="/assets/icons/download.svg" alt="Download" className="w-5 h-5 filter invert opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Bento Box Container */}
      <div className="bg-card-bg p-6 lg:p-10 rounded-[32px] border border-border overflow-hidden relative">
        {/* Darkening Overlay */}
        <AnimatePresence>
          {focusId !== null && !isMobile && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-40 pointer-events-none bg-[#101010]/70 backdrop-blur-[2px]"
            />
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 relative">
          
          {/* Column 1: Summary & Experience */}
          <div className="lg:col-span-8 flex flex-col gap-3 lg:gap-4">
            {/* Summary Card */}
            <section 
              className={`bg-card-bg p-8 lg:p-10 rounded-2xl border border-border flex flex-col gap-6 transition-all duration-300 ${focusId === 'summary' ? 'relative z-50 bg-[#1C1C1C] shadow-2xl ring-1 ring-white/10 border-white/20' : ''} ${isMobile ? 'cursor-pointer' : ''}`}
              onMouseEnter={() => setFocusId('summary')}
              onMouseLeave={() => setFocusId(null)}
              onClick={() => toggleSection('summary')}
            >
              <div className="flex items-start justify-between">
                <h3 className="resume-section-title m-0 uppercase">SUMMARY</h3>
                {isMobile && (
                  <motion.div
                    animate={{ rotate: expandedSections['summary'] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    <CaretDown size={20} weight="bold" className="text-text-secondary" />
                  </motion.div>
                )}
              </div>
              <AnimatePresence>
                {isExpanded('summary') && (
                  <motion.div
                    initial={isMobile ? { height: 0, opacity: 0 } : false}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="resume-text leading-relaxed text-lg md:text-xl text-text-secondary m-0">
                      Self-starting product designer with a CS degree, dual UX certifications, and a proven track record freelancing on global campaigns. Combines design thinking with technical fluency to bridge the gap between UX & engineering. Passionate about solving complex problems through innovative technologies and intuitive user experiences.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Experience Card */}
            <section 
              className={`bg-card-bg p-8 lg:p-10 rounded-2xl border border-border flex flex-col gap-4 overflow-visible ${isMobile ? 'cursor-pointer' : ''}`}
              onClick={() => toggleSection('experience')}
            >
              <div className={`flex items-start justify-between ${isMobile ? 'mb-2' : 'mb-0'}`}>
                <h3 className="resume-section-title m-0 uppercase">EXPERIENCE</h3>
                {isMobile && (
                  <motion.div
                    animate={{ rotate: expandedSections['experience'] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    <CaretDown size={20} weight="bold" className="text-text-secondary" />
                  </motion.div>
                )}
              </div>
              
              <AnimatePresence>
                {isExpanded('experience') && (
                  <motion.div
                    initial={isMobile ? { height: 0, opacity: 0 } : false}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={isMobile ? "overflow-hidden" : "overflow-visible"}
                  >
                    <div className="flex flex-col gap-10 mt-8">
                      {/* Freelance - Product Designer */}
                      <div 
                        className={`experience-item transition-all duration-300 rounded-xl p-6 -m-6 ${focusId === 0 ? 'relative z-50 bg-[#1C1C1C] shadow-2xl ring-1 ring-white/10' : ''}`}
                        onMouseEnter={() => setFocusId(0)}
                        onMouseLeave={() => setFocusId(null)}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-3">
                          <h4 className="experience-role text-2xl font-bold text-text-primary">Product Designer — <span className="font-medium">Freelance</span></h4>
                          <span className="experience-date text-xs font-bold text-text-secondary tracking-widest uppercase py-1.5 px-4 bg-card-bg-accent rounded-full h-fit">MAY 2025 - PRESENT</span>
                        </div>
                        <ul className="resume-list space-y-4">
                          <li>Delivered end-to-end web design projects for local artists, from research and wireframing to responsive prototypes, leveraging AI no-code tools to accelerate development and help clients launch faster.</li>
                          <li>Redesigned Tommy Hilfiger’s POS and checkout system, cutting transaction time by 50% which led management to explore broader adoption of the redesign.</li>
                          <li>Co-led a team at the Amazon Music design-a-thon, resolving team conflict to align on a shared vision and producing user flows, wireframes, and a final pitch presented to Amazon design leads.</li>
                        </ul>
                      </div>

                      {/* StreetCode Academy */}
                      <div 
                        className={`experience-item transition-all duration-300 rounded-xl p-6 -m-6 ${focusId === 1 ? 'relative z-50 bg-[#1C1C1C] shadow-2xl ring-1 ring-white/10' : ''}`}
                        onMouseEnter={() => setFocusId(1)}
                        onMouseLeave={() => setFocusId(null)}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-3">
                          <h4 className="experience-role text-2xl font-bold text-text-primary">Design Instructor — <span className="font-medium">StreetCode Academy</span></h4>
                          <span className="experience-date text-xs font-bold text-text-secondary tracking-widest uppercase py-1.5 px-4 bg-card-bg-accent rounded-full h-fit">JAN 2025 - PRESENT</span>
                        </div>
                        <ul className="resume-list space-y-4">
                          <li>Facilitated weekly workshops in product design and AI tools (Replit, ChatGPT) as a volunteer for 15+ students from underrepresented backgrounds.</li>
                          <li>Guided product strategy and prompt engineering of an AI speech-to-ASL app which earned strong praise from Amazon employees at the final showcase.</li>
                        </ul>
                      </div>

                      {/* Freelance - Graphic Designer */}
                      <div 
                        className={`experience-item transition-all duration-300 rounded-xl p-6 -m-6 ${focusId === 2 ? 'relative z-50 bg-[#1C1C1C] shadow-2xl ring-1 ring-white/10' : ''}`}
                        onMouseEnter={() => setFocusId(2)}
                        onMouseLeave={() => setFocusId(null)}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-3">
                          <h4 className="experience-role text-2xl font-bold text-text-primary">Graphic Designer — <span className="font-medium">Freelance</span></h4>
                          <span className="experience-date text-xs font-bold text-text-secondary tracking-widest uppercase py-1.5 px-4 bg-card-bg-accent rounded-full h-fit">MAR 2018 - PRESENT</span>
                        </div>
                        <ul className="resume-list space-y-4">
                          <li>Launched an independent freelance practice serving nonprofits and independent artists with print and digital design.</li>
                          <li>Acted as a trilingual creative partner, translating client goals into compelling visuals through a feedback-driven process.</li>
                        </ul>
                      </div>

                      {/* Tarana Wireless */}
                      <div 
                        className={`experience-item transition-all duration-300 rounded-xl p-6 -m-6 ${focusId === 3 ? 'relative z-50 bg-[#1C1C1C] shadow-2xl ring-1 ring-white/10' : ''}`}
                        onMouseEnter={() => setFocusId(3)}
                        onMouseLeave={() => setFocusId(null)}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-3">
                          <h4 className="experience-role text-2xl font-bold text-text-primary">IT/Lab Intern — <span className="font-medium">Tarana Wireless</span></h4>
                          <span className="experience-date text-xs font-bold text-text-secondary tracking-widest uppercase py-1.5 px-4 bg-card-bg-accent rounded-full h-fit">JUN 2019 - AUG 2021</span>
                        </div>
                        <ul className="resume-list space-y-4">
                          <li>Optimized user experience across engineering labs by designing clear guides, streamlining cable systems, and developing a Python health check script—while resolving 50+ weekly IT issues through cross-functional collaboration.</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </div>

          {/* Column 2: Education, Certifications, Skills, Tools */}
          <div className="lg:col-span-4 flex flex-col gap-3 lg:gap-4">
            {/* Education Card */}
            <section 
              className={`bg-card-bg p-8 lg:p-10 rounded-2xl border border-border flex flex-col gap-6 ${isMobile ? 'cursor-pointer' : ''}`}
              onClick={() => toggleSection('education')}
            >
              <div className="flex items-start justify-between">
                <h3 className="resume-section-title m-0 uppercase">EDUCATION</h3>
                {isMobile && (
                  <motion.div
                    animate={{ rotate: expandedSections['education'] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    <CaretDown size={20} weight="bold" className="text-text-secondary" />
                  </motion.div>
                )}
              </div>
              <AnimatePresence>
                {isExpanded('education') && (
                  <motion.div
                    initial={isMobile ? { height: 0, opacity: 0 } : false}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="sidebar-item group relative cursor-none"
                      onMouseEnter={() => handleMouseEnter('/assets/images/ResumePhotos/SJSU.png')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-100">
                        <h4 className="font-bold text-text-primary text-xl">San Jose State University</h4>
                        <p className="text-lg font-medium">B.S Computer Science</p>
                        <p className="text-sm text-text-secondary mt-1">May 2024</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Certifications Card */}
            <section 
              className={`bg-card-bg p-8 lg:p-10 rounded-2xl border border-border flex flex-col gap-4 ${isMobile ? 'cursor-pointer' : ''}`}
              onClick={() => toggleSection('certifications')}
            >
              <div className={`flex items-start justify-between ${isMobile ? 'mb-2' : 'mb-0'}`}>
                <h3 className="resume-section-title m-0 uppercase">CERTIFICATIONS</h3>
                {isMobile && (
                  <motion.div
                    animate={{ rotate: expandedSections['certifications'] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    <CaretDown size={20} weight="bold" className="text-text-secondary" />
                  </motion.div>
                )}
              </div>
              <AnimatePresence>
                {isExpanded('certifications') && (
                  <motion.div
                    initial={isMobile ? { height: 0, opacity: 0 } : false}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-8 mt-4">
                      <div 
                        className="sidebar-item group relative cursor-none"
                        onMouseEnter={() => handleMouseEnter('/assets/images/ResumePhotos/GoogleCertificate.jpeg')}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="relative z-10">
                          <h4 className="font-bold text-text-primary text-xl">Google</h4>
                          <p className="text-lg font-medium">UX Professional Design Certificate</p>
                          <p className="text-sm text-text-secondary mt-1">September 2024</p>
                        </div>
                      </div>
                      <div 
                        className="sidebar-item group relative cursor-none"
                        onMouseEnter={() => handleMouseEnter('/assets/images/ResumePhotos/MetaCertificate.jpeg')}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="relative z-10">
                          <h4 className="font-bold text-text-primary text-xl">Meta</h4>
                          <p className="text-lg font-medium">Principles of UX/UI Design Certificate</p>
                          <p className="text-sm text-text-secondary mt-1">August 2024</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Skills Card */}
            <section 
              className={`bg-card-bg p-8 lg:p-10 rounded-2xl border border-border flex flex-col gap-6 ${isMobile ? 'cursor-pointer' : ''}`}
              onClick={() => toggleSection('skills')}
            >
              <div className="flex items-start justify-between">
                <h3 className="resume-section-title m-0 uppercase">SKILLS</h3>
                {isMobile && (
                  <motion.div
                    animate={{ rotate: expandedSections['skills'] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    <CaretDown size={20} weight="bold" className="text-text-secondary" />
                  </motion.div>
                )}
              </div>
              <AnimatePresence>
                {isExpanded('skills') && (
                  <motion.div
                    initial={isMobile ? { height: 0, opacity: 0 } : false}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-lg leading-relaxed text-text-primary font-medium m-0">
                      UX/UI Design, Wireframing, User Flows, Competitive Analysis, Prototyping, User Research, Cross-functional Collaboration, Prompt Engineering
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Tools Card */}
            <section 
              className={`bg-card-bg p-8 lg:p-10 rounded-2xl border border-border flex flex-col gap-6 ${isMobile ? 'cursor-pointer' : ''}`}
              onClick={() => toggleSection('tools')}
            >
              <div className="flex items-start justify-between">
                <h3 className="resume-section-title m-0 uppercase">TOOLS</h3>
                {isMobile && (
                  <motion.div
                    animate={{ rotate: expandedSections['tools'] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    <CaretDown size={20} weight="bold" className="text-text-secondary" />
                  </motion.div>
                )}
              </div>
              <AnimatePresence>
                {isExpanded('tools') && (
                  <motion.div
                    initial={isMobile ? { height: 0, opacity: 0 } : false}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-x-1 gap-y-3 text-lg leading-relaxed text-text-primary font-medium m-0">
                      {[
                        { name: 'Figma', logo: 'figmalogo.png' },
                        { name: 'Adobe Photoshop', logo: 'photoshoplogo.png' },
                        { name: 'Adobe XD', logo: 'adobexdlogo.png' },
                        { name: 'Replit', logo: 'replitlogo.png' },
                        { name: 'Python', logo: 'pythonlogo.png' },
                        { name: 'Java', logo: 'javalogo.png' },
                        { name: 'HTML', logo: 'htmllogo.png' },
                        { name: 'CSS', logo: 'csslogo.png' },
                        { name: 'ChatGPT', logo: 'chatgptlogo.png' },
                        { name: 'Stitch', logo: 'googlestitchlogo.png' },
                        { name: 'Figma Make', logo: 'figmamakelogo.svg' },
                        { name: 'Lovable', logo: 'lovablelogo.png' },
                        { name: 'Antigravity', logo: 'antigravitylogo.png' },
                        { name: 'Cursor', logo: 'cursorlogo.png' },
                        { name: 'Claude Code', logo: 'claudelogo.png' }
                      ].map((tool, index, array) => (
                        <div key={tool.name} className="whitespace-nowrap flex items-center">
                          <div className="group relative inline-flex items-center h-8">
                            <span className="group-hover:opacity-0 transition-opacity duration-200">
                              {tool.name}
                            </span>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                              <img 
                                src={`/assets/images/ResumePhotos/toolslogo/${tool.logo}`} 
                                alt={tool.name}
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                          {index < array.length - 1 && <span className="text-text-primary">,</span>}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {hoveredImage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, x: mousePos.x, y: mousePos.y }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePos.x, 
              y: mousePos.y
            }}
            exit={{ opacity: 0, scale: 0.5, x: mousePos.x, y: mousePos.y }}
            transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
            className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
            style={{ 
              left: 0, 
              top: 0,
            }}
          >
            <div className="relative">
              <img 
                src={hoveredImage} 
                alt="Preview" 
                className="max-w-[140px] max-h-[110px] w-auto h-auto object-contain rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/20"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resume;
