type NavbarProps = {
  cart: string[];
};

export default function Navbar({ cart }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-red-600">
          KFC
        </h1>

        <div className="bg-black text-white px-4 py-3 rounded-xl min-w-[200px]">

          <div className="font-bold text-lg">
            🛒 {cart.length}
          </div>

          {cart.length > 0 && (
            <div className="text-sm mt-2 space-y-1">
              {cart.map((item, index) => (
                <div key={index}>
                  • {item}
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </nav>
  );
}

