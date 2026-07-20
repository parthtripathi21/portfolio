import { motion } from "framer-motion";

import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";

function Projects() {
  return (
    <SectionWrapper>
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-36"
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            A collection of projects showcasing my frontend development,
            full-stack engineering, and AI journey through practical,
            real-world applications.
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
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-10 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </section>
    </SectionWrapper>
  );
}

export default Projects;