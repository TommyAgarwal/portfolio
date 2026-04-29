"use client";

import { useEffect, useState } from "react";

export default function MouseTrackingBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 }); // Out of view initially

  useEffect(() => {
    // We use clientX/Y + scroll offset to always have the latest coordinates.
    let lastClientX = -1000;
    let lastClientY = -1000;

    const syncPos = (clientX: number, clientY: number) => {
      lastClientX = clientX;
      lastClientY = clientY;
      setMousePos({ 
        x: clientX + window.scrollX, 
        y: clientY + window.scrollY 
      });
    };

    const onMove = (e: MouseEvent) => syncPos(e.clientX, e.clientY);
    const onScroll = () => syncPos(lastClientX, lastClientY);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll);
    
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none opacity-0 transition-opacity duration-1000"
      style={{
        opacity: mousePos.x === -1000 ? 0 : 1,
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      } as any}
    >
      {/* Base Dark Dots */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1' fill='%23282828' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Light Dots Masked by Mouse Position */}
      <div 
        className="absolute inset-0 accent-dot-layer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1' fill='%23FFFFFF' fill-opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          maskImage: `radial-gradient(circle 220px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 220px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}
