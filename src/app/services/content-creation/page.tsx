"use client";

import Header from "@/components/Header";
import ContentCreation from "@/pages/services/ContentCreation";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function ContentCreationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <ContentCreation />
      </main>
      <Footer />
    </div>
  );
}
