"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-8 text-gray-900">Featured Work</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {displayedProjects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
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
                  <h4 className="text-lg font-semibold line-clamp-1">{p.title}</h4>
                  <p className="text-xs text-gray-300">{p.category}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm text-gray-700 flex-1 line-clamp-3">{p.description}</p>

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
                      className="px-3 py-2 rounded-lg bg-purple-500 text-white text-sm shadow hover:opacity-90 flex-1 text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg ring-1 ring-gray-200 bg-white/70 text-sm hover:bg-white flex-1 text-center"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      
      {projects.length > 6 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition shadow-md"
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
}
