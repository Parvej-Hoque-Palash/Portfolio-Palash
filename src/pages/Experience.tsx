import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    organisation: 'Divine IT Limited',
    role: 'Software Engineer',
    period: 'April 2025 - Present',
    summary: [
      'Implemented a SearchSession module that shortens URLs by storing a large number of parameters in a table under a session key and using that session key in the URL.',
      'Implemented array support for receiver in Banglalink’s SMS Integration.',
      'Developed and maintained enterprise applications, reporting systems, and data-driven solutions using Python, SQLAlchemy, PostgreSQL, and JavaScript.',
      'Designed and generated business reports, regulatory reports, KPI dashboards, and visualization components to support operational monitoring and strategic decision-making.',
      'Built and optimized complex SQL queries and database structures to improve reporting performance, data accuracy, and system efficiency.',
      'Developed VAT calculation modules, Mushak reports, and analytics dashboards within PrismVAT, enabling automated compliance reporting and business performance tracking.',
      'Designed and implemented an Auction (Bidding) Module in PrismERP, providing real-time monitoring, workflow automation, sales tracking, and operational reporting capabilities.',
      'Enhanced third-party integrations and notification services while improving application scalability and data flow reliability.'
    ]
  },
  {
    organisation: 'Divine IT Limited',
    role: 'Trainee Software Engineer',
    period: 'July 2024 - March 2025',
    summary: [
      'Created a SQL Query Builder Editor using React and Redux, enabling users to generate dynamic queries and perform data analysis efficiently.',
      'Learned and worked with Furinapy, a Python-based framework, on the PrismERP project.',
      'Designed, optimized, and refactored over 1,000 SQLAlchemy queries during migration from MySQL to PostgreSQL, improving query performance, maintainability, and reporting efficiency.',
      'Implemented a portlet page with a sidebar to display a list of portlets on the left and each portlet on the right.',
      'Implemented user-wise portlet URL access in the list of portlets.',
      'Implemented dashboard management and data access features, including configurable reporting components, session-based search management, and role-based access control.',
      'Performed query tuning, testing, debugging, and performance optimization to ensure reliable reporting and accurate business data delivery.'
    ]
  }
];

// Stagger container for bullet points
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } }
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto mb-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-title"
      >
        Experience
      </motion.h1>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.organisation}-${experience.role}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ y: -4, boxShadow: '0 20px 30px -12px rgba(0,0,0,0.15)' }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-start space-x-4">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                className="bg-purple-100 p-3 rounded-lg shrink-0"
              >
                <Briefcase className="text-purple-600" size={24} />
              </motion.div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <motion.span
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: index * 0.15 + 0.2, duration: 0.35 }}
                        style={{ originY: 0 }}
                        className="w-1.5 h-5 bg-purple-600 rounded-full shrink-0"
                      />
                      <h3 className="text-xl font-bold text-gray-800">{experience.organisation}</h3>
                    </div>
                    <p className="font-medium">
                      <span className="font-bold">Designation: </span>
                      <span className="text-purple-600">{experience.role}</span>
                    </p>
                    <p className="font-medium">
                      <span className="font-bold">Period: </span>
                      {experience.period}
                    </p>
                  </div>
                </div>
                <div className="mt-3 text-gray-600">
                  <span className="font-bold">Summary: </span>
                  <motion.ul
                    variants={listVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="list-disc list-inside mt-1 space-y-1.5"
                  >
                    {experience.summary.map((point, idx) => (
                      <motion.li
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ x: 4, color: '#7e22ce' }}
                        className="transition-colors"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;