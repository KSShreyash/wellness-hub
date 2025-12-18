import { Link, useLocation } from "react-router-dom";
import { Menu, X, Flame } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/hero-athlete.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Benefits", path: "/benefits" },
    { name: "Events", path: "/events" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <img
                src={logo}
                alt="Fitness Club Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground">Fitness Club</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 relative
                  ${isActive(link.path) 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-foreground"
                  }
                `}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/events"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border/30 animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 transition-colors
                  ${isActive(link.path) ? "text-primary" : "text-foreground/70"}
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/events"
              className="btn-primary text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;