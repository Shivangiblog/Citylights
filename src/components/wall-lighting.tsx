import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WallSconcesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      image: "/slider/wall.jpeg",
      title: "Modern Wall Sconce",
      description: "Sleek design with upward and downward lighting",
      size: "H: 280mm • W: 120mm",
    },
    {
      image: "/slider/wall-1.jpeg",
      title: "Vintage Brass Sconce",
      description: "Period-inspired with aged brass patina",
      size: "H: 280mm • W: 120mm",
    },
    {
      image: "/slider/wall-3.jpeg",
      title: "Contemporary LED Sconce",
      description: "Energy-efficient with artistic metal framework",
      size: "H: 300mm • W: 130mm",
    },
    {
      image: "/slider/wall-4.jpeg",
      title: "Decorative Crystal Sconce",
      description: "Elegant sparkling crystal with warm LED",
      size: "H: 350mm • W: 150mm",
    },
    {
      image: "/slider/wall-5.jpeg",
      title: "Matte Black Minimal Sconce",
      description: "Soft diffused glow for modern interiors",
      size: "H: 260mm • W: 110mm",
    },
    {
      image: "/slider/wall-7.jpeg",
      title: "Classic Wall Lantern",
      description: "Timeless lantern-inspired sconce design",
      size: "H: 340mm • W: 160mm",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#fff8ec] via-[#f5e6d3] to-[#ead7c4]">
      <Navigation />

      {/* Page Heading */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 drop-shadow">
          Wall lighting
        </h1>
        <p className="text-lg text-gray-700 mt-4 opacity-80">
          Elegant wall-mounted lighting for modern and classic interiors.
        </p>
      </section>

      {/* Product Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 pb-24">
        {products.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item.image)}
            className="
              bg-white/60 backdrop-blur-lg shadow-lg 
              rounded-xl overflow-hidden transition-all duration-300
              hover:scale-105 hover:shadow-2xl hover:bg-white/80
              cursor-pointer
            "
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1">{item.description}</p>

              {/* Hover Size Details */}
              <div
                className="
                  mt-3 p-3 rounded-lg text-sm font-medium 
                  bg-gradient-to-r from-orange-100 to-amber-100 text-gray-700 
                  shadow-inner opacity-0 hover:opacity-100 transition-opacity duration-300
                "
              >
                {item.size}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FULL SCREEN IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Product"
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default WallSconcesPage;
