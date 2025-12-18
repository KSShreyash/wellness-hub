import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HallOfFame = () => {
  const leaders = [
    {
      name: "Alex Johnson",
      role: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      description: "Leading the club with passion and dedication to campus fitness.",
    },
    {
      name: "Sarah Mitchell",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      description: "Coordinating events and supporting student wellness initiatives.",
    },
    {
      name: "Michael Chen",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      description: "Managing club resources and ensuring sustainable operations.",
    },
  ];

  return (
    <>
      <SEO
        title="Hall of Fame - Campus Fit"
        description="Meet the student leaders of Campus Fit - our President, Vice President, and Treasurer."
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hall of <span className="text-primary">Fame</span>
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Meet the dedicated student leaders who make Campus Fit possible.
            </p>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="group bg-card border border-border/30 rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-300">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                <p className="text-primary font-semibold mb-3">{leader.role}</p>
                <p className="text-foreground/60 text-sm">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HallOfFame;
