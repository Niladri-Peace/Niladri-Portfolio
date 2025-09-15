'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-gray-900 scroll-mt-20 overflow-hidden">
      {/* Background Logo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-2xl h-full opacity-10">
        <Image
          src="/logo-nb.png"
          alt="Background Logo"
          fill
          className="object-contain object-right"
          priority
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12">
          {/* Left Side - Profile Picture */}
          <motion.div 
            className="w-full max-w-sm mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto overflow-hidden rounded-lg shadow-xl z-10 bg-white/5 backdrop-blur-sm">
              <Image
                src="/profile-pic.png"
                alt="Your Name"
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right Side - About Me */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-lg font-semibold uppercase">
                About Me
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                Hi, I am Niladri Bhandari
              </h2>
              <div className="mt-2">
                <span className="text-lg text-gray-600 dark:text-gray-400">AI & Full Stack Developer</span>
              </div>
            </div>

            <div className="text-gray-600 dark:text-gray-400 space-y-4">
              <p>
                Pursuing B.Tech in Computer Science with a strong focus on Artificial Intelligence, Machine Learning, and Full-Stack Development. 
                Skilled in Python, cloud technologies, and modern web frameworks, with hands-on experience in deploying AI-powered applications and scalable solutions.
              </p>
              <p>
                Actively engaged in technical internships, projects, and workshops. Eager to contribute to projects, drive organizational success, 
                and continue expanding technical expertise through real-world challenges.
              </p>
              <p>
                <span className="font-semibold">🔹 Education:</span> B.Tech in Computer Science (8.44 CGPA) - Brainware University (2022-2026)
              </p>
              <p>
                <span className="font-semibold">🔹 Technical Skills:</span> Python, Java, JavaScript, TensorFlow.js, Flask, Next.js, MySQL, AWS, Docker
              </p>
              <p>
                <span className="font-semibold">🔹 Domains:</span> AI/ML, Full Stack Development, Cloud Computing, Data Science
              </p>
              <p>
                <span className="font-semibold">🔹 Interests:</span> Web Development, UI/UX Design, Open Source
              </p>
            </div>

            <div className="w-full h-px bg-gray-200 my-8"></div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="font-semibold w-32 dark:text-gray-300">Location:</span>
                <span className="text-gray-600 dark:text-gray-400">Kolkata, West Bengal</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-32 dark:text-gray-300">Education:</span>
                <span className="text-gray-600 dark:text-gray-400">B.Tech CSE (AI & ML) - Brainware University</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
