const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold">Represent U</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering your cause and amplifying your voice through strategic marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Strategic Planning</li>
              <li className="text-primary-foreground/80">Event Management</li>
              <li className="text-primary-foreground/80">Content Creation</li>
              <li className="text-primary-foreground/80">Grant Writing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>info.representu@gmail.com</p>
              <p>951.265.1543</p>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="hover:text-primary-foreground transition-colors">Facebook</a>
                <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
                <a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Represent U. All rights reserved. Empowering organizations to change the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;