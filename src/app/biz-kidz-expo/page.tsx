import type { Metadata } from "next";
import BizKidzExpo from "@/components/BizKidzExpo";

export const metadata: Metadata = {
  title: "Biz Kidz Expo - February 13, 2027 | RepresentU",
  description:
    "The Biz Kidz Expo at Promenade Mall in Temecula, CA showcases young entrepreneurs ages 5-17. Register as an entrepreneur or become a sponsor.",
};

export default function BizKidzExpoPage() {
  return (
    <main id="main-content">
      <BizKidzExpo />
    </main>
  );
}
