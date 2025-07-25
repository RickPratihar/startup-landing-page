import React from "react";

type TeamMember = {
  avatar: string;
  name: string;
  title: string;
  desc: string;
  linkedin: string;
  twitter: string;
};

const team: TeamMember[] = [
  {
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "Lysa Sandiago",
    title: "Head of Design",
    desc: "Design leader driving innovation through thoughtful visuals and UX.",
    linkedin: "#",
    twitter: "#",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Daniel Martin",
    title: "Product Designer",
    desc: "Focused on crafting pixel-perfect interfaces that drive engagement.",
    linkedin: "#",
    twitter: "#",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Vicky Tanson",
    title: "Product Manager",
    desc: "Championing user needs and business goals through strategic product vision.",
    linkedin: "#",
    twitter: "#",
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-20 text-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-4xl font-bold mb-4">Meet Our Team</h3>
          <p className="text-gray-400 text-base">
            A team of passionate individuals committed to building digital
            excellence.
          </p>
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, idx) => (
            <li
              key={idx}
              className="bg-[#1e293b] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.avatar}
                alt={`${member.name} - ${member.title}`}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <div className="mt-4">
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-blue-400">{member.title}</p>
                <p className="text-gray-400 text-sm mt-2">{member.desc}</p>
                <div className="flex justify-center gap-5 mt-4 text-gray-400">
                  <a href={member.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <svg
                      className="w-5 h-5 hover:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                    >
                      <path d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" />
                    </svg>
                  </a>
                  <a href={member.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg
                      className="w-5 h-5 hover:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                    >
                      <path d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
