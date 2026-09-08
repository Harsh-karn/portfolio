import React from 'react';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-8">
      <div className="backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <img src="/avatar.jpg" alt="avatar" className="w-24 h-24 rounded-xl object-cover border-2 border-white shadow-lg" />
          <div>
            <h3 className="text-xl font-semibold">About me</h3>
            <p className="mt-2 text-gray-700 max-w-3xl leading-relaxed">
              {profile.about}
            </p>

            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              <li className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/50 ring-1 ring-gray-200">
                🎓 Self-Taught / Degree Placeholder
              </li>
              <li className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/50 ring-1 ring-gray-200">
                📍 {profile.location}
              </li>
              <li className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/50 ring-1 ring-gray-200">
                🧑‍💻 {profile.experienceYears}+ years experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
