import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
    organisation: 'Divine IT Limited',
    role: 'Software Engineer',
    period: 'April 2025 - Present',
    summary: [
      'Implemented a SearchSession module that shorten the URLs by taking a large number of parameters in a table under a session key and use that session key in url which shorten the url.',
      'Implemented array support for receiver in Banglalink’s SMS Integration.'
    ]
  },
  {
    organisation: 'Divine IT Limited',
    role: 'Trainee Software Engineer',
    period: 'July 2024 - March 2025',
    summary: [
      'Created a SQL Query Builder Editor using React and Redux.',
      'Learned and worked with Furinapy, a Python-based framework, on the PrismERP project.',
      'Converted over 1,000 SQLAlchemy queries from MySQL to PostgreSQL.',
      'Implemented a portlet page with sidebar to display a list of portlets on the left and each portlet on the right.',
      'Implemented user-wise portlet URL access in the list of portlets.'
    ]
  }
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto mb-4"
    >
      <h1 className="page-title">Experience</h1>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.organisation}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Briefcase className="text-purple-600" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{experience.organisation}</h3>
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
                <div className="mt-2 text-gray-600">
                  <span className="font-bold">Summary: </span>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {experience.summary.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
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
