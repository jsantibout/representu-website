import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import strategyIcon from "@/assets/strategy-icon.jpg";

const StrategicPlanningPage = () => {
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
                    src={strategyIcon}
                    alt="Strategic Planning"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-foreground">Strategic Planning & </span>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Consultations</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Where do I start? What's my budget? How do I engage our donor/client base? 
                  We can help answer all of these questions and more.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
                  <div className="space-y-4">
                    {[
                      "Monthly strategic sessions",
                      "Budget optimization",
                      "Donor engagement strategies", 
                      "Leadership guidance",
                      "Goal setting and tracking",
                      "Resource allocation planning"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Why Choose Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our strategic planning services are designed to provide clarity and direction 
                    for organizations looking to maximize their impact. We work closely with your 
                    team to develop comprehensive strategies that align with your mission and goals.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From budget optimization to donor engagement, we provide the expertise and 
                    guidance needed to move your organization forward with confidence.
                  </p>
                </div>
              </div>

              <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Plan Your Success?
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Let's work together to create a strategic roadmap for your organization.
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

export default StrategicPlanningPage;