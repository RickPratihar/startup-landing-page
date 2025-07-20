import { motion } from "framer-motion";
import CountUp from "react-countup";
import { assets } from "../assets/assets";

const stats = [
  { value: 100, label: "Team Members" },
  { value: 15, label: "Countries" },
  { value: 60, label: "Projects Completed" },
  { value: 30, label: "Offices Worldwide" },
  { value: 25, label: "Project Awards" },
];

export default function AboutUsPage() {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white min-h-screen py-36 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-wide text-blue-400 font-semibold mb-2">
          About Us
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Bringing Your Vision to Life with Expertise and Dedication
        </h1>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <img
          src={assets.heroimg}
          alt="Team"
          className="rounded-3xl w-full h-[50vh] object-cover shadow-xl border border-white/10"
        />
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-center gap-6 mb-20">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/10 rounded-xl py-6 shadow-sm backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold text-white">
              <CountUp end={stat.value} duration={2} />+
            </h3>
            <p className="text-sm text-white/70 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Company Story */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            Crafting Excellence
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            The Journey of Our Agency
          </h3>
          <p className="text-white/80 leading-relaxed">
            Our story began with a passion for innovation, design, and
            delivering exceptional digital products. Over the years, we’ve grown
            into a multidisciplinary team trusted by global brands. We are
            dedicated to crafting premium solutions that combine functionality
            with creativity.
          </p>
        </div>

        <div className="space-y-10">
          <div className="bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-white mb-2">
              Inception Vision
            </h4>
            <p className="text-white/70 pb-5">
              Our agency was born from a collective dream to push digital
              boundaries. From humble beginnings, we set out to reshape how
              brands connect with their audiences.
            </p>
            <img
              src={assets.aboutimg2}
              alt=""
              className="rounded-3xl w-full h-80 object-cover shadow-xl border border-white/10"
            />
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-sm">
          <h4 className="text-xl font-semibold text-white mb-2">
            Evolutionary Growth
          </h4>
          <p className="text-white/70 pb-5">
            From local clients to global impact, our commitment to quality and
            innovation has driven us forward. Our work speaks for itself in over
            15 countries.
          </p>
          <img
            src={assets.aboutimg1}
            alt=""
            className="rounded-3xl w-full h-80 object-cover shadow-xl border border-white/10"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            Excellence Journey
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            The Excellence of Our Agency
          </h3>
          <p className="text-white/80 leading-relaxed">
            Our journey started with a bold vision: to blend innovation, design,
            and technology into seamless digital experiences. What began as a
            passion project has evolved into a trusted, multidisciplinary agency
            serving global brands. Today, we specialize in delivering
            high-impact solutions that fuse functionality with creative
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
