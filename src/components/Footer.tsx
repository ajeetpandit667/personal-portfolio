import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Portfolio
          </div>

          <div className="flex space-x-6 mb-6">
            <a href="https://github.com/ajeetpandit667" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ajeet-mishra-579883280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/ajeet_mishr_a/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="mailto:ajeetpandit667@gmail.com" aria-label="Email"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>

          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© {currentYear} Ajeet Mishra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;