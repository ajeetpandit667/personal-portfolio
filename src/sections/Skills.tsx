import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Code, Database, Wrench, Users } from 'lucide-react';

interface SkillItem {
  name: string;
  level: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code size={24} className="text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "Python", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Java", level: "Intermediate" },
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "C", level: "Basic" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database size={24} className="text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "React", level: "Basic" },
        { name: "Express.js", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Bootstrap", level: "Intermediate" },
        { name: "Tailwind", level: "Intermediate" },
        { name: "EJS", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} className="text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "Git", level: "Intermediate" },
        { name: "GitHub", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Figma", level: "Intermediate" },
        { name: "Canva", level: "Intermediate" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} className="text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "Leadership", level: "Advanced" },
        { name: "Communication", level: "Advanced" },
        { name: "Teamwork", level: "Advanced" },
        { name: "Adaptability", level: "Advanced" }
      ]
    }
  ];

  const SkillCard = ({ skill }: { skill: SkillItem }) => {
    const getLevelColor = (level: string) => {
      switch (level.toLowerCase()) {
        case 'basic':
          return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
        case 'intermediate':
          return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
        case 'advanced':
          return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
        default:
          return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      }
    };

    return (
      <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}>
          {skill.level}
        </span>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="My Skills"
          subtitle="Technical and professional competencies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;