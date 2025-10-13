"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Diploma in Computer Programming from Sault College (2025) - CGPA: 3.98/4.0",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "1 year in machine learning and AI",
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Capstone Project Certificate from Sault College",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
          <motion.div 
            className="w-20 h-1 bg-primary rounded-sm"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
              }
            } : {}}
          >
            <div className="relative aspect-square max-w-sm overflow-hidden rounded-full border-2 border-border">
              <Image 
                src="/my-photo.jpeg" 
                alt="Lovish Batra" 
                fill 
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500" 
                style={{objectPosition: 'center top'}} 
              />
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-3 space-y-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
            >
              <motion.p 
                className="text-base text-muted-foreground leading-relaxed"
                variants={fadeInUp}
              >
                I'm a passionate machine learning engineer specializing in building intelligent systems that solve
                real-world problems. With expertise in deep learning, natural language processing, and computer vision,
                I create AI solutions that are both innovative and production-ready.
              </motion.p>
              <motion.p 
                className="text-base text-muted-foreground leading-relaxed"
                variants={fadeInUp}
              >
                My journey in machine learning has been driven by curiosity and a desire to push the boundaries of
                what's possible with AI. I believe in developing models that are not only accurate but also
                interpretable, scalable, and ethically responsible.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid gap-4 pt-4"
              variants={staggerContainer}
            >
              {highlights.map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-border hover:border-primary/50 transition-colors">
                    <CardContent className="flex items-start gap-4 p-4">
                      <motion.div 
                        className="p-2 rounded-md bg-primary/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <item.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
