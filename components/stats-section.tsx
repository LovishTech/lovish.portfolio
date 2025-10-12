import { AnimatedCounter } from "./animated-counter"
import { FadeInSection } from "./fade-in-section"

export function StatsSection() {
  const stats = [
    { value: 1, suffix: "+", label: "Years Experience" },
    { value: 3, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "+", label: "Technologies Mastered" },
    { value: 6, suffix: "+", label: "Certifications" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" style={{animationDelay: `${index * 200}ms`}}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={1200} />
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
