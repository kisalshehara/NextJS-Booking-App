import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import TabbedSection from "@/components/Frontend/TabbedSection";
import Services from "@/components/Frontend/Services/ServicesList";
import React from "react";

export default function Home() {
  return (
    <section className="max-w-8xl mx-auto">
      <Hero/>
      <TabbedSection/>
      <Brands/>
      <Services/>
    
      

    </section>
  );
}
