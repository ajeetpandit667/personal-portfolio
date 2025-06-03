import React from 'react';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <p className="text-blue-600 dark:text-blue-400 text-lg font-medium mb-4">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Ajeet Mishra
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              <span className="relative">
                Frontend Developer
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400"></span>
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8">
              I create visually appealing and user-friendly websites with modern technologies and best practices.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="/ajeet docs (8).pdf"
                download
                className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
              >
                Download CV
              </a>
            </div>

            <div className="flex space-x-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/ajeetpandit667"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/ajeet-mishra-579883280/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com/ajeet_mishr_a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-600 dark:bg-blue-500 overflow-hidden relative z-10">
                <img
                  src="ajeet.png"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-500 dark:bg-indigo-600 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;