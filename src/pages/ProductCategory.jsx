import React from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const { products } = useStoreContext();
  const { category } = useParams();
  const filteredItems = products?.filter(
    (product) => product.category.toLowerCase() == category,
  );
  return (
    <section className="my-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="relative inline-block text-2xl text-[var(--color-heading)] font-medium uppercase after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-[70px] after:h-[2px] after:bg-[var(--color-primary)]">
            {category}
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-3 min-[475px]:gap-x-8 min-[475px]:gap-y-4 sm:gap-3 md:gap-6 mt-8">
          {filteredItems?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
