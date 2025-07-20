import { Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { assets } from "../assets/assets"; // make sure this exports blog1, blog2, blog3 as image paths

type BlogPost = {
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Free advertising for your online business",
    category: "Online Business",
    image: assets.blog1,
    author: "Donald Trump",
    date: "25 Dec, 2025",
  },
  {
    title: "9 simple ways to improve your design skills",
    category: "Ui/UX Design",
    image: assets.blog2,
    author: "Narendra Modi",
    date: "19 Mar, 2025",
  },
  {
    title: "Tips to quickly improve your coding speed.",
    category: "Web Development",
    image: assets.blog3,
    author: "Rick Pratihar",
    date: "15 Feb, 2025",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Latest News & Articles <br />
          From Our Blog
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111827] rounded-xl overflow-hidden shadow-md"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                {post.category}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-snug">
                {post.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
