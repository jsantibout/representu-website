import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              // src="/lovable-uploads/5e68b862-6fb4-46d8-8043-0e59008cdf58.png" 
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {/* <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full">All Services</Link>
                </DropdownMenuItem> */}
                <DropdownMenuItem asChild>
                  <Link to="/services/strategic-planning" className="w-full">Strategic Planning & Consultations</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/event-services" className="w-full">Event Strategic Aid & Creation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/content-creation" className="w-full">Content Creation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/social-media" className="w-full">Social Media Management</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/grants" className="w-full">Grant Enhancement & Creation</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary hover:shadow-primary transition-all duration-300">
              Schedule Appointment
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
                {/* <Link to="/services" className="text-foreground hover:text-primary transition-colors block">
                  All Services
                </Link> */}
                <div className="pl-4 space-y-2 text-sm">
                  <Link to="/services/strategic-planning" className="text-muted-foreground hover:text-primary transition-colors block">
                    Strategic Planning & Consultations
                  </Link>
                  <Link to="/services/events" className="text-muted-foreground hover:text-primary transition-colors block">
                    Event Strategic Aid & Creation
                  </Link>
                  <Link to="/services/content-creation" className="text-muted-foreground hover:text-primary transition-colors block">
                    Content Creation
                  </Link>
                  <Link to="/services/social-media-management" className="text-muted-foreground hover:text-primary transition-colors block">
                    Social Media Management
                  </Link>
                  <Link to="/services/grants" className="text-muted-foreground hover:text-primary transition-colors block">
                    Grant Enhancement & Creation
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-primary hover:shadow-primary transition-all duration-300 w-full mt-4">
                Schedule Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;