'use client';

import React, { useEffect, useRef } from 'react';

export type ParticleCategory = 'cs' | 'design' | 'retail' | 'business' | 'default';

interface ParticleBackgroundProps {
  activeCategory?: ParticleCategory;
}

interface Particle {
  x: number;
  y: number;
  startX: number;
  startY: number;
  vx: number;
  vy: number;
  speed: number;
  angle: number;
  baseSizeX: number;
  baseSizeY: number;
  life: number;
  maxLife: number;
  isLogo?: boolean;
  logoName?: string;
}

export default function ParticleBackground({ activeCategory = 'default' }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeCategoryRef = useRef<ParticleCategory>(activeCategory);

  // Update ref when prop changes so the animation loop can access it
  useEffect(() => {
    activeCategoryRef.current = activeCategory;
  }, [activeCategory]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const numParticles = 120;
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let animationFrameId: number;

    const ALL_LOGOS = [
      'adobexdlogo.png', 'antigravitylogo.png', 'chatgptlogo.png', 'claudelogo.png', 
      'csslogo.png', 'cursorlogo.png', 'figmalogo.png', 'figmamakelogo.png', 
      'googlestitchlogo.png', 'htmllogo.png', 'javalogo.png', 'lovablelogo.png', 
      'photoshoplogo.png', 'pythonlogo.png', 'ralphlaurenlogo.png', 'replitlogo.png', 
      'tommyhilfigerlogo.png', 'outcome1.png', 'outcome2.png', 'outcome3.png', 
      'outcome4.png', 'outcome5.png', 'outcome6.png'
    ];

    const CATEGORY_MAP: Record<ParticleCategory, string[]> = {
      cs: ['cursorlogo.png', 'chatgptlogo.png', 'htmllogo.png', 'csslogo.png', 'pythonlogo.png', 'javalogo.png', 'claudelogo.png', 'antigravitylogo.png', 'replitlogo.png'],
      design: ['figmalogo.png', 'replitlogo.png', 'googlestitchlogo.png', 'lovablelogo.png', 'figmamakelogo.png', 'photoshoplogo.png', 'claudelogo.png', 'antigravitylogo.png'],
      retail: ['ralphlaurenlogo.png', 'tommyhilfigerlogo.png'],
      business: ['outcome1.png', 'outcome2.png', 'outcome3.png', 'outcome4.png', 'outcome5.png', 'outcome6.png'],
      default: ['ralphlaurenlogo.png', 'figmalogo.png', 'antigravitylogo.png']
    };

    const logoImages: Record<string, HTMLImageElement> = {};
    ALL_LOGOS.forEach(name => {
      const img = new Image();
      img.src = `/assets/images/logos/${name}`;
      logoImages[name] = img;
    });

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        // Handle high DPI displays for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        centerX = width / 2;
        centerY = height / 2;
        initParticles();
      }
    };

    const spawnParticleOnEdge = (): Particle => {
      let x, y;
      const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      
      // Spawn slightly off-screen
      const margin = 20;
      if (edge === 0) {
        x = Math.random() * width;
        y = -margin;
      } else if (edge === 1) {
        x = width + margin;
        y = Math.random() * height;
      } else if (edge === 2) {
        x = Math.random() * width;
        y = height + margin;
      } else {
        x = -margin;
        y = Math.random() * height;
      }

      const dx = centerX - x;
      const dy = centerY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      
      // Medium speed
      const speed = 0.5 + Math.random() * 1.2;

      const currentCategory = activeCategoryRef.current;
      const isDefault = currentCategory === 'default';
      const spawnChance = isDefault ? 0.05 : 0.10;
      
      const isLogo = Math.random() < spawnChance;
      let logoName = '';
      
      if (isLogo) {
        const pool = CATEGORY_MAP[currentCategory];
        logoName = pool[Math.floor(Math.random() * pool.length)];
      }

      return {
        x,
        y,
        startX: x,
        startY: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        speed,
        angle,
        baseSizeX: 3 + Math.random() * 4, // length of ellipse
        baseSizeY: 1.5 + Math.random() * 1.5, // width of ellipse
        life: 0,
        maxLife: dist / speed,
        isLogo,
        logoName,
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        const p = spawnParticleOnEdge();
        // Randomize initial life so they are distributed across the canvas
        p.life = Math.random() * p.maxLife;
        p.x = p.startX + p.vx * p.life;
        p.y = p.startY + p.vy * p.life;
        particles.push(p);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;

        // Reset particle if it reaches the center or beyond
        if (progress >= 1) {
          particles[i] = spawnParticleOnEdge();
          continue;
        }

        // Calculate visual properties based on progress
        // Size decreases non-linearly as it approaches the center
        const currentScale = Math.max(0, 1 - Math.pow(progress, 1.2));
        
        // Opacity peaks early then fades out
        // progress: 0 -> 0.1 (fade in), 0.1 -> 0.8 (visible), 0.8 -> 1.0 (fade out completely)
        let opacity = 0;
        if (progress < 0.1) {
            opacity = progress / 0.1;
        } else if (progress > 0.8) {
            opacity = Math.max(0, 1 - ((progress - 0.8) / 0.2));
        } else {
            opacity = 1;
        }
        
        // Base max opacity is 0.4 for subtlety
        const finalOpacity = opacity * 0.4;

        if (currentScale > 0.05 && finalOpacity > 0.01) {
          ctx.save();
          ctx.translate(p.x, p.y);
          
          if (p.isLogo && p.logoName && logoImages[p.logoName]?.complete) {
            // New rotation logic: mostly upright, tilting up to 45 degrees in between cardinal directions
            // NE (-45), SE (45), SW (-45), NW (45)
            const logoRotation = Math.sin(2 * p.angle) * (Math.PI / 4);
            ctx.rotate(logoRotation);

            const img = logoImages[p.logoName];
            // Dynamic base height based on logo type
            let baseHeight = 30;
            if (p.logoName === 'tommyhilfigerlogo.png') {
              baseHeight = 18; // Smaller for Tommy Hilfiger
            } else if (p.logoName?.startsWith('outcome')) {
              baseHeight = 45; // Larger for outcome icons to be readable
            }

            const targetHeight = baseHeight * currentScale;
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            const targetWidth = targetHeight * aspectRatio;
            
            ctx.globalAlpha = finalOpacity * 1.5; // Slightly more visible than dots
            ctx.drawImage(img, -targetWidth / 2, -targetHeight / 2, targetWidth, targetHeight);
          } else {
            ctx.rotate(p.angle);
            ctx.beginPath();
            ctx.ellipse(
              0, 0, 
              p.baseSizeX * currentScale, 
              p.baseSizeY * currentScale, 
              0, 0, 2 * Math.PI
            );
            
            // Grey particle color
            ctx.fillStyle = `rgba(100, 100, 100, ${finalOpacity})`;
            ctx.fill();
          }
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Use ResizeObserver for more robust resizing
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    
    if (canvas.parentElement) {
        resizeObserver.observe(canvas.parentElement);
    }
    
    resizeCanvas();
    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
