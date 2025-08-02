"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Navbar from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/Hero";

import Contact from "@/components/sections/Contact";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const [scrollProgress, setScrollProgress] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "techstack",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      // Calculate overall scroll progress
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = Math.min((window.scrollY / documentHeight) * 100, 100);
      setScrollProgress(scrolled);

      // Find active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden pb-16 sm:pb-0 custom-scroll-container">
      <Navbar
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        scrollToSection={scrollToSection}
      />

      <HeroSection />

      <About />

      <TechStack />

      <Projects />

      <Experience />

      <Contact />

      <Footer />
    </div>
  );
};
export default Portfolio;
