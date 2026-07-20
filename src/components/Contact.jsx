import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";
import { motion } from "framer-motion";

import { contact } from "../data/portfolioData";
import SectionWrapper from "./SectionWrapper";

function Contact() {
  return (
    <SectionWrapper>
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-36"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-sm"
        >
          {/* Top */}

          <div className="px-10 py-16 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Contact
            </p>

            <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
              {contact.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {contact.description}
            </p>

            <motion.a
              href={`mailto:${contact.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white"
            >
              <FiMail />
              Send me an Email
            </motion.a>

          </div>

          {/* Bottom */}

          <div className="grid border-t border-gray-200 md:grid-cols-4">

            {[
              {
                icon: <FiMail className="text-3xl text-blue-600" />,
                label: "Email",
                href: `mailto:${contact.email}`,
              },
              {
                icon: <FiGithub className="text-3xl text-blue-600" />,
                label: "GitHub",
                href: contact.github,
              },
              {
                icon: <FiLinkedin className="text-3xl text-blue-600" />,
                label: "LinkedIn",
                href: contact.linkedin,
              },
              {
                icon: <FiDownload className="text-3xl text-blue-600" />,
                label: "Resume",
                href: contact.resume,
              },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "Email" || item.label === "Resume" ? undefined : "_blank"}
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="flex flex-col items-center gap-3 border-gray-200 p-8 transition hover:bg-gray-50 md:border-l first:border-l-0 border-t md:border-t-0"
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </motion.a>
            ))}

          </div>

        </motion.div>
      </section>
    </SectionWrapper>
  );
}

export default Contact;