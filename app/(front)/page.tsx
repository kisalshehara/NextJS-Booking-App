import Hero from "@/components/Frontend/Hero";
import { MegaMenu } from "@/components/Frontend/MegaMenu";
import React from "react";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto">
      <MegaMenu/>
      <Hero/>

    </section>
  );
}
