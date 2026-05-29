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
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-red-600">KFC</h1>

            <div className="bg-black text-white px-3 py-1 rounded-full">
              Cart: {cart}
            </div>
          </div>

          <div className="hidden md:flex gap-6">
            <button
              onClick={scrollToMenu}
              className="hover:text-red-600 transition"
            >
              Menu
            </button>

            <button
              onClick={() => alert("Deals coming soon!")}
              className="hover:text-red-600 transition"
            >
              Deals
            </button>

            <button
              onClick={() => alert("Rewards coming soon!")}
              className="hover:text-red-600 transition"
            >
              Rewards
            </button>
          </div>

          <button
            onClick={() => alert("Ordering coming soon!")}
            className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
          >
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen bg-gray-100 flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Finger Lickin'
              <span className="block text-red-600">Good</span>
            </h1>

            <p className="text-xl text-gray-600 mt-6">
              Fresh chicken, family buckets, burgers and unbeatable flavour.
            </p>

            <button
              onClick={scrollToMenu}
              className="mt-8 bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition"
            >
              View Menu
            </button>
          </div>

          <div>
            <Image
              src="/chicken.jpg"
              alt="KFC Chicken"
              width={700}
              height={700}
              className="rounded-3xl shadow-2xl w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Popular Meals
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Family Bucket */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition">
              <Image
                src="/family-bucket.jpg"
                alt="Family Bucket"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">Family Bucket</h3>

                <p className="mt-3 text-gray-600">
                  10 pieces of chicken with fries.
                </p>

                <button
                  onClick={addToCart}
                  className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Zinger */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition">
              <Image
                src="/zinger.jpg"
                alt="Zinger Burger"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">Zinger Burger</h3>

                <p className="mt-3 text-gray-600">
                  Spicy chicken burger with fries.
                </p>

                <button
                  onClick={addToCart}
                  className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Hot Wings */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition">
              <Image
                src="/chicken.jpg"
                alt="Hot Wings"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">Hot Wings</h3>

                <p className="mt-3 text-gray-600">
                  Crispy spicy wings packed with flavour.
                </p>

                <button
                  onClick={addToCart}
                  className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="bg-red-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">KFC Rewards</h2>

          <p className="text-xl mt-6">
            Earn points every time you order and unlock exclusive rewards.
          </p>

          <button
            onClick={() => alert("Rewards system coming soon!")}
            className="mt-8 bg-white text-red-600 px-8 py-4 rounded-full font-semibold"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">KFC Landing Page</h3>

          <p className="mt-4 text-gray-400">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}