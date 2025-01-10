"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChartLine, GraduationCap, Hospital, Hotel, ShoppingCart, Warehouse } from 'lucide-react'


const solutions = [
  {
    title: "Hotel Management",
    description: "Complete booking system with room management, reservations, and guest services automation.",
    icon: <Hotel />,
    features: ["Booking Engine", "Room Management", "Guest Services", "Revenue Analytics"]
  },
  {
    title: "Healthcare Solutions",
    description: "Comprehensive hospital management system with patient records, appointments, and billing.",
    icon: <Hospital />,
    features: ["Patient Records", "Appointment System", "Billing Management", "Pharmacy Integration"]
  },
  {
    title: "Sales Management",
    description: "Advanced CRM and sales tracking with analytics and performance monitoring.",
    icon: <ChartLine />,
    features: ["Lead Management", "Sales Analytics", "Performance Tracking", "Forecasting"]
  },
  {
    title: "Education Platform",
    description: "Learning management system with course delivery and student progress tracking.",
    icon: <GraduationCap />,
    features: ["Course Management", "Student Portal", "Assessment Tools", "Progress Tracking"]
  },
  {
    title: "E-commerce Solution",
    description: "Full-featured online store with inventory, orders, and customer management.",
    icon: <ShoppingCart />,
    features: ["Product Management", "Order Processing", "Customer Portal", "Analytics Dashboard"]
  },
  {
    title: "Inventory System",
    description: "Real-time inventory tracking with supplier management and order processing.",
    icon: <Warehouse />,
    features: ["Stock Management", "Supplier Portal", "Order Management", "Reports & Analytics"]
  }
]

const SolutionCard = ({ solution, index }:any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-[#1E5A49] rounded-t-2xl" />
      
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-[#F5F3DC] rounded-xl">
          {React.cloneElement(solution.icon, { className: "w-6 h-6" })}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
        </div>
      </div>

      <div className="space-y-3">
        {solution.features.map((feature:any, idx:any) => (
          <div 
            key={idx}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
            {feature}
          </div>
        ))}
      </div>

      <motion.div 
        className="mt-6 flex items-center justify-end gap-2 text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ x: 5 }}
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </motion.div>
    </motion.div>
  )
}

export function Products() {
  return (
    <div className="py-[80px]">
      <div className="container mx-auto px-4 h-[100vh]">
        <div className="text-center py-[30px] mb-[30px]">
            <h2 className="whitespace-nowrap text-[70px] font-serif font-light tracking-tight ">
              Digital Products for Every Industry
            </h2>
            <p className="text-gray-600 sm:text-lg lg:text-xl leading-6 px-[300px]">
              Transform your business with our comprehensive suite of industry-specific solutions designed to streamline operations and drive growth.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
            <button className='inline-flex gap-2 px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-700 transition duration-300 ease-in-out'>
            Explore All Solutions<ArrowRight size={20} />
            </button>
        </div>
      </div>
    </div>
  )
}

