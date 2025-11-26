import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TableLampsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      image: "/slider/table lamp-1.JPG",
      title: "Brass Desk Lamp",
      description: "Classic banker's lamp with adjustable shade",
      width: "W: 200mm",
      height: "H: 420mm",
      material: "Brass + Glass",
    },
    {
      image: "/slider/table lamp-2.JPG",
      title: "Ceramic Table Lamp",
      description: "Handcrafted base with textured ceramic finish",
      width: "W: 230mm",
      height: "H: 480mm",
      material: "Ceramic + Fabric",
    },
    {
      image: "/slider/table lamp-3.JPG",
      title: "Crystal Table Lamp",
      description: "Elegant cut crystal body with silk shade",
      width: "W: 210mm",
      height: "H: 500mm",
      material: "Crystal + Silk",
    },
    {
      image: "/slider/table lamp-4.JPG",
      title: "Modern LED Table Lamp",
      description: "Minimalist LED arc design with soft glow",
      width: "W: 180mm",
      height: "H: 360mm",
      material: "Acrylic + LED",
    },
    {
      image: "/slider/table lamp-5.JPG",
      title: "Wooden Base Lamp",
      description: "Natural wooden finish for warm ambiance",
      width: "W: 220mm",
      height: "H: 450mm",
      material: "Wood + Fabric",
    },
    {
      image: "/slider/table lamp-6.JPG",
      title: "Metal Cage Lamp",
      description: "Industrial design with open metal cage",
      width: "W: 200mm",
      height: "H: 400mm",
      material: "Metal",
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
          Table Lamps
        </h1>
        <p className="text-lg text-[#7A6A55]">
          Stylish table lamps designed for elegance and warm lighting
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
            <div className="relative overflow-hidden bg-white h-64 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain 
                           transition-transform duration-500 group-hover:scale-105"
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

      <Footer />

      {/* Full Image Modal */}
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

export default TableLampsPage;
