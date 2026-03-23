import React from "react";
import { useStoreContext } from "../context/StoreContext";
import { Minus, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartItems = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, updateQuantity, removeFromCart, currency } =
    useStoreContext();
  return (
    <div className="border border-gray-300 p-4 bg-white rounded-xl shadow-lg transition-all duration-300 flex flex-col min-[575px]:flex-row items-center justify-between">
      <div className="image_area flex items-center w-full gap-4">
        <img
          onClick={() =>
            navigate(
              `/products/${product.category.toLowerCase()}/${product._id}`,
            )
          }
          src={product?.image[0]}
          alt={product?.name}
          className="w-16 h-16 min-[575px]:w-20 min-[575px]:h-20 object-cover object-center rounded-lg border-1 border-gray-300 flex-shrink-0 cursor-pointer"
        />
        <div>
          <h3
            onClick={() =>
              navigate(`/products/${product.category}/${product._id}`)
            }
            className="text-xl max-[421px]:text-base font-bold line-clamp-1 cursor-pointer"
          >
            {product?.name}
          </h3>
          <p className="text-lg max-[421px]:text-sm text-orange-400 font-semibold tracking-wide">
            {currency}
            {product?.price}
          </p>
        </div>
      </div>

      <div className="info_area flex items-center justify-between space-x-2 sm:space-x-4 w-full mt-3 sm:mt-0">
        <div className="border border-gray-800 rounded-full flex-items-center overflow-hidden">
          <button
            onClick={() => updateQuantity(product._id, product.quantity - 1)}
            className="text-gray-300 bg-gray-800 p-2 w-8 h-8 hover:bg-gray-700 transition duration-300 inline-flex items-center justify-center"
          >
            <Minus size={10} />
          </button>
          <span className="p-3 w-3 text-white text-base font-bold bg-gray-800">
            {product?.quantity}
          </span>
          <button
            onClick={() => updateQuantity(product._id, product.quantity + 1)}
            className="text-gray-300 bg-gray-800 p-2 w-8 h-8 hover:bg-gray-700 transition duration-300 inline-flex items-center justify-center"
          >
            <Plus size={10} />
          </button>
        </div>
        <p className="font-bold text-base tracking-wide text-center">
          {currency}
          {Math.floor(product?.price * product?.quantity)}
        </p>
        <button
          onClick={() => removeFromCart(product._id)}
          className="p-2 sm:p-3  bg-red-800/20 rounded-full hover:bg-red-800/40 transition duration-300 text-red-400 cursor-pointer"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
