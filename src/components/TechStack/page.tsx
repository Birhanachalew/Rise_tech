import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from '@iconify/react';

function TechStart() {
  const techStack = [
    { icon:<Icon icon="skill-icons:react-dark" width="50" height="50" />, category: "Frontend" },
    { icon: <Icon icon="skill-icons:nextjs-light" width="50" height="50" />, category: "Frontend" },
    { icon: <Icon icon="skill-icons:vuejs-dark" width="50" height="50" />, category: "Frontend" },
    { icon: <Icon icon="skill-icons:nodejs-dark" width="50" height="50" />, category: "Backend" },
    { icon: <Icon icon="skill-icons:python-dark" width="50" height="50" />, category: "Backend" },
    { icon: <Icon icon="skill-icons:java-dark" width="50" height="50" />, category: "Backend" },
    { icon: <Icon icon="devicon-plain:dotnetcore" width="50" height="50"  style={{color: '#025c58'}} />, category: "Backend" },
    { icon: <Icon icon="devicon:reactnative-wordmark" width="50" height="50" />, category: "Mobile" },
    { icon: <Icon icon="skill-icons:flutter-dark" width="50" height="50" />, category: "Mobile" },
   
    { icon: <Icon icon="skill-icons:postgresql-dark" width="50" height="50" />, category: "Database" },
    { icon: <Icon icon="devicon:mongodb-wordmark" width="50" height="50" />, category: "Database" },
    { icon: <Icon icon="fa-brands:aws" width="50" height="50" />, category: "Cloud" },
    { icon: <Icon icon="devicon:docker" width="50" height="50" />, category: "DevOps" },
  ];
  return (
    <section id="tech-stack" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Tech{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We work with cutting-edge technologies across the entire development spectrum
            </p>
          </div>

         

          {/* Second row with reverse animation */}
          <div className="relative mt-8">
            <div className="flex animate-scroll-reverse space-x-6">
              {/* First set of cards (reverse order) */}
              {[...techStack].reverse().map((tech, index) => (
                <div key={`reverse-first-${index}`} className="flex-shrink-0 group">
                  <Card className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 text-center p-4 w-32 h-fit flex flex-col justify-center items-center">
                    <div className="text-white">{tech.icon}</div>
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 text-xs">
                      {tech.category}
                    </Badge>
                  </Card>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[...techStack].reverse().map((tech, index) => (
                <div key={`reverse-second-${index}`} className="flex-shrink-0 group">
                  <Card className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 text-center p-6 w-40 h-32 flex flex-col justify-center items-center">
                    <div className="text-white font-medium mb-2 text-lg">{tech.icon}</div>
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 text-xs">
                      {tech.category}
                    </Badge>
                  </Card>
                </div>
              ))}
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 via-purple-900/50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 via-purple-900/50 to-transparent pointer-events-none z-10"></div>
          </div>

          
        </div>
      </section>

  );
}

export default TechStart;


//  {[...techStack].reverse().map((tech, index) => (
//                 <div key={`reverse-first-${index}`} className="flex-shrink-0 group">
//                   <Card className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 text-center p-6 w-40 h-32 flex flex-col justify-center items-center">
//                     <div className="text-white font-medium mb-2 text-lg">{tech.name}</div>
//                     <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 text-xs">
//                       {tech.category}
//                     </Badge>
//                   </Card>
//                 </div>
//               ))}
//               {/* Duplicate set for seamless loop */}
//               {[...techStack].reverse().map((tech, index) => (
//                 <div key={`reverse-second-${index}`} className="flex-shrink-0 group">
//                   <Card className="bg-slate-800/60 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 text-center p-6 w-40 h-32 flex flex-col justify-center items-center">
//                     <div className="text-white font-medium mb-2 text-lg">{tech.name}</div>
//                     <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 text-xs">
//                       {tech.category}
//                     </Badge>
//                   </Card>
//                 </div>
//               ))}