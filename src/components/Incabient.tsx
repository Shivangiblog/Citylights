"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const CabinetCanPage = () => {
  const [selectedSize, setSelectedSize] = useState("10L");
  const [currentImage, setCurrentImage] = useState(0);

  const productImages = {
    "30L": [
      "/slider/cabinet-1.webp",
      "/slider/cabinet-2.webp",
      "/slider/cabinet-3.webp",
    ],
    "10L": [
      "/slider/cabinet-20-1.webp",
      "/slider/cabinet-20-2.webp",
      "/slider/cabinet-20-3.webp",
      "/slider/cabinet-20-4.webp",
      "/slider/cabinet-20-5.jpg",
      "/slider/cabinet-20-6.jpg",
    ],
  };

  const images = productImages[selectedSize];

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    setCurrentImage(0);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 text-gray-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    SPECS
                  </span>
                </div>
              </div>

              <div className="relative bg-gray-50 rounded-2xl p-8 shadow-lg">
                <img
                  src={images[currentImage]}
                  alt="In-Cabinet Can"
                  className="w-full h-96 object-contain"
                />

                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      currentImage === idx ? "bg-gray-900" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {selectedSize === "10L"
                  ? "IN-CABINET CAN"
                  : "UNDER COUNTER PULL-OUT CAN"}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {selectedSize === "10L"
                  ? "10 Liter / 2.6 Gallon"
                  : "30 Liter / 8 Gallon"}
              </p>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">SIZE</h2>
                <div className="space-y-3">
                  <button
                    onClick={() => handleSizeChange("30L")}
                    className={`w-full px-6 py-4 rounded-lg font-medium transition ${
                      selectedSize === "30L"
                        ? "bg-white text-gray-900 border-2 border-gray-900"
                        : "bg-gray-50 text-gray-600 border-2 border-transparent hover:border-gray-300"
                    }`}
                  >
                    30L
                  </button>
                  <button
                    onClick={() => handleSizeChange("10L")}
                    className={`w-full px-6 py-4 rounded-lg font-medium transition ${
                      selectedSize === "10L"
                        ? "bg-gray-200 text-gray-900 border-2 border-gray-400"
                        : "bg-gray-50 text-gray-600 border-2 border-transparent hover:border-gray-300"
                    }`}
                  >
                    10L
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Key Features:</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Heavy-duty steel frame hooks securely onto door or screws
                      in
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Removable plastic bucket lifts out for easy cleaning
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Compatible with code R custom fit liners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Dimensions: 11.7"W × 8.7"D × 14.3"H</span>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-baseline gap-2 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">SUMMARY</h3>
                  <span className="text-3xl font-bold text-gray-900">
                    | ₹{selectedSize === "30L" ? "12,499" : "4,999"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-72">
                <img
                  src="/slider/manage.webp"
                  alt="Manage Scraps Efficiently"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  MANAGE SCRAPS EFFICIENTLY
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hangs neatly inside the cabinet door for quick and easy access
                  while you're busy at the counter. The heavy-duty steel frame
                  and durable plastic bucket make it solid and stable — almost
                  too nice to hide away!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-72">
                <img
                  src="/slider/perfect.webp"
                  alt="Perfect Fit, Extra Strong"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-6 right-6 bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                  R
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  PERFECT FIT, EXTRA STRONG
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our code R custom fit liners fit this can perfectly so there's
                  no bunching, slipping or messy bag overhang for a neater,
                  cleaner look. They are also extra-thick and double-seamed so
                  you can pack your trash to the rim without rips, leaks or
                  tears.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                Durable Construction
              </h4>
              <p className="text-sm text-gray-600">
                Heavy-duty steel frame ensures long-lasting reliability and
                stability
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                Easy Installation
              </h4>
              <p className="text-sm text-gray-600">
                Hooks onto cabinet door or screw in for permanent mounting
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Space Efficient</h4>
              <p className="text-sm text-gray-600">
                Keeps counters clear while maximizing cabinet space
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CabinetCanPage;
