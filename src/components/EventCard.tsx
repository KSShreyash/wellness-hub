import { Calendar, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  status: "upcoming" | "completed";
  index: number;
}

const EventCard = ({ title, date, time, location, description, status, index }: EventCardProps) => {
  const isUpcoming = status === "upcoming";

  return (
    <div 
      className="card-glass p-6 lg:p-8 group hover:border-primary/30 transition-all duration-500 
                 opacity-0 animate-fade-in-up relative overflow-hidden"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Status badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold
        ${isUpcoming 
          ? "bg-primary/20 text-primary" 
          : "bg-secondary text-muted-foreground"
        }`}
      >
        {isUpcoming ? "Upcoming" : "Completed"}
      </div>

      <h3 className="text-xl font-bold text-foreground mb-4 pr-24 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{date}</span>
        </div>
        {time && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>{time}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
        )}
      </div>

      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>

      {isUpcoming && (
        <button className="btn-primary text-sm py-2 px-4">
          Register Now
        </button>
      )}
    </div>
  );
};

export default EventCard;
