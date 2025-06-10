'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhyDashlanePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentArticle, setCurrentArticle] = useState(0);
  const [activeTab, setActiveTab] = useState('security');
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 'security',
      title: 'Advanced Security Architecture',
      description: 'Our patented zero-knowledge security ensures your data remains private and secure at all times.',
      image: 'https://ripleyprd.wpengine.com/wp-content/uploads/2024/06/Why-Dashlane_Hero.webp',
      link: '/security',
      linkText: 'Learn about our security'
    },
    {
      id: 'usability',
      title: 'Seamless User Experience',
      description: 'Intuitive design and powerful autofill capabilities make password management effortless.',
      image: 'https://ripleyprd.wpengine.com/wp-content/uploads/2024/06/Why-Dashlane_Hero.webp',
      link: '/features',
      linkText: 'Explore features'
    },
    {
      id: 'innovation',
      title: 'Continuous Innovation',
      description: 'We constantly evolve our platform to stay ahead of emerging security threats.',
      image: 'https://ripleyprd.wpengine.com/wp-content/uploads/2024/06/Why-Dashlane_Hero.webp',
      link: '/innovation',
      linkText: 'See our innovations'
    }
  ];

  const articles = [
    {
      logo: 'https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/Forrester-Logo-Dark.png',
      title: 'Forrester names Dashlane a Leader in Enterprise Password Management',
      link: '/forrester-report'
    },
    {
      logo: 'https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/Gartner-Logo-Dark.png',
      title: 'Gartner recommends workforce password management',
      link: '/gartner-report'
    },
    {
      logo: 'https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/TechCrunch-Logo-Dark.png',
      title: 'TechCrunch highlights Dashlane\'s security innovations',
      link: '/techcrunch-feature'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev + 1) % articles.length);
  };

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev - 1 + articles.length) % articles.length);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    if (articlesRef.current) {
      articlesRef.current.style.transform = `translateX(-${currentArticle * 100}%)`;
    }
  }, [currentArticle]);

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
                  Why Dashlane
                </p>
                <h1 className="mb-4 text-5xl md:text-6xl font-medium leading-tight text-slate-800">
                  Close the credential security gap
                </h1>
                <p className="text-gray-500 mb-8 md:mb-10">
                  Stolen credentials are the #1 cause of data breaches, and{' '}
                  <Link href="https://go.dashlane.com/Gartner-Reprint.html" className="text-blue-600 hover:text-blue-700 transition-colors">
                    Gartner
                  </Link>
                  ® recommends that security leaders embrace workforce password management. Enter Dashlane.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link
                    href="/business-password-manager/enterprise"
                    className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    href="/business-password-manager/request-demo"
                    className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-white text-blue-600 border border-blue-600 hover:bg-slate-50 transition-colors focus:outline-1 focus:outline-blue-600"
                  >
                    Request a demo
                  </Link>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <figure className="relative aspect-[3/2]">
                  <Image
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/06/Why-Dashlane_Hero.webp"
                    alt="This image shows two women collaborating at a desk, overlaid with product imagery of Dashlane's autofill and phishing alerts features."
                    fill
                    className="absolute inset-0 rounded-lg object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-5 mt-8 md:mt-6 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <span className="min-w-fit h-6 w-6 mb-4 md:mb-0 md:mr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="w-full h-full fill-emerald-600">
                    <g clipPath="url(#clip0_643_3942)">
                      <path d="M9.5 21L10.5 23H13.5L14.5 21H9.5Z"/>
                      <path d="M5.16201 6.74907L3.39424 4.9813L4.80845 3.56709L6.57622 5.33486L5.16201 6.74907Z"/>
                      <path d="M20.2679 4.99922L18.5001 6.76699L17.0859 5.35277L18.8537 3.58501L20.2679 4.99922Z"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.5 17.456C16.5655 16.5079 18 14.4215 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 14.4215 7.43451 16.5079 9.5 17.456V19H14.5V17.456ZM12 8C10.8954 8 10 8.89543 10 10H8C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C10.8954 14 10 13.1046 10 12H12V10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"/>
                    </g>
                  </svg>
                </span>
                <div className="text-2xl text-blue-600 mt-4 md:mt-0 md:whitespace-nowrap">
                  Gartner® recommends workforce password management
                </div>
              </div>
              <div className="mt-2 md:mt-0">
                <Link href="https://go.dashlane.com/Gartner-Reprint.html" className="flex items-center py-2 text-blue-500 hover:text-blue-600 transition-colors text-lg">
                  <span>Read the report</span>
                  <svg className="w-5 h-5 ml-2 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Breaches Section */}
        <section className="py-15 bg-blue-50">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="mb-4 text-3xl md:text-4xl font-medium text-blue-600 md:mb-6">
                We promise to protect against breaches
              </h2>
              <p className="mb-8 md:mb-12 text-gray-500 md:text-center">
                Dashlane's comprehensive security approach addresses the root causes of data breaches.
              </p>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 overflow-hidden">
              <div className="p-6 border border-gray-300 rounded-lg bg-white">
                <div className="inline-block mb-4 p-2 rounded-md bg-blue-100">
                  <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.0001 10V7.65311C6.0001 4.37896 8.59347 2 12.0001 2C15.4067 2 18.0001 4.37896 18.0001 7.65311V10H21V22H19V12H5V20H16L17.2 22H3V10H6.0001ZM8.0001 7.65311C8.0001 5.68492 9.52437 4.05568 12.0001 4.05568C14.4758 4.05568 16.0001 5.68492 16.0001 7.65311V10H8.0001V7.65311Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Zero-knowledge security
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  Your data is encrypted and decrypted locally on your device. We never have access to your passwords or personal information.
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg bg-white">
                <div className="inline-block mb-4 p-2 rounded-md bg-blue-100">
                  <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 24 24">
                    <path d="M4.15317 7.02235L12 4.13142L19.8468 7.02234C19.7787 7.55019 19.6856 8.18363 19.5615 8.86832C19.2096 10.8097 18.6521 12.904 17.8583 14.2436C17.4329 14.9614 16.7539 15.7319 15.9602 16.4874L17.3748 17.9021C18.2527 17.0622 19.0475 16.1599 19.5789 15.2632C21.5521 11.9334 22 5.68421 22 5.68421L12 2L2 5.68421C2 5.68421 2.44782 11.9334 4.421 15.2632C6.39418 18.5929 12 22 12 22C12 22 13.6535 20.995 15.4805 19.5433L14.0565 18.1192C13.981 18.1783 13.9055 18.237 13.8299 18.2951C13.1457 18.8216 12.5043 19.2737 12 19.6152C11.4957 19.2737 10.8543 18.8216 10.17 18.2951C8.54517 17.045 6.91935 15.556 6.14158 14.2436C5.34778 12.904 4.79037 10.8097 4.4385 8.86835C4.3144 8.18365 4.22129 7.5502 4.15317 7.02235Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Proactive threat detection
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  Advanced monitoring systems detect and alert you to potential security threats before they become breaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gartner Section */}
        <section className="relative py-15 bg-blue-600">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-center mb-4 text-white text-3xl md:text-4xl font-medium md:mb-6">
              Gartner® recommends workforce password management
            </h2>
            <div className="mt-8 flex flex-col justify-center md:mt-10 md:flex-row">
              <Link
                href="https://go.dashlane.com/Gartner-Reprint.html"
                className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-white text-blue-600 border border-transparent hover:bg-gray-50 transition-colors focus:outline-1 focus:outline-blue-600"
              >
                Read the report
              </Link>
            </div>
          </div>
          <div className="absolute bottom-15 right-15 hidden md:block max-w-44 h-10">
            <Image
              src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/Gartner-Logo-Dark.png"
              alt="Gartner Logo"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
        </section>

        {/* External Articles Section */}
        <section className="py-15">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex items-center justify-between mb-14 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-medium text-blue-600 max-w-2xl">
                What the experts are saying
              </h2>
              <div className="hidden md:block w-31">
                <button
                  onClick={prevArticle}
                  className="inline-block border border-gray-500 rounded-full p-2 fill-gray-500 mr-5 cursor-pointer transition-all hover:border-blue-600 hover:fill-blue-600 disabled:opacity-20 disabled:cursor-not-allowed"
                  disabled={currentArticle === 0}
                >
                  <svg className="h-6 w-6 rotate-180" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                  </svg>
                </button>
                <button
                  onClick={nextArticle}
                  className="inline-block border border-gray-500 rounded-full p-2 fill-gray-500 cursor-pointer transition-all hover:border-blue-600 hover:fill-blue-600 disabled:opacity-20 disabled:cursor-not-allowed"
                  disabled={currentArticle === articles.length - 1}
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-hidden -mr-4 md:mr-0">
              <div 
                ref={articlesRef}
                className="flex w-full transition-transform duration-500 ease-out md:grid md:grid-cols-3 md:gap-8 md:transform-none"
              >
                {articles.map((article, index) => (
                  <div key={index} className="mr-6 flex-shrink-0 w-3/4 md:w-full md:mr-0 p-8 border border-gray-200 rounded-lg">
                    <div className="mb-8 relative max-w-[170px] h-10">
                      <Image
                        src={article.logo}
                        alt="Company Logo"
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-600 mb-6">
                      {article.title}
                    </h3>
                    <Link href={article.link} className="flex items-center py-1.5 text-blue-500 hover:text-blue-600 transition-colors">
                      Read more
                      <svg className="w-5 h-5 ml-2 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-14 md:mt-20 flex flex-col justify-center md:flex-row">
              <Link
                href="/business-password-manager/enterprise"
                className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-15 bg-blue-50">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex items-center justify-center mb-10">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-medium text-blue-600 mb-4 md:mb-6">
                  Continuous innovation
                </h2>
                <p className="text-lg text-gray-500">
                  Simple and intuitive features
                </p>
              </div>
            </div>
            <div className="overflow-x-auto px-10 md:overflow-hidden">
              <div className="flex flex-row items-center justify-center gap-10 md:gap-12 whitespace-nowrap w-max md:w-auto">
                {['security', 'usability', 'innovation'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`cursor-pointer pb-2 text-xl md:text-2xl font-medium border-b-2 transition-all ${
                      activeTab === tab
                        ? 'text-emerald-600 border-emerald-600'
                        : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-600'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden mt-12">
              <div className="absolute left-[5%] right-[5%] z-10 top-[30%] lg:top-[36%] hidden md:block">
                <button
                  onClick={prevSlide}
                  className="float-left inline-block border border-gray-500 rounded-full p-2 fill-gray-500 cursor-pointer transition-all hover:border-blue-600 hover:fill-blue-600 disabled:opacity-20 disabled:cursor-not-allowed"
                  disabled={currentSlide === 0}
                >
                  <svg className="h-6 w-6 rotate-180" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="float-right inline-block border border-gray-500 rounded-full p-2 fill-gray-500 cursor-pointer transition-all hover:border-blue-600 hover:fill-blue-600 disabled:opacity-20 disabled:cursor-not-allowed"
                  disabled={currentSlide === slides.length - 1}
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                  </svg>
                </button>
              </div>
              <div 
                ref={sliderRef}
                className="relative flex w-full transition-all duration-500 ease-out opacity-100 md:transition-opacity"
              >
                {slides.map((slide, index) => (
                  <div key={slide.id} className="py-12 rounded-lg mb-0 mr-6 flex-shrink-0 w-3/4 md:w-full md:mr-0 md:mb-5">
                    <div className="flex w-full mb-12">
                      <figure className="h-auto w-full relative aspect-[2/1]">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="w-full max-w-full h-auto rounded-lg object-cover"
                        />
                      </figure>
                    </div>
                    <div className="grid grid-rows-auto md:grid-cols-2">
                      <div className="mb-4 flex w-full flex-row items-center md:items-start justify-start gap-4">
                        <div className="min-w-fit flex h-9 w-9 items-center justify-center p-2 rounded-md bg-blue-100">
                          <svg className="w-5 h-5 fill-blue-600" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.0001 10V7.65311C6.0001 4.37896 8.59347 2 12.0001 2C15.4067 2 18.0001 4.37896 18.0001 7.65311V10H21V22H19V12H5V20H16L17.2 22H3V10H6.0001ZM8.0001 7.65311C8.0001 5.68492 9.52437 4.05568 12.0001 4.05568C14.4758 4.05568 16.0001 5.68492 16.0001 7.65311V10H8.0001V7.65311Z"/>
                          </svg>
                        </div>
                        <h3 className="block text-xl md:text-3xl md:leading-9 font-medium text-blue-600">
                          {slide.title}
                        </h3>
                      </div>
                      <div className="flex w-full flex-col justify-start gap-6">
                        <p className="mt-0 font-normal text-base md:text-lg md:leading-6 text-gray-500">
                          {slide.description}
                        </p>
                        <div className="max-w-min py-4 md:py-0 text-base md:text-lg font-normal md:leading-6">
                          <Link href={slide.link} className="flex items-center py-1.5 text-blue-500 hover:text-blue-600 transition-colors">
                            <span className="inline-block whitespace-nowrap">{slide.linkText}</span>
                            <span className="inline-block w-5 ml-2">
                              <svg className="h-full w-full fill-current" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Cards Section */}
        <section className="py-15">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="overflow-hidden -mr-4 md:mr-0">
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                <div className="mr-6 flex-shrink-0 w-3/4 md:mr-0 md:w-full">
                  <figure className="mb-6 md:mb-8 relative aspect-[3/2]">
                    <Image
                      src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/06/Why-Dashlane_Hero.webp"
                      alt="Security Features"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </figure>
                  <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                    Advanced Security Features
                  </h3>
                  <p className="text-gray-500 md:text-base">
                    Discover how our patented security architecture keeps your credentials safe.
                  </p>
                  <div className="mt-4 flex flex-col justify-start md:flex-row">
                    <Link href="/security" className="flex items-center text-lg py-2 text-blue-500 hover:text-blue-600 transition-colors">
                      Learn more
                      <svg className="w-5 h-5 ml-2 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="mr-6 flex-shrink-0 w-3/4 md:mr-0 md:w-full">
                  <figure className="mb-6 md:mb-8 relative aspect-[3/2]">
                    <Image
                      src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/06/Why-Dashlane_Hero.webp"
                      alt="User Experience"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </figure>
                  <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                    Seamless User Experience
                  </h3>
                  <p className="text-gray-500 md:text-base">
                    Experience the most intuitive password manager with powerful autofill capabilities.
                  </p>
                  <div className="mt-4 flex flex-col justify-start md:flex-row">
                    <Link href="/features" className="flex items-center text-lg py-2 text-blue-500 hover:text-blue-600 transition-colors">
                      Explore features
                      <svg className="w-5 h-5 ml-2 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Footer Section */}
        <section className="relative py-15 bg-blue-50">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-center mb-4 text-blue-600 text-3xl md:text-4xl font-medium md:mb-6">
              Ready to close the credential security gap?
            </h2>
            <div className="mt-8 flex flex-col justify-center md:mt-10 md:flex-row">
              <Link
                href="/business-password-manager/enterprise"
                className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
              >
                Contact Sales
              </Link>
              <Link
                href="/business-password-manager/try"
                className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-white text-blue-600 border border-blue-600 hover:bg-slate-50 transition-colors focus:outline-1 focus:outline-blue-600 mt-2 md:mt-0 md:ml-4"
              >
                Start free trial
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
    </div>
  );
}
