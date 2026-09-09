"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiKotlin, SiGo,
  SiReact, SiNextdotjs, SiTailwindcss, SiVite, SiThreedotjs,
  SiFastapi, SiNodedotjs, SiExpress, SiSocketdotio, SiJsonwebtokens,
  SiPostgresql, SiMongodb, SiRedis, SiFirebase, SiSqlite, SiMysql,
  SiGooglegemini, SiAnthropic, SiHuggingface, SiOllama,
  SiPandas, SiNumpy, SiScikitlearn,
  SiDocker, SiGithub, SiVercel, SiKubernetes,
  SiGit, SiPostman, SiCelery, SiSqlalchemy
} from 'react-icons/si';
import { TbBrain, TbApi } from 'react-icons/tb';
import { FaFileExcel, FaChartBar, FaDatabase, FaRobot, FaChartLine } from 'react-icons/fa';

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "Python", iconImg: "/icons/python.webp", color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
    ]
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
    ]
  },
  {
    title: "BACKEND",
    skills: [
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "REST APIs", icon: TbApi, color: "#005571" },
      { name: "WebSockets", icon: SiSocketdotio, color: "#010101" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000000" },
    ]
  },
  {
    title: "DATABASES",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ]
  },
  {
    title: "AI / LLM",
    skills: [
      { name: "Gemini", icon: SiGooglegemini, color: "#8E75B2" },
      { name: "OpenAI", icon: FaRobot, color: "#412991" },
      { name: "Claude", icon: SiAnthropic, color: "#191919" },
      { name: "RAG", icon: FaDatabase, color: "#4A4A4A" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
      { name: "LangChain", icon: TbBrain, color: "#1C3C3C" },
      { name: "Ollama", icon: SiOllama, color: "#000000" },
    ]
  },
  {
    title: "DATA ANALYSIS",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Matplotlib", icon: FaChartBar, color: "#11557C" },
      { name: "Excel/Google Sheets", icon: FaFileExcel, color: "#217346" },
      { name: "PowerBI", icon: FaChartBar, color: "#F2C811" },
      { name: "Tableau", icon: FaChartLine, color: "#E97627" },
    ]
  },
  {
    title: "DEVOPS & DEPLOYMENT",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithub, color: "#181717" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    ]
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Celery", icon: SiCelery, color: "#37814A" },
      { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#D71F00" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="techstack" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-8 text-gray-900">Tech Stack</h3>

      <div className="flex flex-col gap-12">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col items-start">
            <h3 className="text-sm font-semibold text-purple-600 tracking-[0.2em] uppercase mb-6">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-start gap-4">
              {category.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    title={skill.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/70 border border-gray-200 backdrop-blur-md flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-gray-600 hover:bg-purple-50 transition-all duration-300 shadow-sm hover:shadow-md group p-2"
                  >
                    {skill.iconImg ? (
                      <img src={skill.iconImg} alt={skill.name} className="w-7 h-7 sm:w-9 sm:h-9 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                    ) : (
                      <Icon className="w-7 h-7 sm:w-9 sm:h-9 opacity-80 group-hover:opacity-100 transition-all" style={{ color: skill.color }} />
                    )}
                    <span className="text-[10px] sm:text-xs font-medium text-gray-500 group-hover:text-gray-800 transition-colors text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
