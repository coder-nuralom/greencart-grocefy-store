import React from "react";
import { categories } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="text-[var(--color-heading)] text-2xl md:text-3xl font-medium">
            Categories
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/category/${category.path.toLowerCase()}`);
              }}
              className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
              style={{ backgroundColor: category.bgColor }}
            >
              <img
                src={category.image}
                alt=""
                className="transform group-hover:scale-105 transition max-w-28"
              />
              <p className="text-sm font-medium">{category.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
