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
    title: "Peer-Led Fitness Sessions",
    description: "Join workout sessions led by fellow students who share your passion for fitness. Learn from peers in a supportive, judgment-free environment.",
  },
  {
    icon: Activity,
    title: "Strength & Conditioning",
    description: "Build functional strength and improve your fitness with our student-coordinated conditioning programs designed for all levels.",
  },
  {
    icon: Users,
    title: "Group Fitness Activities",
    description: "Connect with fellow students through fun group workouts. From yoga to HIIT, find activities that match your interests and schedule.",
  },
  {
    icon: HeartPulse,
    title: "Cardio & Endurance",
    description: "Boost your cardiovascular health with campus running groups, cycling sessions, and other cardio activities organized by club members.",
  },
  {
    icon: Zap,
    title: "Functional Workouts",
    description: "Train movements that improve daily life performance. Our student volunteers guide you through effective functional training routines.",
  },
];

const featureTags = [
  "Peer-Led Sessions",
  "Strength Training",
  "Group Workouts",
  "Yoga & Stretching",
  "Campus Runs",
  "Wellness Events",
];

const Index = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Join our free, student-run College Fitness Club. Open to all students! Participate in peer-led workouts, campus wellness events, and build a healthier lifestyle with your campus community."
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
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 opacity-0 animate-fade-in">
                  Free • Student-Run • Open to All
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up">
                  Your Campus{" "}
                  <span className="text-gradient">Fitness</span>{" "}
                  Community
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl opacity-0 animate-fade-in-up stagger-1">
                  A student-run fitness club open to all college students. Join us for peer-led 
                  workouts, campus wellness events, and a supportive community focused on 
                  health, fitness, and personal growth—completely free!
                </p>

                <div className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-in-up stagger-2">
                  <Link to="/events" className="btn-primary inline-flex items-center gap-2 group">
                    Join the Club
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/benefits" className="btn-outline inline-flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Explore Activities
                  </Link>
                </div>

                {/* About Section - Replaced Stats */}
                <div className="card-glass p-6 opacity-0 animate-fade-in-up stagger-3">
                  <h3 className="text-foreground font-semibold mb-2">About Our Club</h3>
                  <p className="text-sm text-muted-foreground">
                    We're a group of passionate students dedicated to making fitness accessible 
                    to everyone on campus. No fees, no membership—just show up and get moving!
                  </p>
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 lg:order-2 relative opacity-0 animate-slide-in-right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
                  <img 
                    src={heroImage} 
                    alt="Student athlete staying active and healthy" 
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
                Student-Led <span className="text-gradient">Activities</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Discover the variety of fitness activities organized and led by your fellow 
                students. All activities are free and open to every student on campus.
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

        {/* How to Get Involved Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="card-glass p-12 lg:p-16 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How to Get Involved
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Getting started is easy! Just show up to any of our events or activities. 
                No sign-up fees, no commitments—just bring your enthusiasm and 
                willingness to move.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/events" className="btn-primary inline-flex items-center gap-2 group">
                  View Campus Events
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