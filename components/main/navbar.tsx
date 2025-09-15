'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
    closeMenu();
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50">
      <div className="flex items-center justify-between h-[70px] px-5 md:px-10">
        {/* Logo - Left */}
        <Link 
          href="#about-me" 
          className="flex items-center gap-2" 
          onClick={closeMenu}
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#7042f88b] hover:border-cyan-400 transition-all duration-300">
            <Image
              src="/logo-nb.png"
              alt="Niladri Bhandari"
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
          <span className="hidden sm:block text-white font-bold tracking-wide bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            I am Niladri | Phoenix
          </span>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center">
          <div className="bg-[rgba(3,0,20,0.37)] px-8 py-2 rounded-full border border-[rgba(112,66,248,0.38)] text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.title} 
                href={link.link}
                className="hover:text-[rgb(112,66,248)] transition font-medium cursor-pointer mx-4"
                onClick={(e) => handleNavigation(e, link.link)}
                scroll={false}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side - Social Media and Resume */}
        <div className="hidden md:flex items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ name, link, icon: Icon }) => (
              <a 
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[rgb(112,66,248)] transition-colors"
                aria-label={name}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              const resumeUrl = '/NILADRI BHANDARI RESUME.docx';
              const link = document.createElement('a');
              link.href = resumeUrl;
              link.download = 'NILADRI_BHANDARI_RESUME.docx';
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              document.body.appendChild(link);
              link.click();
              setTimeout(() => {
                document.body.removeChild(link);
              }, 100);
            }}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:opacity-90 transition-all flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 001 1h12a1 1 0 100-2H4a1 1 0 00-1 1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-[#030014]/80 backdrop-blur-lg shadow-lg flex flex-col items-center justify-center text-gray-300 md:hidden"
          >
            <div className="w-full flex items-start justify-between px-6 py-4">
              {/* Logo and Text */}
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#7042f88b] hover:border-cyan-400 transition-all duration-300">
                  <Image
                    src="/logo-nb.png"
                    alt="Niladri Bhandari"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-white font-bold text-lg whitespace-nowrap">
                  I am Niladri | Phoenix
                </span>
              </div>
              
              {/* Close Button */}
              <button
                className="text-white text-2xl mt-1"
                onClick={closeMenu}
              >
                ✖
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col items-center space-y-8 text-lg font-medium w-full px-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="w-full text-center py-3 hover:bg-[#2A0E61]/50 rounded-lg transition-colors"
                  onClick={(e) => handleNavigation(e, link.link)}
                  scroll={false}
                >
                  {link.title}
                </Link>
              ))}
              
              {/* Mobile Resume Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  const resumeUrl = '/NILADRI BHANDARI RESUME.docx';
                  const link = document.createElement('a');
                  link.href = resumeUrl;
                  link.download = 'NILADRI_BHANDARI_RESUME.docx';
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  document.body.appendChild(link);
                  link.click();
                  setTimeout(() => {
                    document.body.removeChild(link);
                  }, 100);
                }}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 001 1h12a1 1 0 100-2H4a1 1 0 00-1 1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </button>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-8 mt-10 pt-6 border-t border-[#2A0E61]/50 w-full">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <a 
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[rgb(112,66,248)] transition-colors p-2"
                  aria-label={name}
                  onClick={closeMenu}
                >
                  <Icon className="h-7 w-7" />
                </a>
              ))}
            </div>

            {/* Mobile Resume Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                const resumeUrl = '/NILADRI BHANDARI RESUME.docx';
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.download = 'NILADRI_BHANDARI_RESUME.docx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:opacity-90 transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 001 1h12a1 1 0 100-2H4a1 1 0 00-1 1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
