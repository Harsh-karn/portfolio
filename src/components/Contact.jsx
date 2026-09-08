"use client";
import React, { useState } from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  const [contactState, setContactState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const onContactSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactState),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.error || "Failed to send message");
      } else {
        setStatus("Message sent — thank you!");
        setContactState({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("Network error. Please try again later.");
    } finally {
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <div className="backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-8 shadow-lg">
          <h4 className="text-2xl font-semibold text-gray-900">Get in touch</h4>
          <p className="mt-2 text-gray-700">
            I’m open to new opportunities, freelance work, and collaborations. 
            Send me a message and I’ll reply as soon as I can.
          </p>

          <form onSubmit={onContactSubmit} className="mt-6 space-y-4">
            <input
              required
              value={contactState.name}
              onChange={(e) => setContactState({ ...contactState, name: e.target.value })}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg ring-1 ring-gray-200 bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 outline-none transition"
            />
            <input
              required
              type="email"
              value={contactState.email}
              onChange={(e) => setContactState({ ...contactState, email: e.target.value })}
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg ring-1 ring-gray-200 bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 outline-none transition"
            />
            <textarea
              required
              value={contactState.message}
              onChange={(e) => setContactState({ ...contactState, message: e.target.value })}
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg ring-1 ring-gray-200 bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 outline-none transition"
            />
            
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-purple-500 text-white font-medium shadow hover:bg-purple-600 transition"
              >
                Send message
              </button>
              <div className="text-sm text-gray-600">{status}</div>
            </div>
          </form>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg ring-1 ring-gray-200 bg-white/70 hover:bg-purple-50 text-gray-700 transition">
              <Github size={24} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg ring-1 ring-gray-200 bg-white/70 hover:bg-purple-50 text-gray-700 transition">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 rounded-lg ring-1 ring-gray-200 bg-white/70 hover:bg-purple-50 text-gray-700 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Quick Contact Card */}
        <div className="backdrop-blur-lg bg-white/70 border border-gray-200 rounded-2xl p-8 shadow-lg flex flex-col justify-center">
          <h5 className="text-xl font-semibold text-gray-900">Quick Contact</h5>
          <p className="text-sm text-gray-700 mt-3 flex items-center gap-2">
            📧 <a href={`mailto:${profile.email}`} className="text-purple-600 hover:underline">{profile.email}</a>
          </p>
          
          <p className="text-sm text-gray-700 mt-4">
            Or connect via <span className="text-purple-600 font-medium cursor-pointer"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></span> / <span className="text-purple-600 font-medium cursor-pointer"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span> — links above.
          </p>
        </div>
      </div>
    </section>
  );
}
