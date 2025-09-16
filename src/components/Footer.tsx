import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import RepULogo from "@/assets/RepresentULogo.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Link 
                href="/" 
                onClick={() => window.scrollTo(0, 0)}
                className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-opacity hover:opacity-80"
                aria-label="Go to home page"
              >
                <Image 
                  src={RepULogo} 
                  alt="Represent U Logo" 
                  className="h-12 w-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                </Link>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering your cause and amplifying your voice through strategic marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm" role="list">
                <li>
                  <a href="/" className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded">
                    Contact 
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <nav aria-label="Services navigation">
              <ul className="space-y-2 text-sm" role="list">
                <li>
                  <Link 
                    href="/services/strategic-planning" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Strategic Planning & Consultations
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/event-services" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Event Planning & Logistics
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/content-creation" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Videography & Photography
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/social-media" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Social Media Management & Podcasting
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/grants" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Grant Consulting
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/website-design" 
                    className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Website Design & Development
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                <a href="mailto:info.representu@gmail.com" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded">
                  info.representu@gmail.com
                </a>
              </p>
              <div className="flex space-x-4 pt-4" role="list">
                <a 
                  href="https://www.facebook.com/profile.php?id=61565403405775" 
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Follow us on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <Facebook size={20} aria-hidden="true" />
                </a>
                <a 
                  href="https://www.instagram.com/we.rep.u/profilecard/?igsh=NTc4MTIwNjQ2YQ%3D%3D" 
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Follow us on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <Instagram size={20} aria-hidden="true" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/we-represent-u/?viewAsMember=true" 
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Follow us on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Represent U. All rights reserved. Empowering organizations to change the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;