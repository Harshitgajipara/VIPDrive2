/**
 * Global constants for VIPDrive application.
 * Update these values in one place and they propagate everywhere.
 */

export const BRAND = {
  name: 'VIPDrive',
  tagline: 'Luxury Car Booking & Chauffeur Service',
  email: 'info@vipdrive.com',
  supportEmail: 'support@vipdrive.com',
  mediaEmail: 'media@vipdrive.com',
  phone: '+91 98989 83573',
  phoneHref: 'tel:+919898983573',
  copyright: '© Copyright 2025, All Rights Reserved by VIPDrive.',
  website: 'https://vipdrive.com',
};

export const NAV_LINKS = [
  { label: 'Packages',    id: 'section_our_solution' },
  { label: 'Features',    id: 'features-section' },
  { label: 'Testimonial', id: 'testimonial-section' },
  { label: 'About Us',    id: 'about-section' },
  { label: 'Contact Us',  id: 'contact-section' },
  { label: 'Blogs',       id: 'blog-section' },
];

export const SOCIAL_LINKS = [
  { platform: 'Twitter',   icon: 'fab fa-twitter',    href: '#' },
  { platform: 'Facebook',  icon: 'fab fa-facebook-f', href: '#' },
  { platform: 'Instagram', icon: 'fab fa-instagram',  href: '#' },
  { platform: 'GitHub',    icon: 'fab fa-github',     href: '#' },
];

export const ROUTES = {
  HOME:           '/',
  CUSTOM_BOOKING: '/custom-booking',
  CAR_LIST:       '/car-list',
  SPECIAL_TRIPS:  '/special-trips',
};
