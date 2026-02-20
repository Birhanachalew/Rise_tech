import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";


const Particles = dynamic(() => import('../Particles'), { 
  ssr: false 
});
function HeroSection() {


    const [isVisible, setIsVisible] = useState(false);
    
   
  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <section className="px-10 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20" />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-purple-500/30 rounded-lg animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-cyan-500/30 rotate-45 animate-float-fast"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/20 rounded-full animate-float-slow"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-pattern"></div>
        </div>

        {/* Particle Effects */}

        <Particles />
       
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8 hover:bg-purple-500/30 transition-all duration-300">
              <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="text-purple-300 text-sm font-medium">
                Cutting-Edge Development Studio
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                RISE TECH
              </span>
              <br />
              <span className="text-3xl lg:text-4xl text-gray-300 font-normal">
                Builds the Future
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              We craft{" "}
              <span className="text-purple-400 font-semibold">custom web</span>{" "}
              and{" "}
              <span className="text-cyan-400 font-semibold">
                mobile applications
              </span>{" "}
              that scale. From startups to enterprises, we deliver innovative
              solutions across all major programming languages and frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
             <Link href='#contact'  passHref >
              <Button
                size="lg"
                className="cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                Get in touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
             
             </Link>
              <Link href='#projects'  passHref >
              <Button
                size="lg"
                variant="outline"

                className="cursor-pointer border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg backdrop-blur-sm"
              >
                View Our Work
              </Button>
              
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">99%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Code Display */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Code Window */}
              <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700 shadow-2xl shadow-purple-500/20 overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 border-b border-slate-600">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-gray-400 text-sm">
                    rise-tech.tsx
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="text-purple-400">
                    const <span className="text-cyan-400">RISE TECH</span> = ()
                    =&gt; {"{"}
                  </div>
                  <div className="ml-4 text-gray-300">return (</div>
                  <div className="ml-8 text-green-400">
                    &lt;div className="innovation"&gt;
                  </div>
                  <div className="ml-12 text-yellow-400">
                    &lt;h1&gt;Building Tomorrow&lt;/h1&gt;
                  </div>
                  <div className="ml-12 text-blue-400">
                    &lt;p&gt;One App at a Time&lt;/p&gt;
                  </div>
                  <div className="ml-8 text-green-400">&lt;/div&gt;</div>
                  <div className="ml-4 text-gray-300">)</div>
                  <div className="text-purple-400">{"}"}</div>
                  <div className="mt-4 text-gray-500">
                    // Ready to transform your ideas?
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold animate-bounce">
                React
              </div>
              <div
                className="absolute top-20 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                Node
              </div>
              <div
                className="absolute top-6 left-16 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold animate-bounce"
                style={{ animationDelay: "0.8s" }}
              >
                Java
              </div>
              <div
                className="absolute top-32 right-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold animate-bounce"
                style={{ animationDelay: "1.1s" }}
              >
                Go
              </div>
              <div
                className="absolute -bottom-2 left-4 w-16 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-xs font-bold animate-bounce"
                style={{ animationDelay: "1.4s" }}
              >
                Python
              </div>
              <div
                className="absolute -bottom-6 -left-10 w-12 h-12 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold animate-bounce"
                style={{ animationDelay: "1.7s" }}
              >
                Flutter
              </div>
              <div
                className="absolute -bottom-4 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                AI
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
