import React from "react";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code2,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Layers,
  Rocket,
  Users,
  Sparkles,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

export default function Services() {
    const [activeService, setActiveService] = useState(0)
     const [scrollY, setScrollY] = useState(0)
  const [progressValues, setProgressValues] = useState({
    web: 0,
    mobile: 0,
    fullstack: 0,
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Animate progress bars when services section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProgressValues({
            web: 95,
            mobile: 90,
            fullstack: 98,
          })
        }
      },
      { threshold: 0.2 },
    )

    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      observer.observe(servicesSection)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (servicesSection) {
        observer.unobserve(servicesSection)
      }
    }
  }, [])

 const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, Vue, Nuxt.js, and more.",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Scalable Architecture"],
      color: "from-purple-600 to-indigo-600",
      skills: [
        { name: "Frontend Development", level: 95 },
        { name: "UI/UX Implementation", level: 90 },
        { name: "Performance Optimization", level: 85 },
        { name: "Responsive Design", level: 98 },
      ],
      process: [
        { name: "Discovery", description: "Understanding your business needs and target audience" },
        { name: "Design", description: "Creating wireframes and visual designs for your approval" },
        { name: "Development", description: "Building your web application with clean, maintainable code" },
        { name: "Testing", description: "Ensuring your application works flawlessly across all devices" },
        { name: "Deployment", description: "Launching your application with proper CI/CD pipelines" },
      ],
      technologies: ["React", "Next.js", "Vue", "Nuxt.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      caseStudy: {
        title: "E-Commerce Platform Redesign",
        description:
          "We rebuilt an outdated e-commerce platform using Next.js and Tailwind CSS, resulting in a 40% increase in conversion rate and 25% reduction in bounce rate.",
        results: ["40% higher conversion", "25% lower bounce rate", "3x faster page loads", "99% uptime"],
      },
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      color: "from-cyan-600 to-blue-600",
      skills: [
        { name: "React Native", level: 92 },
        { name: "Flutter", level: 88 },
        { name: "Native iOS/Android", level: 85 },
        { name: "Mobile UX Design", level: 90 },
      ],
      process: [
        { name: "Strategy", description: "Defining the app's purpose, features, and target platforms" },
        { name: "Prototyping", description: "Creating interactive prototypes to validate user experience" },
        { name: "Development", description: "Building your mobile app with performance in mind" },
        { name: "Testing", description: "Rigorous testing on multiple devices and OS versions" },
        { name: "Deployment", description: "Publishing to app stores and implementing analytics" },
      ],
      technologies: ["React Native", "Flutter", "Firebase", "MobX", "Redux"],
      caseStudy: {
        title: "FinTech Mobile Banking App",
        description:
          "We developed a secure, feature-rich mobile banking application with biometric authentication and real-time transaction processing.",
        results: ["4.8/5 App Store rating", "500K+ downloads", "99.9% uptime", "30% user growth MoM"],
      },
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development from database design to frontend implementation with robust backend APIs.",
      features: ["Database Design", "API Development", "Cloud Integration", "DevOps Setup"],
      color: "from-pink-600 to-rose-600",
      skills: [
        { name: "Backend Development", level: 96 },
        { name: "Database Architecture", level: 94 },
        { name: "API Design", level: 92 },
        { name: "DevOps & Cloud", level: 90 },
      ],
      process: [
        { name: "Architecture", description: "Designing a scalable system architecture for your application" },
        { name: "Backend Development", description: "Building robust APIs and services" },
        { name: "Frontend Integration", description: "Connecting your UI with backend services" },
        { name: "Infrastructure", description: "Setting up cloud infrastructure and CI/CD pipelines" },
        { name: "Monitoring", description: "Implementing logging, monitoring, and alerting" },
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes"],
      caseStudy: {
        title: "SaaS Analytics Platform",
        description:
          "We built a complete analytics platform with multi-tenant architecture, real-time data processing, and interactive dashboards.",
        results: ["5x faster data processing", "99.99% uptime", "Scaled to 10M+ daily users", "50% cost reduction"],
      },
    },
  ]

  
  return (
      <section id="services" className="px-10 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-800/50 z-0"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="grid-pattern"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-24 h-24 border border-purple-500/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg animate-float-medium"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-1 mb-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs font-medium">Expert Solutions</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Full-stack development solutions tailored to your business needs
            </p>
          </div>

          {/* Service Selection Tabs */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`cursor-pointer px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeService === index
                        ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                        : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="flex items-center gap-2">
                      {React.cloneElement(service.icon, { className: "w-4 h-4" })}
                      {service.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Service Content */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8 shadow-xl shadow-purple-500/5 transform transition-all duration-500">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    activeService === index ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                  style={{ zIndex: activeService === index ? 1 : 0 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          <p className="text-gray-400">{service.description}</p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4">Our Expertise</h4>
                        <div className="space-y-4">
                          {service.skills.map((skill, idx) => (
                            <div key={idx}>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300 text-sm">{skill.name}</span>
                                <span className="text-gray-400 text-sm">{skill.level}%</span>
                              </div>
                              <Progress
                                value={
                                  activeService === 0
                                    ? progressValues.web
                                    : activeService === 1
                                    ? progressValues.mobile
                                    : progressValues.fullstack
                                }
                                max={100}
                                className="h-2 bg-slate-700"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Technologies We Use</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              className={`bg-gradient-to-r ${service.color} bg-opacity-20 text-white px-3 py-1`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Tabs defaultValue="process" className="w-full">
                        <TabsList className="grid grid-cols-2 mb-6 bg-slate-700/50">
                          <TabsTrigger value="process">Development Process</TabsTrigger>
                          <TabsTrigger value="case-study">Case Study</TabsTrigger>
                        </TabsList>
                        <TabsContent value="process" className="mt-0">
                          <div className="relative pl-8 border-l border-slate-700">
                            {service.process.map((step, idx) => (
                              <div key={idx} className="mb-8 relative">
                                <div
                                  className={`absolute -left-10 w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}
                                >
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <h5 className="text-white font-medium mb-1">{step.name}</h5>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="case-study" className="mt-0">
                          <Card className={`border-0 bg-gradient-to-br ${service.color} bg-opacity-10`}>
                            <CardHeader>
                              <CardTitle className="text-white">{service.caseStudy.title}</CardTitle>
                              <CardDescription className="text-gray-300">
                                {service.caseStudy.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <h5 className="text-white font-medium mb-3">Key Results:</h5>
                              <ul className="space-y-2">
                                {service.caseStudy.results.map((result, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>

                      <div className="mt-8">
                        <Button
                          className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white py-6 group`}
                        >
                          <span className="mr-2">Request {service.title} Service</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <Card className="bg-slate-800/60 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 text-white">
                  <Rocket className="w-6 h-6" />
                </div>
                <CardTitle className="text-white text-lg">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">We deliver projects on time without compromising on quality.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <CardTitle className="text-white text-lg">Secure Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Security is built into every line of code we write.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 text-white">
                  <Layers className="w-6 h-6" />
                </div>
                <CardTitle className="text-white text-lg">Scalable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Our applications are built to scale with your business needs.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 text-white">
                  <Users className="w-6 h-6" />
                </div>
                <CardTitle className="text-white text-lg">Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Our team provides ongoing support and maintenance for all projects.</p>
              </CardContent>
            </Card>
          </div>

       
          {/* <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/20"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div> */}
        </div>
      </section>

  );
}
