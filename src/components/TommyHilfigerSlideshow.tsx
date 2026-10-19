"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check, ArrowUpRight, ArrowRight } from "@phosphor-icons/react";

interface TommyHilfigerSlideshowProps {
  currentSlide: number;
  onSelectProject?: (projectId: string) => void;
}

export const SLIDE_LABELS = [
  "Welcome!",
  "context",
  "what’s wrong?",
  "Solution",
  "IMpact #1",
  "IMpact #2",
  "OUTCOME",
  "Thanks for reading!",
];

export default function TommyHilfigerSlideshow({
  currentSlide,
  onSelectProject,
}: TommyHilfigerSlideshowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("tommyagarwalwork@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#e7ecf9] text-[#2c2f3a] font-sans">
      {/* Slide 0: Welcome */}
      {currentSlide === 0 && (
        <div className="w-full h-full flex flex-col justify-start gap-[32px] p-[16px] pt-[24px]">
          <h2 className="text-[28px] sm:text-[32px] font-normal leading-[1.15] text-[#2c2f3a] mt-[8px]">
            Redesigned POS dashboard to increase retail transaction speed
          </h2>

          <div className="relative w-full aspect-[366/265] rounded-[6px] overflow-hidden shadow-sm border border-[#bfc2d1]/40 shrink-0">
            <Image
              src="/assets/images/pos/main-4.png"
              alt="POS Dashboard Preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex justify-end w-full mt-auto pb-[16px]">
            <p className="font-mono text-[12px] uppercase text-[#616475] tracking-wider">
              Pitched June 2025
            </p>
          </div>
        </div>
      )}

      {/* Slide 1: Context */}
      {currentSlide === 1 && (
        <div className="w-full h-full flex items-center justify-center p-[24px]">
          <p className="text-[22px] sm:text-[24px] font-normal leading-[1.4] text-[#2c2f3a] text-left">
            While working as a sales associate at Tommy Hilfiger, I observed several issues with our Point of Sale (POS) system which hindered the checkout experience
          </p>
        </div>
      )}

      {/* Slide 2: Problem / What's Wrong? */}
      {currentSlide === 2 && (
        <div className="w-full h-full flex flex-col justify-center px-[16px] gap-[20px]">
          <div className="bg-[#bfc2d1] border border-[#bfc2d1] rounded-[6px] p-[20px] flex items-center justify-center min-h-[120px]">
            <p className="text-[20px] sm:text-[22px] font-normal leading-[1.3] text-[#2c2f3a] text-center">
              Adding a 10¢ bag fee takes <span className="font-bold">7 clicks</span>
            </p>
          </div>

          <div className="bg-[#bfc2d1] border border-[#bfc2d1] rounded-[6px] p-[20px] flex items-center justify-center min-h-[120px]">
            <p className="text-[20px] sm:text-[22px] font-normal leading-[1.3] text-[#2c2f3a] text-center">
              Loyalty club signups <span className="font-bold">double</span> transaction time
            </p>
          </div>

          <div className="bg-[#bfc2d1] border border-[#bfc2d1] rounded-[6px] p-[20px] flex items-center justify-center min-h-[120px]">
            <p className="text-[20px] sm:text-[22px] font-normal leading-[1.3] text-[#2c2f3a] text-center">
              Excess navigation causes unclear hierarchy
            </p>
          </div>
        </div>
      )}

      {/* Slide 3: Solution */}
      {currentSlide === 3 && (
        <div className="w-full h-full flex items-center justify-center p-[24px]">
          <p className="text-[22px] sm:text-[24px] font-normal leading-[1.4] text-[#2c2f3a] text-left">
            Using my proximity to the checkout experience, I collected qualitative and quantitative data and redesigned the system around the cashier's real workflow.
          </p>
        </div>
      )}

      {/* Slide 4: Impact #1 */}
      {currentSlide === 4 && (
        <div className="w-full h-full flex flex-col justify-start gap-[32px] p-[16px] pt-[20px]">
          <h2 className="text-[24px] sm:text-[28px] font-normal leading-[1.2] text-[#2c2f3a]">
            7 Clicks → 1 Click bag fee
          </h2>

          <div className="relative w-full aspect-[365/264] rounded-[6px] overflow-hidden shadow-sm border border-[#bfc2d1]/40 shrink-0">
            <Image
              src="/assets/images/pos/desktop-12.png"
              alt="Bag Select screen mockup"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-[14px] sm:text-[15px] leading-[1.4] text-[#2c2f3a]">
            Cashiers ask EVERY customer if they want a bag. Inspired by self-checkout machines, I put the bag fee on the happy path, instead of a 7 click detour.
          </p>
        </div>
      )}

      {/* Slide 5: Impact #2 */}
      {currentSlide === 5 && (
        <div className="w-full h-full flex flex-col justify-start gap-[32px] p-[16px] pt-[20px]">
          <h2 className="text-[24px] sm:text-[28px] font-normal leading-[1.2] text-[#2c2f3a]">
            50% Faster Transactions
          </h2>

          <div className="w-full rounded-[6px] overflow-hidden shadow-sm border border-[#bfc2d1]/40 shrink-0">
            <img
              src="/assets/images/pos/pos-terminal.png"
              alt="Parallel transaction workflow"
              className="w-full h-auto object-contain block"
            />
          </div>

          <p className="text-[14px] sm:text-[15px] leading-[1.4] text-[#2c2f3a]">
            As cashiers are processing the items, the customer is inputting their own information for the loyalty program via the card reader. By performing both steps of the transaction simultaneously, we can finish it in half the time.
          </p>
        </div>
      )}

      {/* Slide 6: Outcome */}
      {currentSlide === 6 && (
        <div className="w-full h-full flex items-center justify-center p-[24px]">
          <p className="text-[22px] sm:text-[24px] font-normal leading-[1.4] text-[#2c2f3a] text-left">
            Store-level management supported the redesign, but ultimately, I couldn't get it in front of the corporate team responsible for operational changes.
          </p>
        </div>
      )}

      {/* Slide 7: Thank You */}
      {currentSlide === 7 && (
        <div className="w-full h-full flex flex-col justify-between p-[20px] pt-[32px] pb-[24px]">
          <div className="flex flex-col items-center gap-[24px] mt-[20px]">
            <h3 className="text-[24px] font-normal text-[#2c2f3a] text-center">
              Want to know more?
            </h3>

            <div className="flex flex-col gap-[12px] w-full max-w-[280px]">
              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full h-[48px] px-[16px] bg-[#bfc2d1]/50 hover:bg-[#bfc2d1] rounded-[8px] flex items-center justify-between text-[#2c2f3a] font-mono text-[13px] transition-colors cursor-pointer"
              >
                <span className="truncate">tommyagarwalwork@gmail.com</span>
                {copied ? (
                  <Check size={18} className="text-green-600 shrink-0" />
                ) : (
                  <Copy size={18} className="shrink-0" />
                )}
              </button>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/tommyagarwal/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full h-[48px] px-[16px] bg-[#bfc2d1]/50 hover:bg-[#bfc2d1] rounded-[8px] flex items-center justify-between text-[#2c2f3a] font-mono text-[13px] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={18} className="shrink-0" />
              </a>
            </div>
          </div>

          {/* Up Next Card */}
          {onSelectProject && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                onSelectProject("grammy-artist");
              }}
              className="w-full bg-[#bfc2d1] hover:bg-[#b0b3c2] border border-[#bfc2d1] rounded-[8px] p-[16px] flex items-center justify-between cursor-pointer transition-colors"
            >
              <div className="flex flex-col gap-[4px] max-w-[240px]">
                <p className="font-mono text-[11px] uppercase text-[#616475] tracking-wider">
                  up next...
                </p>
                <p className="text-[14px] font-normal leading-[1.3] text-[#2c2f3a]">
                  Boosting Grammy Artist’s audience conversion through a website redesign
                </p>
              </div>
              <ArrowRight size={24} className="text-[#2c2f3a] shrink-0" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
