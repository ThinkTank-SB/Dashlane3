'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SecurityPage() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Title: '',
    Phone: '',
    Company: '',
    CompanySize: '',
    contactReason: 'Talk to Sales'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const isFormValid = () => {
    return formData.FirstName && 
           formData.LastName && 
           formData.Email && 
           formData.Title && 
           formData.Phone && 
           formData.Company && 
           formData.CompanySize;
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
        <article className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8">
          <section>
            <div className="relative">
              {/* Hero Section */}
              {/* Hero Section */}
<div className="bg-slate-800 pt-15 pb-20 md:pb-15">
  <div className="relative mx-auto max-w-7xl px-4 md:px-8 pb-12 md:pb-12">
    <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-12">
      {/* Left Content */}
      <div className="max-w-2xl pt-0 md:pt-12 pb-0 md:pb-12">
                      <div className="self-center">
                        <h2 className="text-4xl md:text-5xl font-medium leading-tight text-white mb-4 md:mb-6">
                          Complete credential security starts here
                        </h2>
                        <p className="text-white mb-8 text-lg">
                          Go beyond password management to Omnix, the intelligent platform that combats the #1 breach threat: Human risk.
                        </p>
                        
                        {/* Feature List */}
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <span className="min-w-fit mr-5">
                              <svg width="20" height="20" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                              </svg>
                            </span>
                            <p className="text-white">
                              <strong>Proactive intelligence</strong> to turn credential risk insights into action
                            </p>
                          </div>
                          <div className="flex items-center">
                            <span className="min-w-fit mr-5">
                              <svg width="20" height="20" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                              </svg>
                            </span>
                            <p className="text-white">
                              <strong>Real-time risk response</strong> for continuous employee self-remediation
                            </p>
                          </div>
                          <div className="flex items-center">
                            <span className="min-w-fit mr-5">
                              <svg width="20" height="20" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.3379 5.71307L9.72865 20.5271L1.81152 14.1703L3.18889 12.4549L9.43902 17.4731L20.6626 4.28711L22.3379 5.71307Z"/>
                              </svg>
                            </span>
                            <p className="text-white">
                              <strong>Protected employee access</strong> & password management to mitigate shadow IT
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Contact Form */}
                    <div className="relative w-full z-10 md:pt-8">
        <div className="bg-white rounded p-8 mt-8 md:mt-0 mb-8 md:mb-0">
    <div className="mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-2 md:mb-4">
        Learn more about Omnix™
      </h2>
      <p className="text-gray-500 text-sm mb-4 md:mb-6">
        Get in touch with our team to discover how Omnix can transform your organization's security posture.
      </p>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" noValidate>
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                              <label className="block text-sm">
                                First Name<span className="ml-2 inline-block text-red-500">*</span>
                              </label>
                              <input
                                className="w-full text-gray-800 px-4 py-2.5 rounded border border-gray-200 focus:border-slate-800 outline-none transition-colors"
                                id="FirstName"
                                type="text"
                                name="FirstName"
                                value={formData.FirstName}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                              <label className="block text-sm">
                                Last Name<span className="ml-2 inline-block text-red-500">*</span>
                              </label>
                              <input
                                className="w-full text-gray-800 px-4 py-2.5 rounded border border-gray-200 focus:border-slate-800 outline-none transition-colors"
                                id="LastName"
                                type="text"
                                name="LastName"
                                value={formData.LastName}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                              <label className="block text-sm">
                                Business Email<span className="ml-2 inline-block text-red-500">*</span>
                              </label>
                              <input
                                className="w-full text-gray-800 px-4 py-2.5 rounded border border-gray-200 focus:border-slate-800 outline-none transition-colors"
                                id="Email"
                                type="email"
                                name="Email"
                                value={formData.Email}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                              <label className="block text-sm">
                                Job Title<span className="ml-2 inline-block text-red-500">*</span>
                              </label>
                              <input
                                className="w-full text-gray-800 px-4 py-2.5 rounded border border-gray-200 focus:border-slate-800 outline-none transition-colors"
                                id="Title"
                                type="text"
                                name="Title"
                                value={formData.Title}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                              <label className="block text-sm">
                                Phone<span className="ml-2 inline-block text-red-500">*</span>
                              </label>
                              <input
                                className="w-full text-gray-800 px-4 py-2.5 rounded border border-gray-200 focus:border-slate-800 outline-none transition-colors"
                                id="Phone"
                                type="tel"
                                name="Phone"
                                value={formData.Phone}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                              <label className="block text-sm">
                                Company Name<span className="ml-2 inline-block text-red-500">*</span>
                              </label>
                              <input
                                className="w-full text-gray-800 px-4 py-2.5 rounded border border-gray-200 focus:border-slate-800 outline-none transition-colors"
                                id="Company"
                                type="text"
                                name="Company"
                                value={formData.Company}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                              <label className="block text-sm">
                                Your Company Size<span className="ml-2 inline-block text-red-500">*</span>
                              </label>
                              <div className="relative w-full">
                                <select
                                  className="w-full text-gray-800 pl-2.5 pr-8 py-2.5 rounded border border-gray-200 focus:border-slate-800 outline-none transition-colors appearance-none"
                                  id="CompanySize"
                                  name="CompanySize"
                                  value={formData.CompanySize}
                                  onChange={handleInputChange}
                                  required
                                >
                                  <option value=""></option>
                                  <option value="1-20">1-20 employees</option>
                                  <option value="21-50">21-50 employees</option>
                                  <option value="51-200">51-200 employees</option>
                                  <option value="201-500">201-500 employees</option>
                                  <option value="501-1,000">501-1,001 employees</option>
                                  <option value="1,001-5,000">1,001-5,000 employees</option>
                                  <option value="5,001-10,000">5,001-10,000 employees</option>
                                  <option value="10,001+">10,001+ employees</option>
                                </select>
                                <div className="absolute right-2 top-3 pointer-events-none">
                                  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-slate-800">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 14.0157L5.55319 7L4 8.29409L12 17L20 8.29409L18.4468 7L12 14.0157Z"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                              <label className="block text-sm">
                                Reason for Contacting<span className="ml-2 inline-block text-red-500">*</span>
                              </label>
                              <div className="relative w-full">
                                <select
                                  className="w-full text-gray-800 pl-2.5 pr-8 py-2.5 rounded border border-gray-200 focus:border-slate-800 outline-none transition-colors appearance-none"
                                  id="contactReason"
                                  name="contactReason"
                                  value={formData.contactReason}
                                  onChange={handleInputChange}
                                  required
                                >
                                  <option value="Talk to Sales">I want to talk to Sales</option>
                                  <option value="Talk to Support">I am a current Dashlane user and have a support question</option>
                                  <option value="General question/other">General question/Other</option>
                                </select>
                                <div className="absolute right-2 top-3 pointer-events-none">
                                  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-slate-800">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 14.0157L5.55319 7L4 8.29409L12 17L20 8.29409L18.4468 7L12 14.0157Z"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                              <button
                                className={`w-full text-center justify-center rounded-md cursor-pointer transition-all px-4 py-3 self-start mt-2 text-lg ${
                                  isFormValid() && !isSubmitting
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-slate-800'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-40'
                                }`}
                                type="submit"
                                disabled={!isFormValid() || isSubmitting}
                              >
                                <div className="flex items-center justify-center">
                                  {isSubmitting ? (
                                    <>
                                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                      </svg>
                                      Submitting...
                                    </>
                                  ) : (
                                    <span>Contact Sales</span>
                                  )}
                                </div>
                              </button>
                            </div>
                            
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                              <label className="text-sm text-gray-600">
                                By submitting this form, I agree to Dashlane's{' '}
                                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                                  Privacy Policy
                                </Link>
                                {' '}and{' '}
                                <Link href="/terms/business" className="text-blue-600 hover:text-blue-700 underline">
                                  Terms of Service
                                </Link>
                                .
                              </label>
                              <input type="hidden" name="OptIn" value="1" />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trusted By Section */}
              <div className="bg-blue-50 pt-15 pb-15">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                  <div className="grid grid-cols-1 items-center">
                    <div className="max-w-2xl">
                      <p className="text-center text-gray-500 uppercase text-base pt-12 mb-2"></p>
                      <div className="flex flex-wrap justify-center pt-8 gap-y-3 gap-x-8">
                        <div className="text-center h-10">
                          <figure className="w-full inline-block h-10 relative">
                            <Image
                              alt="Airfrance logo"
                              src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/10/Airfrance.png"
                              width={120}
                              height={40}
                              className="h-10 object-contain"
                              style={{
                                filter: 'brightness(0) saturate(100%) invert(21%) sepia(23%) saturate(1900%) hue-rotate(149deg) brightness(97%) contrast(90%)'
                              }}
                            />
                          </figure>
                        </div>
                        <div className="text-center h-10">
                          <figure className="w-full inline-block h-10 relative">
                            <Image
                              alt="BBC logo"
                              src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/10/BBC.png"
                              width={120}
                              height={40}
                              className="h-10 object-contain"
                              style={{
                                filter: 'brightness(0) saturate(100%) invert(21%) sepia(23%) saturate(1900%) hue-rotate(149deg) brightness(97%) contrast(90%)'
                              }}
                            />
                          </figure>
                        </div>
                        <div className="text-center h-10">
                          <figure className="w-full inline-block h-10 relative">
                            <Image
                              alt="Forrester logo"
                              src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/10/Forrester.png"
                              width={120}
                              height={40}
                              className="h-10 object-contain"
                              style={{
                                filter: 'brightness(0) saturate(100%) invert(21%) sepia(23%) saturate(1900%) hue-rotate(149deg) brightness(97%) contrast(90%)'
                              }}
                            />
                          </figure>
                        </div>
                        <div className="text-center h-10">
                          <figure className="w-full inline-block h-10 relative">
                            <Image
                              alt="Michelin logo"
                              src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/10/Michelin.png"
                              width={120}
                              height={40}
                              className="h-10 object-contain"
                              style={{
                                filter: 'brightness(0) saturate(100%) invert(21%) sepia(23%) saturate(1900%) hue-rotate(149deg) brightness(97%) contrast(90%)'
                              }}
                            />
                          </figure>
                        </div>
                        <div className="text-center h-10">
                          <figure className="w-full inline-block h-10 relative">
                            <Image
                              alt="World Wildlife Fund logo"
                              src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/04/WorldWildlifeFund-Logo-Dark.png"
                              width={120}
                              height={40}
                              className="h-10 object-contain"
                              style={{
                                filter: 'brightness(0) saturate(100%) invert(21%) sepia(23%) saturate(1900%) hue-rotate(149deg) brightness(97%) contrast(90%)'
                              }}
                            />
                          </figure>
                        </div>
                        <div className="text-center h-10">
                          <figure className="w-full inline-block h-10 relative">
                            <Image
                              alt="Crane logo"
                              src="https://ripleyprd.wpengine.com/wp-content/uploads/2025/04/crane-1.png"
                              width={120}
                              height={40}
                              className="h-10 object-contain"
                              style={{
                                filter: 'brightness(0) saturate(100%) invert(21%) sepia(23%) saturate(1900%) hue-rotate(149deg) brightness(97%) contrast(90%)'
                              }}
                            />
                          </figure>
                        </div>
                        <div className="text-center h-10">
                          <figure className="w-full inline-block h-10 relative">
                            <Image
                              alt="Symrise logo"
                              src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/Symrise-Logo-Dark.png"
                              width={120}
                              height={40}
                              className="h-10 object-contain"
                              style={{
                                filter: 'brightness(0) saturate(100%) invert(21%) sepia(23%) saturate(1900%) hue-rotate(149deg) brightness(97%) contrast(90%)'
                              }}
                            />
                          </figure>
                        </div>
                        <div className="text-center h-10">
                          <figure className="w-full inline-block h-10 relative">
                            <Image
                              alt="Kuraray logo"
                              src="https://ripleyprd.wpengine.com/wp-content/uploads/2024/02/Kuraray-Logo-Dark.png"
                              width={120}
                              height={40}
                              className="h-10 object-contain"
                              style={{
                                filter: 'brightness(0) saturate(100%) invert(21%) sepia(23%) saturate(1900%) hue-rotate(149deg) brightness(97%) contrast(90%)'
                              }}
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800">
        <div className="mx-auto max-w-7xl flex flex-col px-4 py-8 lg:px-8 lg:py-20 leading-6 gap-10 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-x-16 lg:gap-y-10">
          <nav role="navigation" aria-label="Footer Navigation menu" className="flex w-full bg-slate-800 lg:w-auto">
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
                    <Link href="https://www.dashlane.com/omnix" className="block text-white hover:text-gray-300 transition-colors">
                      Platform overview
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/omnix#OmnixCredentialProtection" className="block text-white hover:text-gray-300 transition-colors">
                      Credential Protection
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/omnix#OmnixPasswordManagement" className="block text-white hover:text-gray-300 transition-colors">
                      Password Management
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/omnix#DashlaneSecureCloud" className="block text-white hover:text-gray-300 transition-colors">
                      Dashlane Secure Cloud
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/business-password-manager/platform" className="block text-white hover:text-gray-300 transition-colors">
                      Contact Sales
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/business-password-manager/request-a-demo" className="block text-white hover:text-gray-300 transition-colors">
                      Request a demo
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav role="navigation" aria-label="Footer Navigation menu" className="flex w-full bg-slate-800 lg:w-auto">
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
                    <Link href="https://www.dashlane.com/business-password-manager" className="block text-white hover:text-gray-300 transition-colors">
                      Business password manager
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/pricing" className="block text-white hover:text-gray-300 transition-colors">
                      Plans & pricing
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/business-password-manager/try" className="block text-white hover:text-gray-300 transition-colors">
                      Try free for 14 days
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/business-password-manager/buy" className="block text-white hover:text-gray-300 transition-colors">
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
                    <Link href="https://www.dashlane.com/personal-password-manager" className="block text-white hover:text-gray-300 transition-colors">
                      Personal password manager
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/personal-password-manager/family-password-manager" className="block text-white hover:text-gray-300 transition-colors">
                      Family password manager
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/pricing-personal" className="block text-white hover:text-gray-300 transition-colors">
                      Plans & pricing
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/download" className="block text-white hover:text-gray-300 transition-colors">
                      Download for free
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link href="https://www.dashlane.com/getpremium" className="block text-white hover:text-gray-300 transition-colors">
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
                <svg className="h-4 w-4 fill-current" viewBox="0 0 9 16">
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
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
