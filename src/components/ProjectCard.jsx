import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <motion.img
          loading="lazy"
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />

        {project.featured && (
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-blue-600 shadow-md backdrop-blur">
            ★ Featured
          </span>
        )}
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-3xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mt-4 leading-relaxed text-gray-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4 pt-8">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-medium transition-colors hover:bg-gray-900 hover:text-white"
          >
            <FiGithub />
            GitHub
          </motion.a>

          <motion.a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Live Demo
            <FiArrowUpRight />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;