import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const SimpleHumanLanding = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "product">("home");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
   
    {
      id: "rectangular",
      name: "Rectangular",
      subtitle: "Voice + Motion Sensor",
      description: "Maximized capacity with a clean, simple design.",
      price: "300",
      capacity: "58L",
      icon: (
        <svg
          viewBox="0 0 100 140"
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="25" y="20" width="50" height="100" rx="2" />
          <rect x="20" y="10" width="60" height="12" rx="2" />
          <line x1="50" y1="30" x2="50" y2="110" strokeDasharray="3 3" />
        </svg>
      ),
    },
    {
      id: "semi-round",
      name: "Semi-Round",
      subtitle: "Motion Sensor",
      description: "Rounded edges and a flat back for a softer, smarter fit.",
      price: "160",
      capacity: "45L",
      icon: (
        <svg
          viewBox="0 0 100 140"
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M 30 20 L 30 120 L 70 120 L 70 20 C 70 20 60 10 50 10 C 40 10 30 20 30 20 Z" />
          <ellipse cx="50" cy="15" rx="22" ry="8" />
          <line x1="50" y1="30" x2="50" y2="110" strokeDasharray="3 3" />
        </svg>
      ),
    },
  ];

  const productList = [
    {
      id: 1,
      name: "RECYCLE BIN",
      subtitle: "Voice + Motion Sensor",
      description: "Dual compartments designed for trash and recyclables.",
      image: "/slider/rectangular.webp",
    },
    {
      id: 2,
      name: "RECTANGULAR",
      subtitle: "Voice + Motion Sensor",
      description: "Maximized capacity with a clean, simple design.",
      image: "/slider/recycler.webp",
    },
 
  ];

  const handleProductClick = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
    setCurrentPage("product");
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
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

        <section className="py-8 px-8 bg-white">
          <div className="max-w-4xl mx-auto flex justify-center gap-16">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center gap-2 group cursor-default"
              >
                <div className="w-20 h-28 flex items-center justify-center">
                  <div className="text-gray-800 group-hover:text-gray-600 transition-colors">
                    {product.icon}
                  </div>
                </div>
                <span className="text-sm font-normal text-gray-900">
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="relative h-screen w-full overflow-hidden bg-gray-800">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://cdn.shopify.com/videos/c/o/v/1f4d785cc4994acb8dcf25934df10970.mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </section>

        <section className="py-24 px-8 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-8 tracking-wide text-brown-900">
              TRASH MADE SIMPLE
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              Our touch-free cans are cleaner, easier and quite possibly the
              most advanced trash cans outside of the space station.
            </p>
          </div>
        </section>

        <section
          className="py-24 px-8"
          style={{
            background:
              "linear-gradient(135deg, #FFF8EC, #F5E6D3, #FFE9C7, #FAD7A1)",
          }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="w-full max-w-lg h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="slider/sensor.webp"
                  alt="Adaptive Sensing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-gray-900">
              <h3 className="text-5xl font-light tracking-wide">
                ADAPTIVE SENSING
              </h3>
              <p className="text-gray-700 leading-relaxed text-xl">
                We use machine-learning to give our sensor tools an almost-human
                quality.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white" id="products">
          <h2 className="text-5xl font-light text-center mb-20 tracking-wide text-gray-900">
            WHICH IS BEST FOR YOU?
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            {productList.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl text-center transition-all hover:shadow-xl border border-gray-200"
              >
                <div className="p-12 flex justify-center">
                  <img
                    src={product.image}
                    className="w-40 h-56 object-contain"
                    alt={product.name}
                  />
                </div>

                <div className="px-8 pb-8">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 uppercase">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.subtitle}
                  </p>
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="w-full py-10"
          style={{
            background:
              "linear-gradient(135deg, #FFF8EC, #F5E6D3, #FFE9C7, #FAD7A1)",
          }}
        >
          <img
            src="slider/sensor-00.webp"
            alt="Interior trash can display"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </section>

        <Footer />
      </div>
    );
  }
};

export default SimpleHumanLanding;
