"use client";
import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { id: "react", label: "React", logo: "/images/react2.webp" },
  { id: "nextjs", label: "Next.js", logo: "/images/next2.webp" },
  { id: "nodejs", label: "Node.js", logo: "/images/node2.webp" },
  { id: "express", label: "Express", logo: "/images/express.webp" },
  { id: "typescript", label: "TypeScript", logo: "/images/typescript.webp" },
  { id: "javascript", label: "JavaScript", logo: "/images/javascript.webp" },
  { id: "python", label: "Python", logo: "/images/python.webp" },
  { id: "mongodb", label: "MongoDB", logo: "/images/mongo.webp" },
  { id: "mysql", label: "MySQL", logo: "/images/mysql.webp" },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-8">
      <h4 className="text-lg font-semibold mb-4 text-gray-900">Tech Stack</h4>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {techStack.map((tech) => (
          <motion.div
            key={tech.id}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-2xl backdrop-blur-md bg-white/50 border border-gray-200 flex flex-col items-center text-center shadow-sm hover:shadow-purple-300/40 transition"
          >
            <img src={tech.logo} alt={tech.label} className="w-10 h-10 object-contain" />
            <div className="mt-2 text-sm font-medium text-gray-800">{tech.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
