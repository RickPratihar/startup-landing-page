import {
  BarChart4,
  Layers,
  LayoutTemplate,
  RefreshCcw,
  Settings,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BarChart4 className="w-6 h-6 text-blue-400" />,
    title: "Crafted for Startups",
    description:
      "Built for modern startups, this template provides the foundation you need to launch quickly.",
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    title: "High-quality Design",
    description:
      "Enjoy pixel-perfect design with consistent spacing, alignment, and visual hierarchy.",
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-blue-400" />,
    title: "All Essential Sections",
    description:
      "From hero to pricing, all vital UI blocks are included for seamless project building.",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: "Speed Optimized",
    description:
      "Optimized with modern tooling and best practices to ensure blazing-fast load times.",
  },
  {
    icon: <Settings className="w-6 h-6 text-blue-400" />,
    title: "Fully Customizable",
    description:
      "Easily adapt layouts, colors, and components to match your brand and goals.",
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-blue-400" />,
    title: "Regular Updates",
    description:
      "Receive ongoing improvements and additional components as the template evolves.",
  },
];

export default function Features() {
  return (
    <section className=" text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Our Unique & Premium <br />
          <span className="text-blue-500">Core Features</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Discover everything you need to build a stunning, fast, and effective
          web experience — without the hassle.
        </motion.p>
        <div className="absolute w-72 h-72 bg-blue-600/30 blur-3xl rounded-full -bottom-140 left-10 z-0 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pt-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl hover:bg-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-[15px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
