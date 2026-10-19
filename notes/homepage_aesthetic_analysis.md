# Homepage Design & Aesthetic Analysis

This document details the analysis of the new homepage aesthetic based on the provided Figma file (`node-id=2540:1085`) and aligned implementation specifications.

---

## 1. Visual Style & Aesthetic Foundation
The aesthetic features a structured, technical line-based layout with thin, solid borders dividing all grid sections.

- **Color Palette**:
  - **Background**: `#F1F4FB` (page background).
  - **Primary Text**: `#000000` (high legibility).
  - **Secondary Text**: `#555555` (used for subtitles, status, tags, and secondary text).
  - **Stroke Lines**: `#B6B5B5` (thin, solid 1px borders for cards and grid boundaries).
  - **Contact Button**: `#000000` (black background, white text).
  - **Blue Placeholder Fill**: `#396EFF` (used for empty thumbnails and project shapes).
- **Corner Radii**:
  - **Case Study Thumbnail Images**: **2px** (`border-radius: 2px`).
  - **Cards, Buttons, and Tags**: **4px** (`border-radius: 4px`).
  - **Other Projects Placeholder Blocks**: **4px** (`border-radius: 4px`).

---

## 2. Layout & Grid Structures

### A. Global Layout Alignment
- **Canvas Width**: `1440px`.
- **Main Container Width**: **`1100px`** (centered, standardizing the minor Figma differences to ensure perfectly continuous vertical lines).
- **Global Border Lines**: The hero and layout sections are bounded by a left and right vertical border (`border-l border-r border-[#B6B5B5]`) forming a centered `1100px` column.

### B. Navigation Bar
- **Dimensions**: Spans the full `1440px` width, anchored to the top (`top-0`), and features a bottom border (`border-b border-[#B6B5B5]`).
- **Padding**: `px-[64px] py-[16px]`.
- **Alignment Style**: The navigation bar deliberately retains its **offset layout look** (aligned to the wider viewport edge padding rather than standardizing to the `1100px` content column).
- **Left Side (Nav Links)**:
  - Links: "WORK", "ABOUT", "RESUME".
  - Font: `Roboto Mono`, `12px` font size, regular weight, uppercase.
  - Gap: `48px` between links.
- **Right Side (Contact Button)**:
  - Black background, white text (`tommyagarwalwork@gmail.com`).
  - Padding: `px-[16px] py-[8px]`.
  - Border radius: `4px`.
  - Font: `Roboto Mono`, `12px`, uppercase, `tracking-[0.36px]`.
  - Icon: A copy/link icon (size `16px`).

### C. Hero Section
- **Outer Frame**: Centered column (`1100px` width) running from `top-[64px]` with left and right borders (`border-l border-r border-[#B6B5B5]`).
- **Padding**: `pt-[120px] pb-[16px]`.
- **Header Section (Row 1)**:
  - Padding: `px-[24px]`.
  - Name: "Tommy Agarwal" in Google Sans, `48px` font size, black.
  - Subtitle: "Product Designer with a cs Background and 5 years of experience in retail operations" in Roboto Mono, `12px`, `#555555`, uppercase, constrained to a width of `308px`.
- **Separator Line**: A thin horizontal grid stroke separates Row 1 and Row 2.
- **Tagline Section (Row 2)**:
  - Padding: `px-[24px]`.
  - Alignment: Right-aligned/flex-end.
  - Tagline: "Translating frontline insights into intuitive experiences that drive measurable brand impact." in Google Sans, `14px` font size, black, constrained to a width of `345px`.
  - Status: "CURRENTLY OPEN TO WORK" in Roboto Mono, `12px` font size, `#555555`, uppercase.

### D. Selected Work Grid (Case Studies)
- **Header**: "SELECTED WORK" in Roboto Mono, `12px` font size, black.
- **Spacing**: `32px` vertical gap below the section heading.
- **Card Spacing**: `16px` horizontal and vertical grid gap.
- **Row 1 (Staggered Widths)**:
  - **Tommy Hilfiger Card (Left)**: Width `731px`, Height `873px` (responsive baseline).
  - **Ralph Lauren Card (Right)**: Width `353px`, Height `873px` (responsive baseline).
