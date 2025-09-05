import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import logo from "@/assets/repU_LargeLogo.png";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-subtle">
      <div className="container px-4">
        <h1 className="text-7xl lg:text-6xl font-extrabold leading-tight text-center flex flex-col items-center justify-center pb-20">
          <span className="text-black pt-20 mt-20">Welcome to</span>
          <img
            src={logo}
            alt="RepresentU"
            className="h-[3em]"
          />
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 pb-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl fond-bold leading-tight">
                <span className="text-foreground">Welcome to </span> 
              </h1>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
                <span className="text-foreground">Our Mission = </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Your Purpose
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Empowering your cause and amplifying your voice. We provide businesses and nonprofits 
                with top-tier marketing solutions at a fraction of in-house costs. We will alleviate stress, 
                so you can focus on what truly matters—changing the world. We believe that with the right 
                support, every organization can make a significant impact, and we are here to help you 
                achieve that with creativity, passion, and strategic marketing expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
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
            </div> */}
          </div>

          {/* Promo Video */}
          <div className="relative lg:ml-8 animate-slide-up">
            {/* Background container with floating elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full animate-float opacity-80 z-0"></div>
              <div className="absolute -bottom-5 -left-6 w-12 h-12 bg-primary-light rounded-full animate-float opacity-80 z-0" style={{ animationDelay: '1s' }}></div>
            </div >
            <div className="relative z-10 rounded-2x1 overflow-hidden shadow-x1">
              <VideoPlayer videoSrc={"https://www.youtube.com/embed/T6fJ3Q6duuc?autoplay=1&mute=1"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;