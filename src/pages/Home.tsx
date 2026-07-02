import { motion } from 'framer-motion';
import myphoto from '../images/myphto.webp'

import {
  Code2,
  Network,
  Server,
  BrainCircuit,
  BrainCog,
  Database,
  BarChart3,
  PieChart
} from 'lucide-react';

const characteristics = [
  { icon: Database, title: "Data Engineering", color: "bg-sky-600" },
  { icon: BarChart3, title: "Data Analytics", color: "bg-emerald-600" },
  { icon: Code2, title: 'Web Development', color: 'bg-blue-500' },
  { icon: Network, title: 'System Design', color: 'bg-green-500' },
  { icon: Server, title: 'Backend Development', color: 'bg-red-500' },
  { icon: BrainCircuit, title: 'Machine Learning', color: 'bg-indigo-500' },
  { icon: BrainCog, title: 'Deep Learning', color: 'bg-pink-500' },
  { icon: PieChart, title: 'Business Intelligence', color: 'bg-orange-500' },
];

const headingWords = ["Welcome", "to", "My", "Portfolio"];

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } }
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-theme(space.16))] flex flex-col items-center justify-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        {/* Photo with rotating gradient ring */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <motion.div
            aria-hidden="true"
            className="absolute -inset-2 rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, #9333ea, #ec4899, #9333ea, #6366f1, #9333ea)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -inset-4 rounded-full bg-purple-500 opacity-20 blur-2xl -z-10"
            animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
            className="absolute inset-1 rounded-full overflow-hidden ring-4 ring-white"
          >
            <img
              src={myphoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Word-by-word heading reveal */}
        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="text-xl text-gray-600"
        >
          Turning ideas into reality through creativity
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {characteristics.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + index * 0.08, duration: 0.35, ease: 'easeOut' }}
            whileHover={{ y: -6, boxShadow: '0 20px 30px -12px rgba(0,0,0,0.18)' }}
            className="group p-6 bg-white rounded-xl shadow-lg transition-shadow duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
              className={`${item.color} text-white p-3 rounded-lg inline-block`}
            >
              <item.icon size={24} />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;