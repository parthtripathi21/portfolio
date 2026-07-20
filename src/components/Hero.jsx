import { FiArrowRight, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

import avatar from "../assets/images/avatar.png";
import { personalInfo } from "../data/portfolioData";

import FloatingTech from "./FloatingTech";
import SectionWrapper from "./SectionWrapper";

function Hero() {
  return (
    <SectionWrapper>
      <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center justify-between gap-10 px-6 pt-16 lg:gap-20">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-xl"
        >
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            {personalInfo.role}
          </span>

          <h1 className="mt-6 max-w-2xl text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            {personalInfo.tagline}
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            {personalInfo.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white"
            >
              View Projects
              <FiArrowRight />
            </motion.a>

            <motion.a
              href={personalInfo.resume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700"
            >
              <FiDownload />
              Resume
            </motion.a>

          </div>

          {/* Stats */}

          <div className="mt-14 flex gap-12">

            <div>
              <h2 className="text-3xl font-bold text-gray-900">4+</h2>
              <p className="text-gray-500">Featured Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">10+</h2>
              <p className="text-gray-500">Technologies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">2026</h2>
              <p className="text-gray-500">Graduate</p>
            </div>

          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative hidden flex-1 items-center justify-center lg:flex"
        >
          <FloatingTech />

          <div className="relative z-10 rounded-[32px] border border-gray-200 bg-white p-10 shadow-2xl">

            <img
              src={avatar}
              alt="Parth Illustration"
              className="w-[420px]"
            />

          </div>
        </motion.div>

      </section>
    </SectionWrapper>
  );
}

export default Hero;