"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiKotlin, SiGo,
  SiReact, SiNextdotjs, SiTailwindcss, SiVite, SiThreedotjs,
  SiFastapi, SiNodedotjs, SiExpress, SiGraphql, SiPrisma,
  SiPostgresql, SiMongodb, SiRedis, SiFirebase, SiSupabase,
  SiGooglegemini, SiOpenai, SiAnthropic, SiHuggingface, SiOllama,
  SiPandas, SiNumpy, SiScikitlearn, SiMicrosoftexcel, SiPowerbi, SiTableau,
  SiDocker, SiGithub, SiVercel, SiKubernetes,
  SiGit, SiPostman, SiCypress
} from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Go", icon: SiGo },
    ]
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "Three.js", icon: SiThreedotjs },
    ]
  },
  {
    title: "BACKEND",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Prisma", icon: SiPrisma },
    ]
  },
  {
    title: "DATABASES",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
    ]
  },
  {
    title: "AI / LLM",
    skills: [
      { name: "Gemini", icon: SiGooglegemini },
      { name: "OpenAI", icon: SiOpenai },
      { name: "Anthropic", icon: SiAnthropic },
      { name: "LangChain", icon: TbBrain },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "Ollama", icon: SiOllama },
    ]
  },
  {
    title: "DATA ANALYSIS",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Excel", icon: SiMicrosoftexcel },
      { name: "PowerBI", icon: SiPowerbi },
      { name: "Tableau", icon: SiTableau },
    ]
  },
  {
    title: "DEVOPS & DEPLOYMENT",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Kubernetes", icon: SiKubernetes },
    ]
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
      { name: "Cypress", icon: SiCypress },
    ]
  }
];

export default function Skills() {
  return (
    <section id="techstack" className="max-w-6xl mx-auto px-6 py-16 bg-[#0a0a0a] rounded-[2.5rem] my-20 shadow-[0_0_40px_rgba(168,85,247,0.1)] border border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 uppercase">
          MY <span className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">TECHSTACK</span>
        </h2>
      </div>

      <div className="flex flex-col gap-16">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-gray-400 tracking-[0.2em] uppercase mb-8">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {category.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    title={skill.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#141414] border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-xl group"
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 opacity-80 group-hover:opacity-100 transition-opacity" />
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
