"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Grainient from './Grainient';
import SplitText from './SplitText';

export default function ShaderHero() {
    return (
        <section className="w-full max-w-[1100px] mx-auto px-8 md:px-0 pt-28 pb-4 md:pt-32 md:pb-6">
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1], // easeOutExpo
                }}
                className="w-full rounded-[16px] overflow-hidden relative flex flex-col items-center justify-center px-12 py-24 md:px-[200px] md:py-[144px] text-center isolate shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
                {/* Hero Gradient Background */}
                <Grainient className="absolute inset-0 -z-10" />

                <div className="max-w-[680px] w-full flex flex-col items-center gap-8 z-10">
                    <SplitText
                        text="Tommy Agarwal is a Product (UX) Designer with a Computer Science background and 5 years of experience in retail operations."
                        className="text-[28px] sm:text-[32px] md:text-[36px] font-normal text-white tracking-tight leading-[1.15]"
                        style={{ textShadow: '0px 1px 20px rgba(0,0,0,0.1)' }}
                        delay={250}
                        duration={1.3}
                        from={{ opacity: 0, y: 15 }}
                        ease="power3.out"
                        threshold={0.1}
                        rootMargin="0px"
                        textAlign="center"
                        tag="h1"
                        splitType="lines"
                    />
                    <p
                        className="text-[16px] md:text-[18px] text-white/95 font-normal"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                    >
                        Currently #OpenToWork, let&apos;s change that!
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
