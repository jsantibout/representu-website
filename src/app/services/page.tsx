"use client";

import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <Services />
      </main>
    </div>
  );
}
