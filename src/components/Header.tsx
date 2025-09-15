"use client";

import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const mobileServicesButtonRef = useRef<HTMLButtonElement>(null);

  // Handle keyboard navigation for services dropdown
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesDropdownOpen(false);
        setIsServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/" 
              onClick={() => window.scrollTo(0, 0)}
              className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-opacity hover:opacity-80"
              aria-label="Go to home page"
            >
              <img 
                src="/RepresentULogo.png" 
                alt="Represent U Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link href="/" className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
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
              <button 
                ref={servicesButtonRef}
                className="flex items-center text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
                aria-controls="services-dropdown"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsServicesDropdownOpen(!isServicesDropdownOpen);
                  }
                }}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesDropdownOpen && (
                <div 
                  ref={servicesDropdownRef}
                  id="services-dropdown"
                  className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg z-50"
                  role="menu"
                  aria-labelledby="services-button"
                >
                  <div className="py-2" role="none">
                    <Link 
                      href="/services/strategic-planning" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                      role="menuitem"
                    >
                      Strategic Planning & Consultations
                    </Link>
                    <Link 
                      href="/services/event-services"
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                      role="menuitem"
                    >
                      Event Planning & Logistics
                    </Link>
                    <Link 
                      href="/services/content-creation" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                      role="menuitem"
                    >
                      Videography, & Photography
                    </Link>
                    <Link 
                      href="/services/social-media" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                      role="menuitem"
                    >
                      Social Media Management & Podcasting
                    </Link>
                    <Link 
                      href="/services/grants" 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                      role="menuitem"
                    >
                      Grant Consulting
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/contact" onClick={() => window.scrollTo(0, 0)} className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-primary hover:shadow-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              asChild
            >
              <Link
                href="/contact"
                onClick={() => window.scrollTo(0, 0)}
              >
                Schedule Appointment
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4" role="navigation" aria-label="Mobile navigation">
              <Link href="/" className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <div className="space-y-2">
                <button
                  ref={mobileServicesButtonRef}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
                  aria-controls="mobile-services-menu"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {isServicesOpen && (
                  <div id="mobile-services-menu" className="pl-4 space-y-2 text-sm" role="menu" aria-labelledby="mobile-services-button">
                    <Link href="/services/strategic-planning" 
                      className="text-muted-foreground hover:text-primary transition-colors block py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} 
                      role="menuitem"
                    >
                      Strategic Planning & Consultations
                    </Link>
                    <Link href="/services/event-services" 
                      className="text-muted-foreground hover:text-primary transition-colors block py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} 
                      role="menuitem"
                    >
                      Event Planning & Logistics
                    </Link>
                    <Link href="/services/content-creation" 
                      className="text-muted-foreground hover:text-primary transition-colors block py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} 
                      role="menuitem"
                    >
                      Videography, & Photography
                    </Link>
                    <Link href="/services/social-media"
                      className="text-muted-foreground hover:text-primary transition-colors block py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} 
                      role="menuitem"
                    >
                      Social Media Management & Podcasting
                    </Link>
                    <Link href="/services/grants" 
                      className="text-muted-foreground hover:text-primary transition-colors block py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} 
                      role="menuitem"
                    >
                      Grant Consulting
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/contact" 
                className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} 
              >
                Contact
              </Link>
              <Button className="bg-gradient-primary hover:shadow-primary transition-all duration-300 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" asChild>
                <Link href="/contact" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}>Schedule Appointment</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;