import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  User,
  Calendar,
  MapPin,
  Flag,
  Mail,
  Microscope,
  School,
  ChevronDown,
} from "lucide-react";
import myphoto from "../images/myphto.webp";

const infoItems = [
  { icon: User, label: "Name", value: "Md. Parvej Hoque Palash" },
  { icon: Calendar, label: "Date of Birth", value: "22nd March, 2001" },
  {
    icon: MapPin,
    label: "Location",
    value: "180/1, Jambari, Elashpur, Cumilla-3500",
  },
  { icon: Flag, label: "Nationality", value: "Bangladeshi" },
  {
    icon: Mail,
    label: "Email",
    value: "mdparvejhoquepalash.official@gmail.com",
  },
];

const passions = ["Data Engineering", "Data Analytics", "Machine Learning", "Artificial Intelligence"];

const ventures = [
  {
    icon: Microscope,
    title: "Genomedics",
    description: "A responsive web platform for a leading medicine supplier in Bangladesh.",
  },
  {
    icon: School,
    title: "Albab Academy",
    description:
      "A comprehensive school management system featuring online admissions, automated payments, academic reporting, and administrative automation.",
  },
];

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.35 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Small reusable heading with a signature accent bar
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-4">
    <motion.span
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ originY: 0 }}
      className="w-1.5 h-6 bg-purple-600 rounded-full"
    />
    <h2 className="text-2xl font-bold text-gray-800">{children}</h2>
  </div>
);

const About = () => {
  const [showFull, setShowFull] = useState(false);

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
        About
      </motion.h1>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Ambient glow behind the photo */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-400 via-fuchsia-300 to-purple-500 opacity-30 blur-2xl -z-10"
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-purple-100"
            >
              <img
                src={myphoto}
                alt="Profile"
                className="w-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <SectionHeading>General Information</SectionHeading>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="space-y-1.5"
            >
              {infoItems.map(({ icon: Icon, label, value }) => (
                <motion.li
                  key={label}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 p-2 rounded-lg transition-colors hover:bg-purple-50"
                >
                  <span className="bg-purple-100 text-purple-600 p-2 rounded-lg shrink-0">
                    <Icon size={16} />
                  </span>
                  <span className="text-gray-700 leading-snug">
                    <strong className="text-gray-800">{label}:</strong>{" "}
                    {value}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <SectionHeading>About Me</SectionHeading>

          <div className="text-gray-600 space-y-3 leading-relaxed">
            <p>
              I am a postgraduate in{" "}
              <strong>Computer Science and Engineering (CSE)</strong>, having
              completed both my <strong>B.Sc.</strong> and{" "}
              <strong>M.Sc.</strong> from{" "}
              <strong>Jahangirnagar University (JU)</strong>.
            </p>

            <p>
              Currently, I work as a{" "}
              <strong>Software Engineer at Divine IT Limited</strong>, where I
              develop data-driven applications and enterprise solutions using
              technologies such as{" "}
              <strong>
                Python, Django, Next.js, React, Node.js, PostgreSQL, MySQL,
                MongoDB
              </strong>
              , and <strong>SQLAlchemy</strong>. My work spans backend
              development, database design, reporting systems, and business
              analytics solutions, enabling organizations to make informed,
              data-driven decisions.
            </p>

            <AnimatePresence initial={false}>
              {showFull && (
                <motion.div
                  key="more"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden space-y-3"
                >
                  <p>
                    I have hands-on experience in designing scalable
                    databases, optimizing SQL queries, automating reports,
                    and building business intelligence dashboards using{" "}
                    <strong>SQL, PostgreSQL, Power BI</strong>, and modern
                    data processing techniques. I enjoy translating complex
                    business requirements into efficient data models,
                    reporting systems, and decision-support tools that
                    improve operational efficiency.
                  </p>

                  <p>
                    My key contributions include working on{" "}
                    <strong>prismERP</strong>, a comprehensive enterprise
                    resource planning platform where I developed scalable
                    features, reporting modules, and data-centric solutions
                    for diverse business operations.
                  </p>

                  <p>
                    Beyond my professional role, I am actively pursuing
                    entrepreneurship through two impactful startup projects:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-1">
                    {ventures.map(({ icon: Icon, title, description }, idx) => (
                      <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + idx * 0.1 }}
                        whileHover={{ y: -3 }}
                        className="flex items-start gap-3 bg-purple-50/60 border border-purple-100 rounded-xl p-4"
                      >
                        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg shrink-0">
                          <Icon size={18} />
                        </span>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-0.5">
                            {description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p>
                    I am passionate about building scalable data pipelines,
                    developing intelligent systems, and leveraging data to
                    solve real-world problems:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {passions.map((topic, idx) => (
                      <motion.span
                        key={topic}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + idx * 0.06 }}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>

                  <p>
                    With a strong foundation in software engineering and
                    data technologies, I enjoy collaborating with
                    stakeholders, transforming raw data into actionable
                    insights, and delivering reliable, scalable, and
                    user-centric solutions that create measurable business
                    value.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setShowFull((prev) => !prev)}
              className="flex items-center gap-1.5 text-purple-600 hover:text-purple-700 font-medium pt-1"
            >
              {showFull ? "See less" : "See more"}
              <motion.span
                animate={{ rotate: showFull ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex"
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;