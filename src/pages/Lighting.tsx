import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Lighting = () => {
  const categories = [
    {
      title: "Chandeliers",
      products: [
        {
          image: "/slider/chand-00.jpeg",
          title: "Crystal Grand Chandelier",
          description: "Stunning centerpiece with cascading crystals and warm lighting",
        },
        {
          image: "/slider/chand-66.jpeg",
          title: "Modern Brass Chandelier",
          description: "Contemporary elegance with geometric brass framework",
        },
        {
          image: "/slider/chand-7.jpeg",
          title: "Classic Empire Chandelier",
          description: "Timeless design with traditional crystal accents",
        },
      ],
    },
    {
      title: "Pendant Lights",
      products: [
        {
          image: "/slider/h-pendent.jpeg",
          title: "Geometric Pendant",
          description: "Modern industrial design with exposed bulb styling",
        },
        {
          image: "/slider/h-pend.jpeg",
          title: "Glass Globe Pendant",
          description: "Minimalist clear glass with polished brass finish",
        },
        {
          image: "/slider/hang-33.jpeg",
          title: "Drum Shade Pendant",
          description: "Fabric shade with diffused ambient lighting",
        },
      ],
    },
    {
      title: "Floor Lamps",
      products: [
        {
          image: "/slider/floor-1.jpeg",
          title: "Arc Floor Lamp",
          description: "Sweeping curved design perfect for reading corners",
        },
        {
          image: "/slider/light-08.jpeg",
          title: "Tripod Floor Lamp",
          description: "Scandinavian-inspired with natural wood legs",
        },
        {
          image: "/slider/floor-09.jpg",
          title: "Modern Column Lamp",
          description: "Sleek brass column with adjustable brightness",
        },
      ],
    },
    {
      title: "Table Lamps",
      products: [
        {
          image: "/slider/Capture-1.JPG",
          title: "Brass Desk Lamp",
          description: "Classic banker's lamp with adjustable shade",
        },
        {
          image: "/slider/Capture-2.JPG",
          title: "Ceramic Table Lamp",
          description: "Handcrafted base with textured finish",
        },
        {
          image: "/slider/Capture-3.JPG",
          title: "Crystal Table Lamp",
          description: "Elegant cut crystal with silk shade",
        },
      ],
    },
    {
      title: "Wall Light",
      products: [
        {
          image: "/slider/wall.jpeg",
          title: "Modern Wall Sconce",
          description: "Sleek design with upward and downward lighting",
        },
        {
          image: "/slider/wall-1.jpeg",
          title: "Vintage Brass Sconce",
          description: "Period-inspired with aged brass patina",
        },
        {
          image: "/slider/wall-5.jpeg",
          title: "Contemporary LED Sconce",
          description: "Energy-efficient with artistic metal framework",
        },
      ],
    },
    {
      title: "Outdoor Lighting",
      products: [
        {
          image: "/slider/out.jpg",
          title: "Landscape Spotlights",
          description: "Weather-resistant with adjustable beam angle",
        },
        {
          image: "/slider/out2.jpeg",
          title: "Pathway Lighting",
          description: "Solar-powered stakes for garden illumination",
        },
        {
          image: "/slider/out-3.jpeg",
          title: "Outdoor Wall Lantern",
          description: "Classic lantern design with LED technology",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Lighting Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of premium lighting fixtures for every room and style
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          id={category.title.toLowerCase().replace(/\s+/g, '-')}
          className={`py-16 scroll-mt-20 relative overflow-hidden ${
            categoryIndex % 2 === 0 ? "bg-background" : "bg-gradient-warm"
          }`}
        >
          {categoryIndex % 2 !== 0 && <div className="absolute inset-0 bg-gradient-radial opacity-30" />}
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-foreground">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.products.map((product, productIndex) => (
                <ProductCard key={productIndex} {...product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Lighting;
