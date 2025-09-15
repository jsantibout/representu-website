"use client";

import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
