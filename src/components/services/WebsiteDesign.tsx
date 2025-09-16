import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import webPhoto from "@/assets/website-developement-img.png"
import Link from "next/link";

const WebsiteDesign = () => {
  return (
    <div className="pt-20">
      {/* Full-width hero image */}
      <div className="w-full h-[28rem] mb-8">
        <Image
          src={webPhoto}
          alt="Website Design"
          className="w-full h-full object-cover"
          width={800}
          height={448}
        />
      </div>
      
      <section className="pb-24 bg-gradient-to-br from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">Website Design & </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">Development</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From concept to launch, we create stunning, functional websites that effectively communicate 
                your organization's story and drive meaningful engagement with your audience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">What We Offer</h3>
                <div className="space-y-4">
                  {[
                    "Custom Website Design",
                    "Responsive Development",
                    "Performance Optimization",
                    "Ongoing Maintenance & Support"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Why Professional Web Design Matters</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your website is often the first impression visitors have of your organization. 
                  A professionally designed, user-friendly website builds trust, enhances credibility, 
                  and effectively communicates your mission to potential supporters and stakeholders.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We create websites that not only look great but also perform optimally across all 
                  devices and load quickly to maximize your online visibility.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Build Your Digital Presence?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Let's create a website that effectively tells your story and drives your mission forward.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-background text-primary hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesign;
