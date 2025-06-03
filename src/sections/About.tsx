import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Award, BookOpen, Briefcase, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about me and what I do"
        />

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="profile.jpg"
                alt="About Me"
                className="rounded-lg shadow-lg w-full h-auto object-cover max-w-md mx-auto"
              />
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Computer Science Engineering Student
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate Computer Science Engineering student at Rajkumar Goel Institute Of Technology, Ghaziabad. With a strong academic record of 76.8% up to my 5th semester, I combine theoretical knowledge with practical development skills.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I have a solid foundation in web development technologies and am enthusiastic about creating user-friendly applications. My academic excellence is reflected in my consistent performance, with 90.8% in High School and 84.4% in Senior Secondary from Jawahar Navodaya Vidyalaya Mitauli.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Code size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Web</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Projects</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">4+ Completed</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">B.Tech CSE</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Award size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Academic</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">76.8% in B.Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;