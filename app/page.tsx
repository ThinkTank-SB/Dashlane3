'use client';

import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="absolute -top-16 left-0 z-50 h-12 bg-white px-4 py-3 shadow-md transition-all duration-200 focus:top-0 text-blue-900"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="flex items-center h-15 max-w-7xl mx-auto px-4">
          {/* Logo */}
          <a href="/" className="mr-12 inline-flex items-center">
            <svg 
              role="img" 
              width="127" 
              height="32" 
              viewBox="0 0 243 64" 
              className="fill-blue-900"
              aria-describedby="logo-title"
            >
              <title id="logo-title">Dashlane Logo</title>
              <path fillRule="evenodd" clipRule="evenodd" d="M109.677 41.2692C109.765 44.0779 110.696 46.2804 112.469 47.8768L112.464 47.8914C114.333 49.5657 116.915 50.4029 120.209 50.4029C121.989 50.4387 123.757 50.0917 125.392 49.3854C126.798 48.7743 127.996 47.7689 128.842 46.4909C129.679 45.1838 130.106 43.6568 130.07 42.1053C130.09 40.2926 129.656 38.7587 128.769 37.5034C127.882 36.2482 126.518 35.2638 124.676 34.5505L120.22 32.7962C118.891 32.2583 117.946 31.7281 117.384 31.2057C117.116 30.9684 116.901 30.6762 116.756 30.3488C116.61 30.0214 116.536 29.6666 116.539 29.3082C116.525 28.9396 116.596 28.5726 116.749 28.2366C116.901 27.9006 117.13 27.6047 117.416 27.3727C117.989 26.8991 118.775 26.6623 119.773 26.6623C120.976 26.6642 121.896 26.9966 122.533 27.6593C123.106 28.2538 123.423 29.0831 123.483 30.1473C123.488 30.2523 123.534 30.3512 123.61 30.4236C123.686 30.496 123.787 30.5363 123.892 30.5362H129.301C129.411 30.5301 129.515 30.4811 129.589 30.3996C129.664 30.3182 129.703 30.2108 129.699 30.1006C129.669 28.6068 129.212 27.1528 128.384 25.9097C127.555 24.6666 126.388 23.6861 125.021 23.0837C123.408 22.3525 121.652 21.9919 119.881 22.0282C118.15 21.9922 116.432 22.3261 114.841 23.0076C113.484 23.5835 112.324 24.5427 111.505 25.7676C110.714 26.995 110.307 28.4302 110.335 29.8901C110.289 31.4903 110.773 33.0608 111.712 34.3575C112.632 35.5991 113.987 36.5513 115.776 37.214L120.609 39.0939C121.835 39.5676 122.685 40.0548 123.159 40.5558C123.645 41.0946 123.9 41.8039 123.866 42.5293C123.89 42.9412 123.817 43.3529 123.654 43.7319C123.491 44.111 123.243 44.4469 122.928 44.7133C122.302 45.2259 121.414 45.4822 120.264 45.4822C118.909 45.4842 117.842 45.0739 117.063 44.2514C116.347 43.5087 115.957 42.501 115.893 41.2282C115.887 41.1235 115.842 41.025 115.766 40.9527C115.689 40.8805 115.589 40.8399 115.484 40.8394H110.078C109.968 40.8439 109.864 40.8916 109.789 40.9721C109.714 41.0525 109.674 41.1592 109.677 41.2692Z"/>
              <path d="M47.4132 20.5837C47.4132 20.1869 47.0164 19.7901 46.4597 19.6314L39.788 17.1724C38.6769 16.6963 37.4061 17.2518 37.4061 18.0465V45.9999C37.4061 46.3967 37.8029 46.8728 38.1997 47.0316L45.0302 49.4906C46.0629 49.8874 47.4132 49.3319 47.4132 48.4578V20.5837ZM34.9437 10.8159C34.9437 10.4179 34.5469 10.0211 33.9903 9.86243L27.3197 7.40342C26.2075 6.92726 24.9367 7.48278 24.9367 8.27748V25.2704C24.9367 25.6672 25.3334 26.1433 25.7302 26.3032L32.5607 28.7622C33.5935 29.1601 34.9437 28.6035 34.9437 27.7305V10.8159ZM34.9437 41.3926C34.9437 40.9958 34.5469 40.599 33.9903 40.4403L27.3197 37.9813C26.2075 37.5051 24.9367 38.0606 24.9367 38.8553V55.8482C24.9367 56.245 25.3334 56.7212 25.7302 56.8799L32.5607 59.3389C33.5935 59.7368 34.9437 59.1802 34.9437 58.3061V41.3926ZM22.4743 44.8084C22.4743 44.4116 22.0775 44.0137 21.5209 43.855L14.8502 41.3959C13.7325 40.9198 12.4672 41.4753 12.4672 42.27V60.3773C12.4672 60.7741 12.864 61.2514 13.2608 61.4101L20.0913 63.8691C21.1241 64.267 22.4743 63.7104 22.4743 62.8374V44.8084ZM22.4743 3.58747C22.4743 3.19068 22.0775 2.79388 21.5209 2.63516L14.8502 0.176148C13.7325 -0.300007 12.4672 0.255506 12.4672 1.05022V19.1575C12.4672 19.5554 12.864 20.0316 13.2608 20.1903L20.0913 22.6493C21.1241 23.0461 22.4743 22.4906 22.4743 21.6165V3.58747ZM10.0071 4.30282C10.0071 3.90603 9.61028 3.50811 9.05365 3.3494L2.38301 0.89038C1.27086 0.414225 0 0.96974 0 1.76445V59.7402C0 60.137 0.396801 60.6131 0.794714 60.7719L7.62407 63.2309C8.65685 63.6277 10.0071 63.0722 10.0071 62.1981V4.30282Z"/>
            </svg>
          </a>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden lg:flex flex-1 items-center h-full" role="navigation" aria-label="enhanced menu">
            <ul className="flex w-full items-center h-full list-none gap-4">
              <li className="flex h-full items-center border-b-2 border-transparent hover:border-blue-900 transition-colors">
                <button className="inline-flex items-center text-gray-600 hover:text-blue-900 transition-colors bg-none border-none cursor-pointer">
                  Business
                  <svg className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                  </svg>
                </button>
              </li>
              <li className="flex h-full items-center border-b-2 border-transparent hover:border-blue-900 transition-colors">
                <button className="inline-flex items-center text-gray-600 hover:text-blue-900 transition-colors bg-none border-none cursor-pointer">
                  Personal
                  <svg className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                  </svg>
                </button>
              </li>
              <li className="flex h-full items-center border-b-2 border-transparent hover:border-blue-900 transition-colors">
                <button className="inline-flex items-center text-gray-600 hover:text-blue-900 transition-colors bg-none border-none cursor-pointer">
                  Why Dashlane
                  <svg className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                  </svg>
                </button>
              </li>
              <li className="flex h-full items-center border-b-2 border-transparent hover:border-blue-900 transition-colors">
                <button className="inline-flex items-center text-gray-600 hover:text-blue-900 transition-colors bg-none border-none cursor-pointer">
                  Partners
                  <svg className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                  </svg>
                </button>
              </li>
              <li className="flex h-full items-center border-b-2 border-transparent hover:border-blue-900 transition-colors">
                <button className="inline-flex items-center text-gray-600 hover:text-blue-900 transition-colors bg-none border-none cursor-pointer">
                  Resources
                  <svg className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                  </svg>
                </button>
              </li>
              <li className="flex h-full items-center border-b-2 border-transparent hover:border-blue-900 transition-colors">
                <a className="inline-flex items-center text-gray-600 hover:text-blue-900 transition-colors" href="/pricing">
                  Pricing
                </a>
              </li>
              <li className="flex h-full items-center border-b-2 border-transparent hover:border-blue-900 transition-colors ml-auto">
                <a className="inline-flex items-center text-gray-600 hover:text-blue-900 transition-colors" href="/login">
                  Log in
                </a>
              </li>
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="ml-auto flex items-center gap-2">
            <a 
              className="hidden xl:inline-flex items-center justify-center px-6 py-3 rounded bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 border border-blue-600 hover:border-blue-700" 
              href="/contact-sales"
            >
              Contact Sales
            </a>
            <a 
              className="hidden xl:inline-flex items-center justify-center px-6 py-3 rounded bg-white text-blue-900 font-medium transition-all hover:bg-gray-50 border border-blue-600" 
              href="/trial"
            >
              Start free trial
            </a>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden inline-flex items-center justify-center p-2 text-blue-900 bg-none border-none cursor-pointer">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section 
          className="bg-blue-900 py-20 relative"
          style={{
            backgroundImage: "url('https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/new-hp-hero-mobile-bg-slash.png')",
            backgroundSize: '90%',
            backgroundPosition: '100% 93%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center py-5">
              <div className="hero-text">
                <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight">
                  One platform. Complete credential security.
                </h1>
                <p className="text-white text-lg mb-10">
                  Dashlane Omnix unifies Password Management and Credential Protection in one intelligent platform.
                </p>
                <div className="flex flex-col md:flex-row gap-2">
                  <a 
                    className="inline-flex items-center justify-center px-5 py-3.5 text-lg rounded bg-white text-blue-900 font-medium transition-all hover:bg-gray-50 border border-blue-600" 
                    href="/contact-sales"
                  >
                    Contact Sales
                  </a>
                  <a 
                    className="inline-flex items-center justify-center px-5 py-3.5 text-lg rounded bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 border border-blue-600 hover:border-blue-700" 
                    href="/demo"
                  >
                    Watch a demo
                  </a>
                </div>
              </div>
              <div className="relative aspect-[3/2] rounded overflow-hidden shadow-2xl">
                <Image
                  src="https://i.ibb.co/FqLWHp56/dashlanepic.png"
                  alt="Dashlane Platform Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <section className="bg-blue-900 py-5 pb-8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <p className="hidden text-center text-gray-300 uppercase text-base mb-6">
              trusted by top enterprises
            </p>
            <div className="flex gap-10 items-center animate-scroll">
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/Airfrance.png"
                  alt="Air France logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/amnesty_logo.png"
                  alt="Amnesty International logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/bbc-studios.png"
                  alt="BBC Studios logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/best-western.png"
                  alt="Best Western logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/cineplex-1.png"
                  alt="Cineplex logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/consero-1-1.png"
                  alt="Consero logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/crane-1.png"
                  alt="Crane logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/hearst.png"
                  alt="Hearst logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/hyatt.png"
                  alt="Hyatt logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/michelin.png"
                  alt="Michelin logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/national-life-group.png"
                  alt="National Life Group logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/symrise.png"
                  alt="Symrise logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/transunion.png"
                  alt="TransUnion logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/twinings.png"
                  alt="Twinings logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
              <div className="h-10 flex-shrink-0 text-center">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/wwf.png"
                  alt="WWF logo"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain brightness-0 saturate-100 invert"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dashlane Omnix Section */}
        <section className="bg-white py-15">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-medium text-blue-900 mb-6">
                Dashlane Omnix
              </h2>
              <p className="text-gray-600 text-lg">
                Intelligent credential security in one platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded">
                <div className="relative aspect-[3/2] rounded overflow-hidden mb-6">
                  <Image
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/Omnix-Credential-Protection-HP.png"
                    alt="Credential Risk Detection and Insights"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="inline-block bg-blue-50 text-blue-900 px-3 py-1 rounded text-xs uppercase mb-4">
                  credential protection
                </span>
                <h3 className="text-2xl font-medium text-blue-900 leading-relaxed mb-2">
                  Turn risk insights into action
                </h3>
                <p className="text-gray-600 text-base">
                  Omnix pairs always-on intelligence with targeted actions so you can combat the #1 breach threat: Human risk.
                </p>
              </div>
              <div className="p-6 bg-white rounded">
                <div className="relative aspect-[3/2] rounded overflow-hidden mb-6">
                  <Image
                    src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/Omnix-Credential-Management-HP.png"
                    alt="Secure employee vault interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="inline-block bg-blue-50 text-blue-900 px-3 py-1 rounded text-xs uppercase mb-4">
                  password management
                </span>
                <h3 className="text-2xl font-medium text-blue-900 leading-relaxed mb-2">
                  Secure employee access
                </h3>
                <p className="text-gray-600 text-base">
                  Stay in control of shadow IT while equipping every employee with a secure browser-based vault for all their credentials.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <a 
                className="inline-flex items-center justify-center px-5 py-3.5 text-lg rounded bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 border border-blue-600 hover:border-blue-700" 
                href="/omnix"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-blue-900 py-15 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center">
              <div className="security-text">
                <p className="text-gray-300 uppercase mb-4 text-base">
                  Built-in security
                </p>
                <h2 className="text-4xl text-white mb-6">
                  Protected by Dashlane Secure Cloud
                </h2>
                <p className="text-gray-300">
                  Dashlane Secure Cloud combines the strength of zero-knowledge architecture with confidential computing to keep business data secure and encrypted.
                </p>
              </div>
              <div className="relative aspect-[3/2] rounded overflow-hidden mt-6">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/Dashlane-Secure-Cloud.png"
                  alt="Dashlane security architecture illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="bg-blue-50 py-15">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap border border-gray-300 rounded overflow-hidden">
              <div className="flex-1 min-w-[50%] p-5 flex items-center justify-center border-r border-gray-300 border-b border-gray-300">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/gdpr-compliant-1.png"
                  alt="GDPR Compliant"
                  width={150}
                  height={70}
                  className="max-h-[70px] w-auto object-contain"
                />
              </div>
              <div className="flex-1 min-w-[50%] p-5 flex items-center justify-center border-b border-gray-300 last:border-r-0">
                <Image
                  src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/schellman_iso27001_seal_grey_CMYK_300dpi_jpg.png"
                  alt="ISO 27001 Certified"
                  width={150}
                  height={70}
                  className="max-h-[70px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
