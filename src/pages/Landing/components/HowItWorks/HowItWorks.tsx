import { ArrowRight, Settings2, UserPlus, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Create your NexaERP account and get your business workspace ready in just a few simple steps.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Configure Your Business",
    description:
      "Set up your business information and configure the ERP modules that match your business needs.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Manage & Grow",
    description:
      "Manage your daily operations from one platform and use real-time insights to grow your business.",
    icon: BarChart3,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="
        bg-surface-light
        px-5
        pb-12
        pt-6
        sm:px-6
        sm:pb-14
        sm:pt-8
        lg:px-12
        lg:pb-16
        lg:pt-10
        xl:px-16
      "
    >
      <div className="mx-auto w-full max-w-380">
        {/* Section Header */}
        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              mb-2
              inline-block
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#354FC4]
              sm:text-xs
            "
          >
            How It Works
          </span>

          <h2
            className="
              text-3xl
              font-bold
              leading-[1.2]
              text-primary
              sm:text-4xl
              lg:text-[38px]
            "
          >
            Get Started With NexaERP
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-7
              text-muted
              sm:mt-4
              sm:text-base
              sm:leading-8
            "
          >
            Start managing your business with a simple and streamlined setup
            process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-8 sm:mt-10">
          {/* Connecting Line */}
          <div
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-8
              hidden
              h-px
              bg-[#D9D5E4]
              lg:block
            "
          />

          <div
            className="
              grid
              grid-cols-1
              gap-8
              sm:gap-9
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    text-center
                  "
                >
                  {/* Step Icon */}
                  <div className="relative z-10 mx-auto mb-4">
                    <div
                      className="
                        mx-auto
                        flex
                        size-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border
                        bg-white
                        shadow-[0_4px_16px_rgba(49,33,78,0.08)]
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:shadow-[0_8px_22px_rgba(49,33,78,0.12)]
                      "
                    >
                      <div
                        className="
                          flex
                          size-10
                          items-center
                          justify-center
                          rounded-full
                          bg-primary
                          text-white
                          transition-colors
                          duration-300
                          group-hover:bg-primary-hover
                        "
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>

                  {/* Step Number */}
                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.18em]
                      text-[#354FC4]
                      sm:text-[11px]
                    "
                  >
                    STEP {step.number}
                  </span>

                  {/* Title */}
                  <h3
                    className="
                      mt-1.5
                      text-base
                      font-semibold
                      leading-6
                      text-primary
                      sm:text-lg
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mx-auto
                      mt-2
                      max-w-sm
                      text-[13px]
                      leading-6
                      text-muted
                      sm:text-sm
                      sm:leading-7
                    "
                  >
                    {step.description}
                  </p>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div
                      className="
                        mt-4
                        flex
                        justify-center
                        lg:hidden
                      "
                    >
                      <ArrowRight
                        size={18}
                        strokeWidth={1.8}
                        className="rotate-90 text-[#354FC4]/50"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="/register"
            className="
              group
              inline-flex
              items-center
              gap-2.5
              rounded-full
              bg-primary
              px-6
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-primary-hover
              hover:shadow-lg
              sm:px-7
              sm:py-3
            "
          >
            Start Now
            <ArrowRight
              size={17}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
