import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-5xl font-extrabold text-blue-600"
      >
        &lt;PD /&gt;
      </motion.h1>

      <p className="mt-6 text-lg text-gray-500">
        Loading portfolio...
      </p>
    </div>
  );
}

export default Loading;