'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Brain, Cpu, Database, Bot, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { TypingAnimation } from "./typing-animation";
import { DownloadResumeButton } from "./download-resume-button";
import { ParticlesBackground } from "./ui/particles-background";

const floatingIcons = [
  { icon: <Code className="w-5 h-5 text-primary/60" />, x: 10, y: 20, delay: 0, tooltip: 'Code' },
  { icon: <Brain className="w-5 h-5 text-accent/60" />, x: 90, y: 25, delay: 0.2, tooltip: 'AI/ML' },
  { icon: <Cpu className="w-5 h-5 text-primary/60" />, x: 15, y: 80, delay: 0.4, tooltip: 'Hardware' },
  { icon: <Database className="w-5 h-5 text-accent/60" />, x: 85, y: 75, delay: 0.6, tooltip: 'Databases' },
  { icon: <Bot className="w-4 h-4 text-primary/40" />, x: 50, y: 50, delay: 0.8, tooltip: 'Automation' },
];

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/dashboard", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/lovish-batra-b202122a8", label: "LinkedIn" },
  { icon: <Mail className="w-5 h-5" />, href: "mailto:lovishbatra.2004@gmail.com", label: "Email" },
];

const techStack = [
  // Machine Learning & AI
  { name: 'Machine Learning', category: 'ml' },
  { name: 'Deep Learning', category: 'ml' },
  { name: 'NLP', category: 'ml' },
  { name: 'Computer Vision', category: 'ml' },
  { name: 'Neural Networks', category: 'ml' },
  
  // Programming
  { name: 'Python', category: 'language' },
  { name: 'SQL', category: 'language' },
  
  // Data Science
  { name: 'Pandas', category: 'data' },
  { name: 'NumPy', category: 'data' },
  { name: 'Scikit-learn', category: 'data' },
  { name: 'TensorFlow', category: 'data' },
  { name: 'PyTorch', category: 'data' },
  
  // Tools & Platforms
  { name: 'Jupyter', category: 'tools' },
  { name: 'Google Colab', category: 'tools' },
  { name: 'Git/GitHub', category: 'tools' },
  { name: 'Streamlit', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'Azure', category: 'tools' },
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
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/80 to-accent/5" />
      
      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div 
          key={index}
          className="absolute hidden sm:block group"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: item.delay,
            ease: 'easeInOut',
          }}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            zIndex: 1,
          }}
          aria-label={item.tooltip}
        >
          <div className="relative group">
            {item.icon}
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 text-xs text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.tooltip}
            </span>
          </div>
        </motion.div>
      ))}

      <div className="container relative z-10 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
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

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mt-12 max-w-3xl mx-auto">
            <p className="text-sm text-foreground/70 mb-4">Tech I work with</p>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              {['all', 'ml', 'language', 'tools'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/60 hover:text-foreground/80'
                  }`}
                >
                  {{
                    'ml': 'ML/AI',
                    'language': 'Programming',
                    'tools': 'Tools',
                    'all': 'All'
                  }[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {techStack
                .filter(tech => activeCategory === 'all' || tech.category === activeCategory)
                .map((tech, i) => (
                  <motion.div
                    key={i}
                    className="px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all"
                    whileHover={{ y: -2 }}
                  >
                    {tech.name}
                  </motion.div>
                ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-4 mt-12"
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
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
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
      </motion.div>
    </section>
  );
}
