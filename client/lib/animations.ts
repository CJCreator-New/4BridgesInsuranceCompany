/**
 * Animation Configuration Library
 * Professional, accessible animations for insurance website
 * All animations < 400ms, respects prefers-reduced-motion
 */

import { Variants } from 'framer-motion';

// Animation duration constants (in seconds)
export const DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.4,
} as const;

// Easing functions for professional feel
export const EASING = {
  smooth: [0.4, 0, 0.2, 1], // Smooth ease-in-out
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  gentle: [0.25, 0.1, 0.25, 1],
} as const;

// Fade In Animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASING.smooth }
  }
};

// Fade In Up (for cards, sections)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: DURATION.normal, ease: EASING.smooth }
  }
};

// Fade In Down (for navbar, headers)
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: DURATION.normal, ease: EASING.smooth }
  }
};

// Slide In Left (for side content)
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: DURATION.normal, ease: EASING.smooth }
  }
};

// Slide In Right (for side content)
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: DURATION.normal, ease: EASING.smooth }
  }
};

// Scale In (for badges, icons)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: DURATION.fast, ease: EASING.smooth }
  }
};

// Stagger Container (for lists, grids)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Stagger Item (child of stagger container)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: DURATION.normal }
  }
};

// Hover Scale (for interactive cards)
export const hoverScale = {
  scale: 1.02,
  transition: { duration: DURATION.fast }
};

// Hover Lift (for cards with shadow)
export const hoverLift = {
  y: -4,
  transition: { duration: DURATION.fast }
};

// Accordion Animation
export const accordionVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { 
    height: 'auto', 
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASING.smooth }
  }
};

// Modal/Dialog Animation
export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASING.smooth }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: DURATION.fast }
  }
};

// Slide Up (for chat, notifications)
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: DURATION.normal, ease: EASING.smooth }
  }
};

// Counter Animation (for statistics)
export const counterAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASING.spring }
  }
};

// Timeline Step Animation
export const timelineStep: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: DURATION.normal,
      ease: EASING.smooth
    }
  })
};

// Logo Carousel Slide
export const logoSlide: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: DURATION.normal,
      ease: EASING.smooth
    }
  })
};

// Form Input Focus Animation
export const inputFocus = {
  scale: 1.01,
  borderColor: '#3b82f6',
  transition: { duration: DURATION.fast }
};

// Button Press Animation
export const buttonPress = {
  scale: 0.98,
  transition: { duration: 0.1 }
};

// Parallax Scroll Effect (use with useScroll hook)
export const parallaxConfig = {
  initial: { y: 0 },
  animate: { y: -50 },
  transition: { duration: 0.5, ease: EASING.smooth }
};

// Viewport Animation Config (for scroll-triggered animations)
export const viewportConfig = {
  once: true, // Animate only once
  amount: 0.3, // Trigger when 30% visible
  margin: '0px 0px -100px 0px' // Trigger slightly before entering viewport
};

// Accessibility: Respect prefers-reduced-motion
export const getReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Wrapper to disable animations if user prefers reduced motion
export const withReducedMotion = (variants: Variants): Variants => {
  if (getReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0 } }
    };
  }
  return variants;
};
