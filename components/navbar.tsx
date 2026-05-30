type NavbarProps = {
  cart: string[];
};

export default function Navbar({ cart }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="text-3xl font-bold text-red-600">
      KFC
    </h1>

    <div className="bg-black text-white px-4 py-3 rounded-xl min-w-[200px]">

      <div className="font-bold text-lg">
        🛒 {cart.length}
      </div>

      <p className="text-xs text-gray-300">
        Click to view cart
      </p>

    </div>

  </div>
</nav>
  );
}

