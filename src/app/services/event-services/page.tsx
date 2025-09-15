"use client";

import Header from "@/components/Header";
import EventServices from "@/pages/services/EventServices";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function EventServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <EventServices />
      </main>
      <Footer />
    </div>
  );
}
