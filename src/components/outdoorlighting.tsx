import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OutdoorLightingPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      image: "/slider/outdoor light-1.jpeg",
      title: "Landscape Spotlights",
      description: "Weather-resistant with adjustable beam angle",
      size: "H: 350mm • W: 120mm",
    },
    {
      image: "/slider/outdoor lights-2.jpeg",
      title: "Pathway Lighting",
      description: "Solar-powered stakes for garden illumination",
      size: "H: 500mm • W: 140mm",
    },
    {
      image: "/slider/outdoor lights-3.jpeg",
      title: "Outdoor Wall Lantern",
      description: "Classic lantern design with LED technology",
      size: "H: 420mm • W: 180mm",
    },
    {
      image: "/slider/outdoor lights-4.jpeg",
      title: "Garden Spike Light",
      description: "Perfect for plants & landscape highlights",
      size: "H: 300mm • W: 100mm",
    },
    {
      image: "/slider/outdoor lights-5.jpeg",
      title: "Gate Wall Light",
      description: "Premium matte finish outdoor fixture",
      size: "H: 280mm • W: 150mm",
    },
    {
      image: "/slider/outdoor lights-6.jpeg",
      title: "Outdoor Pillar Light",
      description: "Modern LED pillar for pathways & terraces",
      size: "H: 600mm • W: 200mm",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, #FFF8EC, #F5E6D3, #FFE9C7, #FAD7A1)",
      }}
    >
      <Navigation />

      <section className="py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-3 text-[#5A4632]">
          Outdoor Lighting
        </h1>
        <p className="text-lg text-[#7A6A55]">
          Durable outdoor fixtures designed for exterior spaces
        </p>
      </section>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 pb-20">
        {products.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item.image)}
            className="group rounded-xl overflow-hidden shadow-lg 
                       border border-[#EAD7C4] bg-[#FFF8EC]/80
                       hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative bg-white flex items-center justify-center h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              <div
                className="absolute inset-0 bg-[#5A4632]/60 opacity-0 
                           group-hover:opacity-100 transition-all duration-300 
                           flex items-center justify-center"
              >
                <div className="text-[#FFE9C7] text-center space-y-1">
                  <p className="text-sm">{item.size}</p>
                </div>
              </div>
            </div>

            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-[#5A4632]">
                {item.title}
              </h2>
              <p className="text-sm text-[#7A6A55] mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl animate-fadeIn"
          />
        </div>
      )}
    </div>
  );
};

export default OutdoorLightingPage;
