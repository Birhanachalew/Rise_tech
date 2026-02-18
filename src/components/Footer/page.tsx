import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Code2,
  
  Star,
 
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
   Layers,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Clock,
  Award,
  Heart,
  Headphones,
  FileText,
  Lock,
} from "lucide-react"

function Footer() {
  return (
  // <footer className="py-8 border-t border-slate-700">
  //       <div className="container mx-auto px-4">
  //         <div className="flex flex-col md:flex-row justify-between items-center">
  //           <div className="text-white font-bold text-xl mb-4 md:mb-0">
  //             <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
  //               App It Up
  //             </span>
  //           </div>
  //           <div className="text-gray-400 text-sm">© 2024 App It Up. All rights reserved.</div>
  //         </div>
  //       </div>
  //     </footer>

    <footer className="relative pt-20 pb-10 border-t border-slate-700 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid-pattern"></div>
        </div>
        <div className="absolute top-20 right-10 w-40 h-40 border border-purple-500/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg animate-float-medium"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Footer Top - Logo and Newsletter */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 pb-16 border-b border-slate-700/50">
            {/* Logo and Tagline */}
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Code2 className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    App It Up
                  </span>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Crafting innovative digital solutions that transform businesses and delight users. Your vision, our
                expertise.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="w-full lg:w-auto">
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 max-w-md mx-auto lg:mx-0">
                <h3 className="text-white text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Subscribe to our newsletter for the latest tech insights and company updates.
                </p>
                <div className="flex">
                  <Input
                    placeholder="Enter your email"
                    className="bg-slate-700 border-slate-600 text-white focus:border-purple-500 rounded-r-none"
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-l-none">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Company Links */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Our Team", href: "#team" },
                  { label: "Careers", href: "#careers" },
                  { label: "Press Kit", href: "#press" },
                  { label: "Blog", href: "#blog" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Web Development", href: "#web" },
                  { label: "Mobile Development", href: "#mobile" },
                  { label: "Full-Stack Solutions", href: "#fullstack" },
                  { label: "UI/UX Design", href: "#design" },
                  { label: "DevOps & Cloud", href: "#devops" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-pink-400" />
                Resources
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Documentation", href: "#docs" },
                  { label: "Case Studies", href: "#case-studies" },
                  { label: "Tech Stack", href: "#tech-stack" },
                  { label: "FAQs", href: "#faqs" },
                  { label: "Knowledge Base", href: "#knowledge" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-yellow-400" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span>appitup70@gmail.com</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span>+125197608030</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-pink-400 mt-0.5" />
                  <span>
                    Remote & Global
                    <br />
                    Available Worldwide
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <Clock className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span>Available 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media and Awards */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-700/50 pt-8 mb-8">
            {/* Social Media */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-white text-sm font-medium mb-4 text-center md:text-left">Connect With Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: <Github className="w-4 h-4" />, label: "GitHub", color: "hover:bg-gray-700" },
                  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", color: "hover:bg-blue-700" },
                  { icon: <Twitter className="w-4 h-4" />, label: "Twitter", color: "hover:bg-blue-500" },
                  { icon: <Facebook className="w-4 h-4" />, label: "Facebook", color: "hover:bg-blue-600" },
                  { icon: <Instagram className="w-4 h-4" />, label: "Instagram", color: "hover:bg-pink-600" },
                  { icon: <Youtube className="w-4 h-4" />, label: "YouTube", color: "hover:bg-red-600" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    size="icon"
                    variant="outline"
                    className={`cursor-pointer border-slate-600 text-gray-300 hover:text-white ${social.color} transition-all duration-300`}
                    title={social.label}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>

            {/* Awards and Certifications */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {[
                { name: "Top Developer", year: "2023" },
                { name: "Best UX Design", year: "2023" },
                { name: "Innovation Award", year: "2022" },
              ].map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2"
                >
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300 text-xs">
                    {award.name} <span className="text-gray-500">{award.year}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom - Copyright and Legal */}
          <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0 text-center md:text-left">
              © 2024 App It Up. All rights reserved. Crafted with <Heart className="w-4 h-4 inline text-red-500" /> by
              our team.
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms of Service", href: "#terms" },
                { label: "Cookie Policy", href: "#cookies" },
                { label: "Sitemap", href: "#sitemap" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1"
                >
                  {link.label === "Privacy Policy" && <Lock className="w-3 h-3" />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer