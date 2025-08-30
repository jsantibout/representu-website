import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import eventsIcon from "@/assets/events-icon.jpg";
import VideoPlayer from "@/components/VideoPlayer";

const EventServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-24 bg-gradient-to-br from-background to-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 space-y-4 animate-fade-in">
                <div className="w-24 h-24 rounded-lg bg-gradient-primary p-4 mx-auto mb-6">
                  <img
                    src={eventsIcon}
                    alt="Event Services"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-foreground">Event Strategic Aid & </span>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Creation</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Transform your events into EXPERIENCES that utilize resources efficiently, 
                  engage the public, and inspire your followers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
                  <div className="space-y-4">
                    {[
                      "Event planning & management",
                      "Experience design",
                      "Resource optimization",
                      "Public engagement strategies",
                      "Vendor coordination",
                      "Post-event analysis"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 pb-20">
                  <h2 className="text-2xl font-bold text-foreground">Our Approach</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't just plan events - we create memorable experiences that align with 
                    your organization's mission and goals. Our strategic approach ensures every 
                    event maximizes engagement while staying within budget.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From intimate donor dinners to large-scale public events, we handle every 
                    detail so you can focus on what matters most - connecting with your audience.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl pt-4 font-bold">
                  <span className="text-foreground">Testimonials</span>
                </h2>
                <div className="mt-6 pb-10 flex justify-center">
                  <VideoPlayer videoSrc={"https://www.youtube.com/embed/Y75M3K6hdno?autoplay=1"} />
                </div>
                <div className="pb-20">
                  <VideoPlayer videoSrc={"https://www.youtube.com/embed/FMMxxdx-uZk"} />
                </div>
                
              </div>

              <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Create Unforgettable Events?
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Let's transform your next event into an experience your audience will remember.
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
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EventServicesPage;