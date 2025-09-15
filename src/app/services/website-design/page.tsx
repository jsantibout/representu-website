"use client";

import Header from "@/components/Header";
import WebsiteDesign from "@/pages/services/WebsiteDesign";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function WebsiteDesignPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <WebsiteDesign />
      </main>
      <Footer />
    </div>
  );
}
