import dataProtectionIcon from "../../../assets/icons/data-protection.png";
import scalabilityIcon from "../../../assets/icons/scalability.png";
import efficiencyIcon from "../../../assets/icons/efficiency.png";
import customerServiceIcon from "../../../assets/icons/customer-service.png";
import maintenanceIcon from "../../../assets/icons/maintenance.png";
import integrationsIcon from "../../../assets/icons/integrations.png";

const advantages = [
  {
    title: "Data Protection",
    description:
      "Protect your business data with strong security and privacy standards.",
    icon: dataProtectionIcon,
  },
  {
    title: "Scalability",
    description:
      "Grow your business effortlessly with a system that adapts to your evolving needs.",
    icon: scalabilityIcon,
  },
  {
    title: "Higher Efficiency",
    description:
      "Streamline operations and boost productivity through a unified platform that reduces operational costs.",
    icon: efficiencyIcon,
  },
  {
    title: "Customer Service",
    description:
      "Get reliable support and continuous assistance to keep your business running efficiently.",
    icon: customerServiceIcon,
  },
  {
    title: "Maintenance",
    description:
      "Benefit from regular monitoring and continuous updates to keep your platform running efficiently.",
    icon: maintenanceIcon,
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect your favorite tools and systems to simplify management and enhance performance.",
    icon: integrationsIcon,
  },
];

const Advantages = () => {
  return (
    <section
      id="advantages"
      className="
        bg-white
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
            mb-8
            max-w-3xl
            text-center
            sm:mb-10
          "
        >
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
            Advantages of Choosing NexaERP
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-2xl
              text-sm
              leading-7
              text-muted
              sm:mt-4
              sm:text-base
              sm:leading-8
            "
          >
            Innovative solutions that support your goals and contribute to the
            sustainable growth of your business.
          </p>
        </div>

        {/* Advantages Grid */}
        <div
          className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="
                group
                flex
                min-w-0
                flex-col
                items-center
                rounded-[18px]
                border
                border-border-light
                bg-white
                px-5
                py-7
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary
                hover:bg-primary
                hover:shadow-hover
                sm:px-6
                sm:py-8
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-4
                  flex
                  size-18
                  shrink-0
                  items-center
                  justify-center
                  bg-[#E9E6F2]
                  transition-all
                  duration-300
                  group-hover:bg-white
                  [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]
                "
              >
                <img
                  src={advantage.icon}
                  alt={advantage.title}
                  className="
                    block
                    h-12
                    w-12
                    object-contain
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mb-2.5
                  text-base
                  font-semibold
                  leading-6
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:text-white
                  sm:text-lg
                "
              >
                {advantage.title}
              </h3>

              {/* Description */}
              <p
                className="
                  max-w-sm
                  text-[13px]
                  leading-6
                  text-muted
                  transition-colors
                  duration-300
                  group-hover:text-white/80
                  sm:text-sm
                  sm:leading-7
                "
              >
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
