---
name: Cinematic Alpine Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#93d7ff'
  on-tertiary: '#00354a'
  tertiary-container: '#3bbffa'
  on-tertiary-container: '#004b67'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 20px
    fontWeight: '300'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  section-gap: 160px
---

## Brand & Style

The design system is centered on a **Premium Cinematic** aesthetic, designed to evoke the grandeur and mystery of the Himalayas. It targets high-end travelers seeking an "editorial storybook" experience rather than a standard booking platform. 

The visual language draws heavily from **Minimalism** and **Glassmorphism**, using expansive negative space and translucent layers to keep the focus on atmospheric mountain photography. The emotional response is one of awe, tranquility, and exclusivity—achieved through deep, ink-like blacks paired with sharp, high-contrast typography that feels like a luxury travel journal.

## Colors

The palette is anchored in a **Deep Dark** mode to maximize the impact of cinematic photography. 

- **Primary:** A sophisticated Metallic Gold (#D4AF37) used sparingly for accents, highlights, and primary calls to action to signal luxury.
- **Secondary/Neutral:** A base of True Black (#050505) for the background, with deep Slate (#0F172A) used for subtle surface differentiation.
- **Accent:** A vibrant Mountain Blue (#38BDF8) represents the glacial rivers and sky, used primarily for functional interactive states or progress indicators.
- **Overlays:** Semi-transparent black gradients (0% to 80% opacity) are used over images to ensure typography remains legible while maintaining an atmospheric, moody feel.

## Typography

This design system utilizes a high-contrast typographic pairing to reinforce the luxury editorial feel. 

**Playfair Display** is the voice of the brand, used for large headings and display moments. It should be typeset with tight letter spacing in large formats to create a "glossy magazine" effect. 

**DM Sans** provides a clean, neutral balance for body copy, prioritizing readability in long-form itinerary descriptions. 

**Geist** is reserved for technical data, labels, and navigation elements, bringing a modern, precise, and almost "GPS-like" utility to the map and schedule components.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a curated, editorial composition, while transitioning to a fluid model for mobile.

- **Vertical Rhythm:** A generous 160px section gap creates "breathing room" between itinerary days, allowing the user to focus on one story at a time.
- **Grid:** A 12-column grid is used for content organization. Text blocks often span the central 6-8 columns to maintain optimal line lengths for reading.
- **Imagery:** Photography should frequently break the grid, utilizing full-bleed sections or asymmetrical offsets to enhance the cinematic flow.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and **Atmospheric Overlays** rather than traditional shadows.

- **Surfaces:** Floating cards and navigation bars use a background blur (12px - 20px) with a subtle 10% white border to simulate frosted glass.
- **Tonal Layers:** The background remains pitch black, while active elements or "container" sections use a very dark navy/slate tint to appear slightly closer to the user.
- **Z-Axis:** Scrolling should feel layered, with background images moving at a slower parallax rate than the foreground text to create a sense of physical mountain depth.

## Shapes

The shape language is **Soft and Precise**. 

A minimal radius (4px to 8px) is applied to images and buttons to soften the edges of the high-contrast UI without making it feel overly "bubbly" or casual. Large imagery containers may use a slightly larger radius (12px) to feel like premium framed prints. Interactive icons and small tags use sharp or very slightly rounded corners to maintain a sophisticated, technical edge.

## Components

- **Buttons:** Primary buttons feature a solid Gold background with black text. Secondary buttons are "Ghost" style with a thin white or gold border and backdrop blur.
- **Itinerary Chips:** Day markers (e.g., "Day 01") are styled as small, pill-shaped tags with a Gold background and uppercase Geist typography.
- **Progress Timeline:** A horizontal line with circular nodes. Active nodes glow with a blue outer shadow; inactive nodes are low-opacity white.
- **Image Galleries:** Use a mix of large "Hero" shots and smaller, staggered 3-column masonry grids for detail shots (food, architecture, smaller vistas).
- **Cards:** Itinerary cards have no visible background by default, only becoming visible via a subtle glassmorphic fill on hover or interaction.
- **Scroll Indicators:** A thin, vertical animated line at the bottom of the hero section to guide the user downward into the story.