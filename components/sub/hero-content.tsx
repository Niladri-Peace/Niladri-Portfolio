"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { useEffect, useState } from "react";

export const HeroContent = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['Tech Enthusiast', 'AI Passionate', 'Full Stack Developer'];
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
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start gap-4 mb-2"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#7042f88b] hover:border-cyan-400 transition-all duration-300">
              <Image
                src="/logo-nb.png"
                alt="Niladri Bhandari"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
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
  variants={slideInFromLeft(1)}
  href="#projects"
  className="py-4 px-5 sm:px-6 bg-transparent border-[#7D43FF] border-2 text-white text-base sm:text-base font-medium rounded-full shadow-lg transition-transform hover:scale-105 max-w-[110px] sm:max-w-[180px] mx-auto md:mx-0 flex items-center justify-center"
>
  Learn more
</motion.a>

      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-8 md:mt-0 relative"
      >
        <div className="relative">
          {/* Original background design */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/hero-bg.svg"
              alt="work icons"
              height={500}
              width={500}
              draggable={false}
              className="select-none drop-shadow-lg h-[400px] w-[400px] sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
            />
          </div>
          
          {/* Your photo */}
          <div className="relative z-10">
            <div className="relative rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
              <Image
                src="/photo.jpeg"
                alt="Your Name"
                width={300}
                height={300}
                className="rounded-full object-cover w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 -z-10"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
