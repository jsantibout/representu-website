import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle} from "lucide-react";
import grantPhoto from "@/assets/grant-photo.jpg";
import { Link } from "react-router-dom";

const GrantServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Full-width hero image */}
        <div className="w-full h-[28rem] mb-8">
          <img
            src={grantPhoto}
            alt="Grant Services"
            className="w-full h-full object-cover"
          />
        </div>
        
        <section className="pb-24 bg-gradient-to-br from-background to-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 space-y-4 animate-fade-in">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-foreground">Grant </span>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Consulting</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professional grant writing and consultations designed to maximize your resources and increase your success rate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
                  <div className="space-y-4">
                    {[
                      "Grant Proposal Writing",
                      "Coaching Grant Writers",
                      "Editing Grant Proposals",
                      "Locating New Opportunities for Funding",
                      "Consistently Engaging Donors & Funding Programs"
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
                    We've helped organizations increase their funding by collaborating together on properly crafted, articulate, and powerful grants. Our goal is to help build your impact, communicate your cause's needs, and illuminate your purpose through consistent grant writing.
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

export default GrantServicesPage;