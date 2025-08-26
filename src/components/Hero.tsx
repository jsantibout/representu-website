import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Our Mission = </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Your Purpose
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Empowering your cause and amplifying your voice. We provide businesses and nonprofits 
                with top-tier marketing solutions at a fraction of in-house costs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Organizations Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$2M+</div>
                <div className="text-sm text-muted-foreground">Grants Secured</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:ml-8 animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Represent U Marketing Solutions"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-light rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;