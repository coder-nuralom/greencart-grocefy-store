import React, { useState } from "react";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { useStoreContext } from "../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { currency, addToCart, updateQuantity, cart } = useStoreContext();
  const existingItem = cart.find((item) => item._id === product._id);

  return (
    <div className="border border-gray-500/20 rounded-md md:px-4 px-3 pt-2 pb-3 bg-white">
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          onClick={() =>
            navigate(`/products/${product.category.toLowerCase()}/${product._id}`)
          }
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product.image[0]}
          alt={product.name}
        />
      </div>
      <div className="text-gray-500/60 text-sm">
        <p>{product.category}</p>
        <p
          onClick={() =>
            navigate(`/products/${product.category.toLowerCase()}/${product._id}`)
          }
          className="text-gray-700 font-medium text-lg truncate w-full cursor-pointer"
        >
          {product.name}
        </p>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className={`${index < Math.floor(product.rating) ? "fill-[var(--color-primary)] text-[var(--color-primary)]" : "text-gray-300"}`}
            />
          ))}
          <p>({product.rating})</p>
        </div>
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-[var(--color-primary)]">
            {currency}
            {product.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              {currency}
              {product.price}
            </span>
          </p>
          <div className="text-[var(--color-primary)]">
            {!existingItem ? (
              <button
                className="flex items-center justify-center gap-1 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/40 md:w-[80px] w-[64px] h-[34px] rounded text-[var(--color-primary)] font-medium cursor-pointer"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart size={15} />
                Add
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-[var(--color-primary)]/25 rounded select-none">
                <button
                  onClick={() => updateQuantity(product._id, existingItem.quantity - 1)}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  <Minus size={11} />
                </button>
                <span className="w-5 text-center">{existingItem.quantity}</span>
                <button
                  onClick={() => updateQuantity(product._id, existingItem.quantity + 1)}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  <Plus size={11} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
