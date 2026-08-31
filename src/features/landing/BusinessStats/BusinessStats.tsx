import {
  FaHandHoldingHeart,
  FaUsers,
  FaClipboardCheck,
  FaRocket,
} from "react-icons/fa6";

import image from "../../../assets/business-stats.png";

import { useRef } from "react";

const stats = [
  {
    value: "Full Support",
    title: (
      <>
        for
        <br />
        the Saudi Market
      </>
    ),
    icon: FaHandHoldingHeart,
  },
  {
    value: "550+",
    title: "Active Clients",
    icon: FaUsers,
  },
  {
    value: "15+",
    title: (
      <>
        Integrated Business
        <br />
        Units
      </>
    ),
    icon: FaClipboardCheck,
  },
  {
    value: "100%",
    title: (
      <>
        Cloud-Based
        <br />
        System
      </>
    ),
    icon: FaRocket,
  },
];

const BusinessStats = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="business-stats"
      className="
        relative
        isolate
        min-h-162.5
        overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src={image}
        alt="NexaERP business management"
        className="
          absolute
          inset-0
          -z-20
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Image Revealer */}
      <div className="home-image-revealer" />

      {/* Brand Gradient */}
      <div className="why-nexaerp-overlay absolute inset-0 -z-10" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-162.5
          w-full
          max-w-7xl
          items-center
          px-4
          py-16
          sm:px-6
          sm:py-20
          lg:px-8
        "
      >
        <div
          className="
            ml-auto
            w-full
            text-white
            sm:w-[70%]
            lg:w-[62%]
            xl:w-[64%]
          "
        >
          {/* Heading */}
          <h2
            className="
              w-full
              text-xl
              font-bold
              leading-[1.35]
              sm:text-2xl
              md:text-3xl
              lg:text-[36px]
              xl:text-[40px]
            "
          >
            <span className="block">
              Trusted by businesses to simplify operations and manage their
              business with NexaERP.
            </span>
          </h2>

          {/* Stats */}
          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-x-6
              gap-y-8
              sm:mt-12
              sm:gap-x-8
              lg:grid-cols-4
              lg:gap-x-6
              xl:gap-x-8
            "
          >
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.value}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      items-center
                      justify-center
                      text-white
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                    "
                  >
                    <Icon className="text-[44px]" />
                  </div>

                  {/* Value */}
                  <div
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      leading-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    {stat.value}
                  </div>

                  {/* Title */}
                  <div
                    className="
                      mt-1
                      max-w-44
                      text-xs
                      leading-6
                      text-white/90
                      sm:text-sm
                    "
                  >
                    {stat.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
