"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ShaderHero() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pt-24 pb-4 md:pt-28 md:pb-6">
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1], // easeOutExpo
                }}
                className="w-full rounded-[16px] overflow-hidden relative min-h-[75vh] flex flex-col items-center justify-center p-8 md:p-16 text-center isolate shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
                {/* Hero Gradient Background */}
                <div className="absolute inset-0 -z-10">
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        className="w-full h-full object-cover"
                    >
                        <source src="/assets/videos/GradientVideo.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="max-w-4xl w-full flex flex-col items-center gap-6 z-10">
                    <h1
                        className="text-[32px] sm:text-[40px] md:text-[48px] font-normal text-white tracking-tight leading-[1.1] md:leading-[1.15]"
                        style={{ textShadow: '0 2px 20px rgba(0,0,0,0.1)' }}
                    >
                        Tommy Agarwal is a Product Designer with a Computer Science background and 5 years of experience in retail operations.
                    </h1>
                    <p
                        className="text-[16px] md:text-[20px] text-white/95 font-normal mt-2 md:mt-4 max-w-2xl"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                    >
                        Currently #OpenToWork, let's change that!
                    </p>
                </div>
            </motion.div>
        </section>
    );
}


