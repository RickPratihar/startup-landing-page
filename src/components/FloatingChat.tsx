
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const suggestions = [
    "What services do you offer?",
    "Can I get a free quote?",
    "Do you support international clients?",
    "What's your typical project timeline?",
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 bg-white dark:bg-zinc-900 text-black dark:text-white w-80 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-700 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <h4 className="text-lg font-semibold">Live Chat</h4>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3 max-h-60 overflow-y-auto">
              <p className="text-sm bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg w-fit">
                👋 Hi there! How can we help you today?
              </p>

              {/* Suggestions */}
              <div className="flex flex-wrap gap-2">
                {suggestions.map((text, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(text)}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs px-3 py-1 rounded-full hover:bg-blue-200 transition"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t dark:border-zinc-700">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-3 py-2 rounded-md text-sm border dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
