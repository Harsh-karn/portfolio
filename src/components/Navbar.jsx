import React from 'react';
import { profile } from '../data/profile';

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-30">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">{profile.name}</div>
        <div className="space-x-4">
          <a href="#projects" className="px-4 py-2 rounded-lg text-sm font-medium ring-1 ring-gray-200 bg-white/40 backdrop-blur-md hover:shadow-md transition">Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-400 text-white shadow-md hover:bg-purple-500 transition">Contact</a>
        </div>
      </nav>
    </header>
  );
}
