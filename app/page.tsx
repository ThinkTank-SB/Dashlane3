'use client'

export default function HomePage() {
  return (
    <div className="scroll-pt-[132px] scroll-smooth">
      {/* Skip to content link */}
      <a 
        href="#main-content"
        className="absolute -top-16 left-0 z-50 h-12 bg-white px-4 py-3 shadow-md focus:top-0 focus:transition-all"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-30">
        <div className="bg-white border-b border-gray-200">
          <div className="px-4 md:px-8">
            <div className="relative flex w-full items-center" style={{height: '60px'}}>
              {/* Logo */}
              <a 
                href="/"
                className="mr-3 inline-flex items-center focus:outline-1 focus:outline-teal-600 md:mr-12"
              >
                <svg 
                  role="img" 
                  width="127" 
                  height="32" 
                  viewBox="0 0 243 64" 
                  fill="#09363F" 
                  xmlns="http://www.w3.org/2000/svg" 
                  aria-describedby="logo-title"
                >
                  <title id="logo-title">Dashlane Logo</title>
                  <path fillRule="evenodd" clipRule="evenodd" d="M109.677 41.2692C109.765 44.0779 110.696 46.2804 112.469 47.8768L112.464 47.8914C114.333 49.5657 116.915 50.4029 120.209 50.4029C121.989 50.4387 123.757 50.0917 125.392 49.3854C126.798 48.7743 127.996 47.7689 128.842 46.4909C129.679 45.1838 130.106 43.6568 130.07 42.1053C130.09 40.2926 129.656 38.7587 128.769 37.5034C127.882 36.2482 126.518 35.2638 124.676 34.5505L120.22 32.7962C118.891 32.2583 117.946 31.7281 117.384 31.2057C117.116 30.9684 116.901 30.6762 116.756 30.3488C116.61 30.0214 116.536 29.6666 116.539 29.3082C116.525 28.9396 116.596 28.5726 116.749 28.2366C116.901 27.9006 117.13 27.6047 117.416 27.3727C117.989 26.8991 118.775 26.6623 119.773 26.6623C120.976 26.6642 121.896 26.9966 122.533 27.6593C123.106 28.2538 123.423 29.0831 123.483 30.1473C123.488 30.2523 123.534 30.3512 123.61 30.4236C123.686 30.496 123.787 30.5363 123.892 30.5362H129.301C129.411 30.5301 129.515 30.4811 129.589 30.3996C129.664 30.3182 129.703 30.2108 129.699 30.1006C129.669 28.6068 129.212 27.1528 128.384 25.9097C127.555 24.6666 126.388 23.6861 125.021 23.0837C123.408 22.3525 121.652 21.9919 119.881 22.0282C118.15 21.9922 116.432 22.3261 114.841 23.0076C113.484 23.5835 112.324 24.5427 111.505 25.7676C110.714 26.995 110.307 28.4302 110.335 29.8901C110.289 31.4903 110.773 33.0608 111.712 34.3575C112.632 35.5991 113.987 36.5513 115.776 37.214L120.609 39.0939C121.835 39.5676 122.685 40.0548 123.159 40.5558C123.645 41.0946 123.9 41.8039 123.866 42.5293C123.89 42.9412 123.817 43.3529 123.654 43.7319C123.491 44.111 123.243 44.4469 122.928 44.7133C122.302 45.2259 121.414 45.4822 120.264 45.4822C118.909 45.4842 117.842 45.0739 117.063 44.2514C116.347 43.5087 115.957 42.501 115.893 41.2282C115.887 41.1235 115.842 41.025 115.766 40.9527C115.689 40.8805 115.589 40.8399 115.484 40.8394H110.078C109.968 40.8439 109.864 40.8916 109.789 40.9721C109.714 41.0525 109.674 41.1592 109.677 41.2692Z"/>
                  <path d="M47.4132 20.5837C47.4132 20.1869 47.0164 19.7901 46.4597 19.6314L39.788 17.1724C38.6769 16.6963 37.4061 17.2518 37.4061 18.0465V45.9999C37.4061 46.3967 37.8029 46.8728 38.1997 47.0316L45.0302 49.4906C46.0629 49.8874 47.4132 49.3319 47.4132 48.4578V20.5837Z"/>
                </svg>
              </a>

              {/* Navigation */}
              <nav role="navigation" aria-label="enhanced menu" className="hidden flex-1 items-center xl:flex h-full py-0">
                <ul className="flex h-full w-full items-center xl:space-x-4 h-full py-0">
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 !mx-3">
                    <button className="group mt-[4px] inline-flex items-center rounded-md text-base text-gray-600 hover:text-teal-600 focus:outline-1 focus:outline-teal-600">
                      Business
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-5 w-5 text-gray-600 transition duration-150 ease-in-out group-hover:text-teal-600">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 !mx-3">
                    <button className="group mt-[4px] inline-flex items-center rounded-md text-base text-gray-600 hover:text-teal-600 focus:outline-1 focus:outline-teal-600">
                      Personal
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-5 w-5 text-gray-600 transition duration-150 ease-in-out group-hover:text-teal-600">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 !mx-3">
                    <button className="group mt-[4px] inline-flex items-center rounded-md text-base text-gray-600 hover:text-teal-600 focus:outline-1 focus:outline-teal-600">
                      Why Dashlane
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-5 w-5 text-gray-600 transition duration-150 ease-in-out group-hover:text-teal-600">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 !mx-3">
                    <button className="group mt-[4px] inline-flex items-center rounded-md text-base text-gray-600 hover:text-teal-600 focus:outline-1 focus:outline-teal-600">
                      Partners
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-5 w-5 text-gray-600 transition duration-150 ease-in-out group-hover:text-teal-600">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 !mx-3">
                    <button className="group mt-[4px] inline-flex items-center rounded-md text-base text-gray-600 hover:text-teal-600 focus:outline-1 focus:outline-teal-600">
                      Resources
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-5 w-5 text-gray-600 transition duration-150 ease-in-out group-hover:text-teal-600">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 !mx-3">
                    <a href="/pricing" className="mt-[4px] inline-flex items-center text-base text-gray-600 hover:text-emerald-600 hover:no-underline focus:outline-1 focus:outline-teal-600">
                      Pricing
                    </a>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 !ml-auto !mr-6">
                    <a href="https://app.dashlane.com/" className="mt-[4px] inline-flex items-center text-base text-gray-600 hover:text-emerald-600 hover:no-underline focus:outline-1 focus:outline-teal-600">
                      Log in
                    </a>
                  </li>
                </ul>
              </nav>

              {/* CTA Buttons - Fixed to match original */}
              <div className="ms-auto flex grow items-center justify-end space-x-2 xl:grow-0">
                <div className="flex flex-col justify-end md:flex md:flex-row">
                  <a href="/business-password-manager/enterprise" className="mt-0 hidden xl:block focus:outline-1 focus:outline-teal-600 rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center px-3.5 py-2.5 text-sm text-white fill-white border border-solid border-transparent md:w-auto md:inline-block w-full block text-center justify-center" style={{backgroundColor: '#0F766E'}}>
                    <span className="inline-block">Contact Sales</span>
                  </a>
                  <a href="/business-password-manager/try" className="hidden xl:block focus:outline-1 focus:outline-teal-600 mt-2 md:mt-0 md:ms-4 rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center px-3.5 py-2.5 text-sm bg-white hover:bg-gray-50 active:bg-gray-100 border border-solid md:w-auto md:inline-block w-full block text-center justify-center" style={{color: '#0F766E', borderColor: '#0F766E'}}>
                    <span className="inline-block">Start free trial</span>
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <nav role="navigation" aria-label="enhanced menu" className="flex items-center xl:hidden">
                  <div className="item ml-2 xl:hidden">
                    <button className="inline-flex items-center justify-center rounded-md p-2 pe-0 text-teal-600 hover:text-emerald-600">
                      <span className="sr-only">Open menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" tabIndex={-1} className="flex w-full flex-col">
        <article className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8">
          
          {/* Hero Section - Exact Dashlane gradient and colors */}
          <section 
            className="w-bleed-full max-w-none pt-0 pb-0"
            style={{
              background: 'linear-gradient(135deg, #0F2027 0%, #203A43 25%, #2C5364 50%, #0F766E 75%, #059669 100%)',
              backgroundImage: "url('https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/new-hp-hero-mobile-bg-slash.png')",
              backgroundSize: '90%',
              backgroundPosition: '100% 93%',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between mx-auto px-6 md:px-12 py-20">
              <div className="w-full md:w-1/2 z-10">
                <h1 className="pb-2.5 mb-4 md:mb-6 text-5xl md:text-6xl font-medium text-white">
                  One platform. Complete credential security.
                </h1>
                <p className="text-lg md:text-xl font-normal mb-8 max-w-[600px] text-white">
                  Dashlane Omnix unifies Password Management and Credential Protection in one intelligent platform.
                </p>
                <div className="flex flex-col sm:flex-row mt-8 md:mt-10 gap-4">
                  <a href="/business-password-manager/platform" className="rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center text-lg px-6 py-3 bg-white hover:bg-gray-50 active:bg-gray-100 md:w-auto w-full text-center justify-center" style={{color: '#0F766E'}}>
                    <span className="inline-block">Contact Sales</span>
                  </a>
                  <a href="/demo" className="rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center text-lg px-6 py-3 hover:opacity-90 active:opacity-80 text-white border border-solid border-transparent md:w-auto w-full text-center justify-center" style={{backgroundColor: '#0F766E'}}>
                    <span className="inline-block">Watch a demo</span>
                  </a>
                </div>
              </div>
              
              {/* Larger Custom Image */}
              <div className="w-full md:w-1/2 mt-0 z-10 flex justify-center md:justify-end">
                <img 
                  src="https://i.ibb.co/qYY4T1Gb/dashlane-website.png" 
                  alt="Dashlane Platform Interface" 
                  className="rounded-lg max-w-full h-auto shadow-2xl"
                  style={{
                    width: '800px',
                    height: 'auto',
                    maxWidth: '100%'
                  }}
                />
              </div>
            </div>
          </section>

          {/* Logo Carousel Section - Fixed background color */}
          <section className="w-bleed-full max-w-none pb-8 pt-5" style={{backgroundColor: '#0F766E'}}>
            <div className="w-bleed-full max-w-none">
              <div className="max-h[124] w-full overflow-hidden">
                <p className="uppercase mb-2 md:mb-4 text-base hidden pt-6 text-center md:block text-gray-300">
                  trusted by top enterprises
                </p>
                <div className="flex w-max flex-nowrap items-center justify-center gap-10 md:hover:[animation-play-state:paused] animate-logo-slide-carousel-no-edges mt-4 md:mt-6 pb-4">
                  {/* Logo images */}
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Air France" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/Airfrance.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Amnesty International" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/amnesty_logo.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="BBC Studios" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/bbc-studios.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Best Western" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/best-western.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Cineplex" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/cineplex-1.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Consero" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/consero-1-1.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Crane" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/crane-1.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Hearst" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/hearst.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Hyatt" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/hyatt.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Michelin" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/michelin.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="National Life Group" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/national-life-group.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Symrise" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/symrise.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="TransUnion" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/transunion.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Twinings" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/twinings.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="WWF" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/wwf.png"/>
                    </figure>
                  </div>
                  {/* Duplicate logos for seamless loop */}
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Air France" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/Airfrance.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Amnesty International" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/amnesty_logo.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="BBC Studios" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/bbc-studios.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Best Western" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/best-western.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Cineplex" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/cineplex-1.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Consero" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/consero-1-1.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Crane" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/crane-1.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Hearst" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/hearst.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Hyatt" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/hyatt.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Michelin" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/michelin.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="National Life Group" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/national-life-group.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Symrise" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/symrise.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="TransUnion" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/transunion.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="Twinings" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/twinings.png"/>
                    </figure>
                  </div>
                  <div className="text-center h-10">
                    <figure className="w-full inline-block white-image h-10 relative">
                      <img alt="WWF" loading="lazy" className="!relative h-10 object-contain" src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/wwf.png"/>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dashlane Omnix Section */}
          <section className="w-bleed-full max-w-none pt-[60px] pb-[60px]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="md:mx-auto md:max-w-xl">
                <h2 className="md:text-center mb-4 md:mb-6 text-3xl md:text-4xl font-medium" style={{color: '#0F766E'}}>
                  Dashlane Omnix
                </h2>
                <p className="md:text-center mb-8 md:mb-10 text-gray-600">
                  Intelligent credential security in one platform
                </p>
              </div>
              <div className="w-bleed-full max-w-none pt-[60px] pb-[60px] bg-white">
                <div className="md:grid md:gap-8 md:w-auto grid gap-8 grid-cols-1 md:grid-cols-2">
                  <div className="me-[24px] shrink-0 w-[75vw] md:w-[50vw] md:me-auto md:w-full me-auto w-full border-gray-300">
                    <div>
                      <figure className="mb-6 md:mb-8 relative aspect-[3/2]">
                        <img 
                          alt="This image shows Credential Risk Detection and Insights, a key feature of Dashlane Omnix." 
                          loading="lazy" 
                          className="rounded object-cover w-full h-full" 
                          src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/Omnix-Credential-Protection-HP.png"
                        />
                      </figure>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="mb-4 inline-block rounded px-3 py-1 text-[12px] uppercase bg-teal-50" style={{color: '#0F766E'}}>
                        credential protection
                      </span>
                    </div>
                    <h3 className="leading-[30px] mb-2 font-medium text-2xl" style={{color: '#0F766E'}}>
                      Turn risk insights into action
                    </h3>
                    <div>
                      <p className="text-gray-600 md:text-base">
                        Omnix pairs always-on intelligence with targeted actions so you can combat the #1 breach threat: Human risk.
                      </p>
                    </div>
                  </div>
                  <div className="me-[24px] shrink-0 w-[75vw] md:w-[50vw] md:me-auto md:w-full me-auto w-full border-gray-300">
                    <div>
                      <figure className="mb-6 md:mb-8 relative aspect-[3/2]">
                        <img 
                          alt="This image shows examples of credentials an employee can securely store in a Dashlane vault." 
                          loading="lazy" 
                          className="rounded object-cover w-full h-full" 
                          src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/Omnix-Credential-Management-HP.png"
                        />
                      </figure>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="mb-4 inline-block rounded px-3 py-1 text-[12px] uppercase bg-teal-50" style={{color: '#0F766E'}}>
                        PASSWORD management
                      </span>
                    </div>
                    <h3 className="leading-[30px] mb-2 font-medium text-2xl" style={{color: '#0F766E'}}>
                      Secure employee access
                    </h3>
                    <div>
                      <p className="text-gray-600 md:text-base">
                        Stay in control of shadow IT while equipping every employee with a secure browser-based vault for all their credentials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-10 flex flex-col justify-center md:flex md:flex-row">
                <a href="/omnix" className="rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center text-lg px-5 py-3 hover:opacity-90 active:opacity-80 disabled:opacity-10 text-white fill-white border border-solid border-transparent md:w-auto md:inline-block w-full block text-center justify-center" style={{backgroundColor: '#0F766E'}}>
                  <span className="inline-block">Learn more</span>
                </a>
              </div>
            </div>
          </section>

          {/* Secure Cloud Section - Fixed background color */}
          <section className="w-bleed-full max-w-none pt-[60px] pb-[60px]" style={{backgroundColor: '#0F766E'}}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-20">
                <div>
                  <p className="uppercase mb-2 md:mb-4 text-base text-gray-300">Built-in security</p>
                  <h2 className="text-4xl mb-4 md:mb-6 text-white">Protected by Dashlane Secure Cloud</h2>
                  <p className="text-gray-300">
                    Dashlane Secure Cloud combines the strength of zero-knowledge architecture with confidential computing to keep business data secure and encrypted.
                  </p>
                </div>
                <div className="mt-6 lg:mt-0">
                  <figure className="relative aspect-[3/2]">
                    <img 
                      alt="This image conceptually illustrates the building blocks of Dashlane's security architecture." 
                      loading="lazy" 
                      className="rounded object-cover w-full h-full" 
                      src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/Dashlane-Secure-Cloud.png"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Section */}
          <section className="w-bleed-full max-w-none bg-teal-50 pt-[60px] pb-[60px]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex flex-wrap items-center items-stretch justify-between rounded border border-solid border-gray-300 lg:flex-nowrap">
                <div className="p-5 grow flex items-center justify-center border-solid border-t-[1px] border-r-0 border-b-0 border-gray-300 w-full lg:w-full w-1/2 lg:border-l-[1px] lg:border-t-0 lg:border-r-0 lg:border-b-0">
                  <figure className="w-full h-[70px] relative">
                    <img 
                      alt="GDPR Compliant" 
                      loading="lazy" 
                      className="rounded object-contain w-full h-full" 
                      src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/gdpr-compliant-1.png"
                    />
                  </figure>
                </div>
                <div className="p-5 grow flex items-center justify-center border-solid border-t-[1px] border-r-0 border-b-0 border-gray-300 w-full lg:w-full w-1/2 lg:border-l-[1px] lg:border-t-0 lg:border-r-0 lg:border-b-0 border-l-[1px]">
                  <figure className="w-full h-[70px] relative">
                    <img 
                      alt="ISO 27001 Certified" 
                      loading="lazy" 
                      className="rounded object-contain w-full h-full" 
                      src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/schellman_iso27001_seal_grey_CMYK_300dpi_jpg.png"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>

        </article>
      </main>
    </div>
  )
}
