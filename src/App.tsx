import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import NotFound from "./pages/NotFound";
import StrategicPlanningPage from "./pages/services/StrategicPlanning";
import EventServicesPage from "./pages/services/EventServices";
import ContentCreationPage from "./pages/services/ContentCreation";
import SocialMediaPage from "./pages/services/SocialMedia";
import GrantServicesPage from "./pages/services/GrantServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/strategic-planning" element={<StrategicPlanningPage />} />
          <Route path="/services/event-services" element={<EventServicesPage />} />
          <Route path="/services/content-creation" element={<ContentCreationPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/grants" element={<GrantServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
