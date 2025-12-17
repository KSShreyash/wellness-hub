import { Link } from "react-router-dom";
import { Flame, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Benefits", path: "/benefits" },
    { name: "Events", path: "/events" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  const developers = [
    "Developer 1: Alex Johnson",
    "Developer 2: Sarah Chen",
    "Developer 3: Marcus Williams",
  ];

  return (
    <footer className="bg-card/50 border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-gradient flex items-center justify-center">
                <Flame className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">FitLife</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transform your life through fitness. Join our community and discover 
              the power of wellness, movement, and personal growth.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center 
                           text-muted-foreground hover:bg-primary hover:text-primary-foreground 
                           transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>123 Fitness Street</li>
              <li>Wellness City, WC 12345</li>
              <li>hello@fitlife.club</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Development Team</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {developers.map((dev, index) => (
                <li key={index}>{dev}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} FitLife Club. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with passion for fitness and wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
