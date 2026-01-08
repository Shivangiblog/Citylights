import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import SoapFeatures from "./SoapFeatures";

const SimpleHumanLanding = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "product">("home");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: "sensor-pump-9oz",
      name: "9 oz Sensor Pump",
      image: "/slider/pump-sensor.webp",
    },
  ];

  const handleProductClick = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
    setCurrentPage("product");
    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentPage === "home" && <HomePage />}
      
    </>
  );

  function HomePage() {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />

        
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto flex justify-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center gap-2 group cursor-default"
              >
             
                <div className="w-20 h-28 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 object-contain opacity-80 group-hover:opacity-100 transition"
                  />
                </div>

                <span className="text-xs text-gray-700 text-center leading-tight">
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= VIDEO HERO ================= */}
        <section className="relative h-[60vh] md:h-screen w-full overflow-hidden bg-black">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://cdn.shopify.com/videos/c/o/v/b5c89a30ecdf472e85a20cf577cac009.mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* ================= TEXT ================= */}
        <section className="py-16 md:py-24 px-6 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
              EFFORT-FREE GRATIFICATION
            </h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed">
              Our products are designed for maximum satisfaction with minimum
              effort. Just reach out to fill your hand or sponge with soap
              touch-free.
            </p>
          </div>
        </section>

        <SoapFeatures />

        {/* ================= PRODUCT INFO ================= */}
        <section className="py-16 md:py-24 px-4 bg-[#2a2a2a]">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16 tracking-wide text-white">
            WHICH IS BEST FOR YOU?
          </h2>

          <div className="max-w-md mx-auto text-center">
            <svg
              width="120"
              height="200"
              viewBox="0 0 120 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-8"
            >
              <rect
                x="30"
                y="60"
                width="60"
                height="130"
                rx="8"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M 40 60 L 40 45 Q 40 35 50 35 L 70 35 Q 80 35 80 45 L 80 60"
                stroke="white"
                strokeWidth="2"
              />
              <rect x="50" y="30" width="20" height="5" fill="white" />
            </svg>

            <h3 className="text-xl md:text-2xl font-medium text-white mb-4">
              9 OZ
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Touch-free and automatic means no germs or smudges left behind —
              just instantly clean hands.
            </p>
          </div>
        </section>
    
        <section
          className="w-full py-6 md:py-10 px-4"
          style={{
            background:
              "linear-gradient(135deg, #FFF8EC, #F5E6D3, #FFE9C7, #FAD7A1)",
          }}
        >
          <img
            src="/slider/pump-last.webp"
            alt="Soap pump display"
            className="w-full rounded-xl shadow-lg"
          />
        </section>

        <Footer />
      </div>
    );
  }
};

export default SimpleHumanLanding;
