"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, X } from "@phosphor-icons/react";

interface StorySlideshowOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  slideLabels?: string[];
  children: React.ReactNode;
  durationMs?: number;
}

export default function StorySlideshowOverlay({
  isOpen,
  onClose,
  totalSlides,
  currentSlide,
  onSlideChange,
  slideLabels = [],
  children,
  durationMs = 5000,
}: StorySlideshowOverlayProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isHolding, setIsHolding] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const scrollOffset = useRef<number>(0);

  // Background Scroll Lock
  useEffect(() => {
    if (isOpen) {
      scrollOffset.current = window.scrollY;
      document.body.style.top = `-${scrollOffset.current}px`;
      document.body.classList.add("body-fixed");
      setIsPlaying(true);
      setProgress(0);

      return () => {
        const savedScroll = scrollOffset.current;
        document.body.classList.remove("body-fixed");
        document.body.style.top = "";
        setTimeout(() => {
          window.scrollTo(0, savedScroll);
        }, 10);
      };
    }
  }, [isOpen]);

  // Handle slide change reset progress
  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      onSlideChange(currentSlide + 1);
    } else {
      setIsPlaying(false);
      setProgress(100);
    }
  }, [currentSlide, totalSlides, onSlideChange]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      onSlideChange(currentSlide - 1);
    } else {
      setProgress(0);
    }
  }, [currentSlide, onSlideChange]);

  // Handle slide advance when progress reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      handleNext();
    }
  }, [progress, handleNext]);

  // Timer loop for active progress bar
  useEffect(() => {
    if (!isOpen || !isPlaying || isHolding) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const interval = 50; // update every 50ms
    const step = (interval / durationMs) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => Math.min(100, prev + step));
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, isPlaying, isHolding, durationMs]);

  // Keyboard Navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen) return null;

  const currentLabel = slideLabels[currentSlide] || "";

  return (
    <div
      className="fixed inset-0 z-[4000] flex items-center justify-center bg-black/75 backdrop-blur-sm transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
    >
      {/* Click outside backdrop to close */}
      <div
        className="absolute inset-0 z-0 cursor-pointer"
        onClick={onClose}
        aria-label="Close slideshow"
      />

      {/* Mobile Card Container */}
      <div
        className="relative z-10 w-full h-full sm:h-[844px] sm:max-h-[95vh] sm:w-[390px] sm:rounded-[8px] bg-[#e7ecf9] text-[#2c2f3a] shadow-2xl flex flex-col overflow-hidden select-none"
        onMouseDown={() => setIsHolding(true)}
        onMouseUp={() => setIsHolding(false)}
        onTouchStart={() => setIsHolding(true)}
        onTouchEnd={() => setIsHolding(false)}
      >
        {/* Top Header Controls Section */}
        <div className="pt-[14px] px-[16px] pb-[10px] flex flex-col gap-[12px] shrink-0 z-30 bg-[#e7ecf9]">
          {/* Progress Bars (8 Segments) */}
          <div className="flex gap-[4px] items-center w-full">
            {Array.from({ length: totalSlides }).map((_, index) => {
              let fillWidth = "0%";
              if (index < currentSlide) fillWidth = "100%";
              else if (index === currentSlide) fillWidth = `${progress}%`;

              return (
                <div
                  key={index}
                  className="flex-1 h-[3px] bg-[#bfc2d1] rounded-[1.5px] overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSlideChange(index);
                  }}
                >
                  <div
                    className="h-full bg-[#616475] transition-all duration-75 ease-linear rounded-[1.5px]"
                    style={{ width: fillWidth }}
                  />
                </div>
              );
            })}
          </div>

          {/* Label + Play/Pause & Close buttons */}
          <div className="flex justify-between items-center w-full min-h-[24px]">
            <p className="font-mono text-[12px] font-normal text-[#616475] uppercase tracking-wider truncate max-w-[220px]">
              {currentLabel}
            </p>

            <div className="flex items-center gap-[12px]">
              {/* Play / Pause Toggle Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying((prev) => !prev);
                }}
                className="text-[#616475] hover:text-[#2c2f3a] transition-colors p-1"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <Pause size={20} weight="bold" /> : <Play size={20} weight="bold" />}
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="text-[#616475] hover:text-[#2c2f3a] transition-colors p-1"
                aria-label="Close case study"
              >
                <X size={20} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Tap Zone overlay: Left 35% for previous, Right 65% for next */}
        <div className="absolute inset-0 pt-[60px] flex z-20 pointer-events-auto">
          <div
            className="w-[35%] h-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous slide"
          />
          <div
            className="w-[65%] h-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next slide"
          />
        </div>

        {/* Slide Content Viewport */}
        <div className="relative flex-1 w-full overflow-hidden z-10 pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
