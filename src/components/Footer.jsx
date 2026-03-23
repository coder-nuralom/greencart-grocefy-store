import React from "react";
import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)]/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
          <div>
            <img
              className="w-34 md:w-32"
              src={assets.logo}
              alt="dummyLogoColored"
            />
            <p className="max-w-[410px] mt-6">
              We deliver fresh groceries and snacks straight to your door.
              Trusted by thousands, we aim to make your shopping experience
              simple and affordable.
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-full lg:w-[45%] gap-5">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-base text-[var(--color-heading)] md:mb-5 mb-2">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} className="hover:underline transition">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
          Copyright {new Date().getFullYear()} ©{" "}
          <a href="https://prebuiltui.com">Grodicfy Store</a> All Right
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
