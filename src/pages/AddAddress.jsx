import React, { useState } from "react";
import { assets } from "../assets/assets";

// input Field Component
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-[var(--color-primary)] transition"
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  return (
    <div className="my-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl md:text-3xl text-gray-500">
          Add Shipping{" "}
          <span className="font-semibold text-[var(--color-primary)]">
            Address
          </span>
        </h1>

        <div className="mt-10 flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="">
            <form className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  handleChange={handleChange}
                  address={address}
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <InputField
                  handleChange={handleChange}
                  address={address}
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <InputField
                handleChange={handleChange}
                address={address}
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="street"
                type="text"
                placeholder="Street"
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  handleChange={handleChange}
                  address={address}
                  name="city"
                  type="text"
                  placeholder="City"
                />
                <InputField
                  handleChange={handleChange}
                  address={address}
                  name="state"
                  type="text"
                  placeholder="State"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  handleChange={handleChange}
                  address={address}
                  name="zipcode"
                  type="number"
                  placeholder="Zip Code"
                />
                <InputField
                  handleChange={handleChange}
                  address={address}
                  name="country"
                  type="text"
                  placeholder="Country"
                />
              </div>

              <InputField
                handleChange={handleChange}
                address={address}
                name="phone"
                type="text"
                placeholder="Phone"
              />

              <button className="w-full mt-6 bg-[var(--color-primary)] text-white py-3 hover:bg-[var(--color-primary-dull)] transition cursor-pointer uppercase">
                Save Address
              </button>
            </form>
          </div>
          <img
            src={assets.add_address_iamge}
            alt="Add Address"
            className="xl:mr-16 mb-16 md:h-70 md:w-70 md:ml-10 lg:ml-0 lg:h-auto lg:w-auto hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
