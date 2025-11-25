import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import { Sparkles, Shield, Truck } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const featuredProducts = [
    {
      image: "/slider/h-pendent.jpeg",
      title: "Crystal Chandeliers",
      description: "Elegant statement pieces that add luxury to any space",
    },
    {
      image: "/slider/chand-66.jpeg",
      title: "Modern Pendants",
      description: "Contemporary designs with geometric precision",
    },
    {
      image: "/slider/floor-l.jpeg",
      title: "Designer Floor Lamps",
      description: "Functional art pieces that illuminate with style",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Premium Quality
              </h3>
              <p className="text-muted-foreground">
                Handcrafted fixtures with attention to detail
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                10 Year Warranty
              </h3>
              <p className="text-muted-foreground">
                Long-lasting durability guaranteed
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Free Delivery
              </h3>
              <p className="text-muted-foreground">
                On orders over $500 nationwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Featured Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular lighting fixtures chosen by designers
              and homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/lighting">
              <Button variant="default" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </div>
  );
};

export default Index;
