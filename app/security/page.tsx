'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex h-15 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="mr-3 inline-flex items-center md:mr-12">
              <svg
                role="img"
                width="127"
                height="32"
                viewBox="0 0 243 64"
                fill="#09363F"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-800"
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
            <nav className="hidden flex-1 xl:flex">
              <ul className="flex h-full w-full items-center list-none">
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                    Business
                    <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                    Personal
                    <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                    Why Dashlane
                    <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                    Partners
                    <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                <li className="flex h-full items-center mx-3 border-b-2 border-transparent hover:border-blue-600 transition-colors cursor-pointer">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
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
            <button className="inline-flex items-center justify-center ml-2 p-2 pr-0 rounded-md text-blue-600 xl:hidden">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex w-full flex-col">
        {/* Hero Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-5 py-5 items-center lg:grid-cols-2 lg:gap-20">
              <div>
                <h1 className="mb-4 text-5xl md:text-6xl font-medium leading-tight text-slate-800">
                  The password manager with<br />
                  zero-knowledge encryption
                </h1>
              </div>
              <div className="mt-8 md:mt-0">
                <figure className="relative aspect-[3/2]">
                  <Image
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/03/Dashlane-Culture-Of-Security-Illustration.png"
                    alt="A blue, green, and purple illustration on a white background. An illustrated blue rectangle and a green rectangle are on the left, and an illustrated green lock with a white keyhole and three green asterisks are on the right."
                    fill
                    className="absolute inset-0 rounded-lg object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dashlane Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="mb-4 text-3xl md:text-4xl font-medium text-blue-600 md:mb-6">
                Why choose Dashlane?
              </h2>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="inline-block mb-4 p-2 rounded-md bg-blue-100">
                  <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 24 24">
                    <g clipPath="url(#clip0_643_3937)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.0001 10V7.65311C6.0001 4.37896 8.59347 2 12.0001 2C15.4067 2 18.0001 4.37896 18.0001 7.65311V10H21V22H19V12H5V20H16L17.2 22H3V10H6.0001ZM8.0001 7.65311C8.0001 5.68492 9.52437 4.05568 12.0001 4.05568C14.4758 4.05568 16.0001 5.68492 16.0001 7.65311V10H8.0001V7.65311Z" />
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Always secure
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  Dashlane leads the industry in security, using the strongest encryption available to protect your passwords and personal data.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="inline-block mb-4 p-2 rounded-md bg-blue-100">
                  <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 24 24">
                    <g clipPath="url(#clip0_643_3687)">
                      <path d="M20.8466 8.28544L19.4237 9.70886C19.9775 10.4183 20.385 11.1073 20.6638 11.6477C20.7255 11.7675 20.7806 11.8791 20.8291 11.9811C20.7806 12.083 20.7256 12.1946 20.6638 12.3143C20.3298 12.9619 19.8109 13.8227 19.0769 14.6765C17.6244 16.3661 15.3876 17.9788 12 17.9788C11.7218 17.9788 11.4514 17.9679 11.1885 17.947L9.4355 19.7006C10.2242 19.8782 11.0777 19.9781 12 19.9781C20.25 19.9781 23 11.9811 23 11.9811C23 11.9811 22.3803 10.1788 20.8466 8.28544Z" />
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Always private
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  No one knows it but you, and it's not stored anywhere on your computer or our servers.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="inline-block mb-4 p-2 rounded-md bg-blue-100">
                  <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 24 24">
                    <g clipPath="url(#clip0_643_4023)">
                      <path d="M10.4599 2C7.53552 2 5.25555 2.95067 3.54776 4.47746L2.80225 5.14395L4.13524 6.63497L4.88075 5.96848C6.20558 4.78405 8.00499 4 10.4599 4C12.7653 4 14.5156 4.83761 15.8235 6.02166L16.5648 6.69281L17.9071 5.21017L17.1658 4.53902C15.5212 3.05011 13.3018 2 10.4599 2Z" />
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Only accessible by you
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  Dashlane ensures that you are you by requiring you to log in from an approved device every time.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col justify-center md:mt-10 md:flex-row">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
              >
                Get Dashlane
              </Link>
            </div>
          </div>
        </section>

        {/* Trusted Organizations Section with Animated Logos */}
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
                        src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/Symrise-Logo-Dark.png"
                        alt="Symrise logo"
                        width={120}
                        height={40}
                        className="h-10 object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="text-center h-10 flex-shrink-0">
                      <Image
                        src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/04/Michelin-Logo-Dark.png"
                        alt="Michelin logo"
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

        {/* Security Benefits Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="mb-4 text-3xl md:text-4xl font-medium text-blue-600 md:mb-6">
                We continually innovate to bring you best-in-class security
              </h2>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Patented security architecture
                </h3>
                <p className="text-sm md:text-base text-gray-500 mb-4">
                  Dashlane earned a U.S. patent for our security architecture. We use the strongest encryption available, and we implement it in an incredibly stringent and unique way.
                </p>
                <Link href="/blog/security-architecture" className="flex items-center py-1.5 text-blue-500 hover:text-blue-600 transition-colors">
                  Learn more
                  <svg className="w-5 h-5 ml-2 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M17.9383 13.0316L11.1623 19.5059L12.5806 21L22 12L12.5806 3L11.1623 4.49407L17.9383 10.9684L2 10.9684L2 13.0316L17.9383 13.0316Z" />
                  </svg>
                </Link>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Zero-knowledge system
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  We take a "trust no one" approach to your security—we never trust any server, code, or person with access to user data in order to give you the best protection.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  The strongest password requirements
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  We employ the strongest master password requirements in the industry, and to protect you further, your master password cannot be reset by anyone other than you.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Built-in two-factor authentication
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  Dashlane requires a unique code before authorizing access on a new device. We also support mobile authenticator apps and devices, including Google Authenticator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Stats Section */}
        <section className="py-15 bg-blue-600">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-between border border-gray-600 rounded-lg">
              <div className="flex flex-col justify-center p-8 lg:p-10 text-center lg:text-left w-full min-w-fit flex-grow lg:pr-10">
                <div className="mb-2 text-lg md:text-xl text-gray-300">Trusted by</div>
                <div className="text-2xl md:text-3xl font-medium text-white">
                  24,000+ businesses &<br />19+ million people worldwide
                </div>
              </div>
              <div className="flex items-center justify-center p-5 flex-grow border-t border-gray-600 lg:border-t-0 lg:border-l w-1/2 lg:w-auto">
                <Image
                  src="https://ripley1stg.wpenginepowered.com/wp-content/uploads/2023/12/Dashlane-G2-Rating-1.png"
                  alt="G2 Rating"
                  width={120}
                  height={93}
                  className="w-full h-23 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-5 flex-grow border-t border-gray-600 lg:border-t-0 lg:border-l w-1/2 lg:w-auto">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/01/high-adoption-25.png"
                  alt="High Adoption"
                  width={120}
                  height={93}
                  className="w-full h-23 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-5 flex-grow border-t border-gray-600 lg:border-t-0 lg:border-l w-1/2 lg:w-auto">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/01/fast-implementation-25.png"
                  alt="Fast Implementation"
                  width={120}
                  height={93}
                  className="w-full h-23 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-5 flex-grow border-t border-gray-600 lg:border-t-0 lg:border-l w-1/2 lg:w-auto">
                <Image
                  src="https://ripley1stg.wpenginepowered.com/wp-content/uploads/2023/12/The-American-Institute-of-Certified-Public-Accountants-SOC-For-Service-Organizations.png"
                  alt="SOC Certification"
                  width={120}
                  height={93}
                  className="w-full h-23 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-5 flex-grow border-t border-gray-600 lg:border-t-0 lg:border-l w-1/2 lg:w-auto">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/ISO-27001-Certified-By-Schellman.png"
                  alt="ISO 27001 Certified"
                  width={120}
                  height={93}
                  className="w-full h-23 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industry Leading Security Section */}
        <section className="py-8 bg-blue-50">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="mb-4 text-3xl md:text-4xl font-medium text-blue-600 md:mb-6">
                Industry-leading security
              </h2>
              <p className="mb-8 md:mb-12 text-gray-500 md:text-center">
                Simple and intuitive features
              </p>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 border border-gray-200 rounded-lg bg-white">
                <div className="inline-block mb-4 p-2 rounded-md bg-blue-200">
                  <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 24 24">
                    <g clipPath="url(#clip0_643_3913)">
                      <path d="M4.15317 7.02235L12 4.13142L19.8468 7.02234C19.7787 7.55019 19.6856 8.18363 19.5615 8.86832C19.2096 10.8097 18.6521 12.904 17.8583 14.2436C17.4329 14.9614 16.7539 15.7319 15.9602 16.4874L17.3748 17.9021C18.2527 17.0622 19.0475 16.1599 19.5789 15.2632C21.5521 11.9334 22 5.68421 22 5.68421L12 2L2 5.68421C2 5.68421 2.44782 11.9334 4.421 15.2632C6.39418 18.5929 12 22 12 22C12 22 13.6535 20.995 15.4805 19.5433L14.0565 18.1192C13.981 18.1783 13.9055 18.237 13.8299 18.2951C13.1457 18.8216 12.5043 19.2737 12 19.6152C11.4957 19.2737 10.8543 18.8216 10.17 18.2951C8.54517 17.045 6.91935 15.556 6.14158 14.2436C5.34778 12.904 4.79037 10.8097 4.4385 8.86835C4.3144 8.18365 4.22129 7.5502 4.15317 7.02235Z" />
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Security Dashboard
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  Weak, reused, and compromised passwords put your data at risk. Dashlane makes it easy to see and fix these common password problems.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg bg-white">
                <div className="inline-block mb-4 p-2 rounded-md bg-blue-200">
                  <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 24 24">
                    <g clipPath="url(#clip0_643_3962)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.16838 20.5555C8.16838 20.5555 8.16787 20.5547 8.99992 20C9.83197 19.4453 9.83148 19.4446 9.83148 19.4446L9.83014 19.4426L9.82864 19.4403L9.82663 19.4374C9.82837 19.4398 9.83355 19.447 9.84223 19.4584C9.85965 19.4813 9.89057 19.5202 9.93483 19.57C10.024 19.6704 10.163 19.8098 10.3499 19.95C10.7208 20.2281 11.2654 20.5 11.9999 20.5C12.7344 20.5 13.2791 20.2281 13.6499 19.95C13.8368 19.8098 13.9758 19.6704 14.065 19.57C14.1093 19.5202 14.1402 19.4813 14.1576 19.4584C14.1663 19.447 14.1715 19.4398 14.1732 19.4373L14.1712 19.4403L14.1697 19.4426L14.1688 19.4439C14.1688 19.4439 14.1679 19.4453 14.9999 20C15.832 20.5547 15.8315 20.5555 15.8315 20.5555L15.8298 20.558L15.8272 20.5618L15.8208 20.5712L15.8032 20.5964C15.7893 20.6159 15.771 20.6409 15.7485 20.6705C15.7034 20.7297 15.6406 20.8079 15.5598 20.8987C15.399 21.0796 15.163 21.3152 14.8499 21.55C14.2207 22.0219 13.2654 22.5 11.9999 22.5C10.7344 22.5 9.77909 22.0219 9.14992 21.55C8.83684 21.3152 8.6008 21.0796 8.44001 20.8987C8.35927 20.8079 8.29645 20.7297 8.25136 20.6705C8.22879 20.6409 8.21057 20.6159 8.19668 20.5964L8.17907 20.5712L8.17267 20.5618L8.17007 20.558L8.16838 20.5555Z" />
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Instant security alerts
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  Most breaches don't make headlines. Dashlane scours the web for security breaches and instantly alerts you if one of your accounts is compromised or at risk.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg bg-white">
                <div className="inline-block mb-4 p-2 rounded-md bg-blue-200">
                  <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 24 24">
                    <g clipPath="url(#clip0_643_3803)">
                      <path d="M6.9999 9.99998H10.9999V12H6.9999V9.99998Z" />
                      <path d="M12.9999 9.99998H16.9999V12H12.9999V9.99998Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.28571 15.9999H15.7143C16.9767 15.9999 18 14.9766 18 13.7142V6.28564C18 5.02327 16.9767 3.99994 15.7143 3.99994H8.28571C7.02334 3.99994 6 5.02327 6 6.28564V13.7142C6 14.9766 7.02334 15.9999 8.28571 15.9999ZM8 6.28564C8 6.12779 8.12786 5.99994 8.28571 5.99994H15.7143C15.8721 5.99994 16 6.12779 16 6.28564V13.7142C16 13.8721 15.8721 13.9999 15.7143 13.9999H8.28571C8.12786 13.9999 8 13.8721 8 13.7142V6.28564Z" />
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-medium leading-8 text-blue-600">
                  Password Generator
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  Create strong, unique passwords for every account with our built-in password generator that follows security best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="relative py-15">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="mb-4 text-5xl md:text-6xl font-medium text-center text-blue-600 md:mb-6">
              Get started today
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-center text-gray-500">
              Join millions of users who trust Dashlane to keep their digital lives secure and organized.
            </p>
            <div className="mt-8 flex flex-col justify-center md:mt-10 md:flex-row">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
              >
                Get Dashlane
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
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300">
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
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300">
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
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300">
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
                <button className="flex w-full items-center text-left bg-transparent border-0 border-b border-gray-200 lg:border-b-0 py-4 lg:py-4 text-sm font-semibold uppercase text-gray-300">
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
        </div>
      </footer>

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
