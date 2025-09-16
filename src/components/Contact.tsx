"use client";
import { Mail, MapPin, Facebook, Instagram, Linkedin} from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-24 bg-gradient-subtle" role="region" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 id="contact-heading" className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to amplify your organization's impact? Let's start the conversation.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need specific services or want to explore our comprehensive packages, 
                we're here to help your organization achieve its goals.
              </p>
            </div>

            <div className="space-y-6" role="list">
              <div className="flex items-center space-x-4" role="listitem">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                  <Mail className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info.representu@gmail.com" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                      info.representu@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4" role="listitem">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                  <MapPin className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Service Area</h4>
                  <p className="text-muted-foreground">Local & Remote Services Available</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4" role="list">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61565403405775", label: "Follow us on Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com/we.rep.u/profilecard/?igsh=NTc4MTIwNjQ2YQ%3D%3D", label: "Follow us on Instagram" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/we-represent-u/?viewAsMember=true", label: "Follow us on LinkedIn" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group p-1 rounded bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:glow-effect focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={label}
                    role="listitem"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="border-primary text-primary hover:bg-primary hover:text-primary-foreground p-2" size={35} aria-hidden="true"/>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Schedule a Consultation</h2>
            <h3 className="text-muted-foreground leading-relaxed mb-8">Tell us about your organization and how we can help amplify your impact.</h3>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Ue0cI3Bkg4Q8vEU4YBtS"
              style={{width: '100%', height: '600px', border: 'none', borderRadius: '3px'}}
              id="inline-Ue0cI3Bkg4Q8vEU4YBtS" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Schedule a Consultation"
              data-height="1028"
              data-layout-iframe-id="inline-Ue0cI3Bkg4Q8vEU4YBtS"
              data-form-id="Ue0cI3Bkg4Q8vEU4YBtS"
              title="Schedule a Consultation"
              suppressHydrationWarning
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;