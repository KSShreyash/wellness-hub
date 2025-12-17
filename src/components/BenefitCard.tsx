import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const BenefitCard = ({ icon: Icon, title, description, index }: BenefitCardProps) => {
  return (
    <div 
      className="card-glass p-8 group hover:border-primary/30 transition-all duration-500 
                 opacity-0 animate-fade-in-up relative overflow-hidden"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 
                    group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-orange-gradient flex items-center justify-center mb-6 
                      group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                      shadow-[var(--shadow-glow-sm)]">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
