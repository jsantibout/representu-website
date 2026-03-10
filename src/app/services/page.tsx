"use client";

import Services from "@/components/Services";

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
