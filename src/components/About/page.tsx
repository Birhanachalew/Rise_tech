import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake, Layers, ShieldCheck } from "lucide-react";
import Link from "next/link";

function About() {
  return (
    <section
      id="about"
      className="px-10 py-20 bg-slate-800/40 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern"></div>
      </div>
      <div className="absolute top-16 right-8 w-28 h-28 border border-purple-500/20 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-10 left-12 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg animate-float-medium"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-1 mb-4">
              <span className="text-purple-300 text-xs font-medium">
                About Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
              RISE TECH - Building the Future
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              We design and engineer high-performance web and mobile
              applications built to scale. From ambitious startups to
              established enterprises, we deliver secure, innovative solutions
              across modern programming languages, frameworks, and cloud
              platforms.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Beyond product development, RISE TECH operates as a strategic
              outsourcing partner, helping companies expand their capabilities
              without the overhead of growing internal teams.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              RISE TECH is not just a vendor - we are your long-term technology
              partner.
            </p>

            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3"
            >
              <Link href="#contact">
                Get in touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-8 shadow-xl shadow-purple-500/5">
            <h3 className="text-2xl font-semibold text-white mb-6">
              How We Partner
            </h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center text-white">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Project Delegation
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Entrust us with full projects or specific modules while you
                    stay focused on core business priorities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center text-white">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Extended Team Model
                  </h4>
                  <p className="text-gray-400 text-sm">
                    We integrate seamlessly with your workflows, tools, and
                    culture, operating like your in-house team.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Win-Win Collaboration
                  </h4>
                  <p className="text-gray-400 text-sm">
                    You scale faster, reduce operational costs, and maintain full
                    client ownership while we handle execution, quality, and
                    delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
