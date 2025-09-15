'use client';

import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6 text-[#b49bff]" />,
      text: 'Email me',
      link: 'mailto:iniladri1408@gmail.com',
      delay: 0.1
    },
    {
      icon: <FaPhone className="w-6 h-6 text-[#b49bff]" />,
      text: 'Call me',
      link: 'tel:+917477747515',
      delay: 0.2
    },
    {
      icon: <FaLinkedin className="w-6 h-6 text-[#b49bff]" />,
      text: 'LinkedIn',
      link: 'https://linkedin.com/in/niladri-bhandari',
      delay: 0.3
    },
    {
      icon: <FaInstagram className="w-6 h-6 text-[#b49bff]" />,
      text: 'Instagram',
      link: 'https://instagram.com/niladri_bhandari',
      delay: 0.4
    }
  ];

  return (
    <section id="contact" className="relative w-full py-20 px-4 md:px-10 lg:px-20 bg-[#030014] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center items-center gap-8 py-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: item.delay }}
              className="p-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white 
                         transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
              aria-label={item.text}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {item.icon}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Let&apos;s work together!</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I&apos;ll get back to you as soon as possible!
          </p>
          <a 
            href="mailto:niladribhandari2002@gmail.com"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:opacity-90 transition-all duration-300 font-medium"
          >
            <FaEnvelope className="mr-2" />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
};
