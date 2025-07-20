
import { motion, type Variants } from "framer-motion";
import CountUp from "react-countup";
import { User, GraduationCap, Bell } from "lucide-react";
import { assets } from "../assets/assets";


const fadeUp:Variants  = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const stats = [
  {
    icon: <User className="w-6 h-6 text-white" />,
    value: 12600,
    suffix: "+",
    label: "Clients Onboarded",
    color: "bg-orange-600",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    value: 30,
    suffix: "+",
    label: "Brands We Manage",
    color: "bg-green-600",
  },
  {
    icon: <Bell className="w-6 h-6 text-white" />,
    value: 100,
    suffix: "+",
    label: "Campaigns Launched",
    color: "bg-yellow-500",
  },
];

const GrowthStats = () => {
  return (
    <section className="relative  text-white py-28 px-6 overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 items-start">
        {/* Right: Image & Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={1}
          className="order-2 md:order-1"
        >
          <img
            src={assets.CounterImg}
            alt="Agency Team"
            className="rounded-3xl w-full shadow-xl"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 mb-3 rounded-full ${stat.color} flex items-center justify-center shadow-lg ring-4 ring-white/10`}
                >
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold">
                  <CountUp end={stat.value} duration={2} />{stat.suffix}
                </h3>
                <p className="text-sm text-white/60 mt-1 text-center">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Left: Heading & CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="order-1 md:order-2 md:pl-10 "
        >
          <p className="text-sm text-blue-500 uppercase tracking-widest mb-2">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Building Brands That <br /> Speak for Themselves
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Our digital agency is built to grow your brand with stunning design, innovative
            marketing, and measurable results. Your success is our strategy.
          </p>
          <button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white  font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md">
            Let’s Build Together
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthStats;
