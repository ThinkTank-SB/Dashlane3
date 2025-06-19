'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="absolute -top-16 left-0 z-50 h-12 bg-white px-4 py-3 rounded-md shadow-md focus:top-0 transition-all"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex h-15 items-center justify-between relative">
            {/* Logo */}
            <Link href="/" className="mr-3 inline-flex items-center md:mr-12 focus:outline-1 focus:outline-blue-800 focus:outline-offset-2">
              <svg
                role="img"
                width="127"
                height="32"
                viewBox="0 0 243 64"
                fill="#09363F"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Dashlane Logo</title>
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
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-800 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-600 hover:text-blue-800 transition-colors bg-transparent border-0 cursor-pointer p-0 mt-1">
                    Business
                    <svg className="ml-1 h-5 w-5 fill-current transition-colors" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-800 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-600 hover:text-blue-800 transition-colors bg-transparent border-0 cursor-pointer p-0 mt-1">
                    Personal
                    <svg className="ml-1 h-5 w-5 fill-current transition-colors" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-800 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-600 hover:text-blue-800 transition-colors bg-transparent border-0 cursor-pointer p-0 mt-1">
                    Why Dashlane
                    <svg className="ml-1 h-5 w-5 fill-current transition-colors" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-800 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-600 hover:text-blue-800 transition-colors bg-transparent border-0 cursor-pointer p-0 mt-1">
                    Partners
                    <svg className="ml-1 h-5 w-5 fill-current transition-colors" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-800 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-600 hover:text-blue-800 transition-colors bg-transparent border-0 cursor-pointer p-0 mt-1">
                    Resources
                    <svg className="ml-1 h-5 w-5 fill-current transition-colors" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 mr-6 border-b-2 border-transparent hover:border-blue-800 transition-colors">
                  <Link href="/pricing" className="text-gray-600 hover:text-blue-800 transition-colors mt-1 focus:outline-1 focus:outline-blue-800 focus:outline-offset-2">
                    Pricing
                  </Link>
                </li>
                <li className="flex h-full items-center mx-3 ml-auto mr-6 border-b-2 border-transparent hover:border-blue-800 transition-colors">
                  <Link href="https://app.dashlane.com/" className="text-gray-600 hover:text-blue-800 transition-colors mt-1 focus:outline-1 focus:outline-blue-800 focus:outline-offset-2">
                    Log in
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Header Buttons */}
            <div className="ml-auto flex flex-1 items-center justify-end gap-2">
              <div className="hidden xl:flex flex-col xl:flex-row justify-end">
                <Link
                  href="/business-password-manager/enterprise"
                  className="block w-full text-center justify-center rounded-md cursor-pointer transition-all duration-500 min-w-fit px-3.5 py-2.5 text-sm items-center bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 disabled:opacity-10"
                >
                  Contact Sales
                </Link>
                <Link
                  href="/business-password-manager/try"
                  className="block w-full text-center justify-center rounded-md cursor-pointer transition-all duration-500 min-w-fit px-3.5 py-2.5 text-sm items-center bg-white text-blue-800 border border-blue-600 hover:bg-gray-50 active:bg-gray-100 disabled:bg-gray-100 mt-2 xl:mt-0 xl:ml-4"
                >
                  Start free trial
                </Link>
              </div>
              
              {/* Mobile Menu Toggle */}
              <div className="flex xl:hidden items-center ml-2">
                <button className="inline-flex items-center justify-center rounded-md p-2 pr-0 text-blue-800 hover:text-blue-600">
                  <span className="sr-only">Open menu</span>
                  <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" tabIndex={-1} className="flex w-full flex-col">
        {/* VPN Hero Section */}
        <section className="w-full bg-blue-50 pt-8 pb-15">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="py-5 md:grid md:grid-cols-2 md:items-center md:gap-20">
              <div>
                <h1 className="mb-4 md:mb-6 text-5xl md:text-6xl font-medium text-blue-800">
                  Protect more than your passwords with a fast, reliable VPN
                </h1>
                <p className="text-gray-600">
                  Dashlane has partnered with Hotspot Shield to offer Premium and Family users access to a best-in-class VPN as part of their Dashlane subscription ($96/year value).
                </p>
                <div className="mt-8 md:mt-10 flex flex-col justify-start md:flex md:flex-row">
                  <Link
                    href="/getpremium"
                    className="rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center text-lg px-5 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-10 text-white fill-white border border-solid border-transparent w-full text-center justify-center block md:w-auto md:inline-block"
                  >
                    Buy Premium
                  </Link>
                  <Link
                    href="/getfamily"
                    className="rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center text-lg px-5 py-3 bg-white hover:bg-gray-50 active:bg-gray-100 disabled:bg-gray-100 text-blue-800 border border-solid border-blue-600 mt-2 md:mt-0 md:ml-4 w-full text-center justify-center block md:w-auto md:inline-block"
                  >
                    Buy Friends & Family
                  </Link>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <figure className="relative aspect-[3/2]">
                  <Image
                    alt=""
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2020/08/Blog_Header_Why_Do_You_Need_a_VPN_1600x900.jpg"
                    fill
                    className="rounded object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* VPN Benefits Section */}
        <section className="w-full bg-blue-800 pt-15 pb-15">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-20">
              <div>
                <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl font-medium text-white">
                  Combining a password manager with a VPN, you can enjoy:
                </h2>
                <div className="mt-10">
                  <div className="flex items-start mb-4 md:mb-6">
                    <span className="min-w-fit self-start mr-5">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                      </svg>
                    </span>
                    <span className="ml-5">
                      <h3 className="leading-[30px] mb-1 mt-0 text-white font-medium text-lg">
                        Private, anonymous browsing
                      </h3>
                      <p className="text-gray-300 text-sm"></p>
                    </span>
                  </div>
                  <div className="flex items-start mb-4 md:mb-6">
                    <span className="min-w-fit self-start mr-5">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                      </svg>
                    </span>
                    <span className="ml-5">
                      <h3 className="leading-[30px] mb-1 mt-0 text-white font-medium text-lg">
                        Secure public WiFi connections
                      </h3>
                      <p className="text-gray-300 text-sm"></p>
                    </span>
                  </div>
                  <div className="flex items-start mb-4 md:mb-6">
                    <span className="min-w-fit self-start mr-5">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                      </svg>
                    </span>
                    <span className="ml-5">
                      <h3 className="leading-[30px] mb-1 mt-0 text-white font-medium text-lg">
                        Customizable server location
                      </h3>
                      <p className="text-gray-300 text-sm"></p>
                    </span>
                  </div>
                </div>
                <div className="mt-10 flex flex-col justify-start md:flex md:flex-row">
                  <Link
                    href="/getpremium"
                    className="rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center px-4 py-3 bg-white hover:bg-gray-50 active:bg-gray-100 disabled:bg-gray-100 text-blue-800 fill-blue-600 w-full text-center justify-center block md:w-auto md:inline-block"
                  >
                    Purchase now
                  </Link>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <figure className="mb-10 lg:mb-0 relative aspect-square">
                  <Image
                    alt=""
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2023/11/easy-to-use-86fdc012fe692b34dd4aaab98ac87b7c.jpeg"
                    fill
                    className="rounded object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Safer Browsing Section */}
        <section className="w-full bg-blue-50 pt-15 pb-15">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="md:mx-auto md:max-w-xl">
              <h2 className="md:text-center mb-4 md:mb-6 text-3xl md:text-4xl font-medium text-blue-800">
                Safer browsing, simpler internet
              </h2>
              <p className="md:text-center mb-8 md:mb-12 text-gray-600"></p>
            </div>
            <div className="overflow-hidden w-full md:w-auto md:mx-auto">
              <div className="md:grid md:gap-8 md:w-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="mr-6 shrink-0 w-3/4 md:mr-auto md:w-full border-b border-gray-300 md:border-b-0">
                  <div>
                    <span className="min-w-fit inline-block mb-4 p-2 rounded bg-blue-200">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-blue-600">
                        <path d="M11 6.79995L12.9999 7.99992V12H15.9999V14H10.9999L11 6.79995Z"/>
                        <path d="M20 12C20 13.667 19.4901 15.215 18.6178 16.4964L20.0522 17.9308C21.2764 16.2715 22 14.2202 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C14.2203 22 16.2716 21.2764 17.9309 20.0521L16.4965 18.6177C15.2151 19.4901 13.6671 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"/>
                      </svg>
                    </span>
                  </div>
                  <h3 className="leading-[30px] mb-2 text-blue-800 font-medium text-2xl">
                    Save time online
                  </h3>
                  <div>
                    <p className="text-gray-600 text-sm md:text-base">
                      We'll fill in all your passwords, personal info, and payment details—which means less time typing and more interneting.
                    </p>
                  </div>
                </div>
                <div className="mr-6 shrink-0 w-3/4 md:mr-auto md:w-full border-b border-gray-300 md:border-b-0">
                  <div>
                    <span className="min-w-fit inline-block mb-4 p-2 rounded bg-blue-200">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-blue-600">
                        <path d="M21 3.01167L20.9943 4.97314L19 4.96731L19.006 3.00584L21 3.01167Z"/>
                        <path d="M13 3.0117V4.98096L10.9978 4.96926V3L13 3.0117Z"/>
                        <path d="M21 10.8887V12.8558L19 12.8441V10.877L21 10.8887Z"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.8691 8.41693L15.8554 7.42473L14.7372 8.51925L13.3188 9.9076L5.83681 17.2311L6.85051 18.2233L14.3325 10.8998L15.7509 9.51144L16.8691 8.41693ZM6.85052 21L3 17.2311L15.8554 4.64805L19.7059 8.41691L6.85052 21Z"/>
                        <path d="M14.3325 10.8998L15.7509 9.51144L14.7372 8.51925L13.3188 9.9076L14.3325 10.8998Z"/>
                      </svg>
                    </span>
                  </div>
                  <h3 className="leading-[30px] mb-2 text-blue-800 font-medium text-2xl">
                    Every password, everywhere
                  </h3>
                  <div>
                    <p className="text-gray-600 text-sm md:text-base">
                      The Dashlane app remembers every single one of your passwords—and seamlessly syncs across all your devices.
                    </p>
                  </div>
                </div>
                <div className="mr-6 shrink-0 w-3/4 md:mr-auto md:w-full border-b border-gray-300 md:border-b-0">
                  <div>
                    <span className="min-w-fit inline-block mb-4 p-2 rounded bg-blue-200">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-blue-600">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.0001 10V7.65311C6.0001 4.37896 8.59347 2 12.0001 2C15.4067 2 18.0001 4.37896 18.0001 7.65311V10H21V22H19V12H5V20H16L17.2 22H3V10H6.0001ZM8.0001 7.65311C8.0001 5.68492 9.52437 4.05568 12.0001 4.05568C14.4758 4.05568 16.0001 5.68492 16.0001 7.65311V10H8.0001V7.65311Z"/>
                      </svg>
                    </span>
                  </div>
                  <h3 className="leading-[30px] mb-2 text-blue-800 font-medium text-2xl">
                    Peace of mind
                  </h3>
                  <div>
                    <p className="text-gray-600 text-sm md:text-base">
                      Our patented security architecture secures your info, and we'll alert you if another company's breach may affect your accounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VPN Download Callout Section */}
        <section className="relative w-full bg-blue-50 pt-15 pb-15">
          <div className="px-4 md:px-8 max-w-3xl mx-auto">
            <h2 className="text-center mb-4 md:mb-6 text-blue-800 text-3xl md:text-4xl font-medium">
              Get Premium. Get a VPN with your Password Manager.
            </h2>
            <div className="mt-8 md:mt-10 flex flex-col justify-center md:flex md:flex-row">
              <Link
                href="/download"
                className="rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center text-lg px-5 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-10 text-white fill-white border border-solid border-transparent w-full text-center justify-center block md:w-auto md:inline-block"
              >
                Download Dashlane
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800">
        <div className="mx-auto max-w-7xl flex flex-col px-4 py-8 lg:px-8 lg:py-20 leading-6 gap-10 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-x-16 lg:gap-y-10">
          <nav role="navigation" aria-label="Footer Navigation menu" className="flex w-full bg-blue-800 lg:w-auto">
            <ul className="flex w-full flex-col justify-between gap-16 border-b border-gray-200 pb-10 list-none lg:w-full lg:flex-col lg:border-b-0 lg:pb-0">
              <li className="lg:mt-8">
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300 cursor-pointer">
                  Dashlane Omnix™
                  <span className="min-w-fit ml-auto lg:hidden">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block fill-white">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 14.0157L5.55319 7L4 8.29409L12 17L20 8.29409L18.4468 7L12 14.0157Z"/>
                    </svg>
                  </span>
                </button>
                <ul className="hidden lg:block list-none mt-4">
                  <li className="my-1">
                    <Link href="/omnix" className="block text-white hover:text-gray-300 transition-colors">
                      Platform overview
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/omnix#OmnixCredentialProtection" className="block text-white hover:text-gray-300 transition-colors">
                      Credential Protection
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/omnix#OmnixPasswordManagement" className="block text-white hover:text-gray-300 transition-colors">
                      Password Management
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/omnix#DashlaneSecureCloud" className="block text-white hover:text-gray-300 transition-colors">
                      Dashlane Secure Cloud
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/business-password-manager/platform" className="block text-white hover:text-gray-300 transition-colors">
                      Contact Sales
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/business-password-manager/request-a-demo" className="block text-white hover:text-gray-300 transition-colors">
                      Request a demo
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav role="navigation" aria-label="Footer Navigation menu" className="flex w-full bg-blue-800 lg:w-auto">
            <ul className="flex w-full flex-col justify-between gap-16 border-b border-gray-200 pb-10 list-none lg:w-full lg:flex-col lg:border-b-0 lg:pb-0">
              <li>
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300 cursor-pointer">
                  Business
                  <span className="min-w-fit ml-auto lg:hidden">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block fill-white">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 14.0157L5.55319 7L4 8.29409L12 17L20 8.29409L18.4468 7L12 14.0157Z"/>
                    </svg>
                  </span>
                </button>
                <ul className="hidden lg:block list-none mt-4">
                  <li className="my-1">
                    <Link href="/business-password-manager" className="block text-white hover:text-gray-300 transition-colors">
                      Business password manager
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/pricing" className="block text-white hover:text-gray-300 transition-colors">
                      Plans & pricing
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/business-password-manager/try" className="block text-white hover:text-gray-300 transition-colors">
                      Try free for 14 days
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/business-password-manager/buy" className="block text-white hover:text-gray-300 transition-colors">
                      Buy now
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="lg:mt-8">
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300 cursor-pointer">
                  Personal
                  <span className="min-w-fit ml-auto lg:hidden">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block fill-white">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 14.0157L5.55319 7L4 8.29409L12 17L20 8.29409L18.4468 7L12 14.0157Z"/>
                    </svg>
                  </span>
                </button>
                <ul className="hidden lg:block list-none mt-4">
                  <li className="my-1">
                    <Link href="/personal-password-manager" className="block text-white hover:text-gray-300 transition-colors">
                      Personal password manager
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/personal-password-manager/family-password-manager" className="block text-white hover:text-gray-300 transition-colors">
                      Family password manager
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/pricing-personal" className="block text-white hover:text-gray-300 transition-colors">
                      Plans & pricing
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/download" className="block text-white hover:text-gray-300 transition-colors">
                      Download for free
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="/getpremium" className="block text-white hover:text-gray-300 transition-colors">
                      Buy now
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
                Dashlane and the Dashlane logo are trademarks of Dashlane SAS, registered in the U.S. and other countries.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-end lg:flex-row">
            <ul className="mt-4 px-10 lg:px-0 lg:mt-0 text-center lg:text-left list-none">
              <li className="inline">
                <Link href="/terms" className="border-0 pr-2 border-r-0 border-t-0 border-b-0 border-gray-300 text-center text-xs lg:text-sm font-medium uppercase leading-3.5 text-gray-300 no-underline px-2">
                  Terms
                </Link>
              </li>
              <li className="inline">
                <Link href="/privacy/overview" className="border-0 pr-2 border-r border-t-0 border-b-0 border-gray-300 text-center text-xs lg:text-sm font-medium uppercase leading-3.5 text-gray-300 no-underline px-2">
                  Privacy
                </Link>
              </li>
              <li className="inline">
                <Link href="/legal" className="border-0 pr-2 border-r border-t-0 border-b-0 border-gray-300 text-center text-xs lg:text-sm font-medium uppercase leading-3.5 text-gray-300 no-underline px-2">
                  Legal
                </Link>
              </li>
              <li className="inline">
                <Link href="/privacy/cookiepreferences" className="border-0 pr-2 border-r border-t-0 border-b-0 border-gray-300 text-center text-xs lg:text-sm font-medium uppercase leading-3.5 text-gray-300 no-underline px-2">
                  Cookie Preferences
                </Link>
              </li>
              <li className="inline">
                <Link href="/privacy/donotsell" className="border-0 pr-2 border-r border-t-0 border-b-0 border-gray-300 text-center text-xs lg:text-sm font-medium uppercase leading-3.5 text-gray-300 no-underline px-2">
                  Do not sell or share my personal information
                </Link>
              </li>
              <li className="inline">
                <Link href="/accessibility-statement" className="pl-2 border-0 pr-2 border-r-0 border-t-0 border-b-0 border-gray-300 text-center text-xs lg:text-sm font-medium uppercase leading-3.5 text-gray-300 no-underline">
                  Accessibility Statement
                </Link>
              </li>
            </ul>

            <div className="flex flex-wrap justify-center gap-6 mt-10 lg:max-w-[180px] lg:justify-start lg:mt-4">
              <Link href="https://www.facebook.com/GetDashlane" target="_blank" className="flex h-6 w-6 lg:h-9 lg:w-9 items-center justify-center text-white lg:border lg:border-white lg:rounded-full transition-colors hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4 fill-current" width="9" height="16" viewBox="0 0 9 16">
                  <path d="M5.90339 16L5.9034 8.93625H8.18912L8.55002 6.04903H5.9034V4.36482C5.9034 3.52272 6.144 3.04151 7.22671 3.04151H8.67032V0.394898C8.42972 0.394898 7.58761 0.274597 6.62521 0.274597C4.58009 0.274597 3.13648 1.59791 3.13648 4.00392V6.04903H0.730469V8.93625H3.13648L3.13648 16H5.90339Z"/>
                </svg>
              </Link>
              <Link href="https://www.x.com/dashlane" target="_blank" className="flex h-6 w-6 lg:h-9 lg:w-9 items-center justify-center text-white lg:border lg:border-white lg:rounded-full transition-colors hover:text-gray-300">
                <span className="sr-only">X</span>
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.1171 3.33331H16.379L11.4374 8.98118L17.2508 16.6666H12.699L9.13385 12.0054L5.05453 16.6666H2.79128L8.07675 10.6256L2.5 3.33331H7.16735L10.3899 7.59383L14.1171 3.33331ZM14.5766 15.3128H13.3232L5.14137 4.61605H6.48632L14.5766 15.3128Z"/>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/dashlane" target="_blank" className="flex h-6 w-6 lg:h-9 lg:w-9 items-center justify-center text-white lg:border lg:border-white lg:rounded-full transition-colors hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
            </div>

            <p className="mt-10 lg:mt-0 lg:inline-block text-center lg:text-left text-xs lg:text-sm text-gray-300">
              Stay in touch
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
