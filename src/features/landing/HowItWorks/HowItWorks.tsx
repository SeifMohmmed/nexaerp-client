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
      className="bg-[#F8FAFC] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="
              mb-3
              inline-block
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#354FC4]
            "
          >
            How It Works
          </span>

          <h2
            className="
              text-4xl
              font-bold
              leading-tight
              text-primary
              sm:text-5xl
            "
          >
            Get Started With NexaERP
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-500
              sm:text-lg
            "
          >
            Start managing your business with a simple and streamlined setup
            process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting Line */}
          <div
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-10
              hidden
              h-px
              bg-linear-to-r
              from-[#354FC4]/20
              via-[#A83DFF]/50
              to-[#354FC4]/20
              lg:block
            "
          />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
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
                  <div className="relative z-10 mx-auto mb-7">
                    <div
                      className="
                        mx-auto
                        flex
                        size-20
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white
                        bg-white
                        shadow-lg
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:shadow-xl
                      "
                    >
                      <div
                        className="
                          flex
                          size-12
                          items-center
                          justify-center
                          rounded-full
                          bg-linear-to-br
                          from-[#354FC4]
                          to-[#A83DFF]
                          text-white
                        "
                      >
                        <Icon size={23} strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>

                  {/* Step Number */}
                  <span
                    className="
                      text-xs
                      font-bold
                      tracking-[0.2em]
                      text-[#354FC4]
                    "
                  >
                    STEP {step.number}
                  </span>

                  {/* Title */}
                  <h3
                    className="
                      mt-3
                      text-xl
                      font-semibold
                      text-primary
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mx-auto
                      mt-3
                      max-w-sm
                      text-sm
                      leading-7
                      text-slate-500
                    "
                  >
                    {step.description}
                  </p>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div
                      className="
                        mt-7
                        flex
                        justify-center
                        lg:hidden
                      "
                    >
                      <ArrowRight
                        size={20}
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
        <div className="mt-14 flex justify-center">
          <a
            href="/register"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-primary
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-primary-hover
              hover:shadow-xl
            "
          >
            Start Now
            <ArrowRight
              size={18}
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
