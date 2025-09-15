"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import strategyIcon from "@/assets/strategy-icon.png";
import eventsIcon from "@/assets/event-icon.png";
import contentIcon from "@/assets/content-icon.png";
import grantsIcon from "@/assets/grant-icon.png";
import socialIcon from "@/assets/social-icon.png";
import websiteIcon from "@/assets/website-icon.png";
const services = [
  {
    title: "Strategic Planning & Consultations",
    description: "Where do I start? What resources should I utilize? How do I attract new clients/donors? How do I engage my current client/donor base?",
    icon: strategyIcon,
    path: "/services/strategic-planning",
    features: ["Monthly Strategic Sessions", "Resource Optimization", "Acquisition and Engagement Strategies", "Building Branding & Storytelling"]
  },
  {
    title: "Event Planning & Logistics",
    description: "Transform your events into EXPERIENCES that engage the public, inspire your followers, and effectively utilize resources.",
    icon: eventsIcon,
    path: "/services/event-services",
    features: ["Event Planning & Logistical Guidance", "On-site Coordinating", "Building New & Maximizing Current Partnership Strategizing", "Employee or Volunteer Coordinating"]
  },
  {
    title: "Videography, & Photography",
    description: "High-quality, affordable content creation utilized to amplify your cause and tell your story.",
    icon: contentIcon,
    path: "/services/content-creation",
    features: ["Professional Videography", "Professional Photography", "State of the Art Audio, Lighting, & Editing", "Content Strategy, Brand Storytelling, & Event Production"]
  },
  {
    title: "Social Media Management & Podcasting",
    description: "Seamless, common-sense social media management that builds authentic connections, increases engagement, and inspires meaningful dialogue with your current and future supporters.",
    icon: socialIcon,
    path: "/services/social-media",
    features: ["Increased Brand Visibility, Awareness, & Engagement", "Cross-Platform Postings and Management", "Consistent Strategic Content Creation", "Data-Driven Growth & Analytics"]
  },
  {
    title: "Grant Consulting",
    description: "Professional grant writing and consultations that can save your organization multiple hours of labor and simultaneously decrease overall costs.",
    icon: grantsIcon,
    path: "/services/grants",
    features: ["Provide Access & Insight into Funding Opportunities", "Editing and Authoring Compelling & Competitive Proposals", "Maximizing Time & Savings on Resources", "Improving Success & Providing Consistent Long-Term Strategies"]
  },
  {
    title: "Website Design & Development",
    description: "Professional, responsive websites that showcase your organization's mission and drive engagement with modern design and optimal performance.",
    icon: websiteIcon,
    path: "/services/website-design",
    features: ["Custom Website Design", "Responsive Development", "Performance Optimization", "Ongoing Maintenance & Support"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background" role="region" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 id="services-heading" className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive marketing solutions designed to amplify your impact and 
            help your organization reach its full potential.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-16" role="list">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 border-0 bg-gradient-to-br from-card to-accent/20 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              role="listitem"
            >
               <CardHeader className="space-y-4 ">
                 <div className="w-24 h-24 rounded-lg bg-gradient-primary p-3 group-hover:shadow-glow transition-all duration-300 mx-auto">
                  <Image
                       src={service.icon}
                       alt={`${service.title} service icon`}
                       className="w-full h-full object-cover rounded"
                       width={96}
                       height={96}
                     />
                 </div>
                <CardTitle className="text-xl font-bold text-center group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2" role="list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                 <Button 
                   variant="ghost" 
                   className="text-primary hover:text-primary-foreground hover:bg-primary group p-0 h-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                   asChild
                 >
                   <Link href={service.path} onClick={() => window.scrollTo(0, 0)}>
                     Learn More
                     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                   </Link>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground" role="region" aria-labelledby="cta-heading">
          <h3 id="cta-heading" className="text-3xl font-bold mb-4">
            Ready to Amplify Your Impact?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can help your organization achieve its goals.
          </p>
           <Button 
             size="lg"
             variant="secondary"
             className="bg-background text-primary hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
             asChild
           >
             <Link href="/contact" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
               Schedule a Consultation
               <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
             </Link>
           </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;