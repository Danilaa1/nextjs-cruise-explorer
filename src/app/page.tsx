"use client";

import Header from "../components/Header";
import CruiseSection from "../components/Sections/CruiseSection";
import AdventureSection from "../components/Sections/AdventureSection";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-6 space-y-8">
        <AdventureSection />
        <CruiseSection />
      </div>
    </>
  );
}
