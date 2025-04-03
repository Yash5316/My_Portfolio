
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Alhansat Solution",
    role: "Web Development Intern",
    period: "November 2022 - February 2023",
    description: [
      "Worked as a Full Stack Developer handling both frontend and backend tasks",
      "Developed API Converter using SOAP & REST API methodologies",
      "Created end-to-end automation script for testing using Playwright",
      "Collaborated with cross-functional teams to deliver high-quality web applications"
    ],
    technologies: ["JavaScript", "Node.js", "React", "REST API", "SOAP", "Playwright"]
  },
  {
    company: "Technohacks Solution",
    role: "Python Developer",
    period: "February 2023 - July 2023",
    description: [
      "Designed and developed ATM Software with comprehensive banking features",
      "Implemented various data structure solutions using Python",
      "Led the migration of Vuforia experiences to newer platforms",
      "Created numerous Python-based projects to solve real-world problems"
    ],
    technologies: ["Python", "Data Structures", "Vuforia", "UI/UX Design", "Database Management"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container-section">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company} 
              className="timeline-item animate-fade-in-up" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot"></div>
              
              <div className="bg-card rounded-xl p-6 shadow-md border border-border mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <div className="flex items-center text-foreground/70 text-sm mt-1 md:mt-0">
                    <Calendar size={14} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-primary font-medium flex items-center mb-4">
                  <Briefcase size={16} className="mr-2" /> {exp.role}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium bg-secondary text-foreground px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
