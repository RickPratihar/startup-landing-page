"use client";

import { motion, type Variants } from "framer-motion";
import { assets } from "../assets/assets";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1], // Equivalent to easeOut
    },
  },
};

export default function BrandGrowth() {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Fuel Your Brand’s Digital Growth
          </h2>
          <p className="text-lg text-white/80 mb-6">
            We help businesses unlock their full potential through impactful
            design, high-converting interfaces, and scalable development. Let's
            turn your ideas into reality — the smart way.
          </p>
          <button className="bg-gradient-to-r from-blue-400 to-blue-500 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md">
            Explore Services
          </button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={assets.aboutimg2}
            alt="Service Preview"
            className="rounded-2xl shadow-xl w-full border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
