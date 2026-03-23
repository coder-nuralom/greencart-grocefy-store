import React from "react";
import ProductCard from "./ProductCard";
import { useStoreContext } from "../context/StoreContext";

const BestSeller = () => {
  const { products } = useStoreContext();

  return (
    <section className="mt-14">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="text-[var(--color-heading)] text-2xl md:text-3xl font-medium">
            Best Sellers
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-3 min-[475px]:gap-x-6 min-[475px]:gap-y-4 sm:gap-3 md:gap-6 mt-5">
          {products
            ?.filter((product) => product.inStock)
            .slice(0, 10)
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
