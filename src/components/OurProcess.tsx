import { motion } from "framer-motion";
import { Lightbulb, PenTool, Rocket, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    title: "Discovery",
    desc: "We begin by deeply understanding your brand, audience, and goals.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-white" />,
    title: "Design & Strategy",
    desc: "We craft stunning UI/UX and a roadmap aligned with your goals.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "Launch",
    desc: "Our development team brings your vision to life across all devices.",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-white" />,
    title: "Ongoing Support",
    desc: "We monitor, optimize, and help scale your brand over time.",
  },
];

const OurProcess = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-28 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our <span className="text-blue-500">Workflow Process</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A step-by-step approach designed to deliver powerful and efficient results for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg text-center"
          >
            <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mb-4 mx-auto shadow-md">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
