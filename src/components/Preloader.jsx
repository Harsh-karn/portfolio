"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("LOADING");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading and force scroll to top
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  // Force scroll to top on page refresh
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment by random amount to make it look realistic
        return Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setText("WELCOME");
      // Wait for a brief moment to show "WELCOME" before dismissing
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f4f4f6] overflow-hidden"
        >
          {/* Scrolling Marquee Background */}
          <div className="absolute inset-0 flex items-center justify-center whitespace-nowrap pointer-events-none z-0">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
              className="text-[9vw] sm:text-[6vw] font-bold text-gray-900 flex"
            >
              {[1, 2, 3, 4].map((i) => (
                <span key={i} className="pr-4 sm:pr-8">
                  FULL STACK DEVELOPER • AI ENGINEER • DATA ANALYST •{" "}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex items-center justify-between px-8 py-3.5 rounded-full bg-black min-w-[220px]"
            style={{
              boxShadow: "0 -4px 15px -3px rgba(168,85,247,0.5), 0 10px 15px -3px rgba(0,0,0,0.3)",
              borderTop: "1px solid rgba(168,85,247,0.5)"
            }}
          >
            <AnimatePresence mode="wait">
              {text === "LOADING" ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-between w-full"
                >
                  <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-gray-200">
                    LOADING
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-gray-400 font-medium w-12 text-right">
                    {progress}%
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center w-full"
                >
                  <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-gray-200">
                    WELCOME
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
