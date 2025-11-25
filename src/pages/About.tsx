import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lightbulb, Users, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EC]">
      <Navigation />

      {/* Hero Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FFF3E0, #FAD7A1)",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4632]">
            About City Light – Pune
          </h1>
          <p className="text-xl text-[#7A6A55] max-w-3xl mx-auto">
            Bringing warm, beautiful lighting to homes & businesses since 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(180deg, #FFF8EC, #F5E6D3)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Zig-Zag Block 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#5A4632]">Our Story</h2>
                <p className="text-[#6F5C45] leading-relaxed mb-4">
                  Founded in 2020, City Light Store began with a passion for transforming 
                  interior spaces through beautiful lighting.
                </p>
                <p className="text-[#6F5C45] leading-relaxed mb-4">
                  What started as a small lighting boutique is now one of Pune’s trusted 
                  lighting destinations.
                </p>
                <p className="text-[#6F5C45] leading-relaxed">
                  We proudly serve homeowners, interior designers, and commercial clients 
                  with premium lighting solutions.
                </p>
              </div>

              <img
                src="/slider/black-city.jpeg"
                alt="Lighting showroom"
                className="w-68 h-70 object-cover rounded-xl shadow-md mx-auto"
              />
            </div>

            {/* Zig-Zag Block 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
              
              <img
                src="/slider/h-1.jpeg"
                alt="Decor lights"
                className="w-66 h-66 object-cover rounded-xl shadow-md mx-auto md:order-1 order-2"
              />

              <div className="md:order-2 order-1">
                <h2 className="text-3xl font-bold mb-6 text-[#5A4632]">What We Believe</h2>
                <p className="text-[#6F5C45] leading-relaxed mb-4">
                  Lighting is more than a fixture — it is an experience.
                </p>
                <p className="text-[#6F5C45] leading-relaxed">
                  Our collections blend modern design, high craftsmanship, and functionality
                  to create warm, elegant spaces.
                </p>
              </div>
            </div>

            {/* Zig-Zag Block 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#5A4632]">Who We Serve</h2>
                <p className="text-[#6F5C45] leading-relaxed">
                  From residential homes to corporate offices, our lighting consultants 
                  design solutions built around style, performance, and ambience.
                </p>
              </div>

              <img
                src="/slider/hang-88.jpeg"
                alt="Team working"
                className="w-66 h-66 object-cover rounded-xl shadow-md mx-auto"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FFE9C7, #F5D6AA)",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#5A4632]">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFF3E0] rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-[#D2954B]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#5A4632]">Innovation</h3>
              <p className="text-[#6F5C45]">Latest trends & technology.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFF3E0] rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#D2954B]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#5A4632]">Quality</h3>
              <p className="text-[#6F5C45]">Premium craftsmanship.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFF3E0] rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#D2954B]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#5A4632]">Service</h3>
              <p className="text-[#6F5C45]">Expert consultation & support.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFF3E0] rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#D2954B]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#5A4632]">Passion</h3>
              <p className="text-[#6F5C45]">Love for lighting & design.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
