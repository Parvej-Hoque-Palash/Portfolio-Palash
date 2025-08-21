import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';

const projects = [
  {
    name: 'Genomedics',
    description: 'A dynamic, responsive website for a leading medicine supplier in Bangladesh.',
    link: 'https://genomedics.com.bd/',
    github: 'https://github.com/GENO-MEDICS/GenoMedic'
  },
  {
    name: 'Albab Academy',
    description: 'A comprehensive school automation system featuring online admissions, payment automation, and detailed report generation.',
    link: 'https://albab-academy.vercel.app/',
    github: 'https://github.com/albaba-academy/albaba-academy'
  },
  {
    name: 'Library Management',
    description: 'Developed an admin dashboard to visualize book statistics across various categories.',
    link: '',
    github: 'https://github.com/Parvej-Hoque-Palash/Bandarban-Library'
  },
  {
    name: 'Employee Management',
    description: 'A web-based employee management system allowing unauthorized users to view data while registered users can view, update, and delete records in the database.',
    link: 'https://emp980.netlify.app/',
    github: 'https://github.com/Parvej-Hoque-Palash/Employee-Management-System'
  },
  {
    name: 'Konta Niben',
    description: 'An e-commerce web application for cosmetics items, followed Agile SDLC methodology, completing two sprints while collaborating via GitHub Wiki, Discord, and Trello.',
    link: '',
    github: 'https://github.com/SQA-PROJECT-1/Konta-Niben'
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto mb-4">
      <h1 className="page-title">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  {project.link ? (
                    <iframe
                      src={project.link}
                      title={project.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-48 rounded-lg"
                    ></iframe>
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
                      No Preview
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                <p className={`text-gray-600 ${expandedIndex === index ? '' : 'line-clamp-3'}`}>
                  {project.description}
                </p>
                <button
                  onClick={() => handleToggle(index)}
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  {expandedIndex === index ? 'See Less' : 'See More...'}
                </button>
              </div>

              {/* Buttons */}
              <div className="flex justify-end mt-4 gap-3">
                {project.github && (
                  <a
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    className="flex items-center gap-1 text-green-500 hover:text-green-700"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-5 h-5" />
                    Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
