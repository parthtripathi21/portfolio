import { motion } from "framer-motion";

import reactLogo from "../assets/icons/react.png";
import pythonLogo from "../assets/icons/python.png";
import tailwindLogo from "../assets/icons/tailwind.png";
import postgresLogo from "../assets/icons/postgresql.png";
import fastapiLogo from "../assets/icons/FastAPI.png";
import tensorflowLogo from "../assets/icons/Tensorflow.png";
import nodeLogo from "../assets/icons/node.png";
import javascriptLogo from "../assets/icons/javascript.png";

// const technologies = [
//   {
//     name: "React",
//     icon: reactLogo,
//     position: "-top-4 left-12",
//     duration: 4,
//     delay: 0,
//   },
//   {
//     name: "Python",
//     icon: pythonLogo,
//     position: "top-28 -left-12",
//     duration: 5,
//     delay: 0.4,
//   },
//   {
//     name: "Tailwind",
//     icon: tailwindLogo,
//     position: "bottom-24 -left-8",
//     duration: 4.6,
//     delay: 0.8,
//   },
//   {
//     name: "JavaScript",
//     icon: javascriptLogo,
//     position: "bottom-2 left-20",
//     duration: 5.4,
//     delay: 0.3,
//   },
//   {
//     name: "PostgreSQL",
//     icon: postgresLogo,
//     position: "bottom-20 -right-12",
//     duration: 4.8,
//     delay: 1,
//   },
// ];

const technologies = [
  {
    name: "React",
    icon: reactLogo,
    position: "-top-4 left-12",
    duration: 4,
    delay: 0,
  },
  {
    name: "Python",
    icon: pythonLogo,
    position: "top-28 -left-12",
    duration: 5,
    delay: 0.4,
  },
  {
    name: "Tailwind",
    icon: tailwindLogo,
    position: "bottom-24 -left-8",
    duration: 4.6,
    delay: 0.8,
  },
  {
    name: "Node.js",
    icon: nodeLogo,
    position: "-top-2 right-16",
    duration: 5.2,
    delay: 0.2,
  },
  {
    name: "FastAPI",
    icon: fastapiLogo,
    position: "top-24 right-0",
    duration: 4.7,
    delay: 0.6,
  },
  {
    name: "TensorFlow",
    icon: tensorflowLogo,
    position: "bottom-6 right-16",
    duration: 5,
    delay: 1,
  },
  {
    name: "JavaScript",
    icon: javascriptLogo,
    position: "bottom-2 left-20",
    duration: 5.4,
    delay: 0.3,
  },
  {
    name: "PostgreSQL",
    icon: postgresLogo,
    position: "bottom-20 -right-12",
    duration: 4.8,
    delay: 1.2,
  },
];

function FloatingTech() {
  return (
    <>
      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          className={`absolute z-30 ${tech.position}`}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: tech.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: tech.delay,
          }}
          whileHover={{
            scale: 1.08,
            y: -8,
          }}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md">

            <img
              src={tech.icon}
              alt={tech.name}
              className="h-7 w-7 object-contain"
            />

            <span className="font-semibold text-gray-700">
              {tech.name}
            </span>

          </div>
        </motion.div>
      ))}
    </>
  );
}

export default FloatingTech;