import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PendantLightsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      image: "/slider/Pendent-1.JPG",
      title: "Geometric Pendant",
      description: "Modern industrial design with exposed bulb styling.",
      width: "W: 220mm",
      height: "H: 400mm",
      material: "Metal + Glass",
    },
    {
      image: "/slider/pendent-22.JPG",
      title: "Glass Globe Pendant",
      description: "Minimalist clear glass with polished brass finish.",
      width: "W: 300mm",
      height: "H: 450mm",
      material: "Glass + Brass",
    },
    {
      image: "/slider/pendent-33.JPG",
      title: "Drum Shade Pendant",
      description: "Fabric shade with diffused ambient lighting.",
      width: "W: 350mm",
      height: "H: 500mm",
      material: "Fabric + Metal",
    },
    {
      image: "/slider/pendent-44.JPG",
      title: "Nordic Cone Pendant",
      description: "Scandinavian matte finish minimalist cone design.",
      width: "W: 180mm",
      height: "H: 300mm",
      material: "Aluminium",
    },
    {
      image: "/slider/pendent-55.JPG",
      title: "Wooden Frame Pendant",
      description: "Warm wooden frame with soft warm-white bulb.",
      width: "W: 250mm",
      height: "H: 380mm",
      material: "Wood + Metal",
    },
    {
      image: "/slider/pendent-66.JPG",
      title: "Crystal Drop Pendant",
      description: "Elegant crystal drops creating a luxury ambiance.",
      width: "W: 200mm",
      height: "H: 420mm",
      material: "Crystal + Chrome",
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
          Pendant Lights
        </h1>
        <p className="text-lg text-[#7A6A55]">
          Elegant and stylish pendant light designs
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
            <div className="relative overflow-hidden bg-white flex items-center justify-center h-64">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
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

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            alt="Product"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PendantLightsPage;
