
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import TypeAnimation from "./TypeAnimation";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="container-section">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-primary/20">
            <img 
              src="/Yash.jpeg" 
              alt="Yash Patil" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">Yash Patil</h1>
          
          <div className="mb-6 text-xl md:text-2xl text-foreground/80 h-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <TypeAnimation 
              strings={[
                "Full Stack Developer",
                "Python Developer",
                "Computer Engineering Graduate"
              ]} 
            />
          </div>
          
          <p className="text-lg text-foreground/70 mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            A passionate developer with expertise in full-stack web development and Python programming. 
            I love building scalable applications with modern technologies and solving complex problems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
            <a 
              href="#projects" 
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/1zhiaASlP1TcLjA_yVhg64iB2LUlfTrGb/view?usp=sharing" 
              className="px-6 py-2.5 bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} /> Download Resume
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2.5 border border-border rounded-full font-medium hover:bg-secondary/50 transition-colors"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="mailto:example@example.com" className="social-icon">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
