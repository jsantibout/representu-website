"use client";

import Header from "@/components/Header";
import NotFound from "@/pages/NotFound";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <NotFound />
      </main>
      <Footer />
    </div>
  );
}
