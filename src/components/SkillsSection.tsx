
import { useEffect, useRef, useState } from "react";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Core Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript/TypeScript", level: 80 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "Bootstrap", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "SQL", level: 80 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    name: "Technologies",
    skills: [
      { name: "DevOps", level: 70 },
      { name: "AI/ML", level: 65 },
      { name: "Data Science", level: 70 },
    ],
  },
  {
    name: "Core Subjects",
    skills: [
      { name: "Object Oriented Programming", level: 90 },
      { name: "Data Structures", level: 85 },
      { name: "DBMS", level: 80 },
      { name: "Operating System", level: 75 },
    ],
  },
];

export default function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="py-24 bg-background">
      <div className="container-section">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name}
              className="bg-card rounded-xl p-6 shadow-md border border-border transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationPlayState: visible ? 'running' : 'paused' }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center pb-2 border-b border-border">
                {category.name}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70 text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: visible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
