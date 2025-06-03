import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  sourceUrl: string;
  demoUrl: string;
}

const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "Developed a dynamic and visually appealing portfolio with HTML, CSS, and JavaScript, showcasing technical skills.",
    image: "portfolio.jpg",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    sourceUrl: "https://github.com/ajeetpandit667",
    demoUrl: "#"
  },
  {
    title: "Netflix Data Analysis",
    description: "Performed comprehensive data analysis on Netflix using advanced Python libraries (Matplotlib, PyPlot, Pandas, NumPy) to extract actionable insights and visualize trends.",
    image: "netflix.jpg",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    sourceUrl: "https://github.com/ajeetpandit667/Netflix-Analysis",
    demoUrl: "https://github.com/ajeetpandit667/Netflix-Analysis/blob/main/Netflix%20Stock%20Analysis.ipynb"
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Developed an interactive Tic Tac Toe game using HTML, CSS, and JavaScript with logic to detect wins, draws, and alternate turns between players.",
    image: "tictactoe.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/ajeetpandit667/Tic-Tac-Game",
    demoUrl: "https://github.com/ajeetpandit667/Tic-Tac-Game"
  },
  {
    title: "CureNest",
    description: "Built a responsive medical consultation website using HTML, CSS, JS, MongoDB, Cloudinary, and Tailwind CSS, enabling users to book appointments and access health info.",
    image: "curenest.jpg",
    tags: ["MongoDB", "Express.js", "Tailwind CSS", "Cloudinary"],
    sourceUrl: "https://github.com/ajeetpandit667",
    demoUrl: "#"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="My Projects"
          subtitle="Here are some of my recent works"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative overflow-hidden group h-48 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-blue-600/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    aria-label="View Demo"
                  >
                    <Eye size={20} className="text-blue-600" />
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    aria-label="View Source"
                  >
                    <Github size={20} className="text-blue-600" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo <ExternalLink size={16} className="ml-1" />
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Source Code <Github size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;