# KARE Landing Page - Design Document

## Project Overview

**KARE (Kerala United Against Rare Diseases)** is a comprehensive care programme initiated by the Government of Kerala to support individuals affected by rare diseases. This landing page aims to:

1. Raise awareness about the KARE initiative
2. Showcase success stories and testimonials
3. Facilitate donations for the program
4. Establish credibility as a government-backed healthcare initiative

### Key Facts
- **Launch**: March 2022 (SMA program), KARE initiative expanded in 2024
- **First in India**: Kerala became the first state to launch state-funded SMA treatment
- **Fundraising Goal**: ₹100 crore over 3 years
- **Diseases Covered**: SMA, Gaucher, Pompe, MPS, and other rare diseases

---

## Color Scheme

### Primary Palette
Based on healthcare trustworthiness, government credibility, and Kerala's cultural identity:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Deep Teal** | `#006B6B` | Primary brand color, headers, CTAs |
| **Navy Blue** | `#1A365D` | Trust elements, footer, official sections |
| **Warm Saffron** | `#F5A623` | Accent color, donation buttons, highlights |
| **Pure White** | `#FFFFFF` | Background, cards, clean space |
| **Light Gray** | `#F7FAFC` | Alternate section backgrounds |
| **Charcoal** | `#2D3748` | Body text |

### Secondary/Accent Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Hope Green** | `#38A169` | Success states, positive messaging |
| **Soft Coral** | `#FC8181` | Urgent CTAs, highlighting needs |
| **Light Teal** | `#E6FFFA` | Card backgrounds, subtle highlights |

### Color Psychology Rationale
- **Teal/Navy**: Conveys healthcare professionalism, government authority, and trust
- **Saffron/Orange**: Represents hope, energy, and aligns with Indian/Kerala cultural aesthetics
- **White/Light backgrounds**: Creates clean, accessible, medical-grade appearance
- **Green accents**: Growth, healing, Kerala's "God's Own Country" identity

---

## Typography

### Font Stack
```css
/* Headings */
font-family: 'Poppins', 'Segoe UI', sans-serif;

/* Body Text */
font-family: 'Inter', 'Roboto', sans-serif;

/* Malayalam Support (optional) */
font-family: 'Noto Sans Malayalam', sans-serif;
```

### Type Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 48-64px | 700 | 1.2 |
| H2 (Section) | 36-40px | 600 | 1.3 |
| H3 (Subsection) | 24-28px | 600 | 1.4 |
| Body Large | 18px | 400 | 1.6 |
| Body | 16px | 400 | 1.6 |
| Caption | 14px | 400 | 1.5 |

---

## Website Structure

### Single-Page Layout with Sections

```
┌─────────────────────────────────────────────┐
│  HEADER (Fixed)                             │
│  Logo | Nav Links | Donate CTA              │
├─────────────────────────────────────────────┤
│  HERO SECTION                               │
│  - Tagline: "Kerala United Against          │
│    Rare Diseases"                           │
│  - Brief intro                              │
│  - Primary CTA: Donate Now                  │
│  - Background: Gradient/subtle pattern      │
├─────────────────────────────────────────────┤
│  ABOUT SECTION                              │
│  - What is KARE?                            │
│  - Vision & Mission                         │
│  - Key objectives (icon cards)              │
├─────────────────────────────────────────────┤
│  IMPACT/STATISTICS SECTION                  │
│  - Number of patients helped                │
│  - Treatments provided                      │
│  - Amount raised                            │
│  - Animated counters                        │
├─────────────────────────────────────────────┤
│  DISEASES COVERED                           │
│  - SMA, Gaucher, Pompe, MPS cards           │
│  - Brief description of each               │
├─────────────────────────────────────────────┤
│  VIDEO TESTIMONIALS                         │
│  - Video carousel/grid                      │
│  - Patient/caregiver stories                │
│  - 5 videos from the drive                  │
├─────────────────────────────────────────────┤
│  PHOTO GALLERY                              │
│  - Grid of program photos                   │
│  - Lightbox for full view                   │
├─────────────────────────────────────────────┤
│  HOW TO DONATE                              │
│  - Bank details prominently displayed       │
│  - Copy-to-clipboard functionality          │
│  - QR code for UPI (optional)               │
│  - Trust badges/government seal             │
├─────────────────────────────────────────────┤
│  PARTNERS & SUPPORTERS                      │
│  - Government of Kerala logo                │
│  - Any corporate partners                   │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  - Contact information                      │
│  - Social media links                       │
│  - Legal disclaimer                         │
│  - Copyright                                │
└─────────────────────────────────────────────┘
```

