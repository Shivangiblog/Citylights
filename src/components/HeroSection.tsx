"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const sliderImages = [
  "/slider/citylightfront.jpeg",
  "/slider/light-09.jpeg",
  "/slider/h-pendent.jpeg",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen md:h-screen flex flex-col md:flex-row items-center overflow-hidden bg-gradient-to-br from-amber-100 via-orange-200 to-yellow-100">
      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1440 320" className="w-full h-28" preserveAspectRatio="none">
          <path
            fill="#ffddad"
            d="M0,192L120,181.3C240,171,480,149,720,160C960,171,1200,213,1320,234.7L1440,256V0H0Z"
          />
        </svg>
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute -top-10 left-10 w-80 h-80 bg-amber-300 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-orange-400 opacity-30 blur-[120px] rounded-full"></div>

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 z-10 px-6 md:px-16 py-10 flex items-center">
        <div className="backdrop-blur-md bg-white/40 rounded-3xl p-8 md:p-10 shadow-xl border border-white/20 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight text-center md:text-left">
            Brighten Your Space
            <br />
            With Stunning Lighting
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-700 leading-relaxed text-center md:text-left">
            Explore premium LED, decorative, and modern lighting solutions
            designed to transform every room.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/lighting">
              <Button size="lg" className="shadow-lg hover:shadow-xl w-full sm:w-auto">
                Shop Lighting
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT SLIDER */}
      <div className="w-full md:w-1/2 h-[60vh] sm:h-[70vh] md:h-full flex items-center justify-center bg-white/20">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1}
          className="w-full h-full"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={img}
                  alt="City Lights Store"
                  className="
                    w-full h-full 
                    object-cover md:object-contain
                    px-2 sm:px-4 md:p-6
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-20 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 320" className="w-full h-28" preserveAspectRatio="none">
          <path
            fill="#f4c58a"
            d="M0,256L120,224C240,192,480,128,720,149C960,171,1200,277,1320,304L1440,320V0H0Z"
          />
        </svg>
      </div>

      {/* FINAL WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1440 320" className="w-full h-40" preserveAspectRatio="none">
          <path
            fill="#f4c58a"
            d="M0,128L160,144C320,160,640,192,960,176C1280,160,1440,96,1440,96V320H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
