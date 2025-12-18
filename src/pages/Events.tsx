import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import SEO from "@/components/SEO";

const clubEvents = [
  {
    title: "Fall Semester Fitness Kickoff",
    date: "September 5, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "AB 1",
    description: "Started the semester strong with an open workout session and club orientation. New members met student coordinators and learned about upcoming activities.",
    status: "completed" as const,
  },
  {
    title: "Wellness Workshop: Stress Management",
    date: "October 12, 2024",
    time: "6:00 PM - 7:30 PM",
    location: "AB 2",
    description: "Student-led workshop on managing academic stress through movement, breathing exercises, and healthy habits. Open discussion and peer support session included.",
    status: "completed" as const,
  },
  {
    title: "Campus 5K Fun Run",
    date: "November 2, 2024",
    time: "8:00 AM",
    location: "MGR",
    description: "A fun, non-competitive run around campus trails. All paces welcome—runners, joggers, and walkers participated together as a community.",
    status: "completed" as const,
  },
];

const upcomingEvents = [
  {
    title: "Spring Semester Welcome Workout",
    date: "January 20, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "AB 3",
    description: "Kick off the new semester with a group workout session! Meet fellow fitness enthusiasts, learn about club activities, and get moving with student-led exercises.",
    status: "upcoming" as const,
  },
  {
    title: "Morning Yoga in the Quad",
    date: "February 1, 2025",
    time: "7:30 AM - 8:30 AM",
    location: "Football Ground",
    description: "Start your day with a relaxing outdoor yoga session led by student volunteers. Bring your own mat or borrow one from the club. All experience levels welcome!",
    status: "upcoming" as const,
  },
  {
    title: "Student HIIT Challenge",
    date: "February 15, 2025",
    time: "4:00 PM - 5:30 PM",
    location: "Gymkhana",
    description: "High-intensity interval training session designed by student coordinators. Partner up with classmates for team challenges and friendly competition!",
    status: "upcoming" as const,
  },
  {
    title: "Healthy Eating on a Student Budget",
    date: "March 1, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "AB 4",
    description: "Learn practical tips for eating healthy without breaking the bank. Student-led cooking demo and meal prep ideas perfect for dorm and apartment living.",
    status: "upcoming" as const,
  },
  {
    title: "Spring Campus Fitness Festival",
    date: "April 12, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "AB 5",
    description: "Our biggest event of the year! Try different workout stations, join group activities, participate in friendly competitions, and celebrate fitness with the campus community.",
    status: "upcoming" as const,
  },
];

const Events = () => {
  return (
    <>
      <SEO 
        title="Campus Events" 
        description="Join free campus fitness events organized by students for students. Peer-led workouts, wellness workshops, and community activities open to all college students."
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
                Free & Open to All Students
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up stagger-1">
                Campus Fitness{" "}
                <span className="text-gradient">Events</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up stagger-2">
                Discover upcoming fitness activities organized by students, for students. 
                All events are free to attend—just show up and join the fun! No 
                registration or membership required.
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
                Check out what's coming up this semester. All events are student-led 
                and completely free. Just show up and participate!
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
                Past <span className="text-gradient">Activities</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                See what we've been up to! These past events brought students together 
                for fitness, fun, and community building.
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
                Want to Organize an Event?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Have an idea for a fitness activity or wellness event? We're always 
                looking for student volunteers to help organize and lead activities. 
                Get involved and make a difference on campus!
              </p>
              <Link 
                to="/" 
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Get Involved
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