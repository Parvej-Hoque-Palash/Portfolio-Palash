import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C', 'C++', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
    color: 'bg-blue-600'
  },
  {
    title: 'Frameworks & Databases',
    icon: Server,
    skills: [
      'Bootstrap', 'Tailwind CSS', 'React', 'Node.js', 'Express.js', 'Next.js', 'Django',
      'MySQL', 'PostgreSQL', 'MongoDB'
    ],
    color: 'bg-green-600'
  },
  {
    title: 'Technologies & Tools',
    icon: Wrench,
    skills: [
      'GitHub', 'Figma', 'Postman', 'PgAdmin4', 'Eclipse', 'Netlify', 'Cloudflare', 'Vercel', 'Surge'
    ],
    color: 'bg-purple-600'
  },
  {
    title: 'Languages',
    icon: Globe,
    skills: ['English (Fluent)', 'Bengali (Native)'],
    color: 'bg-red-600'
  }
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto mb-4"
    >
      <h1 className="page-title">My Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div
              className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}
            >
              <category.icon size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
