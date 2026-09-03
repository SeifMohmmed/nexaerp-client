import { useRef } from "react";
import { Check } from "lucide-react";

import image from "../../../assets/why-nexaerp.png";

import "./WhyNexaERP.css";

const WhyNexaERP = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    "Centralized Management",
    "Real-Time Business Data",
    "Integrated ERP Modules",
    "Built to Scale",
  ];

  return (
    <section
      ref={sectionRef}
      id="why-nexaerp"
      className="
        relative
        isolate
        min-h-140
        overflow-hidden
        sm:min-h-145
        lg:min-h-150
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

      {/* Overlay */}
      <div className="why-nexaerp-overlay absolute inset-0 -z-10" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-140
          w-full
          max-w-380
          items-center
          justify-end
          px-5
          py-10
          sm:min-h-145
          sm:px-6
          sm:py-12
          lg:min-h-150
          lg:px-12
          lg:py-14
          xl:px-16
        "
      >
        <div
          className="
            w-full
            max-w-xl
            text-white
          "
        >
          {/* Heading */}
          <h2
            className="
              text-2xl
              font-bold
              leading-tight
              sm:text-3xl
              sm:leading-[1.2]
              md:text-4xl
              lg:text-[42px]
            "
          >
            Everything Your Business Needs,
            <span className="mt-1 block text-[#A8B7FF]">In One Place</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-xl
              text-[13px]
              leading-6
              text-white/80
              sm:mt-5
              sm:text-sm
              sm:leading-7
              lg:text-base
            "
          >
            NexaERP connects your core business operations through one
            centralized platform, helping you manage your products, customers,
            suppliers, sales, purchasing, inventory, and invoices with ease.
          </p>

          {/* Benefits */}
          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-2.5
              sm:mt-6
              sm:grid-cols-2
              sm:gap-3
            "
          >
            {benefits.map((item) => (
              <div
                key={item}
                className="
                  flex
                  min-w-0
                  items-center
                  gap-2.5
                "
              >
                <span
                  className="
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-[#A8B7FF]
                    backdrop-blur-sm
                  "
                >
                  <Check size={16} strokeWidth={2.5} />
                </span>

                <span
                  className="
                    text-[13px]
                    leading-5
                    text-white/90
                    sm:text-sm
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 sm:mt-7">
            <a
              href="/register"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-lg
                bg-linear-to-r
                from-[#A83DFF]
                to-[#021E3A]
                px-6
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_35px_rgba(48,30,68,0.3)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(48,30,68,0.4)]
                sm:py-3
                sm:text-base
                lg:min-w-45
              "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNexaERP;
