// Add lazy loading for ProductDetailPage if used in this file
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FloorLampsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      image: "/slider/lamp-1.jpg",
      title: "Arc Floor Lamp",
      description: "Sweeping curved design perfect for reading corners",
      width: "W: 400mm",
      height: "H: 1800mm",
      material: "Metal + Fabric",
    },
    {
      image: "/slider/lamp-2.jpg",
      title: "Tripod Floor Lamp",
      description: "Scandinavian-inspired with natural wood legs",
      width: "W: 450mm",
      height: "H: 1650mm",
      material: "Wood + Fabric",
    },
    {
      image: "/slider/lamp-3.jpg",
      title: "Modern Column Lamp",
      description: "Sleek brass column with adjustable brightness",
      width: "W: 300mm",
      height: "H: 1700mm",
      material: "Brass + Acrylic",
    },
    {
      image: "/slider/lam-4.jpg",
      title: "Tall Ambient Lamp",
      description: "Soft ambient glow for living spaces",
      width: "W: 280mm",
      height: "H: 1500mm",
      material: "Glass + Metal",
    },
    {
      image: "/slider/lamp-5.jpg",
      title: "Slim Line Lamp",
      description: "Ultra-modern slim frame for minimal interiors",
      width: "W: 260mm",
      height: "H: 1600mm",
      material: "Aluminium",
    },
    {
      image: "/slider/lamp-7.jpg",
      title: "Decorative Tube Lamp",
      description: "Beautiful upwards glow with premium finish",
      width: "W: 300mm",
      height: "H: 1750mm",
      material: "Metal + Glass",
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

      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-3 text-[#5A4632]">
          Floor Lamps
        </h1>
        <p className="text-lg text-[#7A6A55]">
          Elegant and modern floor lamp designs
        </p>
      </section>

      {/* Product Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 pb-20">
        {products.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item.image)}
            className="group rounded-xl overflow-hidden shadow-lg
                       border border-[#EAD7C4] bg-[#FFF8EC]/80
                       hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* HOVER DETAILS */}
              <div
                className="absolute inset-0 bg-[#5A4632]/60 opacity-0 
                           group-hover:opacity-100 transition-all duration-300 
                           flex items-center justify-center"
              >
                <div className="text-[#FFE9C7] text-center space-y-1">
                  <p className="text-sm">{item.width}</p>
                  <p className="text-sm">{item.height}</p>
                  <p className="text-sm">{item.material}</p>
                </div>
              </div>
            </div>

            {/* TEXT SECTION */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#5A4632]">
                {item.title}
              </h2>
              <p className="text-sm text-[#7A6A55] mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE POPUP VIEWER */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={selectedImage}
            alt="Selected Floor Lamp"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
          />

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FloorLampsPage;
