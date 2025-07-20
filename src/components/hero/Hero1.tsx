import { MoveRight, Play } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

export function Hero1() {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white px-6 overflow-hidden py-28 md:py-56">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full w-fit shadow-md">
            <span className="text-blue-500 text-4xl leading-none">•</span>
            <p className="text-sm md:text-lg font-medium">
              The road to freedom starts from here
            </p>
          </div>

          {/* Title + Typewriter */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold pb-2">
              Design That Converts
            </h2>
            <h1 className="text-2xl md:text-4xl font-semibold text-blue-500">
              <Typewriter
                words={[
                  "Smart designs that convert.",
                  "Elegant UIs for modern apps.",
                  "Launch your next big idea.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-md">
            A handcrafted template for your next Startup, Agency, SaaS, or
            Portfolio site. Beautifully designed, highly performant, and ready
            to launch.
          </p>

          {/* Buttons */}
          <div className="flex flex-row space-x-4">
            <button className="flex items-center justify-center gap-2 w-44 h-14 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white rounded-lg font-semibold shadow-lg">
              Get Started
              <MoveRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 w-44 h-14 border border-white/20 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold shadow-md transition duration-200">
              <Play className="w-5 h-5" />
              How it works
            </button>
          </div>
        </motion.div>

        {/* Right Visual Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative flex items-center justify-center h-[500px] md:h-[620px] w-full"
        >
          {/* Background Glow Circle */}
          <div className="absolute w-96 h-96 bg-blue-600/30 blur-3xl rounded-full top-20 left-10 z-0 animate-pulse" />

          {/* Main Image */}
          <img
            src={assets.heroimg2}
            alt="Hero Visual"
            className="relative w-[105%] md:w-[120%] max-w-[650px] scale-105 md:scale-110"
          />
        </motion.div>
      </div>
    </section>
  );
}
