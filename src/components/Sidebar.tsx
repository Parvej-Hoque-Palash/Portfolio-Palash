import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Code2,
  FolderGit2,
  BookOpen,
  Briefcase,
  Settings,
  GraduationCap,
  Mail,
  FileText,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import VisitorCounter from './VisitorCounter';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom hook to check media query
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/skills', icon: Code2, label: 'Skills' },
    { path: '/projects', icon: FolderGit2, label: 'Projects' },
    { path: '/research', icon: BookOpen, label: 'Research Work' },
    { path: '/experience', icon: Briefcase, label: 'Experience' },
    // { path: '/research_interest', icon: Settings, label: 'Research Interest & Expertise' },
    { path: '/education', icon: GraduationCap, label: 'Education' },
    { path: '/contact', icon: Mail, label: 'Contact' },
    { path: '/resume', icon: FileText, label: 'Resume' },
  ];

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: isDesktop || isOpen ? 0 : -300 }}
      transition={{ type: 'spring', damping: 20 }}
      className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-xl z-40 transform transition-transform duration-100 ease-in-out ${
        isDesktop ? 'translate-x-0' : isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Scrollable Container */}
      <div className="h-full flex flex-col">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 text-center border-b border-gray-200"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold text-gray-800"
          >
            Md. Parvej Hoque Palash
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-600 font-medium"
          >
            Data & AI Researcher
          </motion.p>
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-6">
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="space-y-2"
          >
            {menuItems.map((item) => (
              <motion.div key={item.path} variants={itemVariants}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `relative flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-700 hover:bg-purple-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBackground"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          className="absolute inset-0 bg-purple-600 rounded-lg -z-10"
                        />
                      )}
                      <motion.span
                        whileHover={{ scale: 1.15, rotate: -6 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                        className="inline-flex"
                      >
                        <item.icon size={20} />
                      </motion.span>
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </nav>
        <VisitorCounter />
      </div>
    </motion.aside>
  );
};

export default Sidebar;