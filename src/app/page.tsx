"use client";
import React from "react";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Education from "@/components/Education";
import Portfolio from "@/components/Portfolio";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Services from "@/components/Services";
import Home from "@/components/Home";
import Header from "@/components/Header";
import Client from "@/components/Client";
import News from "@/components/News";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (

    <div className="flex flex-col min-h-screen">

  <main className="flex-grow bg-white min-h-screen font-sans md:px-0 pt-7">
    {/* <main className="bg-white min-h-screen font-sans  md:px-0 py-3 pt-7 "> */}
      <Header />
      <Home />
      <Services />
      <About />
      <Tools />
      <Portfolio />
      <Education />
      <PricingSection />
      <ContactSection />
      <Client />
      <News />
      <Faq />
      <Footer />
    </main>
    </div>
  );
}
