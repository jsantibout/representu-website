"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: '',
    services: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const services = [
    "Strategic Planning & Consulting",
    "Videography",
    "Photography",
    "Social Media Management",
    "Grant Writing & Editing",
    "Event Creation",
    "Assistance with Existing Events",
    "Podcasting",
    "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrors({});

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'service_ynypwot'; // Replace with your EmailJS service ID
      const templateId = 'template_5hzf1dt'; // Replace with your EmailJS template ID
      const publicKey = 'KCNBJMK5GxluTEgdf'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        organization: formData.organization,
        message: formData.message,
        services: formData.services.join(', '),
        to_email: 'info.representu@gmail.com'
        // to_email: 'jsantibout.pjr@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        message: '',
        services: []
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-subtle" role="region" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 id="contact-heading" className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to amplify your organization's impact? Let's start the conversation.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need specific services or want to explore our comprehensive packages, 
                we're here to help your organization achieve its goals.
              </p>
            </div>

            <div className="space-y-6" role="list">
              <div className="flex items-center space-x-4" role="listitem">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                  <Mail className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info.representu@gmail.com" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                      info.representu@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4" role="listitem">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                  <MapPin className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Service Area</h4>
                  <p className="text-muted-foreground">Local & Remote Services Available</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4" role="list">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61565403405775", label: "Follow us on Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com/we.rep.u/profilecard/?igsh=NTc4MTIwNjQ2YQ%3D%3D", label: "Follow us on Instagram" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/we-represent-u/?viewAsMember=true", label: "Follow us on LinkedIn" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group p-1 rounded bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:glow-effect focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={label}
                    role="listitem"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="border-primary text-primary hover:bg-primary hover:text-primary-foreground p-2" size={35} aria-hidden="true"/>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Schedule a Consultation</CardTitle>
              <CardDescription>
                Tell us about your organization and how we can help amplify your impact.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-labelledby="form-title">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name *</label>
                  <Input 
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Your first name" 
                    className={`border-border focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 ${errors.firstName ? 'border-red-500' : ''}`}
                    required
                    aria-required="true"
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="text-sm text-red-600" role="alert">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name *</label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Your last name" 
                    className={`border-border focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 ${errors.lastName ? 'border-red-500' : ''}`}
                    required
                    aria-required="true"
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="text-sm text-red-600" role="alert">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email *</label>
                <Input 
                  id="email"
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com" 
                  className={`border-border focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 ${errors.email ? 'border-red-500' : ''}`}
                  required
                  aria-required="true"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm font-medium text-foreground">Organization *</label>
                <Input 
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Your organization name" 
                  className={`border-border focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 ${errors.organization ? 'border-red-500' : ''}`}
                  required
                  aria-required="true"
                  aria-describedby={errors.organization ? "organization-error" : undefined}
                  aria-invalid={!!errors.organization}
                />
                {errors.organization && (
                  <p id="organization-error" className="text-sm text-red-600" role="alert">
                    {errors.organization}
                  </p>
                )}
              </div>

              <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-foreground">Services of Interest</legend>
                <div className="grid grid-cols-1 gap-3" role="group" aria-labelledby="services-legend">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox 
                        id={service.toLowerCase().replace(/\s+/g, '-')}
                        checked={formData.services.includes(service)}
                        onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        aria-describedby={`${service.toLowerCase().replace(/\s+/g, '-')}-description`}
                      />
                      <label 
                        htmlFor={service.toLowerCase().replace(/\s+/g, '-')}
                        className="text-sm text-foreground cursor-pointer"
                      >
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your organization and what services you're interested in..."
                  className={`border-border focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                  required
                  aria-required="true"
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-600" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg" role="alert" aria-live="polite">
                  <p className="text-green-800 text-sm">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert" aria-live="polite">
                  <p className="text-red-800 text-sm">Failed to send message. Please try again or contact us directly.</p>
                </div>
              )}

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                size="lg"
                aria-describedby={submitStatus !== 'idle' ? 'form-status' : undefined}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </>
                )}
              </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;