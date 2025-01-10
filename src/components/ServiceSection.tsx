"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Monitor, Smartphone, Cloud, Database, Cpu, BarChart } from 'lucide-react'

const services = [
  {
    id: 'web',
    title: 'Web Development',
    icon: <Monitor className="w-6 h-6" />,
    description: 'Create powerful, scalable web applications tailored to your business needs.',
    features: ['Custom Web Applications', 'E-commerce Solutions', 'Content Management Systems', 'Progressive Web Apps'],
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Build engaging mobile experiences for iOS and Android platforms.',
    features: ['Native iOS & Android Apps', 'Cross-Platform Development', 'App Redesign & Optimization', 'Wearable App Development'],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    icon: <Cloud className="w-6 h-6" />,
    description: 'Leverage cloud technologies to enhance scalability and reduce costs.',
    features: ['Cloud Migration Services', 'Serverless Architecture', 'Cloud-Native Development', 'Multi-Cloud Strategies'],
  },
  {
    id: 'data',
    title: 'Data Analytics & AI',
    icon: <Database className="w-6 h-6" />,
    description: 'Unlock insights from your data and implement AI to drive business growth.',
    features: ['Big Data Processing', 'Machine Learning Models', 'Predictive Analytics', 'Natural Language Processing'],
  },
  {
    id: 'iot',
    title: 'IoT Solutions',
    icon: <Cpu className="w-6 h-6" />,
    description: 'Connect and manage smart devices to improve efficiency and gather valuable data.',
    features: ['IoT Platform Development', 'Sensor Integration', 'Real-time Data Analytics', 'Edge Computing Solutions'],
  },
  {
    id: 'consulting',
    title: 'Digital Strategy Consulting',
    icon: <BarChart className="w-6 h-6" />,
    description: 'Get expert guidance on digital transformation and technology adoption.',
    features: ['Technology Roadmapping', 'Digital Maturity Assessment', 'Process Optimization', 'Innovation Workshops'],
  }
]

export default function ServiceSection() {
  const [activeService, setActiveService] = useState(services[0])
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <section className="py-[80px] px-4 h-[100vh] mt-[200px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-light tracking-tight text-[70px] font-serif leading-none">
            Digital Service for your Business Growth
          </h2>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full text-left px-4 py-3 rounded-full flex items-center justify-between transition-all duration-300 ${
                    activeService.id === service.id
                      ? 'bg-white shadow-sm text-gray-900'
                      : 'text-gray-600 hover:bg-white hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${activeService.id === service.id ? 'bg-gray-100' : ''}`}>
                      {service.icon}
                    </div>
                    <span className="ml-3 font-medium">{service.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                    activeService.id === service.id ? 'rotate-180' : ''
                  }`} />
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-full shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-gray-100">
                      {activeService.icon}
                    </div>
                    <h3 className="ml-4 text-3xl font-bold text-gray-900">{activeService.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{activeService.description}</p>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Offerings:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={`#learn-more-${activeService.id}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 inline-block px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-300"
                  >
                    Learn More
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden space-y-4">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-full shadow-sm overflow-hidden">
              <button
                onClick={() => toggleAccordion(service.id)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-gray-100">
                    {service.icon}
                  </div>
                  <span className="ml-3 font-medium text-gray-900">{service.title}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openAccordion === service.id ? 'rotate-180' : ''
                }`} />
              </button>
              <AnimatePresence>
                {openAccordion === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Offerings:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href={`#learn-more-${service.id}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 inline-block px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors duration-300"
                    >
                      Learn More
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

