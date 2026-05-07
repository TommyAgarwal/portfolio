'use client';

import React, { useState } from 'react';
import ParticleBackground, { ParticleCategory } from './ParticleBackground';

export default function Hero() {
    const [activeCategory, setActiveCategory] = useState<ParticleCategory>('default');

    return (
        <header className="w-full flex flex-col items-center justify-center text-center min-h-[60vh] px-4 md:px-8 pt-40 pb-16 relative overflow-hidden">
            <ParticleBackground activeCategory={activeCategory} />
            
            <div className="flex flex-col items-center max-w-4xl w-full gap-8 relative z-10 pointer-events-none">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-[16px] md:text-[20px] text-black font-normal tracking-tight pointer-events-auto">
                        Hello World! I’m Tommy Agarwal
                    </p>
                    <h1 className="text-[28px] md:text-[32px] font-semibold text-black tracking-tight leading-[1.2] pointer-events-auto">
                        An impact-driven Product Designer who codes
                    </h1>
                </div>
                
                <p className="text-[14px] md:text-[16px] text-black leading-relaxed max-w-[580px] font-normal pointer-events-auto">
                    <span 
                        className={`transition-all duration-200 cursor-default ${activeCategory === 'cs' ? 'font-bold' : ''}`}
                        onMouseEnter={() => setActiveCategory('cs')}
                        onMouseLeave={() => setActiveCategory('default')}
                    >
                        Rooted in Computer Science
                    </span>
                    , with{' '}
                    <span 
                        className={`transition-all duration-200 cursor-default ${activeCategory === 'design' ? 'font-bold' : ''}`}
                        onMouseEnter={() => setActiveCategory('design')}
                        onMouseLeave={() => setActiveCategory('default')}
                    >
                        freelance product design experience
                    </span>
                    {' '}and{' '}
                    <span 
                        className={`transition-all duration-200 cursor-default ${activeCategory === 'retail' ? 'font-bold' : ''}`}
                        onMouseEnter={() => setActiveCategory('retail')}
                        onMouseLeave={() => setActiveCategory('default')}
                    >
                        5 years in retail operations
                    </span>
                    , I design digital products that help brands translate user needs into{' '}
                    <span 
                        className={`transition-all duration-200 cursor-default ${activeCategory === 'business' ? 'font-bold' : ''}`}
                        onMouseEnter={() => setActiveCategory('business')}
                        onMouseLeave={() => setActiveCategory('default')}
                    >
                        measurable business outcomes
                    </span>
                    .
                </p>
            </div>
        </header>
    );
}
