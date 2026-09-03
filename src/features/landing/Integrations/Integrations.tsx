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
        pb-14
        pt-10
        sm:px-6
        sm:pb-16
        sm:pt-12
        lg:px-12
        lg:pb-20
        lg:pt-14
        xl:px-16
      "
    >
      <div className="mx-auto w-full max-w-380">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="
              text-3xl
              font-bold
              leading-[1.2]
              tracking-tight
              text-text-dark
              sm:text-4xl
              lg:text-[38px]
            "
          >
            The program is compatible with
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-7
              text-muted
              sm:text-base
              sm:leading-8
            "
          >
            Connect NexaERP with the tools and platforms your business already
            uses.
          </p>
        </div>

        {/* Integration Slider */}
        <div
          className="
            relative
            mt-8
            overflow-hidden
            sm:mt-10
          "
        >
          {/* Fade Left */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-12
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
              w-12
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
                        gap-3
                        rounded-[18px]
                        border
                        border-border-light
                        bg-surface-light
                        px-4
                        py-5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary/20
                        hover:bg-white
                        hover:shadow-hover
                        sm:w-36
                        sm:gap-4
                        sm:px-5
                        sm:py-6
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
                          border
                          border-border-light
                          bg-white
                          shadow-sm
                          transition-transform
                          duration-300
                          group-hover:scale-105
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
          <p
            className="
              text-xs
              font-medium
              text-muted
              sm:text-sm
            "
          >
            More integrations coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
