import React, { useState } from "react";
import { useStoreContext } from "../../context/StoreContext";

const SellerLogin = () => {
  const { setIsSeller } = useStoreContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSeller(true);
  };
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full space-y-4 shadow-lg p-6"
        >
          <p className="text-2xl md:text-3xl font-medium text-center mb-10">
            Seller <span className="text-[var(--color-primary)]">Login</span>
          </p>
          <div>
            <p>Email</p>
            <input
              type="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-[var(--color-primary)]"
              required
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-[var(--color-primary)]"
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-5 py-2.5 bg-[var(--color-primary)] text-white cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerLogin;
