// overlay.js

const overlay = document.getElementById("csOverlay");
const overlayBackdrop = document.getElementById("csOverlayBackdrop");
const overlayPanel = document.getElementById("csOverlayPanel");
const overlayContent = document.getElementById("csOverlayContent");
const overlayCloseBtn = document.getElementById("csOverlayCloseBtn");

// Select all project links that should open in the overlay
// For now, we assume any link targeting a case study html page
const caseStudyLinks = document.querySelectorAll('.case-study-card');

// Disable automatic browser scroll restoration to prevent "snapping"
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

let scrollPosition = 0;
let isOverlayOpen = false;

// We'll wrap the inner card logic in a proper <a> tag to make it valid HTML/accessible,
// or just listen to the click on the card.
// For this implementation, we'll listen to the card click directly and use a data-href or assume tommy-hilfiger.html
const TH_CARD = caseStudyLinks[0]; // Assuming first card is TH

TH_CARD.style.cursor = "pointer"; // Make it look clickable if it wasn't
TH_CARD.addEventListener('click', (e) => {
    // Prevent default if it was a link
    e.preventDefault();
    openOverlay('tommy-hilfiger.html', '/tommy-hilfiger');
});

async function openOverlay(fetchUrl, pushStateUrl) {
    if (isOverlayOpen) return;

    try {
        // 1. Fetch the content
        overlayContent.innerHTML = '<div style="text-align: center; color: var(--color-text-secondary);">Loading...</div>';

        // Lock background scrolling and save position
        scrollPosition = window.pageYOffset;
        document.body.style.top = `-${scrollPosition}px`;
        document.body.classList.add("body-fixed");
        document.documentElement.classList.add("overlay-open");
        document.body.classList.add("overlay-open");

        overlay.classList.add("is-open");
        isOverlayOpen = true;

        const response = await fetch(fetchUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const htmlString = await response.text();

        // 2. Parse HTML and extract .cs-wrapper
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const wrapperContent = doc.querySelector('.cs-wrapper');

        if (wrapperContent) {
            overlayContent.innerHTML = wrapperContent.innerHTML;
        } else {
            overlayContent.innerHTML = '<p>Error loading case study content.</p>';
        }

        // 3. Update URL (History API)
        // Push state only if we aren't already there
        if (window.location.pathname !== pushStateUrl) {
            history.pushState({ isOverlay: true }, "", pushStateUrl);
        }

        // Reset overlay scroll position
        overlayContent.scrollTop = 0;

    } catch (error) {
        console.error("Failed to fetch case study:", error);
        closeOverlay();
        // Fallback: navigate normally if fetch fails
        window.location.href = fetchUrl;
    }
}

function closeOverlay() {
    if (!isOverlayOpen) return;

    // We just trigger history back. The 'popstate' listener below
    // will handle the actual visual cleanup when the back action occurs.
    if (history.state && history.state.isOverlay) {
        history.back();
    } else {
        // Fallback for cases where state might be missing
        performCloseVisuals();
        history.replaceState(null, "", "/");
    }
}

function performCloseVisuals() {
    if (!isOverlayOpen) return;

    document.documentElement.classList.remove("overlay-open");
    document.body.classList.remove("overlay-open");
    document.body.classList.remove("body-fixed");
    document.body.style.top = '';

    // Restore the exact scroll position before the overlay was opened
    window.scrollTo(0, scrollPosition);

    overlay.classList.remove("is-open");
    isOverlayOpen = false;

    // Clear content slightly after animation finishes
    setTimeout(() => {
        if (!isOverlayOpen) overlayContent.innerHTML = '';
    }, 300);
}

// --- Close Triggers ---

// Backdrop click
overlayBackdrop.addEventListener("click", closeOverlay);

// X Button (Mobile)
overlayCloseBtn.addEventListener("click", closeOverlay);

// Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOverlayOpen) {
        closeOverlay();
    }
});

// Browser Back Button (popstate)
window.addEventListener("popstate", (e) => {
    // If the modal was open but the state no longer says it should be, close it
    if (isOverlayOpen && (!e.state || !e.state.isOverlay)) {
        performCloseVisuals();
    }
});

// --- Mobile Swipe/Drag to Close ---
let startY = 0;
let currentY = 0;
let isDragging = false;
// Threshold to close modal: 60px swipe/drag down
const swipeThreshold = 60;

function startDrag(y, target) {
    const isHeaderArea = target.closest('.cs-overlay-header-mobile') || target.classList.contains('cs-overlay-grabber');
    if (overlayContent.scrollTop <= 0 || isHeaderArea) {
        startY = y;
        currentY = startY;
        isDragging = true;
        overlayPanel.classList.add('is-dragging');
    }
}

function moveDrag(y, target) {
    if (!isDragging) return false;
    currentY = y;
    const deltaY = currentY - startY;

    if (deltaY > 0) {
        if (overlayContent.scrollTop <= 0 || target.closest('.cs-overlay-header-mobile')) {
            overlayPanel.style.transform = `translateY(${deltaY}px)`;
            return true; // Indicate we are handling drag
        } else {
            stopDrag();
        }
    }
    return false;
}

function stopDrag() {
    if (!isDragging) return;
    isDragging = false;
    overlayPanel.classList.remove('is-dragging');

    const deltaY = currentY - startY;
    if (deltaY > swipeThreshold) {
        closeOverlay();
    } else {
        overlayPanel.style.transform = '';
    }

    setTimeout(() => {
        if (!isDragging && overlay.classList.contains('is-open')) {
            overlayPanel.style.transform = '';
        }
    }, 300);
}

// Touch Events (Mobile)
overlayPanel.addEventListener("touchstart", (e) => {
    startDrag(e.touches[0].clientY, e.target);
}, { passive: true });

overlayPanel.addEventListener("touchmove", (e) => {
    if (moveDrag(e.touches[0].clientY, e.target)) {
        if (e.cancelable) e.preventDefault();
    }
}, { passive: false });

overlayPanel.addEventListener("touchend", stopDrag);

// Mouse Events (Desktop testing)
overlayPanel.addEventListener("mousedown", (e) => {
    startDrag(e.clientY, e.target);
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        moveDrag(e.clientY, e.target);
    }
});

document.addEventListener("mouseup", stopDrag);
