import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, BarChart2, Cloud, Brain } from "lucide-react"
import { FadeInSection } from "./fade-in-section"

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "SQL"]
    },
    {
      icon: Brain,
      title: "AI/ML",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "NLP",
        "Computer Vision",
        "Generative AI"
      ]
    },
    {
      icon: BarChart2,
      title: "Data Science",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Data Analysis"
      ]
    },
    {
      icon: Cloud,
      title: "Tools & Platforms",
      skills: [
        "AWS",
        "Azure",
        "GCP",
        "Git/GitHub",
        "Jupyter",
        "Google Colab"
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <Card className="border-border hover:border-primary/50 transition-colors duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 text-sm bg-primary/15 text-primary border border-primary/30 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
