import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import shopCoLogo from "../../assets/SHOP.COlogo.png";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <img src={shopCoLogo} alt="SHOP.CO" className="w-28" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center text-sm font-medium">
          <div className="relative">
            <select className="bg-white border-none text-sm cursor-pointer">
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </div>
          <a href="#" className="hover:text-black">On Sale</a>
          <a href="#" className="hover:text-black">New Arrivals</a>
          <a href="#" className="hover:text-black">Brands</a>
        </nav>

        {/* Search + Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full w-64">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </div>
          <FiShoppingCart className="text-xl cursor-pointer" />
          <FiUser className="text-xl cursor-pointer" />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-center text-sm font-medium">
          <select className="bg-white border p-2 rounded w-full max-w-xs mx-auto">
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
          <a href="#" className="block">On Sale</a>
          <a href="#" className="block">New Arrivals</a>
          <a href="#" className="block">Brands</a>
          <div className="flex justify-center gap-6 pt-4">
            <FiShoppingCart className="text-xl" />
            <FiUser className="text-xl" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
