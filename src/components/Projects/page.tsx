import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Github,
  Users,
  Sparkles,
} from "lucide-react";

function Projects() {
  const filters = ["All", "Web Apps", "Mobile Apps", "Full-Stack"];
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Green Africa Farm",
      description:
        "Agriculture-focused business website showcasing products, services, and brand story.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      image: "/images/green%20africa.jpg",
      category: "Web Apps",
      metrics: {
        users: "30K+",
        performance: "97%",
        uptime: "99.9%",
      },
      liveUrl: "https://www.greenafricafarm.com/",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Robin Trade Premium",
      description:
        "Modern trading and investment platform with a clean, trustworthy UI.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "/images/robin%20token%20premium.jpg",
      category: "Full-Stack",
      metrics: {
        users: "20K+",
        performance: "98%",
        uptime: "99.8%",
      },
      liveUrl: "https://robintradepremium.com/",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Fortunate Soccer Academy",
      description:
        "Sports academy website featuring programs, coaching team, and enrollment info.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      image: "/images/fortunate%20football.jpg",
      category: "Web Apps",
      metrics: {
        users: "10K+",
        performance: "96%",
        uptime: "99.7%",
      },
      liveUrl: "https://www.fortunatesocceracademy.com/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Lijena Dera Tutor",
      description:
        "Education platform with clear calls-to-action and course highlights.",
      tech: ["React", "Tailwind", "Node.js"],
      image: "/images/lijen%20adera.jpg",
      category: "Web Apps",
      metrics: {
        users: "12K+",
        performance: "97%",
        uptime: "99.8%",
      },
      liveUrl: "https://lijenaderatutor.com/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "TR Premium",
      description:
        "Landing page experience with bold visuals and streamlined conversion flow.",
      tech: ["React", "Vite", "Tailwind"],
      image: "/images/trade%20prememium.jpg",
      category: "Web Apps",
      metrics: {
        users: "8K+",
        performance: "98%",
        uptime: "99.9%",
      },
      liveUrl: "https://trprem.vercel.app/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Liyouneh Dubale Academy",
      description:
        "School website highlighting programs, admissions, and campus culture.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      image: "/images/theLogo.png",
      category: "Web Apps",
      metrics: {
        users: "9K+",
        performance: "96%",
        uptime: "99.6%",
      },
      liveUrl: "https://liyounehdubaleacademy.com/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Agraph Trading PLC",
      description:
        "Corporate trading site with structured content and strong brand presence.",
      tech: ["React", "Node.js", "Tailwind"],
      image: "/images/agar%20trading.jpg",
      category: "Full-Stack",
      metrics: {
        users: "15K+",
        performance: "97%",
        uptime: "99.7%",
      },
      liveUrl: "https://agraphtradingplc.com/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Wib Fashion",
      description:
        "Fashion brand website with product highlights and visual storytelling.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      image: "/images/wib%20fashion.jpg",
      category: "Mobile Apps",
      metrics: {
        users: "18K+",
        performance: "98%",
        uptime: "99.8%",
      },
      liveUrl: "https://play.google.com/store/apps/details?id=com.eyob12.wibfashion",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Bellx Software Solution",
      description:
        "Software studio site with service highlights and clean conversion flow.",
      tech: ["React", "Tailwind", "Netlify"],
      image: "/images/bellx.jpg",
      category: "Web Apps",
      metrics: {
        users: "7K+",
        performance: "97%",
        uptime: "99.7%",
      },
      liveUrl: "http://bellx-software-solution.netlify.app/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Log Interior",
      description:
        "Interior design company site with portfolio-forward presentation.",
      tech: ["React", "Tailwind", "Vercel"],
      image: "/images/loginterior.jpg",
      category: "Web Apps",
      metrics: {
        users: "6K+",
        performance: "96%",
        uptime: "99.6%",
      },
      liveUrl:
        "https://log-interior-company-website-git-orginal-birhans-projects.vercel.app/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Harmonic Band",
      description:
        "Music band website with event highlights and media showcase.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      image: "/images/harmonic%20badn.jpg",
      category: "Web Apps",
      metrics: {
        users: "5K+",
        performance: "97%",
        uptime: "99.7%",
      },
      liveUrl: "https://harmonic-band-website.vercel.app/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Pyron Digital Marketing",
      description:
        "Digital marketing agency site with bold CTA-driven layout.",
      tech: ["React", "Tailwind", "Vercel"],
      image: "/images/payron%20digital%20marketing.jpg",
      category: "Web Apps",
      metrics: {
        users: "8K+",
        performance: "98%",
        uptime: "99.8%",
      },
      liveUrl:
        "https://pyron-digital-marketing-firm-offcia-git-3f8c0e-birhans-projects.vercel.app/",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Yenegym",
      description:
        "Member login portal for a fitness platform with account access flow.",
      tech: ["React", "Tailwind", "Node.js"],
      image: "/images/yenegym.jpg",
      category: "Web Apps",
      metrics: {
        users: "4K+",
        performance: "96%",
        uptime: "99.6%",
      },
      liveUrl: "https://yenegym.agraphtradingplc.com/user/login",
      githubUrl: "",
      featured: false,
    },
    {
      title: "21media",
      description:
        "Mobile app experience focused on fast onboarding and media discovery.",
      tech: ["Flutter", "Firebase", "REST API"],
      image: "/images/21media.jpg",
      category: "Mobile Apps",
      metrics: {
        users: "6K+",
        performance: "97%",
        uptime: "99.7%",
      },
      liveUrl: "https://play.google.com/store/apps/details?id=com.eyob12.wibfashion",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Uphold Trading",
      description:
        "Trading company website with clear service positioning and trust signals.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      image: "/images/upholdingtrading.jpg",
      category: "Web Apps",
      metrics: {
        users: "11K+",
        performance: "97%",
        uptime: "99.8%",
      },
      liveUrl: "https://upholdtrading.com/",
      githubUrl: "",
      featured: false,
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  const projectStats = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "25+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Technologies",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      number: "99%",
      label: "Success Rate",
      icon: <Star className="w-6 h-6" />,
    },
  ];
  return (
    <section
      id="projects"
      className="px-10 py-20 bg-slate-800/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg animate-float-medium"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-1 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-xs font-medium">
              Our Work
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing our latest work and innovative solutions that drive
            business growth
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`group bg-slate-800/80 border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden relative ${
                project.featured ? "ring-2 ring-purple-500/30" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                    Featured
                  </Badge>
                </div>
              )}

              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={project.featured}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      asChild
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 cursor-pointer"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    {project.githubUrl ? (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30 cursor-pointer"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="mt-2 bg-slate-700 text-gray-300"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Project Metrics */}
                {/* <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-slate-700/50 rounded-lg">
                  {Object.entries(project.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-white font-bold text-sm">
                        {value}
                      </div>
                      <div className="text-gray-400 text-xs capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div> */}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      View Details
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-slate-700"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {projectStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-slate-800/60 border-slate-700 text-center hover:border-purple-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/20"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
