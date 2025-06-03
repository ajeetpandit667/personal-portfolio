import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { BookOpen, Briefcase } from 'lucide-react';

interface QualificationItem {
  title: string;
  organization: string;
  date: string;
  description: string;
}

const educationData: QualificationItem[] = [
  {
    title: "Bachelor of Technology - CSE",
    organization: "Rajkumar Goel Institute Of Technology, Ghaziabad",
    date: "2021 - Present",
    description: "Currently pursuing B.Tech in Computer Science Engineering with 76.8% aggregate up to 5th semester."
  },
  {
    title: "Senior Secondary (XII)",
    organization: "Jawahar Navodaya Vidyalaya Mitauli, Uttar Pradesh",
    date: "2020",
    description: "Completed Senior Secondary in Science with 84.4% marks."
  },
  {
    title: "High School (X)",
    organization: "Jawahar Navodaya Vidyalaya Mitauli, Uttar Pradesh",
    date: "2018",
    description: "Completed High School with outstanding 90.8% marks."
  }
];

const experienceData: QualificationItem[] = [
  {
    title: "Portfolio Website",
    organization: "Personal Project",
    date: "2024",
    description: "Developed a dynamic and visually appealing portfolio using HTML, CSS, and JavaScript, showcasing technical skills."
  },
  {
    title: "CureNest",
    organization: "Web Development Project",
    date: "2023",
    description: "Built a responsive medical consultation website using HTML, CSS, JS, MongoDB, Cloudinary, and Tailwind CSS, enabling users to book appointments and access health info."
  },
  {
    title: "Netflix Data Analysis",
    organization: "Data Analysis Project",
    date: "2023",
    description: "Performed comprehensive data analysis on Netflix using Python libraries (Matplotlib, PyPlot, Pandas, NumPy) to extract actionable insights and visualize trends."
  }
];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  return (
    <section id="qualification" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Qualification"
          subtitle="My educational background and work experience"
        />

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center mx-4 pb-2 font-medium text-lg ${activeTab === 'education'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-gray-400'
                }`}
            >
              <BookOpen size={20} className="mr-2" /> Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center mx-4 pb-2 font-medium text-lg ${activeTab === 'experience'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-gray-400'
                }`}
            >
              <Briefcase size={20} className="mr-2" /> Experience
            </button>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900/50"></div>

            <div className="space-y-12">
              {(activeTab === 'education' ? educationData : experienceData).map((item, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-end md:justify-start' : 'justify-start md:justify-end'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <div className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {item.organization}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                        <span className="mr-2">📅</span> {item.date}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 z-10 mt-6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;