import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import SEO from "@/components/SEO";

const clubEvents = [
  {
    title: "Summer Fitness Challenge",
    date: "July 15, 2024",
    time: "6:00 AM - 8:00 PM",
    location: "FitLife Main Campus",
    description: "A full-day fitness challenge featuring obstacle courses, team workouts, and wellness activities. Compete for prizes and connect with fellow fitness enthusiasts.",
    status: "completed" as const,
  },
  {
    title: "Wellness Workshop: Nutrition 101",
    date: "August 5, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "FitLife Community Center",
    description: "Learn the fundamentals of nutrition from certified dietitians. Discover meal planning strategies and healthy eating habits that support your fitness goals.",
    status: "completed" as const,
  },
  {
    title: "Group HIIT Training Session",
    date: "September 20, 2024",
    time: "7:00 AM - 8:30 AM",
    location: "Outdoor Training Area",
    description: "High-intensity interval training session led by our expert coaches. Perfect for all fitness levels with modifications available.",
    status: "completed" as const,
  },
];

const upcomingEvents = [
  {
    title: "Winter Wellness Bootcamp",
    date: "January 10, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "FitLife Main Campus",
    description: "Kick off the new year with our intensive wellness bootcamp. Includes strength training, cardio sessions, yoga, and nutrition workshops.",
    status: "upcoming" as const,
  },
  {
    title: "Community 5K Run/Walk",
    date: "January 25, 2025",
    time: "7:00 AM",
    location: "City Park Trail",
    description: "Join us for a fun community run or walk! All fitness levels welcome. Participants receive a commemorative t-shirt and post-race refreshments.",
    status: "upcoming" as const,
  },
  {
    title: "Stress Relief & Mindfulness Workshop",
    date: "February 8, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "FitLife Yoga Studio",
    description: "Learn practical techniques for managing stress through movement, breathing exercises, and mindfulness meditation. Led by certified wellness coaches.",
    status: "upcoming" as const,
  },
  {
    title: "Partner Workout Challenge",
    date: "February 14, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "FitLife Main Gym",
    description: "Celebrate Valentine's Day with a fun partner workout challenge! Bring a friend, partner, or family member for team-based fitness activities and prizes.",
    status: "upcoming" as const,
  },
  {
    title: "Spring Fitness Festival",
    date: "March 22, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "FitLife Outdoor Complex",
    description: "Our biggest event of the season! Features fitness demos, health screenings, vendor booths, competitions, and live entertainment.",
    status: "upcoming" as const,
  },
];

const Events = () => {
  return (
    <>
      <SEO 
        title="Events" 
        description="Explore FitLife Fitness Club events including wellness workshops, group workouts, fitness challenges, and community meet-ups. Join us for your fitness journey."
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
                Join Our Community
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up stagger-1">
                Fitness Club{" "}
                <span className="text-gradient">Events</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up stagger-2">
                Join our exciting fitness events, workshops, and community gatherings. 
                Connect with fellow members, challenge yourself, and have fun while 
                working towards your fitness goals.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Upcoming <span className="text-gradient">Events</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Don't miss out on these exciting upcoming fitness and wellness events. 
                Register early to secure your spot!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={event.title}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  status={event.status}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Events Organized by <span className="text-gradient">FitLife</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Look back at our successful past events. These memories inspire us 
                to create even better experiences for our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubEvents.map((event, index) => (
                <EventCard
                  key={event.title}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  status={event.status}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="card-glass p-12 lg:p-16 text-center max-w-4xl mx-auto border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Want to Host an Event?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Have an idea for a fitness event or workshop? We're always looking 
                for ways to engage our community. Reach out to us!
              </p>
              <Link 
                to="/" 
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Contact Us
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

export default Events;
