
"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { useEffect, useState, useMemo } from "react";

export const HeroContent = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = useMemo(() => ['Tech Enthusiast', 'AI Passionate', 'Full Stack Developer'], []);
  const typingSpeed = 100; // ms per character
  const deletingSpeed = 50; // ms per character when deleting
  const delayBetweenRoles = 2000; // ms before starting next role
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];
    
    if (isDeleting) {
      // Delete text
      timeout = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      }, deletingSpeed);
      
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    } else {
      // Type text
      timeout = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      }, typingSpeed);
      
      if (currentText === currentRole) {
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentText, currentRoleIndex, isDeleting, roles]);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 mt-16 md:mt-32 w-full z-[20]"
    >
      {/* Left Side - Content */}
      <div className="w-full md:w-2/3 flex flex-col gap-5 justify-center text-center md:text-left mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mb-2 w-full"
        >
          <div className="flex items-center gap-4">
            <div className="hidden md:block relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#7042f88b] hover:border-cyan-400 transition-all duration-300 flex-shrink-0">
              <Image
                src="/logo-nb.png"
                alt="Niladri Bhandari"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Niladri Bhandari
              </h1>
              <p className="text-sm text-gray-400">Turning ideas into reality</p>
            </div>
          </div>
        </motion.div>
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          <div className="text-[12px] md:text-[13px] text-gray-200 font-semibold h-5 flex items-center min-w-[120px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="inline-flex items-center"
              >
                {currentText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="ml-0.5"
                >
                  |
                </motion.span>
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Transforming{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Ideas
          </span>{" "}
          into Seamless User{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experiences
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] mx-auto md:mx-0"
        >
          I&apos;m a Full Stack Developer specializing in building modern AI applications. Check out my projects and skills.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          variants={slideInFromTop}
          href="#projects"
          className="py-3 px-6 bg-transparent border-[#7D43FF] border-2 text-white text-sm font-medium rounded-full shadow-lg transition-transform hover:scale-105 max-w-[180px] mx-auto flex items-center justify-center"
        >
          Learn more
        </motion.a>

      </div>

      {/* Right Side - Profile Photo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/3 flex justify-center relative md:ml-10 mt-6 md:mt-12"
      >
        {/* Modern Geometric Background */}
        <div className="absolute -z-10 w-[350px] h-[350px] md:w-[420px] md:h-[420px] bg-transparent">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-48 h-48 bg-purple-500/10 rounded-full -top-20 -left-20 mix-blend-screen"></div>
            <div className="absolute w-32 h-32 bg-cyan-500/10 rounded-full bottom-10 -right-10 mix-blend-screen"></div>
            <div className="absolute w-24 h-24 bg-indigo-500/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
            
            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" 
                  style={{top: `${(i + 1) * 20}%`}}></div>
              ))}
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" 
                  style={{left: `${(i + 1) * 20}%`}}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-[#7042f88b] hover:border-cyan-400 transition-all duration-300 group backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <Image
            src="/photo.jpeg"
            alt="Niladri Bhandari"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white/30"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                  animationDelay: `-${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
};
