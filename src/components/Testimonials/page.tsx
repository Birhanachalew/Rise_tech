import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  MessageCircle,
  Heart,
} from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Liya Mengistu",
      company: "Green Africa Farm",
      role: "Operations Director",
      content:
        "RISE TECH delivered a fast, modern website that tells our story clearly and performs beautifully across devices.",
      rating: 5,
      project: "Green Africa Farm",
      avatar: "LM",
      industry: "Agriculture",
    },
    {
      name: "Samuel Tesfaye",
      company: "Robin Trade Premium",
      role: "Founder",
      content:
        "The platform feels premium and trustworthy, and the delivery was on time with excellent attention to detail.",
      rating: 5,
      project: "Robin Trade Premium",
      avatar: "ST",
      industry: "FinTech",
    },
    {
      name: "Rahel Bekele",
      company: "Fortunate Soccer Academy",
      role: "Director",
      content:
        "Our academy site now feels professional and easy to navigate, helping parents find programs quickly.",
      rating: 5,
      project: "Fortunate Soccer Academy",
      avatar: "RB",
      industry: "Sports",
    },
    {
      name: "Marco Bianchi",
      company: "Log Interior",
      role: "Creative Lead",
      content:
        "They translated our portfolio into a clean, elegant web experience that highlights our work perfectly.",
      rating: 5,
      project: "Log Interior",
      avatar: "MB",
      industry: "Interior Design",
    },
    {
      name: "Hana Dereje",
      company: "Yenegym",
      role: "Product Manager",
      content:
        "The login flow is smooth and reliable, and the site performs well even during peak traffic.",
      rating: 5,
      project: "Yenegym",
      avatar: "HD",
      industry: "Fitness",
    },
    {
      name: "Andrea Rossi",
      company: "Wib Fashion",
      role: "Co-Founder",
      content:
        "They helped us launch a polished brand presence and drive mobile engagement with a seamless experience.",
      rating: 5,
      project: "Wib Fashion",
      avatar: "AR",
      industry: "Fashion",
    },
  ];
  return (
      <section id="testimonials" className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid-pattern"></div>
        </div>
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg animate-float-medium"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-1 mb-4">
              <Heart className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs font-medium">Client Love</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          {/* Client Satisfaction Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
              { number: "4.9/5", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
              { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
              { number: "95%", label: "Repeat Business", icon: <CheckCircle className="w-6 h-6" /> },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-slate-800/60 border-slate-700 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Testimonial */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-purple-500/30 max-w-4xl mx-auto">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>
                  <blockquote className="text-xl lg:text-2xl text-white mb-6 italic leading-relaxed">
                    "RISE TECH delivered a reliable, high-performance platform that strengthened our brand and improved
                    customer engagement across web and mobile."
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      YW
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold text-lg">Yonas Weldehana</div>
                      <div className="text-purple-300">
                        Entrepreneur | Software Engineer | Co-Founder at Rise
                        Tech and Central Machinery
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-slate-800/80 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                      {testimonial.industry}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-white font-medium">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">Project:</div>
                      <div className="text-xs text-purple-300 font-medium">{testimonial.project}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Industry Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Trusted Across <span className="text-purple-400">Industries</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "FinTech", count: "8+ projects" },
                { name: "Healthcare", count: "12+ projects" },
                { name: "E-commerce", count: "15+ projects" },
                { name: "Education", count: "6+ projects" },
                { name: "Real Estate", count: "4+ projects" },
                { name: "Food & Beverage", count: "7+ projects" },
              ].map((industry, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/60 border-slate-700 text-center hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="text-white font-medium text-sm mb-1">{industry.name}</div>
                    <div className="text-gray-400 text-xs">{industry.count}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Video Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Video <span className="text-cyan-400">Testimonials</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sarah Johnson", company: "TechStart Inc.", duration: "2:15" },
                { name: "Michael Chen", company: "Digital Ventures", duration: "1:45" },
                { name: "Emily Rodriguez", company: "InnovateCorp", duration: "3:20" },
              ].map((video, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/80 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded px-2 py-1 text-white text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-white font-medium">{video.name}</div>
                    <div className="text-gray-400 text-sm">{video.company}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-purple-500/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how we can help transform your business with cutting-edge technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="cursor-pointer bg-inherit border-white/30 text-white hover:bg-white/10">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
}

export default Testimonials;