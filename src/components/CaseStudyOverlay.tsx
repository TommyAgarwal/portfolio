"use client";

import { useEffect, useRef, useState } from "react";

interface CaseStudyOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    projectId?: string;
}

export default function CaseStudyOverlay({ isOpen, onClose, children, projectId }: CaseStudyOverlayProps) {
    const overlayPanelRef = useRef<HTMLDivElement>(null);
    const overlayContentRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const dragStartY = useRef(0);
    const dragCurrentY = useRef(0);
    const swipeThreshold = 60;

    const scrollOffset = useRef(0);

    // Handle Background Scroll Lock
    useEffect(() => {
        if (isOpen) {
            scrollOffset.current = window.scrollY;
            document.body.style.top = `-${scrollOffset.current}px`;
            document.body.classList.add("body-fixed");

            // Reset overlay scroll
            if (overlayContentRef.current) {
                overlayContentRef.current.scrollTop = 0;
            }

            return () => {
                const savedScroll = scrollOffset.current;
                document.body.classList.remove("body-fixed");
                document.body.style.top = "";
                // Use a small timeout to ensure restoration overrides any browser/framework scroll management
                setTimeout(() => {
                    window.scrollTo(0, savedScroll);
                }, 10);
            };
        }
    }, [isOpen]);

    // Mobile Scroll-Active Effect
    useEffect(() => {
        if (!isOpen || !overlayContentRef.current) return;

        const content = overlayContentRef.current;
        const handleScroll = () => {
            if (window.innerWidth > 900) return; // Only on mobile/tablet

            const items = content.querySelectorAll('.cs-card-problem, .cs-card-solution, .cs-card-outcome, .cs-research-card, .cs-audit-card, .cs-workflow-item, .cs-flow-step, .cs-impact-card, .cs-takeaway-card, .cs-goals-card li');
            const center = window.innerHeight / 2;

            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.top + rect.height / 2;

                // If the item center is within a range of the screen center, mark it as active
                if (Math.abs(itemCenter - center) < 120) {
                    item.classList.add('is-active');
                } else {
                    item.classList.remove('is-active');
                }
            });
        };

        content.addEventListener("scroll", handleScroll);
        // Run once on load to catch initial state
        handleScroll();

        return () => content.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    // Handle Drag / Swipe to Close
    const startDrag = (y: number, target: EventTarget | null) => {
        const el = target as HTMLElement;
        const isHeaderArea = el.closest(".cs-overlay-header-mobile") || el.classList.contains("cs-overlay-grabber");

        // Only allow drag if we are at the top of the scroll content, OR we are dragging the header/grabber specifically
        if (overlayContentRef.current && (overlayContentRef.current.scrollTop <= 0 || isHeaderArea)) {
            dragStartY.current = y;
            dragCurrentY.current = y;
            setIsDragging(true);
            if (overlayPanelRef.current) {
                overlayPanelRef.current.style.transition = "none";
            }
        }
    };

    const moveDrag = (y: number, target: EventTarget | null) => {
        if (!isDragging || !overlayPanelRef.current) return false;
        dragCurrentY.current = y;
        const deltaY = dragCurrentY.current - dragStartY.current;

        const el = target as HTMLElement;

        if (deltaY > 0) {
            if (overlayContentRef.current && (overlayContentRef.current.scrollTop <= 0 || el.closest(".cs-overlay-header-mobile"))) {
                overlayPanelRef.current.style.transform = `translateY(${deltaY}px)`;
                return true;
            } else {
                stopDrag();
            }
        }
        return false;
    };

    const stopDrag = () => {
        if (!isDragging) return;
        setIsDragging(false);

        if (overlayPanelRef.current) {
            overlayPanelRef.current.style.transition = "transform 0.3s ease";
        }

        const deltaY = dragCurrentY.current - dragStartY.current;
        if (deltaY > swipeThreshold) {
            onClose();
            // Wait for out animation to finish before resetting transform
            setTimeout(() => {
                if (overlayPanelRef.current) overlayPanelRef.current.style.transform = "";
            }, 300);
        } else {
            if (overlayPanelRef.current) {
                overlayPanelRef.current.style.transform = "";
            }
        }
    };

    // Attach touch/mouse listeners
    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => startDrag(e.touches[0].clientY, e.target);
        const handleTouchMove = (e: TouchEvent) => {
            if (moveDrag(e.touches[0].clientY, e.target)) {
                if (e.cancelable) e.preventDefault();
            }
        };
        const handleTouchEnd = stopDrag;

        const handleMouseDown = (e: MouseEvent) => startDrag(e.clientY, e.target);
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) moveDrag(e.clientY, e.target);
        };
        const handleMouseUp = stopDrag;

        const panel = overlayPanelRef.current;
        if (panel) {
            panel.addEventListener("touchstart", handleTouchStart, { passive: true });
            panel.addEventListener("touchmove", handleTouchMove, { passive: false });
            panel.addEventListener("touchend", handleTouchEnd);
            panel.addEventListener("mousedown", handleMouseDown);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            if (panel) {
                panel.removeEventListener("touchstart", handleTouchStart);
                panel.removeEventListener("touchmove", handleTouchMove);
                panel.removeEventListener("touchend", handleTouchEnd);
                panel.removeEventListener("mousedown", handleMouseDown);
            }
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    // Escape Key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // Browser Back Button history logic
    useEffect(() => {
        if (isOpen && projectId) {
            const hash = `#${projectId}`;
            if (window.location.hash !== hash) {
                window.history.pushState({ isOverlay: true }, "", window.location.pathname + hash);
            }
        }
    }, [isOpen, projectId]);

    useEffect(() => {
        const handlePopState = (e: PopStateEvent) => {
            if (isOpen && (!e.state || !e.state.isOverlay)) {
                onClose();
            }
        };
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [isOpen, onClose]);

    return (
        <div
            className={`fixed inset-0 z-[4000] flex justify-center items-end lg:items-center transition-opacity duration-300 ease-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            aria-hidden={!isOpen}
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/15 transition-opacity"
                onClick={() => {
                    if (isOpen) {
                        window.history.back(); // Use history back to naturally trigger close via popstate
                    }
                }}
            ></div>

            {/* Panel */}
            <div
                ref={overlayPanelRef}
                className={`relative bg-bg cs-overlay-theme shadow-none w-full max-w-[1076px] h-[95vh] lg:h-[85vh] rounded-t-[32px] lg:rounded-[32px] border-t border-border lg:border-none flex flex-col overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] p-2 lg:py-8 lg:px-2 ${isOpen ? "translate-y-0" : "translate-y-full lg:translate-y-8"
                    }`}
            >
                {/* Mobile Header elements */}
                <div className="cs-overlay-header-mobile flex lg:hidden justify-center items-center h-8 shrink-0 w-full relative pt-2 pb-4 cursor-grab active:cursor-grabbing">
                    <div className="cs-overlay-grabber w-16 h-1.5 bg-card-bg-accent rounded-[3px]"></div>
                    <button
                        onClick={() => window.history.back()}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-card-bg-hover rounded-full border-none cursor-pointer text-text-secondary"
                        aria-label="Close Case Study"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Content - Padding is handled by the child or cs-wrapper */}
                <div
                    ref={overlayContentRef}
                    className="card-scrollbar flex-1 overflow-y-auto overscroll-contain w-full"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
