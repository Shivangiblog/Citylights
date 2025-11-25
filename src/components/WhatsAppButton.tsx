import React from "react";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/918484802450?text=Hello%20I%20want%20an%20inquiry" // WhatsApp link
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        
        padding: "12px",
        borderRadius: "20%",
        // boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/slider/what-logo.png"   
        alt="WhatsApp"
        style={{ width: "150px", height: "150px" }}
      />
    </a>
  );
};

export default WhatsAppButton;
