import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@flexet.app",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+251 9XX XXX XXX",
      description: "Call us during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Addis Ababa, Ethiopia",
      description: "Visit us at our office",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in <span className="text-[#0070F0]">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about FlexET? Want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
              <p className="text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white focus:border-[#0070F0] focus:ring-[#0070F0]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white focus:border-[#0070F0] focus:ring-[#0070F0]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white focus:border-[#0070F0] focus:ring-[#0070F0]"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white focus:border-[#0070F0] focus:ring-[#0070F0]"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0070F0] hover:bg-[#0060E0] text-white py-3"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">
              Other Ways to Reach Us
            </h3>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#0070F0]/20 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-[#0070F0]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-[#0070F0] font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-[#0070F0] rounded-full flex items-center justify-center hover:bg-[#0060E0] transition-colors">
                  <span className="text-white font-semibold text-sm">f</span>
                </button>
                <button className="w-10 h-10 bg-[#0070F0] rounded-full flex items-center justify-center hover:bg-[#0060E0] transition-colors">
                  <span className="text-white font-semibold text-sm">t</span>
                </button>
                <button className="w-10 h-10 bg-[#0070F0] rounded-full flex items-center justify-center hover:bg-[#0060E0] transition-colors">
                  <span className="text-white font-semibold text-sm">in</span>
                </button>
                <button className="w-10 h-10 bg-[#0070F0] rounded-full flex items-center justify-center hover:bg-[#0060E0] transition-colors">
                  <span className="text-white font-semibold text-sm">ig</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}