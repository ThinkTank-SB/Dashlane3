// app/page.tsx

'use client'; // This directive indicates that this component is a Client Component,
              // meaning it runs on the browser, allowing for interactivity.

import React, { useEffect } from 'react';

// CSS as a string literal to be embedded in the <style> tag
const globalStyles = `
/* CSS Variables */
:root {
    --color-blue-8: #09363F; /* Primary Dark Blue/Green */
    --color-blue-6: #1C7FEF; /* Primary CTA Blue */
    --color-blue-7: #0066CC; /* CTA Hover Blue */
    --color-blue-light: #f8fafc; /* Hero Background - very light gray/off-white (Original intent, but overridden for image replica) */
    --color-grey-1: #E0E0E0; /* Borders */
    --color-grey-3: #C0C0C0; /* Footer text, social icons, and main content text on dark background */
    --color-grey-6: #6b7280; /* Body text (used on light backgrounds like header and now main content) */
    --color-link: #3b82f6; /* Body links */
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-code-bg: #1f2937; /* Code block background */
    --color-code-text: #d1d5db; /* Code block text */
    --color-dashgreen-active: #00A38D; /* Nav hover color */
}

/* Font Imports (from original HTML head) */
@font-face{font-family:'Public Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuFpm5wA.woff) format('woff')}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuyJ65wA.woff) format('woff')}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymu8Z65wA.woff) format('woff')}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwRs572Xtc6ZYQws9YVwnNJfJ7QwOk1Fig.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwRs572Xtc6ZYQws9YVwnNIfJ7QwOk1Fig.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwRs572Xtc6ZYQws9YVwnNGfJ7QwOk1.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwRs572Xtc6ZYQws9YVwnNJfJ7QwOk1Fig.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwRs572Xtc6ZYQws9YVwnNIfJ7QwOk1Fig.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwRs572Xtc6ZYQws9YVwnNGfJ7QwOk1.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwRs572Xtc6ZYQws9YVwnNJfJ7QwOk1Fig.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwRs572Xtc6ZYQws9YVwnNIfJ7QwOk1Fig.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Public Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwRs572Xtc6ZYQws9YVwnNGfJ7QwOk1.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}


/* Base & Reset Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 132px;
}

body {
    font-family: 'Public Sans', sans-serif;
    color: var(--color-blue-8); /* Default text color for elements on white background (e.g., header) */
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    color: var(--color-link);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

ul {
    list-style: none;
}

button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
}

/* Utility Classes */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

.w-bleed-full {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
}

/* Header Styles */
.header {
    position: sticky;
    top: 0;
    z-index: 30;
    background-color: var(--color-white);
}
.header-skip-link {
    position: absolute;
    top: -4rem;
    left: 0;
    z-index: 50;
    height: 3rem;
    background-color: var(--color-white);
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
    transition: all 0.2s ease-in-out;
}
.header-skip-link:focus {
    top: 0.5rem;
}
.header-background {
    border-bottom: 1px solid var(--color-grey-1);
}
.header-container {
    padding-left: 1rem;
    padding-right: 1rem;
}
.header-content {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    height: 60px;
}
.header-logo-link {
    margin-right: 0.75rem;
    display: inline-flex;
    align-items: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
}
.header-logo-link:focus {
    outline-color: var(--color-blue-8);
}
.main-nav {
    display: none; /* Hidden on mobile */
    flex: 1;
    align-items: center;
    height: 100%;
}
.main-nav-list {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    padding:0; /* override default ul padding */
}
.main-nav-item {
    display: flex;
    height: 100%;
    cursor: pointer;
    align-items: center;
    border-bottom: 2px solid transparent;
    margin: 0 0.75rem;
}
.main-nav-item:hover {
    border-bottom-color: var(--color-blue-8);
}
.nav-link-button {
    margin-top: 4px;
    display: inline-flex;
    align-items: center;
    border-radius: 0.375rem;
    font-size: 1rem;
    color: var(--color-grey-6); /* Dark grey text on white header */
}
.nav-link-button:hover {
    color: var(--color-blue-8);
    text-decoration: none;
}
.nav-link-button svg {
    margin-left: 0.25rem;
    height: 1.25rem;
    width: 1.25rem;
    color: var(--color-grey-6);
    transition: color 150ms ease-in-out;
}
.nav-link-button:hover svg {
    color: var(--color-blue-8);
}
.nav-link-plain {
    margin-top: 4px;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    color: var(--color-grey-6); /* Dark grey text on white header */
}
.nav-link-plain:hover {
    color: var(--color-dashgreen-active);
    text-decoration: none;
}
.nav-item-login {
    margin-left: auto !important;
    margin-right: 1.5rem !important;
}
.header-actions-wrapper {
    margin-left: auto;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
}
.header-cta-group {
    display: none; /* Hidden on mobile */
    flex-direction: column;
    justify-content: flex-end;
}
.header-cta-button {
    display: block;
    text-align: center;
    justify-content: center;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 500ms;
    min-width: fit-content;
    padding: 0.625rem 0.875rem;
    font-size: 0.875rem;
    font-weight: 500;
}
.header-cta-button.primary {
    background-color: var(--color-blue-6);
    color: var(--color-white);
    border: 1px solid transparent;
}
.header-cta-button.primary:hover {
    background-color: var(--color-blue-7);
    text-decoration: none;
}
.header-cta-button.secondary {
    background-color: var(--color-white);
    color: var(--color-blue-8);
    border: 1px solid var(--color-blue-6);
}
.header-cta-button.secondary:hover {
     background-color: #f9fafb;
     text-decoration: none;
}
.mobile-menu-toggle {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
}
.mobile-menu-toggle button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    padding: 0.5rem;
    padding-right: 0;
    color: var(--color-blue-8);
}
.mobile-menu-toggle button:hover {
    color: var(--color-dashgreen-active);
}
.mobile-icon-size {
    height:1.5rem;
    width:1.5rem;
}

/* Main Content Styles */
.main-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: var(--color-white); /* Main content background is now white */
}
.article-container {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 100%;
    max-width: 80rem; /* max-w-7xl equivalent */
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
}

/* Hero Section */
.hero-section {
    padding: 2rem 0;
    /* The background color for this section needs to be set if it's different from .main-content */
    /* Based on original source, it had a specific bg-blue-8. Re-adding here for accuracy. */
    background-color: var(--color-blue-8);
}
.hero-content {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1.25rem 1rem;
}
.hero-content h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 500;
    color: var(--color-white); /* White text for heading on dark blue hero background */
}
.hero-content p {
    color: var(--color-grey-3); /* Light grey text for paragraph on dark blue hero background */
    font-size: 1.125rem;
}

/* Body Content Styles (for sections after hero, which will have white background) */
.content-heading {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    font-size: 2.25rem; /* text-4xl */
    line-height: 2.5rem;
    font-weight: 500;
    color: var(--color-blue-8); /* Dark blue for headings on white background */
}
.content-subheading {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    font-size: 1.875rem; /* text-3xl */
    line-height: 2.25rem;
    font-weight: 500;
    color: var(--color-blue-8); /* Dark blue for subheadings on white background */
}
.content-paragraph {
    margin: 0.75rem 0;
    font-size: 1.125rem; /* text-lg */
    color: var(--color-grey-6); /* Darker grey for paragraph on white background */
}
.content-list-wrapper {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
    font-size: 1rem; /* text-base */
}
.content-list {
    list-style-type: disc;
    margin-left: 1rem; /* for list bullet indent */
}
.content-list li {
    margin-bottom: 0.25rem;
    color: var(--color-grey-6); /* Darker grey for list items on white background */
}

/* Code Block */
.code-block-wrapper { /* Corresponds to div class="relative mb-8" */
    position: relative;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    width: 100%; /* Ensure it takes full width of its parent (.article-container) */
}
.code-block-wrapper pre { /* Target the pre tag inside the wrapper */
    background-color: var(--color-code-bg);
    color: var(--color-code-text);
    padding: 1rem;
    padding-top: 3.5rem; /* space for copy button */
    border-radius: 0.375rem;
    overflow-x: auto; /* Allows horizontal scrolling for very long lines */
    font-family: monospace;
    white-space: pre-wrap; /* Preserve whitespace and wrap lines */
    word-wrap: break-word; /* Break words if they are too long for wrapping */
    font-size: 0.875rem;
    line-height: 1.5;
    width: 100%; /* Ensure it fills its container */
    box-sizing: border-box; /* Include padding in width calculation */
}
.copy-button {
    position: absolute;
    right: 0.5rem;
    top: 1rem;
    z-index: 10;
    border-radius: 0.375rem;
    background-color: var(--color-black);
    padding: 0.5rem 0.75rem;
    color: var(--color-code-text);
    transition: color 0.2s ease-in-out;
    font-size: 0.875rem;
    line-height: 1; /* Adjust line height for button text */
}
.copy-button:hover {
    color: var(--color-white);
}
.copy-button svg {
    height: 1.5rem;
    width: 1.5rem;
    stroke: currentColor; /* Inherit color from parent for SVG */
}

/* Footer Styles */
.footer {
    background-color: var(--color-blue-8);
    color: var(--color-white); /* Default for footer text */
}
.footer-content {
    margin: auto;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
}
.footer-nav-container {
    display: flex;
    width: 100%;
}
.footer-nav-list {
    display: flex;
    width: 100%;
    flex-direction: column;
    border-bottom: 1px solid var(--color-grey-1);
    padding-bottom: 2.5rem;
    padding-left: 0; /* override default ul padding */
}
.footer-nav-list > li > ul {
    display: none; /* Accordion is closed by default on mobile */
}
.footer-nav-list > li > button {
    border-top: 1px solid var(--color-grey-1);
    padding: 1rem 0;
    text-transform: uppercase;
    color: var(--color-grey-3); /* Grey text for footer menu buttons */
    font-size: 0.875rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer-nav-list > li:first-child > button {
    border-top: none;
}
.footer-nav-list .toggle-icon {
    min-width: fit-content;
}
.footer-nav-list .toggle-icon img {
    display: inline-block;
    filter: brightness(0) saturate(100%) invert(1); /* white-image filter */
}
.footer-sub-list {
    padding-left: 0; /* remove default padding */
}
.footer-sub-list li {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
.footer-sub-list li a {
    display: block;
    color: var(--color-white); /* White text for footer sub-menu links */
    padding: 0.25rem 0;
}
.footer-sub-list li a:hover {
    color: var(--color-grey-3);
    text-decoration: none;
}
.footer-bottom-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.footer-copyright {
    padding: 0 2.5rem;
    text-align: center;
}
.footer-copyright p:first-child {
    font-size: 1rem;
    color: var(--color-white); /* White text for copyright year */
}
.footer-copyright p:last-child {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: var(--color-grey-3); /* Light grey text for copyright info */
}
.footer-stay-in-touch-heading {
    margin-top: 2.5rem;
    padding-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-grey-3); /* Light grey for "Stay in touch" heading */
    font-size: 0.75rem;
}
.social-icons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.social-icons-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
}
.social-icon-link {
    display: flex;
    height: 1.5rem;
    width: 1.5rem;
    align-items: center;
    justify-content: center;
    color: var(--color-white); /* White color for social icons */
    transition: color 150ms;
}
.social-icon-link:hover {
    color: var(--color-grey-3);
}
.social-icon-link svg {
    height: 1rem;
    width: 1rem;
    fill: currentColor; /* Ensure SVG color matches parent */
}
.footer-legal-links {
    margin-top: 1rem;
    padding: 0 2.5rem;
    text-align: center;
}
.footer-legal-links ul {
    padding-left: 0; /* override default ul padding */
}
.footer-legal-links li {
    display: inline;
}
.footer-legal-links a {
    border: 1px solid transparent;
    border-color: var(--color-grey-3);
    text-align: center;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 14px;
    color: var(--color-grey-3); /* Light grey for legal links */
    text-transform: uppercase;
    padding: 0 0.5rem;
}
.footer-legal-links a:hover {
    text-decoration: none;
}
.footer-legal-links li:not(:last-child) a {
    border-right-style: solid;
}
.footer-legal-links li:first-child a {
    border-left-style: none; /* Remove left border for the first item */
}
.footer-legal-links li:last-child a {
    border-right-style: none; /* Remove right border for the last item */
}


/* Responsive Styles */
@media (min-width: 768px) { /* md breakpoint */
    .header-container, .article-container, .hero-content {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .header-logo-link {
        margin-right: 3rem;
    }
    .header-cta-group {
        display: flex;
        flex-direction: row;
    }
    .header-cta-button.secondary {
        margin-top: 0;
        margin-left: 1rem;
    }
    .mobile-menu-toggle {
        display: none;
    }
    .hero-content h1 {
        font-size: 3.75rem; /* md:text-6xl in source, adjusting based on common scale */
    }
    .content-heading {
        font-size: 2.5rem; /* md:text-5xl */
    }
}
@media (min-width: 1024px) { /* lg breakpoint */
    .main-nav { /* Show on LG and up */
        display: flex;
    }
    .footer-content {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 5rem;
        padding-bottom: 5rem;
        column-gap: 4rem; /* gap-x-16 equivalent */
        row-gap: 2.5rem; /* gap-y-10 equivalent */
    }
    .footer-nav-container {
        flex: 1; /* Allow navigation to grow and take space */
    }
    .footer-nav-list {
        flex-direction: row;
        border-bottom: none;
        padding-bottom: 0;
        gap: 4rem; /* Adjusted for desktop layout */
    }
    .footer-nav-list > li {
        flex: 1;
    }
    .footer-nav-list > li > button {
        border: none;
        padding: 0;
        padding-bottom: 1rem;
    }
    .footer-nav-list > li > button span.toggle-icon {
        display: none;
    }
    .footer-nav-list > li > ul {
        display: block; /* Always show sub-menus on desktop */
        margin-top: 1rem;
    }
    .social-icons-wrapper {
        margin-top: 1rem;
        flex-direction: row;
        justify-content: flex-start;
        max-width: 180px;
    }
    .social-icon-link {
        height: 2.25rem;
        width: 2.25rem;
        border: 1px solid var(--color-white);
        border-radius: 9999px;
    }
    .footer-bottom-section {
        flex-direction: row;
        gap: 2rem;
        width: 100%;
        justify-content: space-between; /* To push copyright left and legal links right */
    }
    .footer-copyright {
        max-width: 24rem;
        padding: 0;
    }
    .footer-copyright p, .footer-copyright p:last-child {
        text-align: left;
    }
    .footer-stay-in-touch-heading {
         margin-top: 0;
         text-align: left;
         font-size: 0.875rem;
    }
    .footer-legal-links {
        padding: 0;
        text-align: right; /* Align legal links to the right on desktop */
    }
    .footer-legal-links li:not(:last-child) a {
        border-right-style: solid;
        border-left-style: solid; /* Add left border back for all except first */
    }
    .footer-legal-links li:first-child a {
        border-left-style: none; /* Keep first item without left border */
    }
    .footer-legal-links li:last-child a {
        border-right-style: none; /* Keep last item without right border */
    }
}
@media (min-width: 1280px) { /* xl breakpoint */
    .main-nav {
        display: flex;
    }
    .header-actions-wrapper {
        flex-grow: 0;
    }
    .header-cta-group {
        display: flex !important; /* Ensure CTA group is visible on XL */
    }
    .mobile-menu-toggle {
        display: none !important; /* Ensure mobile toggle is hidden on XL */
    }
}
/* Mobile specific font size adjustments for H1 and P */
@media (max-width: 767px) {
    .hero-content h1 {
        font-size: 2.5rem; /* Slightly smaller for mobile */
        line-height: 1.2;
    }
    .hero-content p, .content-paragraph, .content-list li {
        font-size: 1rem;
        line-height: 1.5;
    }
}
`;

