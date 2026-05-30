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
    <><main className="min-h-screen bg-white">
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
                      <h1 className="text-6xl md:text-8xl font-black leading-none text-black">
  Finger Lickin'
  <span className="block text-red-600">
    Good
  </span>
</h1>
                  </div>

                  <p className="text-xl text-black mt-6">
                      Fresh chicken, family buckets, burgers and unbeatable flavour.
                  </p>

                  <button
                      onClick={scrollToMenu}
                      className="mt-8 bg-red-600 text-white px-8 py-4 rounded-full"
                  >
                      View Menu
                  </button>
              </div>
<div className="relative">

  <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-xl z-10">
    🔥 MOST POPULAR
  </div>

  <Image
    src="/chicken-new.jpg"
    alt="KFC Chicken"
    width={700}
    height={700}
    className="rounded-3xl shadow-2xl w-full hover:scale-105 transition duration-500"
    priority
  />

</div>

</section>

<section id="menu" className="py-24">
              <div className="max-w-7xl mx-auto px-6">

                  <h2 className="text-5xl font-bold text-center mb-16">
                      Popular Meals
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8">

                      <div className="bg-white shadow-xl rounded-3xl overflow-hidden hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition duration-300">
                          <Image
                              src="/zinger.jpg"
                              alt="Zinger Burger"
                              width={500}
                              height={300}
                              className="w-full h-56 object-cover" />
                          <Image
                              src="/family-bucket.jpg"
                              alt="Family Bucket"
                              width={500}
                              height={300}
                              className="w-full h-56 object-cover" />

                          <div className="p-6">
                              <h3 className="text-3xl font-black uppercase tracking-tight text-black">
                                  Hot Wings
                              </h3>

                              <p className="text-red-600 font-bold text-xl mt-2">
                                  €19.99
                              </p>

                              <p className="text-yellow-500 mt-2">
                                  ⭐⭐⭐⭐⭐
                              </p>

                              <p className="text-black mt-3">
                                  10 pieces of crispy chicken with large fries and dips.
                              </p>

                              <button
                                  onClick={addToCart}
                                  className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
                              >
                                  Add To Cart
                              </button>
                          </div>
                      </div>

                      <div className="bg-white shadow-xl rounded-3xl overflow-hiddenhover:-translate-y-2 hover:scale-105  hover:shadow-2xl transition duration-300">
                          <Image
                              src="/zinger.jpg"
                              alt="Zinger Burger"
                              width={500}
                              height={300}
                              className="w-full h-56 object-cover" />

                          <div className="p-6">
                              <h3 className="text-3xl font-black uppercase tracking-tight text-black">
                                  Zinger Burger
                              </h3>

                              <p className="text-red-600 font-bold text-xl mt-2">
                                  €8.99
                              </p>

                              <p className="text-yellow-500 mt-2">
                                  ⭐⭐⭐⭐⭐
                              </p>

                              <p className="text-black mt-3">
                                  Spicy chicken fillet burger served with fresh lettuce and sauce.
                              </p>

                              <button
                                  onClick={addToCart}
                                  className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
                              >
                                  Add To Cart
                              </button>
                          </div>
                      </div>

                     <div className="bg-white shadow-xl rounded-3xl overflow-hidden hover:scale-105 ...">

  <div className="relative">

    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">

      BEST SELLER

    </div>

    <Image

      src="/family-bucket.jpg"

      alt="Family Bucket"

      width={500}

      height={300}

      className="w-full h-56 object-cover"

    />

  </div>

                          <div className="p-6">
                              <h3 className="text-3xl font-black uppercase tracking-tight text-black">
                                  Hot Wings
                              </h3>

                              <p className="text-red-600 font-bold text-xl mt-2">
                                  €6.99
                              </p>

                              <p className="text-yellow-500 mt-2">
                                  ⭐⭐⭐⭐☆
                              </p>

                              <p className="text-black mt-3">
                                  Crispy spicy wings packed with flavour and perfect for sharing.
                              </p>

                              <button
                                  onClick={addToCart}
                                  className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
                              >
                                  Add To Cart
                              </button>
                          </div>
                      </div>

                  </div>
              </div>
          </section>
    </main>
</>
  );
}