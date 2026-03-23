import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative">
          <div>
            <img
              src={assets.bottom_banner_image}
              alt="Banner"
              className="hidden md:block w-full md:h-75 md:object-cover lg:h-auto"
            />
            <img
              src={assets.bottom_banner_image_sm}
              alt="Banner"
              className="md:hidden w-full sm:h-160 sm:object-center sm:object-bottom"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-18 lg:pr-24">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-6">
                Why We Are the Best?
              </h1>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 mt-2">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-9 md:w-11"
                  />
                  <div>
                    <h2 className="text-lg md:text-xl text-[var(--color-heading)] font-semibold">
                      {feature.title}
                    </h2>
                    <p className="text-gray-500/70 text-xs md:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
