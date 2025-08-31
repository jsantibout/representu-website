import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import strategyIcon from "@/assets/strategy-icon.jpg";
import eventsIcon from "@/assets/events-icon.jpg";
import contentIcon from "@/assets/content-icon.jpg";
import grantsIcon from "@/assets/grants-icon.jpg";

const services = [
  {
    title: "Strategic Planning & Consultations",
    description: "Where do I start? What's my budget? How do I engage our donor/client base? We can help answer all of these questions and more.",
    icon: strategyIcon,
    features: ["Monthly strategic sessions", "Budget optimization", "Donor engagement strategies", "Leadership guidance"]
  },
  {
    title: "Event Strategic Aid and Creation",
    description: "Transform your events into EXPERIENCES that utilize resources efficiently, engage the public, and inspire your followers.",
    icon: eventsIcon,
    features: ["Event planning & management", "Experience design", "Resource optimization", "Public engagement strategies"]
  },
  {
    title: "Videography, Photography, & Podcasting",
    description: "High-quality, affordable content creation and management to amplify your organization's voice and connect on a deeper level.",
    icon: contentIcon,
    features: ["Professional videography", "Podcast production", "Photography services", "Content editing & post-production", "Equipment & studio setup", "Live streaming services", "Content distribution strategy", "Brand storytelling through media"]
  },
  {
    title: "Social Media Management",
    description: "Strategic social media presence management that builds authentic connections, increases engagement, and drives meaningful conversations with your audience.",
    icon: contentIcon,
    features: ["Content strategy & planning", "Community management", "Engagement optimization", "Analytics & reporting", "Brand voice development", "Cross-platform coordination"]
  },
  {
    title: "Grant Enhancement and Creation",
    description: "Professional grant writing that takes 80-200 hours off your plate while improving your 30-40% success rate.",
    icon: grantsIcon,
    features: ["Grant proposal writing", "Application enhancement", "Success rate optimization", "Professional formatting"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive marketing solutions designed to amplify your impact and 
            help your organization reach its full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 border-0 bg-gradient-to-br from-card to-accent/20"
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary p-3 group-hover:shadow-glow transition-all duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary-foreground hover:bg-primary group p-0 h-auto"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Amplify Your Impact?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can help your organization achieve its goals.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;