---

## Section Details

### 1. Header (Fixed Navigation)
- **Left**: KARE logo
- **Center**: Navigation links (About, Impact, Videos, Donate)
- **Right**: "Donate Now" button (prominent, saffron color)
- **Behavior**: Transparent on hero, solid white on scroll
- **Mobile**: Hamburger menu

### 2. Hero Section
- **Background**: Gradient from deep teal to navy, or subtle pattern with images
- **Content**:
  - KARE Logo (large)
  - Main headline: "Kerala United Against Rare Diseases"
  - Subheadline: "India's first state-funded rare disease treatment programme"
  - CTA Button: "Support the Mission" / "Donate Now"
- **Optional**: Subtle animation of floating elements or video background

### 3. About Section
- **Layout**: 2-column (text + image) or centered content
- **Content**:
  - Brief history (SMA program 2022 → KARE 2024)
  - Vision statement
  - Mission statement
  - 3-4 objective cards with icons

### 4. Impact Statistics
- **Layout**: 4-column grid with animated counters
- **Metrics to display**:
  - Children supported
  - Treatments provided
  - ₹ Amount raised/spent
  - Families helped
- **Design**: Large numbers, icons, subtle animations on scroll

### 5. Diseases Covered
- **Layout**: Card grid (2-4 cards)
- **Each card**:
  - Disease name (SMA, Gaucher, etc.)
  - Brief description
  - Icon/illustration
  - "Learn More" link (optional)

### 6. Video Testimonials
- **Layout**: Video carousel or grid
- **Videos** (from Google Drive):
  1. Aiswarya 1st Content Reel.mp4
  2. Aiswarya 1st Content.mp4
  3. Content 2.mp4
  4. Content 2 Reel.mp4
  5. Veena George Reel bank details 1.mp4
- **Features**:
  - Thumbnail with play button
  - Video modal/lightbox
  - Mobile-optimized playback
- **Design**: Cards with soft shadows, hover effects

### 7. Photo Gallery
- **Layout**: Masonry or grid layout
- **Images**: 15 photos from the document (image2-image15.png)
- **Features**:
  - Lightbox for full-screen viewing
  - Lazy loading for performance
  - Captions if available

### 8. How to Donate
- **Critical Section** - Most prominent design
- **Bank Details**:
  ```
  Bank: State Bank of India, Trivandrum City (70028)
  Account Number: 39229924684
  IFSC Code: SBIN0070028
  ```
- **Features**:
  - Copy-to-clipboard buttons for each field
  - Visual confirmation on copy
  - QR code for UPI payment (if available)
  - Government seal/trust badge
  - Tax exemption info (if applicable)
- **Design**: Card with highlight border, prominent placement

### 9. Partners Section
- **Layout**: Logo strip or grid
- **Content**: Government of Kerala, Health Department logos, any partner organizations

### 10. Footer
- **Content**:
  - Contact information
  - Quick links
  - Social media icons
  - Government disclaimer
  - Copyright notice
- **Design**: Dark (Navy) background, white text

---

## Technical Specifications

### Tech Stack (Recommended)
- **Framework**: Next.js 14+ (App Router) or Astro
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Video**: HTML5 video with lazy loading
- **Icons**: Lucide React or Heroicons

### Performance Requirements
- **Lighthouse Score**: 90+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Videos**: Lazy loaded, compressed (consider hosting on CDN)

