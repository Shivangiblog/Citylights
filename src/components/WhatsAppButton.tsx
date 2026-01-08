// Add lazy loading for ProductDetailPage if used in this file
import React from "react";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/918484802450?text=Hello%20I%20want%20an%20inquiry"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
      style={{
        padding: "8px",
        borderRadius: "20%",
      }}
    >
      <img
        src="/slider/what-logo.png"
        alt="WhatsApp"
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
      />
    </a>
  );
};

export default WhatsAppButton;