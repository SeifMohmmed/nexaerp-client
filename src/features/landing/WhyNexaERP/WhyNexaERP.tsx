import { useRef } from "react";

import { Check } from "lucide-react";

import image from "../../../assets/why-nexaerp.png";

import "./WhyNexaERP.css";

const WhyNexaERP = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="why-nexaerp"
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
          justify-end
          px-5
          py-10
          sm:px-6
          sm:py-12
          lg:px-8
          lg:py-14
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
              text-3xl
              font-bold
              leading-tight
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
            "
          >
            Everything Your Business Needs,
            <span className="block text-[#A8B7FF]">In One Place</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-white/80
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
          >
            NexaERP connects your core business operations through one
            centralized platform, helping you manage your products, customers,
            suppliers, sales, purchasing, inventory, and invoices with ease.
          </p>

          {/* Benefits */}
          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-3
              sm:mt-7
              sm:grid-cols-2
              sm:gap-4
            "
          >
            {[
              "Centralized Management",
              "Real-Time Business Data",
              "Integrated ERP Modules",
              "Built to Scale",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    flex
                    size-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-[#A8B7FF]
                    backdrop-blur-sm
                  "
                >
                  <Check size={18} strokeWidth={2.5} />
                </span>

                <span className="text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-7 sm:mt-8">
            <a
              href="/register"
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-lg
                bg-linear-to-r
                from-[#A83DFF]
                to-[#021E3A]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_35px_rgba(48,30,68,0.3)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(48,30,68,0.4)]
                sm:py-3.5
                sm:text-base
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
