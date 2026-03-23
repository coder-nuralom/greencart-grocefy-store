import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { useStoreContext } from "../context/StoreContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { setShowLoginForm, searchTerm, setSearchTerm, cart, cartCount } =
    useStoreContext();
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <header className="relative sticky top-0 z-20 border-b border-gray-300 bg-white py-4">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <nav className="flex items-center justify-between transition-all">
          <NavLink to={"/"} onClick={() => setOpen(false)}>
            <img
              onClick={() => scrollTo(0, 0)}
              className="h-9 max-[375px]:h-8 max-[330px]:h-7"
              src={assets.logo}
              alt=""
            />
          </NavLink>

          <div className="hidden lg:flex lg:ml-0 xl:ml-35  items-center justify-center gap-8 ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">All Product</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 lg:gap-5">
            <div className="hidden xl:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
              <input
                className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="text-gray-400 cursor-pointer">
                <Search size={20} />
              </button>
            </div>

            <div
              onClick={() => navigate("/cart")}
              className="relative cursor-pointer"
            >
              <ShoppingCart />
              <button className="absolute -top-2 -right-3 text-xs text-white bg-[var(--color-primary)] w-[18px] h-[18px] rounded-full">
                {cartCount}
              </button>
            </div>
            <div
              onClick={() => navigate("/wishlist")}
              className="relative cursor-pointer"
            >
              <Heart />
              <button className="absolute -top-2 -right-3 text-xs text-white bg-[var(--color-primary)] w-[18px] h-[18px] rounded-full">
                3
              </button>
            </div>

            {!user ? (
              <button
                onClick={() => setShowLoginForm(true)}
                className="cursor-pointer px-8 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] transition text-white rounded-full"
              >
                Login
              </button>
            ) : (
              <div className="relative group">
                <img
                  src={assets.profile_icon}
                  alt=""
                  className="w-10 cursor-pointer"
                />
                <ul className="hidden group-hover:block absolute top-[100%] right-0  bg-white shadow-lg border border-gray-200 py-2.5 w-30 rounded-md text-sm z-90">
                  <li
                    onClick={() => navigate("/profile")}
                    className="p-1.5 pl-3 hover:bg-[var(--color-primary)] cursor-pointer"
                  >
                    Profile
                  </li>
                  <li
                    onClick={() => navigate("/my-orders")}
                    className="p-1.5 pl-3 hover:bg-[var(--color-primary)] cursor-pointer"
                  >
                    My Orders
                  </li>
                  <li
                    onClick={() => navigate("/")}
                    className="p-1.5 pl-3 hover:bg-[var(--color-primary)] cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Icons */}
          <div className="flex items-center max-[375px]:gap-5 gap-6 sm:gap-6 lg:hidden">
            <div
              onClick={() => navigate("/cart")}
              className="relative cursor-pointer"
            >
              <ShoppingCart className="max-[330px]:w-5 max:[330px]:h-5" />
              <button className="absolute -top-2 -right-3 text-xs text-white bg-[var(--color-primary)] w-[18px] h-[18px] rounded-full">
                {cartCount}
              </button>
            </div>
            <div className="relative cursor-pointer">
              <Heart className="max-[330px]:w-5 max:[330px]:h-5" />
              <button className="absolute -top-2 -right-3 text-xs text-white bg-[var(--color-primary)] w-[18px] h-[18px] rounded-full">
                3
              </button>
            </div>
            <button
              onClick={() => (open ? setOpen(false) : setOpen(true))}
              aria-label="Menu"
            >
              {/* Menu Icon  */}
              <Menu className="max-[330px]:w-5 max:[330px]:h-5" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-center gap-2 px-4 text-sm lg:hidden transition-all duration-200 ease-in-out text-center space-y-3 z-9999`}
          >
            <NavLink onClick={() => setOpen(false)} to="/" className="block">
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/products"
              className="block"
            >
              All Product
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/contact"
              className="block"
            >
              Contact
            </NavLink>
            {user && (
              <>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/profile"
                  className="block"
                >
                  Profile
                </NavLink>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/my-orders"
                  className="block"
                >
                  My Orders
                </NavLink>
              </>
            )}
            {user ? (
              <button
                onClick={() => {
                  (setOpen(false), navigate("/"));
                }}
                className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
