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
      className="
        overflow-hidden
        bg-white
        px-5
        py-12
        sm:px-6
        sm:py-14
        lg:px-12
        lg:py-16
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-[#343C4A]
              sm:text-4xl
              lg:text-5xl
            "
          >
            The program is compatible with
          </h2>
        </div>

        {/* Integration Slider */}
        <div className="relative mt-8 overflow-hidden sm:mt-10">
          {/* Fade Left */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-14
              bg-linear-to-r
              from-white
              to-transparent
              sm:w-20
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
              w-14
              bg-linear-to-l
              from-white
              to-transparent
              sm:w-20
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
                        w-32
                        shrink-0
                        flex-col
                        items-center
                        justify-center
                        gap-4
                        rounded-2xl
                        border
                        border-primary/10
                        bg-[#FAF9FC]
                        px-5
                        py-6
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#354FC4]/30
                        hover:bg-white
                        hover:shadow-[0_15px_40px_rgba(48,30,68,0.12)]
                        sm:w-36
                        sm:gap-5
                        sm:px-6
                        sm:py-7
                      "
                  >
                    {/* Icon Container */}
                    <div
                      className="
                          flex
                          size-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#F5F3FA]
                          shadow-sm
                          sm:size-16
                        "
                    >
                      <Icon
                        className="
                            size-7
                            sm:size-8
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
                          text-xs
                          font-semibold
                          text-primary
                          sm:text-sm
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
        <div className="mt-5 flex justify-center sm:mt-6">
          <p className="text-xs text-slate-400 sm:text-sm">
            More integrations coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
