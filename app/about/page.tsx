'use client';

import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        /* Font Imports */
        @font-face{font-family:'Public Sans';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuFpm5wA.woff) format('woff')}
        @font-face{font-family:'Public Sans';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuyJ65wA.woff) format('woff')}
        @font-face{font-family:'Public Sans';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/publicsans/v20/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymu8Z65wA.woff) format('woff')}

        body {
          margin: 0;
          font-family: 'Public Sans', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #fff;
        }

        /* Utilities */
        .sticky { position: sticky; }
        .top-0 { top: 0; }
        .z-30 { z-index: 30; }
        .z-50 { z-index: 50; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .justify-end { justify-content: flex-end; }
        .text-center { text-align: center; }
        .text-left { text-align: left; }
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .h-6 { height: 1.5rem; }
        .h-5 { height: 1.25rem; }
        .w-6 { width: 1.5rem; }
        .w-5 { width: 1.25rem; }
        .max-w-7xl { max-width: 80rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .px-3\\.5 { padding-left: 0.875rem; padding-right: 0.875rem; }
        .py-2\\.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .mt-12 { margin-top: 3rem; }
        .mt-2 { margin-top: 0.5rem; }
        .ml-1 { margin-left: 0.25rem; }
        .ml-2 { margin-left: 0.5rem; }
        .mr-3 { margin-right: 0.75rem; }
        .ms-auto { margin-left: auto; }
        .space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.5rem; }
        .space-x-4 > :not([hidden]) ~ :not([hidden]) { margin-left: 1rem; }
        .space-x-6 > :not([hidden]) ~ :not([hidden]) { margin-left: 1.5rem; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        .gap-8 { gap: 2rem; }
        .gap-12 { gap: 3rem; }
        .gap-6 { gap: 1.5rem; }
        .block { display: block; }
        .inline-block { display: inline-block; }
        .inline-flex { display: inline-flex; }
        .hidden { display: none; }
        .no-underline { text-decoration: none; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .uppercase { text-transform: uppercase; }
        .leading-tight { line-height: 1.25; }
        .leading-relaxed { line-height: 1.625; }
        .cursor-pointer { cursor: pointer; }
        .rounded-md { border-radius: 0.375rem; }
        .border { border-width: 1px; }
        .border-solid { border-style: solid; }
        .border-transparent { border-color: transparent; }
        .border-b-2 { border-bottom-width: 2px; }
        .border-b-transparent { border-bottom-color: transparent; }
        .transition-colors { transition-property: background-color, border-color, color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 0.5s; }
        .min-w-fit { min-width: fit-content; }
        .grow { flex-grow: 1; }
        .grow-0 { flex-grow: 0; }
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .p-2 { padding: 0.5rem; }
        .pe-0 { padding-right: 0; }
        .focus\\:outline-1:focus { outline-width: 1px; outline-style: solid; }

        /* Header specific */
        .header-height { height: 60px; }
        .header-bg { background-color: #fff; border-bottom: 1px solid #e2e8f0; }

        /* Colors - Exact match from image */
        .bg-teal-dark { background-color: #1a5c5f; }
        .text-white { color: #ffffff !important; }
        .text-gray-600 { color: #6b7280; }
        .text-gray-700 { color: #374151; }
        .text-gray-300 { color: #d1d5db; }
        .text-blue-600 { color: #2563eb; }
        .text-blue-800 { color: #1e40af; }
        .bg-blue-600 { background-color: #2563eb; }
        .bg-blue-700 { background-color: #1d4ed8; }
        .bg-white { background-color: #fff; }
        .border-blue-600 { border-color: #2563eb; }
        .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
        .hover\\:bg-gray-50:hover { background-color: #f9fafb; }
        .hover\\:text-blue-800:hover { color: #1e40af; }
        .hover\\:text-gray-300:hover { color: #d1d5db; }
        .hover\\:border-b-blue-800:hover { border-bottom-color: #1e40af; }
        .hover\\:border-b-2:hover { border-bottom-width: 2px; }

        /* Typography */
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl { font-size: 3rem; line-height: 1.2; }
        .text-6xl { font-size: 3.75rem; line-height: 1; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-base { font-size: 1rem; line-height: 1.5rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-xs { font-size: 0.75rem; line-height: 1rem; }

        .\!mx-3 { margin-left: 0.75rem !important; margin-right: 0.75rem !important; }
        .\!ml-auto { margin-left: auto !important; }
        .\!mr-6 { margin-right: 1.5rem !important; }

        /* Responsive */
        @media (min-width: 768px) {
          .md\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
          .md\\:py-20 { padding-top: 5rem; padding-bottom: 5rem; }
          .md\\:py-16 { padding-top: 4rem; padding-bottom: 4rem; }
          .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
          .md\\:text-7xl { font-size: 4.5rem; line-height: 1; }
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .md\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
          .md\\:mr-12 { margin-right: 3rem; }
          .md\\:w-auto { width: auto; }
          .md\\:inline-block { display: inline-block; }
          .md\\:mt-0 { margin-top: 0; }
          .md\\:ms-4 { margin-left: 1rem; }
          .md\\:flex { display: flex; }
          .md\\:flex-row { flex-direction: row; }
        }

        @media (min-width: 1024px) {
          .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
          .lg\\:py-24 { padding-top: 6rem; padding-bottom: 6rem; }
          .lg\\:text-7xl { font-size: 4.5rem; line-height: 1; }
          .lg\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        }

        @media (min-width: 1280px) {
          .xl\\:flex { display: flex; }
          .xl\\:space-x-4 > *:not([hidden]) ~ *:not([hidden]) { margin-left: 1rem; }
          .xl\\:hidden { display: none; }
          .xl\\:block { display: block; }
          .xl\\:grow-0 { flex-grow: 0; }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-30">
        <div className="header-bg">
          <div className="px-4 md:px-8">
            <div className="relative flex w-full items-center header-height">
              <a 
                className="mr-3 inline-flex items-center focus:outline-1 md:mr-12" 
                href="/"
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
                  <path d="M34.9437 10.8159C34.9437 10.4179 34.5469 10.0211 33.9903 9.86243L27.3197 7.40342C26.2075 6.92726 24.9367 7.48278 24.9367 8.27748V25.2704C24.9367 25.6672 25.3334 26.1433 25.7302 26.3032L32.5607 28.7622C33.5935 29.1601 34.9437 28.6035 34.9437 27.7305V10.8159Z"/>
                  <path d="M34.9437 41.3926C34.9437 40.9958 34.5469 40.5990 33.9903 40.4403L27.3197 37.9813C26.2075 37.5051 24.9367 38.0606 24.9367 38.8553V55.8482C24.9367 56.2450 25.3334 56.7212 25.7302 56.8799L32.5607 59.3389C33.5935 59.7368 34.9437 59.1802 34.9437 58.3061V41.3926Z"/>
                  <path d="M22.4743 44.8084C22.4743 44.4116 22.0775 44.0137 21.5209 43.8550L14.8502 41.3959C13.7325 40.9198 12.4672 41.4753 12.4672 42.2700V60.3773C12.4672 60.7741 12.8640 61.2514 13.2608 61.4101L20.0913 63.8691C21.1241 64.2670 22.4743 63.7104 22.4743 62.8374V44.8084Z"/>
                  <path d="M22.4743 3.58747C22.4743 3.19068 22.0775 2.79388 21.5209 2.63516L14.8502 0.176148C13.7325 -0.300007 12.4672 0.255506 12.4672 1.05022V19.1575C12.4672 19.5554 12.8640 20.0316 13.2608 20.1903L20.0913 22.6493C21.1241 23.0461 22.4743 22.4906 22.4743 21.6165V3.58747Z"/>
                  <path d="M10.0071 4.30282C10.0071 3.90603 9.61028 3.50811 9.05365 3.34940L2.38301 0.890380C1.27086 0.414225 0 0.969740 0 1.76445V59.7402C0 60.1370 0.396801 60.6131 0.794714 60.7719L7.62407 63.2309C8.65685 63.6277 10.0071 63.0722 10.0071 62.1981V4.30282Z"/>
                </svg>
              </a>
              
              <nav role="navigation" aria-label="enhanced menu" className="hidden flex-1 items-center xl:flex h-full py-0">
                <ul className="flex h-full w-full items-center xl:space-x-4 h-full py-0">
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-800 !mx-3">
                    <button 
                      className="group inline-flex items-center rounded-md text-base text-gray-600 hover:text-blue-800" 
                      type="button"
                    >
                      Business
                      <svg className="ml-1 h-5 w-5 text-gray-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-800 !mx-3">
                    <button 
                      className="group inline-flex items-center rounded-md text-base text-gray-600 hover:text-blue-800" 
                      type="button"
                    >
                      Personal
                      <svg className="ml-1 h-5 w-5 text-gray-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-800 !mx-3">
                    <button 
                      className="group inline-flex items-center rounded-md text-base text-gray-600 hover:text-blue-800" 
                      type="button"
                    >
                      Why Dashlane
                      <svg className="ml-1 h-5 w-5 text-gray-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-800 !mx-3">
                    <button 
                      className="group inline-flex items-center rounded-md text-base text-gray-600 hover:text-blue-800" 
                      type="button"
                    >
                      Partners
                      <svg className="ml-1 h-5 w-5 text-gray-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-800 !mx-3">
                    <button 
                      className="group inline-flex items-center rounded-md text-base text-gray-600 hover:text-blue-800" 
                      type="button"
                    >
                      Resources
                      <svg className="ml-1 h-5 w-5 text-gray-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-800 !mx-3">
                    <a 
                      className="inline-flex items-center text-base text-gray-600 hover:text-blue-600 hover:no-underline" 
                      href="/pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-800 !ml-auto !mr-6">
                    <a 
                      className="inline-flex items-center text-base text-gray-600 hover:text-blue-600 hover:no-underline" 
                      href="/login"
                    >
                      Log in
                    </a>
                  </li>
                </ul>
              </nav>
              
              <div className="ms-auto flex grow items-center justify-end space-x-2 xl:grow-0">
                <div className="flex flex-col justify-end md:flex md:flex-row">
                  <a 
                    className="mt-0 hidden xl:block rounded-md cursor-pointer hover:no-underline transition-colors min-w-fit flex items-center px-3.5 py-2.5 text-sm bg-blue-600 hover:bg-blue-700 text-white border border-solid border-transparent md:w-auto md:inline-block w-full block text-center justify-center" 
                    href="/contact-sales"
                  >
                    <span className="inline-block">Contact Sales</span>
                  </a>
                  <a 
                    className="hidden xl:block mt-2 md:mt-0 md:ms-4 rounded-md cursor-pointer hover:no-underline transition-colors min-w-fit flex items-center px-3.5 py-2.5 text-sm bg-white hover:bg-gray-50 text-blue-600 border border-solid border-blue-600 md:w-auto md:inline-block w-full block text-center justify-center" 
                    href="/free-trial"
                  >
                    <span className="inline-block">Start free trial</span>
                  </a>
                </div>
                
                <nav role="navigation" aria-label="enhanced menu" className="flex items-center xl:hidden">
                  <div className="item ml-2 xl:hidden">
                    <button 
                      className="inline-flex items-center justify-center rounded-md p-2 pe-0 text-blue-600 hover:text-blue-800" 
                      type="button"
                    >
                      <span className="sr-only">Open menu</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Left Aligned */}
      <section className="bg-teal-dark py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-8">
              The intelligent<br />
              credential security<br />
              platform
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dashlane provides complete credential security, protecting businesses against the threat of human risk. Our intelligent Omnix™ platform unifies credential protection and password management, equipping security teams with proactive intelligence, real-time response, and protected access to secure every employee. Over 25,000 brands worldwide, including leading enterprises such as Michelin, Sephora, Air France, and Forrester, trust Dashlane for industry-leading innovations, patented zero-knowledge security, and an unmatched user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
            {/* DASHLANE OMNIX™ */}
            <div>
              <h3 className="text-xs font-semibold text-gray-300 uppercase mb-6">
                DASHLANE OMNIX™
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Platform overview</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Credential Protection</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Password Management</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Dashlane Secure Cloud</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Contact Sales</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Request a demo</a></li>
              </ul>
            </div>

            {/* FEATURES */}
            <div>
              <h3 className="text-xs font-semibold text-gray-300 uppercase mb-6">
                FEATURES
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Autofill</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Dark Web Monitoring</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Passkeys</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Password Generator</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Passwordless</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Proactive credential security</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">SSO integration</a></li>
              </ul>
            </div>

            {/* CUSTOMER SUPPORT */}
            <div>
              <h3 className="text-xs font-semibold text-gray-300 uppercase mb-6">
                CUSTOMER SUPPORT
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Support Center</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Get started</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Account & security</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Apps & devices</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Logins & data</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">For admins</a></li>
              </ul>
            </div>

            {/* COMPANY + LOG IN */}
            <div>
              <h3 className="text-xs font-semibold text-gray-300 uppercase mb-6">
                COMPANY
              </h3>
              <ul className="space-y-3 mb-8">
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">About Dashlane</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Our leadership</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Careers at Dashlane</a></li>
              </ul>
              
              <h3 className="text-xs font-semibold text-gray-300 uppercase mb-6">
                LOG IN
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Personal App</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Admin Console</a></li>
              </ul>
            </div>

            {/* DOWNLOAD + BLOG */}
            <div>
              <h3 className="text-xs font-semibold text-gray-300 uppercase mb-6">
                DOWNLOAD
              </h3>
              <ul className="space-y-3 mb-8">
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">For iOS</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">For Android</a></li>
              </ul>
              
              <h3 className="text-xs font-semibold text-gray-300 uppercase mb-6">
                BLOG
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">What's new</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 no-underline block text-sm">Data & culture</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
