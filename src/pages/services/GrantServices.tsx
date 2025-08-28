import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import grantsIcon from "@/assets/grants-icon.jpg";

const GrantServicesPage = () => {
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
                    src={grantsIcon}
                    alt="Grant Services"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-foreground">Grant Enhancement & </span>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Creation</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professional grant writing that takes 80-200 hours off your plate while 
                  improving your 30-40% success rate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
                  <div className="space-y-4">
                    {[
                      "Grant proposal writing",
                      "Application enhancement",
                      "Success rate optimization",
                      "Professional formatting",
                      "Research and compliance",
                      "Follow-up management"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Proven Results</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Grant writing is both an art and a science. Our experienced team understands 
                    what funders are looking for and how to present your organization's needs 
                    in the most compelling way possible.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We've helped organizations secure millions in funding by crafting proposals 
                    that clearly articulate impact, demonstrate need, and showcase measurable outcomes.
                  </p>
                </div>
              </div>

              <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Secure Funding?
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Let's work together to craft compelling grant proposals that get results.
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

export default GrantServicesPage;