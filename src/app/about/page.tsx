"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <About />
      </main>
      <Footer />
    </div>
  );
}
