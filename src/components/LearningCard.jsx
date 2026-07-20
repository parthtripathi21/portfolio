import { motion } from "framer-motion";

function LearningCard({ item }) {
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
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">
          {item.title}
        </h3>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
          {item.year}
        </span>
      </div>

      <p className="mt-2 font-medium text-gray-500">
        {item.organization}
      </p>

      <p className="mt-5 leading-relaxed text-gray-600">
        {item.description}
      </p>
    </motion.div>
  );
}

export default LearningCard;