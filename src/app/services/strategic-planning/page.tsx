"use client";

import Header from "@/components/Header";
import StrategicPlanning from "@/pages/services/StrategicPlanning";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function StrategicPlanningPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <StrategicPlanning />
      </main>
      <Footer />
    </div>
  );
}
