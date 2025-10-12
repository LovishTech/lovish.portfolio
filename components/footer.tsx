import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/LovishTech" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/lovish-batra-b202122a8" },
    { icon: Mail, label: "Email", href: "mailto:lovishbatra.2004@gmail.com" },
  ]

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="font-semibold text-foreground">Lovish Batra</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
