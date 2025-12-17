import { Link } from "react-router-dom";
import { ArrowRight, Play, Dumbbell, Users, HeartPulse, Zap, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-athlete.png";

const features = [
  {
    icon: Dumbbell,
    title: "Personal Fitness Coaching",
    description: "Get customized workout plans and one-on-one guidance from certified fitness coaches who understand your goals.",
  },
  {
    icon: Activity,
    title: "Strength & Conditioning",
    description: "Build functional strength and improve your athletic performance with our comprehensive conditioning programs.",
  },
  {
    icon: Users,
    title: "Group Fitness Activities",
    description: "Join energizing group classes that combine fun, motivation, and community support to keep you engaged.",
  },
  {
    icon: HeartPulse,
    title: "Cardio & Endurance",
    description: "Boost your cardiovascular health and build lasting endurance through varied and exciting cardio programs.",
  },
  {
    icon: Zap,
    title: "Functional Workouts",
    description: "Train movements, not muscles. Our functional training improves daily life performance and prevents injuries.",
  },
];

const featureTags = [
  "Personal Training",
  "Strength",
  "Group Classes",
  "Swimming",
  "Cardio Equipment",
  "Functional Workouts",
];

const Index = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Transform your life with FitLife Fitness Club. Join our community for holistic fitness, personal coaching, and wellness programs designed for all fitness levels."
      />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up">
                  Push Your{" "}
                  <span className="text-gradient">Limits</span>{" "}
                  with Our Fitness Club
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl opacity-0 animate-fade-in-up stagger-1">
                  From beginner to advanced, experience workouts designed to help you achieve 
                  peak performance and exceed your fitness goals. Join a community focused on 
                  holistic wellness, personal growth, and healthy living.
                </p>

                <div className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-in-up stagger-2">
                  <Link to="/events" className="btn-primary inline-flex items-center gap-2 group">
                    Join the Fitness Club
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/benefits" className="btn-outline inline-flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Explore Activities
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex gap-8 opacity-0 animate-fade-in-up stagger-3">
                  <div>
                    <p className="text-3xl font-bold text-foreground">1.7K+</p>
                    <p className="text-sm text-muted-foreground">Active Members</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">50+</p>
                    <p className="text-sm text-muted-foreground">Expert Trainers</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">98%</p>
                    <p className="text-sm text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 lg:order-2 relative opacity-0 animate-slide-in-right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
                  <img 
                    src={heroImage} 
                    alt="Athlete running with determination" 
                    className="relative rounded-3xl w-full max-w-lg mx-auto lg:max-w-none object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Feature Tags */}
            <div className="mt-16 flex flex-wrap gap-3 justify-center lg:justify-start opacity-0 animate-fade-in-up stagger-4">
              {featureTags.map((tag) => (
                <span key={tag} className="feature-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Transform Your <span className="text-gradient">Fitness Journey</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Discover our comprehensive range of fitness programs designed to help you 
                achieve your health and wellness goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="card-glass p-12 lg:p-16 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Fitness Journey?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of members who have transformed their lives through our 
                fitness programs. Your journey to a healthier you starts today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/events" className="btn-primary inline-flex items-center gap-2 group">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/benefits" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
