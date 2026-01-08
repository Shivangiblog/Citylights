// Add lazy loading for ProductDetailPage if used in this file
import React from "react";

const EcoSmartSection = () => {
  return (
    <section 
      className="relative py-28 px-8 overflow-hidden min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: "/slider/sensor-pump-full.webp",
      }}
    >
      {/* Optional Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-6">
            ECO-SMART —<br />REFILL AND REUSE
          </h2>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            We strive to promote sustainability without sacrificing performance. Our refillable pumps replace wasteful single-use bottles with a far more beautiful and satisfying alternative.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcoSmartSection;