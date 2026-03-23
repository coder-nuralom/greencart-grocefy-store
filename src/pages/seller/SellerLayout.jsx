import React from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, CopyPlus, Logs, LayoutList } from "lucide-react";

const SellerLayout = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/seller", icon: <LayoutDashboard /> },
    { name: "Add Product", path: "/seller/add-product", icon: <CopyPlus /> },
    { name: "Product List", path: "/seller/product-list", icon: <Logs /> },
    { name: "Orders", path: "/seller/orders", icon: <LayoutList /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to={"/"}>
          <img
            className="h-9 cursor-pointer w-34 md:w-38"
            src={assets.logo}
            alt="Logo"
          />
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button className="border rounded-full text-sm px-4 py-1">
            Logout
          </button>
        </div>
      </div>

      {/* SideBar */}
      <div className="flex flex-1">
        <div className="md:w-64 w-16 border-r text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
          {sidebarLinks.map((item, index) => (
            <NavLink
              to={item.path}
              end={item.path === "/seller"}
              key={index}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 ${isActive ? "border-r-4 md:border-r-[6px] bg-[var(--color-primary)]/10 border-[var(--color-primary)] text-[var(--color-primary)]" : "hover:bg-gray-100/90 border-white text-gray-700"}`
              }
            >
              {item.icon}
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>
        {/* Main Content */}
        <div className="flex-1 pl-4 sm:pl-10 pt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
