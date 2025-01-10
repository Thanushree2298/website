"use client"
import React, { useCallback, useEffect, useState } from 'react';
import { MdOutlinePhoneCallback } from 'react-icons/md';
const services = [
    "Modern Websites",
    "Custom SaaS Solutions",
    "Integrations & API Solutions",
    "AI & Data Analytics",
    "Mobile & Desktop Applications",
    "Cloud Services",
    "IT Consultancy & Support",
    "Digital Marketing Solutions",
    "Progressive Web Apps",
    "Chatbots & Virtual Assistants",
    "E-learning Platforms",
    "Payment Gateway Integration",
    "Custom Business Emails",
    "WhatsApp Business API",
    "ERP/CRM Systems",
    "Performance Optimization",
]

export function Hero() {
    const [currentService, setCurrentService] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)


    const typeText = useCallback(() => {
        const current = services[currentIndex]
        const shouldDelete = isDeleting ? 1 : -1

        setCurrentService(prev =>
            current.substring(0, prev.length - shouldDelete)
        )

        if (!isDeleting && currentService === current) {
            setTimeout(() => setIsDeleting(true), 1500)
        } else if (isDeleting && currentService === '') {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % services.length)
        }
    }, [currentIndex, isDeleting, currentService])

    useEffect(() => {
        const timer = setTimeout(typeText, isDeleting ? 50 : 150)
        return () => clearTimeout(timer)
    }, [typeText, isDeleting])

  return (
    <div className='flex flex-col text-center justify-center py-[120px] bg-cover bg-center h-[100vh]' 
        style={{
            backgroundImage: `linear-gradient(to bottom right, white, rgba(255,255,255,0) 50%), url('/images/bg-pattern.png')`,
          }}>
             <h1 className="text-xl md:text-2xl font-light">
          We make the Best
        </h1>
        <h2 className="whitespace-nowrap mt-2 text-[80px] font-serif font-light tracking-tight min-h-[2.5em] sm:min-h-[2em]">
          {currentService}
          <span className="animate-blink">|</span>
        </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-6 px-[150px]">
          Discover creative solutions designed to help your business grow,
          thrive, and stay ahead. Together, we turn your vision into reality
          with passion and purpose.
        </p>
        <p className="mt-4 text-sm sm:text-base lg:text-lg">
          Bringing Your Ideas to Life. Let&apos;s discuss over a call.
        </p>

        <div className="flex justify-center mt-8">
            <button className='inline-flex gap-2 px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-700 transition duration-300 ease-in-out'>
                Book your Call<MdOutlinePhoneCallback size={20} />
            </button>
        </div>
        </div>
  )
}
