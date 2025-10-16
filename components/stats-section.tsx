"use client"

import { AnimatedCounter } from "@/components/animated-counter"

export function StatsSection() {
  const stats = [
    { value: 1, label: "Years Experience", suffix: "+" },
    { value: 3, label: "Projects Completed", suffix: "+" },
    { value: 10, label: "Technologies", suffix: "+" },
    { value: 6, label: "Certifications", suffix: "+" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter 
                  end={stat.value} 
                  duration={2000} 
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
