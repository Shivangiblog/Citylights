"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Raghu Rao",
    role: "Homeowner",
    content:
      "Excellent variety of lights at this shop. My entire home lighting was purchased from here.",
    rating: 5,
  },
  {
    name: "satish parbhane",
    role: "Interior Designer",
    content:
      "Awesome collection of lighting. All Wipro lights are available at good discounted prices in this store. Mr.Dawood, Mr.Dinesh and Miss.Shobha madam are very helpful.Strongly suggest for all types of decorative light and Wipro light.",
    rating: 5,
  },
  {
    name: "Vilas Subudhi",
    role: "Restaurant Owner",
    content:
      "Great products with great price. And after sales support. It's good. Staff is very responsive. I have purchased all the lighting for my home at this location. Much recommend.",
    rating: 5,
  },
  {
    name: "Shailesh Bagul",
    role: "Architect",
    content:
      "I really like the service and specially Dawood’s support. I brought the entire 3BHK lights including false celing , driver , strips and lost of other items , they give 2 years of warrenty on each of the product and very expensive day replacement.",
    rating: 5,
  },
  {
    name: "Shailesh Bagul",
    role: "Architect",
    content:
      "I really like the service and specially Dawood’s support. I brought the entire 3BHK lights including false celing , driver , strips and lost of other items , they give 2 years of warrenty on each of the product and very expensive day replacement.",
    rating: 5,
  },
  {
    name: "Abhishek Singh",
    role: "Architect",
    content:
      "I really like the This store has really a good collection. Specially I would like to appreciate Mr. Daud for his politeness and ready to help natureservice and specially Dawood’s support. I brought the entire 3BHK lights including false celing , driver , strips and lost of other items , they give 2 years of warrenty on each of the product and very expensive day replacement.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF3E0] via-white to-[#FFE0B2] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-2">
            Real Experiences. Real Satisfaction.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="border-border shadow-lg hover:shadow-2xl transition-all bg-white/60 backdrop-blur-xl rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>

                  <p className="text-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div>
                    <p className="font-bold text-lg text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
