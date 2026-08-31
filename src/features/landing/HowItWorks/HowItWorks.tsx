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
        bg-[#F8FAFC]
        px-5
        pt-8
        pb-12
        sm:px-6
        sm:pt-10
        sm:pb-14
        lg:px-12
        lg:pt-12
        lg:pb-16
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="
              mb-2
              inline-block
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#354FC4]
              sm:text-sm
            "
          >
            How It Works
          </span>

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-primary
              sm:text-4xl
              lg:text-5xl
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
              leading-6
              text-slate-500
              sm:mt-4
              sm:text-base
              sm:leading-7
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
              top-9
              hidden
              h-px
              bg-linear-to-r
              from-[#354FC4]/20
              via-[#A83DFF]/50
              to-[#354FC4]/20
              lg:block
            "
          />

          <div
            className="
              grid
              grid-cols-1
              gap-7
              sm:gap-8
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
                        size-18
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-100
                        bg-white
                        shadow-md
                        transition-shadow
                        duration-300
                        group-hover:shadow-lg
                      "
                    >
                      <div
                        className="
                          flex
                          size-11
                          items-center
                          justify-center
                          rounded-full
                          bg-linear-to-br
                          from-[#354FC4]
                          to-[#A83DFF]
                          text-white
                        "
                      >
                        <Icon size={21} strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>

                  {/* Step Number */}
                  <span
                    className="
                      text-[11px]
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
                      mt-2
                      text-lg
                      font-semibold
                      text-primary
                      sm:text-xl
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
                      text-sm
                      leading-6
                      text-slate-500
                      sm:leading-7
                    "
                  >
                    {step.description}
                  </p>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="mt-4 flex justify-center lg:hidden">
                      <ArrowRight
                        size={18}
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
              py-3
              text-sm
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-primary-hover
              hover:shadow-lg
            "
          >
            Start Now
            <ArrowRight
              size={17}
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
