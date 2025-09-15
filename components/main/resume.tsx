'use client';

import { motion } from 'framer-motion';

export const Resume = () => {
  const handleDownload = () => {
    // Replace with the actual path to your resume PDF
    const resumeUrl = '/resume/your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Niladri_Bhandari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10 text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Download My Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to download my resume to learn more about my experience and skills.
              </p>
            </div>
            
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3 17a1 1 0 001 1h12a1 1 0 100-2H4a1 1 0 00-1 1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              Download Resume (PDF)
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
