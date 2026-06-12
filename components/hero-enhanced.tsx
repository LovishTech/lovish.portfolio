'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { TypingAnimation } from "./typing-animation";
import { DownloadResumeButton } from "./download-resume-button";
import { MLBackground } from "./ml-background";

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/LovishTech", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/lovish-batra-b202122a8", label: "LinkedIn" },
  { icon: <Mail className="w-5 h-5" />, href: "mailto:lovishbatra.2004@gmail.com", label: "Email" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function HeroEnhanced() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const scrollToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <MLBackground />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/25 to-accent/10 pointer-events-none" />

      <div className="container relative z-10 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium font-mono">
              <Sparkles className="w-4 h-4 mr-2" />
              Machine Learning Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="block mb-2">Hi, I'm </span>
            <span className="bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent">
              Lovish Batra
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto min-h-[3.5rem] leading-relaxed"
          >
            <TypingAnimation
              text="Developing intelligent systems and machine learning solutions that transform data into actionable insights."
              speed={30}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" className="group" asChild>
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <DownloadResumeButton variant="outline" size="lg" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors text-foreground/70 hover:text-foreground border border-border/30"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer bg-transparent border-0 p-0"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        onClick={scrollToAbout}
        aria-label="Scroll down to about section"
      >
        <div className="flex flex-col items-center text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
          <span>Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1"
            aria-hidden="true"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.button>
    </section>
  );
}
