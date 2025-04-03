
import { GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container-section">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="text-foreground/80 mb-6">
              I'm a Computer Engineering graduate from Sinhgad Institute of Technology, passionate about web development,
              software engineering, and building technology that makes a difference.
            </p>
            <p className="text-foreground/80 mb-6">
              With experience in both front-end and back-end technologies, I enjoy creating
              responsive, user-friendly applications that solve real-world problems. My background includes
              working with Python, Java, JavaScript, and various web frameworks.
            </p>
            <p className="text-foreground/80">
              I believe in writing clean, maintainable code and continuously learning new technologies
              to stay at the forefront of this ever-evolving field.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                <GraduationCap className="text-primary" /> Education
              </h3>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="font-semibold">Sinhgad Institute of Technology</h4>
                <p className="text-sm text-foreground/70">B.E. in Computer Engineering (2019-2023)</p>
                <div className="mt-2 bg-secondary/50 rounded-lg p-3">
                  <p className="text-foreground/80 text-sm">
                    <span className="font-semibold">CGPA:</span> 8.24/10
                  </p>
                  <p className="text-foreground/80 text-sm">
                    <span className="font-semibold">Relevant Coursework:</span> Data Structures, Algorithms, Database Systems, Web Development, Object-Oriented Programming
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Personal Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span className="text-foreground/80 text-sm">Focus on writing clean, maintainable code</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span className="text-foreground/80 text-sm">Passionate about user experience and accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span className="text-foreground/80 text-sm">Continuously learning and expanding my skillset</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span className="text-foreground/80 text-sm">Collaborative problem-solver who values teamwork</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
