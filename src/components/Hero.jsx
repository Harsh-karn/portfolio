"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, y: 8 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.05 }} 
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
          >
            Hi, I’m <span className="text-purple-600">{profile.name}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.15 }} 
            className="mt-4 max-w-xl text-gray-700 text-lg"
          >
            {profile.valueProposition}
          </motion.p>

          <motion.div 
            className="mt-6 flex gap-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.25 }}
          >
            <a href="#projects" className="inline-flex items-center px-5 py-2 rounded-lg bg-purple-500 text-white font-medium shadow-lg hover:scale-[1.02] transform transition">
              View projects
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-2 rounded-lg ring-1 ring-gray-200 bg-white/60 backdrop-blur-md hover:shadow">
              Contact me
            </a>
          </motion.div>

          <motion.div 
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-600" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.35 }}
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Based in {profile.location}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span>Open to work</span>
            </div>
          </motion.div>
        </div>

        {/* Avatar glass card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.12 }} 
          className="w-full sm:w-96 flex-shrink-0"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* purple gradient glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300 opacity-40 blur-3xl" aria-hidden />

            <div className="relative p-6 backdrop-blur-xl bg-white/60 border border-gray-200 rounded-2xl">
              <img src="/avatar.png" alt={`${profile.name} avatar`} className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-white shadow-md" />
              <div className="mt-4 text-center">
                <div className="font-semibold text-lg">{profile.name}</div>
                <div className="text-sm text-gray-600 mt-1 space-y-1">
                  {profile.roles.slice(0,3).map((role, i) => (
                    <div key={i}>{role}</div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-3">
                <a href="#projects" className="px-3 py-1 rounded-md ring-1 ring-gray-200 bg-white/50 backdrop-blur-sm text-sm hover:bg-white transition">Projects</a>
                <a href="#contact" className="px-3 py-1 rounded-md ring-1 ring-gray-200 bg-white/50 backdrop-blur-sm text-sm hover:bg-white transition">Contact</a>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-md bg-purple-500 text-white text-sm hover:bg-purple-600 transition">Resume</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
