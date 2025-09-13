import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle} from "lucide-react";
import contentPhoto from "@/assets/services_4.webp";
import { Link } from "react-router-dom";

const ContentCreationPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Full-width hero image */}
        <div className="w-full h-[28rem] mb-8">
          <img
            src={contentPhoto}
            alt="Content Creation"
            className="w-full h-full object-cover"
          />
        </div>
        
        <section className="pb-24 bg-gradient-to-br from-background to-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 space-y-4 animate-fade-in">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-foreground">Videography & </span>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Photography</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From promotional videos and professional headshots to podcast series. High-quality, affordable content creation and management to amplify your 
                  organization's voice and connect on a deeper level.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
                  <div className="space-y-4">
                    {[
                      "Professional Videography",
                      "Professional Photography",
                      "Content Editing",
                      "Compelling Storytelling",
                      "Effective Brand Representation",
                      "Elite Podcasting"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Content That Connects</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In today's digital world, compelling content is essential for reaching and 
                    engaging your audience. We create professional, authentic content that tells 
                    your story and drives meaningful connections.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From promotional videos to podcast series, our content creation services 
                    help you build a strong online presence that reflects your organization's 
                    values and mission.
                  </p>
                </div>
              </div>

              <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Amplify Your Voice?
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Let's create content that resonates with your audience and drives engagement.
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

export default ContentCreationPage;