import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto mb-12">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-title"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ y: -4, boxShadow: '0 20px 30px -12px rgba(0,0,0,0.15)' }}
            className="group bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  {project.link ? (
                    <motion.iframe
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.15, duration: 0.5 }}
                      src={project.link}
                      title={project.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-48 rounded-lg"
                    ></motion.iframe>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.15 }}
                      className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400 text-sm font-medium"
                    >
                      No Preview
                    </motion.div>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-1">
                  <motion.span
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: index * 0.1 + 0.25, duration: 0.35 }}
                    style={{ originY: 0 }}
                    className="w-1.5 h-5 bg-purple-600 rounded-full shrink-0"
                  />
                  <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                </div>

                <p className={`text-gray-600 mt-1 ${expandedIndex === index ? '' : 'line-clamp-3'}`}>
                  {project.description}
                </p>

                <AnimatePresence initial={false}>
                  {expandedIndex !== index && project.description.length > 90 && (
                    <motion.div key="spacer" />
                  )}
                </AnimatePresence>

                {project.description.length > 90 && (
                  <button
                    onClick={() => handleToggle(index)}
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors mt-1"
                  >
                    {expandedIndex === index ? 'See Less' : 'See More...'}
                  </button>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end mt-4 gap-3">
                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-1.5 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                )}
                {project.link && (
                  <motion.a
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-1.5 text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 px-3 py-1.5 rounded-full transition-colors"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-4 h-4" />
                    Live
                  </motion.a>
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