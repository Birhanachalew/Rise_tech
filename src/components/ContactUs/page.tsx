import React, { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Code2,
  Smartphone,
  Globe,
  Zap,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  TwitterIcon,
  Instagram,
  Calendar,
  MessageCircle,
} from "lucide-react";

enum WantedTakes {
  WebApp = "Web App",
  MobileApp = "Mobile App",
  FullStack = "Full Stack",
  Consulting = "Consulting",
}

type TechOption = {
  icon: React.ReactNode;
  label: WantedTakes;
};

function ContactUs() {
  const [wantedTech, setWantedTech] = useState<WantedTakes>(WantedTakes.WebApp);
  const [activeTech, setActiveTech] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadToCloudinary(file);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      await uploadToCloudinary(file);
    }
  };
  const uploadToCloudinary = async (file: File) => {
    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "app_it-up_present");
    data.append("cloud_name", "dyanzsn75");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dyanzsn75/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const json = await res.json();
      console.log("Uploaded file url: ", json.secure_url);
      setFileUrl(json.secure_url);
    } catch (err) {
      console.log("upload error", err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Construct payload
    const formData = {
      wantedTech,
      firstName,
      lastName,
      email,
      company,
      budget,
      timeline,
      message,
      fileUrl,
    };

    // You can replace this with actual API call logic
    console.log("Form Submitted:", formData);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("responce data ...",res);
      
      const data = await res.json();
      if (res.ok) {
        alert("Email sent seccessfuly!");
      } else {
        console.error(data);
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Submission error: ", error);
      alert("Somthing went wrong.");
    }

    // Optionally reset the form
  };

  const techOptions: TechOption[] = [
    { icon: <Globe className="w-4 h-4" />, label: WantedTakes.WebApp },
    { icon: <Smartphone className="w-4 h-4" />, label: WantedTakes.MobileApp },
    { icon: <Code2 className="w-4 h-4" />, label: WantedTakes.FullStack },
    { icon: <Zap className="w-4 h-4" />, label: WantedTakes.Consulting },
  ];
  const handleSelectTech = (selected: WantedTakes, index: number) => {
    setActiveTech(index);
    setWantedTech(selected);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-800/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>
      <div className="absolute top-20 right-10 w-40 h-40 border border-purple-500/20 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg animate-float-medium"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-1 mb-4">
            <Mail className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-xs font-medium">
              Let's Connect
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/80 border-slate-700 shadow-xl shadow-purple-500/5">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  Send us a message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Type Selector */}
                <div>
                  <label className="text-white text-sm font-medium mb-3 block">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {techOptions.map((type, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelectTech(type.label, index)}
                        className={`p-3 cursor-pointer rounded-lg border transition-all duration-300 flex flex-col items-center gap-2 text-sm ${
                          index === activeTech
                            ? "border-purple-500 bg-purple-500/20 text-purple-300"
                            : "border-slate-600 text-gray-400 hover:border-purple-500/50 hover:text-white"
                        }`}
                      >
                        {type.icon}
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        First Name *
                      </label>
                      <Input
                        onChange={(e) => setFirstName(e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Last Name *
                      </label>
                      <Input
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Company (Optional)
                    </label>
                    <Input
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="project-budget"
                      className="text-white text-sm font-medium mb-2 block"
                    >
                      Project Budget
                    </label>
                    <select
                      onChange={(e) => setBudget(e.target.value)}
                      id="project-budget"
                      className="cursor-pointer w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-md focus:border-purple-500 focus:outline-none"
                    >
                      <option>Select budget range</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Project Timeline
                    </label>
                    <label htmlFor="project-timeline" className="sr-only">
                      Project Timeline
                    </label>
                    <select
                      onChange={(e) => setTimeline(e.target.value)}
                      id="project-timeline"
                      className="cursor-pointer w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-md focus:border-purple-500 focus:outline-none"
                    >
                      <option className="!cursor-pointer">
                        Select timeline
                      </option>
                      <option className="!cursor-pointer">
                        ASAP (Rush project)
                      </option>
                      <option className="!cursor-pointer">1-3 months</option>
                      <option className="!cursor-pointer">3-6 months</option>
                      <option className="!cursor-pointer">6+ months</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Tell us about your project *
                    </label>
                    <Textarea
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      className="bg-slate-700 border-slate-600 text-white min-h-32 focus:border-purple-500"
                    />
                  </div>
                  {/* File Upload */}
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Attachments (Optional)
                    </label>
                    <div
                      className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-purple-500/50 transition-colors cursor-pointer"
                      onClick={() => inputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                    >
                      <div className="text-gray-400 mb-2">
                        <svg
                          className="w-8 h-8 mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        {uploading
                          ? "Uploading..."
                          : "Drop files here or click to upload"}
                      </div>
                      <Input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                        ref={inputRef}
                      />
                      <p className="text-xs text-gray-500">
                        PDF, DOC, PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full my-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-6 text-lg shadow-lg shadow-purple-500/20 cursor-pointer"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Additional Options */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="bg-slate-800/80 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-sm">appitup70@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-sm">+251976088030</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-sm">Remote & Global</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <h4 className="text-white font-medium mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { icon: <Github className="w-4 h-4" />, label: "GitHub" },
                      {
                        icon: <Linkedin className="w-4 h-4" />,
                        label: "LinkedIn",
                        link: "",
                      },
                      {
                        icon: <TwitterIcon className="w-4 h-4" />,
                        label: "Twitter",
                        link: "",
                      },
                      {
                        icon: <Instagram className="w-4 h-4" />,
                        label: "Instagram",
                        link: "",
                      },
                    ].map((social, index) => (
                      <Button
                        key={index}
                        size="icon"
                        variant="outline"
                        className="cursor-pointer border-slate-600 text-gray-300 hover:bg-purple-500/10 hover:border-purple-500 hover:text-white transition-all duration-300"
                      >
                        {social.icon}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-purple-500/30">
              <CardContent className="p-6">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Ready to start immediately?
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Schedule a free 30-minute consultation call to discuss your
                  project in detail.
                </p>
                <Button className="cursor-pointer w-full bg-white text-slate-900 hover:bg-gray-100 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  className="cursor-pointer w-full bg-inherit border-white/30 text-white/30 hover:bg-white/10"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live Chat
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-slate-800/60 border-slate-700">
              <CardContent className="p-6">
                <h4 className="text-white font-medium mb-4">
                  Our Response Promise
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">
                      Initial response within 2 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">
                      Detailed proposal within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">
                      Project kickoff within 1 week
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
