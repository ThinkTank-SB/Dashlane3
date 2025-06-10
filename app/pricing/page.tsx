'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="scroll-pt-[132px] scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-30">
        <div className="bg-white border-b border-gray-200">
          <div className="px-4 md:px-8">
            <div className="relative flex w-full items-center h-[60px]">
              {/* Logo */}
              <Link 
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
              </Link>

              {/* Navigation */}
              <nav role="navigation" aria-label="enhanced menu" className="hidden flex-1 items-center xl:flex h-full py-0">
                <ul className="flex h-full w-full items-center xl:space-x-4 h-full py-0">
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 mx-3">
                    <button className="group mt-[4px] inline-flex items-center rounded-md text-base text-gray-600 hover:text-teal-600 focus:outline-1 focus:outline-teal-600">
                      Business
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-5 w-5 text-gray-600 transition duration-150 ease-in-out group-hover:text-teal-600">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 mx-3">
                    <button className="group mt-[4px] inline-flex items-center rounded-md text-base text-gray-600 hover:text-teal-600 focus:outline-1 focus:outline-teal-600">
                      Personal
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-5 w-5 text-gray-600 transition duration-150 ease-in-out group-hover:text-teal-600">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 mx-3">
                    <button className="group mt-[4px] inline-flex items-center rounded-md text-base text-gray-600 hover:text-teal-600 focus:outline-1 focus:outline-teal-600">
                      Why Dashlane
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-5 w-5 text-gray-600 transition duration-150 ease-in-out group-hover:text-teal-600">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 mx-3">
                    <button className="group mt-[4px] inline-flex items-center rounded-md text-base text-gray-600 hover:text-teal-600 focus:outline-1 focus:outline-teal-600">
                      Partners
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-5 w-5 text-gray-600 transition duration-150 ease-in-out group-hover:text-teal-600">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 mx-3">
                    <button className="group mt-[4px] inline-flex items-center rounded-md text-base text-gray-600 hover:text-teal-600 focus:outline-1 focus:outline-teal-600">
                      Resources
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-5 w-5 text-gray-600 transition duration-150 ease-in-out group-hover:text-teal-600">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 mx-3">
                    <Link href="/pricing" className="mt-[4px] inline-flex items-center text-base text-gray-600 hover:text-emerald-600 hover:no-underline focus:outline-1 focus:outline-teal-600">
                      Pricing
                    </Link>
                  </li>
                  <li className="flex h-full cursor-pointer items-center border-b-2 border-b-transparent hover:border-b-2 hover:border-b-teal-600 ml-auto mr-6">
                    <Link href="https://app.dashlane.com/" className="mt-[4px] inline-flex items-center text-base text-gray-600 hover:text-emerald-600 hover:no-underline focus:outline-1 focus:outline-teal-600">
                      Log in
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* CTA Buttons */}
              <div className="ms-auto flex grow items-center justify-end space-x-2 xl:grow-0">
                <div className="flex flex-col justify-end md:flex md:flex-row">
                  <Link 
                    href="/business-password-manager/enterprise" 
                    className="mt-0 hidden xl:block focus:outline-1 focus:outline-teal-600 rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center px-3.5 py-2.5 text-sm text-white fill-white border border-solid border-transparent md:w-auto md:inline-block w-full block text-center justify-center bg-teal-700"
                  >
                    <span className="inline-block">Contact Sales</span>
                  </Link>
                  <Link 
                    href="/business-password-manager/try" 
                    className="hidden xl:block focus:outline-1 focus:outline-teal-600 mt-2 md:mt-0 md:ms-4 rounded-md cursor-pointer hover:no-underline transition-colors duration-500 min-w-fit flex items-center px-3.5 py-2.5 text-sm bg-white hover:bg-gray-50 active:bg-gray-100 border border-solid md:w-auto md:inline-block w-full block text-center justify-center text-teal-700 border-teal-700"
                  >
                    <span className="inline-block">Start free trial</span>
                  </Link>
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
          
          {/* Hero Section */}
          <section className="w-full max-w-none pt-8 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h1 className="md:w-[623px] m-auto text-center text-5xl md:text-6xl font-medium text-slate-800 mb-4 md:mb-6">
                Choose your plan
              </h1>
              
              {/* Toggle Switch */}
              <div className="mb-4 flex justify-center md:mb-12">
                <div className="mx-auto inline-block rounded-full bg-teal-50 p-1.5">
                  <span className="inline-block h-10 w-[164px] leading-10 text-center rounded-full text-white bg-teal-600">
                    Business
                  </span>
                  <Link className="inline-block h-10 w-[164px] leading-10 text-center rounded-full text-slate-800" href="/pricing-personal">
                    Personal
                  </Link>
                </div>
              </div>
              
              {/* Pricing Cards Container */}
              <div className="relative overflow-hidden">
                <div className="relative flex w-full transition-all duration-500 ease-out opacity-100">
                  
                  {/* Omnix Card */}
                  <div className="flex items-stretch w-full md:w-1/3 me-[24px] shrink-0">
                    <div className="w-full p-8 border border-solid border-teal-200 rounded bg-slate-800 relative mt-4 md:mt-0">
                      {/* NEW PLATFORM Badge */}
                      <div className="absolute left-[-1px] top-[-40px] w-[calc(100%+2px)] rounded-t-md border py-3 text-center bg-teal-200 border-teal-200 text-slate-800">
                        <span className="text-sm font-medium">NEW PLATFORM</span>
                      </div>
                      
                      <div>
                        <span className="inline-block rounded py-1.5 px-2.5 font-medium text-xs uppercase mb-2 bg-slate-700 text-white">
                          intelligent credential security
                        </span>
                        <h2 className="mb-2 text-white text-2xl md:text-3xl font-medium mt-2">Omnix™</h2>
                        <p className="text-sm lg:text-base mb-4 md:mb-6 text-white">
                          Password management plus credential protection for enterprises
                        </p>
                        
                        {/* Pricing */}
                        <div className="mb-2 flex flex-wrap items-center">
                          <span className="text-4xl font-medium text-white">
                            <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mt-[-4px] inline-block" fill="white">
                              <path fillRule="evenodd" clipRule="evenodd" d="M20.0002 19.0002L22 19.0002V5.00018H2V19.0002L18.2002 19.0002L17.0002 17.0002L4 17.0002L4 7.86845L12 13.2018L20 7.86855L20.0002 19.0002ZM17.697 7.00018L12 10.7981L6.30312 7.00018L17.697 7.00018Z"/>
                            </svg>
                          </span>
                        </div>
                        <span className="text-sm md:text-base block text-white">Contact for pricing</span>
                        <span className="text-sm md:text-base block text-white">Billed annually for organizations of 100+</span>
                        
                        {/* CTA Buttons */}
                        <div className="mt-4 md:mt-6 flex flex-col justify-start">
                          <Link className="rounded-md cursor-pointer bg-white hover:bg-gray-50 text-slate-800 px-4 py-3 text-center mb-2" href="/contact-sales">
                            Contact Sales
                          </Link>
                          <Link className="rounded-md cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 text-center" href="/trial">
                            Try free for 14 days
                          </Link>
                        </div>
                      </div>
                      
                      {/* Features List */}
                      <div className="mt-8 md:mt-10">
                        {[
                          'Proactive intelligence',
                          'Real-time response', 
                          'Password & passkey management',
                          'Automated phishing alerts',
                          'New! Advanced Credential Risk Insights',
                          'New! In-browser security alerts'
                        ].map((feature, index) => (
                          <div key={index} className="mb-3 flex items-center">
                            <span className="min-w-fit w-3.5">
                              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="inline-block" fill="white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                              </svg>
                            </span>
                            <span className="ms-5">
                              <p className="text-sm md:text-base my-0 text-white">{feature}</p>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Business Card */}
                  <div className="flex items-stretch w-full md:w-1/3 me-[24px] shrink-0">
                    <div className="w-full p-8 border border-solid border-gray-300 rounded bg-white">
                      <span className="inline-block rounded py-1.5 px-2.5 font-medium text-xs uppercase mb-2 bg-gray-50 text-slate-800">
                        password management
                      </span>
                      <h2 className="mb-2 text-slate-800 text-2xl md:text-3xl font-medium mt-2">Business</h2>
                      <p className="text-sm lg:text-base mb-4 md:mb-6 text-gray-600">For midsize organizations</p>
                      
                      <div className="mb-2 flex flex-wrap items-center">
                        <span className="text-4xl font-medium text-slate-800">$8</span>
                      </div>
                      <span className="text-sm md:text-base block text-slate-800">Per user/month</span>
                      <span className="text-sm md:text-base block text-slate-800">Billed annually</span>
                      
                      <div className="mt-4 md:mt-6 flex flex-col justify-start">
                        <Link className="rounded-md cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 text-center mb-2" href="/buy">
                          Buy now
                        </Link>
                        <Link className="rounded-md cursor-pointer bg-white hover:bg-gray-50 text-slate-800 border border-teal-600 px-4 py-3 text-center" href="/trial">
                          Try free for 14 days
                        </Link>
                      </div>
                      
                      <div className="mt-8 md:mt-10">
                        {[
                          'Everything in Standard',
                          'Secure an unlimited number of users',
                          'Granular sharing controls',
                          'Expanded monitoring & logs',
                          'SSO & SCIM integrations'
                        ].map((feature, index) => (
                          <div key={index} className="mb-3 flex items-center">
                            <span className="min-w-fit w-3.5">
                              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="inline-block" fill="#059669">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                              </svg>
                            </span>
                            <span className="ms-5">
                              <p className="text-sm md:text-base my-0 text-slate-800">{feature}</p>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Standard Card */}
                  <div className="flex items-stretch w-full md:w-1/3 me-[24px] shrink-0">
                    <div className="w-full p-8 border border-solid border-gray-300 rounded bg-white">
                      <span className="inline-block rounded py-1.5 px-2.5 font-medium text-xs uppercase mb-2 bg-gray-50 text-slate-800">
                        password management
                      </span>
                      <h2 className="mb-2 text-slate-800 text-2xl md:text-3xl font-medium mt-2">Standard</h2>
                      <p className="text-sm lg:text-base mb-4 md:mb-6 text-gray-600">For small businesses</p>
                      
                      <div className="mb-2 flex flex-wrap items-center">
                        <span className="text-4xl font-medium text-slate-800">$3</span>
                      </div>
                      <span className="text-sm md:text-base block text-slate-800">Per month for 10 users</span>
                      <span className="text-sm md:text-base block text-slate-800">Billed annually</span>
                      
                      <div className="mt-4 md:mt-6 flex flex-col justify-start">
                        <Link className="rounded-md cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 text-center" href="/buy">
                          Buy now
                        </Link>
                      </div>
                      
                      <div className="mt-8 md:mt-10">
                        {[
                          'Secure up to 10 users',
                          'Unlimited passwords & passkeys',
                          'Basic monitoring & logs',
                          'Intuitive Admin Console',
                          'Password Health score'
                        ].map((feature, index) => (
                          <div key={index} className="mb-3 flex items-center">
                            <span className="min-w-fit w-3.5">
                              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="inline-block" fill="#059669">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                              </svg>
                            </span>
                            <span className="ms-5">
                              <p className="text-sm md:text-base my-0 text-slate-800">{feature}</p>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pagination Dots */}
              <div className="mt-10 items-center justify-center gap-2 flex">
                <div className="h-[8px] w-[8px] cursor-pointer rounded-full opacity-100 bg-slate-800"></div>
                <div className="h-[8px] w-[8px] cursor-pointer rounded-full opacity-10 bg-slate-800"></div>
                <div className="h-[8px] w-[8px] cursor-pointer rounded-full opacity-10 bg-slate-800"></div>
              </div>
            </div>
          </section>
          
 {/* AWS Marketplace Section */}
<section className="bg-gray-50 px-4 md:px-14 mb-6 mt-6 rounded pt-[60px] pb-[60px]">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-20">
      <div>
        <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl font-medium text-slate-800">
          Now available in AWS Marketplace
        </h2>
        <p className="text-gray-600 mb-6">
          Dashlane provides proactive security tools that make it easy to secure every enterprise employee. AWS Marketplace makes it even easier to get started.
        </p>
        <Link className="rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 inline-block" href="/aws-marketplace">
          Visit AWS Marketplace
        </Link>
      </div>
      <div className="order-first lg:order-last">
        <figure className="mb-10 lg:mb-0 relative aspect-[3/1]">
          <Image 
            alt="AWS Marketplace integration" 
            className="rounded object-contain w-full h-full" 
            src="https://i.ibb.co/mCDYTS54/onetemp.png"
            width={400}
            height={200}
          />
        </figure>
      </div>
    </div>
  </div>
</section>
          
          {/* Comparison Table Section */}
          <section className="relative hidden md:block w-full max-w-none pt-8 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h2 className="mb-2 md:mb-4 text-3xl md:text-4xl font-medium text-slate-800 text-center">
                Credential security for all organizations
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Compare features across our business plans
              </p>
              
              <div className="overflow-x-auto lg:overflow-x-visible">
                <table className="w-full table-auto border-collapse">
                  <thead className="z-20">
                    <tr className="table-row">
                      <td className="box-content p-4 min-w-[120px] w-1/4 bg-white sticky left-0 lg:sticky lg:top-[61px] lg:z-20"></td>
                      <td className="align-top box-content p-4 min-w-[120px] w-1/4 bg-white lg:sticky lg:top-[61px] lg:z-20">
                        <h3 className="text-xl font-medium text-slate-800 mb-2">Standard</h3>
                        <div className="mb-2">
                          <span className="text-2xl font-medium text-slate-800">$3</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Per month for 10 users</p>
                        <Link className="rounded-md cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 w-full block text-center mb-2" href="/buy">
                          Buy now
                        </Link>
                        <Link className="rounded-md cursor-pointer bg-white hover:bg-gray-50 text-slate-800 border border-teal-600 px-4 py-3 w-full block text-center" href="/trial">
                          Try free for 14 days
                        </Link>
                      </td>
                      <td className="align-top box-content p-4 min-w-[120px] w-1/4 bg-white lg:sticky lg:top-[61px] lg:z-20">
                        <h3 className="text-xl font-medium text-slate-800 mb-2">Business</h3>
                        <div className="mb-2">
                          <span className="text-2xl font-medium text-slate-800">$8</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Per user/month</p>
                        <Link className="rounded-md cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 w-full block text-center mb-2" href="/buy">
                          Buy now
                        </Link>
                        <Link className="rounded-md cursor-pointer bg-white hover:bg-gray-50 text-slate-800 border border-teal-600 px-4 py-3 w-full block text-center" href="/trial">
                          Try free for 14 days
                        </Link>
                      </td>
                      <td className="align-top box-content p-4 min-w-[120px] w-1/4 bg-white lg:sticky lg:top-[61px] lg:z-20">
                        <h3 className="text-xl font-medium text-slate-800 mb-2">Omnix™</h3>
                        <div className="mb-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#059669">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.0002 19.0002L22 19.0002V5.00018H2V19.0002L18.2002 19.0002L17.0002 17.0002L4 17.0002L4 7.86845L12 13.2018L20 7.86855L20.0002 19.0002ZM17.697 7.00018L12 10.7981L6.30312 7.00018L17.697 7.00018Z"/>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Contact for pricing</p>
                        <Link className="rounded-md cursor-pointer bg-white hover:bg-gray-50 text-slate-800 border border-teal-600 px-4 py-3 w-full block text-center mb-2" href="/contact-sales">
                          Contact Sales
                        </Link>
                        <Link className="rounded-md cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 w-full block text-center" href="/trial">
                          Try free for 14 days
                        </Link>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Key Features Section */}
                    <tr className="table-row border-gray-200 border border-t-0 border-l-0 border-r-0 border-solid">
                      <td className="box-content p-4 bg-white sticky left-0">
                        <span className="text-slate-800 font-medium">Key Features</span>
                      </td>
                      <td className="box-content p-4"></td>
                      <td className="box-content p-4"></td>
                      <td className="box-content p-4"></td>
                    </tr>
                    
                    {/* Feature Rows */}
                    {[
                      { feature: 'Password & passkey management', standard: true, business: true, omnix: true },
                      { feature: 'Number of users', standard: 'Up to 10', business: 'Unlimited', omnix: '100+' },
                      { feature: 'Admin Console', standard: true, business: true, omnix: true },
                      { feature: 'SSO & SCIM integrations', standard: false, business: true, omnix: true },
                      { feature: 'Proactive intelligence', standard: false, business: false, omnix: true },
                      { feature: 'Real-time response', standard: false, business: false, omnix: true }
                    ].map((row, index) => (
                      <tr key={index} className="table-row">
                        <td className="box-content p-4 bg-white sticky left-0">
                          <span className="text-slate-800">{row.feature}</span>
                        </td>
                        <td className="box-content p-4 text-center">
                          {typeof row.standard === 'boolean' ? (
                            row.standard ? (
                              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mx-auto" fill="#059669">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                              </svg>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            <span className="text-slate-800">{row.standard}</span>
                          )}
                        </td>
                        <td className="box-content p-4 text-center">
                          {typeof row.business === 'boolean' ? (
                            row.business ? (
                              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mx-auto" fill="#059669">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                              </svg>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            <span className="text-slate-800">{row.business}</span>
                          )}
                        </td>
                        <td className="box-content p-4 text-center">
                          {typeof row.omnix === 'boolean' ? (
                            row.omnix ? (
                              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mx-auto" fill="#059669">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                              </svg>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            <span className="text-slate-800">{row.omnix}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="pt-8 pb-8">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
              <h2 className="mb-8 text-3xl md:text-4xl font-medium text-slate-800 text-center">
                Frequently asked questions
              </h2>
              
              <div className="space-y-4">
                {[
                  "What's the difference between Standard and Business plans?",
                  "How does the free trial work?",
                  "What makes Omnix™ different?"
                ].map((question, index) => (
                  <div key={index} className="border border-gray-300 rounded-md">
                    <button className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50">
                      <span className="text-slate-800 font-medium">{question}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-800">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/business" className="hover:text-white">Business</Link></li>
                <li><Link href="/personal" className="hover:text-white">Personal</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/security" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <svg role="img" width="127" height="32" viewBox="0 0 243 64" fill="white" xmlns="http://www.w3.org/2000/svg">
                <title>Dashlane Logo</title>
                <path fillRule="evenodd" clipRule="evenodd" d="M109.677 41.2692C109.765 44.0779 110.696 46.2804 112.469 47.8768L112.464 47.8914C114.333 49.5657 116.915 50.4029 120.209 50.4029C121.989 50.4387 123.757 50.0917 125.392 49.3854C126.798 48.7743 127.996 47.7689 128.842 46.4909C129.679 45.1838 130.106 43.6568 130.07 42.1053C130.09 40.2926 129.656 38.7587 128.769 37.5034C127.882 36.2482 126.518 35.2638 124.676 34.5505L120.22 32.7962C118.891 32.2583 117.946 31.7281 117.384 31.2057C117.116 30.9684 116.901 30.6762 116.756 30.3488C116.61 30.0214 116.536 29.6666 116.539 29.3082C116.525 28.9396 116.596 28.5726 116.749 28.2366C116.901 27.9006 117.13 27.6047 117.416 27.3727C117.989 26.8991 118.775 26.6623 119.773 26.6623C120.976 26.6642 121.896 26.9966 122.533 27.6593C123.106 28.2538 123.423 29.0831 123.483 30.1473C123.488 30.2523 123.534 30.3512 123.61 30.4236C123.686 30.496 123.787 30.5363 123.892 30.5362H129.301C129.411 30.5301 129.515 30.4811 129.589 30.3996C129.664 30.3182 129.703 30.2108 129.699 30.1006C129.669 28.6068 129.212 27.1528 128.384 25.9097C127.555 24.6666 126.388 23.6861 125.021 23.0837C123.408 22.3525 121.652 21.9919 119.881 22.0282C118.15 21.9922 116.432 22.3261 114.841 23.0076C113.484 23.5835 112.324 24.5427 111.505 25.7676C110.714 26.995 110.307 28.4302 110.335 29.8901C110.289 31.4903 110.773 33.0608 111.712 34.3575C112.632 35.5991 113.987 36.5513 115.776 37.214L120.609 39.0939C121.835 39.5676 122.685 40.0548 123.159 40.5558C123.645 41.0946 123.9 41.8039 123.866 42.5293C123.89 42.9412 123.817 43.3529 123.654 43.7319C123.491 44.111 123.243 44.4469 122.928 44.7133C122.302 45.2259 121.414 45.4822 120.264 45.4822C118.909 45.4842 117.842 45.0739 117.063 44.2514C116.347 43.5087 115.957 42.501 115.893 41.2282C115.887 41.1235 115.842 41.025 115.766 40.9527C115.689 40.8805 115.589 40.8399 115.484 40.8394H110.078C109.968 40.8439 109.864 40.8916 109.789 40.9721C109.714 41.0525 109.674 41.1592 109.677 41.2692Z"/>
              </svg>
            </div>
            <div className="text-gray-300 text-sm">
              © 2025 Dashlane. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
