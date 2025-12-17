import { Link } from "react-router-dom";
import { ArrowRight, Heart, Brain, Zap, Shield, Users, Smile } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitCard from "@/components/BenefitCard";
import SEO from "@/components/SEO";

const benefits = [
  {
    icon: Heart,
    title: "Physical Health & Flexibility",
    description: "Regular exercise strengthens your heart, improves circulation, and increases flexibility. Experience better posture, reduced pain, and enhanced physical capabilities.",
  },
  {
    icon: Brain,
    title: "Mental Well-being",
    description: "Exercise releases endorphins that naturally combat stress, anxiety, and depression. Enjoy improved focus, better sleep quality, and enhanced cognitive function.",
  },
  {
    icon: Zap,
    title: "Energy & Stamina",
    description: "Build lasting endurance and unlock higher energy levels throughout your day. Feel more alert, productive, and ready to tackle any challenge that comes your way.",
  },
  {
    icon: Shield,
    title: "Confidence & Self-Discipline",
    description: "Achieve your fitness goals and watch your self-esteem soar. Develop mental toughness and discipline that translates to success in all areas of life.",
  },
  {
    icon: Users,
    title: "Community & Connection",
    description: "Join a supportive community of like-minded individuals. Build meaningful friendships, find accountability partners, and share your fitness journey together.",
  },
  {
    icon: Smile,
    title: "Quality of Life",
    description: "Invest in your health today for a better tomorrow. Enjoy improved mobility, independence, and vitality as you age gracefully and actively.",
  },
];

const Benefits = () => {
  return (
    <>
      <SEO 
        title="Benefits of Fitness" 
        description="Discover the life-changing benefits of joining FitLife Fitness Club. Improve your physical health, mental well-being, energy levels, and connect with a supportive community."
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 opacity-0 animate-fade-in">
                Why Choose FitLife?
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up stagger-1">
                The Benefits of{" "}
                <span className="text-gradient">Fitness</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up stagger-2">
                Discover how joining our fitness club can transform not just your body, 
                but your entire life. From physical strength to mental clarity, the benefits 
                of regular exercise extend far beyond the gym.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial/Quote Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-8 opacity-0 animate-fade-in-up">
                "The only bad workout is the one that didn't happen. Every step forward, 
                no matter how small, is progress toward a healthier, happier you."
              </blockquote>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8 opacity-0 animate-scale-in stagger-2" />
              <p className="text-muted-foreground opacity-0 animate-fade-in stagger-3">
                Start your transformation today
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="card-glass p-12 lg:p-16 text-center max-w-4xl mx-auto border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Experience the Benefits Yourself
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join our fitness club today and discover why thousands of members have 
                transformed their lives through our programs.
              </p>
              <Link 
                to="/events" 
                className="btn-primary inline-flex items-center gap-2 group"
              >
                View Upcoming Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Benefits;
