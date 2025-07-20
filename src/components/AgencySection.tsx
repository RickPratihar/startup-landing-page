import { BarChart2, Brush, Monitor } from "lucide-react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Brush className="text-purple-600" size={20} />,
    title: "Creative Branding",
    description:
      "We craft memorable brand identities that resonate with your audience and set you apart from the competition.",
  },
  {
    icon: <Monitor className="text-purple-600" size={20} />,
    title: "Modern Web Design",
    description:
      "Our expert designers build sleek, responsive websites that engage users and drive conversions for your business.",
  },
  {
    icon: <BarChart2 className="text-purple-600" size={20} />,
    title: "Digital Strategy",
    description:
      "From SEO to social media, we create data-driven strategies that help you grow and stay ahead in the digital world.",
  },
];

const AgencySection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-36">
        {/* Left: Image with animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 lg:w-5/12 mx-auto"
        >
          {/* Background Circle */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-blue-400 rounded-full z-0"></div>

          {/* Main Image */}
          <img
            src={assets.agencyImage}
            alt="Agency"
            className="relative z-10 mx-auto w-60 sm:w-72 md:w-96 lg:w-full max-w-md"
          />

          {/* Floating Card 1 */}
          <motion.div
            animate={{ x: [0, -10, 0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 left-4 sm:top-10 sm:left-6 md:top-24 md:-left-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-5 py-4 w-40 sm:w-48 z-20 shadow-2xl"
          >
            <p className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wide mb-1">
              Projects Delivered
            </p>
            <p className="text-2xl font-bold text-white">450+</p>
          </motion.div>

          {/* Floating Card 2 - Client Ratings */}
          <motion.div
            animate={{ x: [0, 10, 0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 md:bottom-20 md:-right-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-5 w-60 sm:w-72 z-20 shadow-2xl"
          >
            <p className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wide mb-2">
              Client Ratings
            </p>
            <div className="text-sm space-y-1 text-white/90">
              <p>
                ⭐️⭐️⭐️⭐️⭐️
                <span className="font-semibold">98% Satisfaction</span>
              </p>
              <p>
                🌍 <span className="font-semibold">12+ Countries Served</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Text with animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-7/12 space-y-8 px-2 sm:px-4"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            Empower Your Brand <br className="hidden sm:block" /> with Our
            Creative Agency
          </h2>

          {/* Divider */}
          <hr className="border-white/20" />

          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 sm:gap-6"
              >
                {/* Fully rounded and consistent icon container */}
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 text-purple-600 text-xl shrink-0">
                  {feature.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-1 sm:space-y-2">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 font-serif">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencySection;
