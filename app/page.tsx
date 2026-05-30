"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [cart, setCart] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
 const [familyBucketQty, setFamilyBucketQty] = useState(0);
 const [zingerQty, setZingerQty] = useState(0);
 const [wingsQty, setWingsQty] = useState(0);
 const totalPrice =
  familyBucketQty * 19.99 +
  zingerQty * 8.99 +
  wingsQty * 6.99;
const addToCart = (item: string) => {
  setCart((prev) => [...prev, item]);
};

  const scrollToMenu = () => {
    document
      .getElementById("menu")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-red-600">KFC</h1>

      <div className="bg-white border border-gray-300 text-black px-5 py-3 rounded-2xl shadow-lg">
  🛒 {cart.length} Items
  <div className="text-sm font-bold text-black">
  €{totalPrice.toFixed(2)}
</div>
</div>

</div>

<div className="hidden md:flex gap-6">
            <button
              onClick={scrollToMenu}
              className="text-black hover:text-red-600 transition"
            >
              Menu
            </button>

            <button
              onClick={() => alert("Deals coming soon!")}
              className="text-black hover:text-red-600 transition"
            >
              Deals
            </button>

            <button
              onClick={() => alert("Rewards coming soon!")}
              className="text-black hover:text-red-600 transition"
            >
              Rewards
            </button>
          </div>

         <button
  onClick={scrollToMenu}
  className="bg-red-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-red-700 hover:scale-105 transition"
>
  Order Now
</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-r from-red-100 via-white to-red-100 flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
  🔥 LIMITED TIME OFFER
</span>
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              Finger Lickin'
              <span className="block text-red-600">Good</span>
            </h1>

            <p className="text-xl text-black mt-6">
              Fresh chicken, family buckets, burgers and unbeatable flavour.
            </p>

           <button
  onClick={scrollToMenu}
  className="mt-8 bg-red-600 text-white px-10 py-5 rounded-full hover:bg-red-700 hover:scale-105 transition font-bold shadow-xl"
>
  🍗 Explore Menu
</button>

<div className="flex gap-10 mt-10">

  <div>
    <h3 className="text-3xl font-bold text-red-600">
      100+
    </h3>
    <p className="text-gray-600">
      Restaurants
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-red-600">
      1M+
    </h3>
    <p className="text-gray-600">
      Customers
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-red-600">
      4.8★
    </h3>
    <p className="text-gray-600">
      Rating
    </p>
  </div>

</div>
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
    className="rounded-3xl shadow-2xl w-full hover:scale-105 hover:-rotate-1 transition duration-500"
    priority
  />

</div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-black text-center mb-16">
            Popular Meals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">

         <div className="bg-white shadow-xl rounded-3xl overflow-hidden hover:-translate-y-2 hover:scale-105 transition duration-300">

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
  Family Bucket
</h3>

          <p className="text-red-600 font-black text-2xl mt-2">
  €19.99
</p>

<p className="mt-3 text-black">
  10 pieces of chicken with fries.
</p>

                {familyBucketQty === 0 ? (
  <button
    onClick={() => {
  setFamilyBucketQty(1);
  addToCart("Family Bucket");
}}
    className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full"
  >
    Add To Cart
  </button>
) : (
  <div className="mt-6 flex items-center gap-4">
    <button
      onClick={() => setFamilyBucketQty(familyBucketQty - 1)}
      className="bg-red-600 text-white w-10 h-10 rounded-full"
    >
      -
    </button>

    <span className="font-bold text-black">
      {familyBucketQty}
    </span>

    <button
      onClick={() => {
  setFamilyBucketQty(familyBucketQty + 1);
  addToCart("Family Bucket");
}}
      className="bg-red-600 text-white w-10 h-10 rounded-full"
    >
      +
    </button>
  </div>
)}
              </div>
            </div>

            {/* Zinger */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:-translate-y-2 hover:scale-105 transition">
              <Image
                src="/zinger.jpg"
                alt="Zinger Burger"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl font-black uppercase tracking-tight text-black">
  Zinger Burger
</h3>
<p className="text-red-600 font-black text-2xl mt-2">
  €8.99
</p>

<p className="mt-3 text-black">
  Spicy chicken burger with fries.
</p>
               {zingerQty === 0 ? (
  <button
    onClick={() => {
      setZingerQty(1);
      addToCart("Zinger Burger");
    }}
    className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full"
  >
    Add To Cart
  </button>
) : (
  <div className="mt-6 flex items-center gap-4">
    <button
      onClick={() => setZingerQty(zingerQty - 1)}
      className="bg-red-600 text-white w-10 h-10 rounded-full"
    >
      -
    </button>

    <span className="font-bold text-black">
      {zingerQty}
    </span>

    <button
      onClick={() => {
        setZingerQty(zingerQty + 1);
        addToCart("Zinger Burger");
      }}
      className="bg-red-600 text-black w-10 h-10 rounded-full"
    >
      +
    </button>
  </div>
)}
          
              </div>
            </div>

            {/* Hot Wings */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:-translate-y-2 hover:scale-105 transition">
              <Image
                src="/chicken-new.jpg"
                alt="Hot Wings"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
               <h3 className="text-3xl font-black uppercase tracking-tight text-black">
  Hot wings
</h3>

                <p className="text-red-600 font-black text-2xl mt-2">

  €6.99

</p>

<p className="mt-3 text-black">

  Crispy spicy wings packed with flavour.

</p>

                {wingsQty === 0 ? (
  <button
    onClick={() => {
      setWingsQty(1);
      addToCart("Hot Wings");
    }}
    className="mt-6 bg-red-600 text-white px-5 py-2 rounded-full"
  >
    Add To Cart
  </button>
) : (
  <div className="mt-6 flex items-center gap-4">
    <button
      onClick={() => setWingsQty(wingsQty - 1)}
      className="bg-red-600 text-white w-10 h-10 rounded-full"
    >
      -
    </button>

    <span className="font-bold text-black">
      {wingsQty}
    </span>

    <button
      onClick={() => {
        setWingsQty(wingsQty + 1);
        addToCart("Hot Wings");
      }}
      className="bg-red-600 text-white w-10 h-10 rounded-full"
    >
      +
    </button>
  </div>
)}
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
            Built with Jp and CC
          </p>
        </div>
      </footer>
      <div
  onClick={() => setCartOpen(true)}
  className="fixed bottom-6 right-6 bg-white border border-gray-200 text-black px-6 py-4 rounded-3xl shadow-2xl hover:scale-105 transition cursor-pointer z-50 min-w-[220px]"
>
  <div className="font-bold">
    🛒 {cart.length} Items
  </div>

  <div className="text-sm">
    €{totalPrice.toFixed(2)}
  </div>
</div>
{cartOpen && (
  <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-6">

    <button
      onClick={() => setCartOpen(false)}
      className="text-red-600 font-black text-lg mb-6 hover:text-red-800"
    >
      ✕ Close
    </button>

    <h2 className="text-2xl font-black text-black mb-6">
  Your Cart
</h2>

    <div className="space-y-4">

  {familyBucketQty > 0 && (
  <div className="flex justify-between items-center">
    <span className="font-semibold text-black">
      🍗 Family Bucket x{familyBucketQty}
    </span>

    <span className="font-bold text-red-600">
      €{(familyBucketQty * 19.99).toFixed(2)}
    </span>
  </div>
)}

  {zingerQty > 0 && (
  <div className="flex justify-between items-center">
    <span className="font-semibold text-black">
      🍔 Zinger Burger x{zingerQty}
    </span>

    <span className="font-bold text-red-600">
      €{(zingerQty * 8.99).toFixed(2)}
    </span>
  </div>
)}

  {wingsQty > 0 && (
  <div className="flex justify-between items-center">
    <span className="font-semibold text-black">
      🔥 Hot Wings x{wingsQty}
    </span>

    <span className="font-bold text-red-600">
      €{(wingsQty * 6.99).toFixed(2)}
    </span>
  </div>
)}

</div>

    <div className="mt-6 border-t pt-4">
      <p className="font-black text-2xl text-red-600">
  Total: €{totalPrice.toFixed(2)}
</p>
    </div>
    <button
  className="w-full mt-6 bg-red-600 text-white py-3 rounded-2xl font-bold text-lg hover:bg-red-700 transition"
>
  Proceed to Checkout
</button>

  </div>
)}
    </main>
  );
}