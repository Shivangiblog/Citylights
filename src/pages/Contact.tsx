import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ⭐ Updated submit function — WhatsApp + Email opens automatically
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // WhatsApp Text
    const whatsappMessage = `
New Inquiry from City Lights Website:

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    const whatsappURL = `https://wa.me/918698198000?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Email Text
    const subject = `New Inquiry from ${name}`;
    const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    const mailURL = `mailto:citylightskharadi@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open Email app
    window.open(mailURL, "_blank");

    toast({
      title: "Message Ready!",
      description: "WhatsApp & Email messages are opened. Send to complete.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your lighting needs..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Contact Information
              </h2>

              <Card className="border-border shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">
                        Visit Our Showroom
                      </h3>
                      <p className="text-muted-foreground">
                        Shop no.16 <br />
                        Ground Floor, Ganga Altus, Kharadi, Pune - 411014
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">
                        Call Us
                      </h3>
                      <p className="text-muted-foreground">+91 86981 98000</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mon-Fri: 10.30am - 8.30pm
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">
                        Email Us
                      </h3>
                      <p className="text-muted-foreground">
                        citylightskharadi@gmail.com
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">
                        Business Hours
                      </h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 10:30 AM - 8:30 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ Maps Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
            Find Us on Google Maps
          </h2>

          <form
            action="https://www.google.com/maps/search/"
            method="GET"
            target="_blank"
            className="flex items-center max-w-3xl mx-auto shadow-lg rounded-full overflow-hidden border bg-white"
          >
            <input
              type="text"
              name="q"
              placeholder="Search location, shop name, landmarks..."
              className="w-full px-5 py-3 text-gray-700 outline-none text-base"
              required
            />

            <button
              type="submit"
              className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              Search
            </button>
          </form>

          <div className="text-center mt-4 mb-10">
            <a
              href="https://www.google.com/maps?q=Ganga+Altus+Kharadi+Pune+411014"
              target="_blank"
              className="text-primary underline hover:text-primary/80"
            >
              Open City Lights Kharadi Location
            </a>
          </div>

          <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-xl border mx-auto max-w-4xl">
            <iframe
              src="https://www.google.com/maps?q=Ganga+Altus+Kharadi+Pune+411014&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
