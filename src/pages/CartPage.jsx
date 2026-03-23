import React, { useState } from "react";
import { useStoreContext } from "../context/StoreContext";
import CartItems from "../components/CartItems";
import EmptyCart from "../components/EmptyCart";
import { dummyAddress } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, currency } = useStoreContext();
  const [showAddress, setShowAddress] = useState(false);
  const [addresses, setAddresses] = useState(dummyAddress);
  const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
  const [paymentOption, setPaymentOption] = useState("COD");
  return (
    <div className="my-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl font-medium mb-12">
          Shopping Cart{" "}
          <span className="text-sm text-indigo-500">{cart?.length} Items</span>
        </h1>
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="col-span-1 lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <CartItems key={item.id} product={item} />
              ))}
            </div>

            <div className="col-span-1 w-full h-fit bg-gray-100/40 p-5 max-md:mt-1 border border-gray-300/70 lg:sticky lg:top-40">
              <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
              <hr className="border-gray-300 my-5" />

              <div className="mb-6">
                <p className="text-sm font-medium uppercase">
                  Delivery Address
                </p>
                <div className="relative flex justify-between items-start mt-2">
                  <p className="text-gray-500">
                    {selectedAddress
                      ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                      : "No address found"}
                  </p>
                  <button
                    onClick={() => setShowAddress(!showAddress)}
                    className="text-[var(--color-primary-dull)] hover:underline cursor-pointer"
                  >
                    Change
                  </button>
                  {showAddress && (
                    <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                      {addresses.map((address, index) => (
                        <p
                          key={index}
                          onClick={() => {
                            setSelectedAddress(address);
                            setShowAddress(!showAddress);
                          }}
                          className="text-gray-500 p-2 hover:bg-gray-100"
                        >
                          {address.street}, {address.city}, {address.state},{" "}
                          {address.country}
                        </p>
                      ))}
                      <p
                        onClick={() => navigate("/add-address")}
                        className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10"
                      >
                        Add address
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-sm font-medium uppercase mt-6">
                  Payment Method
                </p>

                <select
                  onChange={(e) => setPaymentOption(e.target.value)}
                  className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
                >
                  <option value="COD">Cash On Delivery</option>
                  <option value="Online">Online Payment</option>
                </select>
              </div>

              <hr className="border-gray-300" />

              <div className="text-gray-500 mt-4 space-y-2">
                <p className="flex justify-between">
                  <span>Price</span>
                  <span>
                    {currency}
                    {cartTotal}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span className="text-green-600">Free</span>
                </p>
                <p className="flex justify-between">
                  <span>Tax (2%)</span>
                  <span>
                    {currency}
                    {(cartTotal * 2) / 100}
                  </span>
                </p>
                <p className="flex justify-between text-lg font-medium mt-3">
                  <span>Total Amount:</span>
                  <span>
                    {currency}
                    {cartTotal + (cartTotal * 2) / 100}
                  </span>
                </p>
              </div>

              <button className="w-full py-3 mt-6 cursor-pointer bg-[var(--color-primary-dull)] text-white font-medium hover:bg-[var(--color-primary)] transition">
                {paymentOption === "COD"
                  ? "Place Order"
                  : "Proceed to Checkout"}
              </button>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default CartPage;
