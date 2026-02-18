import React from "react";
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
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      image: "/placeholder.svg?height=300&width=400",
      category: "Full-Stack",
      metrics: {
        users: "50K+",
        performance: "98%",
        uptime: "99.9%",
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "FinTech Mobile App",
      description:
        "Cross-platform mobile banking application with biometric authentication and real-time transactions.",
      tech: ["React Native", "Python", "MongoDB", "AWS"],
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile Apps",
      metrics: {
        downloads: "500K+",
        rating: "4.8/5",
        retention: "85%",
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "SaaS Analytics Dashboard",
      description:
        "Real-time analytics platform with data visualization, reporting, and multi-tenant architecture.",
      tech: ["Vue.js", "Java", "PostgreSQL", "Docker"],
      image: "/placeholder.svg?height=300&width=400",
      category: "Web Apps",
      metrics: {
        dataPoints: "10M+",
        clients: "200+",
        accuracy: "99.5%",
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "AI-Powered Chat Platform",
      description:
        "Intelligent customer service platform with natural language processing and automated responses.",
      tech: ["React", "Python", "TensorFlow", "Redis"],
      image: "/placeholder.svg?height=300&width=400",
      category: "Full-Stack",
      metrics: {
        messages: "1M+",
        accuracy: "94%",
        response: "<2s",
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Fitness Tracking App",
      description:
        "Cross-platform fitness application with workout tracking, nutrition planning, and social features.",
      tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile Apps",
      metrics: {
        workouts: "100K+",
        users: "25K+",
        engagement: "92%",
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Real Estate Platform",
      description:
        "Comprehensive property management system with virtual tours, CRM, and automated workflows.",
      tech: ["Next.js", "Express", "PostgreSQL", "AWS"],
      image: "/placeholder.svg?height=300&width=400",
      category: "Web Apps",
      metrics: {
        properties: "10K+",
        agents: "500+",
        sales: "$50M+",
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

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
            {["All", "Web Apps", "Mobile Apps", "Full-Stack"].map(
              (filter, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
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
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 cursor-pointer"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30 cursor-pointer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
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
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  >
                    View Details
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
