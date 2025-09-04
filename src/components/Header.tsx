import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/RepresentULogo.png" 
              alt="Represent U Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => {
                if (hoverTimeout) {
                  clearTimeout(hoverTimeout);
                  setHoverTimeout(null);
                }
                setIsServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setIsServicesDropdownOpen(false);
                }, 100);
                setHoverTimeout(timeout);
              }}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg z-50">
                  <div className="py-2">
                    <Link 
                      to="/services/strategic-planning" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Strategic Planning & Consultations
                    </Link>
                    <Link 
                      to="/services/event-services"
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Event Planning & Logistics
                    </Link>
                    <Link 
                      to="/services/content-creation" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Videography, & Photography
                    </Link>
                    <Link 
                      to="/services/social-media" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Social Media Management & Podcasting
                    </Link>
                    <Link 
                      to="/services/grants" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Grant Consulting
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-primary hover:shadow-primary transition-all duration-300"
              asChild
            >
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
              >
                Schedule Appointment
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <div className="space-y-2">
                <button
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 text-sm">
                    <Link to="/services/strategic-planning" 
                      className="text-muted-foreground hover:text-primary transition-colors block py-1"
                      onClick={() => window.scrollTo(0, 0)} 
                    >
                      Strategic Planning & Consultations
                    </Link>
                    <Link to="/services/event-services" 
                      className="text-muted-foreground hover:text-primary transition-colors block py-1"
                      onClick={() => window.scrollTo(0, 0)} 
                    >
                      Event Planning & Logistics
                    </Link>
                    <Link to="/services/content-creation" 
                      className="text-muted-foreground hover:text-primary transition-colors block py-1"
                      onClick={() => window.scrollTo(0, 0)} 
                    >
                      Videography, & Photography
                    </Link>
                    <Link to="/services/social-media"
                      className="text-muted-foreground hover:text-primary transition-colors block py-1"
                      onClick={() => window.scrollTo(0, 0)} 
                    >
                      Social Media Management & Podcasting
                    </Link>
                    <Link to="/services/grants" 
                      className="text-muted-foreground hover:text-primary transition-colors block py-1"
                      onClick={() => window.scrollTo(0, 0)} 
                    >
                      Grant Consulting
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/contact" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => window.scrollTo(0, 0)} 
              >
                Contact
              </Link>
              <Button className="bg-gradient-primary hover:shadow-primary transition-all duration-300 w-full mt-4" asChild>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule Appointment</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;