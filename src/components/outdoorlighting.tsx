import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OutdoorLightingPage = () => {
  const products = [
    {
      image: "/slider/hang-88.jpeg",
      title: "Landscape Spotlights",
      description: "Weather-resistant with adjustable beam angle",
      size: "H: 350mm • W: 120mm",
    },
    {
      image: "/slider/out-00.jpg",
      title: "Pathway Lighting",
      description: "Solar-powered stakes for garden illumination",
      size: "H: 500mm • W: 140mm",
    },
    {
      image: "/slider/out-01.jpg",
      title: "Outdoor Wall Lantern",
      description: "Classic lantern design with LED technology",
      size: "H: 420mm • W: 180mm",
    },
    {
      image: "/slider/download.jpg",
      title: "Garden Spike Light",
      description: "Perfect for plants & landscape highlights",
      size: "H: 300mm • W: 100mm",
    },
    {
      image: "/slider/out-06.jpg",
      title: "Gate Wall Light",
      description: "Premium matte finish outdoor fixture",
      size: "H: 280mm • W: 150mm",
    },
    {
      image: "/slider/outdoor-00.jpg",
      title: "Outdoor Pillar Light",
      description: "Modern LED pillar for pathways & terraces",
      size: "H: 600mm • W: 200mm",
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

      {/* Heading */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-3 text-[#5A4632]">
          Outdoor Lighting
        </h1>
        <p className="text-lg text-[#7A6A55]">
          Durable outdoor fixtures designed for exterior spaces
        </p>
      </section>

      {/* Product Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 pb-20">
        {products.map((item, index) => (
          <div
            key={index}
            className="group rounded-xl overflow-hidden shadow-lg 
                       border border-[#EAD7C4] bg-[#FFF8EC]/80
                       hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {/* IMAGE WITH HOVER EFFECT */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* OVERLAY DETAILS */}
              <div
                className="absolute inset-0 bg-[#5A4632]/60 opacity-0 
                           group-hover:opacity-100 transition-all duration-300 
                           flex items-center justify-center"
              >
                <div className="text-[#FFE9C7] text-center space-y-1">
                  <p className="text-sm">{item.size}</p>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-[#5A4632]">
                {item.title}
              </h2>
              <p className="text-sm text-[#7A6A55] mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default OutdoorLightingPage;