export default function SecurityResearchersPage() {
    // Set document title dynamically as this is a Client Component
    useEffect(() => {
        document.title = "Security Researchers - Dashlane";
    }, []);

    return (
        <div id="__next">
            <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
            <header className="header">
                <a className="header-skip-link" href="#main-content">Skip to main content</a>
                <div className="header-background">
                    <div className="header-container">
                        <div className="header-content">
                            <a className="header-logo-link" href="/">
                                <svg role="img" width="127" height="32" viewBox="0 0 243 64" fill="#09363F" xmlns="http://www.w3.org/2000/svg" aria-describedby="logo-title">
                                    <title id="logo-title">Dashlane Logo</title>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M109.677 41.2692C109.765 44.0779 110.696 46.2804 112.469 47.8768L112.464 47.8914C114.333 49.5657 116.915 50.4029 120.209 50.4029C121.989 50.4387 123.757 50.0917 125.392 49.3854C126.798 48.7743 127.996 47.7689 128.842 46.4909C129.679 45.1838 130.106 43.6568 130.07 42.1053C130.09 40.2926 129.656 38.7587 128.769 37.5034C127.882 36.2482 126.518 35.2638 124.676 34.5505L120.22 32.7962C118.891 32.2583 117.946 31.7281 117.384 31.2057C117.116 30.9684 116.901 30.6762 116.756 30.3488C116.61 30.0214 116.536 29.6666 116.539 29.3082C116.525 28.9396 116.596 28.5726 116.749 28.2366C116.901 27.9006 117.13 27.6047 117.416 27.3727C117.989 26.8991 118.775 26.6623 119.773 26.6623C120.976 26.6642 121.896 26.9966 122.533 27.6593C123.106 28.2538 123.423 29.0831 123.483 30.1473C123.488 30.2523 123.534 30.3512 123.61 30.4236C123.686 30.496 123.787 30.5363 123.892 30.5362H129.301C129.411 30.5301 129.515 30.4811 129.589 30.3996C129.664 30.3182 129.703 30.2108 129.699 30.1006C129.669 28.6068 129.212 27.1528 128.384 25.9097C127.555 24.6666 126.388 23.6861 125.021 23.0837C123.408 22.3525 121.652 21.9919 119.881 22.0282C118.15 21.9922 116.432 22.3261 114.841 23.0076C113.484 23.5835 112.324 24.5427 111.505 25.7676C110.714 26.995 110.307 28.4302 110.335 29.8901C110.289 31.4903 110.773 33.0608 111.712 34.3575C112.632 35.5991 113.987 36.5513 115.776 37.214L120.609 39.0939C121.835 39.5676 122.685 40.0548 123.159 40.5558C123.645 41.0946 123.9 41.8039 123.866 42.5293C123.89 42.9412 123.817 43.3529 123.654 43.7319C123.491 44.111 123.243 44.4469 122.928 44.7133C122.302 45.2259 121.414 45.4822 120.264 45.4822C118.909 45.4842 117.842 45.0739 117.063 44.2514C116.347 43.5087 115.957 42.501 115.893 41.2282C115.887 41.1235 115.842 41.025 115.766 40.9527C115.689 40.8805 115.589 40.8399 115.484 40.8394H110.078C109.968 40.8439 109.864 40.8916 109.789 40.9721C109.714 41.0525 109.674 41.1592 109.677 41.2692ZM62.466 22.9003C62.3887 22.9776 62.3453 23.0825 62.3453 23.1918V49.2158C62.3461 49.3249 62.3898 49.4293 62.4669 49.5065C62.544 49.5836 62.6485 49.6273 62.7576 49.6281H72.4731C75.2584 49.6281 77.687 49.0258 79.759 47.8212C81.7709 46.6779 83.4189 44.9894 84.5129 42.9503C85.5963 40.8691 86.162 38.5574 86.162 36.2111C86.162 33.8649 85.5963 31.5531 84.5129 29.472C83.4119 27.438 81.7656 25.7512 79.759 24.6011C77.6851 23.3867 75.2564 22.7796 72.4731 22.7796H62.7576C62.6482 22.7796 62.5434 22.823 62.466 22.9003ZM76.2008 43.2748C74.9019 44.0585 73.4047 44.4513 71.8883 44.4063L68.9646 44.4004C68.8553 44.4004 68.7504 44.357 68.6731 44.2797C68.5958 44.2024 68.5524 44.0975 68.5524 43.9882V28.399C68.5524 28.2896 68.5958 28.1848 68.6731 28.1075C68.7504 28.0301 68.8553 27.9867 68.9646 27.9867H71.8883C73.4047 27.9417 74.9019 28.3345 76.2008 29.1182C77.3632 29.843 78.2896 30.8904 78.8672 32.1325C79.4481 33.4086 79.7487 34.7944 79.7487 36.1965C79.7487 37.5986 79.4481 38.9844 78.8672 40.2605C78.2906 41.5033 77.364 42.5509 76.2008 43.2748ZM157.726 22.7767H163.108C163.218 22.7767 163.322 22.8201 163.4 22.8974C163.477 22.9747 163.52 23.0796 163.52 23.1889V43.6958C163.52 43.8052 163.564 43.91 163.641 43.9873C163.719 44.0647 163.823 44.1081 163.933 44.1081H173.081C173.190 44.1089 173.294 44.1526 173.371 44.2299C173.447 44.3071 173.490 44.4115 173.490 44.5203V49.2217C173.490 49.3302 173.447 49.4343 173.370 49.5111C173.294 49.5879 173.190 49.6310 173.081 49.6310H157.717C157.608 49.6310 157.504 49.5880 157.426 49.5113C157.349 49.4346 157.305 49.3305 157.305 49.2217V23.2006C157.305 23.1465 157.315 23.0929 157.336 23.0428C157.357 22.9928 157.387 22.9474 157.425 22.9091C157.464 22.8708 157.509 22.8404 157.559 22.8197C157.609 22.7990 157.663 22.7883 157.717 22.7883L157.726 22.7767ZM208.063 22.7825H202.356C202.247 22.7825 202.143 22.8255 202.066 22.9022C201.988 22.9789 201.945 23.0830 201.944 23.1918V49.2129C201.944 49.2670 201.955 49.3206 201.975 49.3707C201.996 49.4207 202.026 49.4661 202.065 49.5044C202.103 49.5427 202.148 49.5730 202.198 49.5938C202.248 49.6145 202.302 49.6251 202.356 49.6251H207.476C207.585 49.6251 207.690 49.5817 207.767 49.5044C207.844 49.4271 207.888 49.3222 207.888 49.2129V33.8926C207.888 33.8009 207.919 33.7119 207.975 33.6396C208.031 33.5673 208.110 33.5158 208.199 33.4933C208.288 33.4708 208.382 33.4786 208.466 33.5155C208.550 33.5523 208.619 33.6161 208.663 33.6967L217.089 49.4059C217.124 49.4714 217.177 49.5263 217.240 49.5648C217.304 49.6034 217.377 49.6242 217.451 49.6251H223.158C223.268 49.6251 223.373 49.5817 223.450 49.5044C223.527 49.4271 223.571 49.3222 223.571 49.2129V23.1918C223.571 23.1378 223.560 23.0844 223.539 23.0345C223.519 22.9846 223.488 22.9394 223.450 22.9014C223.411 22.8633 223.366 22.8332 223.316 22.8128C223.266 22.7924 223.212 22.7821 223.158 22.7825H218.039C217.930 22.7825 217.826 22.8255 217.749 22.9022C217.671 22.9789 217.628 23.0830 217.627 23.1918V38.5121C217.627 38.6038 217.596 38.6928 217.540 38.7652C217.483 38.8375 217.404 38.8889 217.316 38.9114C217.227 38.9339 217.133 38.9261 217.049 38.8892C216.965 38.8524 216.896 38.7886 216.852 38.7080L208.426 22.9989C208.391 22.9333 208.339 22.8785 208.275 22.8403C208.211 22.8022 208.138 22.7822 208.063 22.7825ZM226.679 22.7825H242.265C242.319 22.7821 242.372 22.7924 242.422 22.8128C242.472 22.8332 242.518 22.8633 242.556 22.9014C242.595 22.9394 242.625 22.9847 242.646 23.0345C242.667 23.0844 242.677 23.1378 242.677 23.1918V27.3552C242.676 27.4640 242.633 27.5681 242.555 27.6448C242.478 27.7215 242.374 27.7645 242.265 27.7645H232.889C232.779 27.7645 232.674 27.8079 232.597 27.8853C232.520 27.9626 232.476 28.0674 232.476 28.1768V33.4394C232.477 33.5483 232.521 33.6524 232.598 33.7291C232.675 33.8057 232.780 33.8488 232.889 33.8488H242.265C242.374 33.8488 242.479 33.8922 242.556 33.9695C242.634 34.0468 242.677 34.1517 242.677 34.2610V38.3074C242.677 38.4168 242.634 38.5216 242.556 38.5989C242.479 38.6762 242.374 38.7197 242.265 38.7197H232.889C232.779 38.7197 232.674 38.7631 232.597 38.8404C232.520 38.9177 232.476 39.0226 232.476 39.1319V44.2133C232.476 44.3227 232.520 44.4275 232.597 44.5048C232.674 44.5822 232.779 44.6256 232.889 44.6256H242.265C242.374 44.6256 242.478 44.6686 242.555 44.7453C242.633 44.8220 242.676 44.9261 242.677 45.0349V49.1983C242.677 49.3076 242.634 49.4125 242.556 49.4898C242.479 49.5671 242.374 49.6105 242.265 49.6105H226.679C226.569 49.6105 226.464 49.5671 226.387 49.4898C226.310 49.4125 226.266 49.3076 226.266 49.1983V23.1772C226.266 23.0687 226.309 22.9645 226.386 22.8878C226.463 22.8110 226.567 22.7679 226.676 22.7679L226.679 22.7825ZM100.392 22.9813L109.312 49.2187V49.2129C109.318 49.2448 109.318 49.2775 109.312 49.3094C109.312 49.3869 109.281 49.4613 109.226 49.5161C109.171 49.5709 109.097 49.6017 109.020 49.6017H103.190C103.101 49.6028 103.014 49.5747 102.943 49.5219C102.872 49.4692 102.820 49.3945 102.795 49.3094L101.672 45.3331H92.7373L91.6146 49.3094C91.5893 49.3942 91.5372 49.4686 91.4660 49.5213C91.3948 49.5741 91.3085 49.6023 91.2199 49.6017H85.3959C85.3629 49.6062 85.3295 49.6062 85.2965 49.6017C85.2580 49.5903 85.2224 49.5710 85.1917 49.5452C85.1611 49.5193 85.1360 49.4875 85.1182 49.4515C85.1004 49.4156 85.0901 49.3764 85.0881 49.3364C85.0861 49.2963 85.0923 49.2563 85.1064 49.2187L93.9916 22.9813C94.0109 22.9197 94.0501 22.8662 94.1029 22.8292C94.1558 22.7922 94.2195 22.7737 94.2840 22.7767H100.099C100.164 22.7737 100.227 22.7922 100.280 22.8292C100.333 22.8662 100.372 22.9197 100.392 22.9813ZM96.9241 30.5917L94.2723 39.9652L94.2518 39.9506C94.2473 39.9865 94.2473 40.0228 94.2518 40.0587C94.2518 40.1642 94.2937 40.2653 94.3683 40.3399C94.4428 40.4145 94.5440 40.4564 94.6494 40.4564H99.7776C99.8135 40.4620 99.850 40.4620 99.8858 40.4564C99.9361 40.4422 99.9832 40.4182 100.024 40.3859C100.065 40.3535 100.100 40.3134 100.125 40.2678C100.151 40.2221 100.167 40.1719 100.173 40.1200C100.179 40.0681 100.175 40.0155 100.161 39.9652L97.5088 30.5917C97.5088 30.5142 97.4780 30.4398 97.4232 30.3850C97.3684 30.3302 97.2940 30.2994 97.2165 30.2994C97.1389 30.2994 97.0646 30.3302 97.0097 30.3850C96.9549 30.4398 96.9241 30.5142 96.9241 30.5917ZM199.552 49.2187L190.635 22.9813C190.616 22.9197 190.577 22.8662 190.524 22.8292C190.471 22.7922 190.407 22.7737 190.343 22.7767H184.524C184.460 22.7737 184.396 22.7922 184.343 22.8292C184.291 22.8662 184.251 22.9197 184.232 22.9813L175.350 49.2187C175.336 49.2563 175.330 49.2963 175.332 49.3364C175.334 49.3764 175.344 49.4156 175.362 49.4515C175.379 49.4875 175.404 49.5193 175.435 49.5452C175.466 49.5710 175.501 49.5903 175.540 49.6017C175.572 49.6060 175.604 49.6060 175.636 49.6017H181.460C181.549 49.6028 181.636 49.5747 181.707 49.5219C181.778 49.4692 181.830 49.3945 181.855 49.3094L182.981 45.3331H191.913L193.038 49.3094C193.063 49.3945 193.115 49.4692 193.187 49.5219C193.258 49.5747 193.344 49.6028 193.433 49.6017H199.257C199.335 49.6017 199.409 49.5709 199.464 49.5161C199.519 49.4613 199.549 49.3869 199.549 49.3094C199.554 49.2773 199.554 49.2449 199.549 49.2129L199.552 49.2187ZM184.510 39.9593L187.162 30.5859C187.171 30.5469 187.189 30.5104 187.213 30.4785C187.238 30.4466 187.269 30.4201 187.304 30.4007C187.339 30.3812 187.377 30.3692 187.417 30.3653C187.457 30.3615 187.498 30.3659 187.536 30.3783C187.585 30.3928 187.630 30.4194 187.666 30.4557C187.702 30.4920 187.729 30.5367 187.743 30.5859L190.395 39.9593C190.424 40.0613 190.411 40.1705 190.360 40.2631C190.308 40.3558 190.222 40.4242 190.120 40.4534C190.085 40.4626 190.049 40.4675 190.012 40.4681H184.893C184.787 40.4673 184.686 40.4252 184.611 40.3509C184.537 40.2766 184.494 40.1759 184.492 40.0704C184.492 40.0327 184.498 39.9952 184.510 39.9593ZM148.680 22.7825H154.068V22.7796C154.177 22.7796 154.281 22.8226 154.359 22.8974C154.436 22.9760 154.480 23.0801 154.480 23.1889V49.2100C154.480 49.3193 154.437 49.4242 154.360 49.5015C154.282 49.5788 154.177 49.6222 154.068 49.6222H148.680C148.570 49.6222 148.466 49.5788 148.388 49.5015C148.311 49.4242 148.267 49.3193 148.267 49.2100V39.3746C148.267 39.2652 148.224 39.1604 148.147 39.0831C148.069 39.0058 147.965 38.9623 147.855 38.9623H139.403C139.293 38.9623 139.189 39.0058 139.111 39.0831C139.034 39.1604 138.991 39.2652 138.991 39.3746V49.2100C138.990 49.3188 138.946 49.4229 138.869 49.4996C138.792 49.5763 138.687 49.6193 138.578 49.6193H133.190C133.081 49.6193 132.977 49.5763 132.899 49.4996C132.822 49.4229 132.778 49.3188 132.778 49.2100V23.1889C132.778 23.0796 132.821 22.9747 132.898 22.8974C132.976 22.8201 133.081 22.7767 133.190 22.7767H138.578C138.686 22.7774 138.790 22.8203 138.867 22.8962C138.944 22.9721 138.988 23.0750 138.991 23.1831V33.2202C138.991 33.3295 139.034 33.4344 139.111 33.5117C139.189 33.5890 139.293 33.6324 139.403 33.6324H147.855C147.909 33.6324 147.963 33.6217 148.013 33.6010C148.063 33.5803 148.108 33.5499 148.147 33.5117C148.185 33.4734 148.215 33.4279 148.236 33.3779C148.257 33.3279 148.267 33.2743 148.267 33.2202V23.1918C148.268 23.0830 148.312 22.9789 148.389 22.9022C148.466 22.8255 148.571 22.7825 148.680 22.7825Z"></path>
                                    <path d="M47.4132 20.5837C47.4132 20.1869 47.0164 19.7901 46.4597 19.6314L39.788 17.1724C38.6769 16.6963 37.4061 17.2518 37.4061 18.0465V45.9999C37.4061 46.3967 37.8029 46.8728 38.1997 47.0316L45.0302 49.4906C46.0629 49.8874 47.4132 49.3319 47.4132 48.4578V20.5837ZM34.9437 10.8159C34.9437 10.4179 34.5469 10.0211 33.9903 9.86243L27.3197 7.40342C26.2075 6.92726 24.9367 7.48278 24.9367 8.27748V25.2704C24.9367 25.6672 25.3334 26.1433 25.7302 26.3032L32.5607 28.7622C33.5935 29.1601 34.9437 28.6035 34.9437 27.7305V10.8159ZM34.9437 41.3926C34.9437 40.9958 34.5469 40.5990 33.9903 40.4403L27.3197 37.9813C26.2075 37.5051 24.9367 38.0606 24.9367 38.8553V55.8482C24.9367 56.2450 25.3334 56.7212 25.7302 56.8799L32.5607 59.3389C33.5935 59.7368 34.9437 59.1802 34.9437 58.3061V41.3926ZM22.4743 44.8084C22.4743 44.4116 22.0775 44.0137 21.5209 43.8550L14.8502 41.3959C13.7325 40.9198 12.4672 41.4753 12.4672 42.2700V60.3773C12.4672 60.7741 12.8640 61.2514 13.2608 61.4101L20.0913 63.8691C21.1241 64.2670 22.4743 63.7104 22.4743 62.8374V44.8084ZM22.4743 3.58747C22.4743 3.19068 22.0775 2.79388 21.5209 2.63516L14.8502 0.176148C13.7325 -0.300007 12.4672 0.255506 12.4672 1.05022V19.1575C12.4672 19.5554 12.8640 20.0316 13.2608 20.1903L20.0913 22.6493C21.1241 23.0461 22.4743 22.4906 22.4743 21.6165V3.58747ZM10.0071 4.30282C10.0071 3.90603 9.61028 3.50811 9.05365 3.34940L2.38301 0.890380C1.27086 0.414225 0 0.969740 0 1.76445V59.7402C0 60.1370 0.396801 60.6131 0.794714 60.7719L7.62407 63.2309C8.65685 63.6277 10.0071 63.0722 10.0071 62.1981V4.30282Z"></path>
                                </svg>
                            </a>
                            <nav role="navigation" aria-label="enhanced menu" className="main-nav">
                                <ul className="main-nav-list">
                                    <li className="main-nav-item">
                                        <div><button className="nav-link-button" type="button">Business<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path></svg></button></div>
                                    </li>
                                    <li className="main-nav-item">
                                        <div><button className="nav-link-button" type="button">Personal<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path></svg></button></div>
                                    </li>
                                    <li className="main-nav-item">
                                        <div><button className="nav-link-button" type="button">Why Dashlane<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path></svg></button></div>
                                    </li>
                                    <li className="main-nav-item">
                                        <div><button className="nav-link-button" type="button">Partners<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path></svg></button></div>
                                    </li>
                                    <li className="main-nav-item">
                                        <div><button className="nav-link-button" type="button">Resources<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path></svg></button></div>
                                    </li>
                                    <li className="main-nav-item">
                                        <a className="nav-link-plain" href="#">Pricing</a>
                                    </li>
                                    <li className="main-nav-item nav-item-login">
                                        <a className="nav-link-plain" href="#">Log in</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header-actions-wrapper">
                                <div className="header-cta-group">
                                    <a className="header-cta-button primary" href="#"><span>Contact Sales</span></a>
                                    <a className="header-cta-button secondary" href="#"><span>Start free trial</span></a>
                                </div>
                                <nav role="navigation" aria-label="mobile menu" className="mobile-menu-toggle">
                                    <div><button type="button"><span className="sr-only">Open menu</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mobile-icon-size"><path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"></path></svg></button></div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main id="main-content" tabIndex={-1} className="main-content">
                <article className="article-container">
                    <section className="hero-section">
                        <div className="hero-content">
                            <h1>Security Vulnerability Reporting</h1>
                            <p>Dashlane recognizes the importance of security researchers in helping keep our community safe. We encourage the responsible disclosure of security vulnerabilities directly to <a href="mailto:security@dashlane.com?subject=Security%20vulnerability%20report">security@dashlane.com</a> with the subject: "Security vulnerability report" or through our <a href="https://hackerone.com/dashlane">HackerOne bug bounty program</a>.</p>
                        </div>
                    </section>

                    <h2 id="h-disclosure-guidelines" className="content-heading">Disclosure guidelines</h2>
                    <div className="content-list-wrapper">
                        <ul className="content-list">
                            <li>Before reporting a security issue, please read our <a href="#">security FAQs</a>.</li>
                            <li>Please provide thorough details regarding the vulnerability so that we can successfully recreate and address the issue.</li>
                            <li>Include proof of concept code, screenshots, or screencasts as needed.</li>
                            <li>Please be aware that depending on the severity of the vulnerability, we will need a reasonable amount of time to respond to and/or fix the reported issue.</li>
                            <li>Please make a good faith effort not to leak, manipulate, or destroy any user data. Please only test against accounts you own yourself or with the explicit permission of the account holder.</li>
                            <li>Please refrain from automated/scripted account creation.</li>
                            <li>If your report includes sensitive information, please use the following GPG key:</li>
                        </ul>
                    </div>

                    <div className="code-block-wrapper">
                        <button className="copy-button">
                            <span className="sr-only">Copy to clipboard</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.801 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.801 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path></svg>
                        </button>
                        <pre><code className="code-block">-----BEGIN PGP PUBLIC KEY BLOCK-----
mDMEYtkifRYJKwYBBAHaRw8BAQdAVXv1pmVieHAzBmA7VYPCFkf2KoScNeqYdt21enPtSKi0KVNlY3VyaXR5IERhc2hsYW5lIDxzZWN1cml0eUBkYXNobGFuZS5jb20+iJkEExYKAEEWIQQfYOQRQlOqLqsIvMRMLxaXBUgCbgUCYtkifQIbAwUJCWYBgAULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRBMLxaXBUgCbuYZAP47GODoOiQCYmFHzmuckgI87a/MT/OWHutv/BUIp9OD/QEA4386+XbOEyVNV8RPlBe3GSXcTP1iesBt8pjGU+kMRgS4OARi2SJ9EgorBgEEAZdVAQUBAQdAXp58aVnmmRMOno2B5FVXFaorliqVMk/nmRq9ElkTn2YDAQgHiH4EGBYKACYWIQQfYOQRQlOqLqsIvMRMLxaXBUgCbgUCYtkifQIbDAUJCWYBgAAKCRBMLxaXBUgCbsuIAP4jJXMzPZZF/ZT2SZwInngFCDO0svN6d9/CJXkApkQfPwD9HCeELW1xn5GL+K0IPQ+ssz1d49A51UjlaO4SBO7c1gk=R4gb
-----END PGP PUBLIC KEY BLOCK-----</code></pre>
                    </div>

                    <h2 id="h-hackerone-bug-bounty-program-reward-eligibility" className="content-heading">HackerOne bug bounty program reward eligibility</h2>
                    <p className="content-paragraph">Dashlane may provide rewards to eligible reporters of qualifying vulnerabilities through our HackerOne bug bounty program. Reward amounts may vary depending on the severity of the vulnerability reported.</p>
                    <p className="content-paragraph">Dashlane reserves the right to decide if the minimum severity threshold is met and whether the vulnerability was previously recorded.</p>

                    <h3 className="content-subheading">To qualify for a reward under this program, you should:</h3>
                    <div className="content-list-wrapper">
                        <ul className="content-list">
                            <li>Be the first to report a specific vulnerability through our <a href="https://hackerone.com/dashlane">HackerOne bug bounty program</a>.</li>
                            <li>Send a clear textual description of the report along with steps to reproduce the vulnerability. Include attachments such as screenshots or proof of concept code as necessary.</li>
                            <li>Disclose the vulnerability report directly and exclusively to us. Public disclosure or disclosure to third parties – including vulnerability brokers – before we address your report will result in forfeiting any potential reward.</li>
                        </ul>
                    </div>
                    <div style={{ height: '50px' }} aria-hidden="true"></div>
                </article>
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <nav role="navigation" aria-label="Footer Navigation menu" className="footer-nav-container">
                        <ul className="footer-nav-list">
                            <li>
                                <button><span>Dashlane Omnix™</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">Platform overview</a></li>
                                    <li><a href="#">Credential Protection</a></li>
                                    <li><a href="#">Password Management</a></li>
                                    <li><a href="#">Dashlane Secure Cloud</a></li>
                                    <li><a href="#">Contact Sales</a></li>
                                    <li><a href="#">Request a demo</a></li>
                                </ul>
                            </li>
                            <li style={{ marginTop: '2rem' }}>
                                <button><span>Business</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">Business password manager</a></li>
                                    <li><a href="#">Plans &amp; pricing</a></li>
                                    <li><a href="#">Try free for 14 days</a></li>
                                    <li><a href="#">Buy now</a></li>
                                </ul>
                            </li>
                            {/* Other footer nav lists would go here, mimicking the pattern */}
                            {/* For brevity, omitting the rest as it follows the same structure from paste.txt */}
                            <li>
                                <button><span>Personal</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">Personal password manager</a></li>
                                    <li><a href="#">Family password manager</a></li>
                                    <li><a href="#">Plans &amp; pricing</a></li>
                                    <li><a href="#">Download for free</a></li>
                                    <li><a href="#">Buy now</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Features</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">Autofill</a></li>
                                    <li><a href="#">Dark Web Monitoring</a></li>
                                    <li><a href="#">Passkeys</a></li>
                                    <li><a href="#">Password Generator</a></li>
                                    <li><a href="#">Passwordless</a></li>
                                    <li><a href="#">Proactive credential security</a></li>
                                    <li><a href="#">SSO integration</a></li>
                                    <li><a href="#">Username Generator</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Why Dashlane</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">The Dashlane difference</a></li>
                                    <li><a href="#">For enterprises</a></li>
                                    <li><a href="#">For small &amp; midsize businesses</a></li>
                                    <li><a href="#">Industry recognition</a></li>
                                    <li><a href="#">Compare Dashlane</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Industries</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">Automotive</a></li>
                                    <li><a href="#">Education</a></li>
                                    <li><a href="#">Financial services</a></li>
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Healthcare</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Customer Support</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">Support Center</a></li>
                                    <li><a href="#">Get started</a></li>
                                    <li><a href="#">Account &amp; security</a></li>
                                    <li><a href="#">Apps &amp; devices</a></li>
                                    <li><a href="#">Logins &amp; data</a></li>
                                    <li><a href="#">For admins</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Resources</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">Resource Library</a></li>
                                    <li><a href="#">E-books &amp; mini-guides</a></li>
                                    <li><a href="#">White papers &amp; reports</a></li>
                                    <li><a href="#">Customer success stories</a></li>
                                    <li><a href="#">Admin resources</a></li>
                                    <li><a href="#">Webinars &amp; events</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Technology</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">Zero-knowledge security</a></li>
                                    <li><a href="#">Security principles &amp; architecture</a></li>
                                    <li><a href="#">Trust Center</a></li>
                                    <li><a href="#">For developers</a></li>
                                    <li><a href="#">Bug bounty program</a></li>
                                    <li><a href="#">System status</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Company</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">About Dashlane</a></li>
                                    <li><a href="#">Our leadership</a></li>
                                    <li><a href="#">Careers at Dashlane</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Blog</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">What&apos;s new</a></li>
                                    <li><a href="#">Data &amp; culture</a></li>
                                    <li><a href="#">Product news &amp; tips</a></li>
                                    <li><a href="#">Engineering</a></li>
                                    <li><a href="#">Workplace tips</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Partner with us</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">Resellers &amp; referrals</a></li>
                                    <li><a href="#">Become a partner</a></li>
                                    <li><a href="#">Partner portal</a></li>
                                    <li><a href="#">Submit a deal</a></li>
                                    <li><a href="#">Affiliates</a></li>
                                    <li><a href="#">Influencers</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Log in</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">Personal App</a></li>
                                    <li><a href="#">Admin Console</a></li>
                                </ul>
                            </li>
                            <li>
                                <button><span>Download</span><span className="toggle-icon"><img alt="open" width="16" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cpath%20d%3D%22M12%2014.0157L5.55319%207L4%208.29409L12%2017L20%208.29409L18.4468%207L12%2014.0157Z%22/%3E%3C/g%3E%3C/svg%3E"/></span></button>
                                <ul className="footer-sub-list">
                                    <li><a href="#">For iOS</a></li>
                                    <li><a href="#">For Android</a></li>
                                </ul>
                            </li>
                            <li style={{ marginTop: '2.5rem' }}>
                                <span className="footer-stay-in-touch-heading">Stay in touch</span>
                                <div className="social-icons-wrapper">
                                    <div className="social-icons-list">
                                        <a href="https://www.facebook.com/GetDashlane" target="_blank" className="social-icon-link"><span className="sr-only">Facebook</span><svg className="h-4 w-4" fill="currentColor" width="9" height="16" viewBox="0 0 9 16"><path d="M5.90339 16L5.90340 8.93625H8.18912L8.55002 6.04903H5.90340V4.36482C5.90340 3.52272 6.14400 3.04151 7.22671 3.04151H8.67032V0.394898C8.42972 0.394898 7.58761 0.274597 6.62521 0.274597C4.58009 0.274597 3.13648 1.59791 3.13648 4.00392V6.04903H0.730469V8.93625H3.13648L3.13648 16H5.90339Z"></path></svg></a>
                                        <a href="https://www.x.com/dashlane" target="_blank" className="social-icon-link"><span className="sr-only">X</span><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M14.1171 3.33331H16.379L11.4374 8.98118L17.2508 16.6666H12.699L9.13385 12.0054L5.05453 16.6666H2.79128L8.07675 10.6256L2.5 3.33331H7.16735L10.3899 7.59383L14.1171 3.33331ZM14.5766 15.3128H13.3232L5.14137 4.61605H6.48632L14.5766 15.3128Z"></path></svg></a>
                                        <a href="https://www.youtube.com/channel/UC29QiP0ZFzBVTnCeLytXXCg" target="_blank" className="social-icon-link"><span className="sr-only">Youtube</span><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg></a>
                                        <a href="https://www.instagram.com/dashlane" target="_blank" className="social-icon-link"><span className="sr-only">Instagram</span><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566.748 1.15.137.353.3.882.344 1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg></a>
                                        <a href="https://www.reddit.com/r/dashlane" target="_blank" className="social-icon-link"><span className="sr-only">Reddit</span><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"></path></svg></a>
                                        <a href="https://www.linkedin.com/company/dashlane" target="_blank" className="social-icon-link"><span className="sr-only">LinkedIn</span><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer-bottom-section">
                        <div className="footer-copyright">
                            <p>© 2025 Dashlane Inc. All rights reserved.</p>
                            <p>Dashlane and the Dashlane logo are trademarks of Dashlane SAS, registered in the U.S. and other countries.</p>
                        </div>
                        {/* The empty div on original for layout */}
                        <div className="footer-stay-in-touch-heading" style={{display: 'none'}}></div>
                        <div className="footer-legal-links">
                            <ul>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Legal</a></li>
                                <li><a href="#">Cookie Preferences</a></li>
                                <li><a href="#">Do not sell or share my personal information</a></li>
                                <li><a href="#">Accessibility Statement</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
