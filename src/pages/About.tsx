import { motion } from "framer-motion";
import { useState } from "react";
import myphoto from "../images/myphto.webp";

const About = () => {
  const [showFull, setShowFull] = useState(false);

  const toggleDescription = () => {
    setShowFull(!showFull);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto mb-4"
    >
      <h1 className="page-title">About Me</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={myphoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              General Information
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Name:</strong> Md. Parvej Hoque Palash
              </li>
              <li>
                <strong>Date of Birth:</strong> 22nd March, 2001
              </li>
              <li>
                <strong>Location:</strong> 180/1, Jambari, Elashpur, Cumilla-3500
              </li>
              <li>
                <strong>Nationality:</strong> Bangladeshi
              </li>
              <li>
                <strong>Email:</strong>{" "}
                mdparvejhoquepalash.official@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">About Me</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                I am a postgraduate in <strong>Computer Science and Engineering (CSE)</strong>, having completed both my <strong>B.Sc.</strong> and <strong>M.Sc.</strong> from <strong>Jahangirnagar University (JU)</strong>.
              </p>

              <p>
                Currently, I work as a <strong>Software Engineer at Divine IT Limited</strong>, where I specialize in building robust full-stack applications using technologies like <strong>Django, Next.js, Node.js, React, MongoDB, MySQL</strong>, and <strong>PostgreSQL</strong>.
              </p>

              {showFull && (
                <>
                  <p>
                    My key contributions include working on <strong>prismERP</strong> – a comprehensive enterprise resource planning platform tailored for diverse business needs.
                  </p>

                  <p>
                    I’m also actively pursuing entrepreneurship through two impactful startup projects:
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>🔬 Genomedics:</strong> A dynamic, responsive website for a prominent medicine supplier in Bangladesh.
                    </li>
                    <li>
                      <strong>🏫 Albab Academy:</strong> A full-featured school automation platform with online admissions, automated payments, and detailed academic reporting.
                    </li>
                  </ul>

                  <p>
                    With a strong background in <strong>backend architecture</strong>, <strong>front-end development</strong>, and <strong>database management</strong>, I’m passionate about building scalable, efficient, and user-centric solutions.
                  </p>

                  <p>
                    I strive to create systems that are not only technically sound but also intuitive and enjoyable to use. I bring <strong>creativity</strong>, <strong>attention to detail</strong>, and a <strong>user-first mindset</strong> to every project—always aiming to deliver meaningful and high-impact results.
                  </p>
                </>
              )}

              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:underline font-medium"
              >
                {showFull ? "See less..." : "See more..."}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
