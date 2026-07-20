import { motion } from "framer-motion";

import { skills } from "../data/portfolioData";
import SkillCard from "./SkillCard";
import SectionWrapper from "./SectionWrapper";

function Skills() {
  return (
    <SectionWrapper>
      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-36"
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Tech Stack
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            A collection of technologies and tools I use to design,
            build, and deploy modern web applications.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              items={skill.items}
            />
          ))}
        </motion.div>
      </section>
    </SectionWrapper>
  );
}

export default Skills;