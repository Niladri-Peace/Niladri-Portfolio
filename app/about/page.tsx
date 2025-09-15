'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-12">
            {/* Left Side - Profile Picture */}
            <motion.div 
              className="w-full max-w-sm mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/profile-pic.png"
                  alt="Your Name"
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            {/* Right Side - About Me */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6">
                <span className="text-green-500 text-lg font-semibold uppercase">
                  About Me
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  Hi, I am Your Name
                </h2>
                <div className="mt-2">
                  <span className="text-lg text-gray-600 dark:text-gray-400">Web Developer</span>
                </div>
              </div>

              <div className="text-gray-600 dark:text-gray-400 space-y-4">
                <p>
                  I am a passionate Web Developer with expertise in React, Next.js, and modern UI/UX design. 
                  I specialize in creating responsive, user-friendly, and high-performance applications.
                </p>
                <p>
                  With a strong foundation in web development, I blend technology with creativity to build 
                  seamless digital experiences. Constantly learning and experimenting, I aim to develop 
                  innovative solutions that make an impact.
                </p>
                <p>
                  <span className="font-semibold">🔹 Interests:</span> Web Development, UI/UX Design, Open Source
                </p>
              </div>

              <div className="w-full h-px bg-gray-200 my-8"></div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="font-semibold w-32 dark:text-gray-300">Name:</span>
                  <span className="text-gray-600 dark:text-gray-400">Your Name</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-32 dark:text-gray-300">Email:</span>
                  <span className="text-gray-600 dark:text-gray-400">your.email@example.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-32 dark:text-gray-300">Phone:</span>
                  <span className="text-gray-600 dark:text-gray-400">+1 234 567 890</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-32 dark:text-gray-300">Location:</span>
                  <span className="text-gray-600 dark:text-gray-400">City, Country</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-32 dark:text-gray-300">Experience:</span>
                  <span className="text-gray-600 dark:text-gray-400">X+ Years</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-32 dark:text-gray-300">Freelance:</span>
                  <span className="text-gray-600 dark:text-gray-400">Available</span>
                </div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
