import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ChandeliersPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      image: "/slider/c-1.jpg",
      title: "Crystal Luxury Chandelier",
      description: "Elegant full crystal design with warm glow.",
      width: "W: 560mm",
      height: "H: 780mm",
      material: "Crystal + Metal",
    },
    {
      image: "/slider/c-2.jpg",
      title: "Gold Royal Chandelier",
      description: "Premium gold finish with multi-light crystal hangings.",
      width: "W: 620mm",
      height: "H: 850mm",
      material: "Gold Metal + Crystal",
    },
    {
      image: "/slider/c-3.jpg",
      title: "Modern Ring Chandelier",
      description: "Contemporary LED rings with adjustable height.",
      width: "W: 450mm",
      height: "H: 1200mm",
      material: "Aluminium + Acrylic",
    },
    {
      image: "/slider/c-4.jpg",
      title: "Empire Crown Chandelier",
      description: "Royal empire design with premium crystal drops.",
      width: "W: 680mm",
      height: "H: 900mm",
      material: "Crystal + Chrome",
    },
    {
      image: "/slider/c-5.jpg",
      title: "Metal Cage Chandelier",
      description: "Industrial modern chandelier with warm LED.",
      width: "W: 500mm",
      height: "H: 600mm",
      material: "Iron + Glass",
    },
    {
      image: "/slider/c-6.jpg",
      title: "Classic Antique Chandelier",
      description: "Vintage look with amber crystal accents.",
      width: "W: 550mm",
      height: "H: 780mm",
      material: "Bronze Metal + Crystal",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #FFF8EC, #F5E6D3, #FFE9C7, #FAD7A1)",
      }}
    >
      <Navigation />

      {/* Header Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-3 tracking-wide text-[#5A4632]">
          Chandeliers Collection
        </h1>
        <p className="text-lg text-[#7A6A55]">Premium luxury chandelier designs</p>
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
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Info */}
              <div className="absolute inset-0 bg-[#5A4632]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-[#FFE9C7] text-center space-y-1">
                  <p className="text-sm">{item.width}</p>
                  <p className="text-sm">{item.height}</p>
                  <p className="text-sm">{item.material}</p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#5A4632]">{item.title}</h2>
              <p className="text-sm text-[#7A6A55] mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Popup */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
          />

          {/* Close Button */}
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

export default ChandeliersPage;
