"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Your images
const sliderImages = [
  "/slider/citylightfront.jpeg",
  "/slider/light-09.jpeg",
  "/slider/h-pendent.jpeg",
];

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center overflow-hidden bg-gradient-to-br from-amber-100 via-orange-200 to-yellow-100">

      {/* Glow Lights */}
      <div className="absolute -top-10 left-10 w-80 h-80 bg-amber-300 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-orange-400 opacity-30 blur-[120px] rounded-full"></div>

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 z-10 px-10 md:px-16 py-12 flex items-center">
        <div className="backdrop-blur-md bg-white/40 rounded-3xl p-10 shadow-xl border border-white/20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 drop-shadow-sm leading-tight">
            Brighten Your Space<br />With Stunning Lighting
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
            Explore premium LED, decorative, and modern lighting solutions designed to transform every room.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/lighting">
              <Button size="lg" className="shadow-lg hover:shadow-xl">
                Shop Lighting
              </Button>
            </Link>

            <Link to="/contact">
              <Button size="lg" variant="secondary" className="shadow-md hover:shadow-lg">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT SLIDER – FULL HEIGHT, PERFECT BANNER */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          className="w-full h-full"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <img
                  src={img}
                  alt="City Lights Store"
                  className="w-full h-full object-cover rounded-none shadow-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 320" className="w-full h-28" preserveAspectRatio="none">
          <path
            fill="#f4c58a"
            d="M0,192L80,202.7C160,213,320,235,480,234.7C640,235,800,213,960,192C1120,171,1280,149,1360,138.7L1440,128V320H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
