import { Mail, MessageSquareText, MapPin, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import DottedMap from "dotted-map";

export default function ContactMapSection() {
  const [svgMap, setSvgMap] = useState<string>("");

  useEffect(() => {
    const map = new DottedMap({
      height: 60,              
      grid: "diagonal",         
    });

    map.addPin({ lat: -37.8136, lng: 144.9631, svgOptions: { color: "#60a5fa", radius: 0.4 } });
    map.addPin({ lat: 40.7128, lng: -74.006, svgOptions: { color: "#4ade80", radius: 0.4 } });
    map.addPin({ lat: 51.5074, lng: -0.1278, svgOptions: { color: "#facc15", radius: 0.4 } });

    const svg = map.getSVG({
      radius: 0.2,
      shape: "circle",
      color: "#ffffff33",
      backgroundColor: "#0f172a",
    });

    setSvgMap(svg);
  }, []);

  return (
    <section className="bg-[#0f172a] text-white py-30 px-6 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-blue-500 text-sm uppercase font-semibold mb-2">Contact us</p>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text mb-4">
          Get in touch with our team
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We have the team and know-how to help you scale 10x faster.
        </p>
      </div>

      {/* Dotted Map */}
      {svgMap && (
        <div
          className="relative z-10 mb-20 max-w-6xl mx-auto"
          dangerouslySetInnerHTML={{ __html: svgMap }}
        />
      )}

      {/* Contact Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto relative z-10">
        {[
          {
            icon: <MessageSquareText className="w-5 h-5 text-blue-400" />,
            title: "Chat to sales",
            desc: "Speak to our friendly team.",
            action: (
              <a href="mailto:sales@yourdomain.com" className="text-blue-400 hover:underline">
                sales@yourdomain.com
              </a>
            ),
          },
          {
            icon: <Mail className="w-5 h-5 text-blue-400" />,
            title: "Chat to support",
            desc: "We’re here to help.",
            action: (
              <a href="mailto:support@yourdomain.com" className="text-blue-400 hover:underline">
                support@yourdomain.com
              </a>
            ),
          },
          {
            icon: <MapPin className="w-5 h-5 text-blue-400" />,
            title: "Visit us",
            desc: "Visit our office HQ.",
            action: (
              <button className="text-sm px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-md border border-blue-400 text-blue-300">
                View on Google Maps
              </button>
            ),
          },
          {
            icon: <Phone className="w-5 h-5 text-blue-400" />,
            title: "Call us",
            desc: "Mon-Fri from 8am to 5pm.",
            action: (
              <a href="tel:+1555000000" className="text-blue-400 hover:underline">
                +1 (555) 000-0000
              </a>
            ),
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-xl p-6 text-left shadow-md backdrop-blur-sm hover:shadow-lg transition"
          >
            <div className="mb-4">{card.icon}</div>
            <h4 className="text-lg font-semibold text-white mb-1">{card.title}</h4>
            <p className="text-gray-400 text-sm mb-4">{card.desc}</p>
            <div>{card.action}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
