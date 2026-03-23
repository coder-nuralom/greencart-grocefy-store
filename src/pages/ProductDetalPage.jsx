import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import ProductCard from "../components/ProductCard";

const ProductDetalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, currency, addToCart } = useStoreContext();

  const [thumbnail, setThumbnail] = useState(null);

  // Find current product
  const product = products?.find((item) => item._id === id);

  // Set thumbnail when product changes
  useEffect(() => {
    if (product) {
      setThumbnail(product.image[0]);
    }
  }, [product]);

  // Find related products (same category but exclude current product)
  const relatedProducts =
    product && products
      ? products.filter(
          (item) =>
            item.category === product.category && item._id !== product._id,
        )
      : [];

  return (
    product && (
      <section className="mt-15 mb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <p>
            <Link to={"/"}>Home</Link> /<Link to={"/products"}> Products</Link>/
            <Link to={`/category/${product.category.toLowerCase()}`}>
              {" "}
              {product.category}
            </Link>{" "}
            /<span className="text-indigo-500"> {product.name}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-16 mt-4">
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                {product.image.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setThumbnail(image)}
                    className="border max-w-25 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>

              <div className="border border-gray-500/30 max-w-150 rounded overflow-hidden">
                <img
                  src={thumbnail}
                  alt="Selected product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-sm w-full md:w-1/2">
              <h1 className="text-3xl font-medium">{product.name}</h1>

              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    className={`${index < Math.floor(product.rating) ? "fill-[var(--color-primary)] text-[var(--color-primary)]" : "text-gray-300"}`}
                  />
                ))}
                <p className="text-base ml-2">({product.rating})</p>
              </div>

              <div className="mt-6">
                <p className="text-gray-500/70 line-through">
                  MRP: {currency}
                  {product.price}
                </p>
                <p className="text-2xl font-medium">
                  MRP: {currency}
                  {product.offerPrice}
                </p>
                <span className="text-gray-500/70">
                  (inclusive of all taxes)
                </span>
              </div>

              <p className="text-base font-medium mt-6">About Product</p>
              <ul className="list-disc ml-4 text-gray-500/70">
                {product.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>

              <div className="flex items-center mt-10 gap-4 text-base">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                  }}
                  className="w-full py-3.5 cursor-pointer font-medium bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dull)] transition"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>

          {/* related productts */}
          <div className="mt-15">
            <div className="text-center">
              <h1 className="relative inline-block text-2xl text-[var(--color-heading)] font-medium uppercase after:content-[''] after:absolute after:left-[50%] after:-bottom-2 after:-translate-x-[50%] after:w-[90px] after:h-[2px] after:bg-[var(--color-primary)]">
                related Products
              </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-3 min-[475px]:gap-x-8 min-[475px]:gap-y-4 sm:gap-3 md:gap-6 mt-10">
              {relatedProducts?.slice(0, 10).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <div
              onClick={() =>
                navigate(`/category/${product.category.toLowerCase()}`)
              }
              className="text-center mt-13"
            >
              <button className="cursor-pointer px-12 py-2.5 border border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded">
                See More
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default ProductDetalPage;
