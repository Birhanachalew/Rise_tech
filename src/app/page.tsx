"use client"
import Services from "@/components/Services/page"
import TechStart from "@/components/TechStack/page"
import Projects from "@/components/Projects/page"
import Testimonials from "@/components/Testimonials/page"
import ContactUs from "@/components/ContactUs/page"
import HeroSection from "@/components/HeroSection/page"
import Footer from "@/components/Footer/page"
import Navbar from "@/components/Navbar/page"

export default function Portfolio() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">

      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      

      {/* Services Section */}

      <Services />
      
      {/* Tech Stack Section */}
      <TechStart />
     

      {/* Projects Section */}
      <Projects />
      
      {/* Testimonials Section */}
      <Testimonials />
     
      {/* Contact Section */}
      <ContactUs />
     
      {/* Footer */}
      <Footer />
    </div>
  )
}
