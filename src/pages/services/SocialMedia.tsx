import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle} from "lucide-react";
import socialMediaPhoto from "@/assets/social-media.png";
import { Link } from "react-router-dom"

const SocialMediaPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Full-width hero image */}
        <div className="w-full h-[28rem] mb-8">
          <img
            src={socialMediaPhoto}
            alt="Social Media Management"
            className="w-full h-full object-cover"
          />
        </div>
        
        <section className="pb-24 bg-gradient-to-br from-background to-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 space-y-4 animate-fade-in">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-foreground">Social Media </span>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Management </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Strategic social media presence management that builds authentic connections, 
                  increases engagement, and drives meaningful conversations with your audience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
                  <div className="space-y-4">
                    {[
                      "Content strategy & planning",
                      "Community management",
                      "Engagement optimization",
                      "Analytics & reporting",
                      "Brand voice development",
                      "Cross-platform coordination"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Strategic Social Media Excellence</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In today's digital landscape, a strategic social media presence is crucial for 
                    building authentic connections and driving meaningful engagement. We develop 
                    comprehensive strategies that align with your organization's goals and values.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From content planning to community management, our social media services 
                    help you create a cohesive online presence that resonates with your audience 
                    and amplifies your mission.
                  </p>
                </div>
              </div>

              <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Social Media Presence?
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Let's build authentic connections and drive meaningful engagement across all platforms.
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-background text-primary hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SocialMediaPage;