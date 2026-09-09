import React from 'react';
import { profile } from '../data/profile';

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <nav className="max-w-6xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl px-6 py-3 shadow-sm pointer-events-auto">
        <div className="text-lg font-bold text-gray-900 tracking-wider">HARSH KUMAR KARN</div>
        <div className="hidden sm:flex items-center space-x-1">
          <a href="#about" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/80 transition">About</a>
          <a href="#projects" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/80 transition">Projects</a>
          <a href="#techstack" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/80 transition">Tech Stack</a>
        </div>
      </nav>
    </header>
  );
}
