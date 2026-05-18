# Custom SVG Icon Animation Guidelines

This document outlines the design standards, technical requirements, and best practices for creating and animating custom interactive SVG icons in this portfolio.

---

## 1. Input Preference & Fidelity
* **Format:** Raw SVG string pasted directly in the chat is the preferred method of handoff.
* **Exact Path Retention:** Always preserve the exact coordinates, points, and vector shapes provided in the SVG string. Do not reconstruct or approximate vectors.

## 2. Icon Weight
* **Standard:** All icons should adhere to **Regular Weight** (which corresponds to `strokeWidth="16"` in a standard `0 0 256 256` Phosphor viewBox) unless explicitly specified otherwise.

## 3. Handling Transparency & Overlapping Joints (Crucial)
* **The Issue:** When raw SVGs are composed of individual stroked elements (like a separate `<line>` and `<polyline>` meeting at a corner), using a semi-transparent stroke color (e.g. `text-black/40` or `rgba(0, 0, 0, 0.4)`) causes the overlapping cap/join coordinates to stack opacities. This creates an unwanted double-darkened overlap region.
* **The Guideline:** Never apply transparency directly to individual stroked sub-elements inside the SVG. 
* **The Solution:** Use solid colors for paths (e.g. `text-black`), and apply opacity controls to the entire outer container or `<svg>` tag itself.
  * *Correct class example:* `text-black opacity-40 group-hover:opacity-100 transition-all duration-300`
  * This forces the browser to flatten the overlapping strokes first, ensuring completely uniform transparency across the entire icon.

## 4. Animation Best Practices
* **Hover Behavior Clarification Rule:** Hover animations can either play exactly once or loop indefinitely. **If the user does not explicitly specify whether the icon should loop or play once, the agent MUST ask the user to clarify the desired behavior before starting the implementation.**
* **Framer Motion Setup:**
  * Use Framer Motion’s `pathLength: [0, 1]` on stroked elements for high-performance, smooth "line-drawing" tracing.
  * Use parent-to-child state propagation by setting `whileHover="hover"` and `initial="initial"` on the parent wrapper (e.g. `motion.a`), and defining corresponding variants on the child elements.
  * Default duration should be `0.5s` to `0.6s` with `easeOut` or `easeInOut` easing for snappy, organic responsiveness.

## 5. TypeScript & Compilation Strictness
* **The Issue:** Native object literals or `as const` type assertions often fail TypeScript compiling when passed to Framer Motion components.
  * String literal easings (like `"easeOut"`) get inferred as general `string` types, which violates the strict `Easing` union type.
  * Using `as const` casts keyframe arrays (like `[0, 1]`) as `readonly [0, 1]`, which violates Framer Motion's mutable array keyframe index signatures.
* **The Guideline:** To prevent compilation failures, always explicitly type all animation configurations using the standard `Variants` type.
  * *Correct declaration pattern:*
    ```typescript
    import { motion, Variants } from 'framer-motion';

    const iconVariants: Variants = {
      initial: {
        pathLength: 1,
        transition: { duration: 0.3, ease: "easeOut" }
      },
      hover: {
        pathLength: [0, 1],
        transition: { duration: 0.5, ease: "easeOut" }
      }
    };
    ```

## 6. Codebase Hygiene & Import Pruning
* **Pruning Unused Imports:** Once a standard Phosphor icon (e.g., `Copy` or `ArrowSquareOut` from `@phosphor-icons/react`) has been successfully replaced by a custom animated SVG component inside a file, **always remove the unused Phosphor icon from the file's import block immediately.**
* **Why it matters:** Keeps compilation fast, prevents bundling redundant legacy modules, and keeps the code block clean, readable, and free of unused-dependency compiler warnings.

