import React from "react";
import dashboard from "../../../assets/dashboard.png";

const Hero = () => {
  return (
    <section className="bg-primary px-8 pb-20 pt-32 text-white lg:px-16 xl:px-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-12">
        {/* Content */}
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Smart ERP System
            <br />
            to Manage Your
            <br />
            Business Efficiently
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 md:text-lg">
            Manage products, customers, suppliers, orders, purchases, inventory,
            and more — all from one powerful ERP platform.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/register"
              className="
                        rounded-full
                        bg-white
                        px-7
                        py-3
                        font-medium
                        text-primary
                        shadow-lg
                        transition-all
                        hover:bg-primary-light
                    "
            >
              Get Started
            </a>

            <a
              href="#solutions"
              className="
                        rounded-full
                        border
                        border-white/50
                        px-7
                        py-3
                        font-medium
                        text-white
                        transition-all
                        hover:bg-white/10
                    "
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Dashboard */}
        <div className="hidden lg:block lg:w-[48%]">
          <img
            src={dashboard}
            alt="NexaERP Dashboard"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
