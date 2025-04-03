
import { Award, CheckCircle } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
}

interface Achievement {
  title: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "Core Java",
    issuer: "Udemy",
    date: "2022",
    icon: <CheckCircle className="text-primary" size={20} />
  },
  {
    title: "Cloud Certification",
    issuer: "Microsoft",
    date: "2023",
    icon: <CheckCircle className="text-primary" size={20} />
  }
];

const achievements: Achievement[] = [
  {
    title: "Competitive Programming",
    description: "Secured 6th Rank in inter-college coding competition"
  },
  {
    title: "Leadership",
    description: "Secretary of Association for Computing Machinery"
  },
  {
    title: "Sports",
    description: "1st prize in Archery at District level (2020)"
  }
];

export default function AchievementsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container-section">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="text-primary mr-2" /> Certifications
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert) => (
                <div 
                  key={cert.title}
                  className="bg-card rounded-xl p-6 shadow-md border border-border transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-foreground/70 text-sm">{cert.issuer}</p>
                      <p className="text-foreground/60 text-xs mt-1">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="text-primary mr-2" /> Achievements
            </h3>
            
            <div className="bg-card rounded-xl p-6 shadow-md border border-border">
              <ul className="space-y-6">
                {achievements.map((achievement) => (
                  <li key={achievement.title} className="flex">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-foreground/70 text-sm">{achievement.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
