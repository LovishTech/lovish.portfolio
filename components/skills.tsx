import { Code, BarChart2, Cloud, Brain } from "lucide-react"

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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary rounded-sm mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-border">
                <category.icon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors pl-4 border-l-2 border-transparent hover:border-primary py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
