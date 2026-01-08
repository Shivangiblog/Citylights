import React, { useState, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const ProductDetailPage = React.lazy(
  () => import("@/components/ProductDetailPage")
);

const SimpleHumanLanding = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "product">("home");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: "rectangular",
      name: "Rectangular",
      image: "/slider/can-rectangular.webp",
    },
    {
      id: "mini",
      name: "Mini",
      image: "/slider/can-mini.webp",
    },
    {
      id: "butterfly",
      name: "Butterfly",
      image: "/slider/can-butter.avif",
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
      {currentPage === "product" && selectedProduct && (
        <Suspense fallback={<div>Loading...</div>}>
          <ProductDetailPage />
        </Suspense>
      )}
    </>
  );

  function HomePage() {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="py-8 bg-white border-b">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center gap-2 group cursor-default w-24 sm:w-28 md:w-32"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 sm:h-20 md:h-24 object-contain opacity-80 group-hover:opacity-100 transition"
                />

                <span className="text-xs sm:text-sm tracking-wide text-gray-700 text-center">
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="relative h-64 sm:h-96 md:h-screen w-full overflow-hidden bg-black">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://cdn.shopify.com/videos/c/o/v/4ca3d2b7adcf4bb89dfc152e33a4c2fc.mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </section>

        <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-8 tracking-wide">
              INNOVATING TRASH CAN TECHNOLOGY
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              Over the last 25 years, we have completely reimagined the trash
              can and the way people think about trash in the home.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-8 tracking-wide">
              WE LOVE LASTING VALUE
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              Our products are not just made to endure but to perform like new
              throughout years of use.
            </p>
          </div>
        </section>

        <section className="w-full bg-[#2f2d2e] py-12 sm:py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
            <h2 className="text-xs sm:text-sm tracking-[0.3em] font-semibold mb-10 sm:mb-16 md:mb-20">
              WHICH IS BEST FOR YOU?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 md:gap-20">
              <div className="flex flex-col items-center">
                <img
                  src="/slider/step-can-00.webp"
                  className="h-28 sm:h-36 md:h-44 mb-6 sm:mb-8 md:mb-10 opacity-90"
                />
                <h3 className="text-xs sm:text-sm tracking-widest font-semibold mb-3 sm:mb-4 md:mb-6">
                  RECTANGULAR
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-xs">
                  Neat, clean and stylish with liner pocket inside the can.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/slider/step-can-01.webp"
                  className="h-28 sm:h-36 md:h-44 mb-6 sm:mb-8 md:mb-10 opacity-90"
                />
                <h3 className="text-xs sm:text-sm tracking-widest font-semibold mb-3 sm:mb-4 md:mb-6">
                  MINI
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-xs">
                  Slim profile and invisible hinge perfect for tight spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-screen min-h-screen flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, #FFF8EC, #F5E6D3, #FFE9C7, #FAD7A1)",
          }}
        >
          <img
            src="/slider/step-can-last.webp"
            alt="Step can display"
            className="
      w-100
      h-100
      object-contain
      max-w-screen 
      max-h-none
    "
          />
        </section>

        <Footer />
      </div>
    );
  }
};

export default SimpleHumanLanding;
