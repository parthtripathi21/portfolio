import { motion } from "framer-motion";

import { learning } from "../data/portfolioData";
import LearningCard from "./LearningCard";
import SectionWrapper from "./SectionWrapper";

function Learning() {
  return (
    <SectionWrapper>
      <section className="mx-auto max-w-7xl px-6 py-36">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Learning Journey
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
            Continuous Learning
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            I believe learning never stops. Here are some of the
            courses, internships, and virtual experiences that have
            helped shape my development journey.
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
          className="grid gap-8 md:grid-cols-2"
        >
          {learning.map((item) => (
            <LearningCard
              key={item.title}
              item={item}
            />
          ))}
        </motion.div>

      </section>
    </SectionWrapper>
  );
}

export default Learning;