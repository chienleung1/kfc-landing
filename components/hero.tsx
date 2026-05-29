"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart((prev) => prev + 1);
  };

  const scrollToMenu = () => {
    document
      .getElementById("menu")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-red-600">
              KFC
            </h1>

            <div className="bg-black text-white px-3 py-1 rounded-full">
              🛒 {cart}
            </div>
          </div>

          <button
            onClick={scrollToMenu}
            className="bg-red-600 text-white px-5 py-2 rounded-full"
          >
            View Menu
          </button>
        </div>
      </nav>

      <section className="min-h-screen bg-gray-100 flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Finger Lickin'
              <span className="block text-red-600">
                Good
              </span>
            </h1>

            <p className="text-xl text-gray-600 mt-6">
              Fresh chicken, family buckets, burgers and unbeatable flavour.
            </p>

            <button
              onClick={scrollToMenu}
              className="mt-8 bg-red-600 text-white px-8 py-4 rounded-full"
            >
              View Menu
            </button>
          </div>

          <div>
            <Image
              src="/chicken.jpg"
              alt="Chicken"
              width={700}
              height={700}
              className="rounded-3xl shadow-2xl w-full"
              priority
            />
          </div>

        </div>
      </section>

      <section id="menu" className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Popular Meals
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <Image
                src="/family-bucket.jpg"
                alt="Family Bucket"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Family Bucket
                </h3>

                <button
                  onClick={addToCart}
                  className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <Image
                src="/zinger.jpg"
                alt="Zinger Burger"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Zinger Burger
                </h3>

                <button
                  onClick={addToCart}
                  className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <Image
                src="/chicken.jpg"
                alt="Hot Wings"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Hot Wings
                </h3>

                <button
                  onClick={addToCart}
                  className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full"
                >
                  Add To Cart
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}