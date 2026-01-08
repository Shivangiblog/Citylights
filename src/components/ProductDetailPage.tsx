import React, { useState } from "react";
import Footer from "./Footer";
interface ProductImage {
  src: string;
  alt?: string;
}

interface Product {
  id: string;
  title: string;
  subtitle?: string;
  price?: string;
  description: string;
  highlights: string[];
  images: ProductImage[];
  specs?: { label: string; value: string }[];
  accessories?: { id: string; title: string; image: string; href?: string }[];
}

const defaultProduct: Product = {
  id: "sensor-recycler",
  title: "SENSOR RECYCLER",
  subtitle:
    "Sort trash and recycling under one lid with voice and motion control.",
  price: "$249.99",
  description:
    "Our Sensor Recycler uses motion and voice sensor technology so you can open the can hands-free. Dual compartments make sorting trash easy with a removable inner bucket for recycling and generous capacity.",
  highlights: [
    "Sensor Technology — wave or say 'open can'",
    "Whisper quiet: 47 dB motor",
    "Liner rim + built-in liner dispenser",
    "Dual compartments with removable recycling bucket",
  ],
  images: [
    { src: "/images/sensor-recycler-hero.jpg", alt: "Sensor Recycler hero" },
    { src: "/images/sensor-recycler-1.jpg", alt: "Open lid detail" },
    { src: "/images/sensor-recycler-2.jpg", alt: "Liner dispenser" },
  ],
  specs: [
    { label: "Capacity", value: "18 gal (combined)" },
    { label: "Noise", value: "~47 dB" },
    { label: "Power", value: "AC adapter (included)" },
  ],
  accessories: [
    { id: "odorsorb", title: "Odorsorb Pod", image: "/images/odorsorb.jpg" },
    { id: "liners", title: "Custom Fit Liners", image: "/images/liners.jpg" },
  ],
};

const ProductDetailPage: React.FC<{ product?: Product }> = ({
  product = defaultProduct,
}) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const mainImage = product.images[mainImageIndex];

  const handleAddToCart = () => {
    alert(`${product.title} added to cart`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <nav className="text-sm text-gray-500 mb-4">
        Home / Sensor / {product.title}
      </nav>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={mainImage.src}
              alt={mainImage.alt || product.title}
              className="w-full h-[420px] object-cover"
            />
          </div>

          <div className="mt-4 flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={img.src + idx}
                onClick={() => setMainImageIndex(idx)}
                className={`w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border ${
                  idx === mainImageIndex
                    ? "ring-2 ring-offset-2 ring-primary"
                    : "border-gray-200"
                }`}
                aria-label={`Show image ${idx + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
          {product.subtitle && (
            <p className="text-gray-600 mb-4">{product.subtitle}</p>
          )}

          {product.price && (
            <div className="mb-4">
              <span className="text-2xl font-bold">{product.price}</span>
            </div>
          )}

          <p className="text-gray-700 mb-6">{product.description}</p>

          <ul className="mb-6 space-y-2">
            {product.highlights.map((h, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:opacity-95"
            >
              Add to Cart
            </button>

            <button className="px-4 py-3 border rounded-xl">
              Find a Retailer
            </button>
          </div>

          {product.specs && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Specifications</h3>
              <dl className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                {product.specs.map((s) => (
                  <React.Fragment key={s.label}>
                    <dt className="text-gray-500">{s.label}</dt>
                    <dd>{s.value}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Sensor Technology</h2>
          <p className="text-gray-700">
            Our sensor responds to a wave of your hand or the command of your
            voice while ignoring the background of a busy kitchen. Just say
            “open can” for a clean workflow while cooking or handling trash.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Whisper Quiet</h2>
          <p className="text-gray-700">
            Our internal motor is built to last, out of sight and nearly silent.
            At ~47 decibels it’s barely a whisper.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Liner Change Reinvented
          </h2>
          <p className="text-gray-700">
            We streamlined the task of changing liners with our liner rim
            design. Store liners in the liner pocket, pull new liners from the
            dispenser, and hide liners with the liner rim.
          </p>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center">
              <img
                src="/images/liner-pocket.jpg"
                alt="Store liners"
                className="mx-auto h-28 object-cover rounded"
              />
              <p className="text-sm mt-2">Store liners in the liner pocket</p>
            </div>
            <div className="text-center">
              <img
                src="/images/liner-dispenser.jpg"
                alt="Pull new liners"
                className="mx-auto h-28 object-cover rounded"
              />
              <p className="text-sm mt-2">Pull new liners from the dispenser</p>
            </div>
            <div className="text-center">
              <img
                src="/images/liner-rim.jpg"
                alt="Hide liners"
                className="mx-auto h-28 object-cover rounded"
              />
              <p className="text-sm mt-2">Hide liners with the liner rim</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Recycling Solution</h2>
          <p className="text-gray-700">
            Dual compartments make sorting trash easier than ever with a
            removable recycling bucket and generous capacity.
          </p>
        </section>

        {product.accessories && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Enhance the Experience
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {product.accessories.map((a) => (
                <a
                  key={a.id}
                  href={a.href || "#"}
                  className="border rounded-lg p-4 text-center hover:shadow"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    className="mx-auto h-36 object-contain"
                  />
                  <div className="mt-3 font-medium">{a.title}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* FAQ / Support links */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Questions?</h2>
          <p className="text-gray-700">
            Visit our support page for product support, warranty and
            registration.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
