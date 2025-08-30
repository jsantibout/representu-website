import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-background to-background/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                About <span className="text-primary">Represent U</span>
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <div className="text-center mb-12">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Empowering organizations through strategic planning, innovative event creation, 
                    and comprehensive grant services.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      At Represent U, we believe in the power of strategic representation and thoughtful planning. 
                      Our mission is to help organizations unlock their full potential through comprehensive 
                      consulting services that drive real results.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We partner with nonprofits, businesses, and community organizations to create 
                      meaningful impact through strategic planning, event management, content creation, 
                      and grant acquisition.
                    </p>
                  </div>
                  <div className="bg-card p-8 rounded-lg border">
                    <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">Strategic thinking and innovation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">Collaborative partnerships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">Results-driven solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">Community impact focus</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg mb-16">
                  <h2 className="text-3xl font-bold mb-6 text-center">What Sets Us Apart</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary">💡</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                      <p className="text-muted-foreground">
                        We bring fresh perspectives and creative solutions to every challenge.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary">🤝</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                      <p className="text-muted-foreground">
                        We work alongside you as true partners in your success.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary">📈</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Results</h3>
                      <p className="text-muted-foreground">
                        Our strategies are designed to deliver measurable outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Let's discuss how Represent U can help your organization thrive.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium transition-colors"
                  >
                    Contact Us Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;