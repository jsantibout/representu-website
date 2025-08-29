import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I get custom or a la carte services?",
    answer: "Yes, we will customize any and all of our services to best fit U. Head over to the contact tab. You can schedule an appointment with us to discuss what you need from there. We look forward to serving you!"
  },
  {
    question: "Do you offer website construction, SEO services, or Google business management?",
    answer: "At this time, we do not offer any of these services; however, we have some incredible partners that do. If you head over to the Contact Us tab, you can schedule a call or message us with an email. We are more than happy to connect you with one of our incredible partners."
  },
  {
    question: "What makes Represent U different than other marketing services?",
    answer: "Represent U offers marketing that will greatly impact your business locally. We are adept at getting your organization to maximize its influence within your community. In addition, typically, marketing services do not offer services like grant writing and ambassadorship. Not only are these services needed, they're a testament to the personal care that you'll receive in your partnership with Represent U."
  },
  // {
  //   question: "How long does it take to see results?",
  //   answer: "Results vary depending on the services and your organization's goals. Typically, our clients see initial improvements in their marketing efforts within 30-60 days. Grant writing results depend on application deadlines and review cycles, while social media and content marketing often show engagement improvements within the first month."
  // },
  {
    question: "Do you work with both businesses and nonprofits?",
    answer: "Yes! We work with both businesses and nonprofits. Our services are tailored to meet the unique needs of each type of organization, whether you're looking to increase revenue, improve donor engagement, or amplify your community impact."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Frequently Asked </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our services and how we can help your organization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;