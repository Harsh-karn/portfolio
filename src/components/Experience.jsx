import React from 'react';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
      <div className="backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-8 shadow-lg">
        <h4 className="text-2xl font-semibold text-gray-900 mb-8">Experience & Education</h4>

        <div className="relative border-l border-gray-300 pl-6 space-y-8">
          {experience.map((item) => (
            <div key={item.id} className="relative">
              <span className={`absolute -left-[30px] top-1.5 w-4 h-4 rounded-full shadow ${item.color}`}></span>
              <div className="p-4 rounded-xl bg-white/70 border border-gray-200 backdrop-blur-md hover:shadow-md transition">
                <h5 className="font-medium text-gray-900">{item.title}</h5>
                <p className="text-sm text-gray-700 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
