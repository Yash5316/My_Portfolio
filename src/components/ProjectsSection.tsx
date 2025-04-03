
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenge: string;
  solution: string;
}

const projects: Project[] = [
  {
    title: "Voice Enabled Command Line Interface Using Symbl.ai",
    description: "A voice-controlled command line interface that uses Symbl.ai's speech recognition to execute commands.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Python", "Symbl.ai API", "Speech Recognition", "Command Line"],
    liveUrl: "#",
    githubUrl: "#",
    challenge: "Creating a reliable voice recognition system that could accurately interpret commands in various accents and environments.",
    solution: "Integrated Symbl.ai's advanced speech recognition API with custom command parsing logic and implemented noise filtering algorithms."
  },
  {
    title: "VApp: E College System For Blind Students",
    description: "An accessible educational platform designed specifically for visually impaired students to access college resources.",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    technologies: ["React", "Node.js", "Accessibility APIs", "Text-to-Speech", "Screen Readers"],
    liveUrl: "#",
    githubUrl: "#",
    challenge: "Creating an intuitive interface that works seamlessly with screen readers while providing all necessary educational resources.",
    solution: "Implemented WCAG 2.1 AAA standards, custom keyboard navigation, and integrated specialized text-to-speech features for educational content."
  },
  {
    title: "ATM Simulator and Bank Management System",
    description: "A comprehensive banking system that simulates ATM operations along with bank management capabilities.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Python", "SQL", "OOP", "User Authentication", "Transaction Management"],
    liveUrl: "#",
    githubUrl: "#",
    challenge: "Ensuring secure transaction processing while maintaining an intuitive user interface that mimics real ATM operations.",
    solution: "Designed a multi-layered security system with encryption for sensitive data and implemented transaction atomicity with rollback capabilities."
  }
];

export default function ProjectsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-background">
      <div className="container-section">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms`, animationPlayState: visible ? 'running' : 'paused' }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1">Challenge:</h4>
                  <p className="text-foreground/70 text-sm">{project.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1">Solution:</h4>
                  <p className="text-foreground/70 text-sm">{project.solution}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium bg-secondary/70 text-foreground/80 px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
