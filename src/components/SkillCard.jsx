import { motion } from "framer-motion";

function SkillCard({ category, items }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
    >
      <h3 className="mb-6 text-2xl font-bold text-gray-900">
        {category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;