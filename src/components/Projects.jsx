"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-8 text-gray-900">Selected Projects</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * (idx % 4) }}
            className="rounded-2xl overflow-hidden backdrop-blur-lg bg-white/60 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
          >
            {/* Screenshot */}
            <div className="relative h-48 w-full overflow-hidden shrink-0 bg-gray-100">
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.currentTarget.src = "/fallback-project.jpg" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="text-xs text-gray-300">{p.category}</p>
              </div>
            </div>

            {/* Details */}
            <div className="p-5 flex flex-col flex-1">
              <p className="text-sm text-gray-700 flex-1">{p.description}</p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {p.techStack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-white/60 ring-1 ring-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex gap-3">
                {p.liveLink && (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-purple-500 text-white text-sm shadow hover:opacity-90"
                  >
                    Live Demo
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg ring-1 ring-gray-200 bg-white/70 text-sm hover:bg-white"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
