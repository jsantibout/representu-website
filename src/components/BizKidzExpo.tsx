"use client";
import { Calendar, Clock, MapPin, Users, Heart, Share2, Tent, Utensils, Music, PartyPopper } from "lucide-react";

// GoHighLevel form ID for the Biz Kidz Expo intake form.
const GHL_FORM_ID = "qQGhiioUZx1aAX7MF3A5";

const details = [
  { icon: Calendar, label: "Date", value: "February 13th, 2027" },
  { icon: Clock, label: "Time", value: "10am – 2pm" },
  { icon: MapPin, label: "Location", value: "Promenade Mall, Temecula, CA 92591" },
  { icon: Users, label: "Ages", value: "5 – 17" },
];

const sponsorTiers = [
  { name: "Visionary Sponsor", price: "$3,000" },
  { name: "Innovator Sponsor", price: "$2,000" },
  { name: "Dream Builder Sponsor", price: "$1,000" },
];

const activities = [
  { icon: PartyPopper, label: "Family activities" },
  { icon: Music, label: "Entertainment" },
  { icon: Utensils, label: "Food" },
];

const BizKidzExpo = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-subtle" role="region" aria-labelledby="expo-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 id="expo-heading" className="text-4xl lg:text-6xl font-bold">
            <span className="text-foreground">Biz Kidz </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Expo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A day for young entrepreneurs to showcase their businesses, with family fun for everyone.
            A portion of the proceeds will be given to local charities.
          </p>
        </header>

        {/* Event details */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center space-x-4 p-5 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 shrink-0 bg-gradient-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-muted-foreground">{label}</h2>
                <p className="font-semibold text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info column */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Entrepreneur Entrance Fee</h2>
              <div className="p-6 rounded-lg bg-card border border-border">
                <p className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">$125</p>
                <div className="flex items-center space-x-2 mt-3 text-muted-foreground">
                  <Tent className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span>6ft table and canopy provided</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Sponsorship Opportunities</h2>
              <ul className="space-y-3">
                {sponsorTiers.map(({ name, price }) => (
                  <li key={name} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                    <span className="font-semibold text-foreground">{name}</span>
                    <span className="font-bold text-primary">{price}</span>
                  </li>
                ))}
                <li className="p-4 rounded-lg bg-card border border-primary/30">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                      Sponsor a Child Entrepreneur
                    </span>
                    <span className="font-bold text-primary">$300</span>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc pl-5">
                    <li>Sponsored children do not pay a registration fee or are refunded their registration payment.</li>
                    <li>Sponsor logo displayed at the entrepreneur's booth.</li>
                    <li className="list-none -ml-5 flex items-center">
                      <Share2 className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                      Social media exposure
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">What to Expect</h2>
              <ul className="grid grid-cols-3 gap-4">
                {activities.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex flex-col items-center text-center p-4 rounded-lg bg-card border border-border">
                    <Icon className="w-6 h-6 mb-2 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium text-foreground">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Intake form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Register or Sponsor</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fill out the form below to reserve a booth for your young entrepreneur or to become a sponsor.
            </p>
            {GHL_FORM_ID ? (
              <iframe
                src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
                style={{ width: "100%", height: "820px", border: "none", borderRadius: "3px" }}
                id={`inline-${GHL_FORM_ID}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="BizKidz"
                data-height="820"
                data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                data-form-id={GHL_FORM_ID}
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title="BizKidz"
                suppressHydrationWarning
              />
            ) : (
              <div className="p-6 rounded-lg bg-card border border-border text-muted-foreground">
                Registration is opening soon. Questions? Email{" "}
                <a href="mailto:info.representu@gmail.com" className="text-primary hover:underline">
                  info.representu@gmail.com
                </a>
                .
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizKidzExpo;
