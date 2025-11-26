"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lightbulb, Users, Award, Heart } from "lucide-react";
import { useEffect } from "react";

// SCROLL ANIMATION
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
};

export default function About() {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EC]">
      <Navigation />

      {/* ----------------------- HERO SECTION ----------------------- */}
      <section
        className="py-20 relative overflow-hidden fade-up"
        style={{ background: "linear-gradient(135deg, #FFF3E0, #FAD7A1)" }}
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

      {/* WAVE DOWN → */}
      <div className="wave-bottom"></div>

      {/* ----------------------- STORY SECTION ----------------------- */}
      <section
        className="py-16 fade-up"
        style={{ background: "linear-gradient(180deg, #FFF8EC, #F5E6D3)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Zig-Zag Block 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16 fade-up">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#5A4632]">
                  Our Story
                </h2>

                <p className="text-[#6F5C45] leading-relaxed mb-4">
                  Founded in 2020, City Light Store began with a passion for transforming
                  interior spaces through beautiful lighting.
                </p>

                <p className="text-[#6F5C45] leading-relaxed mb-4">
                  What started as a small lighting boutique is now one of Pune’s trusted lighting destinations.
                </p>

                <p className="text-[#6F5C45] leading-relaxed">
                  We proudly serve homeowners, interior designers, and commercial clients
                  with premium lighting solutions.
                </p>
              </div>

              <img
                src="/slider/black-city.jpeg"
                className="w-68 h-70 object-cover rounded-xl shadow-md mx-auto"
              />
            </div>

            {/* Zig-Zag Block 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16 fade-up">
              <img
                src="/slider/h-1.jpeg"
                className="w-66 h-66 object-cover rounded-xl shadow-md mx-auto md:order-1 order-2"
              />

              <div className="md:order-2 order-1">
                <h2 className="text-3xl font-bold mb-6 text-[#5A4632]">
                  What We Believe
                </h2>

                <p className="text-[#6F5C45] leading-relaxed mb-4">
                  Lighting is more than a fixture — it is an experience.
                </p>

                <p className="text-[#6F5C45] leading-relaxed">
                  Our collections blend modern design, craftsmanship, and functionality
                  to create warm, elegant spaces.
                </p>
              </div>
            </div>

            {/* Zig-Zag Block 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center fade-up">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#5A4632]">
                  Who We Serve
                </h2>

                <p className="text-[#6F5C45] leading-relaxed">
                  From residential homes to corporate offices, our consultants help design
                  lighting solutions built around style, performance, and ambience.
                </p>
              </div>

              <img
                src="/slider/hang-88.jpeg"
                className="w-66 h-66 object-cover rounded-xl shadow-md mx-auto"
              />
            </div>

          </div>
        </div>
      </section>

      {/* WAVE UP ↑ */}
      <div className="wave-top"></div>

      {/* ----------------------- VALUES SECTION ----------------------- */}
      <section
        className="py-20 relative overflow-hidden fade-up"
        style={{ background: "linear-gradient(135deg, #FFE9C7, #F5D6AA)" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#5A4632]">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Value Item */}
            {[ 
              { icon: Lightbulb, title: "Innovation", text: "Latest trends & technology." },
              { icon: Award, title: "Quality", text: "Premium craftsmanship." },
              { icon: Users, title: "Service", text: "Expert consultation & support." },
              { icon: Heart, title: "Passion", text: "Love for lighting & design." }
            ].map((item, i) => (
              <div key={i} className="text-center fade-up">
                <div className="w-16 h-16 bg-[#FFF3E0] rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#D2954B]" />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-[#5A4632]">
                  {item.title}
                </h3>

                <p className="text-[#6F5C45]">{item.text}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />

      {/* Animation styles */}
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s ease;
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        .wave-bottom {
          width: 100%;
          height: 80px;
          background: url('data:image/svg+xml;utf8,
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="%23F5E6D3" d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,112C672,85,768,43,864,58.7C960,75,1056,149,1152,192C1248,235,1344,245,1392,250.7L1440,256V0H0Z"/>
            </svg>') no-repeat;
          background-size: cover;
        }

        .wave-top {
          width: 100%;
          height: 80px;
          transform: rotate(180deg);
          background: url('data:image/svg+xml;utf8,
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="%23FFE9C7" d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,112C672,85,768,43,864,58.7C960,75,1056,149,1152,192C1248,235,1344,245,1392,250.7L1440,256V0H0Z"/>
            </svg>') no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
