import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"
import AnimatedText from "@/components/animated-text"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <div className="min-h-screen animated-gradient">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center glass sticky top-0 z-50">
        <Link href="/" className="text-xl font-bold">
          <span className="text-primary">Portfolio</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {["Projects", "Skills", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <Button variant="outline" size="sm" className="hidden md:flex">
          Resume <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </header>

      {/* Hero Section */}
      <AnimatedSection className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="relative inline-block mb-6">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/20 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary/30 flex items-center justify-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center text-2xl md:text-4xl font-bold text-primary-foreground">
                AL
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1">
            <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <AnimatedText text="Hi, I'm Adrian Lutz" />
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
          <AnimatedText text="Marketing Manager" delay={0.5} />
        </h2>
        <p className="max-w-2xl text-muted-foreground mb-8">
          Write a brief introduction about yourself here. What do you do? What are you passionate about?
          Keep it concise but engaging.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="project-card-hover">
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="project-card-hover">
            Contact Me
          </Button>
        </div>

        <div className="flex space-x-4 mt-12">
          {[
            { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
            { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
            { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
          ].map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="h-10 w-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors project-card-hover"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. Each project is unique and solves specific problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Typework",
              description: "My first website built with Divi. A professional design and print agency offering layout, digital printing, product photography, and image editing services.",
              tags: ["Divi", "WordPress", "Web Design", "UI/UX"],
              image: "/typework-preview.jpg",
              link: "https://www.typework.de/"
            },
            {
              title: "Tribe",
              description: "A community platform for homesteading enthusiasts to connect with like-minded people. Share experiences, knowledge, and build meaningful connections within the homesteading community.",
              tags: ["Next.js", "React", "Tailwind CSS", "Community"],
              image: "/tribe-preview.jpg",
              link: "https://jointribe.vercel.app/"
            },
            {
              title: "Project 3 Name",
              description: "Describe your third project here. What was your role? What impact did it have?",
              tags: ["Skill 1", "Skill 2", "Skill 3"],
              image: "/placeholder.svg?height=300&width=500",
            },
          ].map((project, index) => (
            <div key={index} className="project-card-hover">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="project-card-hover">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I've worked with and am proficient in.
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass p-8 rounded-xl">
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"].map(
                  (skill) => (
                    <SkillBadge key={skill} name={skill} category="frontend" />
                  ),
                )}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "GraphQL", "REST API"].map(
                  (skill) => (
                    <SkillBadge key={skill} name={skill} category="backend" />
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Tools & Others</h3>
              <div className="flex flex-wrap gap-3">
                {["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel", "Figma", "Jest"].map((skill) => (
                  <SkillBadge key={skill} name={skill} category="tools" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A bit about my journey, experience, and what drives me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center glass p-8 rounded-xl">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-8 border-muted bg-muted">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Adrian Lutz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary/10 rounded-2xl w-full h-full -z-10"></div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I started my coding journey 5 years ago, transitioning from a background in design. This unique
                perspective allows me to create solutions that are both functional and aesthetically pleasing.
              </p>
              <p className="text-muted-foreground mb-6">
                I've worked with startups and established companies, helping them build products that users love. My
                approach combines technical expertise with a deep understanding of user needs.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-4xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">30+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">Awards Won</p>
                </div>
              </div>

              <Button className="project-card-hover">
                Download Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hello@janeporter.dev</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-muted-foreground">linkedin.com/in/janeporter</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-muted-foreground">github.com/janeporter</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Current Status</h3>
                <div className="bg-background p-6 rounded-xl border">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <p className="font-medium">Available for Work</p>
                  </div>
                  <p className="text-muted-foreground">I'm currently taking on new projects starting from June 2023.</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-xl font-bold">
                <span className="text-primary">Adrian</span> Lutz
              </Link>
              <p className="text-muted-foreground mt-2">Building digital experiences that matter.</p>
            </div>

            <div className="flex space-x-6">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="h-10 w-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors project-card-hover"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Adrian Lutz. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

