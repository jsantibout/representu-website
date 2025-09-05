import { Facebook, Instagram, Linkedin } from 'lucide-react';
import RepULogo from "@/assets/RepresentULogo.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={RepULogo} 
                alt="Represent U Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering your cause and amplifying your voice through strategic marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact 
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Strategic Planning & Consultations</li>
              <li className="text-white/80">Event Planning & Logistics</li>
              <li className="text-white/80">Videography & Photography</li>
              <li className="text-white/80">Social Media Management & Podcasting</li>
              <li className="text-white/80">Grant Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>info.representu@gmail.com</p>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.facebook.com/profile.php?id=61565403405775" className="hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/we.rep.u/profilecard/?igsh=NTc4MTIwNjQ2YQ%3D%3D" className="hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/we-represent-u/?viewAsMember=true" className="hover:text-white transition-colors">
                  <Linkedin size={20} />
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