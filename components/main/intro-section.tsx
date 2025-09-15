'use client';

import { motion } from 'framer-motion';

export const IntroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#030014] to-[#0a0a1a] w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Crafting Digital Experiences
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            I create seamless web applications with a focus on performance, accessibility, and user experience.
            Let&apos;s build something amazing together.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '20+', label: 'Projects Completed' },
              { number: '10+', label: 'Happy Clients' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="bg-[#0a0a1a] p-6 rounded-xl border border-[#7042f861] hover:border-[#7042f8] transition-all duration-300"
              >
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
                  {item.number}
                </h3>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};
