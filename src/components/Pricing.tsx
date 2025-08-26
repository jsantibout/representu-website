import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Empower Package",
    description: "Perfect for getting started with professional marketing support",
    price: "Contact for Pricing",
    features: [
      "Monthly Strategic Planning Session",
      "Up to 3 Grant Proposal Enhancements",
      "1 Grant Proposal Composition",
      "Video Coverage of 1 Event",
      "Event Consultation and Aid of 1 Event"
    ],
    popular: false
  },
  {
    name: "Amplify Package",
    description: "Most popular choice for growing organizations",
    price: "Contact for Pricing",
    features: [
      "Bi-Monthly Strategic Planning Sessions",
      "Up to 3 Grant Proposal Enhancements",
      "2 Grant Proposal Compositions",
      "Video Coverage of 1 Event",
      "Event Consultation and Aid of 2 Events",
      "1.5 Hours in our Podcast Studio",
      "Social Media Management",
      "Creation of 1 Event"
    ],
    popular: true
  },
  {
    name: "Impact Package",
    description: "Comprehensive solution for maximum organizational growth",
    price: "Contact for Pricing",
    features: [
      "Bi-Monthly Strategic Planning Session",
      "Up to 5 Grant Proposal Enhancements",
      "2 Grant Proposal Compositions",
      "Video Coverage of 1 Event",
      "Event Consultation and Aid of 3 Events",
      "1.5 Hours in our Podcast Studio",
      "Social Media Management",
      "Photo Content of 1 Event",
      "Creation of 1 Event",
      "Physical Ambassador at 2 Events"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Service </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower, Amplify, and Impact Your Organization with One of Our Incredible Service Bundles!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative group transition-all duration-300 ${
                pkg.popular 
                  ? 'border-primary shadow-primary scale-105' 
                  : 'border-border hover:border-primary/50 hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {pkg.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-primary hover:shadow-glow'
                      : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                  variant={pkg.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Services CTA */}
        <div className="text-center bg-card rounded-2xl p-12 border border-border">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Need Custom or À La Carte Services?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We customize any and all of our services to best fit your unique needs. 
            Schedule an appointment to discuss what you need.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Schedule Custom Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;