### Responsive Breakpoints
```css
/* Mobile First */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Accessibility (WCAG 2.1 AA)
- Color contrast ratio: minimum 4.5:1
- All images have alt text
- Keyboard navigable
- Screen reader compatible
- Focus indicators visible
- Video captions (if available)

---

## Assets

### Logo
- **File**: `assets/kare-logo.jpg` (937x940px)
- **Usage**: Header, hero section, footer
- **Note**: Consider creating SVG version for scalability

### Photos (from Document)
Located in `assets/` folder:
- image2.png through image15.png (program photos)
- image17.png (small, may be icon/placeholder)

### Videos (To be downloaded)
From Google Drive folder:
1. `Aiswarya 1st Content Reel.mp4` (67.5 MB)
2. `Aiswarya 1st Content.mp4` (68.2 MB)
3. `Content 2.mp4` (93.3 MB)
4. `Content 2 Reel.mp4` (94.2 MB)
5. `Veena George Reel bank details 1.mp4` (54.9 MB)

**Note**: Videos need to be downloaded manually from:
https://drive.google.com/drive/folders/1IVDyayShV6l2hq9fV1w_8ITK-82LSx2T

**Recommendation**: Compress videos for web (target: 10-20MB each) and consider:
- Creating thumbnail images for each
- Hosting on a CDN or video platform (YouTube unlisted, Vimeo)
- Supporting multiple quality levels

---

## Component Library

### Buttons
```
Primary: Saffron (#F5A623) background, white text
Secondary: White background, teal border
Ghost: Transparent, teal text
```

### Cards
- White background
- Subtle shadow (0 4px 6px rgba(0,0,0,0.1))
- Rounded corners (8-12px)
- Hover: Slight lift animation

### Icons
- Style: Outline/line icons
- Size: 24px default, 32-48px for feature sections
- Color: Match section theme

---

## Animation Guidelines

### Scroll Animations
- Fade in from bottom: 20px translate, 0.6s duration
- Stagger children: 0.1s delay between elements
- Trigger: When element enters viewport (50% threshold)

### Hover Effects
- Buttons: Slight scale (1.02-1.05), shadow increase
- Cards: Lift effect (translateY: -4px)
- Links: Color transition, underline animation

### Number Counters
- Start from 0, animate to final number
- Duration: 2s with easeOut
- Trigger on scroll into view

---

## SEO & Meta

### Page Title
"KARE - Kerala United Against Rare Diseases | Government of Kerala Initiative"

### Meta Description
"Support KARE, Kerala's pioneering government program providing treatment and care for children with rare diseases like SMA, Gaucher, and Pompe. Donate today to help transform lives."

### Open Graph
- Image: Hero section screenshot or KARE logo
- Type: website
- Locale: en_IN

### Structured Data
- Organization schema
- Donation action schema
- BreadcrumbList

---

## Deployment Recommendations

### Hosting
- Vercel (for Next.js) or Netlify
- Consider government domain if available (.gov.in)

### CDN
- CloudFront or Cloudflare for global distribution
- Video hosting: YouTube (unlisted) or Cloudinary

### Analytics
- Google Analytics 4
- Donation tracking events
- Scroll depth tracking

---

## Implementation Phases

### Phase 1: Core Structure
- [ ] Set up project with Next.js/Astro + Tailwind
- [ ] Implement header and navigation
- [ ] Create hero section
- [ ] Build about section
- [ ] Add responsive design

### Phase 2: Content Sections
- [ ] Impact statistics with animations
- [ ] Diseases covered cards
- [ ] Photo gallery with lightbox
- [ ] Donation section with copy functionality

### Phase 3: Video & Polish
- [ ] Video testimonials section
- [ ] Optimize video loading
- [ ] Add scroll animations
- [ ] Performance optimization
- [ ] Accessibility audit

### Phase 4: Launch
- [ ] SEO implementation
- [ ] Analytics setup
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Production deployment

---

## Notes

1. **Videos**: The 5 videos from Google Drive need to be downloaded manually due to authentication requirements. Consider compressing them for web delivery.

2. **Multilingual**: Consider adding Malayalam language support for broader reach in Kerala.

3. **Donation Tracking**: If possible, integrate with payment gateways for easier online donations beyond bank transfer.

4. **Updates Section**: Consider adding a news/updates section for ongoing program achievements.

5. **Mobile-First**: Given Indian internet usage patterns, prioritize mobile experience and performance on slower connections.
