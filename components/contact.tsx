"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { FadeInSection } from "./fade-in-section"
import { useState, useEffect } from "react"
import emailjs from '@emailjs/browser'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/LovishTech" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/lovish-batra-b202122a8" },
    { icon: Mail, label: "Email", href: "mailto:lovishbatra.2004@gmail.com" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS credentials
      const serviceId = 'service_jebo3u1'
      const templateId = 'template_w056mee'
      const publicKey = 'ONZ-WoVNNab8V1fO1'

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey)

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Auto-dismiss success/error messages after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000) // 5 seconds

      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <FadeInSection>
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </FadeInSection>

        <FadeInSection delay={200}>
          <Card className="border-border hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className="focus:border-primary/50 transition-colors" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="focus:border-primary/50 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    rows={6}
                    className="focus:border-primary/50 transition-colors resize-none"
                    required
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 border border-green-300 text-green-700 rounded-md">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-md">
                    Failed to send message. Please try again or contact me directly.
                  </div>
                )}
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all disabled:opacity-50"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeInSection>

        <FadeInSection delay={400}>
          <div className="mt-12">
            <p className="text-center text-sm text-muted-foreground mb-6">Or connect with me on</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="border-primary/40 hover:border-primary hover:bg-primary/10 text-primary hover:text-primary transition-colors bg-transparent"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
