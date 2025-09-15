"use client";

import Header from "@/components/Header";
import GrantServices from "@/pages/services/GrantServices";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function GrantServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <GrantServices />
      </main>
      <Footer />
    </div>
  );
}
