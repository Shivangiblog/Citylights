
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Navaigation from "@/components/Navigation";
import Footer from "@/components/Footer";
interface Product {
  id: number;
  name: string;
  color: string;
  price: number;
  image: string;
  shape: string;
  size: string;
}

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "1.5L Mini Can",
      color: "Brushed",
      price: 3299,
      image: "/slider/mini-1.webp",
      shape: "round",
      size: "1.5L",
    },
    {
      id: 2,
      name: "1.5L Mini Can",
      color: "White",
      price: 3299,
      image: "/slider/mini-2.webp",
      shape: "round",
      size: "1.5L",
    },
    {
      id: 3,
      name: "1.5L Mini Can",
      color: "Matte Black",
      price: 3299,
      image: "/slider/mini-3.webp",
      shape: "round",
      size: "1.5L",
    },
    {
      id: 4,
      name: "4.5L Round Step Can",
      color: "Brushed",
      price: 4499,
      image: "/slider/mini-4.webp",
      shape: "round",
      size: "4.5L - 6L",
    },
    {
      id: 5,
      name: "4.5L Round Step Can",
      color: "White",
      price: 4499,
      image: "/slider/mini-5.webp",
      shape: "round",
      size: "4.5L - 6L",
    },
    {
      id: 6,
      name: "4.5L Round Step Can",
      color: "Matte Black",
      price: 4499,
      image: "/slider/mini-6.webp",
      shape: "round",
      size: "4.5L - 6L",
    },
    {
      id: 7,
      name: "10L Slim Open Can",
      color: "Brushed",
      price: 4499,
      image: "/slider/mini-7.webp",
      shape: "slim",
      size: "10L - 25L",
    },
    {
      id: 8,
      name: "10L Slim Open Can",
      color: "Brushed",
      price: 4499,
      image: "/slider/mini-8.webp",
      shape: "slim",
      size: "10L - 25L",
    },
    {
      id: 9,
      name: "10L Slim Open Can",
      color: "Brushed",
      price: 4499,
      image: "/slider/mini-9.webp",
      shape: "slim",
      size: "10L - 25L",
    },
    {
      id: 10,
      name: "10L Slim Open Can",
      color: "Brushed",
      price: 4499,
      image: "/slider/mini-10.webp",
      shape: "slim",
      size: "10L - 25L",
    },
    {
      id: 11,
      name: "10L Slim Open Can",
      color: "Brushed",
      price: 4499,
      image: "/slider/mini-11.webp",
      shape: "slim",
      size: "10L - 25L",
    },
  
  ];

  const filteredProducts = products.filter((p) => {
    const matchesColor = selectedColor ? p.color.toLowerCase() === selectedColor.toLowerCase() : true;
    const matchesShape = selectedShape ? p.shape === selectedShape : true;
    const matchesSize = selectedSize ? p.size === selectedSize : true;
    return matchesColor && matchesShape && matchesSize;
  });

  const clearAllFilters = () => {
    setSelectedColor(null);
    setSelectedShape(null);
    setSelectedSize(null);
  };

  const FilterSection = () => (
    <>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-medium text-gray-800">filter ︿</h2>
        </div>
        <button
          onClick={clearAllFilters}
          className="text-sm text-gray-500 hover:text-gray-800 mb-8 transition-colors"
        >
          clear all
        </button>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-4">shape</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div
            onClick={() => setSelectedShape(selectedShape === "semi-round" ? null : "semi-round")}
            className={`cursor-pointer hover:text-gray-800 transition-colors ${
              selectedShape === "semi-round" ? "text-gray-800 font-medium" : ""
            }`}
          >
            semi-round
          </div>
          <div
            onClick={() => setSelectedShape(selectedShape === "round" ? null : "round")}
            className={`cursor-pointer hover:text-gray-800 transition-colors ${
              selectedShape === "round" ? "text-gray-800 font-medium" : ""
            }`}
          >
            round
          </div>
          <div
            onClick={() => setSelectedShape(selectedShape === "slim" ? null : "slim")}
            className={`cursor-pointer hover:text-gray-800 transition-colors ${
              selectedShape === "slim" ? "text-gray-800 font-medium" : ""
            }`}
          >
            slim
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-4">size</h3>
        <div className="space-y-3 text-sm">
          <div
            onClick={() => setSelectedSize(selectedSize === "10L - 25L" ? null : "10L - 25L")}
            className={`cursor-pointer transition-colors ${
              selectedSize === "10L - 25L" ? "opacity-100" : "opacity-70 hover:opacity-100"
            }`}
          >
            <div className="font-medium text-gray-800">10L - 25L</div>
            <div className="text-gray-500">bathroom or guest room</div>
          </div>
          <div
            onClick={() => setSelectedSize(selectedSize === "4.5L - 6L" ? null : "4.5L - 6L")}
            className={`cursor-pointer transition-colors ${
              selectedSize === "4.5L - 6L" ? "opacity-100" : "opacity-70 hover:opacity-100"
            }`}
          >
            <div className="font-medium text-gray-800">4.5L - 6L</div>
            <div className="text-gray-500">perfect for the bathroom</div>
          </div>
          <div
            onClick={() => setSelectedSize(selectedSize === "1.5L" ? null : "1.5L")}
            className={`cursor-pointer transition-colors ${
              selectedSize === "1.5L" ? "opacity-100" : "opacity-70 hover:opacity-100"
            }`}
          >
            <div className="font-medium text-gray-800">1.5L</div>
            <div className="text-gray-500">countertop or vanity</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-4">color</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <div
              onClick={() =>
                setSelectedColor(
                  selectedColor === "brushed" ? null : "brushed"
                )
              }
              className={`w-6 h-6 rounded border-2 ${
                selectedColor === "brushed"
                  ? "border-gray-800"
                  : "border-gray-300"
              } bg-gradient-to-br from-gray-300 to-gray-400`}
            ></div>
            <span className="text-sm text-gray-700">brushed</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <div
              onClick={() =>
                setSelectedColor(
                  selectedColor === "polished" ? null : "polished"
                )
              }
              className={`w-6 h-6 rounded border-2 ${
                selectedColor === "polished"
                  ? "border-gray-800"
                  : "border-gray-300"
              } bg-gradient-to-br from-gray-200 to-gray-300`}
            ></div>
            <span className="text-sm text-gray-700">polished</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <div
              onClick={() =>
                setSelectedColor(selectedColor === "white" ? null : "white")
              }
              className={`w-6 h-6 rounded border-2 ${
                selectedColor === "white"
                  ? "border-gray-800"
                  : "border-gray-300"
              } bg-white`}
            ></div>
            <span className="text-sm text-gray-700">white</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <div
              onClick={() =>
                setSelectedColor(selectedColor === "black" ? null : "black")
              }
              className={`w-6 h-6 rounded border-2 ${
                selectedColor === "black"
                  ? "border-gray-800"
                  : "border-gray-300"
              } bg-black`}
            ></div>
            <span className="text-sm text-gray-700">black</span>
          </label>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
    
      <Navaigation />
      <div className="relative w-full h-64 md:h-96 bg-gray-100 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.shopify.com/s/files/1/2804/6630/files/smallcan_COL_hero_d-v3.jpg?v=1661287566)",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-light mb-4 md:mb-6 text-gray-800">
              SMALL CAN, BIG ATTITUDE
            </h1>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Our small cans are built with the same attention to detail as the
              larger models — with durable steel bodies, removable inner
              buckets, and strong steel pedals.
            </p>
          </div>
        </div>
      </div>

   
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b px-4 py-3">
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="flex items-center justify-between w-full text-sm font-medium text-gray-800"
        >
          <span>Filters</span>
          {mobileFilterOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

    
      {mobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4 space-y-8">
            <FilterSection />
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="hidden lg:grid grid-cols-4 gap-8">
          <FilterSection />
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
            
              <div className="aspect-square bg-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
      
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-base md:text-lg font-medium text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">{product.color}</p>
                <p className="text-base md:text-lg font-medium text-gray-800">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-base md:text-lg">
              No products match your filters.
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-sm text-gray-600 hover:text-gray-800 underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;