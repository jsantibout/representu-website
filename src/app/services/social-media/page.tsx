"use client";

import Header from "@/components/Header";
import SocialMedia from "@/pages/services/SocialMedia";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
}
