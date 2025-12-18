import SEO from "@/components/SEO";

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600", alt: "Group workout session" },
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600", alt: "Fitness equipment" },
    { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600", alt: "Weight training" },
    { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600", alt: "Yoga session" },
    { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600", alt: "Running outdoors" },
    { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600", alt: "Gym workout" },
    { src: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600", alt: "Stretching exercise" },
    { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600", alt: "Personal training" },
  ];

  return (
    <>
      <SEO
        title="Gallery - Campus Fit"
        description="Browse photos from Campus Fit activities, events, and student-led fitness sessions."
      />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Club <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Moments from our campus fitness activities, student-led sessions, and wellness events.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl bg-card border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="absolute bottom-4 left-4 right-4 text-sm text-foreground font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
