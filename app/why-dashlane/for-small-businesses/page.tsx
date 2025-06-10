'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SmallBusinessPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  
    const testimonials = [
    {
      id: 1,
      logo: 'https://i.ibb.co/RGWYzMhs/Ooly-Logo.png',
      quote: "It's adaptive. It fits into our existing flow of operations but is flexible enough for the future.",
      author: {
        name: 'Sarah Johnson',
        title: 'IT Director'
      },
      link: '/case-studies/kovo'
    },
    {
      id: 2,
      logo: 'https://i.ibb.co/qvDbdJg/Food-Corps-Logo-1-color.png',
      quote: "I provide the training materials, but each team has the autonomy to discover which parts of Dashlane work best for them.",
      author: {
        name: 'Michael Chen',
        title: 'Security Manager'
      },
      link: '/case-studies/foodcorps'
    },
    {
      id: 3,
      logo: 'https://i.ibb.co/XZrHMYz1/Logo-Nonstop-dogwear.png',
      quote: "The way Dashlane is laid out just makes sense. Our employees agree; the simple UI and UX make their jobs easier.",
      author: {
        name: 'Emily Rodriguez',
        title: 'Operations Lead'
      },
      link: '/case-studies/finder'
    }
  ];


  const accordionItems = [
    {
      title: 'Proactive credential security',
      content: 'Monitor and protect against credential threats with real-time alerts and comprehensive security scanning.'
    },
    {
      title: 'Easy deployment and onboarding',
      content: 'Get your team up and running quickly with simple deployment tools and intuitive onboarding processes.'
    },
    {
      title: 'Secure sharing',
      content: 'Share passwords and sensitive information securely across your team with encrypted sharing capabilities.'
    },
    {
      title: 'Phishing alerts',
      content: 'Protect your team from phishing attacks with real-time alerts and threat detection.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:h-12 focus:bg-white focus:px-4 focus:py-3 focus:shadow-lg focus:text-emerald-600 focus:no-underline focus:transition-all focus:duration-300"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex h-15 items-center justify-between relative">
            {/* Logo */}
            <Link href="/" className="mr-3 inline-flex items-center md:mr-12">
              <svg
                role="img"
                width="127"
                height="32"
                viewBox="0 0 243 64"
                fill="#09363F"
                xmlns="http://www.w3.org/2000/svg"
                aria-describedby="logo-title"
                className="fill-slate-800"
              >
                <title id="logo-title">Dashlane Logo</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M109.677 41.2692C109.765 44.0779 110.696 46.2804 112.469 47.8768L112.464 47.8914C114.333 49.5657 116.915 50.4029 120.209 50.4029C121.989 50.4387 123.757 50.0917 125.392 49.3854C126.798 48.7743 127.996 47.7689 128.842 46.4909C129.679 45.1838 130.106 43.6568 130.07 42.1053C130.09 40.2926 129.656 38.7587 128.769 37.5034C127.882 36.2482 126.518 35.2638 124.676 34.5505L120.22 32.7962C118.891 32.2583 117.946 31.7281 117.384 31.2057C117.116 30.9684 116.901 30.6762 116.756 30.3488C116.61 30.0214 116.536 29.6666 116.539 29.3082C116.525 28.9396 116.596 28.5726 116.749 28.2366C116.901 27.9006 117.13 27.6047 117.416 27.3727C117.989 26.8991 118.775 26.6623 119.773 26.6623C120.976 26.6642 121.896 26.9966 122.533 27.6593C123.106 28.2538 123.423 29.0831 123.483 30.1473C123.488 30.2523 123.534 30.3512 123.61 30.4236C123.686 30.496 123.787 30.5363 123.892 30.5362H129.301C129.411 30.5301 129.515 30.4811 129.589 30.3996C129.664 30.3182 129.703 30.2108 129.699 30.1006C129.669 28.6068 129.212 27.1528 128.384 25.9097C127.555 24.6666 126.388 23.6861 125.021 23.0837C123.408 22.3525 121.652 21.9919 119.881 22.0282C118.15 21.9922 116.432 22.3261 114.841 23.0076C113.484 23.5835 112.324 24.5427 111.505 25.7676C110.714 26.995 110.307 28.4302 110.335 29.8901C110.289 31.4903 110.773 33.0608 111.712 34.3575C112.632 35.5991 113.987 36.5513 115.776 37.214L120.609 39.0939C121.835 39.5676 122.685 40.0548 123.159 40.5558C123.645 41.0946 123.9 41.8039 123.866 42.5293C123.89 42.9412 123.817 43.3529 123.654 43.7319C123.491 44.111 123.243 44.4469 122.928 44.7133C122.302 45.2259 121.414 45.4822 120.264 45.4822C118.909 45.4842 117.842 45.0739 117.063 44.2514C116.347 43.5087 115.957 42.501 115.893 41.2282C115.887 41.1235 115.842 41.025 115.766 40.9527C115.689 40.8805 115.589 40.8399 115.484 40.8394H110.078C109.968 40.8439 109.864 40.8916 109.789 40.9721C109.714 41.0525 109.674 41.1592 109.677 41.2692Z"
                />
                <path d="M47.4132 20.5837C47.4132 20.1869 47.0164 19.7901 46.4597 19.6314L39.788 17.1724C38.6769 16.6963 37.4061 17.2518 37.4061 18.0465V45.9999C37.4061 46.3967 37.8029 46.8728 38.1997 47.0316L45.0302 49.4906C46.0629 49.8874 47.4132 49.3319 47.4132 48.4578V20.5837Z" />
              </svg>
            </Link>

            {/* Navigation - Hidden on mobile */}
            <nav role="navigation" aria-label="enhanced menu" className="hidden flex-1 xl:flex">
              <ul className="flex h-full w-full items-center list-none">
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors bg-transparent border-0 cursor-pointer p-0">
                    Business
                    <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors bg-transparent border-0 cursor-pointer p-0">
                    Personal
                    <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors bg-transparent border-0 cursor-pointer p-0">
                    Why Dashlane
                    <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors bg-transparent border-0 cursor-pointer p-0">
                    Partners
                    <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors bg-transparent border-0 cursor-pointer p-0">
                    Resources
                    <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors">
                  <Link href="/pricing" className="text-gray-500 hover:text-blue-600 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li className="flex h-full items-center mx-3 ml-auto mr-6 border-b-2 border-transparent hover:border-blue-600 transition-colors">
                  <Link href="https://app.dashlane.com/" className="text-gray-500 hover:text-blue-600 transition-colors">
                    Log in
                  </Link>
                </li>
              </ul>
            </nav>

            {/* CTA Buttons - Hidden on mobile */}
            <div className="hidden xl:flex flex-col xl:flex-row items-center">
              <Link
                href="/business-password-manager/enterprise"
                className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-sm px-3.5 py-2.5 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
              >
                Contact Sales
              </Link>
              <Link
                href="/business-password-manager/try"
                className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-sm px-3.5 py-2.5 bg-white text-blue-600 border border-blue-600 hover:bg-slate-50 transition-colors focus:outline-1 focus:outline-blue-600 mt-2 xl:mt-0 xl:ml-4"
              >
                Start free trial
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="inline-flex items-center justify-center ml-2 p-2 pr-0 rounded-md text-blue-600 xl:hidden bg-transparent border-0 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" tabIndex={-1} className="flex w-full flex-col">
        {/* Hero Section */}
        <section className="py-8 pb-15">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-5 py-5 items-center lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-gray-500 uppercase mb-2 md:mb-4 text-base">
                  For small & midsize businesses
                </p>
                <h1 className="mb-4 text-5xl md:text-6xl font-medium leading-tight text-slate-800">
                  Security that scales with your business
                </h1>
                <p className="text-gray-500 text-lg mb-8 md:mb-10">
                  Build your team's first line of defense against breaches with Dashlane's easy-to-use password management platform.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link
                    href="/business-password-manager/try"
                    className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
                  >
                    Start a Business trial
                  </Link>
                  <Link
                    href="/business-password-manager/enterprise"
                    className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-white text-blue-600 border border-blue-600 hover:bg-slate-50 transition-colors focus:outline-1 focus:outline-blue-600"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <figure className="relative aspect-[3/2]">
                  <Image
                    src="https://i.ibb.co/hzwwTDX/Why-Dashlane-SMB-Hero-600x400.webp"
                    alt="Woman working on laptop with Dashlane Autofill"
                    fill
                    className="absolute inset-0 rounded-lg object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* Animated Logo Carousel */}
              {/* Animated Logo Carousel */}
        <section className="py-8 bg-blue-600">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="max-h-31 w-full overflow-hidden rounded-full">
              <p className="hidden md:block mb-2 md:mb-4 pt-6 text-base md:text-xl font-semibold uppercase text-center text-gray-300">
                TRUSTED BY LEADING ORGANIZATIONS ACROSS THE WORLD
              </p>
              <div className="flex flex-nowrap items-center justify-center gap-10 w-max mt-4 pb-4 animate-[logo-slide_30s_linear_infinite] md:hover:[animation-play-state:paused]">
                {/* Duplicate logos for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    <div className="text-center h-10 flex-shrink-0">
                      <Image
                        src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/BBCStudios-Logo-Dark.png"
                        alt="BBC Studios logo"
                        width={120}
                        height={40}
                        className="h-10 object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="text-center h-10 flex-shrink-0">
                      <Image
                        src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/Forrester-Logo-Dark.png"
                        alt="Forrester logo"
                        width={120}
                        height={40}
                        className="h-10 object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="text-center h-10 flex-shrink-0">
                      <Image
                        src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/Airfrance-Logo-Dark.png"
                        alt="Air France logo"
                        width={120}
                        height={40}
                        className="h-10 object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="text-center h-10 flex-shrink-0">
                      <Image
                        src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/Sephora-Logo-Dark.png"
                        alt="Sephora logo"
                        width={120}
                        height={40}
                        className="h-10 object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="text-center h-10 flex-shrink-0">
                      <Image
                        src="https://i.ibb.co/XZrHMYz1/Logo-Nonstop-dogwear.png"
                        alt="Non-stop dogwear logo"
                        width={120}
                        height={40}
                        className="h-10 object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="text-center h-10 flex-shrink-0">
                      <Image
                        src="https://i.ibb.co/RGWYzMhs/Ooly-Logo.png"
                        alt="Ooly logo"
                        width={120}
                        height={40}
                        className="h-10 object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="text-center h-10 flex-shrink-0">
                      <Image
                        src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/Finder-Logo.webp"
                        alt="Finder logo"
                        width={120}
                        height={40}
                        className="h-10 object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="text-center h-10 flex-shrink-0">
                      <Image
                        src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/MTC-Federal-Logo.png"
                        alt="MTC Federal logo"
                        width={120}
                        height={40}
                        className="h-10 object-contain brightness-0 invert"
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-15">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl md:text-center mb-12">
              <p className="text-gray-500 uppercase mb-2 md:mb-4 text-base">
                protected & productive
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl font-medium text-blue-600 md:mb-6">
                Total security. Minimal effort.
              </h2>
              <p className="text-gray-500 text-lg">
                Building a business is hard enough—why not make securing it easy? Dashlane scales with your business, keeping all your employees and data protected as you grow.
              </p>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6">
                <div className="inline-block mb-4 p-2 rounded-md bg-emerald-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 fill-emerald-600">
                    <path d="M14 4.5C12.6193 4.5 11.5 5.61929 11.5 7C11.5 8.38071 12.6193 9.5 14 9.5C14.3224 9.5 14.6306 9.43896 14.9136 9.3278L16.3958 10.8099C15.702 11.2471 14.8806 11.5 14 11.5C11.5147 11.5 9.5 9.48528 9.5 7C9.5 4.51472 11.5147 2.5 14 2.5C16.4853 2.5 18.5 4.51472 18.5 7C18.5 7.88053 18.2471 8.702 17.81 9.39572L16.3278 7.91357C16.439 7.63059 16.5 7.32242 16.5 7C16.5 5.61929 15.3807 4.5 14 4.5Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium leading-8 text-blue-600">
                  Save time, get peace of mind
                </h3>
                <p className="text-sm text-gray-500">
                  Dashlane is simple to roll out so your team quickly gets the secure access they need to get to work.
                </p>
              </div>
              <div className="p-6">
                <div className="inline-block mb-4 p-2 rounded-md bg-emerald-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 fill-emerald-600">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11 19H13V22H19V2H5V22H11V19ZM9 20V17H15V20H17V4H7V20H9Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium leading-8 text-blue-600">
                  A solution that scales
                </h3>
                <p className="text-sm text-gray-500">
                  From a Password Health score you can track over time to advanced integrations, we protect your business as it grows.
                </p>
              </div>
              <div className="p-6">
                <div className="inline-block mb-4 p-2 rounded-md bg-emerald-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 fill-emerald-600">
                    <path d="M18.6018 4.31729L16.965 2.68051C16.191 1.90644 14.9459 1.90651 14.1717 2.68067L11.2616 5.59052L11.0679 9.02946L2.1001 17.9972L6.04307 21.9398L8.86772 19.1152L7.45361 17.7011L6.04323 19.1115L4.92859 17.9969L13.0086 9.91689L13.2024 6.478L15.5682 4.11236L16.1282 4.67237L15.2207 5.57994C14.401 6.39958 14.4012 7.73933 15.2209 8.55856L15.5654 8.90283C16.3396 9.67646 17.5843 9.67615 18.3583 8.90213L19.3582 7.90228L19.918 8.46211L17.576 10.8041L14.147 11.0077L9.22138 15.9333L10.6355 17.3474L15.0107 12.9723L18.4398 12.7687L21.3146 9.89371C22.1025 9.1058 22.1025 7.81803 21.3148 7.03026L19.7112 5.42663L18.2968 6.84095L18.2976 6.8417L17.3109 7.82839C17.1174 8.0219 16.8062 8.02198 16.6127 7.82857L16.2682 7.4843C16.0396 7.25585 16.0395 6.88224 16.2681 6.65368L16.4498 6.47195L16.4485 6.47061L18.6018 4.31729Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium leading-8 text-blue-600">
                  The tool teams love
                </h3>
                <p className="text-sm text-gray-500">
                  Employees love the Dashlane features, such as secure sharing, that make their daily work safer and easier.
                </p>
              </div>
              <div className="p-6">
                <div className="inline-block mb-4 p-2 rounded-md bg-emerald-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 fill-emerald-600">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.8019 12.0002C11.3432 14.2823 9.34545 16 6.95051 16C4.21642 16 2 13.7614 2 11C2 8.23858 4.21642 6 6.95051 6C9.34559 6 11.3434 7.71786 11.802 10.0002H20.8119L22 12.0002L18.8317 12V17H16.8515V12H14.8713L14.8713 15H12.8911V12L11.8019 12.0002ZM9.92081 11C9.92081 12.6569 8.59096 14 6.95051 14C5.31005 14 3.9802 12.6569 3.9802 11C3.9802 9.34315 5.31005 8 6.95051 8C8.59096 8 9.92081 9.34315 9.92081 11Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium leading-8 text-blue-600">
                  Serious security standards
                </h3>
                <p className="text-sm text-gray-500">
                  Our patented zero-knowledge security means no one, not even Dashlane, can see inside employee or admin vaults.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-15 bg-blue-50">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-5 items-center lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="mb-4 text-3xl md:text-4xl font-medium text-blue-600 md:mb-6">
                  How does Dashlane protect your business?
                </h2>
                <div className="border-t border-gray-200">
                  {accordionItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="flex w-full items-center justify-between py-6 px-2 text-left bg-transparent border-0 cursor-pointer"
                      >
                        <h3 className="text-xl font-medium text-blue-600 m-0">
                          {item.title}
                        </h3>
                        <span className={`ml-5 w-6 h-6 transition-transform duration-200 ${openAccordion === index ? 'rotate-180' : ''}`}>
                          <svg width="24" height="24" viewBox="0 0 24 24" className="w-full h-full fill-emerald-600">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 14.0157L5.55319 7L4 8.29409L12 17L20 8.29409L18.4468 7L12 14.0157Z"/>
                          </svg>
                        </span>
                      </button>
                      {openAccordion === index && (
                        <div className="pb-6 px-2">
                          <p className="text-gray-500">{item.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <figure className="relative aspect-[3/2]">
                  <Image
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/06/Seamless-Employee-Adoption.webp"
                    alt="Man working on computer with Dashlane Autofill"
                    fill
                    className="absolute inset-0 rounded-lg object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-15">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-center mb-15 text-5xl md:text-6xl font-medium text-blue-600 leading-tight">
              The easy-to-use password manager<br />
              that grows with your business
            </h2>
            <div className="border border-gray-300 rounded-lg p-8 flex flex-col md:flex-row justify-between items-stretch">
              <div className="flex-shrink-0 md:w-2/5">
                <h3 className="text-3xl font-medium text-blue-600 mb-2">Business</h3>
                <p className="text-gray-500 mb-6">Advanced protection</p>
                <div className="text-4xl font-medium text-blue-600 mb-2">$3</div>
                <div className="text-blue-600 mb-10">
                  <span>Per seat/month</span><br />
                  <span>Billed annually</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/business-password-manager/try"
                    className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-base px-4 py-3 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
                  >
                    Start a Business trial
                  </Link>
                  <Link
                    href="/business-password-manager/buy"
                    className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-base px-4 py-3 bg-white text-blue-600 border border-blue-600 hover:bg-slate-50 transition-colors focus:outline-1 focus:outline-blue-600"
                  >
                    Purchase now
                  </Link>
                </div>
              </div>
              <div className="flex-1 ml-0 md:ml-4 mt-8 md:mt-0">
                <ul className="list-none">
                  <li className="flex items-start mb-3">
                    <span className="mr-5 mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-600">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                      </svg>
                    </span>
                    <p className="text-blue-600 m-0">
                      <strong>Scalable:</strong> Buy an unlimited number of seats as your business grows
                    </p>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="mr-5 mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-600">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                      </svg>
                    </span>
                    <p className="text-blue-600 m-0">
                      <strong>Easy roll-out:</strong> Mass deploy the extension in minutes
                    </p>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="mr-5 mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-600">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                      </svg>
                    </span>
                    <p className="text-blue-600 m-0">
                      <strong>Unlimited:</strong> Get unlimited group & Collection sharing, plus unlimited password & passkey storage
                    </p>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="mr-5 mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-600">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                      </svg>
                    </span>
                    <p className="text-blue-600 m-0">
                      <strong>Evidence-based ROI:</strong> Watch your organization's Password Health score increase, and get detailed Activity Logs
                    </p>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="mr-5 mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-600">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                      </svg>
                    </span>
                    <p className="text-blue-600 m-0">
                      <strong>Proactive protection:</strong> Enjoy real-time phishing alerts and Dark Web Insights, plus set advanced security policies
                    </p>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="mr-5 mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-600">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                      </svg>
                    </span>
                    <p className="text-blue-600 m-0">
                      <strong>Seamless integrations:</strong> Integrate with your single sign-on (SSO), SCIM provisioning, and SIEM tool providers
                    </p>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="mr-5 mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-600">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                      </svg>
                    </span>
                    <p className="text-blue-600 m-0">
                      <strong>Help when you need it:</strong> On-demand phone support
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

         {/* Testimonials Section */}
        <section className="py-15 bg-slate-800">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
                See why growing businesses trust and love Dashlane
              </h2>
              <div className="hidden md:flex gap-5">
                <button
                  onClick={prevTestimonial}
                  disabled={currentTestimonial === 0}
                  className="inline-flex items-center justify-center w-12 h-12 border border-white rounded-full bg-transparent cursor-pointer transition-opacity hover:opacity-80 disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6 fill-white rotate-180" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  disabled={currentTestimonial === testimonials.length - 1}
                  className="inline-flex items-center justify-center w-12 h-12 border border-white rounded-full bg-transparent cursor-pointer transition-opacity hover:opacity-80 disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="flex-shrink-0 w-full mr-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 flex flex-col justify-between min-h-[526px]">
                      <div>
                        <div className="h-14 mb-6">
                          <Image
                            src={testimonial.logo}
                            alt="Company Logo"
                            width={170}
                            height={55}
                            className="h-full w-auto object-contain object-left"
                          />
                        </div>
                        <blockquote className="text-3xl text-blue-600 mb-10 leading-tight">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div>
                            <div className="font-medium text-blue-600 text-lg">
                              {testimonial.author.name}
                            </div>
                            <div className="text-blue-600 text-lg">
                              {testimonial.author.title}
                            </div>
                          </div>
                        </div>
                        <Link href={testimonial.link} className="flex items-center text-blue-500 hover:text-blue-600 transition-colors text-lg">
                          Learn more
                          <svg className="w-5 h-5 ml-2 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                    currentTestimonial === index ? 'bg-gray-100' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>


        {/* Resources Section */}
        <section className="py-15">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-medium text-blue-600 max-w-2xl">
                Get insights to help you level up your business's security
              </h2>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="w-full">
                <Link href="#" className="no-underline">
                  <figure className="mb-6 relative aspect-[824/477]">
                    <Image
                      src="https://i.ibb.co/mCDYTS54/onetemp.png"
                      alt="Choosing the Best Small Business Password Manager"
                      fill
                      className="absolute inset-0 rounded-lg object-cover"
                    />
                  </figure>
                  <span className="mb-4 inline-block rounded bg-blue-50 px-3 py-1 text-xs uppercase text-blue-600">
                    Blog
                  </span>
                  <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                    Choosing the Best Small Business Password Manager
                  </h3>
                </Link>
              </div>
              <div className="w-full">
                <Link href="#" className="no-underline">
                  <figure className="mb-6 relative aspect-[824/477]">
                    <Image
                      src="https://i.ibb.co/Ps0QR6z8/two-temp.png"
                      alt="Definitive Guide to Password Management for Small Businesses"
                      fill
                      className="absolute inset-0 rounded-lg object-cover"
                    />
                  </figure>
                  <span className="mb-4 inline-block rounded bg-blue-50 px-3 py-1 text-xs uppercase text-blue-600">
                    e-book
                  </span>
                  <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                    Definitive Guide to Password Management for Small Businesses
                  </h3>
                </Link>
              </div>
              <div className="w-full">
                <Link href="#" className="no-underline">
                  <figure className="mb-6 relative aspect-[824/477]">
                    <Image
                      src="https://i.ibb.co/rKZcwG8R/threetemp.png"
                      alt="Password Playbook for Small Businesses"
                      fill
                      className="absolute inset-0 rounded-lg object-cover"
                    />
                  </figure>
                  <span className="mb-4 inline-block rounded bg-blue-50 px-3 py-1 text-xs uppercase text-blue-600">
                    mini-guide
                  </span>
                  <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                    Password Playbook for Small Businesses
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Recognition Section */}
        <section className="py-15">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="bg-slate-800 text-white p-14 my-6 rounded-lg">
              <div className="grid gap-5 items-center lg:grid-cols-2 lg:gap-20">
                <div>
                  <p className="text-gray-300 uppercase mb-4">Industry recognition</p>
                  <h2 className="text-3xl md:text-4xl text-white mb-6">
                    Trusted by millions. Backed by industry experts.
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Between recognition for our security standards and awards for our easy-to-use platform, there's a reason Dashlane is leading the way as the credential and password manager for growing businesses.
                  </p>
                  <Link
                    href="/awards"
                    className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-white text-blue-600 border border-transparent hover:bg-gray-50 transition-colors focus:outline-1 focus:outline-blue-600"
                  >
                    Learn more
                  </Link>
                </div>
                <div className="mt-8 md:mt-0">
                  <figure className="relative aspect-[3/2]">
                    <Image
                      src="https://i.ibb.co/cSZJMdHV/placeholder-Image-4-copy-4.png"
                      alt="Industry Recognition Awards"
                      fill
                      className="absolute inset-0 rounded-lg object-cover"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compare Section */}
        {/* Compare Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="bg-blue-50 p-14 my-6 rounded-lg">
              <div className="grid gap-5 items-center lg:grid-cols-2 lg:gap-20">
                <div>
                  <p className="text-gray-500 uppercase mb-4">The Dashlane difference</p>
                  <h2 className="text-3xl md:text-4xl text-blue-600 mb-6">
                    See how Dashlane compares
                  </h2>
                  <p className="text-gray-500 mb-8">
                    Learn what makes Dashlane TrustRadius's most-loved credential and password manager on the market.
                  </p>
                  <Link
                    href="/compare"
                    className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
                  >
                    Learn more
                  </Link>
                </div>
                <div className="mt-8 md:mt-0">
                  <figure className="relative aspect-[3/2]">
                    <Image
                      src="https://i.ibb.co/C580Fm3R/Why-Dashlane-Compare-Hero.png"
                      alt="Dashlane Comparison Chart"
                      fill
                      className="absolute inset-0 rounded-lg object-cover"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-15 bg-blue-50">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-center mb-10 text-3xl md:text-4xl font-medium text-blue-600">
              Ready to secure your business?
            </h2>
            <div className="flex flex-col justify-center md:flex-row gap-4">
              <Link
                href="/business-password-manager/try"
                className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
              >
                Start a Business trial
              </Link>
              <Link
                href="/business-password-manager/enterprise"
                className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-white text-blue-600 border border-blue-600 hover:bg-slate-50 transition-colors focus:outline-1 focus:outline-blue-600"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-600">
        <div className="mx-auto max-w-7xl flex flex-col px-4 py-8 lg:px-8 lg:py-20 leading-6 gap-10">
          <nav className="flex w-full bg-emerald-600">
            <ul className="flex w-full flex-col justify-between gap-16 border-b border-gray-200 pb-10 list-none lg:w-full lg:flex-row">
              <li>
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300 cursor-pointer">
                  Products
                  <span className="min-w-fit ml-auto lg:hidden">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <ul className="hidden lg:block list-none">
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      Personal
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      Business
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      Enterprise
                    </Link>
                  </li>
                </ul>
              </li>
             <li>
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300 cursor-pointer">
                  Features
                  <span className="min-w-fit ml-auto lg:hidden">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <ul className="hidden lg:block list-none">
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      Password Manager
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      VPN
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      Dark Web Monitoring
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300 cursor-pointer">
                  Resources
                  <span className="min-w-fit ml-auto lg:hidden">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <ul className="hidden lg:block list-none">
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      Security
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300 cursor-pointer">
                  Company
                  <span className="min-w-fit ml-auto lg:hidden">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <ul className="hidden lg:block list-none">
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      About
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col justify-between gap-16 lg:mt-0 lg:flex-row lg:gap-8">
            <div className="px-10 lg:px-0 max-w-2xl">
              <p className="text-center lg:text-left text-white">
                © 2025 Dashlane Inc. All rights reserved.
              </p>
              <p className="mt-4 lg:mt-2 text-center lg:text-left text-sm text-gray-300">
                Dashlane is a trademark of Dashlane Inc.
              </p>
            </div>

            <div className="flex flex-col items-center justify-end lg:flex-row">
              <ul className="mt-4 px-10 lg:px-0 lg:mt-0 text-center lg:text-left list-none">
                <li className="inline">
                  <Link href="#" className="border-0 pr-2 border-r-0 border-t-0 border-b-0 border-gray-300 text-center text-xs lg:text-sm font-medium uppercase leading-3.5 text-gray-300 no-underline px-2">
                    Privacy Policy
                  </Link>
                </li>
                <li className="inline">
                  <Link href="#" className="border-0 pr-2 border-r-0 border-t-0 border-b-0 border-gray-300 text-center text-xs lg:text-sm font-medium uppercase leading-3.5 text-gray-300 no-underline px-2">
                    Terms of Service
                  </Link>
                </li>
                <li className="inline">
                  <Link href="#" className="pl-2 border-0 pr-2 border-r-0 border-t-0 border-b-0 border-gray-300 text-center text-xs lg:text-sm font-medium uppercase leading-3.5 text-gray-300 no-underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>

              <div className="flex flex-wrap justify-center gap-6 mt-10 lg:max-w-[180px] lg:justify-start lg:mt-4">
                <Link href="#" className="flex h-6 w-6 lg:h-9 lg:w-9 items-center justify-center text-white lg:border lg:border-white lg:rounded-full transition-colors hover:text-gray-300">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
                <Link href="#" className="flex h-6 w-6 lg:h-9 lg:w-9 items-center justify-center text-white lg:border lg:border-white lg:rounded-full transition-colors hover:text-gray-300">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>

              <p className="mt-10 lg:mt-0 lg:inline-block text-center lg:text-left text-xs lg:text-sm text-gray-300">
                Stay in touch
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for Logo Animation */}
      <style jsx>{`
        @keyframes logo-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
