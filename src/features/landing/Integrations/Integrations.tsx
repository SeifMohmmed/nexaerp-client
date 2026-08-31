import {
  SiStripe,
  SiPaypal,
  SiShopify,
  SiWoocommerce,
  SiQuickbooks,
  SiGoogle,
  SiDiscord,
  SiZapier,
} from "react-icons/si";

import "./Integrations.css";

const integrations = [
  {
    name: "Stripe",
    icon: SiStripe,
    color: "#635BFF",
  },
  {
    name: "PayPal",
    icon: SiPaypal,
    color: "#003087",
  },
  {
    name: "Shopify",
    icon: SiShopify,
    color: "#96BF48",
  },
  {
    name: "WooCommerce",
    icon: SiWoocommerce,
    color: "#96588A",
  },
  {
    name: "QuickBooks",
    icon: SiQuickbooks,
    color: "#2CA01C",
  },
  {
    name: "Google Workspace",
    icon: SiGoogle,
    color: "#4285F4",
  },
  {
    name: "Discord",
    icon: SiDiscord,
    color: "#5865F2",
  },
  {
    name: "Zapier",
    icon: SiZapier,
    color: "#FF4A00",
  },
];

const Integrations = () => {
  return (
    <section
      id="integrations"
      className="overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Heading */}
          <div className="max-w-3xl">
            <span
              className="
                mb-4
                inline-block
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#354FC4]
              "
            >
              App Integrations
            </span>

            <h2
              className="
                text-4xl
                font-bold
                leading-tight
                text-primary
                sm:text-5xl
                lg:text-6xl
              "
            >
              Connect NexaERP with
              <span
                className="
                  block
                  bg-linear-to-r
                  from-[#301E44]
                  to-[#354FC4]
                  bg-clip-text
                  text-transparent
                "
              >
                the tools you use.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-slate-500
                sm:text-lg
              "
            >
              Connect your business workflows with the platforms and services
              you already rely on.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#F3EFF7]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-primary
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-primary
              hover:text-white
              hover:shadow-[0_10px_30px_rgba(48,30,68,0.18)]
            "
          >
            Explore Integrations
          </a>
        </div>

        {/* Integration Slider */}
        <div className="relative mt-16 overflow-hidden">
          {/* Fade Left */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-20
              bg-linear-to-r
              from-white
              to-transparent
            "
          />

          {/* Fade Right */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-20
              bg-linear-to-l
              from-white
              to-transparent
            "
          />

          {/* Auto Scrolling Track */}
          <div className="integration-slider">
            <div className="integration-track">
              {[...integrations, ...integrations].map((integration, index) => {
                const Icon = integration.icon;

                return (
                  <div
                    key={`${integration.name}-${index}`}
                    className="
                        group
                        flex
                        w-37.5
                        shrink-0
                        flex-col
                        items-center
                        justify-center
                        gap-5
                        rounded-2xl
                        border
                        border-primary/10
                        bg-[#FAF9FC]
                        px-7
                        py-8
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#354FC4]/30
                        hover:bg-white
                        hover:shadow-[0_15px_40px_rgba(48,30,68,0.12)]
                      "
                  >
                    {/* Icon Container */}
                    <div
                      className="
                          flex
                          size-16
                          items-center
                          justify-center
                          rounded-xl
                          bg-white
                          shadow-sm
                          transition-all
                          duration-300
                          group-hover:scale-105
                          group-hover:shadow-md
                        "
                    >
                      <Icon
                        className="
                            size-8
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        style={{
                          color: integration.color,
                        }}
                      />
                    </div>

                    {/* Name */}
                    <span
                      className="
                          whitespace-nowrap
                          text-sm
                          font-semibold
                          text-primary
                        "
                    >
                      {integration.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 flex items-center justify-center">
          <p className="text-sm text-slate-400">
            More integrations coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
