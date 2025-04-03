
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-foreground/70">
              &copy; {new Date().getFullYear()} Yash Patil. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#home" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <ArrowUp size={20} />
            </a>
            
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
      </div>
    </footer>
  );
}
