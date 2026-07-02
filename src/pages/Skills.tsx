import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Globe, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'SQL', 'JavaScript', 'C', 'C++', 'HTML', 'CSS'],
    color: 'bg-blue-600'
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    skills: [
      'PostgreSQL', 'MySQL', 'Redshift', 'SQLAlchemy', 'Pandas', 'Power BI',
      'Data Modeling', 'Query Optimization', 'Reporting & Dashboards',
      'Business Intelligence & KPI Reporting', 'Data Visualization'
    ],
    color: 'bg-orange-600'
  },
  {
    title: 'Frameworks & Databases',
    icon: Server,
    skills: [
      'Django', 'React', 'Node.js', 'Express.js', 'Next.js',
      'PostgreSQL', 'MySQL', 'MongoDB'
    ],
    color: 'bg-green-600'
  },
  {
    title: 'Technologies & Tools',
    icon: Wrench,
    skills: [
      'REST API', 'Eclipse (BIRT Reporting)', 'GitHub', 'Postman',
      'Linux Environment', 'Figma', 'Cloudflare', 'Vercel', 'Netlify'
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

// Stagger container for the pills inside each card
const pillContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 }
  }
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 6 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto mb-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-title"
      >
        My Skills
      </motion.h1>

      <div className="grid grid-cols-1 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ y: -4, boxShadow: '0 20px 30px -12px rgba(0,0,0,0.15)' }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center text-white shrink-0`}
              >
                <category.icon size={24} />
              </motion.div>
              <h2 className="text-xl font-bold text-gray-800">
                {category.title}
              </h2>
            </div>

            <motion.div
              variants={pillContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={pillVariants}
                  whileHover={{ scale: 1.08, backgroundColor: '#ede9fe', color: '#6d28d9' }}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;