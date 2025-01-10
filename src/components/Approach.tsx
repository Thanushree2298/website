"use client"
import { motion } from 'framer-motion';
import React from 'react';

export function Approach() {
  return (
    <div className="py-[80px] px-4 h-[100vh] mt-[200px]">
      <div className="container mx-auto ">
        <div className="text-center">

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
    <p className="font-light tracking-tight text-[70px] font-serif leading-none">
      Our Simple Approach 
      <br />
      to your Success
    </p>
    </motion.div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between mt-16 md:mt-20 max-w-7xl mx-auto">
      {/* Design */}
      <motion.div 
        className="p-6 md:p-8 relative flex"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0, x: -50 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[120px] md:text-[150px] lg:text-[180px] font-serif font-bold text-gray-200 leading-none absolute -left-6 -top-6 md:-left-10 md:-top-10 z-0"
        >
          01
        </motion.div>
        <div className="relative z-10 ml-8 md:ml-16">
          <h3 className="text-[50px] font-serif mb-4">
            Design
          </h3>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg tracking-[0.5px] md:tracking-[1px]">
            Your requirements are first understood to make detailed wireframes and designs to align with your vision.
          </p>
        </div>
      </motion.div>
      
      {/* Develop */}
      <motion.div 
        className="p-6 md:p-8 relative flex"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          initial={{ scale: 0, x: -50 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-serif text-[120px] md:text-[150px] lg:text-[180px] font-bold text-gray-200 leading-none absolute -left-6 -top-6 md:-left-10 md:-top-10 z-0"
        >
          02
        </motion.div>
        <div className="relative z-10 ml-8 md:ml-16">
          <h3 className="text-[50px] font-serif mb-4">
           Develop
          </h3>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg tracking-[0.5px] md:tracking-[1px]">
            Your ideas are brought to life using cutting-edge technologies by our team.
          </p>
        </div>
      </motion.div>

      {/* Deliver */}
      <motion.div 
        className="p-6 md:p-8 relative flex"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          initial={{ scale: 0, x: -50 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-serif text-[120px] md:text-[150px] lg:text-[180px] font-bold text-gray-200 leading-none absolute -left-6 -top-6 md:-left-10 md:-top-10 z-0"
        >
          03
        </motion.div>
        <div className="relative z-10 ml-8 md:ml-16">
          <h3 className="text-[50px] font-serif mb-4">
            Deliver
          </h3>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg tracking-[0.5px] md:tracking-[1px]">
            Smooth deployment, thorough testing, and ongoing support are ensured to guarantee flawless performance.
          </p>
        </div>
      </motion.div>
      </div>
     
    </div>
  </div>
  );
}

