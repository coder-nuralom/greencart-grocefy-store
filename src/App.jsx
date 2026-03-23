import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AllProducts from "./pages/AllProducts";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";
import ProductCategory from "./pages/ProductCategory";
import ProductDetalPage from "./pages/ProductDetalPage";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import SellerLogin from "./components/seller/SellerLogin";
import { useStoreContext } from "./context/StoreContext";
import SellerLayout from "./pages/seller/SellerLayout";
import Dashboard from "./pages/seller/Dashboard";
import ProductList from "./pages/seller/ProductList";
import AddProduct from "./pages/seller/AddProduct";
import Orders from "./pages/seller/Orders";

const App = () => {
  const { isSeller } = useStoreContext();
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div className="flex flex-col text-default min-h-screen text-gray-700 bg-white">
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      {isSellerPath ? null : <Navbar />}
      <Login />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/category/:category" element={<ProductCategory />} />
          <Route
            path="/products/:category/:id"
            element={<ProductDetalPage />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={isSeller ? <Dashboard /> : null} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </main>
      {isSellerPath ? null : <Footer />}
    </div>
  );
};

export default App;
