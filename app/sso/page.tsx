'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SSOPage() {
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
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-5 py-5 items-center lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-gray-500 uppercase mb-2 md:mb-4 text-base">
                  Dashlane Confidential
                </p>
                <h1 className="mb-4 text-5xl md:text-6xl font-medium leading-tight text-slate-800">
                  Authentication and access that's simpler and more secure
                </h1>
                <p className="text-gray-500 text-lg mb-8 md:mb-10">
                  Use Confidential SSO & Provisioning to deploy Dashlane across your organization and enable employees to access their Dashlane vaults with a single SSO credential.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link
                    href="/business-password-manager/buy"
                    className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-1 focus:outline-blue-600"
                  >
                    Buy Business
                  </Link>
                  <Link
                    href="/business-password-manager/try"
                    className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-white text-blue-600 border border-blue-600 hover:bg-slate-50 transition-colors focus:outline-1 focus:outline-blue-600"
                  >
                    Start your trial
                  </Link>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <figure className="relative aspect-square">
                  <Image
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2023/11/SSO-hero-2x.png"
                    alt="Geometric graphic"
                    fill
                    className="absolute inset-0 rounded-lg object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-15">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-between border border-gray-300 rounded-lg">
              <div className="flex flex-col justify-center p-8 lg:p-10 text-center lg:text-left w-full min-w-fit flex-grow lg:pr-10">
                <div className="mb-2 text-lg md:text-xl text-gray-500">Currently securing</div>
                <div className="text-2xl md:text-3xl font-medium text-blue-600">
                  2.5+ billion credentials
                </div>
              </div>
              <div className="flex items-center justify-center p-5 flex-grow border-t border-gray-300 lg:border-t-0 lg:border-l w-1/2 lg:w-auto">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2023/11/G2.png"
                  alt="A red and white graphic of Dashlane's G2 rating. 5 stars appear below the circular red and white G2 logo, and 4.5 stars are filled in to show Dashlane's 4.5-star rating."
                  width={120}
                  height={70}
                  className="w-full h-17 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-5 flex-grow border-t border-gray-300 lg:border-t-0 lg:border-l w-1/2 lg:w-auto">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/schellman_iso27001_seal_grey_CMYK_300dpi_jpg.png"
                  alt="ISO 27001 Certification"
                  width={120}
                  height={93}
                  className="w-full h-23 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-5 flex-grow border-t border-gray-300 lg:border-t-0 lg:border-l w-1/2 lg:w-auto">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/ccpa-compliant-1.png"
                  alt="CCPA Compliant"
                  width={120}
                  height={93}
                  className="w-full h-23 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-5 flex-grow border-t border-gray-300 lg:border-t-0 lg:border-l w-1/2 lg:w-auto">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/gdpr-compliant-1.png"
                  alt="GDPR Compliant"
                  width={120}
                  height={93}
                  className="w-full h-23 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Icon Cards Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="mb-4 text-3xl md:text-4xl font-medium text-blue-600 md:mb-6">
                Get enterprise-wide access & security with Confidential SSO & Provisioning
              </h2>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 overflow-hidden">
              <div className="p-6 border border-gray-300 rounded-lg w-full">
                <div className="inline-block mb-4 p-2 rounded-md bg-blue-50">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 fill-blue-600">
                    <g clipPath="url(#clip0_643_3868)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11 19H13V22H19V2H5V22H11V19ZM9 20V17H15V20H17V4H7V20H9Z"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M9 8H8V6H11V9H9V8Z"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M9 13H8V11H11V14H9V13Z"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 8H13V6H16V9H14V8Z"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 13H13V11H16V14H14V13Z"/>
                    </g>
                  </svg>
                </div>
                <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                  Enterprise-level security
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Ensures sensitive information remains encrypted and confidential, even during processing in cloud environments.
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg w-full">
                <div className="inline-block mb-4 p-2 rounded-md bg-blue-50">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 fill-blue-600">
                    <g clipPath="url(#clip0_643_3928)">
                      <path d="M14 12C14 12.2189 13.9648 12.4296 13.8999 12.6267L15.3928 14.1197C15.7776 13.5051 16 12.7785 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C12.7049 16 13.3672 15.8177 13.9423 15.4976L12.4039 13.9592C12.2735 13.9859 12.1384 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"/>
                    </g>
                  </svg>
                </div>
                <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                  Streamlined access control
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Simplify user management with automated provisioning and single sign-on capabilities across your organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
              <div className="w-full">
                <figure className="mb-6 md:mb-8 relative aspect-[3/2]">
                  <Image
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2023/11/SSO-hero-2x.png"
                    alt="SSO Integration"
                    fill
                    className="absolute inset-0 rounded-lg object-cover"
                  />
                </figure>
                <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                  Single Sign-On Integration
                </h3>
                <p className="text-gray-500">
                  Seamlessly integrate with your existing identity provider for unified access management.
                </p>
              </div>
              <div className="w-full">
                <figure className="mb-6 md:mb-8 relative aspect-[3/2]">
                  <Image
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2023/11/SSO-hero-2x.png"
                    alt="User Provisioning"
                    fill
                    className="absolute inset-0 rounded-lg object-cover"
                  />
                </figure>
                <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                  Automated User Provisioning
                </h3>
                <p className="text-gray-500">
                  Automatically provision and deprovision users based on your directory service changes.
                </p>
              </div>
              <div className="w-full">
                <figure className="mb-6 md:mb-8 relative aspect-[3/2]">
                  <Image
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2023/11/SSO-hero-2x.png"
                    alt="Security Compliance"
                    fill
                    className="absolute inset-0 rounded-lg object-cover"
                  />
                </figure>
                <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                  Enhanced Security Compliance
                </h3>
                <p className="text-gray-500">
                  Meet enterprise security requirements with advanced encryption and compliance features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="bg-blue-600 p-8 md:p-14 my-6 rounded-lg">
              <div className="grid gap-5 items-center lg:grid-cols-2 lg:gap-20">
                <div className="order-2 lg:order-1">
                  <h2 className="mb-4 text-3xl md:text-4xl font-medium text-white md:mb-6">
                    How Confidential SSO works
                  </h2>
                  <p className="text-gray-300 mb-10">
                    Streamline your organization's password management with enterprise-grade SSO integration.
                  </p>
                  <div className="mt-10">
                    <div className="flex items-start mb-4 md:mb-6">
                      <span className="min-w-fit self-start mr-5">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                          <path d="M2 17L12 22L22 17"/>
                          <path d="M2 12L12 17L22 12"/>
                        </svg>
                      </span>
                      <span>
                        <h3 className="text-lg mb-1 mt-0 text-white font-medium">Connect your identity provider</h3>
                        <p className="text-gray-300 text-sm">Integrate Dashlane with your existing SSO solution like Azure AD, Okta, or OneLogin.</p>
                      </span>
                    </div>
                    <div className="flex items-start mb-4 md:mb-6">
                      <span className="min-w-fit self-start mr-5">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"/>
                          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"/>
                        </svg>
                      </span>
                      <span>
                        <h3 className="text-lg mb-1 mt-0 text-white font-medium">Provision users automatically</h3>
                        <p className="text-gray-300 text-sm">Users are automatically added or removed from Dashlane based on your directory changes.</p>
                      </span>
                    </div>
                    <div className="flex items-start mb-4 md:mb-6">
                      <span className="min-w-fit self-start mr-5">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.0001 10V7.65311C6.0001 4.37896 8.59347 2 12.0001 2C15.4067 2 18.0001 4.37896 18.0001 7.65311V10H21V22H19V12H5V20H16L17.2 22H3V10H6.0001ZM8.0001 7.65311C8.0001 5.68492 9.52437 4.05568 12.0001 4.05568C14.4758 4.05568 16.0001 5.68492 16.0001 7.65311V10H8.0001V7.65311Z"/>
                        </svg>
                      </span>
                      <span>
                        <h3 className="text-lg mb-1 mt-0 text-white font-medium">Secure access with one login</h3>
                        <p className="text-gray-300 text-sm">Employees access their Dashlane vault using their existing corporate credentials.</p>
                      </span>
                    </div>
                  </div>
                  <div className="mt-10 flex flex-col md:flex-row gap-4">
                    <Link
                      href="/business-password-manager/enterprise"
                      className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-white text-blue-600 border border-transparent hover:bg-gray-50 transition-colors focus:outline-1 focus:outline-blue-600"
                    >
                      Contact Sales
                    </Link>
                    <Link
                      href="/business-password-manager/try"
                      className="inline-flex items-center justify-center min-w-fit rounded-md font-medium text-lg px-5 py-3 bg-transparent text-white border border-white hover:bg-white hover:text-blue-600 transition-colors focus:outline-1 focus:outline-white"
                    >
                      Start your trial
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2 mb-10 lg:mb-0">
                  <figure className="relative aspect-square">
                    <Image
                      src="https://ripleyprd.wpengine.com/wp-content/uploads/2023/11/SSO-hero-2x.png"
                      alt="How SSO Works"
                      fill
                      className="absolute inset-0 rounded-lg object-cover"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-15">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-center mb-4 text-blue-600 text-3xl md:text-4xl font-medium md:mb-6">
              Ready to implement SSO & Provisioning?
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
                Start your trial
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex items-center justify-between mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl font-medium text-blue-600 max-w-2xl">
                Learn more about SSO integration
              </h2>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="w-full">
                <Link href="#" className="no-underline">
                  <figure className="mb-6 md:mb-8 relative aspect-[824/477]">
                    <Image
                      src="https://ripleyprd.wpengine.com/wp-content/uploads/2023/11/SSO-hero-2x.png"
                      alt="SSO Best Practices"
                      fill
                      className="absolute inset-0 rounded-lg object-cover"
                    />
                  </figure>
                  <span className="mb-4 inline-block rounded bg-blue-50 px-3 py-1 text-xs uppercase text-blue-600">
                    Guide
                  </span>
                  <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                    SSO Implementation Best Practices
                  </h3>
                  <p className="text-gray-500">
                    Learn how to successfully implement SSO in your organization with our comprehensive guide.
                  </p>
                </Link>
              </div>
              <div className="w-full">
                <Link href="#" className="no-underline">
                  <figure className="mb-6 md:mb-8 relative aspect-[824/477]">
                    <Image
                      src="https://ripleyprd.wpengine.com/wp-content/uploads/2023/11/SSO-hero-2x.png"
                      alt="Security Compliance"
                      fill
                      className="absolute inset-0 rounded-lg object-cover"
                    />
                  </figure>
                  <span className="mb-4 inline-block rounded bg-blue-50 px-3 py-1 text-xs uppercase text-blue-600">
                    Whitepaper
                  </span>
                  <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                    Enterprise Security Compliance
                  </h3>
                  <p className="text-gray-500">
                    Understand how Dashlane meets enterprise security and compliance requirements.
                  </p>
                </Link>
              </div>
              <div className="w-full">
                <Link href="#" className="no-underline">
                  <figure className="mb-6 md:mb-8 relative aspect-[824/477]">
                    <Image
                      src="https://ripleyprd.wpengine.com/wp-content/uploads/2023/11/SSO-hero-2x.png"
                      alt="User Provisioning"
                      fill
                      className="absolute inset-0 rounded-lg object-cover"
                    />
                  </figure>
                  <span className="mb-4 inline-block rounded bg-blue-50 px-3 py-1 text-xs uppercase text-blue-600">
                    Tutorial
                  </span>
                  <h3 className="leading-8 mb-2 text-blue-600 font-medium text-2xl">
                    Automated User Provisioning Setup
                  </h3>
                  <p className="text-gray-500">
                    Step-by-step instructions for setting up automated user provisioning with your identity provider.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="relative py-15 bg-blue-50">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-center mb-4 text-blue-600 text-3xl md:text-4xl font-medium md:mb-6">
              Get started with Confidential SSO today
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
                Start your trial
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
    </div>
  );
}