- **Row 2 (Staggered Widths)**:
  - **Freelance Card (Left)**: Width `496px`, Height `565px` (responsive baseline).
  - **Streetcode Academy Card (Right)**: Width `584px`, Height `565px` (responsive baseline).
- **Card Internals**:
  - Padding: `24px` all around.
  - Layout: Vertical flex-col with `48px` gap between the thumbnail and the text content.
  - Thumbnail: Fills remaining vertical space (`flex-[1_0_0]`), rounded `2px`.
  - Text Content Block: Vertical gap `20px`.
    - Client / Category: Roboto Mono, `16px`, `#555555`, uppercase.
    - Title: Google Sans, `32px`, `#000000`.
    - Tags Gap: `16px`.
    - Tag Badges: Outlined in `1px` border of color `#555555` with `rounded-[4px]` and `px-[12px] py-[8px]` padding. Text is Roboto Mono, `12px` font size, `#555555` color, uppercase.

### E. Other Projects & Experiments Grid
- **Header**: "OTHER PROJECTS & EXPERIMENTS" in Roboto Mono, `12px` font size, black.
- **Grid Layout**: 3 equal-width columns using `flex-[1_0_0]` (with items utilizing `w-full` instead of hardcoded pixel widths to ensure fluid layout scaling). Columns are separated by a horizontal gap of `16px`.
- **Item Styling**: Solid `#396EFF` background fill, `border border-[#B6B5B5]`, and `rounded-[4px]`.
- **Column heights & item variations**:
  - **Column 1**: Gap `16px`.
    - Item 1: `318px` height.
    - Item 2: `199px` height.
    - Item 3: `229px` height.
  - **Column 2**: Gap `14px`.
    - Item 1: `153px` height.
    - Item 2: `446px` height.
    - Item 3: `151px` height.
  - **Column 3**: Gap `16px`.
    - Item 1: `226px` height.
    - Item 2: `164px` height.
    - Item 3: `356px` height.

### F. Footer
- **Status**: Not implemented in the Figma design (deferred for future iterations).

---

## 3. Typographic Summary

| Element | Font | Size | Weight | Color | Transform / Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Name** | Google Sans | `48px` | Regular/Medium | `#000000` | Title Case |
| **Hero Subtitle** | Roboto Mono | `12px` | Regular | `#555555` | UPPERCASE |
| **Hero Tagline** | Google Sans | `14px` | Regular | `#000000` | Sentence Case |
| **Hero Status** | Roboto Mono | `12px` | Regular | `#555555` | UPPERCASE |
| **Nav Links** | Roboto Mono | `12px` | Regular | `#000000` | UPPERCASE |
| **Section Headings** | Roboto Mono | `12px` | Regular | `#000000` | UPPERCASE |
| **Card Client Labels**| Roboto Mono | `16px` | Regular | `#555555` | UPPERCASE |
| **Card Project Titles**| Google Sans | `32px` | Regular/Medium | `#000000` | Title Case |
| **Card Badges** | Roboto Mono | `12px` | Regular | `#555555` | UPPERCASE |

---

## 4. Implementation Decisions & Specifications

1. **Responsive Card Heights**:
   - On mobile/small screen viewports where the case study grid collapses to **1 column**, the card heights will **scale proportionally** with their widths to maintain the design's aspect ratios.
2. **Hover States & Motion**:
   - Hovers, click behaviors, and animations are currently **disabled/ignored** and will be defined later in the motion design phase.
3. **Hero & Grid Separator Lines**:
   - The horizontal grid divider lines (`imgLine1` and `imgLine4`) will be implemented as clean, high-performance **native CSS borders** (e.g. `border-b border-[#B6B5B5]`) instead of separate SVG image assets. This ensures perfect pixel alignment, crisp rendering, and avoids unnecessary network requests.
4. **Card Height Flexibility**:
   - Cards will use `min-h` combined with a flex-grow thumbnail layout. This prevents text wrapping from causing container overflows or layout breaks when titles extend onto multiple lines.
5. **Masonry Column Widths**:
   - Columns are built using unified relative widths (`w-full` children inside `flex-1` columns) instead of hardcoded pixel widths (`356px`) to support flexible scaling on different screen resolutions.
