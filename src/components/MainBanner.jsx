import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative">
          <img
            src={assets.main_banner_bg}
            alt="banner"
            className="w-full hidden md:block"
          />
          <img
            src={assets.main_banner_bg_sm}
            alt="banner"
            className="w-full max-h-[55vh] object-cover md:hidden"
          />
          <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center px-4 md:pl-18 lg:pl-24 z-10">
            <h1 className="text-[var(--color-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
              Freshness You Can Trust, Savings You will Love!
            </h1>
            <div className="mt-6 flex max-[375px]:flex-col items-center gap-x-4 max-[375px]:gap-y-3">
              <Link
                to={"/products"}
                className="px-7 md:px-9 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] text-white rounded cursor-pointer"
              >
                Shop Now
              </Link>
              <Link
                to={"/deals"}
                className="px-7 md:px-9 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] text-white rounded cursor-pointer"
              >
                Explore Deals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
